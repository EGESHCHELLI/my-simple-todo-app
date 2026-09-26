function addTodo(list, text) {
  list.push({ text: text, done: false });
  return list;
}
module.exports = { addTodo };
