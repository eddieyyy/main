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

