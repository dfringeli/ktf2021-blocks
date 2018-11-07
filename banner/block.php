<?php

defined( 'ABSPATH' ) || exit;

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function ktf2021_banner_register_block() {
	if ( ! function_exists( 'register_block_type' ) ) {
		// Gutenberg is not active.
		return;
	}
	wp_register_script(
		'ktf2021-banner',
		plugins_url( 'block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'block.js' )
	);
	wp_register_style(
		'ktf2021-banner-editor',
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);
	wp_register_style(
		'ktf2021-banner',
		plugins_url( 'style.css', __FILE__ ),
		array( ),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);
	register_block_type( 'ktf2021-blocks/ktf2021-blocks', array(
		'style' => 'ktf2021-banner',
		'editor_style' => 'ktf2021-banner-editor',
		'editor_script' => 'ktf2021-banner',
	) );
	/*
	 * Pass already loaded translations to our JavaScript.
	 *
	 * This happens _before_ our JavaScript runs, afterwards it's too late.
	 */
	wp_add_inline_script(
		'ktf2021-banner',
		sprintf(
			'var ktf2021_blocks = { localeData: %s };',
			json_encode( ! function_exists( 'wp_get_jed_locale_data' ) ? gutenberg_get_jed_locale_data( 'ktf2021-blocks' ) : wp_get_jed_locale_data( 'ktf2021-blocks' ) )
		),
		'before'
	);
}
add_action( 'init', 'ktf2021_banner_register_block' );