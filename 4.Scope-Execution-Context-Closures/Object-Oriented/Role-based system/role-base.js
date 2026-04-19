
/* I can help you add:
Need to update Next step
👉 Login system (only real admin)
👉 Hide role input (auto assign)
👉 Unique ID instead of index
👉 Backend (Node.js + DB) */



console.log("App started");

document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");
    const userName = document.querySelector("#name");
    const roleInput = document.querySelector("#role");
    const bio = document.querySelector("#bio");
    const photourl = document.querySelector("#photourl");
    const profileCards = document.querySelector(".profileCards");
    const searchInput = document.querySelector("#search");

    class UserManager {

        constructor() {
            this.users = this.loadFromStorage();
            this.editIndex = null;
            this.init();
            this.renderUi();
        }

        init() {
            if (form) {
                form.addEventListener("submit", (e) => this.handleSubmit(e));
            }

            if (searchInput) {
                searchInput.addEventListener("input", () => this.renderUi());
            }
        }

        handleSubmit(e) {
            e.preventDefault();

            if (!userName.value || !roleInput.value) {
                alert("Name and Role are required!");
                return;
            }

            if (this.editIndex !== null) {
                this.updateUser();
            } else {
                this.addUser();
            }
        }

        saveToStorage() {
            localStorage.setItem("users", JSON.stringify(this.users));
        }

        loadFromStorage() {
            const data = localStorage.getItem("users");
            return data ? JSON.parse(data) : [];
        }

        addUser() {
            this.users.push({
                userName: userName.value,
                role: roleInput.value || "User",
                bio: bio.value,
                photourl: photourl.value,
            });

            this.saveToStorage();
            form.reset();
            this.renderUi();
        }

        editUser(index) {
            const user = this.users[index];

            userName.value = user.userName;
            roleInput.value = user.role;
            bio.value = user.bio;
            photourl.value = user.photourl;

            this.editIndex = index;
        }

        updateUser() {
            this.users[this.editIndex] = {
                userName: userName.value,
                role: roleInput.value,
                bio: bio.value,
                photourl: photourl.value,
            };

            this.editIndex = null;
            this.saveToStorage();
            form.reset();
            this.renderUi();
        }

        removeUser(index) {
            this.users.splice(index, 1);
            this.saveToStorage();
            this.renderUi();
        }

        getFilteredUsers() {
            const searchText = searchInput ? searchInput.value.toLowerCase() : "";

            return this.users.filter(user =>
                user.userName.toLowerCase().includes(searchText) ||
                user.role.toLowerCase().includes(searchText)
            );
        }

        renderUi() {
            if (!profileCards) return;

            profileCards.innerHTML = "";

            const filteredUsers = this.getFilteredUsers();

            if (filteredUsers.length === 0) {
                profileCards.innerHTML = "<p>No users found</p>";
                return;
            }

            filteredUsers.forEach((user) => {

                const userCard = document.createElement("div");
                userCard.className = "bg-white shadow-md rounded-lg p-4 text-center";

                const img = document.createElement("img");
                img.src = user.photourl || "https://via.placeholder.com/150";
                img.className = "w-24 h-24 mx-auto rounded-full mb-2";

                const nameEl = document.createElement("h3");
                nameEl.textContent = user.userName;

                const roleEl = document.createElement("p");
                roleEl.textContent = "Role: " + user.role;

                const desc = document.createElement("p");
                desc.textContent = user.bio;

                userCard.appendChild(img);
                userCard.appendChild(nameEl);
                userCard.appendChild(roleEl);
                userCard.appendChild(desc);

                /* 🔥 ADMIN ONLY CONTROLS */
                if (user.role.toLowerCase() === "admin") {

                    const editBtn = document.createElement("button");
                    editBtn.textContent = "Edit";
                    editBtn.className = "mt-2 mr-2 bg-blue-500 text-white px-3 py-1 rounded";

                    editBtn.addEventListener("click", () => {
                        const realIndex = this.users.indexOf(user);
                        this.editUser(realIndex);
                    });

                    const deleteBtn = document.createElement("button");
                    deleteBtn.textContent = "Remove";
                    deleteBtn.className = "mt-2 bg-red-500 text-white px-3 py-1 rounded";

                    deleteBtn.addEventListener("click", () => {
                        if (confirm("Are you sure?")) {
                            const realIndex = this.users.indexOf(user);
                            this.removeUser(realIndex);
                        }
                    });

                    userCard.appendChild(editBtn);
                    userCard.appendChild(deleteBtn);
                }

                profileCards.appendChild(userCard);
            });
        }
    }

    new UserManager();
    
});
