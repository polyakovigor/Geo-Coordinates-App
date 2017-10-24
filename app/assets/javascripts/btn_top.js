// When the user scrolls down 300px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
$('#btn_top').onclick = function() {topFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("btn_top").style.display = "block";
    } else {
        document.getElementById("btn_top").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}