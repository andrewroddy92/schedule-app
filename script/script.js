var past = document.getElementsByClassName('past');
var present = document.getElementsByClassName('present');
var future = document.getElementsByClassName('future');
var row = document.getElementsByClassName('row');
var currentTime = moment();


// TODO:Why is moment() not defined outside of this function?
window.setInterval(function () {
    $('#currentDay').html(moment().format('dddd, MMMM Do'));

}, 1000);

function plannerStyle() {
    if (currentTime < moment().hour(9)) {
        $('#9am').removeClass('present')
        $('#9am').addClass('future')
    } 
    if (currentTime > moment().hour(9)) {
        $('#9am').removeClass('present')
        $('#9am').addClass('past')
    }
    if (currentTime < moment().hour(10)) {
        $('#10am').removeClass('present')
        $('#10am').addClass('future')
        } 
    if (currentTime > moment().hour(10)) {
        $('#10am').removeClass('present')
        $('#10am').addClass('past')
        }
    if (currentTime < moment().hour(11)) {
        $('#11am').removeClass('present')
        $('#11am').addClass('future')
        } 
    if (currentTime > moment().hour(11)) {
        $('#11am').removeClass('present')
        $('#11am').addClass('past')
        }
    if (currentTime < moment().hour(12)) {
        $('#12pm').removeClass('present')
        $('#12pm').addClass('future')
        }
    if (currentTime > moment().hour(12)) {
        $('#12pm').removeClass('present')
        $('#12pm').addClass('past')
        }
    if (currentTime < moment().hour(13)) {
        $('#1pm').removeClass('present')
        $('#1pm').addClass('future')
        }
    if (currentTime > moment().hour(13)) {
        $('#1pm').removeClass('present')
        $('#1pm').addClass('past')
        }
    if (currentTime < moment().hour(14)) {
        $('#2pm').removeClass('present')
        $('#2pm').addClass('future')
        }
    if (currentTime > moment().hour(14)) {
        $('#2pm').removeClass('present')
        $('#2pm').addClass('past')
        }
    if (currentTime < moment().hour(15)) {
        $('#3pm').removeClass('present')
        $('#3pm').addClass('future')
        }
    if (currentTime > moment().hour(15)) {
        $('#3pm').removeClass('present')
        $('#3pm').addClass('past')
        }
    if (currentTime < moment().hour(16)) {
        $('#4pm').removeClass('present')
        $('#4pm').addClass('future')
        }
    if (currentTime > moment().hour(16)) {
        $('#4pm').removeClass('present')
        $('#4pm').addClass('past')
        }
    if (currentTime < moment().hour(17)) {
        $('#5pm').removeClass('present')
        $('#5pm').addClass('future')
        }
    if (currentTime > moment().hour(17)) {
        $('#5pm').removeClass('present')
        $('#5pm').addClass('past')
        }
}

plannerStyle();