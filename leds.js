$(document).ready(function() {
    $("#lights").click(function() {
        $("#led").toggleClass("blue-off", !this.checked)
    }).triggerHandler('click');
});