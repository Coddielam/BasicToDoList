const inputField = document.querySelector("input.inputField");
const addToList = document.querySelector("input.addToList");
const list = document.querySelector("ul.list");

createTodo = () => {
  var li = document.createElement("li");
  li.className = "todoLi";
  li.insertAdjacentHTML(
    "beforeend",
    `
    <button class='up'>Up</button>
  <button class='down'>Down</button>
  <button class='remove'>Remove</button>
  `
  );
  return li;
};

addToList.addEventListener("click", () => {
  if (inputField.value !== "") {
    let todo = inputField.value;
    var li = createTodo();
    li.insertAdjacentText("afterbegin", todo);
    list.appendChild(li);
    inputField.value = "";
  }
});

list.addEventListener("click", (event) => {
  const li = event.target.parentElement;
  const ul = li.parentElement;
  if (event.target.className === "remove") {
    li.remove();
  }
  if (event.target.className === "up") {
    if (li.previousElementSibling) {
      ul.insertBefore(li, li.previousElementSibling);
    }
  }
  if (event.target.className === "down") {
    if (li.nextElementSibling) {
      ul.insertBefore(li.nextElementSibling, li);
    }
  }
});
