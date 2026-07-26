// ===========================
// HEER BOUTIQUE
// Loader
// ===========================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(function () {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

            setTimeout(function () {
                loader.style.display = "none";
            }, 500);

        }, 1500);

    }

});
