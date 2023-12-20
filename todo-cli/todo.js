const todoList = () => {
    const all = [];
  
    const add = (todoItem) => {
      all.push(todoItem);
    };
  
    const markAsComplete = (index) => {
      all[index].completed = true;
    };
  
    const overdue = () => {
      const currentDate = new Date();
      return all.filter((todo) => new Date(todo.dueDate) < currentDate && !todo.completed);
    };
  
    const dueToday = () => {
      const currentDate = new Date();
      return all.filter((todo) => {
        const todoDate = new Date(todo.dueDate);
        return (
          todoDate.toISOString().split('T')[0] === currentDate.toISOString().split('T')[0] &&
          !todo.completed
        );
      });
    };
  
    const dueLater = () => {
      const currentDate = new Date();
      return all.filter((todo) => {
        const todoDate = new Date(todo.dueDate);
        return todoDate > currentDate && !todo.completed;
      });
    };
  
    const toDisplayableList = (list) => {
      const formattedList = list.map((todo) => {
        let formattedTodo = '';
        if (new Date(todo.dueDate).toISOString().split('T')[0] === new Date().toISOString().split('T')[0]) {
          formattedTodo += `[x] ${todo.title}\n`;
        } else {
          formattedTodo += `[ ] ${todo.title} ${todo.dueDate}\n`;
        }
        return formattedTodo;
      });
      return formattedList.join('');
    };
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList,
    };
  };
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
  const todos = todoList();
  
  const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  
  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  
  todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
  todos.add({ title: 'Pay rent', dueDate: today, completed: true })
  todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
  todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
  todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })
  
  console.log("My Todo-list\n")
  
  console.log("Overdue")
  var overdues = todos.overdue()
  var formattedOverdues = todos.toDisplayableList(overdues)
  console.log(formattedOverdues)
  console.log("\n")
  
  console.log("Due Today")
  let itemsDueToday = todos.dueToday()
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
  console.log(formattedItemsDueToday)
  console.log("\n")
  
  console.log("Due Later")
  let itemsDueLater = todos.dueLater()
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
  console.log(formattedItemsDueLater)
  console.log("\n\n")