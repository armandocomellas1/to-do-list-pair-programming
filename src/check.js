export default function status() {
  document.getElementById('list_row').addEventListener('click', (event) => {
    if (event.target.className === 'select') {
      const getParentName = event.path[1].children[1];
      getParentName.style.textDecoration = 'line-through';
      let getIndexUpdate = event.path[2].className;
      getIndexUpdate = getIndexUpdate.split(' ');
      const indexAt = getIndexUpdate[1];
      const getDescript = event.path[1].children[1].innerText;
      // getDescript = getDescript.split(' ');
      // const indexAt = getDescript[1];
      const result = {
        description: getDescript,
        completed: true,
        index: indexAt,
      };
      const getDataLocal = localStorage.getItem('List');
      const parseLocalSt = JSON.parse(getDataLocal);
      parseLocalSt.forEach((data) => {
        const comparedata = Number(data.index);
        const compareResult = Number(result.index);
        if (comparedata === compareResult) {
          // Nada
          data.completed = true;
        }
      });
      localStorage.setItem('List', JSON.stringify(parseLocalSt));
    }
  });

  document.getElementById('list_row').addEventListener('mousedown', (event) => {
    function getDragAfterElement(container, y) {
      const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];
      return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        if (offset < 0 && offset > closest.offset) {
          return {
            offSet: offset,
            element: child,
          };
        }
        return closest;
      }, { offset: Number.NEGATIVE_INFINITY }).element;
    }

    const setItems = (() => {
      const getListDOM = document.querySelectorAll('.contains');
      let indCont = 1;
      const arrayUpdate = [];
      getListDOM.forEach((container) => {
        for (let i = 0; i < container.childElementCount; i += 1) {
          let reachChild = container.childNodes;
          reachChild = reachChild[i].innerText;
          const result = {
            description: reachChild,
            completed: false,
            index: indCont,
          };
          arrayUpdate.push(result);
          indCont += 1;
        }
        localStorage.setItem('List', JSON.stringify(arrayUpdate));
      });
    });

    if (event.target.className === 'point') {
      const draggables = document.querySelectorAll('.rows');
      const containers = document.querySelectorAll('.contains');

      draggables.forEach((draggable) => {
        draggable.addEventListener('dragstart', () => {
          draggable.classList.add('dragging');
          draggable.style.fontWeight = 'bold';
        });

        draggable.addEventListener('dragend', () => {
          draggable.classList.remove('dragging');
          draggable.style.fontWeight = 'normal';
          setItems();
        });
      });

      containers.forEach((container) => {
        container.addEventListener('dragover', (e) => {
          e.preventDefault();
          const afterElement = getDragAfterElement(container, e.clientY);
          const draggable = document.querySelector('.dragging');
          if (afterElement == null) {
            container.appendChild(draggable);
          } else {
            container.insertBefore(draggable, afterElement);
          }
        });
      });
    }
  });
}
