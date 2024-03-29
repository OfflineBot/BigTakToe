
switch_player.addEventListener("click", () => {
    change_player();
});

change_box_size.addEventListener("input", () => {
    let size = change_box_size.value;
    document.documentElement.style.setProperty('--box-size', `${size}px`);
    set_cookie("box_size", size, 2);
});

new_game.addEventListener("click", () => {
    create_empty_field();
});

apply_btn.addEventListener("click", () => {
    apply(); 
});