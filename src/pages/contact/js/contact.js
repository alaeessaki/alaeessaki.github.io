
// Copy function
function copy() {
    var copyText = document.getElementById("disabledTextInput");
    copyText.select();
    document.execCommand("copy");
}

// Show popover
$(function () {
    $('[data-toggle="popover"]').popover();
})

// Hide popover
$('[data-toggle="popover"]').popover().click(function () {
    setTimeout(function () {
        $('[data-toggle="popover"]').popover('hide');
    }, 1000);
});