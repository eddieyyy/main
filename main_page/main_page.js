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


const searchBox = document.querySelector("#search");
const eventTable = document.querySelector("#eventTable");
searchBox.addEventListener("submit", searchEvent);




function searchEvent(e){
	e.preventDefault();
	// get input info
	const inputbox = document.querySelector("#searchInput");
	const inputText = inputbox.value;
	const category = document.querySelector("#searchtype").value;

	if (inputText == ""){
		inputbox.setAttribute("placeholder", `Please enter ${category} name`);
	} else {

		// select corresponding events and stores in targets
		const targets = [];
		let i;
		switch (category){
			case "city":
				for (i=0; i<events.length; i++){
					if (events[i].city == inputText){
						targets.push(events[i]);
					}
				}
				break;
			case "country":
				for (i=0; i<events.length; i++){
					if (events[i].country == inputText){
						targets.push(events[i]);
					}
				}
				break;
			case "artist":
				for (i=0; i<events.length; i++){
					if (events[i].artist == inputText){
						targets.push(events[i]);
					}
				}
				break;
			case "event":
				for (i=0; i<events.length; i++){
					if (events[i].name == inputText){
						targets.push(events[i]);
					}
				}
				break;
			case "venue":
				for (i=0; i<events.length; i++){
					if (events[i].venue == inputText){
						targets.push(events[i]);
					}
				}
				break;
		}
		if (targets.length == 0){
			noRelated(category, inputText);
		} else {
			generator(targets);
		}
	}


	
}

// execute if no event is related to input text under given category.
function noRelated(category, inputText){
	eventTable.removeChild(eventTable.childNodes[1]);
	let row = document.createElement("tr");	

	eventTable.appendChild(row);
	const msg = `No event related to ${category} ${inputText}`;
	const message = document.createTextNode(msg);
	const block = document.createElement("td")
	block.setAttribute("class", "error");
	block.appendChild(message);
	row.appendChild(block);
}

function generator(targets){
	eventTable.removeChild(eventTable.childNodes[1]);
	let current_row = document.createElement("tr");	

	eventTable.appendChild(current_row);

	while (targets.length > 0){
		//create new event
		const new_element = document.createElement("td");
		new_element.setAttribute("class", "event");
		// add event poster
		const image = document.createElement("img");
		image.setAttribute("class", "pic");
		image.setAttribute("src", targets[0].poster);
		new_element.appendChild(image);
		// add event title and link website to name
		const event_name = document.createElement("p");
		event_name.setAttribute("class", "name");
		const new_link = document.createElement("a");
		new_link.setAttribute("href", "../event_page/Event_Page.html");

		const text = document.createTextNode(targets[0].name);
		new_link.appendChild(text);
		event_name.appendChild(new_link);
		new_element.appendChild(event_name);

		current_row.appendChild(new_element);
		
		// each row has maximum 4 elements, 
		// if last row has 4 elements already, then change to next row
		if (current_row.childNodes.length == 4){
			current_row = document.createElement("tr");	
			eventTable.appendChild(current_row);
		}

		targets.shift();
	}

}


