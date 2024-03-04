
const Gamer = {
    Blue: 1,
    Red: 2,
};

let field = window.game_field;
let last_box = "";

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
    if (last_box != "") {
        if (active_player == Gamer.Blue) {
            document.getElementById(last_box).style = "background-color: var(--blue-player);";
        } else {
            document.getElementById(last_box).style = "background-color: var(--red-player);";
        }
    }
    last_box = "";
    change_player();
});


function set_box(value) {
    let box_id = "box" + String(value);
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

