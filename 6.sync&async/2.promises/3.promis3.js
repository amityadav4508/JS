// user will ask for a number between 0 to 9 and if the number is below 5 resolve if the not
// user will ask for a number between 0 to 9 and if the number is below 5 resolve if the not
// user will ask for a number between 0 to 9 and if the number is below 5 resolve if the not
// sabse phle ghar par aao
// gate kholo aur gate lagao
// khan pakao kahna khao
// incognito mod chalao
// sojao kyuki tum thak gye ho


// promise channing 

var ans = new Promise((function (res, rej) { {
    return res("sabse phle ghar par aao");
} }))

var p2 = ans.then(function(data){
    console.log(data)
    return new Promise(function(res, rej){
        return res("gate kholo aur gate lagao")
    })
})
 var p3 = p2.then(function (data) { 
    console.log(data)
    return new Promise(function(res, rej){
        return res("khan pakao kahna khao")
    })
 })

var p4 = p3.then(function(data){
    console.log(data)
    return new Promise(function(res, rej){
        return res("incognito mod chalao")
    })
 })

  var p5 =  p4.then(function(data){
    console.log(data)
    return new Promise(function(res, rej){
        return res("sojao kyuki tum thak gye ho")
    })
 })

    p5.then(function(data){
    console.log(data)
    return new Promise(function(res, rej){
        return res("sojao kyuki tum thak gye ho")
    })
 })


 // async await 

/*   koi bhi esa function jisme aap async code likhege, kyoki 
  async code hai to aap promises ka istemaal kar skte hai,
  jab uska answer ayega aapko then lagana padega, us then ko langaane 
  se bachne ke liye, aap async await ka istemaal kar skte hai. */



/*  function abcd(){
     fetch(`https://randomuser.me/api/`)
     .then(function(raw){
         return raw.json();
     })
     .then(function(data){
         console.log(data)
     })
 }
 */

async function abcd(){
    let raw = await fetch(`https://randomuser.me/api/`)
    let ans = await raw.json();
    console.log(ans);


}

/* 
 Jab bhi koi code async hai to aapko uske liye wait krna padta hai kyuki hme nhi 
 pata uska answer kab ayega */

abcd();



