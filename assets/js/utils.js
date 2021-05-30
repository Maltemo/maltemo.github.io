/* Element creation functions */
var create_link = (inner_text, link, class_name) => {
    let a_tag = document.createElement("a");

    a_tag.appendChild(document.createTextNode(inner_text));
    a_tag.classList.add(class_name);
    a_tag.href = link;

    return a_tag
}

var create_text_td = (inner_text)=>{
    let td_tag = document.createElement("td");
    td_tag.appendChild(document.createTextNode(inner_text));
    return td_tag;
}

var create_content_td = (content)=>{
    let td_tag = document.createElement("td");
    td_tag.appendChild(content);
    return td_tag;
}
