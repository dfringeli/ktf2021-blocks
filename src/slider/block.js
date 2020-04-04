/**
 * BLOCK: KTF2021 Slider
 */

// Import CSS
import './style.scss';
import './editor.scss';

import Glide from '@glidejs/glide';
import ScriptTag from 'react-script-tag';

// Components
const { __ } = wp.i18n;

// Register block controls
const { Fragment } = wp.element;

const {
	registerBlockType,
} = wp.blocks;

const { InspectorControls, MediaUpload, MediaUploadCheck } = wp.editor;

const {
	BaseControl,
	PanelBody,
	TextControl } = wp.components;

// Register the block
registerBlockType('ktf2021/ktf2021-slider', {
	title: __('KTF2021 Slider'),
	description: __('KTF 2021 Slider'),
	icon: 'images-alt',
	category: 'ktf2021-blocks',
	keywords: [
		__('slider'),
		__('carousel'),
		__('bilder')
	],
	attributes: {
		watermarktext: {
			type: "string",
			default: "mir sy turnfescht! bisch du's au?"
		},
		images: {
			source: "query",
			default: [],
			selector: "li.glide__slide",
			query: {
				imageSrc: {
					source: "attribute",
					selector: "img.ktf2021-slide-image",
					attribute: "src"
				},
				index: {
					source: "attribute",
					selector: "div.ktf2021-slide-image-container",
					attribute: "data-index"
				}
			}
		}
	},

	edit: function (props) {
		const { images, watermarktext } = props.attributes;

		const sleep = (milliseconds) => {
			return new Promise(resolve => setTimeout(resolve, milliseconds))
		}

		function mountEditorSlider() {
			sleep(50).then(() => {
				var glide = new Glide('.ktf2021-slider', { swipeThreshold: false, dragThreshold: false });
				glide.mount();
			});
		}

		const inspectorControls = (
			<InspectorControls>
				<PanelBody>
					<TextControl
						label={'Text als Wasserzeichen im Bild'}
						value={watermarktext}
						onChange={(value) => props.setAttributes({ watermarktext: value })} />
				</PanelBody>
				<PanelBody>
					<BaseControl>
						<h3>
							Info zum Slider
						</h3>
						<p>
							Die Bilder werden mit der gesamten zur Verfügung stehenden Breite angezeigt
						</p>
						<p>
							Verwende Bilder mit einer Grösse von unter 1 Megabyte, ansonsten wird der Editorbereich sehr langsam. Auch auf der richtigen Website laden die Bilder langsam. Verkleinere Bilder z.B. mit FILEminimizer.
						</p>
						<p>
							Das Bild im Slider wechselt auf der richtigen Website all 3 Sekunden. <br />
							Die Pfeile für ein Bild nach rechts und nach links sind nur hier im Bearbeitungsmodus sichtbar.
						</p>
						<p>
							Nach jeder Interaktion mit dem Slider springt die Ansicht auf das Bild 1 zurück. Benutze die Bullets (die weissen Punkte) für eine schnelle Navigation. Sorry!
						</p>
						<p>
							Es kann ein Wasserzeichen-Text hinterlegt werden. Dieser ist im Editor schwarz, auf der richtigen Website dann aber weiss.
						</p>
					</BaseControl>
				</PanelBody>
			</InspectorControls>
		);

		if (images.length == 0) {
			props.setAttributes({
				images: [
					{
						index: 0
					}
				]
			});
		}

		const bullets = images.map(function (image, index) {
			return (
				<button className={'glide__bullet'} key={image.index} data-glide-dir={'=' + index}></button>
			);
		});

		const slides = images
			.sort((i1, i2) => i1.index - i2.index)
			.map(image => {
				return (

					<li className={'glide__slide'} key={image.index}>
						<div className={'ktf2021-slide-container'}>
							<span className="slide-index" style={{ display: 'none' }}>
								{image.index}
							</span>
							<div className={'d-flex justify-content-between my-3'}>
								<h3>Bild {Number(image.index) + 1}</h3>
								<button
									className={'btn btn-outline-danger'}
									key={image.index}
									onClick={() => {
										const newImages = images
											.filter(item => item.index != image.index)
											.map(i => {
												if (i.index > image.index) {
													i.index -= 1;
												}

												return i;
											});

										props.setAttributes({
											images: newImages
										});
									}}
								>
									Bild {Number(image.index) + 1} entfernen
								</button>
							</div>

							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) => {
										const newImage = Object.assign({}, image, {
											imageSrc: media.url
										});
										props.setAttributes({
											images: [
												...images.filter(
													item => item.index != image.index
												),
												newImage
											]
										});
									}
									}
									type="image"
									key={image.index}
									value={image.imageSrc}
									render={({ open }) => {
										if (image.imageSrc) {
											return (<div>
												<button className={'btn btn-secondary my-3'} onClick={open} key={image.index}>Bild ändern</button>
												<div className={'ktf2021-slide-image-container'} data-index={image.index}>
													<img className={'ktf2021-slide-image'} src={image.imageSrc} />
												</div>
											</div>);
										} else {
											return (<div className={'ktf2021-slide-image-container'} data-index={image.index}>
												<button className={'btn btn-secondary'} onClick={open} key={image.index}>Bild auswählen</button>
											</div>);
										}
									}}
								/>
							</MediaUploadCheck>

						</div>
					</li>
				);
			});
		return (
			<Fragment>
				{inspectorControls}
				<div className="ktf2021-container-white">
					<div className="ktf2021-content-fullwidth">
						<div className="glide ktf2021-slider">
							<div className="glide__track" data-glide-el="track">
								<ul className="glide__slides">
									{slides}
								</ul>
							</div>
							<div className={'glide__arrows'} data-glide-el="controls">
								<button className={'glide__arrow glide__arrow--left'} data-glide-dir="<"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M0 12l10.975 11 2.848-2.828-6.176-6.176H24v-3.992H7.646l6.176-6.176L10.975 1 0 12z"></path></svg></button>
								<button className={'glide__arrow glide__arrow--right'} data-glide-dir=">"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path></svg></button>
							</div>
							<div className={'glide__bullets'} data-glide-el="controls[nav]">
								{bullets}
							</div>
							<div className="ktf2021-slider-watermark ktf2021-content p-5 d-none d-lg-block">
								<h2 className="m-0">{watermarktext}</h2>
							</div>
						</div>
					</div>
					<div className={'text-right my-3'}>
						<button
							className="btn btn-primary"
							onClick={content => {
								props.setAttributes({
									images: [
										...props.attributes.images,
										{
											index: props.attributes.images.length
										}
									]
								});
							}
							}
						>Bild hinzufügen</button>
					</div>
				</div>
				{mountEditorSlider()}
			</Fragment>
		);
	},

	save({ attributes }) {
		const { images, watermarktext } = attributes;

		if (images.length > 0) {

			function mountSlider() {
				var glide = new Glide('.ktf2021-slider', { type: 'carousel', autoplay: 5000, swipeThreshold: false });
				glide.mount();
			}

			const bullets = images.map(function (image, index) {
				return (
					<button className={'glide__bullet'} key={image.index} data-glide-dir={'=' + index}></button>
				);
			});

			const slides = images.map(function (image) {
				return (
					<li className={'glide__slide'} key={image.index}>
						<div className={'ktf2021-slide-image-container'} data-index={image.index}>
							<img className={'ktf2021-slide-image'} src={image.imageSrc} />
						</div>
					</li>
				);
			});

			return (
				<div className="ktf2021-container-white p-0">
					<div className="ktf2021-content-fullwidth p-0">
						<div className="glide ktf2021-slider">
							<div className="glide__track" data-glide-el="track">
								<ul className="glide__slides">
									{slides}
								</ul>
							</div>
							<div className="glide__bullets" data-glide-el="controls[nav]">
								{bullets}
							</div>
							<div className="ktf2021-slider-watermark ktf2021-content p-5 d-none d-lg-block">
								<h2 className="m-0">{watermarktext}</h2>
							</div>
						</div>
					</div>
					<ScriptTag type="text/javascript" src="https://ktf21.ch/wp-content/plugins/ktf2021-blocks/src/slider/mountslider.js" />
				</div>
			);
		} else {
			return null;
		}
	},
	deprecated: [
		{
            migrate(attributes) {
                return {
                    watermarktext: "mir sy turnfescht! bisch du's au?"
                };
			},
			
			attributes: {
				images: {
					source: "query",
					default: [],
					selector: "li.glide__slide",
					query: {
						imageSrc: {
							source: "attribute",
							selector: "img.ktf2021-slide-image",
							attribute: "src"
						},
						index: {
							source: "attribute",
							selector: "div.ktf2021-slide-image-container",
							attribute: "data-index"
						}
					}
				}
			},
		
			save({ attributes }) {
				const { images } = attributes;
		
				if (images.length > 0) {
		
					const bullets = images.map(function (image, index) {
						return (
							<button className={'glide__bullet'} key={image.index} data-glide-dir={'=' + index}></button>
						);
					});
		
					const slides = images.map(function (image) {
						return (
							<li className={'glide__slide'} key={image.index}>
								<div className={'ktf2021-slide-image-container'} data-index={image.index}>
									<img className={'ktf2021-slide-image'} src={image.imageSrc} />
								</div>
							</li>
						);
					});
		
					return (
						<div className="ktf2021-container-white p-0">
							<div className="ktf2021-content-fullwidth p-0">
								<div className="glide ktf2021-slider">
									<div className="glide__track" data-glide-el="track">
										<ul className="glide__slides">
											{slides}
										</ul>
									</div>
									<div className="glide__bullets" data-glide-el="controls[nav]">
										{bullets}
									</div>
								</div>
							</div>
							<ScriptTag type="text/javascript" src="https://ktf21.ch/wp-content/plugins/ktf2021-blocks/src/slider/mountslider.js" />
						</div>
					);
				} else {
					return null;
				}
			},

		}
	]
});
