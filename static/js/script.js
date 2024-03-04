
const Gamer = {
    Blue: 1,
    Red: 2,
};

let field = window.game_field;
let last_box = "";
let last_frame = "";

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
            game_field[last_box] = 1;
        } else {
            document.getElementById(last_box).style = "background-color: var(--red-player);";
            game_field[last_box] = 2;
        }

        let frame = "field" + last_box.slice(-1);
        console.log(frame)
        document.getElementById(frame).style = "border-color: var(--select-frame);";
        
    }
    last_box = "";
    change_player();
});


function set_box(value) {
    let box_id = "box" + String(value);

    if (game_field[box_id] != 0) {
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

