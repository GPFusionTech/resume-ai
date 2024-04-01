$(document).ready(function() {
    // Datepicker initialization
    $('.datepicker').datepicker({
        format: 'yyyy-mm-dd',
        autoclose: true,
        todayHighlight: true
    });


    // Remove experience button click event
    $(document).on('click', '.remove-experience', function() {
        $(this).closest('.experience').remove();
    });

    // Form submission
    $('#mainForm').submit(function(event) {
        event.preventDefault();
        // Your form submission code here
    });
});