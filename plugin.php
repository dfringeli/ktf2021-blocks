<?php
/**
 * Plugin Name: ktf2021-blocks
 * Description: ktf2021-blocks — is a Gutenberg plugin.
 * Author: dfringeli
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package ktf2021
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
 function ktf201_blocks_loader() {
	require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
	require_once plugin_dir_path( __FILE__ ) . 'src/posts/block.php';
}
add_action( 'plugins_loaded', 'ktf201_blocks_loader' );
