/* Global variables */
var table_tbody_tag = document.getElementById("tab_body_write_ups");
var select_tag = document.getElementById("sort_options");

/* Sort functions */
let sort_alphabeticaly_challenge_type = (w1, w2) => {
        return w1.challenge_type > w2.challenge_type
}
let sort_asc_date = (w1, w2) => {
    return w1.date > w2.date
}
let sort_desc_date = (w1, w2) => {
    return w1.date < w2.date
}
list_sort_func = [
    sort_alphabeticaly_challenge_type,
    sort_desc_date,
    sort_asc_date,
]

/* Display functions */
let display_write_ups_tab = (sort_function) => {
    write_up_list
    .sort(sort_function)
    .forEach((write_up) => {
        let tr_tag = document.createElement("tr");
        let td_category_tag = create_text_td(write_up.challenge_type);
        let td_ctf = create_text_td(write_up.ctf);
        let td_title_tag = create_content_td(
            create_link(
                `${write_up.title}`,
                `write-ups/${write_up.ctf}_${write_up.date.getFullYear()}_${write_up.challenge_type}_${write_up.title.split(" ").join("_").replace(/[^\w\s]/gi,'')}.html`,
                "wu_link"
            )
        );
        let td_release_date_tag = create_text_td(`${write_up.date.getFullYear()}/${write_up.date.getMonth()+1}/${write_up.date.getDate()}`);

        tr_tag.appendChild(td_category_tag);
        tr_tag.appendChild(td_ctf);
        tr_tag.appendChild(td_title_tag);
        tr_tag.appendChild(td_release_date_tag);
        table_tbody_tag.appendChild(tr_tag);
    });
}

/* Listener */
select_tag.addEventListener("change", function(){
    table_tbody_tag.innerHTML = ""
    display_write_ups_tab(list_sort_func[this.value])
})

/* Main */
display_write_ups_tab(sort_alphabeticaly_challenge_type)
