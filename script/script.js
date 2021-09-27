var past = document.getElementsByClassName('past');
var present = document.getElementsByClassName('present');
var future = document.getElementsByClassName('future');
var row = document.getElementsByClassName('row');
var hours = ['#9am','#10am','#11am','#12pm','#1pm',
'#2pm','#3pm','#4pm','#5pm']

function loadFromStorage() {
    for(var i=0; i < hours.length-1; i++) {
        $(hours[i]).html('textarea').val(localStorage.getItem(hours[i]))
    }
}

function storeText(id) {
    var inputPlan = $(id).html('textarea').val()
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

function kinda(currentTime, hour, id) {
    $(id).removeClass('past present future')
    if (currentTime.isBefore(moment().hour(hour), 'hour')) {
        $(id).addClass('future')
    } 
    if (currentTime.isAfter(moment().hour(hour), 'hour')) {
        $(id).addClass('past')
    }
    if (currentTime.isSame(moment().hour(hour), 'hour')) {
        $(id).addClass('present')
    }
}

function plannerStyle() {
    var currentTime = moment();
    kinda(currentTime, 9, '#9am');
    kinda(currentTime, 10, '#10am');
    kinda(currentTime, 11, '#11am');
    kinda(currentTime, 12, '#12pm');
    kinda(currentTime, 13, '#1pm');
    kinda(currentTime, 14, '#2pm');
    kinda(currentTime, 15, '#3pm');
    kinda(currentTime, 16, '#4pm');
    kinda(currentTime, 17, '#5pm');
}

loadFromStorage();

window.setInterval(function () {
    $('#currentDay').html(moment().format('dddd, MMMM Do'));
    plannerStyle();
    //storeText();
}, 1000);

