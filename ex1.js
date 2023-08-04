console.log("Welcome to my Notes");
showNotes();

//if user add a notes let's store it in local storage
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    // getting notes from local storage if any previosly stored item is present
    //if anything present then parse it into js OBJECT notion format
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    // now pushing text added by user into notes object 
    notesObj.push(addTxt.value);
    // again updating local storage by stringifying js notionss bcz local storage store as string
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";

    //we want to our notes on webpage -->show func
    showNotes();

});

// function to show elements from local storage 
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    //since notes objects are parsed into object notion from local storage now it is like array so can be traversed by forEach loop

    notesObj.forEach(function (element, index) {
        html +=
            `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title"> Note ${index + 1}</h5>
        <p class="card-text">${element}</p>
        <button  id="${index}"  onclick="deleteNote(this.id)"href="#" class="btn btn-primary"> Delete note</button>
        </div>
       
    </div>`;
    });

    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing is there to show ! "Add a new note by clicking on Add notes ."`
    }

}

//function to delete note
function deleteNote(index) {
    console.log("i am deleting node", index);
    let notes=localStorage.getItem("notes");
    if( notes==null){
        notesObj=[];
    }
    else {
        notesObj=JSON.parse(notes);
    }
    //splice take an index and delete upto whichever number is required Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
  // @returns — An array containing the elements that were deleted.
    notesObj.splice(index, 1);
    //need to udate local storage to see  changes on webpage and after changing /deleting everytime we need to show the storage element
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();


} 
//make it to lowercase to get notes if uppercase is mistakenly given
let searchTxt= document.getElementById("searchTxt");
searchTxt.addEventListener("input", function(){
    
     let inputVal=searchTxt.value.toLowerCase();
    // console.log("input event fired", inputVal);
    let noteCards=document.getElementsByClassName('noteCard');
     Array.from(noteCards).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display="block";

        }
        else {
            element.style.display="none";
        }
     })

})
/* further feature 
 1. Add title 
 2.Mark Important
 3.seaprate notes by user 
 4. ync and host to web server */