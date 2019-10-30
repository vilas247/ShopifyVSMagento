"use strict";

function onHover(e) {
    e.target.classList.add("trait"), document.querySelector(".change_projet.current").classList.add("temp")
}

function offHover(e) {
    e.target.classList.remove("trait"), document.querySelector(".change_projet.current").classList.remove("temp")
}

function resize() {}

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

function raf() {
    le_raf = requestAnimationFrame(raf), document.getElementById("main").clientHeight == ancien_height || isMobile() || null === le_scroll || (le_scroll.resize(), ancien_height = document.getElementById("main").clientHeight)
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

function animation_home() {
    ratio = window.innerWidth / window.innerHeight, ratioSpe = window.innerWidth / (1.4 * window.innerHeight);
    var e = .6104 / ratio;
    document.querySelectorAll(".c-backgroundHome__item")[0].style.left = (.6486 - .325 + e / 2 * 3 / 4) * window.innerWidth + "px", document.querySelectorAll(".c-backgroundHome__item")[1].style.left = (.6486 - .325 + e / 2 / 4) * window.innerWidth + "px", document.querySelectorAll(".c-backgroundHome__item")[2].style.left = (.6486 - .325 - e / 2 / 4) * window.innerWidth + "px", document.querySelectorAll(".c-backgroundHome__item")[3].style.left = (.6486 - .325 - e / 2 * 3 / 4) * window.innerWidth + "px", currentSlide = 1, void 0 !== renderer && (renderer.destroy(), renderer = null), window.innerWidth >= window.innerHeight ? renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerWidth, {
        transparent: !0
    }) : (document.getElementById("innerCanvas").classList.add("largeur"), document.body.classList.add("mobile"), renderer = PIXI.autoDetectRenderer(window.innerWidth / ratioSpe, window.innerWidth / ratioSpe, {
        transparent: !0
    })), document.getElementById("innerCanvas").appendChild(renderer.view), void 0 !== stage && stage.removeChildren(), stage = new PIXI.Container, loader = new PIXI.loaders.Loader, window.innerWidth >= 1e3 ? (loader.add("image1", directory_uri + "/img/slide-1.png"), loader.add("image2", directory_uri + "/img/slide-2.png"), loader.add("image3", directory_uri + "/img/slide-3.png"), loader.add("image4", directory_uri + "/img/slide-4.png")) : (loader.add("image1", directory_uri + "/img/slide-1-mobile.png"), loader.add("image2", directory_uri + "/img/slide-2-mobile.png"), loader.add("image3", directory_uri + "/img/slide-3-mobile.png"), loader.add("image4", directory_uri + "/img/slide-4-mobile.png")), loader.load(function(e, t) {
        premier_appel || introHome();
        for (var n = 1; n < 5; n++) window.innerWidth >= window.innerHeight ? (window["fond" + n].width = window.innerWidth, window["fond" + n].height = window.innerWidth) : (window["fond" + n].width = window.innerWidth / ratioSpe, window["fond" + n].height = window.innerWidth / ratioSpe), renderer.render(stage)
    }), displacementSprite = PIXI.Sprite.fromImage(directory_uri + "/img/gradient6verti.png"), displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT, displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite), window.innerWidth >= 1e3 ? (fond1 = new PIXI.Sprite(PIXI.Texture.fromImage(directory_uri + "/img/slide-1.png")), fond2 = new PIXI.Sprite(PIXI.Texture.fromImage(directory_uri + "/img/slide-2.png")), fond3 = new PIXI.Sprite(PIXI.Texture.fromImage(directory_uri + "/img/slide-3.png")), fond4 = new PIXI.Sprite(PIXI.Texture.fromImage(directory_uri + "/img/slide-4.png"))) : (fond1 = new PIXI.Sprite(PIXI.Texture.fromImage(directory_uri + "/img/slide-1-mobile.png")), fond2 = new PIXI.Sprite(PIXI.Texture.fromImage(directory_uri + "/img/slide-2-mobile.png")), fond3 = new PIXI.Sprite(PIXI.Texture.fromImage(directory_uri + "/img/slide-3-mobile.png")), fond4 = new PIXI.Sprite(PIXI.Texture.fromImage(directory_uri + "/img/slide-4-mobile.png"))), fond2.alpha = 0, fond3.alpha = 0, fond4.alpha = 0, displacementFilter.scale.x = 0, displacementFilter.scale.y = 0, displacementSprite.scale.y = 2, displacementSprite.scale.x = 1, stage.addChild(displacementSprite), stage.addChild(fond1), stage.filters = [displacementFilter]
}

function scrollEvent(e) {
    if ("wheel" == e.type) supportsWheel = !0;
    else if (supportsWheel) return;
    delta = e.deltaY || -e.wheelDelta || e.detail || 1, !1 !== lethargy.check(e) && !animEnCours && currentSlide < 4 && delta > 0 ? (animEnCours = !0, nextSlide()) : !1 !== lethargy.check(e) && !animEnCours && currentSlide > 1 && delta < 0 && (animEnCours = !0, prevSlide())
}

function nextSlide() {
    animEnCours = !0, 1 === currentSlide ? (document.querySelector(".c-slider__prev").classList.remove("off"), document.querySelector(".c-slider-nav-arrow.-left").classList.remove("off")) : 3 === currentSlide && (document.querySelector(".c-slider__next").classList.add("off"), document.querySelector(".c-slider-nav-arrow.-right").classList.add("off")), document.querySelector(".c-slider-nav__item.is-active").classList.remove("is-active"), setTimeout(function() {
        document.querySelectorAll(".c-slider-nav__item")[currentSlide - 1].classList.add("is-active")
    }, 400), attributs.scale = 0, attributs.speed = 10, attributs.opacite = 0, TweenMax.to(attributs, 1, {
        scale: 200,
        speed: 40,
        ease: Power1.easeIn,
        onUpdate: function e() {
            displacementSprite.y += attributs.speed, displacementFilter.scale.y = attributs.scale
        }
    }), TweenMax.to(attributs, 1, {
        scale: 0,
        speed: 10,
        ease: Power1.easeOut,
        delay: 1,
        onUpdate: function e() {
            displacementSprite.y += attributs.speed, displacementFilter.scale.y = attributs.scale
        }
    }), currentSlide++, stage.addChild(window["fond" + currentSlide]), TweenMax.to(attributs, 2, {
        opacite: 1,
        ease: Linear.easeNone,
        onUpdate: function e() {
            window["fond" + currentSlide].alpha = attributs.opacite, renderer.render(stage)
        },
        onComplete: function e() {
            1 === currentSlide ? (fond4.alpha = 0, stage.removeChild(fond4)) : (window["fond" + (currentSlide - 1)].alpha = 0, stage.removeChild(window["fond" + (currentSlide - 1)])), renderer.render(stage)
        }
    }), document.body.classList.contains("mobile") && (TweenMax.fromTo(document.querySelectorAll(".c-slider__item__img .o-button")[currentSlide - 1], .4, {
        opacity: 0,
        y: "-20%"
    }, {
        opacity: 1,
        y: "0%",
        delay: 1.2,
        ease: Power2.easeOut
    }), TweenMax.to(document.querySelectorAll(".c-slider__item__img .o-button")[currentSlide - 2], .4, {
        opacity: 0,
        y: "20%",
        ease: Power2.easeIn
    })), deplacementCan(), deplacementFond(), deplacementTexte()
}

