var textBox = document.getElementById("textBox");
var enterBtn = document.getElementById("enterBtn");
var ul = document.querySelector("ul");
var li = document.getElementsByClassName("li");
var checkBox = document.getElementsByClassName("checkBox");
var deleteBtn = document.getElementsByClassName("deleteBtn");
var deleteAllBtn = document.getElementById("deleteAllBtn");

// TEXTBOX - press enter key to add an item to list *********************
function textBoxFunction() {
    if (event.keyCode === 13 && textBox.value.length > 0) {
        addNewItemToList();
        textBox.value = "";
    } else if (event.keyCode === 13) {
        alert("Please enter an item to-do!");
    }
}

// ENTER BUTTON - click the enter button to add item to list *********************
function enterBtnFunction() {
    if (textBox.value.length > 0) {
        addNewItemToList();
        textBox.value = "";
    } else {
        alert("Please enter an item to-do!");
    }
}

// DELETE ALL BUTTON - click the Delete ALl Items button to remove all items from the list *********************
function deleteAllBtnFunction() {
    ul.innerHTML = "";
}

// CHECKBOX - click on checkbox to strike the item off list *********************
function checkBoxFunction() {
    for (var i = 0; i < checkBox.length; i++) {
        checkBox[i].onclick = function () {
            this.parentNode.classList.toggle("strike");
        };
    }
}

// DELETE BUTTON - click the delete button to delete the list item *********************
function deleteBtnFunction() {
    for (var i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].onclick = function () {
            this.parentNode.parentNode.removeChild(this.parentNode);
        };
    }
}

// Adding New Items to List - adding list element with checkbox and delete button *********************
function addNewItemToList() {
    var newLi = document.createElement("li");
    var innerLi = document.createTextNode(" " + textBox.value + " ");
    newLi.className = "li";

    var createCheckBox = document.createElement("input");
    createCheckBox.type = "checkbox";
    createCheckBox.className = "checkBox";

    var createDeleteButton = document.createElement("button");
    // var nameButtonDelete = document.createTextNode("Delete");
    // createDeleteButton.appendChild(nameButtonDelete);
    createDeleteButton.className = "deleteBtn";

    var createTrashIcon = document.createElement("i");
    createTrashIcon.className = "fa fa-trash";
    createDeleteButton.appendChild(createTrashIcon);

    newLi.appendChild(createCheckBox);
    newLi.appendChild(innerLi);
    newLi.appendChild(createDeleteButton);

    ul.appendChild(newLi);

    deleteBtnFunction();
    checkBoxFunction();
    // listElementFunction();
}

deleteBtnFunction();
checkBoxFunction();
// listElementFunction();

textBox.addEventListener("keypress", textBoxFunction);
enterBtn.addEventListener("click", enterBtnFunction);
deleteAllBtn.addEventListener("click", deleteAllBtnFunction);
