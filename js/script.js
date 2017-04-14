$(document).ready(function(){

 $('#a1').click(function() {
    $('#a2').prop("disabled",false);
});
 $('#a2').click(function() {
    $('#a3').prop("disabled",false);
});
 $('#a3').click(function() {
    $('#a4').prop("disabled",false);
});
 $('#a4').click(function() {
    $('#b1').prop("disabled",false);
});
});

