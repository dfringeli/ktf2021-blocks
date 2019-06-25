/**
 * ktf2021-blocks: Wallpaper
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls, MediaUpload, MediaUploadCheck } = wp.editor;
const {
	PanelBody,
	BaseControl,
	ToggleControl
} = wp.components;

const { Fragment } = wp.element;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   wallpaper   Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType('ktf2021/ktf2021-wallpaper', {
	title: __('KTF 2021 Wallpaper'),
	icon: 'format-image',
	category: 'ktf2021-blocks',
	keywords: [
		__('image'),
		__('stock'),
		__('bild'),
	],

	attributes: {
		imageSrc: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
			default: '',
		},
		height: {
			type: 'number',
			default: 300,
		},
		fadeIn: {
			type: 'boolean',
			default: true
		}
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function (props) {
		const { attributes: { imageSrc, height, fadeIn }, setAttributes, className } = props;

		return (
			<Fragment>
				<div className={className + " ktf2021-container-white"}>
					<div className={'ktf201-content-fullwidth ktf2021-wallpaper-image-container'} style={{ height: height }} >
						<img className={'ktf2021-wallpaper-image'} src={imageSrc} />
					</div>
				</div>
				<InspectorControls>
					<PanelBody>
						<BaseControl>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) => setAttributes({ imageSrc: media.url })}
									type="image"
									value={imageSrc}
									render={({ open }) => {
										if (imageSrc) {
											return (<button className={'btn btn-secondary my-3'} onClick={open}>Bild ändern</button>);
										} else {
											return (<button className={'btn btn-secondary my-3'} onClick={open} >Bild auswählen</button>);
										}
									}}
								/>
							</MediaUploadCheck>
						</BaseControl>
						<BaseControl label={__('Weitere Einstellungen')}>
							<input
								type="number"
								onChange={(event) => {
									props.setAttributes({
										height: parseInt(event.target.value, 10),
									});
								}}
								value={height}
								min="200"
								step="10"
							/>
						</BaseControl>
						<ToggleControl
							checked={fadeIn}
							onChange={(value) => setAttributes({ fadeIn: value })}
							label={"fade in effect"}
						/>
						<BaseControl>
							<b>Info</b>
							<p>Das Bild wird nie verzogen sein, sondern immer mittig gezoomt</p>
							<p>Achte darauf, dass die Höhe des Wallpapers nicht die Höhe des Bildes überschreitet</p>
							<p>Auf der mobile Ansicht, hat dann jedes Bild eine Höhe von 200px</p>
						</BaseControl>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function (props) {
		const { attributes: { imageSrc, height, fadeIn } } = props;
		const reveal = fadeIn ? ' ktf2021-reveal' : '';
		return (
			<div className={"ktf2021-container-white"}>
				<div className={'ktf201-content-fullwidth ktf2021-wallpaper-image-container p-0' + reveal } style={{ height: height }} >
					<img className={'ktf2021-wallpaper-image'} src={imageSrc} />
				</div>
			</div>
		);
	}
});
