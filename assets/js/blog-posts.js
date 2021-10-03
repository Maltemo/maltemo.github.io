/* Global variables */
var table_tbody_tag = document.getElementById("tab_body_blog_posts");
var select_tag = document.getElementById("sort_options");

/* Sort functions */
let sort_asc_date = (w1, w2) => {
    return w1.date > w2.date
}
let sort_desc_date = (w1, w2) => {
    return w1.date < w2.date
}

list_sort_func = [
    sort_desc_date,
    sort_asc_date,
]

/* Display functions */
let display_blog_posts_tab = (sort_function) => {
    blog_posts_list
    .sort(sort_function)
    .forEach((blog_post) => {
        let tr_tag = document.createElement("tr");
        let td_title_tag = create_content_td(
            create_link(
                blog_post.title,
                `blog-posts/${blog_post.url}`,
                "wu_link"
            )
        );
        let td_release_date_tag = create_text_td(`${blog_post.date.getFullYear()}/${blog_post.date.getMonth()}/${blog_post.date.getDate()}`);

        tr_tag.appendChild(td_title_tag);
        tr_tag.appendChild(td_release_date_tag);
        table_tbody_tag.appendChild(tr_tag);
    });
}

display_blog_posts_tab(sort_desc_date)
