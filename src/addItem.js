const arrayList = [];

export default class addLine {
  static addItem(nameEvent) {
    const getList = nameEvent;
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
    ggetCount.appendChild(createDiv);
    arrayList.push(newObject);
    return createDiv;
    // localStorage.setItem('List', JSON.stringify(arrayList));
  }

  static deleteElement(checkEvent) {
    const deleteEl = document.getElementsByClassName(checkEvent)[0].remove();
    return deleteEl;
    // localStorage.setItem('List', JSON.stringify(arrayList));
  }
}