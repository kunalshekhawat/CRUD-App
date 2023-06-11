let addBtn = document.getElementById("add_btn");
let parentList = document.getElementById("parentList");
addBtn.addEventListener("click", addChapter);
function addChapter(e) {
  if (parentList.children[0].className == "emptyMsg") {
    parentList.children[0].remove();
  }
  let currentBtn = e.currentTarget;
  let currentInput = currentBtn.previousElementSibling;
  let currentChapterName = currentInput.value;

  let newLi = document.createElement("li");
  newLi.className = "list-group-item d-flex justify-content-between ";
  newLi.innerHTML = `<h3 class="flex-grow-1">${currentChapterName}</h3> <button class="btn btn-warning">Edit</button> <button class="btn btn-danger" onclick="removeChapter(this)">Remove</button>`;

  parentList.appendChild(newLi);
}

function removeChapter(currElement) {
  currElement.parentElement.remove();

  if (parentList.children.length <= 0) {
    let newText = document.createElement("h3");
    newText.classList.add("emptyMsg");
    newText.textContent = "Add Courses";
    parentList.appendChild(newText);
  }
}

function editChapter(currElement) {
  if (currElement.textContent == "Done") {
    currElement.textContent = "Edit";
    let currChapterName = currElement.previousElementSibling.value;
    let currHeading = document.createElement("h3");
    currHeading.className = "flex-grow-1";
    currHeading.textContent = currChapterName;
    currElement.parentElement.replaceChild(
      currHeading,
      currElement.previousElementSibling
    );
  } else {
    currElement.textContent = "Done";
    let currChapterName = currElement.previousElementSibling.textContent;
    let currentInput = document.createElement("input");
    currentInput.type = "text";
    currentInput.className = "form-control";
    currentInput.placeholder = "ChapterName";
    currentInput.value = currChapterName;

    currElement.parentElement.replaceChild(
      currentInput,
      currElement.previousElementSibling
    );
  }
}
