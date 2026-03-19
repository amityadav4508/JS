// new cards create karne hai, data local storage mein save karna hai
// localstorage se hi cards ko sow karna hai
// buttons ko handle karna
// filters ko handle karna hai


// All VARIABLES AND DOC SELECTIONS 

let addNote = document.querySelector(".add-note");
let formContainer = document.querySelector(".form-container");
let closeForm = document.querySelector(".close-Form")
let noteContainer = document.querySelector(".note-container");
let color = document.querySelector(".colors");
let cards = document.querySelector(".cards");




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

const submitButton = form.querySelector(".submit-button");




//  CODE START HERE


// to store the fomr data in local storage


function saveToLocalStorage(obj){
// puraane localStorage data nikalo
    if(localStorage.getItem("tasks") === null){
        let oldTasks = [];
        oldTasks.push(obj);
        localStorage.setItem("tasks", JSON.stringify(oldTasks));
    }else{

        let oldTasks = localStorage.getItem("tasks");
        oldTasks = JSON.parse(oldTasks);
        oldTasks.push(obj);
        JSON.stringify(oldTasks)  // get actaul array
        localStorage.setItem("tasks", JSON.stringify(oldTasks));
    }

 

}


   let task =JSON.parse(localStorage.getItem("tasks"));

    // task.forEach(function(ts){
    //     console.log(ts.imageUrl);
    // })



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

    saveToLocalStorage({
        imageUrl,
        fullName,
        purpose,
        homeTown,
        selected

    });

    form.reset();
   formContainer.style.display = "none";
   noteContainer.style.display = "flex";

});




//  ADD CARD Profile

function ShowCardsProfile(){
    let allTasks = JSON.parse(localStorage.getItem("tasks"));

    allTasks.forEach(function(task){
        let profileCard = document.createElement("div");
        profileCard.className = "profile-card";

        // Image
        let img = document.createElement("img");
        img.src = task.imageUrl;
        img.alt = "profile";

        // Name
        let name = document.createElement("h3");
        name.textContent = task.fullName;

     // Info container
     let info = document.createElement("div");
     info.className = "info";

     // Home town block
     let homeDiv = document.createElement("div");

     let homeP = document.createElement("p");
     homeP.textContent = "Home town";

     let homeSpan = document.createElement("span");
     homeSpan.textContent = "Purpose";

     homeDiv.appendChild(homeP);
     homeDiv.appendChild(homeSpan);

     // Bookings block
     let bookingDiv = document.createElement("div");

     let bookingP = document.createElement("p");
     bookingP.textContent = task.homeTown;

     let bookingSpan = document.createElement("span");
     bookingSpan.textContent = task.purpose;

     bookingDiv.appendChild(bookingP);
     bookingDiv.appendChild(bookingSpan);

     // append info blocks
     info.appendChild(homeDiv);
     info.appendChild(bookingDiv);

     // Actions
     let actions = document.createElement("div");
     actions.className = "actions";

     let callBtn = document.createElement("button");
     callBtn.className = "call";
     callBtn.textContent = "Call";

     let msgBtn = document.createElement("button");
     msgBtn.className = "msg";
     msgBtn.textContent = "Message";

     actions.appendChild(callBtn);
     actions.appendChild(msgBtn);

     // Final append
     profileCard.appendChild(img);
     profileCard.appendChild(name);
     profileCard.appendChild(info);
     profileCard.appendChild(actions);

     // Add to page
     noteContainer.insertBefore(profileCard, color);
     cards.appendChild(profileCard)

     });
};

ShowCardsProfile();