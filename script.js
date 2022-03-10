// create elements

// To do heading
const toDoHeading = document.createElement('h1');
toDoHeading.setAttribute('class', 'to-do-heading');
toDoHeading.textContent = 'To Do List';
document.body.appendChild(toDoHeading);

// form 
const inputFieldForm = document.createElement('form');
inputFieldForm.setAttribute('class', 'input-field-form-class');
inputFieldForm.setAttribute('id', 'input-field-form-id');
document.body.appendChild(inputFieldForm);

// input field

const inputField = document.createElement('input');
inputField.setAttribute('type', 'text');
inputField.setAttribute('name', 'input-field-name');
inputField.setAttribute('id', 'input-field-id');
inputFieldForm.appendChild(inputField);

// add button

const addButton = document.createElement('button');
addButton.setAttribute('class', 'add-button-class');
addButton.textContent ='Add To Do!';
inputFieldForm.appendChild(addButton);

// ul div

const ulDiv = document.createElement('div');
ulDiv.setAttribute('class', 'ul-div-class');
document.body.appendChild(ulDiv);

// ul

const ul = document.createElement('ul');
ul.setAttribute('class', 'to-do-ul-class');
ulDiv.appendChild(ul);

