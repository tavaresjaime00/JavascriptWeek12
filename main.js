// JS Document

// create vars and bind to header & section elements
let header = document.querySelector('header');
let section = document.querySelector('section');

// create another variable to hold JSON url (request URL)
let requestURL = "https://tavaresjaime00.github.io/JavascriptWeek12/icecream.json";

// create a new XHR object to store a new HTTP request --> (XMLHttpRequest)
let request = new XMLHttpRequest();

// open a new request, using the open method
request.open('GET', requestURL);

// set up a request to accept JSON file types.
request.responseType = 'json';

// send the request using the send method
request.send();

// adding an event handler that listens for onload of the JSON file/object
request.onload = function() {
  let iScreamInc = request.response; 
  console.log(iScreamInc);
  populateHeader(iScreamInc); 
  topFlavours(iScreamInc);  
}

// set up populateHeader function
function populateHeader(jsonObj) {
  // grab the company name from the JSON Object and create new element, adding text
  // and appending to the header
  let headerH1 = document.createElement('h1');
  headerH1.textContent = jsonObj['companyName'];
  header.appendChild(headerH1);

  // grab the company head office form the json obj and create a new p element,
  // adding the JSON text and appending to the companyName h1 element.
  let headerPara = document.createElement('p');
  headerPara.textContent = 'Head Office: ' + jsonObj['headOffice'] + ' , Established:  ' + jsonObj['established'];
  header.appendChild(headerPara);
}

// define the topflavours function to show the flavours

function topFlavours(jsonObj) {
  
  //bind top flavours object to a variables 
  let topFlavours = jsonObj['topFlavours'];
  
  for (let i = 0; i < topFlavours.length; i++) {
    //create a few different elements 
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let list = document.createElement('ul');
    
    //grab the data associated with image to set the src and alt attribute
    img.setAttribute('src', 'https://tavaresjaime00.github.io/JSONmon/images/' + topFlavours[i].image);
    img.setAttribute('alt', topFlavours[i].image );
    
    h2.textContent = topFlavours[i].name; 
    p1.textContent = 'Calories: ' + topFlavours[i].calories;
    p2.textContent = 'Type: ' + topFlavours[i].type;
    
    let ingredients = topFlavours[i].ingredients;
    for(let j = 0; j < ingredients.length; j++ ) {
      let listItem = document.createElement('li'); 
      listItem.textContent = ingredients[j];
      list.appendChild(listItem); 
    }
    
    // Append each element to article, then append article to section 
    
    article.appendChild(img); 
    article.appendChild(h2);
    article.appendChild(p1); 
    article.appendChild(p2);
    article.appendChild(list);
    section.appendChild(article); 
     
  }

}
