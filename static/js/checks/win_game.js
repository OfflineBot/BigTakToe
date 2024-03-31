
function win_game() {

    let main_html = document.getElementById("winner");
    let found_winner = 0;

    for (let i = 1; i < 3; i++) {
        if (gm_state["field1"]["won"] == i && gm_state["field2"]["won"] == i && gm_state["field3"]["won"] == i) { found_winner = i; }
        if (gm_state["field4"]["won"] == i && gm_state["field5"]["won"] == i && gm_state["field6"]["won"] == i) { found_winner = i; }
        if (gm_state["field7"]["won"] == i && gm_state["field8"]["won"] == i && gm_state["field9"]["won"] == i) { found_winner = i; }

        if (gm_state["field1"]["won"] == i && gm_state["field4"]["won"] == i && gm_state["field7"]["won"] == i) { found_winner = i; }
        if (gm_state["field2"]["won"] == i && gm_state["field5"]["won"] == i && gm_state["field8"]["won"] == i) { found_winner = i; }
        if (gm_state["field3"]["won"] == i && gm_state["field6"]["won"] == i && gm_state["field9"]["won"] == i) { found_winner = i; }

        if (gm_state["field1"]["won"] == i && gm_state["field5"]["won"] == i && gm_state["field9"]["won"] == i) { found_winner = i; }
        if (gm_state["field3"]["won"] == i && gm_state["field5"]["won"] == i && gm_state["field7"]["won"] == i) { found_winner = i; }
    }

    if (found_winner != 0) {
        console.log("found winner");
        let color = found_winner == 1 ? "color: var(--blue-player);" : "color: var(--red-player);";
        main_html.innerText = `Player ${found_winner} Won!`;
        set_element_style("winner", color);
    }
}