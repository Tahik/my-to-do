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

// add text input and delete buton function

const addToDo =(e) => {
    e.preventDefault();

    // value of text input
    const value = inputFieldForm.querySelector('input[type="text"]').value;
    console.log(value);

    // li element
    const li = document.createElement('li');
    li.setAttribute('class', 'to-do-li-class')

    // content of To Do
    const toDoText = document.createElement('span');
    toDoText.textContent = value;
    toDoText.setAttribute('class', 'to-do-text-class');

    // delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.setAttribute('class', 'delete-=to-do-button-class');

    // delete to do function
    const deleteToDo = (e) => {
        e.preventDefault();
        li.parentNode.removeChild(li);
    }

    // event listener for delete Button
    deleteButton.addEventListener('click', deleteToDo);

    // append elements to DOM
    li.appendChild(toDoText);
    li.appendChild(deleteButton);
    ul.appendChild(li);
}

inputFieldForm.addEventListener('submit', addToDo);