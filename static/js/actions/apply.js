
function apply() {
    let player = atv_player == Gamer.Blue ? 1 : 2;
    gm_field["box" + String(last_box)] = player;

    let placed_frame = (last_box - (last_box % 10)) / 10;
    gm_state["field" + String(placed_frame)]["placed_fields"] += 1;



    // check if won
    if (has_winner(placed_frame) == 0) {
        if (win_field(placed_frame)) {
            gm_state["field"+String(placed_frame)]["won"] = player;
        }
    }

    atv_frame = last_box % 10;
    if (gm_state["field" + String(atv_frame)]["placed_fields"] >= 9) {
        atv_frame = -1;
    }

    change_player();
    paint_all();
    last_box = -1;
}
