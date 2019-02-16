/**
 * ktf2021-blocks: Button
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const {
	registerBlockType } = wp.blocks;
const {
	RichText,
	MediaUpload, MediaUploadCheck,
	InspectorControls,
	AlignmentToolbar,
	BlockControls,
	ColorPalette } = wp.editor;
const {
	G, Path, SVG,
	Button,
	SelectControl,
	PanelBody } = wp.components;

const colors = [
	{ name: 'Schwarz', color: 'black' },
	{ name: 'Grün', color: 'green' },
	{ name: 'Blau', color: 'blue' },
];

/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   Button   Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType('ktf2021/ktf2021-button', {
	title: __('KTF2021 Button'),
	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z" /></G></SVG>,
	category: 'ktf2021-blocks',
	keywords: [
		__('ktf2021'),
		__('Button'),
	],
	parent: ['ktf2021/ktf2021-column'],
	supports: {
		align: true,
		alignWide: false,
		customClassName: false,
	},

	attributes: {
		color: {
			type: 'string',
			default: 'blue'
		},

		text: {
			type: 'string',
			source: 'html',
			selector: 'a',
		},
		url: {
			type: 'string',
			source: 'attribute',
			selector: 'a',
			attribute: 'href',
		},
		mediaTitle: {
			type: 'string'
		},
		behavior: {
			type: 'string',
			default: 'download'
		}
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 */
	edit: function (props) {
		const {
			attributes,
			setAttributes,
			className,
		} = props;

		const {
			text,
			url,
			mediaTitle,
			color,
			behavior,
		} = attributes;

		return (
			<Fragment>
				<div className={className + ' ktf2021-blocks-button-container'}>
					<RichText
						placeholder={__('Add text…')}
						value={text}
						onChange={(value) => setAttributes({ text: value })}
						formattingControls={['bold', 'italic', 'strikethrough']}
						className={'ktf2021-blocks-button ktf2021-blocks-button-' + color}
						keepPlaceholderOnFocus
					/>
					<InspectorControls>
						<PanelBody title="Button Farbe">
							<ColorPalette
								value={color}
								colors={colors}
								onChange={(value) => setAttributes({ color: value })}
								label={__('Button-Farbe')}
							/>
						</PanelBody>
						<PanelBody title="Datei">
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) => { setAttributes({ url: media.url }); setAttributes({ mediaTitle: media.title }) }}
									value={url}
									render={({ open }) => (
										<div>
											<div>
												<Button isDefault onClick={open}>Datei wählen</Button>
											</div>
											<div>
												<span>Aktuelle Datei: {mediaTitle ? mediaTitle : "Keine ausgewählt"}</span>
											</div>
										</div>
									)}
								/>
							</MediaUploadCheck>
							<br />
							<SelectControl
								label={__('Verhalten, wenn der Button gedrückt wird:')}
								value={behavior}
								onChange={(selection) => { setAttributes({ behavior: selection }) }}
								options={[
									{ value: 'newTab', label: 'Datei in neuem Tab öffnen' },
									{ value: 'currentTab', label: 'Datei im aktuellen Tab öffnen' },
									{ value: 'download', label: 'Datei herunterladen' },
								]}
							/>
						</PanelBody>
					</InspectorControls>
				</div>
			</Fragment>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 */
	save({ attributes }) {

		const {
			text,
			url,
			color,
			behavior,
		} = attributes;

		switch (behavior) {
			case 'newTab':
				return (
					<div className={'ktf2021-blocks-button-container'}>
						<a className={'ktf2021-blocks-button ktf2021-blocks-button-' + color}
							href={url}
							target="_blank" rel="noopener noreferrer"
						>{text}</a>
					</div>
				);
			case 'currentTab':
				return (
					<div className={'ktf2021-blocks-button-container'}>
						<a className={'ktf2021-blocks-button ktf2021-blocks-button-' + color}
							href={url}
						>{text}</a>
					</div>
				);
			default:
				return (
					<div className={'ktf2021-blocks-button-container'}>
						<a className={'ktf2021-blocks-button ktf2021-blocks-button-' + color}
							href={url}
							download
						>{text}</a>
					</div>
				);
		}
	},
});
