/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { __ } from "@wordpress/i18n";
import {
    useBlockProps,
    InspectorControls,
    MediaUpload,
} from "@wordpress/block-editor";
import { Panel, PanelRow, PanelBody, Button, TextControl } from "@wordpress/components";

import "./editor.scss";

export default function Edit({ attributes, setAttributes, clientId }) {
    setAttributes({ blockId: clientId });

    return (
        <div>
        <InspectorControls>
            <PanelBody title={ __( 'Cart Notice Settings', 'cv-woo-cart-checkout-blocks-extends' ) }>
               <TextControl
                    label={ __( 'Notice Text', 'cv-woo-cart-checkout-blocks-extends' ) }
                    value={ attributes.noticeText }
                    onChange={ ( noticeText ) => setAttributes( { noticeText } ) }
                />
            </PanelBody>
        </InspectorControls>

        <p>{attributes.noticeText}</p>
        </div>
    );
}