// This code belong to the library 

function profileLekarAao(username, cb){
    console.log("Fetching profile data.....")
    setTimeout(()=>{
        cb({_id: 1231, username, age:"26", email:"wewe@gmail.com"})
    }, 2000)
}

function saarePostLekarAao(id, cb){
    console.log("fetching all posts...")
    setTimeout(()=>{
        cb({_id:id, posts: ["hey", "hello", "good morning"]})
    }, 3000)

} 

function savedPostNikaalo(id, cb){
    console.log("fetching saved post....")
    setTimeout(()=>{
        cb({_id: id, saved: [1,2,3,45, 4, 323]});
    }, 4000)
}



// This code looks like old  its say callback hell but now in morden time code writin wiht sync await


profileLekarAao("Harsh", function (data) { 
    console.log(data)
    saarePostLekarAao(data._id, function (posts) { 
        console.log(posts)

        savedPostNikaalo(data._id, function (saved) { {
            console.log(saved)
        } } )
     }) 
 })