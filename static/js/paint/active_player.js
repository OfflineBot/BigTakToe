
function paint_active_player() {

    if (atv_player == Gamer.Blue) {
        set_element_style("switch-player", "border-color: var(--blue-player);");
    } else {
        set_element_style("switch-player", "border-color: var(--red-player);");
    }

    if (last_box > 0) { set_element_style("box"+String(last_box), "background-color: var(--bc-color);"); }
}