console.log("App started");

// Run only after DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    /* =SAFE DOM SELECTION======= */
    const form = document.querySelector("form");
    const userName = document.querySelector("#name");
    const roleInput = document.querySelector("#role");
    const bio = document.querySelector("#bio");
    const photourl = document.querySelector("#photourl");
    const profileCards = document.querySelector(".profileCards");
    const searchInput = document.querySelector("#search"); // may be null

    /* USER MANAGER CLASS ========= */
    class UserManager {

        constructor() {
            this.users = this.loadFromStorage(); // load saved users
            this.editIndex = null;

            this.init();

            // render only if container exists
            if (profileCards) {
                this.renderUi();
            }
        }

        /* ============= INIT EVENTS ============== */
        init() {
            // Form submit (safe check)
            if (form) {
                form.addEventListener("submit", (e) => this.handleSubmit(e));
            }
            // Search input (safe check)
            if (searchInput) {
                searchInput.addEventListener("input", () => this.renderUi());
            }
        }

    /* =============== FORM SUBMIT============== */
        handleSubmit(e) {
            e.preventDefault();

            // basic validation
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

        /* =============== LOCAL STORAGE ============== */
        saveToStorage() {
            localStorage.setItem("users", JSON.stringify(this.users));
        }

        loadFromStorage() {
            const data = localStorage.getItem("users");
            return data ? JSON.parse(data) : [];
        }

        /* =============== ADD USER============== */
        addUser() {
            this.users.push({
                userName: userName.value,
                role: roleInput.value,
                bio: bio.value,
                photourl: photourl.value,
            });

            this.saveToStorage();
            form.reset();
            this.renderUi();
        }

        /* =============== EDIT USER ============== */
        editUser(index) {
            const user = this.users[index];

            userName.value = user.userName;
            roleInput.value = user.role;
            bio.value = user.bio;
            photourl.value = user.photourl;

            this.editIndex = index;
        }

        /* ===============UPDATE USER ============== */
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

        /* ===============DELETE USER ============== */
        removeUser(index) {
            this.users.splice(index, 1);
            this.saveToStorage();
            this.renderUi();
        }

        /* ===============SAFE FILTER USERS ============== */
        getFilteredUsers() {
            // 👉 prevent null error
            const searchText = searchInput ? searchInput.value.toLowerCase() : "";

            return this.users.filter(user =>
                user.userName.toLowerCase().includes(searchText) ||
                user.role.toLowerCase().includes(searchText)
            );
        }

        /* ===============RENDER UI ============== */
        renderUi() {
            if (!profileCards) return; // safety check

            profileCards.innerHTML = "";

            const filteredUsers = this.getFilteredUsers();

            filteredUsers.forEach((user) => {

                const userCard = document.createElement("div");
                userCard.className = "userCard bg-white shadow-md rounded-lg overflow-hidden";

                const img = document.createElement("img");
                img.src = user.photourl || "https://via.placeholder.com/150"; // fallback image
                img.className = "w-40 h-40 rounded-full object-cover";

                const content = document.createElement("div");
                content.className = "p-4";

                const nameEl = document.createElement("h3");
                nameEl.textContent = user.userName;

                const roleEl = document.createElement("p");
                roleEl.textContent = user.role;

                const desc = document.createElement("p");
                desc.textContent = user.bio;

                // EDIT BUTTON
                const editBtn = document.createElement("button");
                editBtn.textContent = "Edit";
                editBtn.className = "mt-2 mr-2 bg-blue-500 text-white px-3 py-1 rounded";

                editBtn.addEventListener("click", () => {
                    const realIndex = this.users.indexOf(user);
                    this.editUser(realIndex);
                });

                // DELETE BUTTON
                const deleteBtn = document.createElement("button");
                deleteBtn.textContent = "Remove";
                deleteBtn.className = "mt-2 bg-red-500 text-white px-3 py-1 rounded";

                deleteBtn.addEventListener("click", () => {
                    const realIndex = this.users.indexOf(user);
                    this.removeUser(realIndex);
                });

                content.appendChild(nameEl);
                content.appendChild(roleEl);
                content.appendChild(desc);
                content.appendChild(editBtn);
                content.appendChild(deleteBtn);

                userCard.appendChild(img);
                userCard.appendChild(content);

                profileCards.appendChild(userCard);
            });
        }
    }

    /* ===============  START APP============== */
    new UserManager();

});