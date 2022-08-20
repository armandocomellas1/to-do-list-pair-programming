/**
 * @jest-environment jsdom
 */
import addLine from './addItem';

const editable = require('./editItem');
const status = require('./checkstatus');
const clear = require('./clearAll');

window.localStorage = Storage.prototype;
document.body.innerHTML = `
<div class="container">
  <div class="cont_title">
    <div class="title">Today's To Do</div>
    <div class="img_refresh"></div>
  </div>
  <div class="add_list">
    <input class="input_two" type="text" placeholder="Add to your list..." value="">
    <div class="img_list"></div>
  </div>
  <div id="list_row" class="contains"></div>
  <button id="unique" class="footer" type="reset">Clear all completed</button>
</div>
`;
const getContainer = document.getElementById('list_row');
const getOBject = addLine.addItem('Finish Challenge');
getContainer.appendChild(getOBject);
let getStatus = getOBject.completed;
getStatus = false;
const getNameInput = document.getElementsByClassName('editable')[0].innerHTML;

describe('Editable, Status and Clear all functions', () => {
  test('Expect description to be changeable', () => {
    const validateInput = addLine.addItem(getNameInput);
    if (validateInput !== '') {
      expect(editable(validateInput)).toBe('different');
    }
  });

  test('Status should be changeable', () => {
    if (getStatus === false) {
      expect(status()).toBeTruthy();
    }
  });

  test('Clear all function', () => {
    const newObject = getOBject;
    if (newObject.description !== undefined && newObject.completed !== false) {
      expect(clear()).toBeNull();
    }
  });
});