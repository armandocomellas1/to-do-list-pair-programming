/**
 * @jest-environment jsdom
 */
import addLine from './addItem';

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
const getCount = getOBject.index;
const getNameInput = document.getElementsByClassName('editable')[0].innerHTML;
const getObjectProp = getOBject.classList.value;

describe('Test add and remove', () => {
  test('Expect input text should not be empty', () => {
    const validateInput = addLine.addItem(getNameInput);
    expect(validateInput).not.toBe('');
  });

  test('Expect object of list has not index of cero', () => {
    const validateInput = addLine.addItem(getCount);
    expect(validateInput).not.toBe(0);
  });

  test('Expect to remove exactly the line', () => {
    const validateInput = addLine.deleteElement(getObjectProp);
    expect(validateInput).toBeUndefined();
  });
});