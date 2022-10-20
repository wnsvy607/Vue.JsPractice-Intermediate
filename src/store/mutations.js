const addOneItem = (state, todoItem) => {
    const obj = { completed: false, item: todoItem };
    // key - value 쌍으로 저장되는 API
    // localStorage에서 확인이 가능해야 하기 때문에 obj 객체를 JSON API를 사용해
    // 문자열로 저장한다.
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}
const removeOneItem = (state, payload) =>{
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
}

const toggleOneItem = (state, payload) => {

    // todoItem.completed = !todoItem.completed;
    // 이렇게 해버리면 todoItems -> propsdata -> todoItem -> toggleComplete(todoItem) -> toggleOneComplete(todoItem)
    // 라는 안티패턴이 생기기 때문에 아래와 같이 인덱스로 직접 접근한다. 
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    // localStorage는 업데이트 하는 API가 없기 때문에 삭제하고 다시 저장한다. (로컬스토리지의 데이터를 갱신)
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}
const clearAllItems = (state) => {
    localStorage.clear();
    state.todoItems = [];
}

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems }