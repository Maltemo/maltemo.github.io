import json
import sys
import re

from datetime import date, datetime, timezone
from enum import Enum
from pathlib import Path


class PostCategories(Enum):
    WRITE_UPS = 1
    BLOG_POSTS = 2


CONFIG = {
    "title": "maltemo.github.io",
    "description": "maltemo.github.io",
    "link": "https://maltemo.github.io",
    "blog_directory_url": "https://maltemo.github.io/blog-posts",
    "writeup_directory_url": "https://maltemo.github.io/write-ups",
    "feed_output": Path.cwd() / "feed.xml",
}


def get_posts():
    post_list = Path("./assets/js/list.js")

    if not post_list.exists():
        print("Couldn’t find the list of blog posts and articles")
        sys.exit(1)

    # Doing dirty tricks to extract list from js file. Do not reproduce at home.
    with post_list.open() as post_list_file:
        data = post_list_file.read()
        write_up_list_raw = data.split("=")[1].strip().split(";")[0]
        blog_post_list_raw = data.split("=")[2].strip().split(";")[0]

        # Extract every js date
        unique_dates_string = set(re.findall(r"new Date\(\d+,\d+,\d+\)", write_up_list_raw))
        unique_dates_string.update(re.findall(r"new Date\(\d+,\d+,\d+\)", blog_post_list_raw))

        # Transform them into an UTC date format
        js_date_to_utc_dates = dict()
        for _date in unique_dates_string:
            year, month, day = _date.removeprefix("new Date(").removesuffix(")").split(",")
            python_date = date(int(year), int(month)+1, int(day))
            dt = datetime.combine(python_date, datetime.min.time(), tzinfo=timezone.utc)
            js_date_to_utc_dates[_date] = dt.strftime("\"%a, %d %b %Y %H:%M:%S %Z\"")

        # Replace the js date strings to UTC date format quoted (yes I’m ashamed to do this)
        for initial_date, utc_date in js_date_to_utc_dates.items():
            write_up_list_raw = write_up_list_raw.replace(initial_date, utc_date)
            blog_post_list_raw = blog_post_list_raw.replace(initial_date, utc_date)

        # Finally got data as json
        write_up_list = json.loads(write_up_list_raw)
        blog_post_list = json.loads(blog_post_list_raw)

        return write_up_list, blog_post_list


def create_post_template(title, link, publication_date):
    return f"""<item>
        <title>
            <![CDATA[{title}]]>
        </title>
        <link>{link}</link>
        <pubDate>{publication_date}</pubDate>
    </item>
    """


def create_feed_template(
        posts, now=datetime.now(), title=CONFIG["title"], description=CONFIG["description"], link=CONFIG["link"]
):
    return f"""<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
    <channel>
        <title>
            <![CDATA[{title}]]>
        </title>
        <description>
            <![CDATA[{description}]]>
        </description>
        <link>{link}</link>
        <generator>RSS for Node</generator>
        <lastBuildDate>{now.strftime('"%a, %d %b %Y %H:%M:%S %Z"')}</lastBuildDate>
        <atom:link href="{link}/feed.xml" rel="self" type="application/rss+xml" />
        {posts}
    </channel>
</rss>
    """


def generate_link(post, post_type):
    link = ""

    # Write-up category
    if post_type == PostCategories.WRITE_UPS:
        link = CONFIG["writeup_directory_url"] + "/"
        year = re.search(r"\d{4}", post["date"])[0]
        # ASCII flag needed to avoid matching emoji or other unicode chars
        title_formatted = re.sub(r"[^\w\s]", "", "_".join(post["title"].split(" ")), flags=re.ASCII)
        link += "_".join([
            post["ctf"],
            year,
            post["challenge_type"],
            title_formatted
        ]) + ".html"

    # Blog post category
    elif post_type == PostCategories.BLOG_POSTS:
        link = CONFIG["blog_directory_url"] + "/"
        link += post["url"]

    return link


if __name__ == '__main__':
    print("[+] Extracting write-ups and blog posts")
    write_up_list, blog_post_list = get_posts()

    print("[+] Transforming data to XML")
    write_up_list_as_strings = list(map((lambda write_up: create_post_template(
        write_up["title"],
        generate_link(write_up, PostCategories.WRITE_UPS),
        write_up["date"]
    )), write_up_list))

    blog_post_list_as_strings = list(map((lambda blog_post: create_post_template(
        blog_post["title"],
        generate_link(blog_post, PostCategories.BLOG_POSTS),
        blog_post["date"]
    )), blog_post_list))

    print("[+] Updating feed.xml file")
    with CONFIG["feed_output"].open("w") as _file:
        _file.write(
            create_feed_template("".join(write_up_list_as_strings + blog_post_list_as_strings), datetime.now())
        )
