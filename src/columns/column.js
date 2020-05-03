/**
 * WordPress dependencies
 */
const { Path, SVG } = wp.components;
const { __ } = wp.i18n;
const { InnerBlocks } = wp.editor;

const { registerBlockType } = wp.blocks;

const name = 'ktf2021/ktf2021-column'

const ALLOWED_BLOCKS = [ 'core/heading', 'core/paragraph', 'core/image', 'core/video', 'core/html', 'core-embed/youtube', 'core-embed/flickr', 'core-embed/twitter', 'core-embed/facebook', 'core-embed/instagram', 'core-embed/vimeo', 'core-embed/soundcloud', 'core-embed/spotify', 'core/shortcode' ];

const settings = {
	title: __( 'KTF2021 Spalte' ),

	parent: [ 'ktf2021/ktf2021-columns' ],

	icon: <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><Path fill="none" d="M0 0h24v24H0V0z" /><Path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z" /></SVG>,

	description: __( 'A single column within a columns block.' ),

	category: 'ktf2021-blocks',

	supports: {
		inserter: false,
		reusable: false,
		html: false,
	},

	edit() {
		return <InnerBlocks templateLock={ false } allowedBlocks={ ALLOWED_BLOCKS } />;
	},

	save() {
		return <div className="flex-fill m-2 w-100"><InnerBlocks.Content /></div>;
	},
};

registerBlockType(name, settings);
