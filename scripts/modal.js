const setting_button = document.querySelector('#setting-button');

const modal = document.querySelector('.modal-box');

let temp_lock = lock;
setting_button.addEventListener('click', () => {
    modal.style.display = 'flex';
    temp_lock = lock;
    lock = 2;
});

const save_setting = document.querySelector('#save-setting');
save_setting.addEventListener('click', () => {
    modal.style.display = 'none';
    lock = temp_lock;
});
