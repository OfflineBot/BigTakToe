
const Gamer = {
    Blue: 1,
    Red: 2,
};

let active_player = Gamer.Blue;
let switch_player = document.getElementById('switch-player');

switch_player.style = "border-color: var(--blue-player);";

switch_player.addEventListener('click', () => {
        active_player = active_player == Gamer.Blue ? Gamer.Red : Gamer.Blue; 
        if (active_player == Gamer.Blue) {
            switch_player.style = "border-color: var(--blue-player);";
        } else {
            switch_player.style = "border-color: var(--red-player);";
        }
    })

let field = window.game_field;

function set_box(value) {
    console.log(value);
}
