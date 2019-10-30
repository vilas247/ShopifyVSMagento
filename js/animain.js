// {
// 	class ImgItem {
// 		constructor(el) {
// 			this.DOM = {};
// 			this.DOM.el = el;
// 			this.DOM.svg = this.DOM.el.querySelector('.item__svg');
// 			this.DOM.path = this.DOM.svg.querySelector('path');
// 			this.paths = {};
// 			this.paths.start = this.DOM.path.getAttribute('d');
// 			this.paths.end = this.DOM.el.dataset.morphPath;
// 			this.DOM.deco = this.DOM.svg.querySelector('.item__deco');
// 			this.DOM.image = this.DOM.svg.querySelector('image');
// 			this.DOM.title = this.DOM.el.querySelector('.item__meta > .item__title');
// 			this.DOM.subtitle = this.DOM.el.querySelector('.item__meta > .item__subtitle');
// 			this.CONFIG = {
// 				// Defaults:
// 				animation: {
// 					path: {
// 						duration: this.DOM.el.dataset.animationPathDuration || 1500,
// 						delay: this.DOM.el.dataset.animationPathDelay || 0,
// 						easing: this.DOM.el.dataset.animationPathEasing || 'easeOutElastic',
// 						elasticity: this.DOM.el.dataset.pathElasticity || 400,
// 						scaleX: this.DOM.el.dataset.pathScalex || 1,
// 						scaleY: this.DOM.el.dataset.pathScaley || 1,
// 						translateX: this.DOM.el.dataset.pathTranslatex || 0,
// 						translateY: this.DOM.el.dataset.pathTranslatey || 0,
// 						rotate: this.DOM.el.dataset.pathRotate || 0
// 					},
// 					image: {
// 						duration: this.DOM.el.dataset.animationImageDuration || 2000,
// 						delay: this.DOM.el.dataset.animationImageDelay || 0,
// 						easing: this.DOM.el.dataset.animationImageEasing || 'easeOutElastic',
// 						elasticity: this.DOM.el.dataset.imageElasticity || 400,
// 						scaleX: this.DOM.el.dataset.imageScalex || 1.1,
// 						scaleY: this.DOM.el.dataset.imageScaley || 1.1,
// 						translateX: this.DOM.el.dataset.imageTranslatex || 0,
// 						translateY: this.DOM.el.dataset.imageTranslatey || 0,
// 						rotate: this.DOM.el.dataset.imageRotate || 0
// 					},
// 					deco: {
// 						duration: this.DOM.el.dataset.animationDecoDuration || 2500,
// 						delay: this.DOM.el.dataset.animationDecoDelay || 0,
// 						easing: this.DOM.el.dataset.animationDecoEasing || 'easeOutQuad',
// 						elasticity: this.DOM.el.dataset.decoElasticity || 400,
// 						scaleX: this.DOM.el.dataset.decoScalex || 0.9,
// 						scaleY: this.DOM.el.dataset.decoScaley || 0.9,
// 						translateX: this.DOM.el.dataset.decoTranslatex || 0,
// 						translateY: this.DOM.el.dataset.decoTranslatey || 0,
// 						rotate: this.DOM.el.dataset.decoRotate || 0
// 					}
// 				}
// 			};
// 			this.initEvents();
// 		}
// 		initEvents() {
// 			this.mouseenterFn = () => {
// 				this.mouseTimeout = setTimeout(() => {
// 					this.isActive = true;
// 					this.animate();
// 				}, 75);
// 			}
// 			this.mouseleaveFn = () => {
// 				clearTimeout(this.mouseTimeout);
// 				if( this.isActive ) {
// 					this.isActive = false;
// 					this.animate();
// 				}
// 			}
// 			this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
// 			this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
// 			this.DOM.el.addEventListener('touchstart', this.mouseenterFn);
// 			this.DOM.el.addEventListener('touchend', this.mouseleaveFn);
// 		}
// 		getAnimeObj(targetStr) {
// 			const target = this.DOM[targetStr];
// 			let animeOpts = {
// 				targets: target,
// 				duration: this.CONFIG.animation[targetStr].duration,
// 				delay: this.CONFIG.animation[targetStr].delay,
// 				easing: this.CONFIG.animation[targetStr].easing,
// 				elasticity: this.CONFIG.animation[targetStr].elasticity,	
// 				scaleX: this.isActive ? this.CONFIG.animation[targetStr].scaleX : 1,
// 				scaleY: this.isActive ? this.CONFIG.animation[targetStr].scaleY : 1,
// 				translateX: this.isActive ? this.CONFIG.animation[targetStr].translateX : 0,
// 				translateY: this.isActive ? this.CONFIG.animation[targetStr].translateY : 0,
// 				rotate: this.isActive ? this.CONFIG.animation[targetStr].rotate : 0
// 			};
// 			if( targetStr === 'path' ) {
// 				animeOpts.d = this.isActive ? this.paths.end : this.paths.start;
// 			}
// 			anime.remove(target);
// 			return animeOpts;
// 		}
// 		animate() {
// 			// Animate the path, the image and deco.
// 			anime(this.getAnimeObj('path'));
// 			anime(this.getAnimeObj('image'));
// 			anime(this.getAnimeObj('deco'));
// 			// Title and Subtitle animation
// 			anime.remove(this.DOM.title);
// 			anime({
// 				targets: this.DOM.title,
// 				easing: 'easeOutQuad',
// 				translateY: this.isActive ? [
// 					{value: '-50%', duration: 200},
// 					{value: ['50%', '0%'], duration: 200}
// 				] : [
// 					{value: '50%', duration: 200},
// 					{value: ['-50%', '0%'], duration: 200}
// 				],
// 				opacity: [
// 					{value: 0, duration: 200},
// 					{value: 1, duration: 200}
// 				]
// 			});
// 			anime.remove(this.DOM.subtitle);
// 			anime({
// 				targets: this.DOM.subtitle,
// 				easing: 'easeOutQuad',
// 				translateY: this.isActive ? {value: ['50%', '0%'], duration: 200, delay: 250} : {value: '0%', duration: 1},
// 				opacity: this.isActive ? {value: [0,1], duration: 200, delay: 250} : {value: 0, duration: 1}
// 			});
// 		}
// 	}

