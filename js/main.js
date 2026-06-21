'use strict';
/* global Monogatari */
/* global monogatari */

/**
 * =============================================================================
 * This is the file where you should put all your custom JavaScript code,
 * depending on what you want to do, there are 3 different places in this file
 * where you can add code.
 *
 * 1. Outside the $_ready function: At this point, the page may not be fully
 *    loaded yet, however you can interact with Monogatari to register new
 *    actions, components, labels, characters, etc.
 *
 * 2. Inside the $_ready function: At this point, the page has been loaded, and
 *    you can now interact with the HTML elements on it.
 *
 * 3. Inside the init function: At this point, Monogatari has been initialized,
 *    the event listeners for its inner workings have been registered, assets
 *    have been preloaded (if enabled) and your game is ready to be played.
 *
 * You should always keep the $_ready function as the last thing on this file.
 * =============================================================================
 **/

const { $_ready, $_ } = Monogatari;

// 1. Outside the $_ready function:
class GalleryScreen extends Monogatari.ScreenComponent {
	render () {
		const galleryPhotos = {
			'photo1': 'photo_1_2026-06-22_02-30-02.jpg',
			'photo2': 'photo_2_2026-06-22_02-30-02.jpg',
			'photo3': 'photo_3_2026-06-22_02-30-02.jpg',
			'photo4': 'photo_4_2026-06-22_02-30-02.jpg',
			'photo5': 'photo_5_2026-06-22_02-30-02.jpg',
			'photo6': 'photo_6_2026-06-22_02-30-02.jpg',
			'photo7': 'photo_7_2026-06-22_02-30-02.jpg',
			'photo8': 'photo_8_2026-06-22_02-30-02.jpg',
			'photo9': 'photo_9_2026-06-22_02-30-02.jpg',
			'photo10': 'photo_10_2026-06-22_02-30-02.jpg',
			'photo11': 'photo_11_2026-06-22_02-30-02.jpg',
			'photo12': 'photo_12_2026-06-22_02-30-02.jpg',
			'photo13': 'photo_13_2026-06-22_02-30-02.jpg',
			'photo14': 'photo_14_2026-06-22_02-30-02.jpg',
			'photo15': 'photo_15_2026-06-22_02-30-02.jpg',
			'photo16': 'photo_16_2026-06-22_02-30-02.jpg',
			'photo17': 'photo_17_2026-06-22_02-30-02.jpg',
			'photo18': 'photo_18_2026-06-22_02-30-02.jpg',
			'photo19': 'photo_19_2026-06-22_02-30-02.jpg',
			'photo20': 'photo_20_2026-06-22_02-30-02.jpg',
			'photo21': 'photo_21_2026-06-22_02-30-02.jpg',
			'photo22': 'photo_22_2026-06-22_02-30-02.jpg'
		};

		let html = '';
		for (const key in galleryPhotos) {
			const imgPath = `assets/gallery/${galleryPhotos[key]}`;
			html += `
				<div class="gallery-item">
					<img src="${imgPath}" class="gallery-thumb" data-src="${imgPath}">
					<div class="gallery-item-title">${key}</div>
				</div>
			`;
		}

		return `
			<button class="back-button" data-action="back" data-string="Back">Back</button>
			<div class="gallery-container">
				<h2 class="gallery-title">CG Gallery / 画廊</h2>
				<div class="gallery-grid" data-content="grid">
					${html}
				</div>
			</div>
			<div class="gallery-lightbox" data-ui="lightbox" style="display: none;">
				<img src="" class="lightbox-img" data-ui="lightbox-img">
			</div>
		`;
	}

	connectedCallback () {
		super.connectedCallback ();
		
		this.addEventListener('click', (e) => {
			const lightbox = this.querySelector('[data-ui="lightbox"]');
			const lightboxImg = this.querySelector('[data-ui="lightbox-img"]');
			if (!lightbox || !lightboxImg) return;

			const thumb = e.target.closest('.gallery-thumb');
			if (thumb) {
				const src = thumb.getAttribute('data-src');
				lightboxImg.src = src;
				lightbox.style.display = 'flex';
				return;
			}
			
			if (lightbox.style.display === 'flex') {
				lightbox.style.display = 'none';
				lightboxImg.src = '';
			}
		});
	}

	onStateUpdate (property, oldValue, newValue) {
		super.onStateUpdate (property, oldValue, newValue);
		if (property === 'active' && newValue === true) {
			monogatari.run('play music bgm2 with loop');
		}
	}
}

GalleryScreen.tag = 'gallery-screen';
monogatari.registerComponent(GalleryScreen);

monogatari.translation ('English', {
	'Gallery': '画廊',
	'Back': '返回'
});

$_ready (() => {
	// 2. Inside the $_ready function:

	let currentVoice = new Audio('assets/voices/voc1.mp3');
	let lastPlayTime = 0;

	monogatari.on('willRunAction', (action) => {
		if (currentVoice) {
			currentVoice.pause();
		}
	});

	monogatari.on('willRevertAction', (action) => {
		if (currentVoice) {
			currentVoice.pause();
		}
	});

	monogatari.on('didRunAction', (action) => {
		if (monogatari.global('_restoring_state') === true) {
			return;
		}

		const id = action.constructor.id || action.id || (action.constructor && action.constructor.name);
		const isDialog = (
			(id && (id.toLowerCase() === 'dialog' || id.toLowerCase() === 'say')) ||
			(action.character && (action.text !== undefined || action.string !== undefined || action.statement !== undefined))
		);

		if (isDialog && action.character) {
			const now = Date.now();
			if (now - lastPlayTime > 300) {
				lastPlayTime = now;
				if (currentVoice) {
					currentVoice.pause();
					currentVoice.currentTime = 0;
					try {
						const pref = monogatari.preference('Volume');
						if (pref && typeof pref.Voice === 'number') {
							currentVoice.volume = pref.Voice;
						}
					} catch (e) {}
					currentVoice.play().catch(err => console.log('Audio play blocked:', err));
				}
			}
		}
	});

	monogatari.init ('#monogatari').then (() => {
		// 3. Inside the init function:
		monogatari.component('main-menu').addButton ({
			string: 'Gallery',
			data: {
				action: 'open-screen',
				open: 'gallery'
			}
		});
	});
});