function prevSlide() {
    animEnCours = !0, 2 === currentSlide ? (document.querySelector(".c-slider__prev").classList.add("off"), document.querySelector(".c-slider-nav-arrow.-left").classList.add("off")) : 4 === currentSlide && (document.querySelector(".c-slider__next").classList.remove("off"), document.querySelector(".c-slider-nav-arrow.-right").classList.remove("off")), document.querySelector(".c-slider-nav__item.is-active").classList.remove("is-active"), setTimeout(function() {
        document.querySelectorAll(".c-slider-nav__item")[currentSlide - 1].classList.add("is-active")
    }, 400), attributs.scale = 0, attributs.speed = 10, attributs.opacite = 0, TweenMax.to(attributs, 1, {
        scale: 200,
        speed: 40,
        ease: Power1.easeIn,
        onUpdate: function e() {
            displacementSprite.y += attributs.speed, displacementFilter.scale.y = attributs.scale
        }
    }), TweenMax.to(attributs, 1, {
        scale: 0,
        speed: 10,
        ease: Power1.easeOut,
        delay: 1,
        onUpdate: function e() {
            displacementSprite.y += attributs.speed, displacementFilter.scale.y = attributs.scale
        }
    }), currentSlide--, stage.addChild(window["fond" + currentSlide]), TweenMax.to(attributs, 2, {
        opacite: 1,
        ease: Linear.easeNone,
        onUpdate: function e() {
            window["fond" + currentSlide].alpha = attributs.opacite, renderer.render(stage)
        },
        onComplete: function e() {
            4 === currentSlide ? (fond1.alpha = 0, stage.removeChild(fond1)) : (window["fond" + (currentSlide + 1)].alpha = 0, stage.removeChild(window["fond" + (currentSlide + 1)])), renderer.render(stage)
        }
    }), document.body.classList.contains("mobile") && (TweenMax.fromTo(document.querySelectorAll(".c-slider__item__img .o-button")[currentSlide - 1], .4, {
        opacity: 0,
        y: "-20%"
    }, {
        opacity: 1,
        y: "0%",
        delay: 1.2,
        ease: Power2.easeOut
    }), TweenMax.to(document.querySelectorAll(".c-slider__item__img .o-button")[currentSlide], .4, {
        opacity: 0,
        y: "20%",
        ease: Power2.easeIn
    })), deplacementCan2(), deplacementFond2(), deplacementTexte2()
}

function deplacementCan() {
    2 === currentSlide ? (TweenMax.to(document.querySelectorAll(".c-slider__item")[0], 1, {
        x: "-52.3%",
        delay: .6,
        ease: Power2.easeInOut
    }), TweenMax.to(document.querySelectorAll(".c-slider__item")[1], 1, {
        x: "0%",
        delay: .5,
        ease: Power2.easeInOut
    }), TweenMax.to(document.querySelectorAll(".c-slider__item")[2], 1, {
        x: "52.3%",
        delay: .4,
        ease: Power2.easeInOut
    })) : 3 === currentSlide ? (TweenMax.to(document.querySelectorAll(".c-slider__item")[0], 1, {
        x: "-104.6%",
        delay: .7,
        ease: Power2.easeInOut
    }), TweenMax.to(document.querySelectorAll(".c-slider__item")[1], 1, {
        x: "-52.3%",
        delay: .6,
        ease: Power2.easeInOut
    }), TweenMax.to(document.querySelectorAll(".c-slider__item")[2], 1, {
        x: "0%",
        delay: .5,
        ease: Power2.easeInOut
    }), TweenMax.to(document.querySelectorAll(".c-slider__item")[3], 1, {
        x: "52.3%",
        delay: .4,
        ease: Power2.easeInOut
    })) : 4 === currentSlide && (TweenMax.to(document.querySelectorAll(".c-slider__item")[1], 1, {
        x: "-104.6%",
        delay: .7,
        ease: Power2.easeInOut
    }), TweenMax.to(document.querySelectorAll(".c-slider__item")[2], 1, {
        x: "-52.3%",
        delay: .6,
        ease: Power2.easeInOut
    }), TweenMax.to(document.querySelectorAll(".c-slider__item")[3], 1, {
        x: "0%",
        delay: .5,
        ease: Power2.easeInOut
    })), setTimeout(function() {
        animEnCours = !1
    }, 2100)
}

function deplacementCan2() {
    3 === currentSlide ? (TweenMax.to(document.querySelectorAll(".c-slider__item")[1], 1, {
        x: "-52.3%",
        delay: .4,
        ease: Power2.easeInOut
    }), TweenMax.to(document.querySelectorAll(".c-slider__item")[2], 1, {
        x: "0%",
        delay: .5,
        ease: Power2.easeInOut
    }), TweenMax.to(document.querySelectorAll(".c-slider__item")[3], 1, {
        x: "52.3%",
        delay: .6,
        ease: Power2.easeInOut
    })) : 2 === currentSlide ? (TweenMax.to(document.querySelectorAll(".c-slider__item")[0], 1, {
        x: "-52.3%",
        delay: .4,
        ease: Power2.easeInOut
    }), TweenMax.to(document.querySelectorAll(".c-slider__item")[1], 1, {
        x: "0%",
        delay: .5,
        ease: Power2.easeInOut
    }), TweenMax.to(document.querySelectorAll(".c-slider__item")[2], 1, {
        x: "52.3%",
        delay: .6,
        ease: Power2.easeInOut
    }), TweenMax.to(document.querySelectorAll(".c-slider__item")[3], 1, {
        x: "104.6%",
        delay: .7,
        ease: Power2.easeInOut
    })) : 1 === currentSlide && (TweenMax.to(document.querySelectorAll(".c-slider__item")[0], 1, {
        x: "0%",
        delay: .5,
        ease: Power2.easeInOut
    }), TweenMax.to(document.querySelectorAll(".c-slider__item")[1], 1, {
        x: "52.3%",
        delay: .6,
        ease: Power2.easeInOut
    }), TweenMax.to(document.querySelectorAll(".c-slider__item")[2], 1, {
        x: "104.6%",
        delay: .7,
        ease: Power2.easeInOut
    })), setTimeout(function() {
        animEnCours = !1
    }, 2100)
}

function deplacementFond() {
    shuffle(demarrage), fondLigne1 = document.querySelectorAll(".c-backgroundHome__item")[demarrage[0]].querySelector(".current"), fondLigne2 = document.querySelectorAll(".c-backgroundHome__item")[demarrage[1]].querySelector(".current"), fondLigne3 = document.querySelectorAll(".c-backgroundHome__item")[demarrage[2]].querySelector(".current"), fondLigne4 = document.querySelectorAll(".c-backgroundHome__item")[demarrage[3]].querySelector(".current"), TweenMax.to(fondLigne1, 1.2, {
        x: "-100%",
        delay: .2,
        ease: Power2.easeInOut
    }), TweenMax.to(fondLigne2, 1.2, {
        x: "-100%",
        delay: .3,
        ease: Power2.easeInOut
    }), TweenMax.to(fondLigne3, 1.2, {
        x: "-100%",
        delay: .4,
        ease: Power2.easeInOut
    }), TweenMax.to(fondLigne4, 1.2, {
        x: "-100%",
        delay: .5,
        ease: Power2.easeInOut
    }), TweenMax.fromTo(fondLigne1.nextElementSibling, 1.2, {
        x: "100%"
    }, {
        x: "0%",
        delay: .2,
        ease: Power2.easeInOut
    }), TweenMax.fromTo(fondLigne2.nextElementSibling, 1.2, {
        x: "100%"
    }, {
        x: "0%",
        delay: .3,
        ease: Power2.easeInOut
    }), TweenMax.fromTo(fondLigne3.nextElementSibling, 1.2, {
        x: "100%"
    }, {
        x: "0%",
        delay: .4,
        ease: Power2.easeInOut
    }), TweenMax.fromTo(fondLigne4.nextElementSibling, 1.2, {
        x: "100%"
    }, {
        x: "0%",
        delay: .5,
        ease: Power2.easeInOut,
        onComplete: function e() {
            document.querySelectorAll(".ingredients").forEach(function(e) {
                return e.classList.remove("current")
            }), fondLigne1.nextElementSibling.classList.add("current"), fondLigne2.nextElementSibling.classList.add("current"), fondLigne3.nextElementSibling.classList.add("current"), fondLigne4.nextElementSibling.classList.add("current"), TweenMax.set(".ingredients", {
                clearProps: "x"
            })
        }
    })
}

