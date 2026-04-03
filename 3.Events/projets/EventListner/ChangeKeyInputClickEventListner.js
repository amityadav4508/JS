// browser mein page per koi bhi harkat kro event raise ho jaayega.

// kuch screen par ho aur apko reaction dena ho us waqkt apko event handle krne ana chahiye

// evet mtlab hota hai koi aciton huaa

// event listenr ka matlab h apne koi action ka reaction diya


// struct of addEventListener


// Element.addEventListener("event name", function(){});

// Element.removeEventListner("event name", function(){});  


//  i am very confused that how may eventes are there in js i want to know all the names whatever are there i mena all

// every time i type in the a input what event is trigerd

// and the my mous ond div
// when somebody type anything on keyboard on the whole screen not anywhere specific aur any input specific just on the website

let p = document.querySelector("p");

p.addEventListener("click", function(){
    p.style.color="red"
})

// 

let inp = document.querySelector("input");

inp.addEventListener("input", function(dets){
    console.log(dets);
    // console.log("typed")
    // console.log(dets.data)
    if(dets.data !== null){
        console.log(dets.data)
    }

})


//  Change Event: tab chalta hai ja apka koi input select ya textarea meain koi change hojaay

 
let sel = document.querySelector("select");
let device = document.querySelector("#device");

sel.addEventListener("change", function(dets){
    device.style.textTransform = "capitalize";
    device.textContent = `${dets.target.value} is selected`
})


//  find which key is clicked of flash key

let h2 = document.querySelector("h2");

window.addEventListener("keydown", function(dets){
    h2.textContent = `${dets.key}`
    console.log(dets.key)
    if(dets.key === " "){
        h2.textContent = "SPC"
    } else{
        h2.textContent = `${dets.key}`


    }
})
