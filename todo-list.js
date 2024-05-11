

const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList();

function renderTodoList() {

   let todoListHtml = '';

   todoList.forEach((todoObject, index) => {                              // .forEach() method instead of simple for loop.
      const { name, dueDate } = todoObject;
      const html = `
      <div>${name}</div>
         <div>${dueDate}</div>
         <input type="checkbox">
         <button class="delete-todo-button js-delete-todo-button">Delete</button>
         `;
      todoListHtml += html;
   });

   /*
   for (let i = 0; i < todoList.length; i++) {
      const todoObject = todoList[i];

      // Destructuring

      // const name = todoObject.name;
      // const dueDate = todoObject.dueDate;
      const { name, dueDate } = todoObject;
      const html = `
      <div>${name}</div>
         <div>${dueDate}</div>
         <button onClick="
         todoList.splice(${i},1);
         renderTodoList();
         localStorage.setItem('todoList', JSON.stringify(todoList));
         " class="delete-todo-button">Delete</button>
         `;
      todoListHtml += html;
   }
   */

   // console.log(todoListHtml);
   document.querySelector('.js-todo-list').innerHTML = todoListHtml;

   document.querySelectorAll('.js-delete-todo-button')
      .forEach((deleteButton, index) => {
         deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            renderTodoList();
            localStorage.setItem('todoList', JSON.stringify(todoList));
         });
      });
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
   addTodo();
});

function addTodo() {
   const inputElement = document.querySelector('.js-name-input');
   const name = inputElement.value;

   const dateInputElement = document.querySelector('.js-due-date-input');
   const dueDate = dateInputElement.value;
   todoList.push({
      // name: name,
      // dueDate: dueDate
      name,
      dueDate
   });
   console.log(todoList);

   inputElement.value = '';

   renderTodoList();

   localStorage.setItem('todoList', JSON.stringify(todoList));
}