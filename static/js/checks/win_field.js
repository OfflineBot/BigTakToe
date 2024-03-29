
function has_winner(field_id) {
    return gm_state["field"+String(field_id)]["won"];
}

function win_field(field_id) {

    for (let k = 1; k < 3; k++) {

        if (gm_field["box"+String(field_id)+"1"] == k && gm_field["box"+String(field_id)+"2"] == k && gm_field["box"+String(field_id)+"3"] == k) { return true; }
        if (gm_field["box"+String(field_id)+"4"] == k && gm_field["box"+String(field_id)+"5"] == k && gm_field["box"+String(field_id)+"6"] == k) { return true; }
        if (gm_field["box"+String(field_id)+"7"] == k && gm_field["box"+String(field_id)+"8"] == k && gm_field["box"+String(field_id)+"9"] == k) { return true; }

        if (gm_field["box"+String(field_id)+"1"] == k && gm_field["box"+String(field_id)+"4"] == k && gm_field["box"+String(field_id)+"7"] == k) { return true; }
        if (gm_field["box"+String(field_id)+"2"] == k && gm_field["box"+String(field_id)+"5"] == k && gm_field["box"+String(field_id)+"8"] == k) { return true; }
        if (gm_field["box"+String(field_id)+"3"] == k && gm_field["box"+String(field_id)+"6"] == k && gm_field["box"+String(field_id)+"9"] == k) { return true; }

        if (gm_field["box"+String(field_id)+"1"] == k && gm_field["box"+String(field_id)+"5"] == k && gm_field["box"+String(field_id)+"9"] == k) { return true; }
        if (gm_field["box"+String(field_id)+"3"] == k && gm_field["box"+String(field_id)+"5"] == k && gm_field["box"+String(field_id)+"7"] == k) { return true; }
    }

    return false;

}