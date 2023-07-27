function setProgress(x) {
    console.log("Progress bar", x);
    if (localStorage.getItem('runs') == null) {
        localStorage.setItem('runs', 0);
        localStorage.setItem('prev_speed', 0);
        return;
    }
    let runs = parseInt(localStorage.getItem('runs'));
    let prev_speed = parseFloat(localStorage.getItem('prev_speed'));
    let changed_speed = ((prev_speed * runs) + x) / (runs + 1);
    localStorage.setItem('prev_speed', changed_speed);
    localStorage.setItem('runs', runs + 1);
}

function set_settings(isModalOpen) {
    if (localStorage.getItem('set_settings') == null) {
        localStorage.setItem('set_settings', true);
        localStorage.setItem('darkMode', true);
        localStorage.setItem('isKeyVisible', true);
        localStorage.setItem('time', 30);
        return;
    }
    if (isModalOpen == false) return;
    const iskeyVisible = document.querySelector('#isKeyVisible').checked;
    const darkMode = document.querySelector('#darkMode').checked;
    const time = document.querySelector('#time');
    // console.log(iskeyVisible, darkMode, time.value);
    localStorage.setItem('isKeyVisible', iskeyVisible);
    localStorage.setItem('darkMode', darkMode);
    localStorage.setItem('time', time.value);
}

function load_setting() {
    if (localStorage.getItem('set_settings') == null) return;
    const iskeyVisible = localStorage.getItem('isKeyVisible');
    const darkMode = localStorage.getItem('darkMode');
    const temptime = localStorage.getItem('time');
    console.log(iskeyVisible, darkMode, temptime);
    return [iskeyVisible, darkMode, temptime];
}
function apply_setting() {
    const [iskeyVisible, darkMode, temp] = load_setting();
    console.log(iskeyVisible, darkMode, temp);
    document.querySelector('.keyboard').style = iskeyVisible == 'true' ? 'display: flex' : 'display: none';
    let temptime = 30;
    if (temp != null) {
        console.log("temp", temp);
        temptime = temp;
    }
    console.log(temptime);
    document.querySelector('#timer').innerHTML = temptime;
    time = temptime;
    set_time = temptime;
}