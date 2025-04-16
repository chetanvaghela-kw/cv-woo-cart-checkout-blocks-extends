<?php
/**
 * Checking class_exists or not.
 *
 * @package Cv_Woo_Cart_Checkout_Blocks_Extends
 * @subpackage WordPress
 */

if ( ! class_exists( 'Cv_Woo_Cart_Checkout_Blocks_Extends' ) ) {
	/**
	 * Declare Image-with-lightbox block for gutenberg class.
	 */
	class Cv_Woo_Cart_Checkout_Blocks_Extends {
		/**
		 * Calling class construct.
		 */
		/**
		 * Calling class construct.
		 */
		public function __construct() {
			add_action( 'init', array( $this, 'cv_woo_cart_checkout_blocks_extends_register' ) );
		}

		/**
		 * Image-with-lightbox block for gutenber register block and script.
		 */
		public function cv_woo_cart_checkout_blocks_extends_register() {

			// Register style.
			wp_register_style( 'cv-woo-cart-checkout-blocks-extends', plugin_dir_url( __FILE__ ) . '../assets/css/cv-woo-cart-checkout-blocks-extends.css', array(), true );

			// Register block.
			$build_dir = CV_WOO_CART_CHECKOUT_BLOCKS_EXTENDS_DIR . 'build';

			if ( is_dir( $build_dir ) ) {
				$blocks = scandir( $build_dir );
		
				if ( false !== $blocks ) {
					foreach ( $blocks as $block ) {
						$block_location = $build_dir . '/' . $block;
		
						if ( is_dir( $block_location ) && ! in_array( $block, array( '.', '..' ), true ) ) {
							register_block_type( $block_location );
						}
					}
				}
			}
		}
	}
}
