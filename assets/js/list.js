const write_up_list = [
    {
        title : "Simple Basique",
        challenge_type : "Crypto",
        tags : ["URLencoded"],
        ctf : "AperiCTF",
        date : new Date(2019,09,14),
        points : 50
    },
    {
        title : "Hey DJ",
        challenge_type : "OSINT",
        tags : ["Metadata", "Automatic-response"],
        ctf : "AperiCTF",
        date : new Date(2019,09,14),
        points : 175
    },
    {
        title : "Emoji 🥳",
        challenge_type : "Prog",
        tags : ["Scripting","WebScrapping"],
        ctf : "AperiCTF",
        date : new Date(2019,09,14),
        points : 50
    },
    {
        title : "Special Cookie Recipe",
        challenge_type : "Stegano",
        tags : ["Binary","Scripting","UpperCase"],
        ctf : "AperiCTF",
        date : new Date(2019,09,14),
        points : 50
    },
    {
        title : "TMNT",
        challenge_type : "Web",
        tags : ["XSS","ReflectedXSS","MutatedXSS"],
        ctf : "AperiCTF",
        date : new Date(2019,09,14),
        points : 300
    },
    {
        title : "Broken Keyboard",
        challenge_type : "Crypto",
        tags : ["ASCII"],
        ctf : "peaCTF",
        date : new Date(2019,06,28),
        points : 50
    },
    {
        title : "Crack The Key",
        challenge_type : "Crypto",
        tags : ["Vigenere"],
        ctf : "peaCTF",
        date : new Date(2019,06,28),
        points : 450
    },
    {
        title : "Song of My People",
        challenge_type : "Forensic",
        tags : ["MorseCode","PNGfixing","pngcheck","bless"],
        ctf : "peaCTF",
        date : new Date(2019,06,28),
        points : 800
    },
    {
        title : "We are E.xtr",
        challenge_type : "Forensic",
        tags : ["PNGfixing","MagicNumber","bless"],
        ctf : "peaCTF",
        date : new Date(2019,06,28),
        points : 350
    },
    {
        title : "Guillotine",
        challenge_type : "Forensic",
        tags : ["PNGfixing","pngcheck","bless"],
        ctf : "peaCTF",
        date : new Date(2019,08,10),
        points : 1200
    },
    {
        title : "c0rrupted",
        challenge_type : "Forensic",
        tags : ["PNGfixing","pngcheck","bless"],
        ctf : "picoCTF",
        date : new Date(2019,06,28),
        points : 250
    },
    {
        title : "WhitePages",
        challenge_type : "Forensic",
        tags : ["Binary", "Whitespace"],
        ctf : "picoCTF",
        date : new Date(2019,06,28),
        points : 250
    },
    {
        title : "WorldGolfChampion",
        challenge_type : "Forensic",
        tags : ["pcap", "john", "keepass", "wireshark"],
        ctf : "LeHack",
        date : new Date(2019,06,13),
        points : 50
    },
    {
        title : "Dox the grinch",
        challenge_type : "OSINT",
        tags : ["GoogleDork","SocialNetworks"],
        ctf : "x-masCTF",
        date : new Date(2019,11,20),
        points : 250
    },{
        title : "Traverxec",
        challenge_type : "Pentest",
        tags : ["Pentest","Report","metasploit","PrivilegeEscalation"],
        ctf : "HackTheBox",
        date : new Date(2019,11,24),
        points : 0
    },{
        title : "BitsnBytes",
        challenge_type : "Prog",
        tags : ["Scripting","SVG"],
        ctf : "neverlanCTF",
        date : new Date(2020,1,13),
        points : 200
    },{
        title : "Listen to this",
        challenge_type : "Forensic",
        tags : ["audacity","MorseCode","SoundIsolation"],
        ctf : "neverlanCTF",
        date : new Date(2020,1,13),
        points : 125
    },{
        title : "Multiple Challs",
        challenge_type : "Web",
        tags : ["XSS","StoredXSS","SQLI","User-Agent","Git"],
        ctf : "angstromCTF",
        date : new Date(2020,2,20),
        points : 0
    },{
        title : "Oxyr",
        challenge_type : "OSINT",
        tags : ["Metadata","Sources","QRcode"],
        ctf : "AUCTF",
        date : new Date(2020,3,6),
        points : 1000
    },{
        title : "OSINT You All Other The Place",
        challenge_type : "OSINT",
        tags : ["whois","SocialNetworks"],
        ctf : "AUCTF",
        date : new Date(2020,3,6),
        points : 1000
    },{
        title : "Romance Dawn",
        challenge_type : "Forensic",
        tags : ["PNGfixing","pngcheck","bless"],
        ctf : "SharkyCTF",
        date : new Date(2020,4,11),
        points : 100
    },{
        title : "Pain In The Ass",
        challenge_type : "Forensic",
        tags : ["pcap","wireshark","Scripting","ErrorBasedSQLI"],
        ctf : "SharkyCTF",
        date : new Date(2020,4,11),
        points : 200
    },{
        title : "Containment Forever",
        challenge_type : "Web",
        tags : ["MongoDB","ObjectId"],
        ctf : "SharkyCTF",
        date : new Date(2020,4,11),
        points : 300
    },{
        title : "Rapport Écrit",
        challenge_type : "OSINT",
        tags : [""],
        ctf : "HexaCTF",
        date : new Date(2021,11,26),
        points : 8060
    },{
        title : "i see no vulnerability fixed",
        challenge_type: "Web",
        tags: ["XSS"],
        ctf: "pingCTF",
        date : new Date(2023,11,9),
        points : 200
    }
];

const blog_posts_list = [
    {
        title : "Optimisation de mon utilisation du clavier",
        date : new Date(2021, 10, 3),
        url : "opti_clavier.html"
    }
]

const template_write_up_object = {
        title : "",
        challenge_type : "",
        tags : "",
        ctf : 10000,
        date : "",
        points : 0
};

exports.blog_posts_list = blog_posts_list
exports.write_up_list = write_up_list
