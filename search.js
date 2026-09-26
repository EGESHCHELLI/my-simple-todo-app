function searchTodos(list, query) {
  return list.filter(t => t.text.includes(query));
}
module.exports = { searchTodos };
