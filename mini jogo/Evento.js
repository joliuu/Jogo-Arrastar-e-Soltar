const draggables = document.querySelectorAll('.draggable');
const dropzones = document.querySelectorAll('.dropzone');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
    draggable.addEventListener('dragend', dragEnd);
});

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', dragOver);
    dropzone.addEventListener('drop', drop);
    dropzone.addEventListener('dragenter', dragEnter);
    dropzone.addEventListener('dragleave', dragLeave);
});
//O evento dragStar é disparado no início de um arrastamento de um elemento//
function dragStart(event) {
    event.dataTransfer.setData('text', event.target.id);
    event.target.classList.add('dragging');
}
//O evento dragEnd é disparado quando o arrastamento é finalizado//
//ou seja por soltar/cancelar o arrastamento //
function dragEnd(event) {
    event.target.classList.remove('dragging')
}
//O evento dragOver é disparado quando elemento arrastado//
//é movido sobre uma área onde ele pode ser solto//
function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData('text');
    const draggable = document.getElementById(id);

    if (event.target.id.includes(draggable.id)) {
        event.target.appendChild(draggable);
        event.target.classList.remove('over');
    }
}
//O evento dragEnter é disparado quando um elemento//
//arrastado entre uma área válida//
function dragEnter(event) {
    event.preventDefault();
    if (event.target.classList.contains('dropzone')) {
        event.target.classList.add('over');
    } else {
        console.log('Não é possível colocar aqui');
    }
}

function dragLeave(event) {
    if (event.target.classList.contains('dropzone')) {
        event.target.classList.remove('over');
    } else {
        console.log('Não é possível colocar aqui');
    }
}
