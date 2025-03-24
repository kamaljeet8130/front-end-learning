const addBtn = document.querySelector('#add');
const container = document.querySelector('.container');
// const deleteBtn = document.querySelector('#delete');
const input = document.querySelector('.input');
function addElementToList() {
  const taskElement = document.createElement('p');
  taskElement.classList.add('task');
  return taskElement;
}
function addInputElementToList() {
  const taskElement = document.createElement('input');
  taskElement.classList.add('task');
  return taskElement;
}
function deleteOnClick() {
  const allPTags = document.querySelectorAll('p');
  if (allPTags.length > 0) {
    allPTags[allPTags.length - 1].remove();
  } else if (allPTags.length === 0) {
    alert('No task to remove Add Task');
  }
}

addBtn.addEventListener('click', () => {
  const inputText = input.value;
  if (inputText.trim() === '') {
    alert('Input is Required');
  } else {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    const addElement = addElementToList();
    let textNode = document.createTextNode(`${inputText}`);
    addElement.appendChild(textNode);
    const newBtn = addBtn.cloneNode(true);
    newBtn.textContent = '-';
    const updateButton = document.createElement('button');
    const updateTags = document.createTextNode('update');
    updateButton.appendChild(updateTags);
    updateButton.classList.add('btn');
    wrapper.appendChild(updateButton);
    wrapper.appendChild(addElement);
    wrapper.appendChild(newBtn);
    container.appendChild(wrapper);

    newBtn.addEventListener('click', () => {
      wrapper.remove();
    });
    updateButton.addEventListener('click', () => {
      const updateInputButton = addInputElementToList();
      updateInputButton.value = addElement.textContent;
      addElement.replaceWith(updateInputButton);
    });

    input.value = '';
  }
});
