

// async&await 
// .then and .catch se bachne ke liye async and await ka use krte h, Ye clearner tarika hai promises ko resolve and reject handle krne ka


let pr = new Promise(function (res, rej) { 
    setTimeout(()=>{
       let rn = Math.floor(Math.random()*10);
       if(rn>5) res("resolved with " + rn)
        else rej("reject with " + rn)
    }, 3000);
 })

// async kahta hai ki ander ke code ko try and cath me rkho 
 async function abcd(){
      try{
        let val = await pr;
        console.log(val)
      }
      catch(err){
        console.log(err)
      }
 }

 abcd();

