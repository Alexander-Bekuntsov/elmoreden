let body = document.getElementById('body');

document.addEventListener('mousemove', function (event) {
    cursorCheck(event);
});

function cursorCheck(event) {
    let share = window.screen.height / 3,
        target = body.getBoundingClientRect(),
        y = event.clientY - target.top;

    if (y >= 0 && y <= share) {
        bodyClassListClear();
        body.classList.add('script-top');
    } else if (y > share && y <= window.screen.height - share) {
        bodyClassListClear();
        body.classList.add('script-middle');
    } else {
        bodyClassListClear();
        body.classList.add('script-bottom');
    }
}

function bodyClassListClear() {
    body.classList.remove('script-top');
    body.classList.remove('script-middle');
    body.classList.remove('script-bottom');
}

setTimeout(document.getElementById('elmoreden').classList.add('active'), 3500);

let button_group = document.getElementById('button'),
    sparks = document.getElementById('button_sparks');

window.onload = function (event) {
    setPositionSparks();
    cursorCheck(event);
}

window.addEventListener('resize', setPositionSparks);

let focused = true;

window.onfocus = function () {
    focused = true;
    body.classList.remove('animation-stop');
};

window.onblur = function () {
    focused = false;
    body.classList.add('animation-stop');
};

function setPositionSparks() {
    position = document.getElementById('button_group').getBoundingClientRect()

    sparks.style.top = position.top + 'px';
    sparks.style.left = position.left + 'px';
}