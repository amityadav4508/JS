const user = {
    name: "Harsh",
    address:{
        city: "bhopal",
        pin: 564509,
        location:{
            lat: 23.2,
            lng: 77.4,
        },
    },
};


user.name; //
user["name"]; //
user.address.city; //
user.address.location.lat; //
user.address.location.lng; // Deep access

let {lat, lang} = user.address.location; // object destructureing

// optional chainging 


// Looping

// for in loop

let obj = {
    name: "harsh",
    age:26,
    emil: "test@test.com",
    
}

for(let key in obj){
    // console.log(key)
    // console.log(obj[key]);
    console.log(key,[obj[key]])
}

// Object.keys 
Object.keys(obj);
// Object.entries
Object.entries(obj);



//  spread 
let obj2 = {...obj};


// deep clone
