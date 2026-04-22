function getUsers(){

fetch("https://randomuser.me/api/?results=3")
.then(raw=> raw.json())
.then((data)=>{
 document.querySelector(".users").innerHTML = "";
 results = data.results
 results.forEach((user)=>{
    const card = document.createElement("div");
    card.className = "bg-white shadow-lg rounded-2xl p-6 w-80 text-center hover:shadow-xl transition";

    const img = document.createElement("img");
    img.className = "w-24 h-24 rounded-full mx-auto border-4 border-blue-500";
    img.src = user.picture.large;
    img.alt = "User Image";

    const name = document.createElement("h2");
    name.className = "text-xl font-semibold mt-4";
    name.textContent = user.name.title + " " + user.name.first + " " + user.name.last;

    const role = document.createElement("p");
    role.className = "text-gray-500 text-sm";
    role.textContent = "Frontend Developer";

    const email = document.createElement("p");
    email.className = "text-gray-600 text-sm mt-2";
    email.textContent = user.email;

    const btnContainer = document.createElement("div");
    btnContainer.className = "flex justify-center gap-3 mt-4";

    const followBtn = document.createElement("button");
    followBtn.className = "bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600";
    followBtn.textContent = "Follow";

    const messageBtn = document.createElement("button");
    messageBtn.className = "border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100";
    messageBtn.textContent = "Message";

    // Append buttons to container
    btnContainer.appendChild(followBtn);
    btnContainer.appendChild(messageBtn);

    // Append all elements to card
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(role);
    card.appendChild(email);
    card.appendChild(btnContainer);

    // Finally append card to body (or any parent element)
    document.querySelector(".users").appendChild(card);
        })

    })
    .catch((err)=>{
        console.log(err)
    })
    }

    getUsers();

    document.querySelector("#refreshBtn").addEventListener("click", function(){
        getUsers();

});