function deplacementFond2() {
    shuffle(demarrage), fondLigne1 = document.querySelectorAll(".c-backgroundHome__item")[demarrage[0]].querySelector(".current"), fondLigne2 = document.querySelectorAll(".c-backgroundHome__item")[demarrage[1]].querySelector(".current"), fondLigne3 = document.querySelectorAll(".c-backgroundHome__item")[demarrage[2]].querySelector(".current"), fondLigne4 = document.querySelectorAll(".c-backgroundHome__item")[demarrage[3]].querySelector(".current"), TweenMax.to(fondLigne1, 1.2, {
        x: "100%",
        delay: .2,
        ease: Power2.easeInOut
    }), TweenMax.to(fondLigne2, 1.2, {
        x: "100%",
        delay: .3,
        ease: Power2.easeInOut
    }), TweenMax.to(fondLigne3, 1.2, {
        x: "100%",
        delay: .4,
        ease: Power2.easeInOut
    }), TweenMax.to(fondLigne4, 1.2, {
        x: "100%",
        delay: .5,
        ease: Power2.easeInOut
    }), TweenMax.fromTo(fondLigne1.previousElementSibling, 1.2, {
        x: "-100%"
    }, {
        x: "0%",
        delay: .2,
        ease: Power2.easeInOut
    }), TweenMax.fromTo(fondLigne2.previousElementSibling, 1.2, {
        x: "-100%"
    }, {
        x: "0%",
        delay: .3,
        ease: Power2.easeInOut
    }), TweenMax.fromTo(fondLigne3.previousElementSibling, 1.2, {
        x: "-100%"
    }, {
        x: "0%",
        delay: .4,
        ease: Power2.easeInOut
    }), TweenMax.fromTo(fondLigne4.previousElementSibling, 1.2, {
        x: "-100%"
    }, {
        x: "0%",
        delay: .5,
        ease: Power2.easeInOut,
        onComplete: function e() {
            document.querySelectorAll(".ingredients").forEach(function(e) {
                return e.classList.remove("current")
            }), fondLigne1.previousElementSibling.classList.add("current"), fondLigne2.previousElementSibling.classList.add("current"), fondLigne3.previousElementSibling.classList.add("current"), fondLigne4.previousElementSibling.classList.add("current"), TweenMax.set(".ingredients", {
                clearProps: "x"
            })
        }
    })
}

function deplacementTexte() {
    var e = document.querySelectorAll(".c-slider-content")[currentSlide - 2],
        t = document.querySelectorAll(".c-slider-content")[currentSlide - 1];
    TweenMax.to(e, 1, {
        opacity: 0,
        delay: .4
    }), TweenMax.to(e.querySelector(".c-slider-content__inner-tween"), 1.2, {
        x: "10%",
        delay: .3,
        ease: Power1.easeIn
    }), TweenMax.to(t, 1, {
        opacity: 1,
        delay: 1.4
    }), TweenMax.fromTo(t.querySelector(".c-slider-content__inner-tween"), 1.2, {
        x: "10%"
    }, {
        x: "0%",
        delay: 1.4,
        ease: Power2.easeOut
    })
}

function deplacementTexte2() {
    var e = document.querySelectorAll(".c-slider-content")[currentSlide],
        t = document.querySelectorAll(".c-slider-content")[currentSlide - 1];
    TweenMax.to(e, 1, {
        opacity: 0,
        delay: .4
    }), TweenMax.to(e.querySelector(".c-slider-content__inner-tween"), 1.2, {
        x: "-10%",
        delay: .3,
        ease: Power1.easeIn
    }), TweenMax.to(t, 1, {
        opacity: 1,
        delay: 1.4
    }), TweenMax.fromTo(t.querySelector(".c-slider-content__inner-tween"), 1.2, {
        x: "-10%"
    }, {
        x: "0%",
        delay: 1.4,
        ease: Power2.easeOut
    })
}

function shuffle(e) {
    for (var t = e.length - 1; t > 0; t--) {
        var n = Math.floor(Math.random() * (t + 1)),
            o = [e[n], e[t]];
        e[t] = o[0], e[n] = o[1]
    }
    return e
}

function introHome() {
    document.body.classList.contains("mobile") && (document.querySelector(".c-slider").style.height = window.innerHeight + "px", document.getElementById("innerCanvas").style.width = window.innerWidth / ratioSpe + "px", document.getElementById("innerCanvas").style.height = window.innerHeight + "px", null !== document.querySelector(".largeur") && (document.querySelector(".largeur").style.left = -(window.innerWidth / ratioSpe - window.innerWidth) / 2 - .04 * window.innerWidth + "px"), TweenMax.fromTo(document.querySelectorAll(".c-slider__item__img .o-button")[0], .4, {
        opacity: 0,
        y: "-20%"
    }, {
        opacity: 1,
        y: "0%",
        delay: 1.2,
        ease: Power2.easeOut
    })), renderer.render(stage), TweenMax.to("#innerCanvas", 1, {
        x: "0%",
        delay: .2,
        ease: Power4.easeOut
    }), TweenMax.to(".c-slider, .c-backgroundHome", 1.4, {
        x: "0%",
        delay: .2,
        ease: Power4.easeOut,
        onComplete: function e() {
            document.addEventListener("wheel", scrollEvent), document.addEventListener("mousewheel", scrollEvent), document.addEventListener("DOMMouseScroll", scrollEvent)
        }
    }), TweenMax.to(".c-scroll", 1.4, {
        y: "0%",
        opacity: 1,
        delay: 1.4,
        ease: Power4.easeOut
    }), TweenMax.to(".c-backgroundHome__item", 1.4, {
        x: "0%",
        delay: .2,
        ease: Power4.easeOut,
        onComplete: function e() {
            TweenMax.staggerTo(".stagHome", .5, {
                opacity: 1
            }, .1)
        }
    }), TweenMax.to(".o-container", 1, {
        opacity: 1,
        x: "0%",
        delay: .8,
        ease: Power2.easeOut
    }), TweenMax.fromTo(".c-slider-content__inner-tween", 1.4, {
        x: "10%"
    }, {
        opacity: 1,
        x: "0%",
        delay: .8,
        ease: Power2.easeOut
    })
}

function pixiMenu() {
    displacementSpriteMenu.rotation += .02, raf_pixi_menu = requestAnimationFrame(pixiMenu), rendererMenu.render(stageMenu), deformX = 8 * (posX - ancienX) > 500 ? 500 : 8 * (posX - ancienX) < -500 ? -500 : 8 * (posX - ancienX), deformY = 8 * (posY - ancienY) > 500 ? 500 : 8 * (posY - ancienY) < -500 ? -500 : 8 * (posY - ancienY), displacementSpriteMenu.x = posX, displacementSpriteMenu.y = posY, TweenMax.to(attributsMenu, 2, {
        intensiteX: deformX,
        intensiteY: deformY,
        posiX: posX,
        posiY: posY,
        ease: Power1.easeOut,
        onUpdate: function e() {
            displacementFilterMenu.scale.x = attributsMenu.intensiteX, displacementFilterMenu.scale.y = attributsMenu.intensiteY, displacementSpriteMenu.x = attributsMenu.posiX, displacementSpriteMenu.y = attributsMenu.posiY
        }
    }), ancienX = posX, ancienY = posY
}

function animation_menu() {
    pixiMenu()
}

function onHover() {
    grilleOvered = !0, ancienX = posX, ancienY = posY
}

function offHover() {
    grilleOvered = !1
}

function animation_loader() {
    rendererL = PIXI.autoDetectRenderer(window.innerHeight, window.innerHeight, {
        transparent: !0
    }), document.querySelector(".c-loader__canvas").appendChild(rendererL.view), stageL = new PIXI.Container, loaderL = new PIXI.loaders.Loader, loaderL.add("image1", directory_uri + "/img/stripesLoader.png"), loaderL.add("image2", directory_uri + "/img/gradient6verti.png"), loaderL.load(function(e, t) {
        fond1L = new PIXI.Sprite(PIXI.Texture.fromImage(t.image1.url)), fond1L.width = fond1L.height = document.querySelector(".c-loader__canvas").clientWidth, displacementSpriteL = PIXI.Sprite.fromImage(t.image2.url), displacementSpriteL.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT, displacementFilterL = new PIXI.filters.DisplacementFilter(displacementSpriteL), displacementFilterL.scale.x = 0, displacementFilterL.scale.y = 0, displacementSpriteL.scale.y = 2, displacementSpriteL.scale.x = 1, stageL.addChild(displacementSpriteL), stageL.addChild(fond1L), stageL.filters = [displacementFilterL], le_raf_loader(), TweenMax.staggerTo(".c-loader__bande", .6, {
            scaleY: 0,
            ease: Power2.easeOut,
            delay: 1
        }, .1, finStag), TweenMax.staggerTo(".stagLoad", 1, {
            opacity: 1,
            y: "0%",
            ease: Power4.easeOut,
            delay: 1
        }, .14), setTimeout(function() {
            document.querySelectorAll(".c-loader .lettre").forEach(function(e) {
                e.classList.add("activ")
            })
        }, 1e3)
    })
}

function le_raf_loader() {
    raf_loader = requestAnimationFrame(le_raf_loader), displacementSpriteL.y += deltaV, rendererL.render(stageL)
}

