import data from './data.js';

const createGuitar = (guitar) => {
//Create the HTMl elements needed for a card    
const div = document.createElement('div');
const h4 = document.createElement('h4');
const a = document.createElement('a');
const img = document.createElement('img');

//Append newly created elements into the DOM
const body = document.querySelector('body'); 
body.append(div); 
h4.append(a); 
div.append(h4);
div.append(img); 

//Set content and attributes
a.innerHTML = guitar.name 
a.setAttribute('href', guitar.info);
div.setAttribute('class', 'card'); 
img.setAttribute('src', guitar.pic); 
}

data.forEach(guitar => createGuitar(guitar)); 
