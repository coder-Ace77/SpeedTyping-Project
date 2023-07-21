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