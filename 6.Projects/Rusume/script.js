function addWork(){
  let block = document.createElement("div");

  block.innerHTML = `
    <input class="form-control mb-2 weRole" placeholder="Role">
    <input class="form-control mb-2 weCompany" placeholder="Company">
    <input class="form-control mb-2 weDuration" placeholder="Duration">
    <input class="form-control mb-2 weLocation" placeholder="Location">
    <textarea class="form-control mb-2 weTasks" placeholder="Tasks (one per line)"></textarea>
  `;

  document.getElementById("we").appendChild(block);
}

function addField(className, parentId){
  let newNode=document.createElement("textarea");
  newNode.classList.add("form-control",className,"mt-2");
  document.getElementById(parentId).appendChild(newNode);
}

function generateCV(){
document.getElementById("cv-template").style.display="block";

nameT.innerText=nameField.value;
roleT.innerText=roleField.value;
contactT.innerText=contactField.value;
addressT.innerText=addressField.value;
objectiveT.innerText=objectiveField.value;

// Email clickable
emailT.innerHTML = emailField.value 
  ? `<a href="mailto:${emailField.value}">${emailField.value}</a>` : "";

// Links
function makeLink(url){
  return url ? `<a href="${url}" target="_blank">${url}</a><br>` : "";
}

linksT.innerHTML =
  makeLink(fbField.value) +
  makeLink(instaField.value) +
  makeLink(linkedinField.value);

// Experience
let weT = document.getElementById("weT");
weT.innerHTML = "";

let roles = document.querySelectorAll(".weRole");
let companies = document.querySelectorAll(".weCompany");
let durations = document.querySelectorAll(".weDuration");
let locations = document.querySelectorAll(".weLocation");
let tasks = document.querySelectorAll(".weTasks");

for(let i=0; i<roles.length; i++){
  if(roles[i].value){
    let taskList = tasks[i].value
      .split("\n")
      .map(t => `<li>${t}</li>`)
      .join("");

    weT.innerHTML += `
      <div class="exp-block">
        <strong>${roles[i].value}</strong> - ${companies[i].value}<br>
        <small>${durations[i].value} | ${locations[i].value}</small>
        <ul>${taskList}</ul>
      </div>
    `;
  }
}

// Education
aqT.innerHTML="";
document.querySelectorAll(".aqField").forEach(e=>{
 if(e.value) aqT.innerHTML+=`<li>${e.value}</li>`;
});
}

// PRINT
function printCV(){
window.print();
}

// PDF
function downloadPDF(){
const { jsPDF } = window.jspdf;

html2canvas(document.getElementById("cv-template"),{
 scale:2
}).then(canvas=>{
let img=canvas.toDataURL("image/png");

let doc=new jsPDF("p","mm","a4");
let width=210;
let height=(canvas.height*width)/canvas.width;

doc.addImage(img,"PNG",0,0,width,height);
doc.save("resume.pdf");
});
}