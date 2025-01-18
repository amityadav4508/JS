
const addNewWorkEField = () =>{
    // console.log("adding new filed");

    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.setAttribute("rows", 3);

   let weOb = document.getElementById("we");
   let weAddButtonOb = document.getElementById("weAddButton");
weOb.insertBefore(newNode, weAddButtonOb)
} 

const AddNewAqField = () =>{
    let newNode = document.createElement('textarea');

    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.setAttribute("row", 3);

    let AqOb = document.getElementById("aq");
    let aqAddButton = document.getElementById("qaAddButton")
    AqOb.insertBefore(newNode, aqAddButton)
}
