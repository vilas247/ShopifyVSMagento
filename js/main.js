"use strict";

function raf() {
    le_raf = document.getElementById("main").clientHeight == ancien_height || isMobile() || null === le_scroll || (le_scroll.resize(), ancien_height = document.getElementById("main").clientHeight)
}

function handleTouchStart(e) {
    xDown = e.touches[0].clientX, yDown = e.touches[0].clientY
}

function handleTouchMove(e) {
    if (uneX) {
        if (!xDown || !yDown) return;
        if (document.body.classList.contains("home")) {
            var t = e.touches[0].clientX,
                n = e.touches[0].clientY,
                o = xDown - t,
                r = yDown - n;
            Math.abs(o) > Math.abs(r) && document.querySelector("body").classList.contains("home") && !animEnCours && (animEnCours = !0, o > 0 && currentSlide < 4 ? nextSlide() : o < 0 && currentSlide > 1 ? prevSlide() : animEnCours = !1), xDown = null, yDown = null
        }
    } else finLoader(), xDown = null, yDown = null
}

function process(e) {
    0 === window.orientation ? gamma = e.gamma : 180 === window.orientation ? gamma = -e.gamma : -90 === window.orientation ? gamma = -e.beta : 90 === window.orientation && (gamma = e.beta)
}

function destructionSmooth() {
    isMobile() || (le_scroll.vars.current = le_scroll.vars.target = 0, null !== le_scroll && le_scroll.destroy(), le_scroll = null)
}

var preload = new createjs.LoadQueue,
    lien_en_cours, contenu_nouvelle_page, ancien_height = 0,
    le_raf, le_scroll = null,
    posX = 0,
    posY = 0,
    premier_appel = !0;
document.addEventListener("touchstart", handleTouchStart, !1), document.addEventListener("touchmove", handleTouchMove, !1);
var xDown = null,
    yDown = null,
    gamma, delta_gamma;
window.DeviceOrientationEvent && window.addEventListener("deviceorientation", process, !1);
var hover, toggleVideo = !1;
document.addEventListener("click", function(e) {
    e.target.classList.contains("c-slider__prev") || e.target.classList.contains("c-slider-nav-arrow") && e.target.classList.contains("-left") ? !animEnCours && currentSlide > 1 && prevSlide() : e.target.classList.contains("c-slider__next") || e.target.classList.contains("c-slider-nav-arrow") && e.target.classList.contains("-right") ? !animEnCours && currentSlide < 4 && nextSlide() : e.target.classList.contains("c-menu") ? (document.body.classList.toggle("has-nav-open"), document.body.classList.contains("has-nav-open") ? (animation_menu(), null !== le_scroll && le_scroll.off(), document.querySelector(".c-nav-col-right").addEventListener("mouseenter", onHover), document.querySelector(".c-nav-col-right").addEventListener("mouseleave", offHover), document.body.classList.contains("single") && (grilleOvered = !1, cancelAnimationFrame(raf_single))) : (cancelAnimationFrame(raf_pixi_menu), null !== le_scroll && le_scroll.on(), document.querySelector(".c-nav-col-right").removeEventListener("mouseenter", onHover), document.querySelector(".c-nav-col-right").removeEventListener("mouseleave", offHover), document.body.classList.contains("single") && (grilleOvered = !0, le_raf_single()))) : e.target.classList.contains("toNextItem") && !animEnCours ? goNextItem() : e.target.classList.contains("toPrevItem") && !animEnCours ? goPrevItem() : e.target.classList.contains("c-footer-copyright__label__credit") && !animEnCours ? document.body.classList.add("has-credit-open") : e.target.classList.contains("c-credit__close") && !animEnCours || e.target.classList.contains(".c-credit__close__button__line") && !animEnCours ? document.body.classList.remove("has-credit-open") : e.target.classList.contains("c-about-video-wrap") && !animEnCours && (toggleVideo ? (toggleVideo = !1, TweenMax.to(".innerParallax, .c-about-video-play", .4, {
        opacity: 1,
        onComplete: function e() {
            var t = document.querySelector("iframe");
            t.parentNode.removeChild(t)
        }
    })) : (toggleVideo = !0, TweenMax.to(".innerParallax, .c-about-video-play", .4, {
        opacity: 0
    }), document.querySelector(".c-about-video-wrap").insertAdjacentHTML("beforeend", chaineIframe)))
});
//# sourceMappingURL=./main.js.map