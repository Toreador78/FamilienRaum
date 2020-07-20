$(document).ready(function() {

    console.log("bulma.js");

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });

    $("#loremlink").click(function () {
        $("#loremcontent").removeClass("is-hidden");
        $("#duiscontent").addClass("is-hidden");
        $("#wisicontent").addClass("is-hidden");
        $("#namcontent").addClass("is-hidden");
    });

    $("#duislink").click(function () {
        $("#loremcontent").addClass("is-hidden");
        $("#duiscontent").removeClass("is-hidden");
        $("#wisicontent").addClass("is-hidden");
        $("#namcontent").addClass("is-hidden");
    });

    $("#wisilink").click(function () {
        $("#loremcontent").addClass("is-hidden");
        $("#duiscontent").addClass("is-hidden");
        $("#wisicontent").removeClass("is-hidden");
        $("#namcontent").addClass("is-hidden");
    });

    $("#namlink").click(function () {
        $("#loremcontent").addClass("is-hidden");
        $("#duiscontent").addClass("is-hidden");
        $("#wisicontent").addClass("is-hidden");
        $("#namcontent").removeClass("is-hidden");
    });
});
