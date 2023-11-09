const currState = {
    time: localStorage.getItem('time') == null ? 30 : localStorage.getItem('time'),
    lock: 0,
    index: 0,
    maxTime: this.time,
    currWordCount: 1
}