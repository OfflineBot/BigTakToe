
function load_all_cookies() {
    gm_st = get_dict_cookie("gm_state");
    gm_state = gm_st == null || gm_st == undefined ? game_state : gm_st;

    gm_fld = get_dict_cookie("gm_field");
    gm_field = gm_fld == null || gm_fld == undefined ? game_field : gm_fld;

    atv_ply = get_cookie("atv_player");
    atv_player = atv_ply == null || atv_ply == undefined ? atv_player : atv_ply;

    atv_frm = get_cookie("atv_frame");
    atv_frame = atv_frm == null || atv_frm == undefined ? atv_frame : atv_frm;

    let sz = get_cookie("box_size");
    let size = sz == null || sz == undefined ? 60 : sz;
    change_box_size.value = size;
    //let size = change_box_size.value;
    document.documentElement.style.setProperty('--box-size', `${size}px`);
    set_cookie("box_size", size, 2);
}

function set_all_cookies() {
    set_cookie("save_file", "true")
    set_dict_cookie("gm_state", gm_state, 2);
    set_dict_cookie("gm_field", gm_field, 2);
    set_cookie("atv_player", atv_player, 2);
    set_cookie("atv_frame", atv_frame, 2);
}

function delete_all_cookies() {
    delete_cookie("save_file");
    delete_cookie("gm_state");
    delete_cookie("gm_field");
    delete_cookie("atv_player");
    delete_cookie("atv_frame");
}