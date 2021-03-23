/* Element creation functions */
var create_link = (inner_text, link, class_name) => {
    let a_tag = document.createElement("a");

    a_tag.appendChild(document.createTextNode(inner_text))
    a_tag.classList.add(class_name)
    a_tag.href = link

    return a_tag
}
