const setting_button = document.querySelector('#setting-button');
const setting_cancel = document.querySelector('#setting-cancel');
let temp_lock = lock;

setting_button.addEventListener('click', () => {
    const modal = document.querySelector('.modal-box');
    modal.style.display = 'flex';
    const arr = load_setting();
    console.log(arr);
    lock = 2;
});

setting_cancel.addEventListener('click', () => {
    const modal = document.querySelector('.modal-box');
    modal.style.display = 'none';
    temp_lock = lock;
});

const save_setting = document.querySelector('#save-setting');

save_setting.addEventListener('click', () => {
    const modal = document.querySelector('.modal-box');
    modal.style.display = 'none';
    set_settings(true);
    apply_setting();
    generate_string(50);
    lock = 0;
});

// function togglebutton(x) {
//     if (x == 'darkmode') {
//         const darkmode = document.querySelector('#darkmode');
//         const current = darkmode.style.backgroundColor;
//         console.log(current);
//         // if (current == 'white')
//     }
// }

const darkmode = document.querySelector('#dark-mode');

darkmode.addEventListener('click', () => {
    console.log("clicked!!!!");
    const current = load_setting()[1];
    if (current == 'false') {
        darkmode.style.backgroundColor = 'white';
        darkmode.style.justifyContent = 'flex-end';
        localStorage.setItem('darkMode', true);
    }
    else {
        darkmode.style.backgroundColor = 'black';
        darkmode.style.justifyContent = 'flex-start';
        localStorage.setItem('darkMode', false);
    }
    console.log("current:", current);
});

const iskeyVisible = document.querySelector('#key-visible');

iskeyVisible.addEventListener('click', () => {

    const current = load_setting()[0];
    if (current == 'false') {
        iskeyVisible.style.backgroundColor = 'white';
        iskeyVisible.style.justifyContent = 'flex-end';
        localStorage.setItem('isKeyVisible', true);
    }
    else {
        iskeyVisible.style.backgroundColor = 'black';
        iskeyVisible.style.justifyContent = 'flex-start';
        localStorage.setItem('isKeyVisible', false);
    }
    console.log("current:", current);
});