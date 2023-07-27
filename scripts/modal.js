const setting_button = document.querySelector('#setting-button');
const setting_cancel = document.querySelector('#setting-cancel');

let temp_lock = lock;

setting_button.addEventListener('click', () => {

    const modal = document.querySelector('.modal-box');
    modal.style.display = 'flex';
    lock = 2;
});

// setting_cancel.addEventListener('click', () => {
//     const modal = document.querySelector('.modal-box');
//     modal.style.display = 'none';
//     temp_lock = lock;
// });

const save_setting = document.querySelector('#save-setting');

save_setting.addEventListener('click', () => {
    const modal = document.querySelector('.modal-box');
    modal.style.display = 'none';
    set_settings(true);
    apply_setting();
    generate_string(50);
    lock = 0;
});
