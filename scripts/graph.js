function plot_list(ctx) {
    const v = Math.floor(650 / set_time);
    for (let i = 0; i < coord.length; i++) {
        coord[i][0] = coord[i][0] * v + 50;
        coord[i][1] = 200 - 2 * coord[i][1];
    }
    ctx.moveTo(coord[1][0], coord[1][1]);
    for (let i = 2; i < coord.length; i++) {
        ctx.lineTo(coord[i][0], coord[i][1]);
        ctx.arc(coord[i][0], coord[i][1], 2, 0, 2 * Math.PI);
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

let retry_lock = 0;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function draw_graph_axes() {
    const popCanvas = document.getElementById("popup");
    popCanvas.style.display = "flex";
    console.log("Graph drawing.....");
    if (canvas.getContext) {
        clear_graph();
        ctx.beginPath();
        ctx.moveTo(50, 0);
        ctx.lineTo(50, 200);
        ctx.lineTo(700, 200);
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
    document.getElementById("raw_text").innerHTML = "";
    document.getElementById('user-input').innerHTML = cursor;
    document.getElementById('timer').innerText = "30";
    document.getElementById('result').innerText = "0 w/m";
    start_run();
    generate_string(50);
});