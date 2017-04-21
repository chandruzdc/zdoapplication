//$('.modal-trigger').leanModal();
$('select').material_select();
$(".button-collapse").sideNav();

/*$('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 150,
    format: 'yyyy-mm-dd'
});*/

$('.datepicker_pdate').pickadate({
    minDate: 0,
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 100,
    format: 'yyyy-mm-dd',
    min: new Date()
});

$('.datepicker_dob').pickadate({
    maxDate: 0,
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 100,
    format: 'yyyy-mm-dd',
    max: new Date()
});

var geoNamesUsername = 'uberboomtest';


$(function () {
   var $input = $('#txt_NRIC')
	$input.keyup(function(e) {
		var max = 9;
		if ($input.val().length > max) {
			$input.val($input.val().substr(0, max));
		}
	});

var input1 = $('#txt_cont')
	input1.keyup(function(e) {
		var max = 8;
		if (input1.val().length > max) {
			input.val(input1.val().substr(0, max));
		}
	});

var input2 = $('#txt_nok')
	input2.keyup(function(e) {
		var max = 8;
		if (input2.val().length > max) {
			input.val($input2.val().substr(0, max));
		}
	});


    $('#txt_occup').keydown(function (e) {
        if (e.ctrlKey || e.altKey) {
            e.preventDefault();
        } else {
            var key = e.keyCode;
            if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
                e.preventDefault();
            }
        }
    });
    $('#txt_compliant').keydown(function (e) {
        if (e.ctrlKey || e.altKey) {
            e.preventDefault();
        } else {
            var key = e.keyCode;
            if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
                e.preventDefault();
            }
        }
    });
    $('#txt_signSymp').keydown(function (e) {
        if (e.ctrlKey || e.altKey) {
            e.preventDefault();
        } else {
            var key = e.keyCode;
            if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
                e.preventDefault();
            }
        }
    });
    $('#txt_knok').keydown(function (e) {
        if (e.ctrlKey || e.altKey) {
            e.preventDefault();
        } else {
            var key = e.keyCode;
            if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
                e.preventDefault();
            }
        }
    });
});



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
    $('#txt_name').keyup(function () {
        var yourInput = $(this).val();
        re = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
        var isSplChar = re.test(yourInput);
        if (isSplChar) {
            var no_spl_char = yourInput.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
            $(this).val(no_spl_char);
        }
    });
});







