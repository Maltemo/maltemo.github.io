const descSortByTime = (a,b)=>b.date.getTime()-a.date.getTime();

var app = new Vue({
    el: '#app',
    data: {
        writeups : write_up_list.sort(descSortByTime)
    }
});
