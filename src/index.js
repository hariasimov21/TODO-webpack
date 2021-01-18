import './styles.css';

import { Todo } from './classes/todo.class.js';
import { TodoList } from './classes/todo-list.class';
import { creaTodoHtml } from './js/components';

export const todoList = new TodoList();

todoList.todos.forEach(todo => creaTodoHtml(todo));

console.log(todoList);
/* const tarea = new Todo('Aprender  Javascript');
todoList.nuevoTodo(tarea);

console.log(todoList);
creaTodoHtml(tarea);
 */


/* localStorage.setItem('mi-key', 'Petunia'); */

/* setTimeout(() => {

    localStorage.removeItem('mi-key');
}, 1500) */



// npm install webpack@4.41.6 webpack-cli@3.3.11