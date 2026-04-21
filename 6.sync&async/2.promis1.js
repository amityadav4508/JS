// aap ek promise banaate ho jo ki do states mein se ak state me jaa sakta hia and wo yaa to resolve hoga ya to reject hoga, ab wo wakqt bataayega par hume dono ke liye code likhna padta hai. 


let pr = new Promise(function (res, rej) { 
    setTimeout(()=>{
       let rn = Math.floor(Math.random()*10);
       if(rn>5) res("resolved with" + rn)
        else rej("reject with" + rn)
    }, 3000);
 })


 pr.then(function(val){
    console.log(val);
 }).catch(function(val){
    console.log(val);
 })