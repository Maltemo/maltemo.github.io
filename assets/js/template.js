/* navigation */
let tabs = [
    {
        name: "Home page",
        url: "index.html"
    },
    {
        name: "Write-ups",
        url: "write_ups.html"
    },
    {
        name: "Blog posts",
        url: "blog_posts.html"
    },
    {
        name: "Contact",
        url: "contact.html"
    },
]
let navigation = document.getElementById("navigation");
tabs.forEach((tab) => {
    let link = create_link(tab.name, tab.url, "navigation_tab")
    navigation.appendChild(link)
    navigation.appendChild(document.createTextNode("-"))
})
navigation.removeChild(navigation.lastChild)

/* Footer */
document.getElementsByTagName("footer")[0].innerText = `@ ${new Date().getFullYear()} - Made by Maltemo`