function finStag() {
    document.body.classList.remove("progress"), TweenMax.to(attributs, 1.4, {
        intensite: 50,
        vitesse: 10,
        ease: Power1.easeInOut,
        onUpdate: function e() {
            displacementFilterL.scale.y = attributs.intensite, deltaV = attributs.vitesse
        }
    }), document.addEventListener("wheel", scrollEventLoader), document.addEventListener("mousewheel", scrollEventLoader), document.addEventListener("DOMMouseScroll", scrollEventLoader), setTimeout(function() {
        uneX || (document.removeEventListener("wheel", scrollEventLoader), document.removeEventListener("mousewheel", scrollEventLoader), document.removeEventListener("DOMMouseScroll", scrollEventLoader), finLoader())
    }, 3e3)
}

function scrollEventLoader() {
    uneX || finLoader()
}

function finStagFinLoader() {
    premier_appel = !1, null !== le_scroll && le_scroll.init(), document.querySelector(".c-header").classList.remove("debut"), document.querySelectorAll(".c-header .lettre").forEach(function(e) {
        e.classList.add("activ")
    }), TweenMax.to(".c-menu", .4, {
        opacity: 1,
        ease: Power2.easeIn,
        delay: .4
    }), setTimeout(function() {
        document.body.classList.contains("home") ? introHome() : document.body.classList.contains("page-template-all-products") ? introProducts() : document.body.classList.contains("single") ? introSingle() : document.body.classList.contains("page-template-retailler") || document.body.classList.contains("page-template-contact") || document.body.classList.contains("page-template-about") || document.body.classList.contains("page-template-default") || document.body.classList.contains("page-template-page") || document.body.classList.contains("page-template-cocktails") ? introFond() : document.body.classList.contains("error404") && introErreur()
    }, 600), document.querySelector(".c-loader").style.display = "none", TweenMax.to(".c-nav-lang__list", .5, {
        opacity: 1,
        delay: 2
    })
}

function finLoader() {
    TweenMax.to(".stagLoad", .4, {
        opacity: 0
    }), document.querySelectorAll(".c-loader .lettre").forEach(function(e) {
        e.classList.remove("activ")
    }), document.querySelectorAll(".c-loader__bande").forEach(function(e) {
        return e.classList.add("origin")
    }), uneX = !0, TweenMax.to(attributs, .4, {
        intensite: 0,
        vitesse: 0,
        ease: Power2.IneaseOut,
        onUpdate: function e() {
            displacementFilterL.scale.y = attributs.intensite, deltaV = attributs.vitesse
        },
        onComplete: function e() {
            document.removeEventListener("wheel", scrollEventLoader), document.removeEventListener("mousewheel", scrollEventLoader), document.removeEventListener("DOMMouseScroll", scrollEventLoader), cancelAnimationFrame(raf_loader), TweenMax.staggerTo(".c-loader__bande", .6, {
                scaleY: 1,
                ease: Power2.easeIn
            }, .1), setTimeout(function() {
                finStagFinLoader()
            }, 1e3)
        }
    })
}

function animation_single() {
    largeur_phrase = ancien_delta = 0, void 0 !== rendererS && (rendererS.destroy(), rendererS = null), rendererS = PIXI.autoDetectRenderer(.7 * window.innerWidth, .7 * window.innerWidth, {
        transparent: !0
    }), document.querySelector(".c-single-product-description__canvas").appendChild(rendererS.view), void 0 !== stageS && stageS.removeChildren(), stageS = new PIXI.Container, loaderS = new PIXI.loaders.Loader, loaderS.add("image1", document.querySelector(".c-single-product-header__bg").getAttribute("data-img")), loaderS.add("image2", directory_uri + "/img/gradient6hori.png");
    var e = "";
    document.querySelectorAll(".c-single-slider-nav__item").length < 10 && (e = "0"), document.querySelector("#totalItems span").innerHTML = e + document.querySelectorAll(".c-single-slider-nav__item").length, loaderS.load(function(e, t) {
        fond1S = new PIXI.Sprite(PIXI.Texture.fromImage(t.image1.url)), fond1S.width = fond1S.height = document.querySelector(".c-single-product-description__canvas").clientWidth, premier_appel || introSingle(), displacementSpriteS = PIXI.Sprite.fromImage(t.image2.url), displacementSpriteS.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT, displacementFilterS = new PIXI.filters.DisplacementFilter(displacementSpriteS), displacementFilterS.scale.x = 0, displacementFilterS.scale.y = 60, displacementSpriteS.scale.y = 1, displacementSpriteS.scale.x = 1.2, stageS.addChild(displacementSpriteS), stageS.addChild(fond1S), stageS.filters = [displacementFilterS], le_raf_single(), rendererS.render(stageS)
    })
}

function le_raf_single() {
    raf_single = requestAnimationFrame(le_raf_single), document.querySelector(".c-single-product-description__canvas").getBoundingClientRect().top < window.innerHeight && document.querySelector(".c-single-product-description__canvas").getBoundingClientRect().top > 0 && (displacementSpriteS.x += 8, rendererS.render(stageS)), document.querySelector(".c-big-sentence-wrap").getBoundingClientRect().top < window.innerHeight && document.querySelector(".c-big-sentence-wrap").getBoundingClientRect().top + document.querySelector(".c-big-sentence-wrap").clientHeight > 0 && (isMobile() ? gamma < 20 && gamma > -20 ? (TweenMax.to(".c-big-sentence-wrap", .8, {
        x: -((largeur_phrase - window.innerWidth) / 40 * gamma + (largeur_phrase - window.innerWidth) / 2) + "px",
        ease: Linear.easeNone
    }), ancien_delta = 10 * gamma) : isMobile() && gamma >= 20 ? TweenMax.to(".c-big-sentence-wrap", .8, {
        x: -(largeur_phrase - window.innerWidth - .1 * window.innerWidth) + "px",
        ease: Linear.easeNone
    }) : isMobile() && gamma <= -20 && TweenMax.to(".c-big-sentence-wrap", .8, {
        x: .1 * window.innerWidth + "px",
        ease: Linear.easeNone
    }) : (TweenMax.to(".c-big-sentence-wrap", .8, {
        x: -1 * (largeur_phrase - window.innerWidth) / window.innerWidth * posX + .1 * window.innerWidth + "px",
        ease: Linear.easeNone
    }), ancien_delta = posX))
}

function introSingle() {
    document.querySelectorAll(".c-nav-main ul li")[0].querySelector("a").classList.add("is-active"), document.querySelector(".c-big-sentence-wrap").querySelectorAll("span").forEach(function(e) {
        largeur_phrase += e.clientWidth
    }), largeur_phrase += .2 * window.innerWidth, grilleOvered = !0, TweenMax.to(".c-volet", 1, {
        scaleY: 0,
        ease: Power4.easeInOut,
        onComplete: function e() {
            document.querySelector(".c-volet").classList.add("haut")
        }
    }), TweenMax.staggerTo(".c-single-product-similar__item", .8, {
        x: 0,
        delay: .4,
        ease: Power4.easeOut
    }, .1), TweenMax.to(".c-single-product-similar-title", 1, {
        opacity: 1,
        delay: 1
    }), TweenMax.to(".c-single-product-header__img", 2, {
        y: "-50%",
        ease: Power4.easeOut
    }), TweenMax.to(".c-single-product-header__inner-tween", 2, {
        y: "0%",
        ease: Power4.easeOut
    }), document.getElementById("tailleFixed").style.width = document.getElementById("tailleFixed").offsetWidth + "px", document.body.classList.remove("bloque")
}

function goNextItem() {
    animEnCours = !0, nextItem = null !== document.querySelectorAll(".unItem")[currentItem].nextElementSibling ? currentItem + 1 : 0, TweenMax.to(document.querySelectorAll(".unItem")[currentItem], .8, {
        x: "100%",
        ease: Power4.easeInOut
    }), TweenMax.to(document.querySelectorAll(".unItem")[currentItem].querySelector("div"), .8, {
        x: "-90%",
        ease: Power4.easeInOut
    }), document.querySelectorAll(".unItem")[nextItem].style.zIndex = zInd++, TweenMax.fromTo(document.querySelectorAll(".unItem")[nextItem], .8, {
        x: "-100%"
    }, {
        x: "0%",
        ease: Power4.easeInOut
    }), TweenMax.fromTo(document.querySelectorAll(".unItem")[nextItem].querySelector("div"), .8, {
        x: "90%"
    }, {
        x: "0%",
        ease: Power4.easeInOut,
        onComplete: function e() {
            0 === nextItem ? currentItem = 0 : currentItem++, animEnCours = !1
        }
    });
    var e;
    null !== document.querySelector(".c-single-slider-nav__item.is-active").nextElementSibling ? (e = document.querySelector(".c-single-slider-nav__item.is-active"), e.nextElementSibling.classList.add("is-active"), e.classList.remove("is-active")) : (e = document.querySelector(".c-single-slider-nav__item.is-active"), e.classList.remove("is-active"), document.querySelectorAll(".c-single-slider-nav__item")[0].classList.add("is-active")), TweenMax.staggerTo("#tailleFixed span", .2, {
        y: "-100%",
        ease: Power2.easeIn
    }, .1, finNombre)
}

