
console.log("code is running");
let form = document.querySelector("form");
let userName = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photourl = document.querySelector("#photourl")
let ProfileCards = document.querySelector(".ProfileCards")

const userManager = {
    
    users:[],
    init: function() {
        form.addEventListener("submit", this.submitForm.bind(this));
    },

    submitForm: function(e){
        e.preventDefault();
        this.addUser();
    },

    addUser: function() {
        this.users.push({
            userName: userName.value,
            role: role.value,
            bio: bio.value,
            photourl: photourl.value, 
        });
        form.reset();
        this.renderUi();
    },
    renderUi: function(){
        document.querySelector(".profileCards").innerHTML= "";
this.users.forEach((user, index) => {

    const userCard = document.createElement("div");
    userCard.className = "userCard bg-white shadow-md rounded-lg overflow-hidden";

    const img = document.createElement("img");
    img.src = user.photourl;
    img.className = "w-40 h-40 rounded-full object-cover";

    const content = document.createElement("div");
    content.className = "p-4";

    const name = document.createElement("h3");
    name.textContent = user.userName;

    const role = document.createElement("p");
    role.textContent = user.role;

    const desc = document.createElement("p");
    desc.textContent = user.bio;

    // ✅ Remove Button
    const btn = document.createElement("button");
    btn.textContent = "Remove";
    btn.className = "mt-2 bg-red-500 text-white px-3 py-1 rounded";

    btn.addEventListener("click", () => {
        this.removeUser(index);
    });

    content.appendChild(name);
    content.appendChild(role);
    content.appendChild(desc);
    content.appendChild(btn);

    userCard.appendChild(img);
    userCard.appendChild(content);

    document.querySelector(".profileCards").appendChild(userCard);
});
    },

removeUser: function(index) {
    const removedUser = this.users.splice(index, 1); // remove from array
    this.renderUi(); // UI refresh

    console.log(removedUser);
}
}
userManager.init();
