// Constructor to create events
function Event(name, city, country, artist, venue, website, poster) {
    this.name = name;
    this.city = city;
    this.country = country;
    this.artist = artist;
    this.venue = venue;
    this.website = website;
    this.poster = poster;
}

const events = [];
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
    e.preventDefault();
    const eventName = e.target.parentElement.children[1].innerText;
    for (let i = 0; i < events.length;i++){
        if (events[i].name === eventName){
            eventLoad(events[i]);
        }
    }
}
function eventLoad(newEvent) {
    const eventPoster = document.getElementById("eventPoster");
    eventPoster.children[0].innerHTML = "<a href=" + newEvent.website +">" + newEvent.name + "</a>";
    eventPoster.children[1].src = newEvent.poster;
    const eventDetail = document.getElementById("eventDetail");
    eventDetail.children[1].innerText = "Event Name: " + newEvent.name;
    eventDetail.children[2].innerText = "Artist Name: " + newEvent.artist;
    eventDetail.children[3].innerText = "Event Location: " + newEvent.city + " " + newEvent.country;
    eventDetail.children[4].innerText = "Offer Type: " + "upcoming";
    eventDetail.children[5].innerHTML = "Website: <a href=" + newEvent.website +">"+ newEvent.website+"</a>";
    eventDetail.children[6].innerText = "Status: " + "upcoming";
    eventDetail.children[7].innerText = "Venue Name: " + newEvent.venue;
}