function goPrevItem() {
    animEnCours = !0, nextItem = null !== document.querySelectorAll(".unItem")[currentItem].previousElementSibling ? currentItem - 1 : document.querySelectorAll(".unItem").length - 1, TweenMax.to(document.querySelectorAll(".unItem")[currentItem], .8, {
        x: "-100%",
        ease: Power4.easeInOut
    }), TweenMax.to(document.querySelectorAll(".unItem")[currentItem].querySelector("div"), .8, {
        x: "90%",
        ease: Power4.easeInOut
    }), document.querySelectorAll(".unItem")[nextItem].style.zIndex = zInd++, TweenMax.fromTo(document.querySelectorAll(".unItem")[nextItem], .8, {
        x: "100%"
    }, {
        x: "0%",
        ease: Power4.easeInOut
    }), TweenMax.fromTo(document.querySelectorAll(".unItem")[nextItem].querySelector("div"), .8, {
        x: "-90%"
    }, {
        x: "0%",
        ease: Power4.easeInOut,
        onComplete: function e() {
            nextItem === document.querySelectorAll(".unItem").length - 1 ? currentItem = document.querySelectorAll(".unItem").length - 1 : currentItem--, animEnCours = !1
        }
    });
    var e;
    null !== document.querySelector(".c-single-slider-nav__item.is-active").previousElementSibling ? (e = document.querySelector(".c-single-slider-nav__item.is-active"), e.previousElementSibling.classList.add("is-active"), e.classList.remove("is-active")) : (e = document.querySelector(".c-single-slider-nav__item.is-active"), e.classList.remove("is-active"), document.querySelectorAll(".c-single-slider-nav__item")[document.querySelectorAll(".c-single-slider-nav__item").length - 1].classList.add("is-active")), TweenMax.staggerTo("#tailleFixed span", .2, {
        y: "100%",
        ease: Power2.easeIn
    }, .1, finNombre2)
}

function finNombre() {
    currentItem === document.querySelectorAll(".c-single-slider-nav__item").length - 1 ? document.getElementById("chiffre2").innerHTML = 1 : document.getElementById("chiffre2").innerHTML = currentItem + 2, TweenMax.staggerFromTo("#tailleFixed span", .2, {
        y: "100%"
    }, {
        y: "0%",
        ease: Power2.easeOut
    }, .1)
}

function finNombre2() {
    document.getElementById("chiffre2").innerHTML = 0 === currentItem ? document.querySelectorAll(".c-single-slider-nav__item").length : currentItem, TweenMax.staggerFromTo("#tailleFixed span", .2, {
        y: "-100%"
    }, {
        y: "0%",
        ease: Power2.easeOut
    }, .1)
}

function process(e) {
    0 === window.orientation ? gamma = e.gamma : 180 === window.orientation ? gamma = -e.gamma : -90 === window.orientation ? gamma = -e.beta : 90 === window.orientation && (gamma = e.beta)
}

function animation_products() {
    hoverProduits = document.querySelectorAll(".c-products__link"), hoverProduits.forEach(function(e) {
        e.addEventListener("mouseenter", onHoverProduit)
    }), produits = [], document.querySelectorAll(".c-products-patterns__item").forEach(function(e) {
        produits.push(e)
    }), loaderP = new PIXI.loaders.Loader, loaderP.add("image1", directory_uri + "/img/random-01.png"), loaderP.add("image2", directory_uri + "/img/random-02.png"), loaderP.add("image3", directory_uri + "/img/random-03.png"), loaderP.add("image4", directory_uri + "/img/random-04.png"), loaderP.add("image5", directory_uri + "/img/random-05.png"), loaderP.add("image6", directory_uri + "/img/random-06.png"), loaderP.add("image7", directory_uri + "/img/random-07.png"), loaderP.add("image8", directory_uri + "/img/random-08.png"), loaderP.load(function(e, t) {
        premier_appel || introProducts()
    })
}

function introProducts() {
    document.querySelectorAll(".c-nav-main ul li")[0].querySelector("a").classList.add("is-active"), TweenMax.to(".c-products-volet", 1, {
        scaleY: 0,
        ease: Power4.easeInOut
    }), TweenMax.to(".c-products-header__title", .5, {
        y: "0px",
        opacity: 1,
        delay: .3,
        ease: Power1.easeOut
    }), TweenMax.to(".c-scroll", .5, {
        y: "0px",
        opacity: 1,
        delay: .5,
        ease: Power1.easeOut
    }), TweenMax.to(".c-products__list", .8, {
        y: "0px",
        opacity: 1,
        delay: .7,
        ease: Power4.easeOut
    }), TweenMax.staggerFromTo(".c-products-patterns__list > div", .8, {
        y: "-160%"
    }, {
        y: "0%",
        ease: Power2.easeOut
    }, .07), document.body.classList.remove("bloque")
}

function onHoverProduit(e) {
    shuffle(produits), e.target.classList.contains("-red") ? valeur = -20 : e.target.classList.contains("-green") ? valeur = -40 : e.target.classList.contains("-yellow") ? valeur = -60 : e.target.classList.contains("-purple") && (valeur = -80), TweenMax.to(produits[0], 1, {
        x: valeur + "%",
        ease: Power4.easeInOut
    }), TweenMax.to(produits[1], 1.1, {
        x: valeur + "%",
        ease: Power4.easeInOut
    }), TweenMax.to(produits[2], 1.2, {
        x: valeur + "%",
        ease: Power4.easeInOut
    }), TweenMax.to(produits[3], 1.3, {
        x: valeur + "%",
        ease: Power4.easeInOut
    })
}

function animationSortie() {
    document.body.classList.contains("home") ? (TweenMax.staggerTo(".c-slider__item img", .8, {
        y: "300%",
        ease: Power2.easeIn
    }, .1), TweenMax.to(".c-backgroundHome > div", 1.4, {
        y: "100%",
        ease: Power4.easeInOut
    }), TweenMax.to(".c-volet", 1, {
        scaleY: 1,
        ease: Power4.easeInOut,
        delay: .2,
        onComplete: function e() {
            finSortie()
        }
    })) : document.body.classList.contains("single") ? (grilleOvered = !1, TweenMax.to(".c-single-product-similar-title", .4, {
        opacity: 0
    }), TweenMax.staggerTo(".c-single-product-similar__link", .6, {
        x: "100%",
        ease: Power2.easeIn
    }, .05), TweenMax.to(".c-volet", 1, {
        scaleY: 1,
        ease: Power4.easeInOut,
        delay: .2,
        onComplete: function e() {
            finSortie()
        }
    }), TweenMax.to(".c-single-product-header__img", 1, {
        y: "150%",
        ease: Power4.easeIn
    }), TweenMax.to(".c-single-product-header__title", 1, {
        y: "200%",
        ease: Power4.easeIn
    })) : document.body.classList.contains("page-template-all-products") ? (TweenMax.staggerTo(".c-products-patterns__list > div", .8, {
        y: "160%",
        ease: Power2.easeIn
    }, .07), TweenMax.to(".c-volet", 1, {
        scaleY: 1,
        ease: Power4.easeInOut,
        delay: .2,
        onComplete: function e() {
            finSortie()
        }
    })) : (TweenMax.to(".c-volet", 1, {
        scaleY: 1,
        ease: Power4.easeInOut,
        onComplete: function e() {
            finSortie()
        }
    }), document.body.classList.contains("error404") && TweenMax.staggerTo(".c-big-sentence-wrap", .6, {
        y: "140%",
        ease: Power2.easeIn
    }, .06))
}

function finSortie() {
    document.removeEventListener("wheel", scrollEvent), document.removeEventListener("mousewheel", scrollEvent), document.removeEventListener("DOMMouseScroll", scrollEvent), null !== document.getElementById("submit") && document.getElementById("submit").removeEventListener("click", submitEvent), cancelAnimationFrame(raf_pixi_menu), document.querySelector(".c-nav-col-right").removeEventListener("mouseenter", onHover), document.querySelector(".c-nav-col-right").removeEventListener("mouseleave", offHover), cancelAnimationFrame(raf_single),
        cancelAnimationFrame(raf_fond), cancelAnimationFrame(raf_erreur), null !== document.querySelector(".c-about-video__wrap") && (document.querySelector(".c-about-video__wrap").removeEventListener("mouseenter", onVideo), document.querySelector(".c-about-video__wrap").removeEventListener("mouseleave", offVideo)), destructionSmooth(), sortie_ok = !0
}

