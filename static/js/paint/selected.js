
function paint_boxes() {
    for (let key in gm_field) {
        let value = gm_field[key];
        if (value != 0) {
            value == 1 ? set_element_style(key, "background-color: var(--blue-player);") : set_element_style(key, "background-color: var(--red-player);");
        } else {
            set_element_style(key, "background-color: var(--bc-color);");
        }    
    }
}