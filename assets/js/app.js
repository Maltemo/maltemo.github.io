const descSortByTime = (a,b)=>b.date.getTime()-a.date.getTime();
const ascSortByTime  = (a,b)=>a.date.getTime()-b.date.getTime();
const descSortTitle = (a,b)=>{
    if(a.title.toUpperCase() > b.title.toUpperCase())return -1;
    if(a.title.toUpperCase() < b.title.toUpperCase())return 1;
    return 0;
};
const ascSortTitle  = (a,b)=>{
    if(a.title.toUpperCase() < b.title.toUpperCase())return -1;
    if(a.title.toUpperCase() > b.title.toUpperCase())return 1;
    return 0;
};
const descSortChallType = (a,b)=>{
    if(a.challenge_type.toUpperCase() > b.challenge_type.toUpperCase())return -1;
    if(a.challenge_type.toUpperCase() < b.challenge_type.toUpperCase())return 1;
    return 0;
};
const ascSortChallType  = (a,b)=>{
    if(a.challenge_type.toUpperCase() < b.challenge_type.toUpperCase())return -1;
    if(a.challenge_type.toUpperCase() > b.challenge_type.toUpperCase())return 1;
    return 0;
};
const descSortCTF = (a,b)=>{
    if(a.ctf.toUpperCase() > b.ctf.toUpperCase())return -1;
    if(a.ctf.toUpperCase() < b.ctf.toUpperCase())return 1;
    return 0;
};
const ascSortCTF  = (a,b)=>{
    if(a.ctf.toUpperCase() < b.ctf.toUpperCase())return -1;
    if(a.ctf.toUpperCase() > b.ctf.toUpperCase())return 1; 
    return 0;
};


var app = new Vue({
    el: '#app',
    data: {
        writeups : write_up_list.sort(descSortByTime),
        descSortedByTime : true,
        descSortedTitle : false,
        descSortedChallType : false,
        descSortedCTF : false,
    },
    methods:{
        toggleSortCTF : function() {
            writeups = this.descSortedCTF ? this.writeups.sort(ascSortCTF) : this.writeups.sort(descSortCTF);
            this.descSortedCTF = !this.descSortedCTF;
        },
        toggleSortDates : function(){
            writeups = this.descSortedByTime ? this.writeups.sort(ascSortByTime) : this.writeups.sort(descSortByTime);
            this.descSortedByTime = !this.descSortedByTime
        },
        toggleSortTitle : function() {
            writeups = this.descSortedTitle ? this.writeups.sort(ascSortTitle) : this.writeups.sort(descSortTitle);
            this.descSortedTitle = !this.descSortedTitle;
        },
        toggleSortChallengeType :function() {
            writeups = this.descSortedChallType ? this.writeups.sort(ascSortChallType) : this.writeups.sort(descSortChallType);
            this.descSortedChallType = !this.descSortedChallType;
        }
    }
});