function animation_fond() {
    ratioSpe = window.innerWidth / (1.5 * window.innerHeight), debutAnimFond = !0, attributsF = {}, attributsF.intensite = 0, attributsF.distance = 0, void 0 !== rendererF && (rendererF.destroy(), rendererF = null), window.innerWidth >= window.innerHeight ? rendererF = PIXI.autoDetectRenderer(window.innerWidth, window.innerWidth, {
        transparent: !0
    }) : (document.getElementById("inner_canvas").classList.add("largeur"), document.body.classList.add("mobile"), rendererF = PIXI.autoDetectRenderer(window.innerWidth / ratioSpe, window.innerWidth / ratioSpe, {
        transparent: !0
    })), document.body.classList.contains("mobile") && document.querySelector(".c-volet").classList.remove("haut"), document.getElementById("inner_canvas").appendChild(rendererF.view), void 0 !== stageF && stageF.removeChildren(), stageF = new PIXI.Container, loaderF = new PIXI.loaders.Loader, loaderF.add("image1", directory_uri + "/img/background-stripe.png"), loaderF.add("image2", directory_uri + "/img/gradient6verti.png"), loaderF.load(function(e, t) {
        fond1F = new PIXI.extras.TilingSprite(PIXI.Texture.fromImage(t.image1.url)), fond1F.width = fond1F.height = window.innerWidth, window.innerWidth > 2273 && (fond1F.scale.x = window.innerWidth / 2273, fond1F.scale.y = window.innerWidth / 2200), fond1F.tileScale.x = window.innerWidth / 2273, fond1F.tileScale.y = window.innerWidth / 2200, document.body.classList.contains("mobile") && (fond1F.width = fond1F.height = window.innerWidth / ratioSpe, fond1F.tileScale.x = window.innerWidth / 2273 / ratioSpe, fond1F.tileScale.y = window.innerWidth / 2200 / ratioSpe), displacementSpriteF = PIXI.Sprite.fromImage(t.image2.url), displacementSpriteF.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT, displacementFilterF = new PIXI.filters.DisplacementFilter(displacementSpriteF), displacementFilterF.scale.x = 0, document.body.classList.contains("page-template-about") || isMobile() ? (displacementFilterF.scale.y = 150, null !== document.querySelector(".c-about-video__wrap") && (document.querySelector(".c-about-video__wrap").addEventListener("mouseenter", onVideo), document.querySelector(".c-about-video__wrap").addEventListener("mouseleave", offVideo))) : displacementFilterF.scale.y = 0, document.body.classList.contains("page-template-retailler") && TweenMax.set(".o-text p, .o-form", {
            opacity: 0,
            x: "-5%"
        }), displacementSpriteF.scale.y = 1, displacementSpriteF.scale.x = 1.2, displacementSpriteF.y += 20, stageF.addChild(displacementSpriteF), stageF.addChild(fond1F), stageF.filters = [displacementFilterF], rendererF.render(stageF), premier_appel || introFond()
    })
}

function introFond() {
    document.body.classList.contains("page-template-contact") ? document.querySelectorAll(".c-nav-main ul li")[4].querySelector("a").classList.add("is-active") : document.body.classList.contains("page-template-about") ? document.querySelectorAll(".c-nav-main ul li")[2].querySelector("a").classList.add("is-active") : document.body.classList.contains("page-template-retailler") ? document.querySelectorAll(".c-nav-main ul li")[3].querySelector("a").classList.add("is-active") : document.body.classList.contains("page-template-cocktails") && document.querySelectorAll(".c-nav-main ul li")[1].querySelector("a").classList.add("is-active"), isMobile() || (document.addEventListener("wheel", scrollEventF), document.addEventListener("mousewheel", scrollEventF), document.addEventListener("DOMMouseScroll", scrollEventF)), rendererF.render(stageF), document.body.classList.contains("mobile") ? (null !== document.querySelector(".o-stripe-bg__volet") && (document.querySelector(".o-stripe-bg__volet").style.display = "none"), TweenMax.to(".c-volet", 1, {
        scaleY: 0,
        ease: Power4.easeInOut,
        onComplete: function e() {
            null !== document.querySelector(".c-volet") && document.querySelector(".c-volet").classList.add("haut")
        }
    })) : TweenMax.to(".o-stripe-bg__volet", 1, {
        x: .0375 * window.innerWidth + "px",
        y: .0375 * window.innerWidth + "px",
        ease: Power2.easeInOut,
        onComplete: function e() {
            null !== document.querySelector(".o-stripe-bg__volet") && (document.querySelector(".o-stripe-bg__volet").style.display = "none")
        }
    }), TweenMax.staggerTo(".stagF", .5, {
        opacity: 1,
        delay: 1
    }, .1), document.body.classList.contains("page-template-about") || document.body.classList.contains("page-template-cocktails") ? document.body.classList.contains("page-template-cocktails") ? (document.body.classList.contains("mobile") ? attributsF.intensite = 200 : attributsF.intensite = 400, isMobile() ? (le_raf_fond(), debutAnimFond = !1) : TweenMax.to(attributsF, 2, {
        intensite: 0,
        onUpdate: function e() {
            displacementFilterF.scale.y = attributsF.intensite, rendererF.render(stageF), displacementSpriteF.y += 4
        },
        ease: Power2.easeInOut,
        onComplete: function e() {
            le_raf_fond(), debutAnimFond = !1
        }
    }), TweenMax.to(".c-about-big-title__title, .o-text", .8, {
        y: "0%",
        opacity: 1,
        delay: .7,
        ease: Power2.easeOut
    }), TweenMax.to(".c-about-big-title__bg span", .8, {
        scaleY: 0,
        delay: 1,
        ease: Power1.easeOut
    }), TweenMax.staggerTo(".c-cocktail-voile", .8, {
        scaleY: 0,
        ease: Power2.easeIn
    }, .1)) : document.body.classList.contains("page-template-about") && (le_raf_fond(), debutAnimFond = !1, TweenMax.to(".o-inner-tween", 1.2, {
        y: "0%",
        ease: Power2.easeOut
    }), TweenMax.to(".c-volet", 1, {
        scaleY: 0,
        ease: Power4.easeInOut,
        onComplete: function e() {
            null !== document.querySelector(".c-volet") && document.querySelector(".c-volet").classList.add("haut")
        }
    })) : (TweenMax.to(".c-retailler-spacer .voile", .8, {
        scaleX: 0,
        delay: 1,
        ease: Power3.easeOut
    }), document.body.classList.contains("page-template-retailler") && TweenMax.to(".o-text p, .o-form", .8, {
        opacity: 1,
        x: "0%",
        delay: 1,
        ease: Power3.easeOut
    }), TweenMax.to(".o-inner-tween", .6, {
        opacity: 1,
        y: "0px",
        ease: Power2.easeOut,
        delay: .6
    }), document.body.classList.contains("mobile") ? attributsF.intensite = 200 : attributsF.intensite = 400, isMobile() ? (le_raf_fond(), debutAnimFond = !1) : TweenMax.to(attributsF, 2, {
        intensite: 0,
        onUpdate: function e() {
            displacementFilterF.scale.y = attributsF.intensite, rendererF.render(stageF), displacementSpriteF.y += 4
        },
        ease: Power2.easeInOut,
        onComplete: function e() {
            le_raf_fond(), debutAnimFond = !1
        }
    }), document.body.classList.contains("page-template-contact") ? document.getElementById("submit").addEventListener("click", submitEvent) : document.body.classList.contains("page-template-retailler") && document.getElementById("submit").addEventListener("click", submitEvent2)), document.body.classList.remove("bloque")
}

function scrollEventF(e) {
    if ("wheel" == e.type) supportsWheel = !0;
    else if (supportsWheel) return;
    delta = e.deltaY || -e.wheelDelta || e.detail || 1, delta > 100 ? delta = 100 : delta < -100 && (delta = -100)
}

function onVideo() {
    isOnVideo = !0
}

function offVideo() {
    isOnVideo = !1
}

