/**
 * ktf2021-blocks: Banner
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

import classnames from 'classnames';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	RichText,
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	ColorPalette } = wp.editor;
const {
	PanelBody,
	ToggleControl } = wp.components;
const { Fragment } = wp.element;


/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   Banner   Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType('ktf2021/ktf2021-banner', {
	title: __('KTF2021 Banner'),
	icon: 'editor-quote',
	category: 'ktf2021-blocks',
	keywords: [
		__('ktf2021'),
		__('Banner'),
	],

	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
		alignment: {
			type: 'string',
			default: 'center',
		},
		color: {
			type: 'string',
			default: 'white'
		},
		fadeIn: {
			type: 'boolean',
			default: true
		}
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 */
	edit: function (props) {
		const { attributes: {
			content,
			alignment,
			color,
			fadeIn,
		}, className } = props;

		const colors = [
			{ name: 'Weiss', color: 'white' },
			{ name: 'Schwarz', color: 'black' },
			{ name: 'Grün', color: 'green' },
			{ name: 'Blau', color: 'blue' },
		];

		function onChangeContent(newContent) {
			props.setAttributes({ content: newContent });
		}

		function onChangeAlignment(newAlignment) {
			props.setAttributes({ alignment: newAlignment === undefined ? 'center' : newAlignment });
		}

		function onChangeColor(newColor) {
			props.setAttributes({ color: newColor === undefined ? 'white' : newColor });
		}

		function onChangeFadeIn(newFadeIn) {
			props.setAttributes({ fadeIn: newFadeIn === undefined ? true : newFadeIn });
		}

		const editorBlockClassNames = classnames("ktf2021-container-" + color, className);

		return (
			<Fragment>
				<BlockControls>
					<AlignmentToolbar value={alignment} onChange={onChangeAlignment} />
				</BlockControls>
				<div className={editorBlockClassNames}>
					<RichText
						className={'under-title'}
						style={{ textAlign: alignment }}
						tagName="p"
						onChange={onChangeContent}
						value={content}
					/>
				</div>
				<InspectorControls>
					<PanelBody>
						<h4>Farbe</h4>
						<ColorPalette
							value={color}
							colors={colors}
							onChange={onChangeColor} />
						<hr style={{ marginTop: '2.5em' }} />
						<ToggleControl
							checked={fadeIn}
							onChange={onChangeFadeIn}
							label={"fade in effect"} />
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 */
	save: function (props) {
		const { attributes: {
			content,
			alignment,
			color,
			fadeIn,
		} } = props;
		return (
			<div className={classnames('ktf2021-container-' + color)}>
				<div className={classnames('ktf2021-content', fadeIn ? ' ktf2021-reveal' : '')}>
					<RichText.Content
						className={classnames('under-title', 'text-' + alignment)}
						tagName="p"
						value={content}
					/>
				</div>
			</div>
		);
	},
});
