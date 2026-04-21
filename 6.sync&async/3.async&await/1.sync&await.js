

// async&await 
// .then and .catch se bachne ke liye async and await ka use krte h, Ye clearner tarika hai promises ko resolve and reject handle krne ka


let pr = new Promise(function (res, rej) { 
    setTimeout(()=>{
       let rn = Math.floor(Math.random()*10);
       if(rn>5) res("resolved with" + rn)
        else rej("reject with" + rn)
    }, 3000);
 })


 async function abcd(){
      let val = await pr;
 }

 abcd();