function le_raf_fond() {
    raf_fond = requestAnimationFrame(le_raf_fond), debutAnimFond || document.body.classList.contains("page-template-about") || isMobile() || TweenMax.to(attributsF, 2, {
        intensite: 4 * delta,
        onUpdate: function e() {
            displacementFilterF.scale.y = attributsF.intensite, fond1F.tilePosition.x = document.querySelector(".vs-section").getBoundingClientRect().top
        },
        ease: Linear.easeNone
    }), (document.body.classList.contains("page-template-about") || isMobile()) && (displacementFilterF.scale.y = 150), rendererF.render(stageF), displacementSpriteF.y += 4, isOnVideo ? (passageUnique = !1, ordoX = posX - document.querySelector(".c-about-video__wrap").getBoundingClientRect().left - document.querySelector(".c-about-video__wrap").clientWidth / 2, ordoY = posY - document.querySelector(".c-about-video__wrap").getBoundingClientRect().top - document.querySelector(".c-about-video__wrap").clientHeight / 2, TweenMax.to(".c-about-video-wrap .-black", .5, {
        x: ordoX + "px",
        y: ordoY + "px",
        ease: Linear.easeNone
    }), TweenMax.to(".c-about-video-wrap .-red", .6, {
        x: ordoX + "px",
        y: ordoY + "px",
        ease: Linear.easeNone
    }), TweenMax.to(".c-about-video-wrap .-yellow", .7, {
        x: ordoX + "px",
        y: ordoY + "px",
        ease: Linear.easeNone
    }), TweenMax.to(".c-about-video-wrap .-purple", .8, {
        x: ordoX + "px",
        y: ordoY + "px",
        ease: Linear.easeNone
    }), TweenMax.to(".c-about-video-wrap .-green", .9, {
        x: ordoX + "px",
        y: ordoY + "px",
        ease: Linear.easeNone
    })) : !1 === passageUnique && (passageUnique = !0, TweenMax.to(".c-about-video-wrap .-black", .5, {
        x: "0px",
        y: "0px",
        ease: Power4.easeInOut
    }), TweenMax.to(".c-about-video-wrap .-red", .6, {
        x: "0px",
        y: "0px",
        ease: Power4.easeInOut
    }), TweenMax.to(".c-about-video-wrap .-yellow", .7, {
        x: "0px",
        y: "0px",
        ease: Power4.easeInOut
    }), TweenMax.to(".c-about-video-wrap .-purple", .8, {
        x: "0px",
        y: "0px",
        ease: Power4.easeInOut
    }), TweenMax.to(".c-about-video-wrap .-green", .9, {
        x: "0px",
        y: "0px",
        ease: Power4.easeInOut
    })), document.body.classList.contains("page-template-about") && document.querySelector(".vs-div").classList.contains("inviewport") && (window.innerWidth < 1440 ? TweenMax.to(".c-about-logo div", .8, {
        scale: .6 + le_scroll.vars.current / 1300,
        rotation: le_scroll.vars.current / 80,
        ease: Linear.easeNone
    }) : TweenMax.to(".c-about-logo div", .8, {
        scale: .6 + le_scroll.vars.current / (1.3 * window.innerWidth),
        rotation: le_scroll.vars.current / 80,
        ease: Linear.easeNone
    }))
}

function submitEvent(e) {
    e.preventDefault(), document.getElementById("form").checkValidity() ? submitForm() : (document.querySelector(".message-erreur").style.display = "block", TweenMax.to(".message-erreur", .4, {
        opacity: 1
    }))
}

function submitForm() {
    var e = new XMLHttpRequest,
        t = directory_uri + "/php/mail.php",
        n = "chaine=Nouvelle demande de : " + encodeURIComponent(document.getElementById("prenom").value) + "\nMail : " + encodeURIComponent(document.getElementById("mail").value) + " \nSujet : " + encodeURIComponent(document.getElementById("sujet").value) + "\n\nMessage : " + encodeURIComponent(document.getElementById("textarea").value);
    e.open("POST", t, !0), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.onreadystatechange = function() {
        e.readyState === XMLHttpRequest.DONE && 200 === e.status && ("block" === document.querySelector(".message-erreur").style.display ? TweenMax.to(".message-erreur", .4, {
            opacity: 0,
            onComplete: function e() {
                document.querySelector(".message-erreur").style.display = "none", document.querySelector(".message-okay").style.display = "block", TweenMax.to(".message-okay", .4, {
                    opacity: 1
                })
            }
        }) : (document.querySelector(".message-okay").style.display = "block", TweenMax.to(".message-okay", .4, {
            opacity: 1
        })))
    }, e.send(n)
}

function submitEvent2(e) {
    e.preventDefault(), document.getElementById("form").checkValidity() ? submitForm2() : (document.querySelector(".message-erreur").style.display = "block", TweenMax.to(".message-erreur", .4, {
        opacity: 1
    }))
}

function submitForm2() {
    var e = new XMLHttpRequest,
        t = directory_uri + "/php/mail2.php",
        n = "chaine=Nouvelle demande de : " + encodeURIComponent(document.getElementById("nom").value) + "\nCompagnie : " + encodeURIComponent(document.getElementById("compagnie").value) + " \nMail : " + encodeURIComponent(document.getElementById("mail").value) + " \nTéléphone : " + encodeURIComponent(document.getElementById("tel").value) + "\n\nMessage : " + encodeURIComponent(document.getElementById("textarea").value);
    e.open("POST", t, !0), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.onreadystatechange = function() {
        e.readyState === XMLHttpRequest.DONE && 200 === e.status && ("block" === document.querySelector(".message-erreur").style.display ? TweenMax.to(".message-erreur", .4, {
            opacity: 0,
            onComplete: function e() {
                document.querySelector(".message-erreur").style.display = "none", document.querySelector(".message-okay").style.display = "block", TweenMax.to(".message-okay", .4, {
                    opacity: 1
                })
            }
        }) : (document.querySelector(".message-okay").style.display = "block", TweenMax.to(".message-okay", .4, {
            opacity: 1
        })))
    }, e.send(n)
}

function animation_erreur() {
    largeur_phrase = ancien_delta = 0, premier_appel || introErreur()
}

function introErreur() {
    TweenMax.staggerFromTo(".c-big-sentence-wrap", .6, {
        y: "-140%"
    }, {
        y: "0%",
        delay: .1,
        ease: Power2.easeOut
    }, .06), largeur_phrase = 6 * document.querySelectorAll(".c-big-sentence-wrap")[0].querySelectorAll("span")[0].clientWidth, TweenMax.to(".c-volet", 1, {
        scaleY: 0,
        ease: Power4.easeInOut,
        onComplete: function e() {
            null !== document.querySelector(".c-volet") && document.querySelector(".c-volet").classList.add("haut")
        }
    }), le_raf_erreur(), document.body.classList.remove("bloque")
}

function le_raf_erreur() {
    raf_erreur = requestAnimationFrame(le_raf_erreur), isMobile() ? gamma < 20 && gamma > -20 ? (TweenMax.to(paire, .8, {
        x: -(-1 * (largeur_phrase - window.innerWidth) / 40 * gamma + (largeur_phrase - window.innerWidth) / 2) + "px",
        ease: Linear.easeNone
    }), TweenMax.to(impaire, .8, {
        x: -((largeur_phrase - window.innerWidth) / 40 * gamma + (largeur_phrase - window.innerWidth) / 2) + "px",
        ease: Linear.easeNone
    }), ancien_delta = 10 * gamma) : isMobile() && gamma >= 20 ? (TweenMax.to(impaire, .8, {
        x: -(largeur_phrase - window.innerWidth) + "px",
        ease: Linear.easeNone
    }), TweenMax.to(paire, .8, {
        x: "0px",
        ease: Linear.easeNone
    })) : isMobile() && gamma <= -20 && (TweenMax.to(paire, .8, {
        x: -(largeur_phrase - window.innerWidth) + "px",
        ease: Linear.easeNone
    }), TweenMax.to(impaire, .8, {
        x: "0px",
        ease: Linear.easeNone
    })) : (TweenMax.to(paire, .8, {
        x: -1 * (largeur_phrase - window.innerWidth) / window.innerWidth * posX + "px",
        ease: Linear.easeNone
    }), TweenMax.to(impaire, .8, {
        x: (largeur_phrase - window.innerWidth) / window.innerWidth * posX - (largeur_phrase - window.innerWidth) + "px",
        ease: Linear.easeNone
    }), ancien_delta = posX)
}
var preload = new createjs.LoadQueue,
    sortie_ok, ajax_ok, links, hovers, lethargy = new Lethargy,
    lien_en_cours, raf_chargement, contenu_nouvelle_page, ancien_height = 0,
    le_raf, le_scroll = null,
    posX = 0,
    posY = 0,
    premier_appel = !0;
