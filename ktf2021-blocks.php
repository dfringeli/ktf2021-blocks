<?php
/*
Plugin Name: ktf2021 Blocks
*/
defined( 'ABSPATH' ) || exit;
/**
 * Load all translations for our plugin from the MO file.
*/
add_action( 'init', 'ktf2021_blocks_load_textdomain' );
function ktf2021_blocks_load_textdomain() {
	load_plugin_textdomain( 'ktf2021-blocks', false, basename( __DIR__ ) . '/languages' );
}

include 'banner/block.php';
include 'text/block.php';