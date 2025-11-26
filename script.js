const itemList = document.querySelector(".itemList");
const addTaskButton = document.querySelector(".btn-submit");
const inputTask = document.querySelector(".input-task");
const btnTrash = document.querySelector(".trash");

const validInput = () => inputTask.value.trim().length > 0;

function handleTaskButton() {
  if (!validInput()) {
    console.log(validInput());
    inputTask.classList.add("error");
  }
  else{
    itemList.
  }
}

function handleChangeInput() {
  if (validInput()) {
    console.log(validInput());
    inputTask.classList.remove("error");
  }
}

addTaskButton.addEventListener("click", handleTaskButton);

inputTask.addEventListener("change", handleChangeInput);
