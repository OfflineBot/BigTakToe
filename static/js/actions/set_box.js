
function box_frame_valid(value) {
    let value_id = Math.floor(value / 10);
    return value_id == atv_frame ? true : false;
}

// selecting a box
function set_box(value) {
    let box_id = "box" + String(value);

    if (atv_frame > 0) {
        if (!box_frame_valid(value)) {
            return;
        }
    }

    // checking if field is available
    if (gm_field[box_id] != 0) { return; }
    // checking if last_box exist
    if (last_box > 0) { set_element_style("box"+String(last_box), "background-color: var(--bc-color);"); }

    if (atv_player == Gamer.Blue) {
        set_element_style(box_id, "background-color: var(--select-blue-player);");
    } else {
        set_element_style(box_id, "background-color: var(--select-red-player);");
    }

    last_box = value;
}