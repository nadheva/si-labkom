const Swal = require('sweetalert2');
const $ = require('jquery');

$(document).ready(function () {
    // ===== Front-End =====
    // -- Home --
    let scrollpos = window.scrollY;
    let header = document.getElementById("header");
    let toToggle = document.querySelectorAll(".toggleColour");
    let svgText = document.querySelectorAll('.svgText')

    document.addEventListener("scroll", function () {
        let i;
        /*Apply classes for slide in bar*/
        scrollpos = window.scrollY;

        if (scrollpos > 10) {
            header.classList.add("bg-white");
            //Use to switch toggleColour colours
            for (i = 0; i < toToggle.length; i++) {
                toToggle[i].classList.add("text-gray-800");
                toToggle[i].classList.remove("text-white");
            }
            for (i = 0; i < svgText.length; i++) {
                svgText[i].classList.add("fil2");
                svgText[i].classList.remove("fil1");
            }
            header.classList.add("shadow");
        } else {
            header.classList.remove("bg-white");
            //Use to switch toggleColour colours
            for (i = 0; i < toToggle.length; i++) {
                toToggle[i].classList.add("text-white");
                toToggle[i].classList.remove("text-gray-800");
            }
            for (i = 0; i < svgText.length; i++) {
                svgText[i].classList.remove("fil2");
                svgText[i].classList.add("fil1");
            }
            header.classList.remove("shadow");
        }
    });

    // --- Smooth Scrolling ---
    $('#ayomulai').click(function (event) {
        let tujuan = $(this).attr('href')
        let elemenTujuan = $(tujuan)
        $('html, body').animate({
            scrollTop: elemenTujuan.offset().top - 60
        }, 1250, 'swing');
        event.preventDefault();
    });

    // --- Peminjaman Lab ---
    let peminjamanlab = document.getElementById('peminjamanlab')
    if (peminjamanlab) {
        let name = peminjamanlab.dataset.name;
        let success = peminjamanlab.dataset.success;
        let error = peminjamanlab.dataset.error;
        if (success) {
            Swal.fire({
                title: `${name}`,
                text: `${success}`,
                icon: `success`
            })
        }
        if (error) {
            Swal.fire({
                title: `${name}`,
                text: `${error}`,
                icon: `error`
            })
        }
    }

    // --- Peminjaman Alat ---
    let peminjamanalat = document.getElementById('peminjamanalat')
    if (peminjamanalat) {
        let name = peminjamanalat.dataset.name;
        let success = peminjamanalat.dataset.success;
        let error = peminjamanalat.dataset.error;
        if (success) {
            Swal.fire({
                title: `${name}`,
                text: `${success}`,
                icon: `success`
            })
        }
        if (error) {
            Swal.fire({
                title: `${name}`,
                text: `${error}`,
                icon: `error`
            })
        }
    }

    // --- Surat Bebas Labkom ---
    let suratbebaslabkom = document.getElementById('suratbebaslabkom')
    if (suratbebaslabkom) {
        let name = suratbebaslabkom.dataset.name;
        let success = suratbebaslabkom.dataset.success;
        let error = suratbebaslabkom.dataset.error;
        if (success) {
            Swal.fire({
                title: `${name}`,
                text: `${success}`,
                icon: `success`
            })
        }
        if (error) {
            Swal.fire({
                title: `${name}`,
                text: `${error}`,
                icon: `error`
            })
        }
    }
});