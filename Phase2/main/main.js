'use strict';
// get user from login page
const log = console.log;
//todo: get user
//const user = require('../login_page/login');
//const {MongoClient, ObjectID} = require('mongodb');

// Create a request variable and assign a new XMLHttpRequest object to it.
const request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
const posters = ['https://static.tvgcdn.net/feed/1/902/thumbs/118151902_1300x1733.jpg', 'http://barkerhost.com/wp-content/uploads/sites/4/2015/04/bwVhmPpydv8P7mWfrmL3XVw0MV5-0.jpg', 'https://http2.mlstatic.com/mi-vecino-totoro-hayao-miyazaki-studio-ghibli-pelicula-dvd-D_NQ_NP_876194-MLM26805455021_022018-F.jpg',
'https://i.ebayimg.com/images/g/5o8AAOxyTjNSpwSz/s-l600.jpg', 'https://54disneyreviews.files.wordpress.com/2016/03/only-yesterday3.jpg', 'https://images-na.ssl-images-amazon.com/images/I/51JniMwx8rL.jpg',
'https://garbolaughs.files.wordpress.com/2011/03/pompoko_poster.jpg', 'http://1.bp.blogspot.com/-E69qWrNvoNw/VaWxP3q8V1I/AAAAAAAAAvQ/IvdoZvZ6Hlg/s1600/Poster.jpg', 'http://4.bp.blogspot.com/-uFri0aEO6Cs/U8OESBLn6EI/AAAAAAAAAo0/WpPeYDb0-YM/s1600/princess+mononoke+japanese+poster.jpg',
'https://vignette.wikia.nocookie.net/dubbing9585/images/f/fa/My-neighbors-the-yamadas-poster.jpg/revision/latest?cb=20171223052252', 'https://images-na.ssl-images-amazon.com/images/I/510EEVTV5YL._SY445_.jpg', 'https://image-ticketfly.imgix.net/00/02/84/22/20-og.jpg?w=500&h=500',
'https://m.media-amazon.com/images/M/MV5BZTRhY2QwM2UtNWRlNy00ZWQwLTg3MjktZThmNjQ3NTdjN2IxXkEyXkFqcGdeQXVyMzg2MzE2OTE@._V1_SY1000_CR0,0,716,1000_AL_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/51qyfcSrd-L.jpg', 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Ponyo_%282008%29.png/220px-Ponyo_%282008%29.png',
'http://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421541181/the-art-of-the-secret-world-of-arrietty-9781421541181_hr.jpg', 'https://fanart.tv/fanart/movies/83389/movieposter/from-up-on-poppy-hill-54be9c67654a1.jpg',
'http://animehay.tv/uploads/images/2016/09/kaze-tachinu-thumbnail.jpg', 'http://2.bp.blogspot.com/-fOZGtVVkk7s/VIld2lDD7uI/AAAAAAACdLw/sabQ2cQZw6s/s350/kenhtuoitre_La-leyenda-de-la-princesa-Kaguya-Poster-2-Eng-37634.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61q7lQQMPYL.jpg'];


request.onload = function () {
    // --------------Begin accessing JSON data here--------------
    const data = JSON.parse(this.response);

    const view = document.querySelector('#view');
    // div of header containing logo and title
    const topBox = document.createElement('div');
    topBox.setAttribute('id', 'topBox');
    view.appendChild(topBox);


    // create logo
    const logo = document.createElement('img');
    logo.setAttribute('id', 'logo');
    logo.src = 'https://static.tvtropes.org/pmwiki/pub/images/ghiblilogonew.png';
    topBox.appendChild(logo);
    // create title
    const Header = document.createElement('p');
    Header.setAttribute('id', 'topTitle');
    const headerText = document.createTextNode('Ghibli Collection');
    Header.appendChild(headerText);
    topBox.appendChild(Header);


    // add login/register
    const nev = document.createElement('div');
    nev.setAttribute('class', 'dropdown');
    const button = document.createElement('button');
    button.setAttribute('class', 'dropButton');
    const welcome = document.createTextNode('Welcome');
    const list = document.createElement('i');
    const listContent = document.createElement('div');
    listContent.setAttribute('class', 'list-content');
    button.appendChild(welcome);
    button.appendChild(list);
    nev.appendChild(button);
    const loginLink = document.createElement('a');
    const loginText = document.createTextNode('Login');
    const registerLink = document.createElement('a');
    const registerText = document.createTextNode('Register');
    loginLink.appendChild(loginText);
    registerLink.appendChild(registerText);
    loginLink.href = '../login_page/login.html';
    registerLink.href = '../register_page/register.html';
    listContent.appendChild(loginLink);
    listContent.appendChild(registerLink);
    nev.appendChild(listContent);
    topBox.appendChild(nev);

    //create a dropdown menu
    const menu = document.createElement('div');
    menu.setAttribute('class', 'dropdown');
    const menuBtn = document.createElement('button');
    menuBtn.setAttribute('class', 'dropButton');
    const movies = document.createTextNode('Movies');
    const l = document.createElement('i');
    const l_content = document.createElement('div');
    l_content.setAttribute('class', 'list-content');
    menuBtn.appendChild(l);
    menuBtn.appendChild(movies);
    menu.appendChild(menuBtn);
    menu.appendChild(l_content);
    topBox.appendChild(menu);






    // create main body for movies
    const bodyContainer = document.createElement('div');
    bodyContainer.setAttribute('class', 'container');


    view.appendChild(bodyContainer);



    let i=0;
    // check if data is requested correctly
    if (request.status === 200) {
        // get and create movie card containing name and poster of movie
        data.forEach( movie => {
            // create division for each movie:
            const movieCard = document.createElement('div');
            movieCard.setAttribute('class', 'movie');
            movieCard.setAttribute('id', movie.title);
            // create poster
            const poster = document.createElement('img');
            poster.setAttribute('class', 'poster');
            poster.src = posters[i];
            i++;
            // create name of the movie
            const title = document.createElement('p');
            const titleText = document.createTextNode(movie.title);
            title.appendChild(titleText);
            title.setAttribute('class', 'movieTitle');
            // add movie description
            const description = document.createElement('p');
            const descriptionText = document.createTextNode(movie.description);
            description.setAttribute('class', 'description');
            description.appendChild(descriptionText);
            // add movie to dropdown menu
            const a = document.createElement('a');
            a.href = `#${movie.title}`;
            const a_text = document.createTextNode(movie.title);
            a.appendChild(a_text);
            l_content.appendChild(a);


            // append elements
            movieCard.appendChild(title);
            movieCard.appendChild(poster);
            movieCard.appendChild(description);
            bodyContainer.appendChild(movieCard)
        })
    }
    // ------------finish accessing json files--------------

    // ---------------start events-----------------:
    bodyContainer.addEventListener('click', toMovie);

    function toMovie(e) {
        e.preventDefault();

        const box = e.target;
        let node, title;
        if (box.className === 'poster' || box.className === 'movieTitle'){
            node = box.parentNode.childNodes[0];
            log(box.parentNode.childNodes[0]);
            title = node.textContent;
            location.replace('');

        } else if (box.className === 'movie'){
            node = box.childNodes[0];
            title = node.textContent;
            location.replace('');
            log(box.childNodes[0]);
        }
    }

};

//todo: get and export movie_id


// Send request
request.send();