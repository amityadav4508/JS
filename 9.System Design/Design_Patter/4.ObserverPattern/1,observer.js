/*  Observer Pattern: • Ek object (Subject) ke paas kuch log (Observers) hote hain jo usko follow karte hain.
 Jab bhi Subject mein change hota hai,  wo sabko automatically notify kar deta hai.

 EX:
 Tumne YouTube channel subscribe kiya
 Jab new video aati hai → tumhe notification milta hai

 Channel = Subject
 Tum = Observer

Kaise kaam karta hai (flow)
Observer bolta hai: "Mujhe subscribe kar lo"
Subject usko list mein add kar leta hai
Jab subject mein change hota hai
Wo sab observers ko notify karta hai */


class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }

    update(data) {
        console.log(this.name + " received update:", data);
    }
}

// Usage
const subject = new Subject();

const user1 = new Observer("Amit");
const user2 = new Observer("Rahul");

subject.subscribe(user1);
subject.subscribe(user2);

subject.notify("New Video Uploaded!");