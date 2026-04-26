class YouTubeChannel{
    constructor(){
        this.subscriber = [];
    }

    subscribe(user){
        this.subscriber.push(user);
        user.update(`${user.name} - have subscribe the channel`)
    }

    unsubscribe(user){

        this.subscriber = this.subscriber.filter((sub)=> sub != user)
        user.update(`You have un-subscribed the chanel.`);
    }


    notify(message){

        this.subscriber.forEach((sub)=> sub.update(message));
    }
}

class User{
    constructor(name){
        this.name = name;
    }

    update(data){
        console.log(`${data}`)
    }
}

let sheryians = new YouTubeChannel();
let user1 = new User("Harsh");
let user2 = new User("Amit")

sheryians.subscribe(user1);
sheryians.subscribe(user2);

sheryians.notify("new video is live on the chanel...")


 
