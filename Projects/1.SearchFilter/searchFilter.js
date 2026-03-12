
//  1. sare users ko show karana
// 2. filter karna har bar input karne pe 
// show karna filtered users


let users = [
    {
      name: "Amit Sharma",
      pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Frontend developer who loves React and building clean UI designs."
    },
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


const cards = document.querySelector(".cards");
const inp = document.querySelector(".inp");

function showUsers(arr) {
  cards.innerHTML = ""; // clear once here

    if (arr.length === 0) {
    const error = document.createElement("p");
    error.className = "error";
    error.textContent = "User not found";
    cards.appendChild(error);
    return;
  }

  const fragment = document.createDocumentFragment();

  arr.forEach(user => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = user.pic;
    img.className = "big-img";

    const blurredLayer = document.createElement("div");
    blurredLayer.className = "blurred-layer";
    blurredLayer.style.backgroundImage = `url(${user.pic})`;

    const content = document.createElement("div");
    content.className = "content";

    const heading = document.createElement("h3");
    heading.textContent = user.name;

    const para = document.createElement("p");
    para.textContent = user.bio; // ✅ FIXED

    content.append(heading, para);
    card.append(img, blurredLayer, content);
    fragment.appendChild(card);
  });

  cards.appendChild(fragment);
}

// initial render
showUsers(users);

// filtering
inp.addEventListener("input", () => {
  const value = inp.value.trim().toLowerCase();

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().startsWith(value)
    // or: includes(value)
  );


  showUsers(value ? filteredUsers : users);
});

