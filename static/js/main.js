
/// --- CONSTANTS ---
// player options
const Gamer = {
    Blue: 1,
    Red: 2,
};
// game_field: game_field (each box with player value)
// game_state: game_state (won, boxes placed)

/// --- VARIABLES ---
// current game field
gm_field = game_field;
// current game state (selection count)
gm_state = game_state;
// current active player
atv_player = Gamer.Blue;
// current active frame
atv_frame = -1;
// last selected box
last_box = -1;

/// --- HTML ---
let switch_player = document.getElementById("switch-player");
let apply_btn = document.getElementById("apply-btn");
let change_box_size = document.getElementById("BoxSize");
let new_game = document.getElementById("new-game");

/// --- HTML FUNCTIONS ---
// set_box(value) 

/// ---- COOKIES ----
// save_file (String(bool)) has possible data to load in
// gm_field (dict) game field state
// gm_state (dict) game state
// atv_player (int) the active player
// atv_frame (int) active white frame
// box_size (int) sizes of grid

function create_empty_field() {
    set_cookie("save_file", "true", 2);
    gm_field = game_field;
    gm_state = game_state; 
    atv_player = Gamer.Blue;
    atv_frame = -1;
    last_box = -1;
}

window.onload = () => {
    if (get_cookie("save_file") == 0 || get_cookie("save_file") == undefined || get_cookie("save_file" == null)) {
        create_empty_field();
        paint_all();
    } else {
        gm_fd = get_cookie("gm_field");
        gm_field = gm_fd == null ? game_field : gm_fd;

        gm_st = get_cookie("gm_state");
        gm_state = gm_st == null ? game_state : gm_st;

        atv_pr = get_cookie("atv_player");
        atv_player = atv_pr == null ? Gamer.Blue : atv_pr;

        atv_fm = get_cookie("atv_frame");
        atv_frame = atv_fm == null ? atv_frame : atv_fm;
        paint_all();
    }
}

