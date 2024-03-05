
function set_cookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    } else {
        console.log("Error with days");
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function get_cookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

function delete_cookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

function set_dict_cookie(name, dict, days) {
    let value = JSON.stringify(dict)
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    } else {
        console.log("Error with days");
    }
    document.cookie = name + "=" + (encodeURIComponent(value) || "") + expires + "; path=/";
}

function get_dict_cookie(name) {
    let name_eq = name + "=";
    var cookieString = decodeURIComponent(document.cookie);
    var cookieArray = cookieString.split(';');
    var myCookie;

    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i].trim();
        if (cookie.indexOf(name_eq) === 0) {
            myCookie = cookie.substring(name_eq.length, cookie.length);
            break;
        }
    }

    if (myCookie) {
        var parsedDict = JSON.parse(myCookie);
        return parsedDict;
    }
}