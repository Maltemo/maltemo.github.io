const fs = require("node:fs");
const path = require("node:path");
const { blog_posts_list, write_up_list } = require("./assets/js/list");

console.log("[·] Starting RSS feed generation...");

const config = {
  title: "maltemo.github.io",
  description: "maltemo.github.io",
  link: "https://maltemo.github.io",
  blogDirectoryUrl: "https://maltemo.github.io/blog-posts",
  blogDirectoryPath: path.join(__dirname, "blog-posts"),
  feedOutput: path.join(__dirname, "feed.xml"),
};

const createFeedTemplate = (
  posts = ``,
  now = new Date(),
  title = config.title,
  description = config.description,
  link = config.link
) => `
<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>
      <![CDATA[${title}]]>
    </title>
    <description>
      <![CDATA[${description}]]>
    </description>
    <link>${link}</link>
    <generator>RSS for Node</generator>
    <lastBuildDate>${now.toUTCString()}</lastBuildDate>
    <atom:link href="${link}/feed.xml" rel="self" type="application/rss+xml" />
    ${posts}
  </channel>
</rss>
`;

const createPostTemplate = (title, link, pubDate) => `
    <item>
      <title>
        <![CDATA[${title}]]>
      </title>
      <link>${link}</link>
      <pubDate>${pubDate}</pubDate>
    </item>
`;

const write_ups_rss = write_up_list.map((write_up) =>
  createPostTemplate(
    write_up.title,
    `${config.blogDirectoryUrl}/${
      write_up.ctf
    }_${write_up.date.getFullYear()}_${write_up.challenge_type}_${write_up.title
      .split(" ")
      .join("_")
      .replace(/[^\w\s]/gi, "")}.html`,
    write_up.date.toUTCString()
  )
);

const blog_posts_rss = blog_posts_list.map((blog_post) =>
  createPostTemplate(
    blog_post.title,
    `${config.blogDirectoryUrl}/${blog_post.url}`,
    blog_post.date.toUTCString()
  )
);

fs.promises
  .writeFile(
    config.feedOutput,
    createFeedTemplate([...write_ups_rss, ...blog_posts_rss])
  )
  .then((_) => console.log(`[+] new feed created at ${config.feedOutput}`))
  .catch((e) => console.error("[!] oupsi, something went wrong!", e));

