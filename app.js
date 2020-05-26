//Adding a note//
var noteText = document.querySelector('#formNoteText');
var addButton = document.querySelector('#formNoteAddButton');
var noteColor = document.querySelector("#formColor");
console.log(noteColor);
console.log(noteColor.value);
//Defining the parent for Note
const notes = document.querySelector('.notes');
noteText.focus();

function addNote() {
  //Obtaining value from the text box
  var text = noteText.value;
  //Creating new div
  var note = document.createElement('div');
  //Setting CSS styling for the new div
  note.setAttribute('class', 'note');
  //Adding Color to the note
note.classList.add(noteColor.value);
  //Adding the text inside the div
  note.innerHTML=`<p>${text}</p>`;

  notes.appendChild(note);

  //Creating deleteBtn
  var deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'noteDeleteButton');

  //Adding delete button
  deleteBtn.innerHTML = 'Delete';

  //Appending Delete Button

  note.appendChild(deleteBtn);

  //Adding Edit Button
  var editButton = document.createElement('button');
  editButton.setAttribute('class', 'noteDeleteButton'); //Change the class afterwards to an edit button class

  //Idhar banaya hai edit button
  editButton.innerHTML = 'Edit';
  editButton.id = 'editId';
  note.appendChild(editButton);
  editButton.onclick = function () {
    editNote();
  };

  //Removing the text from the input area
  noteText.value = '';

  //Adding Focus
  noteText.focus();

  addListenerDeleteBtn(deleteBtn);
}
// Event Listener for Submit Button
addButton.addEventListener('click', function (e) {
  e.preventDefault();
  if (noteText.value != '') {
    addNote();
  } else {
    alert('No Text Added');
  }
});

//Deleting the note
function addListenerDeleteBtn(deleteBtn) {
  deleteBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    deleteNote(e);
  });
}
function deleteNote(e) {
  let eventNote = e.target.parentNode;
  eventNote.parentNode.removeChild(eventNote);
}
//Edit Function
function editNote() {
  console.log(document.activeElement);
  console.log(document.activeElement.parentElement);
  document.activeElement.parentElement.childNodes[0].contentEditable="true";
  document.getElementById("editId").innerHTML = "Save";
  document.getElementById('editId').onclick = function () {
    saveNote();
  };
}

function saveNote(){
  document.activeElement.parentElement.childNodes[0].contentEditable="false";
  document.getElementById("editId").innerHTML = "Edit";
  //Recalling the Edit
  document.getElementById('editId').onclick=function(){
    editNote();
  }
}



