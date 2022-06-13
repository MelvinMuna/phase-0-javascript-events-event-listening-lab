
let input = document.getElementById('input');

function addingEventListener() {
    input.addEventListener('click', addingEventListener);
    return('I was clicked')
}

