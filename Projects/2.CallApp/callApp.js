// new cards create karne hai, data local storage mein save karna hai
// localstorage se hi cards ko sow karna hai
// buttons ko handle karna
// filters ko handle karna hai



let addNote = document.querySelector(".add-note");
let formContainer = document.querySelector(".form-container");
let closeForm = document.querySelector(".close-Form")
let noteContainer = document.querySelector(".note-container")

const form = document.querySelector("form");

const imageInputUrl = form.querySelector(
    "input[placeholder='https://example.com/photo.jpg']"
);

const fullNameInput = form.querySelector(
    "input[placeholder='Enter Full name']"
);

const homeTownInput = form.querySelector(
    "input[placeholder='Enter home town']"
);

const purposeInput = form.querySelector(
    "input[placeholder='e.g., Quick appointment note']"
);

const categoryRadios =form.querySelectorAll("input[name='category']");

const submitButton = form.querySelector(".submit-button")


//  CODE START HERE

addNote.addEventListener("click", function(){
    formContainer.style.display = "initial";
    noteContainer.style.display = "none"
})

closeForm.addEventListener("click", function(){
    formContainer.style.display = "none"
        noteContainer.style.display = "flex"
})

form.addEventListener("submit", function(evt){
    evt.preventDefault();
    // if(imageInputUrl.value.trim() !=="" && fullNameInput.value.trim() !=="") 

    const imageUrl = imageInputUrl.value.trim();
    const fullName = fullNameInput.value.trim();
    const homeTown = homeTownInput.value.trim();
    const purpose = purposeInput.value.trim();

    let selected = false;

    categoryRadios.forEach(function(cat){
        // console.dir(cat)
        if(cat.checked){
            selected = cat.value;
        }
  
    })

    if(imageUrl === ""){
        alert("Please enter an URL")
        return
    }
    if(fullName === ""){
        alert("please enter Full name")
        return
    }

    if(homeTown === ""){
        alert("Please enter home town");
        return
    }
    if(purpose === ""){
        alert("Please enter purpose");
        return
    }
    if(!selected){
        alert("Please select category")
        return
    }

})




