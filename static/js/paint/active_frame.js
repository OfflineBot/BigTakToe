
function paint_won_games() {
    for (let i = 1; i < 10; i++) {
        let field = "field"+String(i);
        let value = gm_state[field]["won"];
        if (value == 0) { continue; }

        let color = value == 1 ? "box-shadow: inset 0 0 10px 5px var(--blue-player);" : "box-shadow: inset 0 0 10px 5px var(--red-player);";
        set_element_style(field, color);
    }
}

function paint_active_frame() {
    if (atv_frame == -1) {
        set_element_style("field1", "border-color: var(--select-frame);");
        set_element_style("field2", "border-color: var(--select-frame);");
        set_element_style("field3", "border-color: var(--select-frame);");
        set_element_style("field4", "border-color: var(--select-frame);");
        set_element_style("field5", "border-color: var(--select-frame);");
        set_element_style("field6", "border-color: var(--select-frame);");
        set_element_style("field7", "border-color: var(--select-frame);");
        set_element_style("field8", "border-color: var(--select-frame);");
        set_element_style("field9", "border-color: var(--select-frame);");
    } else {
        set_element_style("field1", "border-color: var(--frame-color);");
        set_element_style("field2", "border-color: var(--frame-color);");
        set_element_style("field3", "border-color: var(--frame-color);");
        set_element_style("field4", "border-color: var(--frame-color);");
        set_element_style("field5", "border-color: var(--frame-color);");
        set_element_style("field6", "border-color: var(--frame-color);");
        set_element_style("field7", "border-color: var(--frame-color);");
        set_element_style("field8", "border-color: var(--frame-color);");
        set_element_style("field9", "border-color: var(--frame-color);");

        let game_won = gm_state["field"+String(atv_frame)]["won"];
        if (game_won == 0) { set_element_style("field"+String(atv_frame), "border-color: var(--select-frame);"); } 
        else if(game_won == 1 || game_won == 2) {
            let color = game_won == 1 ? "box-shadow: inset 0 0 10px 5px var(--blue-player);" : "box-shadow: inset 0 0 10px 5px var(--red-player);";
            set_element_style("field"+String(atv_frame), "border-color: var(--select-frame);"+color);
        }
    }
}