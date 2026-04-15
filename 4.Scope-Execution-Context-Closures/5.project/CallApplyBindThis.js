console.log("code is running");

// Select DOM elements
let form = document.querySelector("form");
let userName = document.querySelector("#name");
let roleInput = document.querySelector("#role"); // renamed to avoid conflict
let bio = document.querySelector("#bio");
let photourl = document.querySelector("#photourl");
let profileCards = document.querySelector(".profileCards"); // fixed class name

const userManager = {

    // Array to store users
    users: [],

    // Initialize app
    init: function () {
        // Bind 'this' so it refers to userManager
        form.addEventListener("submit", this.submitForm.bind(this));
    },

    // Handle form submit
    submitForm: function (e) {
        e.preventDefault(); // stop page reload
        this.addUser();
    },

    // Add user to array
    addUser: function () {
        this.users.push({
            userName: userName.value,
            role: roleInput.value,
            bio: bio.value,
            photourl: photourl.value,
        });

        form.reset(); // clear form
        this.renderUi(); // update UI
    },

    // Render UI cards
    renderUi: function () {
        profileCards.innerHTML = ""; // clear old cards

        this.users.forEach((user, index) => {

            // Create card container
            const userCard = document.createElement("div");
            userCard.className = "userCard bg-white shadow-md rounded-lg overflow-hidden";

            // Profile image
            const img = document.createElement("img");
            img.src = user.photourl;
            img.className = "w-40 h-40 rounded-full object-cover";

            // Content container
            const content = document.createElement("div");
            content.className = "p-4";

            // Name
            const nameEl = document.createElement("h3"); // renamed
            nameEl.textContent = user.userName;

            // Role
            const roleEl = document.createElement("p"); // renamed
            roleEl.textContent = user.role;

            // Bio
            const desc = document.createElement("p");
            desc.textContent = user.bio;

            // Remove Button
            const btn = document.createElement("button");
            btn.textContent = "Remove";
            btn.className = "mt-2 bg-red-500 text-white px-3 py-1 rounded";

            // Remove user on click
            btn.addEventListener("click", () => {
                this.removeUser(index);
            });

            // Append elements
            content.appendChild(nameEl);
            content.appendChild(roleEl);
            content.appendChild(desc);
            content.appendChild(btn);

            userCard.appendChild(img);
            userCard.appendChild(content);

            profileCards.appendChild(userCard); // use stored variable
        });
    },

    // Remove user
    removeUser: function (index) {
        const removedUser = this.users.splice(index, 1); // remove from array
        this.renderUi(); // refresh UI

        console.log(removedUser);
    }
};

// Start app
userManager.init();