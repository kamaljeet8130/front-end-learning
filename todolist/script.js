const addBtn = document.querySelector('#add');
const container = document.querySelector('.container');
const deleteBtn = document.querySelector('#delete');
const input = document.querySelector('.input');
function addElementToList() {
  const taskElement = document.createElement('p');
  taskElement.classList.add('task');
  return taskElement;
}
addBtn.addEventListener('click', () => {
  const inputText = input.value;
  if (inputText.trim() === '') {
    alert('Input is Required');
  } else {
    const addElement = addElementToList();
    let textNode = document.createTextNode(`${inputText}`);
    addElement.appendChild(textNode);
    container.appendChild(addElement);
    input.value = '';
  }
});

deleteBtn.addEventListener('click', () => {
  const inputText = input.value;
  const allPTags = document.querySelectorAll('p');
  if (allPTags.length > 0) {
    allPTags[allPTags.length - 1].remove();
  } else if (allPTags.length === 0) {
    alert('No task to remove Add Task');
  }
});
