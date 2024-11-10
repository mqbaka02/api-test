const time_label= document.getElementById('time-now');

function add_zero_or_not(some_integer) {
    return (some_integer<10) ? '0'+some_integer : some_integer;
}

function get_and_display_time() {
    const time_now= new Date();
    let time_string= '';
    time_string+= add_zero_or_not(time_now.getHours()) + ':' + add_zero_or_not(time_now.getMinutes()) + ':' + add_zero_or_not(time_now.getSeconds());
    time_label.innerText= time_string;
    setTimeout(get_and_display_time, 1000);
}

get_and_display_time();