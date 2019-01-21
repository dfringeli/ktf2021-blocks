/**
 * ktf2021-blocks: Columns
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

import { times } from 'lodash';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	InspectorControls,
	ColorPalette,
	PlainText,
	InnerBlocks } = wp.editor;
const {
	PanelBody,
	ToggleControl,
	RangeControl,
	SelectControl } = wp.components;
const { Fragment } = wp.element;

const ALLOWED_BLOCKS = [ 'ktf2021/ktf2021-column' ];

/**
 * Returns the layouts configuration for a given number of columns.
 *
 * @param {number} columns Number of columns.
 *
 * @return {Object[]} Columns layout configuration.
 */
const getColumnsTemplate = ( columns ) => {
	return times( columns, () => [ 'ktf2021/ktf2021-column' ] );
};

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
registerBlockType( 'ktf2021/ktf2021-columns', {
	title: __( 'KTF2021 Spalten' ),
	icon: 'editor-table',
	category: 'ktf2021-blocks',
	keywords: [
		__( 'ktf2021' ),
		__( 'Spalten' ),
		__( 'colum' ),
	],

	attributes: {
		color: {
			type: 'string',
			default: 'white'
		},
		fadeIn: {
			type: 'boolean',
			default: true
		},
		columns: {
			type: 'number',
			default: 2
		},
		verticalAlignment: {
			type: 'string',
			default: 'center'
		},
		title: {
			type: 'string',
			default: ''
		},
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
			columns,
			color,
			fadeIn,
			verticalAlignment,
			title
		}, className } = props;

		const colors = [
			{ name: 'Weiss', color: 'white' },
			{ name: 'Schwarz', color: 'black' },
			{ name: 'Grün', color: 'green' },
			{ name: 'Blau', color: 'blue' },
		];

		function onChangeColumns( newColumns ) {
			props.setAttributes( { columns: newColumns === undefined ? 2 : newColumns } );
		}

		function onChangeColor( newColor ) {
			props.setAttributes( { color: newColor === undefined ? 'white' : newColor } );
		}

		function onChangeFadeIn( newFadeIn ) {
			props.setAttributes( { fadeIn: newFadeIn === undefined ? true : newFadeIn } );
		}

		function onChangeVerticalAlignment( newVerticalAlignment ) {
			props.setAttributes( {verticalAlignment: newVerticalAlignment === undefined ? 'center' : newVerticalAlignment} );
		}

		function onChangeTitle( newTitle ) {
			props.setAttributes( { title: newTitle === undefined ? '' : newTitle } );
		}

		return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={ __('KTF2021 Settings') }>
					<ColorPalette
						value={ color }
						colors={ colors }
						onChange={ onChangeColor }
						label={ __( 'Hintergrundfarbe' ) }
					/>
					<ToggleControl
						checked={ fadeIn }
						onChange={ onChangeFadeIn }
						label={ "fade in effect" }
					/>
				</PanelBody>
				<PanelBody title={ __('Spalten Settings') }>
					<RangeControl
							label={ __( 'Spalten' ) }
							value={ columns }
							onChange={ onChangeColumns }
							min={ 1 }
							max={ 3 }
					/>
					<SelectControl
						label="Vertikale Ausrichtung"
						value={ verticalAlignment }
						options={ [
							{ label: 'Oben', value: 'start' },
							{ label: 'Mitte', value: 'center' },
							{ label: 'Unten', value: 'end' },
						] }
						onChange={ onChangeVerticalAlignment }
					/>
				</PanelBody>
			</InspectorControls>
			<div className={className}>
				<PlainText
					tagName={ 'h2' }
					value={ title }
					onChange={ onChangeTitle }
					placeholder={ "Titel..." }
				/>
				<div className={`ktf2021-container-${ props.attributes.color }`}>
					<div class="d-flex flex-wrap align-items-">
						<InnerBlocks
								template={ getColumnsTemplate( columns ) }
								templateLock="all"
								allowedBlocks={ ALLOWED_BLOCKS } ></InnerBlocks>
					</div>
				</div>
			</div>
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

		var titleHtml;
		if (props.attributes.title != '') {
			titleHtml = (
				<div class="d-flex justify-content-center">
					<h2 class="text-center">{props.attributes.title}</h2>
				</div>
			);
		}

		return (
			<div className={props.className}>
				<div className={`ktf2021-container-${ props.attributes.color }`}>
					<div className={`ktf2021-content ${props.attributes.fadeIn ? ' ktf2021-reveal' : ''}`}>
						{titleHtml}
						<div class={`d-flex flex-wrap align-items-${ props.attributes.verticalAlignment } flex-lg-nowrap`}>
							<InnerBlocks.Content />
						</div>
					</div>
				</div>
			</div>
		);
	},
} );
