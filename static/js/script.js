
const Gamer = {
    Blue: 1,
    Red: 2,
};

let field = game_field;
let last_box = "";
let last_frame = "";

window.onload = () => {
    let box_cookie = get_cookie("boxSize");
    let active_player_cookie = get_cookie("activePlayer");
    let game_cookie = get_cookie("game");
    let active_frame_cookie = get_cookie("activeFrame");

    document.documentElement.style.setProperty('--box-size', `${box_cookie}px`);
    document.getElementById('BoxSize').value = box;

    if (active_player_cookie != active_player) {
        change_player();
    }

    field = game_cookie
    paint_game(active_frame_cookie);
}

function paint_game(frame_on) {

}

function deselect() {
    document.getElementById("field1").style = "border-color: var(--frame-color);";
    document.getElementById("field2").style = "border-color: var(--frame-color);";
    document.getElementById("field3").style = "border-color: var(--frame-color);";
    document.getElementById("field4").style = "border-color: var(--frame-color);";
    document.getElementById("field5").style = "border-color: var(--frame-color);";
    document.getElementById("field6").style = "border-color: var(--frame-color);";
    document.getElementById("field7").style = "border-color: var(--frame-color);";
    document.getElementById("field8").style = "border-color: var(--frame-color);";
    document.getElementById("field9").style = "border-color: var(--frame-color);";
    set_cookie("activeFrame", "none", 2);
}

// top color btn and active player
let active_player = Gamer.Blue;
let switch_player = document.getElementById('switch-player');

function change_player() {
    active_player = active_player == Gamer.Blue ? Gamer.Red : Gamer.Blue; 
        if (active_player == Gamer.Blue) {
            switch_player.style = "border-color: var(--blue-player);";
        } else {
            switch_player.style = "border-color: var(--red-player);";
        }
    set_cookie("activePlayer", active_player, 2);
}

switch_player.style = "border-color: var(--blue-player);";

switch_player.addEventListener('click', () => {
    if (last_box != "") {
        document.getElementById(last_box).style = "background-color: var(--bc-color);";
    }
    change_player();
});

// apply
document.getElementById('apply-btn').addEventListener("click", () => {
    deselect();
    if (last_box != "") {
        if (active_player == Gamer.Blue) {
            document.getElementById(last_box).style = "background-color: var(--blue-player);";
            field[last_box] = 1;
        } else {
            document.getElementById(last_box).style = "background-color: var(--red-player);";
            field[last_box] = 2;
        }

        let frame = "field" + last_box.slice(-1);
        document.getElementById(frame).style = "border-color: var(--select-frame);";
        set_cookie("activeFrame", frame, 2);
        
    }
    last_box = "";
    change_player();
});


function set_box(value) {
    let box_id = "box" + String(value);

    if (field[box_id] != 0) {
        return;
    }

    if (last_box == "") {
        last_box = box_id;
    } else {
        document.getElementById(last_box).style = "background-color: var(--bc-color);";
        last_box = box_id;
    }

    if (active_player == Gamer.Blue) {
        document.getElementById(box_id).style = "background-color: var(--select-blue-player);";
    } else {
        document.getElementById(box_id).style = "background-color: var(--select-red-player);";
    }
}


document.getElementById('BoxSize').addEventListener('input', () => {
    let size = document.getElementById('BoxSize').value;
    console.log(size)
    document.documentElement.style.setProperty('--box-size', `${size}px`);
    set_cookie("boxSize", size, 2);
});

document.getElementById('load-last').addEventListener("click", () => {
    let player = get_cookie("player");
    let new_field = get_cookie("game");
    let highlight = get_cookie("activeFrame");
    active_player = player;
    field = new_field;
    last_frame = highlight;
    console.log("todo! load last");
});

document.getElementById('save', () => {
    console.log("todo! save");
    set_cookie("game", field, 2);
    set_cookie("activePlayer", active_player, 2);
})

document.getElementById('new-game', () => {
    console.log("todo! new game");
    delete_cookie("activePlayer");
    delete_cookie("game");
    delete_cookie("activeFrame");
})