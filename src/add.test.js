console.log('HOla');
const arrayList = [];
const getPrincial = document.getElementById('list_row');
function addTask(string) {
  const getList = string;
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
  getPrincial.appendChild(createDiv);
  arrayList.push(newObject);
  localStorage.setItem('List', JSON.stringify(arrayList));
  document.getElementsByClassName('input_t')[0].value = '';
  return newObject.description;
}

// const deleteElement = ((checkEvent) => {
//   let keyCode = checkEvent.split(' ')[1];
//   keyCode -= 1;
//   arrayList.splice(keyCode, 1);
//   document.getElementsByClassName(checkEvent)[0].remove();
//   let resCount = 1;
//   arrayList.forEach((ind) => {
//     ind.index = resCount;
//     resCount += 1;
//   });
//   localStorage.setItem('List', JSON.stringify(arrayList));
// });

test('adds 1 + 2 to equal 3', () => {
  expect(addTask('Armando')).not.toBe('');
});