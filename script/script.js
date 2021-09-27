var past = document.getElementsByClassName('past');
var present = document.getElementsByClassName('present');
var future = document.getElementsByClassName('future');
var row = document.getElementsByClassName('row');
var hours = ['#9am','#10am','#11am','#12pm','#1pm',
'#2pm','#3pm','#4pm','#5pm']

function loadFromStorage() {
    for(var i=0; i < hours.length-1; i++) {
        $(hours[i]).children('textarea').val(localStorage.getItem(hours[i]))
    }
}

function storeText(id) {
    var inputPlan = $(id).children('textarea').val()
    localStorage.setItem(id, inputPlan)
}

$('#save9').click(function() {
    storeText('#9am');
})
$('#save10').click(function() {
    storeText('#10am');
})
$('#save11').click(function() {
    storeText('#11am');
})
$('#save12').click(function() {
    storeText('#12pm');
})
$('#save1').click(function() {
    storeText('#1pm');
})
$('#save2').click(function() {
    storeText('#2pm');
})
$('#save3').click(function() {
    storeText('#3pm');
})
$('#save4').click(function() {
    storeText('#4pm');
})
$('#save5').click(function() {
    storeText('#5pm');
})

function plannerStyle() {
    var currentTime = moment();
    if (currentTime < moment().hour(9)) {
        $('#9am').removeClass('present')
        $('#9am').addClass('future')
    } 
    if (currentTime > moment().hour(9)) {
        $('#9am').removeClass('present future')
        $('#9am').addClass('past')
    }
    if (currentTime < moment().hour(10)) {
        $('#10am').removeClass('present')
        $('#10am').addClass('future')
        } 
    if (currentTime > moment().hour(10)) {
        $('#10am').removeClass('present future')
        $('#10am').addClass('past')
        }
    if (currentTime < moment().hour(11)) {
        $('#11am').removeClass('present')
        $('#11am').addClass('future')
        } 
    if (currentTime > moment().hour(11)) {
        $('#11am').removeClass('present future')
        $('#11am').addClass('past')
        }
    if (currentTime < moment().hour(12)) {
        $('#12pm').removeClass('present')
        $('#12pm').addClass('future')
        }
    if (currentTime > moment().hour(12)) {
        $('#12pm').removeClass('present future')
        $('#12pm').addClass('past')
        }
    if (currentTime < moment().hour(13)) {
        $('#1pm').removeClass('present')
        $('#1pm').addClass('future')
        }
    if (currentTime > moment().hour(13)) {
        $('#1pm').removeClass('present future')
        $('#1pm').addClass('past')
        }
    if (currentTime < moment().hour(14)) {
        $('#2pm').removeClass('present')
        $('#2pm').addClass('future')
        }
    if (currentTime > moment().hour(14)) {
        $('#2pm').removeClass('present future')
        $('#2pm').addClass('past')
        }
    if (currentTime < moment().hour(15)) {
        $('#3pm').removeClass('present')
        $('#3pm').addClass('future')
        }
    if (currentTime > moment().hour(15)) {
        $('#3pm').removeClass('present future')
        $('#3pm').addClass('past')
        }
    if (currentTime < moment().hour(16)) {
        $('#4pm').removeClass('present')
        $('#4pm').addClass('future')
        }
    if (currentTime > moment().hour(16)) {
        $('#4pm').removeClass('present future')
        $('#4pm').addClass('past')
        }
    if (currentTime < moment().hour(17)) {
        $('#5pm').removeClass('present')
        $('#5pm').addClass('future')
        }
    if (currentTime > moment().hour(17)) {
        $('#5pm').removeClass('present future')
        $('#5pm').addClass('past')
        }
}

loadFromStorage();

window.setInterval(function () {
    $('#currentDay').html(moment().format('dddd, MMMM Do'));
    plannerStyle();
    //storeText();
}, 1000);