// 	const items = Array.from(document.querySelectorAll('.item'));
// 	const init = (() => items.forEach(item => new ImgItem(item)))();
// 	setTimeout(() => document.body.classList.remove('loading'), 2000);
// };




var morphing = anime({
	targets: '#morphing .p',
	d: [
			{ value: 'M 418.1,159.8 C 460.9,222.9 497,321.5 452.4,383.4 417.2,432.4 371.2,405.6 271.3,420.3 137.2,440 90.45,500.6 42.16,442.8 -9.572,381 86.33,289.1 117.7,215.5 144.3,153.4 145.7,54.21 212.7,36.25 290.3,15.36 373.9,94.6 418.1,159.8 Z' },
			{ value: 'M 189,80.37 C 232.6,46.67 352.5,67.06 350.9,124.1 349.5,173.4 311.7,168 312.4,248.1 312.9,301.1 382.5,319.2 368.5,379.1 349.4,460.6 137.7,467.5 117.6,386.3 98.68,309.7 171.5,292.2 183.6,240.1 195.7,188.2 123.8,130.7 189,80.37 Z' },
			{ value: 'M 378.1,121.2 C 408.4,150 417.2,197.9 411,245.8 404.8,293.7 383.5,341.7 353.4,370.7 303.2,419.1 198.7,427.7 144.5,383.8 86.18,336.5 67.13,221.3 111.9,161 138.6,125 188.9,99.62 240.7,90.92 292.4,82.24 345.6,90.32 378.1,121.2 Z' },
	],
	easing: 'easeOutBack',
	duration: 16000,
	direction: 'alternate',
	loop: true
});



var morphing2 = anime({
	targets: '#morphing2 .d',
	d: [
			{ value: 'M 193.7,217.3 C 236.4,228.3 279.7,242.7 320.9,231.8 362.6,220.9 446.8,197.1 457.6,241.5 469.3,289.8 378.7,308.3 330.2,319.2 278.5,330.8 222.3,319.2 172.1,302.2 125.2,286.4 33.08,273.2 45.14,225.2 57.22,177.1 145.7,204.8 193.7,217.3 Z' },
			{ value: 'M 184,127.4 C 235.4,92.39000000000001 319.7,79.26999999999998 359.9,132.2 383.2,163 357.1,216.6 355.8,258.8 354.8,291.2 371.3,332.9 352.9,356 306.1,414.4 205.1,419.3 153.7,367.2 123.8,336.8 128.6,272.1 136.1,225.2 142.1,187.8 157,145.7 184,127.4 Z' },
			{ value: 'M 378.1,121.2 C 408.4,150 417.2,197.9 411,245.8 404.8,293.7 383.5,341.7 353.4,370.7 303.2,419.1 198.7,427.7 144.5,383.8 86.18,336.5 67.13,221.3 111.9,161 138.6,125 188.9,99.62 240.7,90.92 292.4,82.24 345.6,90.32 378.1,121.2 Z' },
	],
	easing: 'easeOutBack',
	duration: 8000,
	direction: 'alternate',
	loop: true
});


var morphing2 = anime({
	targets: '#morphing3 .e',
	d: [
			{ value: 'M 184,127.4 C 235.4,92.39000000000001 319.7,79.26999999999998 359.9,132.2 383.2,163 357.1,216.6 355.8,258.8 354.8,291.2 371.3,332.9 352.9,356 306.1,414.4 205.1,419.3 153.7,367.2 123.8,336.8 128.6,272.1 136.1,225.2 142.1,187.8 157,145.7 184,127.4 Z' },
			{ value: 'M 184,127.4 C 235.4,92.39000000000001 319.7,79.26999999999998 359.9,132.2 383.2,163 357.1,216.6 355.8,258.8 354.8,291.2 371.3,332.9 352.9,356 306.1,414.4 205.1,419.3 153.7,367.2 123.8,336.8 128.6,272.1 136.1,225.2 142.1,187.8 157,145.7 184,127.4 Z' },
			{ value: 'M 378.1,121.2 C 408.4,150 417.2,197.9 411,245.8 404.8,293.7 383.5,341.7 353.4,370.7 303.2,419.1 198.7,427.7 144.5,383.8 86.18,336.5 67.13,221.3 111.9,161 138.6,125 188.9,99.62 240.7,90.92 292.4,82.24 345.6,90.32 378.1,121.2 Z' },
	],
	easing: 'easeOutBack',
	duration: 18000,
	direction: 'alternate',
	loop: true
});