$(document).ready(function() {

    console.log("bulma.js");

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });

    //Main Menu
    $("#schwangereLink").click(function () {
        $(".course").addClass("is-hidden");
        $("#fuerSchwangere").removeClass("is-hidden");
    });

    $("#stillenLink").click(function () {
        $(".course").addClass("is-hidden");
        $("#stillen").removeClass("is-hidden");
    });

    $("#elternLink").click(function () {
        $(".course").addClass("is-hidden");
        $("#fuerEltern").removeClass("is-hidden");
    });

    $("#massageLink").click(function () {
        $(".course").addClass("is-hidden");
        $("#massage").removeClass("is-hidden");
    });

    $("#babyschwimmenLink").click(function () {
        $(".course").addClass("is-hidden");
        $("#babyschwimmen").removeClass("is-hidden");
    });

    $("#laufMamaLink").click(function () {
        $(".course").addClass("is-hidden");
        $("#laufmama").removeClass("is-hidden");
    });

    $("#trageberatungLink").click(function () {
        $(".course").addClass("is-hidden");
        $("#trageberatung").removeClass("is-hidden");
    });

    //Für Schwangere Sub Menu
    $("#ersteHilfeLink").click(function () {
        $("#ersteHilfe").removeClass("is-hidden");
        $("#crashkursBaby").addClass("is-hidden");
    });

    $("#crashkursBabyLink").click(function () {
        $("#ersteHilfe").addClass("is-hidden");
        $("#crashkursBaby").removeClass("is-hidden");
    });

    //Stillen
    $("#stillberatungLink").click(function () {
        $("#stillberatung").removeClass("is-hidden");
        $("#stillvorbereitungskurs").addClass("is-hidden");
    });

    $("#stillvorbereitungLink").click(function () {
        $("#stillberatung").addClass("is-hidden");
        $("#stillvorbereitungskurs").removeClass("is-hidden");
    });

    //Für Eltern Sub Menu
    $("#beikostLink").click(function () {
        $("#beikost").removeClass("is-hidden");
        $("#babysignal").addClass("is-hidden");
        $("#familySteps").addClass("is-hidden");
    });

    $("#babysignalLink").click(function () {
        $("#beikost").addClass("is-hidden");
        $("#babysignal").removeClass("is-hidden");
        $("#familySteps").addClass("is-hidden");
    });

    $("#familyStepsLink").click(function () {
        $("#beikost").addClass("is-hidden");
        $("#babysignal").addClass("is-hidden");
        $("#familySteps").removeClass("is-hidden");
    });

    //Massage Sub Menu
    $("#massageBabyLink").click(function () {
        $("#massageBaby").removeClass("is-hidden");
        $("#massageZuhause").addClass("is-hidden");
        $("#massagePapas").addClass("is-hidden");
    });

    $("#massageZuhauseLink").click(function () {
        $("#massageBaby").addClass("is-hidden");
        $("#massageZuhause").removeClass("is-hidden");
        $("#massagePapas").addClass("is-hidden");
    });

    $("#massagePapaLink").click(function () {
        $("#massageBaby").addClass("is-hidden");
        $("#massageZuhause").addClass("is-hidden");
        $("#massagePapas").removeClass("is-hidden");
    });

    //LaufMamaLauf Sub Menu
    $("#laufmamaAquafitLink").click(function () {
        $("#laufmamaAquafit").removeClass("is-hidden");
        $("#laufmamaKinderwagen").addClass("is-hidden");
        $("#laufmamaMehr").addClass("is-hidden");
        $("#laufmamaSchoenSchwanger").addClass("is-hidden");
    });

    $("#laufmamaKinderwagenLink").click(function () {
        $("#laufmamaAquafit").addClass("is-hidden");
        $("#laufmamaKinderwagen").removeClass("is-hidden");
        $("#laufmamaMehr").addClass("is-hidden");
        $("#laufmamaSchoenSchwanger").addClass("is-hidden");
    });

    $("#laufmamaMehrLink").click(function () {
        $("#laufmamaAquafit").addClass("is-hidden");
        $("#laufmamaKinderwagen").addClass("is-hidden");
        $("#laufmamaMehr").removeClass("is-hidden");
        $("#laufmamaSchoenSchwanger").addClass("is-hidden");
    });

    $("#laufmamaSchoenSchwangerLink").click(function () {
        $("#laufmamaAquafit").addClass("is-hidden");
        $("#laufmamaKinderwagen").addClass("is-hidden");
        $("#laufmamaMehr").addClass("is-hidden");
        $("#laufmamaSchoenSchwanger").removeClass("is-hidden");
    });
});
