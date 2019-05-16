/**
 * ktf2021-blocks: Collapse
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
 * @param  {string}   Collapse   Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType('ktf2021/ktf2021-collapse', {
	title: __('KTF2021 Collapse'),
	icon: 'welcome-widgets-menus',
	category: 'ktf2021-blocks',
	keywords: [
		__('collapse'),
		__('accordion'),
		__('click'),
	],

	attributes: {
		title: {
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
		const { attributes: { title }, setAttributes, className } = props;

		return (
			<Fragment>
				<div className={className + " ktf2021-container-white"}>
				</div>
				<InspectorControls>
					<PanelBody title={__('Title')}>
						<TextControl
							label={'title'}
							value={title}
							onChange={(value) => setAttributes({ title: value })} />
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
		const { attributes: { title } } = props;

		return (
			<div className={"ktf2021-container-white"}>
				<div className={"ktf2021-content ktf2021-reveal"}>
					<p>
						{title}
					</p>
				</div>
			</div>
		);
	},
});
