/**
 * ktf2021-blocks: Text
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
	ToggleControl,
	RangeControl,
	BaseControl } = wp.components;
const { Fragment } = wp.element;


/**
 * Register: aa Gutenberg Block.
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
registerBlockType('ktf2021/ktf2021-text', {
	title: __('KTF2021 Text'),
	icon: 'editor-paragraph',
	category: 'ktf2021-blocks',
	keywords: [
		__('ktf2021'),
		__('Text'),
	],

	attributes: {
		title: {
			type: 'string',
			default: ''
		},
		content: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
		columns: {
			type: 'number',
			default: 2
		},
		alignment: {
			type: 'string',
			default: 'left',
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
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function (props) {
		const { attributes: {
			title,
			content,
			columns,
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

		function onChangeTitle(newTitle) {
			props.setAttributes({ title: newTitle === undefined ? '' : newTitle });
		}

		function onChangeContent(newContent) {
			props.setAttributes({ content: newContent });
		}

		function onChangeColumns(newColumns) {
			props.setAttributes({ columns: newColumns === undefined ? 2 : newColumns });
		}

		function onChangeAlignment(newAlignment) {
			props.setAttributes({ alignment: newAlignment === undefined ? 'left' : newAlignment });
		}

		function onChangeColor(newColor) {
			props.setAttributes({ color: newColor === undefined ? 'white' : newColor });
		}

		function onChangeFadeIn(newFadeIn) {
			props.setAttributes({ fadeIn: newFadeIn === undefined ? true : newFadeIn });
		}

		const editorBlockClassNames = classnames("ktf2021-container-" + color);

		return (
			<Fragment>
				<BlockControls>
					<AlignmentToolbar value={alignment} onChange={onChangeAlignment} />
				</BlockControls>
				<div className={editorBlockClassNames}>
					<RichText
						tagName={'h2'}
						value={title}
						onChange={onChangeTitle}
						placeholder={"Titel..."}
					/>
					<RichText
						className={className}
						style={{ textAlign: alignment }}
						tagName="p"
						onChange={onChangeContent}
						value={content}
						placeholder={"Text..."}
					/>
				</div>
				<InspectorControls>
					<PanelBody>
						<ColorPalette
							value={color}
							colors={colors}
							onChange={onChangeColor}
							label={__('Hintergrundfarbe')}
						/>
						<ToggleControl
							checked={fadeIn}
							onChange={onChangeFadeIn}
							label={'fade in effect'}
						/>
						<RangeControl
							label={__('Anzahl Spalten für die Aufteilung des Textes')}
							value={columns}
							onChange={onChangeColumns}
							min={1}
							max={3}
						/>
					</PanelBody>
					<PanelBody>
						<BaseControl>
							<h3>Info</h3>
							<p>
								Die Aufteilung des Textes in die Anzahl Spalten wird hier im Bearbeitungsmodus nicht umgesetzt.
								Wenn Du speicherst und Dir die Seite ansiehst, dann ist der Text aufgeteilt.
							</p>
							<p>
								Die Aufteilung des Textes ist automatisch. Wenn Du die Aufteilung des Textes in Kontrolle haben willst, dann benütze den Block KTF Spalten. Dort kannst Du auch Text, Bilder, Buttons, Links und Videos kombinieren.
							</p>
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
		return (
			<div className={`ktf2021-container-${props.attributes.color}`}>
				<div className={`ktf2021-content ${props.attributes.fadeIn ? ' ktf2021-reveal' : ''}`}>
					<h2 className={'ktf2021-text-title text-center'}>{props.attributes.title}</h2>
					<RichText.Content
						className={`ktf2021-text text-${props.attributes.alignment}`}
						tagName='p'
						style={`column-count: ${props.attributes.columns}`}
						value={props.attributes.content}
					/>
				</div>
			</div>
		);
	},
});
