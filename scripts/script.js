//Variables
let time = 30;
let lock = 0;
let index = 0;
let set_time = time;
const cursor = "\u258F";
let typed = cursor;
let coord = [];

document.getElementById('user-input').innerHTML = cursor;
let original;
function start_run() {
    original = document.getElementById('raw_text').innerText;
    back_string = original;
    for (let i = 0; i < original.length; i++) {
        org_arr.push('<span>' + original[i] + '</span>')
    }

}
let l = [];
let org_arr = [];
let special_index = [];
let ans_string = "";
let back_string = "";
let spe_index = 0;
let blink = false;
let curr_speed = 0;
//Make arra

//Helpers

function replace(str, index, replace) {
    return str.slice(0, index) + replace + str.slice(index + 1);
}

//Evaulate 

setInterval(() => {
    let el = document.getElementById('timer');
    console.log(lock);
    if (lock == 2 || lock == 0) {
        return;
    }
    if (lock == 1 && time >= 0) {
        el.innerText = +time;
        if (time < 10) {
            el.innerText = time;
        }
        var arr = ans_string.split(" ");
        var y = original.split(" ");
        let ws = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == y[i]) {
                ws = ws + 1;
            }
        }
        ws = Math.floor((ws) / (set_time - time) * 60)
        document.getElementById("result").innerText = ws + " w/m";
        curr_speed = ws;
        coord.push([set_time - time, ws]);
        time = time - 1;
    }
    if (time == 0) {
        draw_graph_axes();
        lock = 2;
    }
}, 1000);

//main function runs on each keystroke
addEventListener('keydown', (event) => {
    if (event.key == "Shift" || event.key == "Control" || event.key == "Alt" || event.key == "Meta" || event.key == "CapsLock") {
        return;
    }
    if (lock == 0) {
        lock = 1;
    }
    if (lock == 2) {
        return;
    }
    setTimeout(() => {

        if (original[index] == " " && event.key != " " && event.key != "Backspace") {
            return;
        }
        if (event.key == " " && original[index] != " ") {
            return;
        }
        let k = event.key.toLowerCase();
        document.getElementById(k).style.backgroundColor = "white";
        document.getElementById(k).style.color = "black";

        setTimeout((k) => {
            document.getElementById(k).style.backgroundColor = "#925050";
            document.getElementById(k).style.color = "white";

        }, 100, k);
        // If any non needed key pressed
        // Go to next line
        if (event.key == "Enter") {
            l[index] = '<br>';
            l.push('<span class="y">\u258F</span>');
            typed = l.join("");
            document.getElementById('user-input').innerHTML = typed;
            document.getElementById('raw_text').innerHTML = back_string;
            index++;
            ans_string = ans_string + " ";
            return;
        }

        // Implementing Backspace
        if (event.key == "Backspace" && index > 0) {
            l.pop();
            l.pop();
            l.push('<span class="y">\u258F</span>');
            org_arr[index - 1] = '<span>' + original[index - 1] + '</span>';
            typed = l.join("");
            back_string = org_arr.join("");
            index--;
            ans_string = ans_string.slice(0, ans_string.length - 1);
        }
        // When key is pressed!!!
        else {
            l[index] = '<span class="t">x</span>';
            l.push('<span class="y">\u258F</span>');
            typed = l.join("");
            ans_string = ans_string + event.key;
            if (event.key == original[index]) {
                org_arr[index] = '<span class="gre">' + event.key + '</span>';
            }
            else {
                org_arr[index] = '<span class="red">' + event.key + '</span>';
            }

            back_string = org_arr.join("");
            index++;
        }
        // console.log(typed);
        document.getElementById('raw_text').innerHTML = back_string;
        document.getElementById('user-input').innerHTML = typed;
    }, 10);
})

// ---------------------------------Blink it------------------------------------------------

setInterval(() => {
    if (blink == true) {
        l[index] = '<span class="t">\u258F</span>';
    }
    else {
        l[index] = '<span class="y">\u258F</span>';
    }
    blink = !blink;
    typed = l.join("");
    document.getElementById('user-input').innerHTML = typed;
}, 1000);