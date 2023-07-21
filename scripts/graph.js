let retry_lock = 0;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function plot_list(ctx) {
    const v = Math.floor(650 / set_time);
    for (let i = 0; i < coord.length; i++) {
        coord[i][0] = coord[i][0] * v + 50;
        coord[i][1] = 200 - 2 * coord[i][1];
    }
    ctx.moveTo(coord[1][0], coord[1][1]);
    for (let i = 2; i < coord.length; i++) {
        // ctx.fillStyle = "red";
        ctx.lineTo(coord[i][0], coord[i][1]);
        ctx.arc(coord[i][0], coord[i][1], 2, 0, 2 * Math.PI);
        // ctx.strokeStyle = "black";
    }
    ctx.stroke();
    setTimeout(() => {
        retry_lock = 1;
    }, 1000);
}

function clear_graph() {
    ctx.fillStyle = "#404258";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
}

function draw_graph_axes() {
    const popCanvas = document.getElementById("popup");
    popCanvas.style.display = "flex";
    console.log("Graph drawing.....");
    if (canvas.getContext) {
        clear_graph();
        ctx.beginPath();
        ctx.moveTo(50, 200);
        let peek_speed = 0;
        for (let i = 0; i < coord.length; i++) {
            if (coord[i][1] > peek_speed)
                peek_speed = coord[i][1];
        }

        let div_y = 40;
        for (let i = 0; i < 5; i++) {
            ctx.lineTo(50, i * div_y + 6);
            ctx.lineWidth = 1;
            ctx.moveTo(45, i * div_y + 6);
            ctx.lineTo(55, i * div_y + 6);
            ctx.font = "12px Arial";
            console.log(Math.floor(peek_speed - (peek_speed / 5) * i), i, i * div_y + 6);
            ctx.fillText(Math.floor(peek_speed - (peek_speed / 5) * i), 30, i * div_y + 12);
            ctx.lineWidth = 2;
            ctx.moveTo(50, 200 - i * div_y);
        }
        let div = 2 * Math.floor(650 / set_time);
        for (let i = 0; i < set_time; i++) {
            ctx.lineTo(50 + i * div, 200);
            if (i == 0)
                continue;
            ctx.lineWidth = 1;
            ctx.moveTo(50 + i * div, 195);
            ctx.lineTo(50 + i * div, 205);
            ctx.font = "12px Arial";
            ctx.fillText(i * 2, 50 + i * div - 5, 220);
            ctx.moveTo(50 + i * div, 200);
            ctx.lineWidth = 2;
        }
        // ctx.lineTo(700, 200);
        ctx.stroke();
        plot_list(ctx);
    }
}

addEventListener("keydown", () => {
    if (retry_lock == 0) return;
    retry_lock = 0;
    const popCanvas = document.getElementById("popup");
    popCanvas.style.display = "none";
    time = set_time;
    lock = 0;
    index = 0;
    set_time = 30;
    typed = cursor;
    coord = [];
    l = [];
    org_arr = [];
    special_index = [];
    ans_string = "";
    back_string = "";
    spe_index = 0;
    coord = [];
    console.log(curr_speed);
    setProgress(curr_speed);
    curr_speed = 0;
    document.getElementById("raw_text").innerHTML = "";
    document.getElementById('user-input').innerHTML = cursor;
    document.getElementById('timer').innerText = "30";
    document.getElementById('result').innerText = "0 w/m";
    start_run();
    generate_string(50);
});