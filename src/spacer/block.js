/**
 * ktf2021-blocks: Spacer
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	InspectorControls,
	ColorPalette } = wp.editor;
const {
	PanelBody,
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
 * @param  {string}   Spacer   Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'ktf2021/ktf2021-spacer', {
	title: __( 'KTF2021 Spacer' ),
	icon: 'image-flip-vertical',
	category: 'ktf2021-blocks',
	keywords: [
		__( 'ktf2021' ),
		__( 'Spacer' ),
		__( 'Abstand' ),
	],

	attributes: {
		color: {
			type: 'string',
			default: 'white'
		},
		height: {
			type: 'number',
			default: 100
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
	edit: function( props ) {
		const { attributes: {
			color,
			height,
		} } = props;

		const colors = [
			{ name: 'Weiss', color: 'white' },
			{ name: 'Schwarz', color: 'black' },
			{ name: 'Grün', color: 'green' },
			{ name: 'Blau', color: 'blue' },
		];

		function onChangeColor( newColor ) {
			props.setAttributes( { color: newColor === undefined ? 'white' : newColor } );
		}

		return (
			<Fragment>
				<div style={ { height: height } } />
				<InspectorControls>
					<PanelBody title={ __('KTF2021 Settings') }>
						<ColorPalette
							value={ color }
							colors={ colors }
							onChange={ onChangeColor }
							label={ __( 'Hintergrundfarbe' ) }
						/>
					</PanelBody>
					<PanelBody title={ __('Spacer Settings') }>
						<BaseControl label={ __( 'Höhe in Pixels' ) }>
							<input
								type="number"
								onChange={ ( event ) => {
									props.setAttributes( {
										height: parseInt( event.target.value, 10 ),
									} );
								} }
								value={ height }
								min="20"
								step="10"
							/>
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
	save: function( props ) {
		return (
			<div className={`ktf2021-container-${ props.attributes.color }`}>
				<div style={ {height: props.attributes.height }} />
			</div>
		);
	},
} );
