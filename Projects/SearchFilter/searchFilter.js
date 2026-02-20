

let users = [
    {
      name: "Amit Sharma",
      pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Frontend developer who loves React and building clean UI designs."
    },
    {
      name: "Priya Verma",
      pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "UI/UX designer passionate about user-centered design and creativity."
    },
    {
      name: "Rahul Mehta",
      pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Full-stack developer working with Node.js and MongoDB."
    },
    {
      name: "Sneha Kapoor",
      pic: "https://images.unsplash.com/photo-1770034849260-2e67f8f423a0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Digital marketer specializing in SEO and content strategy."
    },
    {
      name: "Vikram Singh",
      pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Backend engineer who enjoys solving complex system problems."
    },
    {
      name: "Anjali Gupta",
      pic: "https://randomuser.me/api/portraits/women/6.jpg",
      bio: "Mobile app developer building Android and iOS applications."
    },
    {
      name: "Karan Patel",
      pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "DevOps engineer focused on cloud infrastructure and automation."
    },
    {
      name: "Neha Reddy",
      pic: "https://randomuser.me/api/portraits/women/8.jpg",
      bio: "Data analyst who loves turning data into meaningful insights."
    },
    {
      name: "Arjun Nair",
      pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Software engineer with strong problem-solving and DSA skills."
    },
    {
      name: "Meera Joshi",
      pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Creative content writer and social media strategist."
    }
  ];

//  1. sare users ko show karana
// 2. filter karna har bar input karne pe 
// show karna filtered users

const main = document.querySelector(".main")

function showUsers(arr){
    arr.forEach(function(users){

        // create ourter card div 
        const card = document.createElement("div")
        card.classList.add("card")

        // create image 

        const img = document.createElement("img");
        img.src=users.pic;
        img.classList.add("big-img");

        // create blurred-layer div
        const blurredLayer = document.createElement("div");
        blurredLayer.classList.add("blurred-layer");
        blurredLayer.style.backgroundImage = `url(${users.pic})`; // ✅ fixed
        
        // create content div

        const content = document.createElement("div");
        content.classList.add("content");

        // create h3 & paragraph 
        const heading = document.createElement("h3")
        heading.textContent = users.name;

        const para = document.createElement("p");
        para.textContent = users.bio;

        //  append heading paragraph to content

        content.appendChild(heading);
        content.appendChild(para)

        // Apeend all to card 

        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        main.appendChild(card)




    })


}

showUsers(users);

