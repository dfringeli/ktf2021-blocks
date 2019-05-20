/**
 * ktf2021-blocks: Socail Media Buttons
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.editor;
const {
	PanelBody,
	BaseControl,
	TextControl
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
 * @param  {string}   Socail Media Buttons   Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType('ktf2021/ktf2021-social', {
	title: __('KTF2021 Social Media Buttons'),
	icon: 'share',
	category: 'ktf2021-blocks',
	keywords: [
		__('social media'),
		__('facebook instagram'),
		__('youtube'),
	],

	attributes: {
		facebook: {
			type: 'string',
			default: ''
		},
		instagram: {
			type: 'string',
			default: ''
		},
		youtube: {
			type: 'string',
			default: ''
		},
		flickr: {
			type: 'string',
			default: ''
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
		const { attributes: { facebook, instagram, youtube, flickr }, setAttributes, className } = props;

		var facebookButton;
		if (facebook != '') {
			facebookButton = (
				<i className={"fab fa-facebook-square fa-3x"}></i>
			);
		}

		var instagramButton;
		if (instagram != '') {
			instagramButton = (
				<i className={"fab fa-instagram fa-3x"}></i>
			);
		}

		var youtubeButton;
		if (youtube != '') {
			youtubeButton = (
				<i className={"fab fa-youtube fa-3x"}></i>
			);
		}

		var flickrButton;
		if (flickr != '') {
			flickrButton = (
				<i className={"fab fa-flickr fa-3x"}></i>
			);
		}

		return (
			<Fragment>
				<div className={className + " ktf2021-container-white"}>
					<div className={'d-flex justify-content-around'}>
						{facebookButton}
						{instagramButton}
						{youtubeButton}
						{flickrButton}
					</div>
				</div>
				<InspectorControls>
					<PanelBody title={__('Social Media Links')}>
						<BaseControl label={__('Info')}>
							<p>Gib die zur Social Media Plattform zugehörigen Link ein. Gibst Du keinen Link an, so wird das Icon auch nicht angezeigt.</p>
							<p>Gib bitte einen korrekte Link an, Danke!</p>
						</BaseControl>
						<TextControl
							label={'facebook'}
							value={facebook}
							onChange={(value) => setAttributes({ facebook: value })} />
						<TextControl
							label="instagram"
							value={instagram}
							onChange={(value) => setAttributes({ instagram: value })} />
						<TextControl
							label="YouTube"
							value={youtube}
							onChange={(value) => setAttributes({ youtube: value })} />
						<TextControl
							label="flickr"
							value={flickr}
							onChange={(value) => setAttributes({ flickr: value })} />
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
		const { attributes: { facebook, instagram, youtube, flickr } } = props;

		var facebookButton;
		if (facebook != '') {
			facebookButton = (
				<a href={facebook} target="_blank" rel="noopener noreferrer">
					<i className={"fab fa-facebook-square ktf2021-fa-size"}></i>
				</a>
			);
		}

		var instagramButton;
		if (instagram != '') {
			instagramButton = (
				<a href={instagram} target="_blank" rel="noopener noreferrer">
					<i className={"fab fa-instagram ktf2021-fa-size"}></i>
				</a>
			);
		}

		var youtubeButton;
		if (youtube != '') {
			youtubeButton = (
				<a href={youtube} target="_blank" rel="noopener noreferrer">
					<i className={"fab fa-youtube ktf2021-fa-size"}></i>
				</a>
			);
		}

		var flickrButton;
		if (flickr != '') {
			flickrButton = (
				<a href={flickr} target="_blank" rel="noopener noreferrer">
					<i className={"fab fa-flickr ktf2021-fa-size"}></i>
				</a>
			);
		}

		return (
			<div className={"ktf2021-container-white"}>
				<div className={"ktf2021-content ktf2021-reveal"}>
					<div className={'d-flex justify-content-around'}>
						{facebookButton}
						{instagramButton}
						{youtubeButton}
						{flickrButton}
					</div>
				</div>
			</div>
		);
	},
});
