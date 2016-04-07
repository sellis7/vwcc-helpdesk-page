$(document).ready(function(){
    $(".log").click(function() {
        if ($(this).is(':checked')) {
            $('.whenCalled').show();
            
            var currentDate = new Date();
            var day = currentDate.getDate();
            var month = currentDate.getMonth() + 1;
            var year = currentDate.getFullYear();
            var dayNow = month + "/" + day + "/" + year;
            $("input:text[id='date']").val(dayNow);
            
            var currentTime = new Date();
            var hours = currentTime.getHours();
            var minutes = currentTime.getMinutes();
            if (minutes < 10){
            minutes = "0" + minutes;
            }
            var suffix = "AM";
            if (hours >= 12) {
            suffix = "PM";
            hours = hours - 12;
            }
            if (hours == 0) {
            hours = 12;
            }
            var timeNow = hours + ":" + minutes + " " + suffix;
            $("input:text[id='time']").val(timeNow);
        }else{
            $('.whenCalled').hide();
        };
    });
    $("#theForm2").validetta();
});

/*$(function(){
var objForm = new ValidForm("theForm2", "One or more errors occurred. Check the marked fields and try again.");
objForm.addElement('name', 'name', /^[-a-zàáâãäåæçèéêëìíîïðñòóôõöøùúûüý€0-9\s*\.'\/",_()|& ]*$/i, true, 255, null, '', 'Enter only letters and spaces.', 'This field is required.', 'Your input is too long. A maximum of 255 characters is OK.');
objForm.addElement('phone', 'phone', /[2-9]\d{2}-\d{3}-\d{4}$/i, false, 12, null, '', '', 'This field is required.', 'The value is the hint value. Enter your own value.', 'The input is too short. The minimum is null characters.', 'Your input is too long. A maximum of 12 characters is OK.');
objForm.addElement('email', 'email', /^[^@\s]+@([-a-z0-9]+\.)+[a-z]{2,}$/i, false, 255, null, '', '', 'This field is required.', 'The value is the hint value. Enter your own value.', 'The input is too short. The minimum is null characters.', 'Your input is too long. A maximum of 255 characters is OK.');
objForm.addElement('contact', 'contact', '', true, null, null, '', '', 'This field is required.');
});
// ]]>*/