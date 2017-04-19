//$('.modal-trigger').leanModal();
$('select').material_select();
$(".button-collapse").sideNav();


$('.datepicker_pdate').pickadate({
minDate: 0,
selectMonths: true, // Creates a dropdown to control month
selectYears: 15,
format: 'yyyy-mm-dd',
min: new Date()
});

$('.datepicker_dob').pickadate({
maxDate: 0,
selectMonths: true, // Creates a dropdown to control month
selectYears: 15,
format: 'yyyy-mm-dd',
max: new Date()	
});

var geoNamesUsername = 'uberboomtest';








//Function to allow only numbers to textbox
function validate(key) {
    //getting key code of pressed key
    var keycode = (key.which) ? key.which : key.keyCode;
    var phn = document.getElementById('txt_nok');
    //comparing pressed keycodes
    if (!(keycode == 8 || keycode == 46) && (keycode < 48 || keycode > 57)) {
        return false;
    }
    else {
        //Condition to check textbox contains ten numbers or not
        if (phn.value.length < 10) {
            return true;
        }
        else {
            return false;
        }
    }
}


//Function to allow only numbers to textbox
function validate1(key) {
    //getting key code of pressed key
    var keycode = (key.which) ? key.which : key.keyCode;
    var phn = document.getElementById('txt_cont');
    //comparing pressed keycodes
    if (!(keycode == 8 || keycode == 46) && (keycode < 48 || keycode > 57)) {
        return false;
    }
    else {
        //Condition to check textbox contains ten numbers or not
        if (phn.value.length < 10) {
            return true;
        }
        else {
            return false;
        }
    }
}

$(function () {

    $('#txt_NRIC').keyup(function () {
        var yourInput = $(this).val();
        re = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
        var isSplChar = re.test(yourInput);
        if (isSplChar) {
            var no_spl_char = yourInput.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
            $(this).val(no_spl_char);
        }
    });

});




