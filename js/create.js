function generate() {
    $(document).ready(function() {

        var a = $("#create-table-form").serializeArray();
        var b = $("#create-table-form").serializeArray();
        $.ajax({
            url: "../server/create.php",
            type: "POST",
            data: a,b,
            //dataType: "html",
            beforeSend: function() {},
            complete: function() {},
            error: function(a, b, c) {
                console.log(c);
            },
            success: function(a, b, d) {

                localStorage.setItem("timetable", a);
                localStorage.setItem("timetables", b);

                window.location = "status.html";


            }

        });
    });
}
    



$(document).on('click', '#submitbutton', function() {

    generate();

});
