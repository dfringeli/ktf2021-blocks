/**
 * BLOCK: KTF2021 Posts
 */

// Import block dependencies and components
import edit from './edit';

// Import CSS
import './style.scss';
import './editor.scss';

// Components
const { __ } = wp.i18n;

// Extend component
const { Component } = wp.element;

// Register block controls
const {
	registerBlockType,
} = wp.blocks;

// Register alignments
const validAlignments = [ 'center', 'wide' ];

export const name = 'core/latest-posts';

// Register the block
registerBlockType( 'ktf2021/ktf2021-posts', {
	title: __( 'KTF2021 Beiträge'),
	description: __( 'KTF 2021 Beiträge'),
	icon: 'grid-view',
	category: 'ktf2021-blocks',
	keywords: [
		__( 'post'),
	],

	getEditWrapperProps( attributes ) {
		const { align } = attributes;
		if ( -1 !== validAlignments.indexOf( align ) ) {
			return { 'data-align': align };
		}
	},

	edit,

	// Render via PHP
	save() {
		return null;
	},
} );
