/**
 * @jest-environment jsdom
 */
const arrayList = [];

function addTask() {
  const getList = document.getElementsByClassName('input_t')[0].value;
  const ggetCount = document.getElementById('list_row');
  let arrayGrow = ggetCount.childElementCount;
  if (arrayGrow <= 0) {
    arrayGrow = 1;
  } else {
    arrayGrow = ggetCount.childElementCount + 1;
  }
  const newObject = {
    description: getList,
    completed: false,
    index: arrayGrow,
  };
  const dataStruct = `
    <div class="list">
      <input class="select" type="checkbox">
      <p class="editable">${newObject.description}</p>
    </div>
    <div class="point">
      <div class="points"></div>
      <div class="points"></div>
      <div class="points"></div>
    </div>
    <div class="delete_img">
      <div class="pointv"></div>
      <div class="pointv"></div>
      <div class="pointv"></div>
    </div>
  `;
  const createDiv = document.createElement('div');
  createDiv.classList.add('rows');
  createDiv.classList.add(newObject.index);
  createDiv.innerHTML = dataStruct;
  createDiv.setAttribute('draggable', true);
  createDiv.classList.add('draggable');
  const getPrincial = document.getElementById('list_row');
  getPrincial.appendChild(createDiv);
  arrayList.push(newObject);
  localStorage.setItem('List', JSON.stringify(arrayList));
  document.getElementsByClassName('input_t')[0].value = '';
  return newObject.description;
}

document.getElementsByClassName('input_t')[0].addEventListener('keypress', (event) => {
  const keyCode = event.keyCode ? event.keyCode : event.which;
  if (keyCode === 13) {
    // call click function of the buttonn
    addTask();
  }
});

const deleteElement = ((checkEvent) => {
  let keyCode = checkEvent.split(' ')[1];
  keyCode -= 1;
  arrayList.splice(keyCode, 1);
  document.getElementsByClassName(checkEvent)[0].remove();
  let resCount = 1;
  arrayList.forEach((ind) => {
    ind.index = resCount;
    resCount += 1;
  });
  localStorage.setItem('List', JSON.stringify(arrayList));
});

document.getElementById('list_row').addEventListener('click', (event) => {
  const checkEvent = event.target.parentElement.className;
  const checkIcon = event.target.className;
  const splitArr = checkEvent.split(' ');
  const getCharAt = splitArr[0];
  if (getCharAt === 'rows' && checkIcon === 'point') {
    const storeData = document.getElementsByClassName(checkEvent)[0];
    storeData.getElementsByClassName('point')[0].style.display = 'none';
    storeData.getElementsByClassName('delete_img')[0].style.display = 'flex';
    storeData.getElementsByClassName('editable')[0].contentEditable = true;
    storeData.getElementsByClassName('editable')[0].focus();
    storeData.style.backgroundColor = 'rgb(231, 230, 177)';
  } else if (getCharAt === 'rows' && checkIcon === 'delete_img') {
    deleteElement(checkEvent);
  }
});

// test('adds 1 + 2 to equal 3', () => {
//   expect(addTask(getInput)).not.toBe('');
// });