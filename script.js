const $inputTask = document.getElementById('input-task');
const $listTasks = document.getElementById('list-container');
const $btnAddTask = document.getElementById('btn-add_task');
const $btnClear = document.getElementById('btn-clear');


$btnAddTask.addEventListener('click', (e) => {
    if ($inputTask.value === '') {
        alert('¡You must write a task!');
    } else {
        let $li = document.createElement('li');
        $li.innerHTML = $inputTask.value;
        $listTasks.appendChild($li);
        let $span = document.createElement('span');
        $span.innerHTML = '\u00d7';
        $li.appendChild($span);
    }
    $inputTask.value = '';
    saveData();
}, true);

$listTasks.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        saveData();
        e.target.classList.toggle('checked');
    } else if (e.target.tagName === 'SPAN') {
        saveData();
        e.target.parentElement.remove();
    }
}, false)

$btnClear.addEventListener('click', (e) => {
    $listTasks.innerHTML = '';
    saveData();
})

function saveData() {
    localStorage.setItem('data', $listTasks.innerHTML);
}

function showData() {
    $listTasks.innerHTML = localStorage.getItem('data');
}
showData();