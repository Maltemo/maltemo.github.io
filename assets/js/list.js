const write_up_list = [
    {
        title : "Simple Basique",
        challenge_type : "Crypto",
        tags : ["URLencoded"],
        ctf : 10000,
        date : new Date(2019,09,14),
        points : 50
    },
    {
        title : "Hey DJ",
        challenge_type : "OSINT",
        tags : ["Metadata", "Automatic-response"],
        ctf : 10000,
        date : new Date(2019,09,14),
        points : 175
    },
    {
        title : "Emoji 🥳",
        challenge_type : "Prog",
        tags : ["Scripting","WebScrapping"],
        ctf : 10000,
        date : new Date(2019,09,14),
        points : 50
    },
    {
        title : "Special Cookie Recipe",
        challenge_type : "Stegano",
        tags : ["Binary","Scripting","UpperCase"],
        ctf : 10000,
        date : new Date(2019,09,14),
        points : 50
    },
    {
        title : "TMNT",
        challenge_type : "Web",
        tags : ["XSS","ReflectedXSS","MutatedXSS"],
        ctf : 10000,
        date : new Date(2019,09,14),
        points : 300
    },
    {
        title : "Broken Keyboard",
        challenge_type : "Crypto",
        tags : ["ASCII"],
        ctf : 10001,
        date : new Date(2019,06,28),
        points : 50
    },
    {
        title : "Crack The Key",
        challenge_type : "Crypto",
        tags : ["Vigenere"],
        ctf : 10001,
        date : new Date(2019,06,28),
        points : 450
    },
    {
        title : "Song of My People",
        challenge_type : "Forensic",
        tags : ["MorseCode","PNGfixing","pngcheck","bless"],
        ctf : 10001,
        date : new Date(2019,06,28),
        points : 800
    },
    {
        title : "We are E.xtr",
        challenge_type : "Forensic",
        tags : ["PNGfixing","MagicNumber","bless"],
        ctf : 10001,
        date : new Date(2019,06,28),
        points : 350
    },
    {
        title : "Guillotine",
        challenge_type : "Forensic",
        tags : ["PNGfixing","pngcheck","bless"],
        ctf : 10001,
        date : new Date(2019,08,10),
        points : 1200
    },
    {
        title : "c0rrupted",
        challenge_type : "Forensic",
        tags : ["PNGfixing","pngcheck","bless"],
        ctf : 10002,
        date : new Date(2019,06,28),
        points : 250
    },
    {
        title : "WhitePages",
        challenge_type : "Forensic",
        tags : ["Binary", "Whitespace"],
        ctf : 10002,
        date : new Date(2019,06,28),
        points : 250
    },
    {
        title : "WorldGolfChampion",
        challenge_type : "Forensic",
        tags : ["pcap", "john", "keepass", "wireshark"],
        ctf : 10003,
        date : new Date(2019,06,13),
        points : 50
    },
    {
	title : "Dox the grinch",
	challenge_type : "OSINT",
	tags : ["GoogleDork","SocialNetworks"],
	ctf : 10004,
	date : new Date(2019,11,20),
	points : 250
    },{
        title : "Traverxec",
        challenge_type : "Pentest",
        tags : ["French","Pentest","Report","metasploit","PrivilegeEscalation"],
        ctf : 10005,
        date : new Date(2019,11,24),
        points : 0
    },{
        title : "BitsnBytes",
        challenge_type : "Prog",
        tags : ["Scripting","SVG"],
        ctf : 10006,
        date : new Date(2020,1,13),
        points : 200
    },{
        title : "Listen to this",
        challenge_type : "Forensic",
        tags : ["audacity","MorseCode","SoundIsolation"],
        ctf : 10006,
        date : new Date(2020,1,13),
        points : 125
    },{
        title : "Multiple Challs",
        challenge_type : "Web",
        tags : "",
        ctf : 10007,
        date : new Date(2020,2,20),
        points : 0
    },{
        title : "Oxyr",
        challenge_type : "OSINT",
        tags : ["Metadata","Sources","QRcode"],
        ctf : 10008,
        date : new Date(2020,3,6),
        points : 1000
    },{
        title : "OSINT You All Other The Place",
        challenge_type : "OSINT",
        tags : ["whois","SocialNetworks"],
        ctf : 10008,
        date : new Date(2020,3,6),
        points : 1000
    },{
        title : "Romance Dawn",
        challenge_type : "Forensic",
        tags : ["PNGfixing","pngcheck","bless"],
        ctf : 10009,
        date : new Date(2020,4,11),
        points : 100
    },{
        title : "Pain In The Ass",
        challenge_type : "Forensic",
        tags : ["pcap","wireshark","Scripting","ErrorBasedSQLI"],
        ctf : 10009,
        date : new Date(2020,4,11),
        points : 200
    },{
        title : "Containment Forever",
        challenge_type : "Web",
        tags : ["MongoDB","ObjectId"],
        ctf : 10009,
        date : new Date(2020,4,11),
        points : 300
    }
];

const template_write_up_object = {
        title : "",
        challenge_type : "",
        tags : "",
        ctf : 10000,
        date : "",
        points : 0
};

const ctf_list = [
    { id : 10000, name : "AperiCTF" },
    { id : 10001, name : "peaCTF" },
    { id : 10002, name : "picoCTF" },
    { id : 10003, name : "LeHack" },
    { id : 10004, name : "x-masCTF" },
    { id : 10005, name : "HackTheBox" },
    { id : 10006, name : "neverlanCTF" },
    { id : 10007, name : "angstromCTF" },
    { id : 10008, name : "AUCTF" },
    { id : 10009, name : "SharkyCTF" },
];
