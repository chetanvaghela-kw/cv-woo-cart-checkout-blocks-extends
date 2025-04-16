<?php
/**
 * Plugin Name: CV Woo Cart Checkout Blocks Extends
 * Plugin URI : https://wordpress.org/plugins/cv-woo-cart-checkout-blocks-extends/
 * Description: Extends WooCommerce blocks by adding a custom notice on the cart page and an extra field on the checkout page.
 * Author: Chetan Vaghela
 * Author URI: http://profiles.wordpress.org/thechetanvaghela
 * Text Domain: cv-woo-cart-checkout-blocks-extends
 * Version: 1.0
 * License: GPLv3 or later
 * License URI: https://www.gnu.org/licenses/gpl-3.0.html
 *
 * @package Cv_Woo_Cart_Checkout_Blocks_Extends
 */

// error_reporting(E_ALL);
// ini_set('display_errors', 1);

// define plugin dir path.
define( 'CV_WOO_CART_CHECKOUT_BLOCKS_EXTENDS_DIR', plugin_dir_path( __FILE__ ) );

// Include class file.
require_once plugin_dir_path( __FILE__ ) . '/includes/class-cv-woo-cart-checkout-blocks-extends.php';

/**
 * Register activation.
 */
function gutenberg_cv_woo_cart_checkout_blocks_extends_activation() {
	// Activation code.
}
register_activation_hook( __FILE__, 'gutenberg_cv_woo_cart_checkout_blocks_extends_activation' );

/**
 * Register deactivation.
 */
function gutenberg_cv_woo_cart_checkout_blocks_extends_deactivation() {
	// Deactivation code.
}
register_deactivation_hook( __FILE__, 'gutenberg_cv_woo_cart_checkout_blocks_extends_deactivation' );

/**
 * Plugin init.
 */
function gutenberg_cv_woo_cart_checkout_blocks_extends_init() {
	new Cv_Woo_Cart_Checkout_Blocks_Extends();
}
add_action( 'plugins_loaded', 'gutenberg_cv_woo_cart_checkout_blocks_extends_init' );
