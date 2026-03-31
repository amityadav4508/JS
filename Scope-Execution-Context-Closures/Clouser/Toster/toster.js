function createToaster(config){
    return function(notification){

        let div = document.createElement("div")
        div.className = `inline-block ${config.theme==="dark" ? "bg-gray-800": "bg-gray-200 text-black"} px-6 py-3 rounded shadow-lg pointer-none transition-opacity`

        div.textContent = notification

        document.querySelector(".parent").appendChild(div);


        if(config.positionX!=="left" || config.positionY!=="top"){
            
            document.querySelector(".parent").className +=
             `${config.positionX==="right"? "right-5" : "left-5"} ${config.positionY==="bottom"? "bottom-5" : "top-5"}` 
        }
        
        setTimeout(()=>{
        document.querySelector(".parent").removeChild(div)
        }, config.duration*1000)
    }
    
}
let toaster = createToaster({
positionX: "left",
positionY: "bottom",
theme: "light",
duration: 3
})

toaster("This is a toaster notification");
setTimeout(()=>{
    toaster("This is a chat notification")
}, 2000)
