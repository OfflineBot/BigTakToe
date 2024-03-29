
function set_element_style(id, value) {
    var element = document.getElementById(id);
    var currentStyles = element.style.cssText;
    element.style.cssText = currentStyles + ' ' + value;
}

function add_element_style(element, styling) {
    document.getElementById(element).style.cssText += styling;
}