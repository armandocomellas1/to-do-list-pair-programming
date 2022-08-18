/**
 * @jest-environment jsdom
 */
const arrayList = [];

function addTask(string) {
  const getList = document.getElementsByClassName('input_t')[0].value;
  const ggetCount = document.getElementById('list_row');
  let arrayGrow;
  if (arrayList.length <= 0) {
    arrayGrow = 1;
  } else if (arrayList.length > 0) {
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
  if (arrayList.length > 0) {
    const getPrincial = document.getElementById('list_row');
    getPrincial.appendChild(createDiv);
  }
  arrayList.push(newObject);
  localStorage.setItem('List', JSON.stringify(arrayList));
  // document.getElementsByClassName('input_t')[0].value = '';
  return newObject.description;
}

document.getElementsByClassName('input_t')[0].addEventListener('keypress', (event) => {
  const keyCode = event.keyCode ? event.keyCode : event.which;
  if (keyCode === 13) {
    // call click function of the buttonn
    addTask();
  }
});

document.getElementById('unique').addEventListener('click', () => {
  const getDataLocal = localStorage.getItem('List');
  const parseLocalSt = JSON.parse(getDataLocal);
  const fileredData = parseLocalSt.filter((data) => data.completed !== true);
  let resCount = 1;
  fileredData.forEach((ind) => {
    ind.index = resCount;
    resCount += 1;
  });
  localStorage.setItem('List', JSON.stringify(fileredData));
  const getListAll = document.getElementById('list_row').childElementCount;
  let reCount = 0;
  for (let i = 0; i < getListAll; i += 1) {
    const getOne = document.getElementById('list_row').childNodes[reCount].childNodes[1].childNodes[1];
    const another = getOne.checked;
    if (another === true) {
      if (reCount === 0) {
        document.getElementById('list_row').childNodes[reCount].remove();
        reCount = 0;
      } else {
        document.getElementById('list_row').childNodes[reCount].remove();
        reCount = 1;
      }
    } else {
      reCount += 1;
    }
  }
  if (getListAll <= 1) {
    const getOne = document.getElementById('list_row').childNodes[0].childNodes[1].childNodes[1];
    const another = getOne.checked;
    if (another === true) {
      document.getElementById('list_row').childNodes[0].remove();
    }
  }
});

// test('adds 1 + 2 to equal 3', () => {
//   expect(addTask(getInput)).not.toBe('');
// });