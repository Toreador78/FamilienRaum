$(document).ready(function() {

    console.log("bulma.js");

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });
/*
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
*/
    $("#schwangereLink").click(function () {
        $(".course").addClass("is-hidden");
        $("#crashkursBaby").removeClass("is-hidden");
        $("#ersteHilfe").removeClass("is-hidden");
    });

    $("#massageLink").click(function () {
        $(".course").addClass("is-hidden");
        $("#massageBaby").removeClass("is-hidden");
        $("#massageZuhause").removeClass("is-hidden");
        $("#massagePapas").removeClass("is-hidden");
    });

    $("#stillberatungLink").click(function () {
        $(".course").addClass("is-hidden");
        $("#stillberatung").removeClass("is-hidden");
        $("#stillvorbereitungskurs").removeClass("is-hidden");
    });

    $("#babyschwimmenLink").click(function () {
        $(".course").addClass("is-hidden");
        $("#babyschwimmen").removeClass("is-hidden");
    });

    $("#elternLink").click(function () {
        $(".course").addClass("is-hidden");
        $("#beikost").removeClass("is-hidden");
        $("#babysignal").removeClass("is-hidden");
        $("#familySteps").removeClass("is-hidden");
    });

    $("#laufMamaLink").click(function () {
        $(".course").addClass("is-hidden");
        $("#laufmamaAquafit").removeClass("is-hidden");
        $("#laufmamaKinderwagen").removeClass("is-hidden");
        $("#laufmamaMehr").removeClass("is-hidden");
        $("#laufmamaSchoenSchwanger").removeClass("is-hidden");
    });

    $("#trageberatungLink").click(function () {
        $(".course").addClass("is-hidden");
        $("#trageberatung").removeClass("is-hidden");
    });
});
