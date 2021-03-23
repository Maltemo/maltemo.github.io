/* Global variables */
var ul_tag = document.getElementById("write_ups")
var select_tag = document.getElementById("sort_options")

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
let display_write_ups = (sort_function) => {
    write_up_list
    .sort(sort_function)
    .forEach((write_up) => {
        let li_tag = document.createElement("li");
        let a_tag = create_link(
            `[${write_up.challenge_type}] ${write_up.title} (${write_up.date.getFullYear()}/${write_up.date.getMonth()}/${write_up.date.getDate()})`,
            `write-ups/${write_up.ctf}_${write_up.date.getFullYear()}_${write_up.challenge_type}_${write_up.title.split(" ").join("_").replace(/[^\w\s]/gi,'')}.html`,
            "wu_link"
        )
        li_tag.appendChild(a_tag)
        ul_tag.appendChild(li_tag)
    });
}

/* Listener */
select_tag.addEventListener("change", function(){
    ul_tag.innerHTML = ""
    display_write_ups(list_sort_func[this.value])
})

/* Main */
display_write_ups(sort_alphabeticaly_challenge_type)
