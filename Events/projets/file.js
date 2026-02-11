let fileInp = document.querySelector(".inputt")
let btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    fileInp.click();
})

fileInp.addEventListener("change", function(dets){
    // console.log("dtets", dets)
    // console.log(dets.target.files[-0].name)
    const file = dets.target.files[0]
    if(file){
        btn.textContent = file.name
    }
    
    
})