document.addEventListener("mousemove", function(e) {
    (grilleOvered || isOnVideo || document.body.classList.contains("error404")) && (posX = e.pageX, posY = e.pageY)
}), window.addEventListener("resize", resize), document.addEventListener("DOMContentLoaded", function() {
    function e(e) {}

    function t(e) {}

    function n() {
        raf_chargement = requestAnimationFrame(n), !0 === sortie_ok && !0 === ajax_ok && (l(contenu_nouvelle_page), cancelAnimationFrame(raf_chargement))
    }
    preload.loadFile(directory_uri + "/img/can-raspberry.png"), preload.loadFile(directory_uri + "/img/can-maple-ginger.png"), preload.loadFile(directory_uri + "/img/can-cerry-lime.png"), preload.loadFile(directory_uri + "/img/can-strawberry.png"), preload.on("progress", e), preload.on("complete", t), TweenMax.set(".c-nav-lang__list", {
        opacity: 0
    });
    var o = function e() {
            function t(e) {
                if (!e.target.classList.contains("externe")) {
                    if (e.preventDefault(), !1 === lien_en_cours) {
                        lien_en_cours = !0;
                        var t = this.getAttribute("href");
                        return e.target.classList.contains("lien_bas") && (lien_bas = !0), history.pushState({}, "", t), i(t), n(), !1
                    }
                    return !1
                }
            }
            "undefined" != typeof InstallTrigger && document.body.classList.add("isFirefox"), sortie_ok = !1, ajax_ok = !1, lien_en_cours = !1, links = document.querySelectorAll("a"), links.forEach(function(e) {
                e.removeEventListener("click", t)
            }), links.forEach(function(e) {
                e.addEventListener("click", t)
            }), a()
        },
        r = function e(t) {
            contenu_nouvelle_page = t, ajax_ok = !0
        },
        a = function e() {
            isMobile() ? (window.scrollTo(0, 0), document.body.classList.contains("home") || document.body.classList.add("bloque")) : (null !== le_scroll && le_scroll.destroy(), le_scroll = null, le_scroll = new global_custom2.default({
                preload: !0,
                native: !1,
                section: document.querySelector(".vs-section"),
                divs: document.querySelectorAll(".vs-div"),
                vs: {
                    mouseMultiplier: .3
                }
            }), !1 === premier_appel && le_scroll.init()), TweenMax.set("#main", {
                opacity: 1
            }), document.body.classList.contains("home") ? animation_home() : document.body.classList.contains("page-template-all-products") ? animation_products() : document.body.classList.contains("single") ? animation_single() : document.body.classList.contains("page-template-retailler") || document.body.classList.contains("page-template-contact") || document.body.classList.contains("page-template-default") || document.body.classList.contains("page-template-about") || document.body.classList.contains("page-template-page") || document.body.classList.contains("page-template-cocktails") ? animation_fond() : document.body.classList.contains("error404") && animation_erreur()
        },
        i = function e(t) {
            null !== le_scroll && le_scroll.off(onscroll);
            var n = new XMLHttpRequest,
                o = "GET",
                a = t;
            n.open("GET", a, !0), n.onreadystatechange = function() {
                n.readyState === XMLHttpRequest.DONE && 200 === n.status && r(n.responseText)
            }, n.send(), document.body.classList.contains("has-nav-open") && (document.body.classList.toggle("has-nav-open"), TweenMax.set("#main", {
                opacity: 0
            })), animationSortie()
        },
        l = function e(t) {
            var n = new DOMParser,
                r = n.parseFromString(t, "text/html"),
                a = r.querySelector("body").getAttribute("class");
            document.title = r.querySelector("title").innerHTML, document.querySelector("body").setAttribute("class", r.querySelector("body").getAttribute("class")), isMobile() ? document.querySelector("body").classList.add("mobile") : document.querySelector("body").classList.add("desktop"), document.getElementById("main").innerHTML = r.getElementById("main").innerHTML, null !== r.querySelector("footer") && (document.querySelector("footer").innerHTML = r.querySelector("footer").innerHTML), document.querySelector(".c-nav-col-left").innerHTML = r.querySelector(".c-nav-col-left").innerHTML, document.querySelector(".c-nav-can__list").innerHTML = r.querySelector(".c-nav-can__list").innerHTML, o()
        };
    window.onpopstate = function(e) {
        null !== e.state && (i(location.href), n())
    }, history.pushState({}, "", location), document.body.classList.add("progress"), o(), raf(), isMobile() ? document.querySelector("body").classList.add("mobile") : document.querySelector("body").classList.add("desktop"), animation_loader()
}), document.addEventListener("touchstart", handleTouchStart, !1), document.addEventListener("touchmove", handleTouchMove, !1);
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
var renderer, stage, displacementSprite, displacementFilter, loader, fond1, fond2, fond3, fond4, currentSlide = 1,
    ratio, ratioSpe, mousePos = {
        x: 0
    },
    delta = 0,
    supportsWheel = !1,
    qdScroll = 0,
    animEnCours = !1,
    attributs = {},
    elmtCur, elmtNex, elmtNex2, elmtPre, demarrage = [0, 1, 2, 3],
    fondLigne1 = void 0,
    fondLigne2 = void 0,
    fondLigne3 = void 0,
    fondLigne4 = void 0,
    raf_pixi_menu, deltaX, deltaY, ancienX = 0,
    ancienY = 0,
    attributsMenu = {},
    grilleOvered = !1,
    rendererMenu = PIXI.autoDetectRenderer(1.3 * document.getElementById("canvasMenu").clientWidth, 1.3 * document.getElementById("canvasMenu").clientWidth, {
        transparent: !0
    });
document.getElementById("canvasMenu").appendChild(rendererMenu.view);
var stageMenu = new PIXI.Container,
    displacementSpriteMenu = PIXI.Sprite.fromImage(directory_uri + "/img/gradient6verti.png");
displacementSpriteMenu.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
var displacementFilterMenu = new PIXI.filters.DisplacementFilter(displacementSpriteMenu),
    fondMenu = new PIXI.Sprite(PIXI.Texture.fromImage(directory_uri + "/img/menu.png"));
fondMenu.width = fondMenu.height = 1.3 * document.getElementById("canvasMenu").clientWidth, displacementFilterMenu.scale.x = 0, displacementFilterMenu.scale.y = 0, displacementSpriteMenu.pivot.x = 256, displacementSpriteMenu.pivot.y = 256, displacementSpriteMenu.scale.y = 2, displacementSpriteMenu.scale.x = 1, attributsMenu.intensiteX = 0, attributsMenu.intensiteY = 0, attributsMenu.posiX = 0, attributsMenu.posiY = 0, stageMenu.addChild(displacementSpriteMenu), stageMenu.addChild(fondMenu), stageMenu.filters = [displacementFilterMenu];
var deformX = 0,
    deformY = 0,
    raf_loader, rendererL, stageL, displacementSpriteL, displacementFilterL, loaderL, fond1L, deltaV, attributs = {};
attributs.intensite = 0, attributs.vitesse = 0, deltaV = 0;
var uneX = !1,
    raf_single, rendererS, stageS, displacementSpriteS, displacementFilterS, loaderS, fond1S, ancien_delta, largeur_phrase, zInd = 1,
    currentItem = 0,
    nextItem, gamma, delta_gamma;
window.DeviceOrientationEvent && window.addEventListener("deviceorientation", process, !1);
var hoverProduits, produits = [],
    valeur = 0,
    loaderP, raf_fond, rendererF, stageF, displacementSpriteF, displacementFilterF, loaderF, fond1F, ancienDelta = 0,
    attributsF, debutAnimFond, ordoX = 0,
    ordoY = 0,
    chaineIframe = '<iframe src="https://player.vimeo.com/video/53343768?loop=1&autoplay=1&color=ffffff&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    isOnVideo = !1,
    passageUnique = !1,
    raf_erreur, paire = [document.querySelectorAll(".c-big-sentence-wrap")[0], document.querySelectorAll(".c-big-sentence-wrap")[2], document.querySelectorAll(".c-big-sentence-wrap")[4], document.querySelectorAll(".c-big-sentence-wrap")[6]],
    impaire = [document.querySelectorAll(".c-big-sentence-wrap")[1], document.querySelectorAll(".c-big-sentence-wrap")[3], document.querySelectorAll(".c-big-sentence-wrap")[5], document.querySelectorAll(".c-big-sentence-wrap")[7]];
//# sourceMappingURL=./main.js.map