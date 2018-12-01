
let numberOfUsers = 0;

const Users = [];

class User {
    constructor(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.follows = [];
        this.events = [];
        numberOfUsers++;
        this.admin = false;
    }
}

Users.push(new User("Eddie", "123456", "eddie@gmail.com"));
Users.push(new User("Amber", "aabbccd", "amber@gmail.com"));
Users.push(new User("Martin", "1010", "martin@gmail.com"));
Users.push(new User("Howard", "qwert", "howard@gmail.com"));

function Event(name, city, country, artist, venue, website, poster) {
    this.name = name;
    this.city = city;
    this.country = country;
    this.artist = artist;
    this.venue = venue;
    this.website = website;
    this.poster = poster;
}

const changePass = document.querySelector("#passwordSubmit");
const logo = document.querySelector("#logo");
const events = [];

changePass.addEventListener("click", changePassword);
logo.addEventListener("click", toMainPage);
// Adding events;
events.push(new Event("Let there be Love", "Toronto", "Canada", null, "Areei Gallery", "http://canadianarabicorchestra.ca/calligraphy-gallery/", "Let_there_be_love.jpg"));
events.push(new Event("Forgotten Genius", "Toronto", "Canada", null, "MZTV Museum of Television", "http://www.mztv.com/", "Forgotten_Genius.jpg"));
events.push(new Event("NORTHWOOD", "Toronto", "Canada", "Chris Antonik", "Burdock", "http://burdockto.com/musichall/", "northwood.jpg"));
events.push(new Event("Japan Now", "Toronto", "Canada", null, "Female Masters at Gardiner Museum", "https://www.gardinermuseum.on.ca/event/japan-now-female-masters/", "japan_now.jpg"));
events.push(new Event("teamLab Borderless", "Toronto", "Japan", "teamLab", "MORI Building DIGITAL ART MUSEUM", "https://borderless.teamlab.art/", "teamLab.jpg"));

const eventName = document.querySelectorAll(".name");
eventName.forEach(function (element){
    element.addEventListener("click", changePage)
});

function changePage(e){
    window.location.href = "../event_page/Event_Page.html"
}

function toMainPage(e){
    window.location.href = "../main_page/index.html"
}

const userID = document.getElementById("userID").innerText;
function changePassword(e){
    e.preventDefault();
    const newPassword = document.querySelector('#newPassword').value;
    for (let i = 0; i < Users.length;i++){
        if (Users[i].username === userID){
            Users[i].password = newPassword;
        }
    }
}
