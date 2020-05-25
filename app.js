//Adding a note//
var createNote = document.getElementById('addForm');
var noteList = document.getElementById('notesWrapper');
const noteTitle = document.createElement('div');
const noteBody = document.createElement('div');
console.log(noteBody);



createNote.addEventListener('submit', addNote);

function addNote(e) {
  e.preventDefault();
  //Obtaining value from the text box
  var newNote = document.getElementById('item').value;

  //Accessing the parent element
var bodyContent = document.getElementsByClassName("notes");
console.log(bodyContent);
 
  //Adding text in the new division noteBody
  noteBody.appendChild(document.createTextNode(newNote));
  console.log(noteBody);

  //Setting attribute
  noteBody.setAttribute('class', 'notesBody');

  //Appending the div made
  bodyContent[1].appendChild(noteBody);

  //adding value from the text box
  noteBody.appendChild(newNote);

  
  

 
}
