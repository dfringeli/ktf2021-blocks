/*
    KTF2021 Banner
*/

( function( blocks, editor, i18n, element ) {
	var el = element.createElement;
	var __ = i18n.__;
    var RichText = editor.RichText;
    var AlignmentToolbar = editor.AlignmentToolbar;
    var BlockControls = editor.BlockControls;
    var InspectorControls = editor.InspectorControls;
    var ColorPalette = editor.ColorPalette;

	i18n.setLocaleData( window.ktf2021_blocks.localeData, 'ktf2021-blocks' );

	blocks.registerBlockType( 'ktf2021-blocks/ktf2021-banner', {
		title: __( 'KTF2021 Banner', 'ktf2021-blocks' ),
		icon: 'editor-quote',
		category: 'layout',

		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: 'p',
            },
            alignment: {
				type: 'string',
				default: 'none',
			},
            color: {
                type: 'string',
                default: 'white'
            }
		},

		edit: function( props ) {
            var content = props.attributes.content;
            var alignment = props.attributes.alignment;
            var color = props.attributes.color;

            const colors = [ 
                { name: 'white', color: 'white' },
                { name: 'black', color: 'black' },
                { name: 'green', color: 'green' },
                { name: 'blue', color: 'blue' },
            ];

			function onChangeContent( newContent ) {
				props.setAttributes( { content: newContent } );
            }

            function onChangeAlignment( newAlignment ) {
				props.setAttributes( { alignment: newAlignment === undefined ? 'none' : newAlignment } );
            }

            function onChangeColor( newColor ) {
				props.setAttributes( { color: newColor === undefined ? 'white' : newColor } );
			}

			return [
				el(
					BlockControls,
					{ key: 'controls' },
					el(
						AlignmentToolbar,
						{
							value: alignment,
							onChange: onChangeAlignment,
						}
					)
                ),
                el(InspectorControls,
                    null,
                    [
                        el(ColorPalette,
                            {
                                value: color,
                                colors: colors,
                                onChange: onChangeColor
                            })
                    ]),
                el(
                    RichText,
                    {
                        key: 'richtext',
                        tagName: 'p',
                        style: { textAlign: alignment },
                        className: props.className,
                        onChange: onChangeContent,
                        value: content,
                    }
                ),
			];
		},

		save: function( props ) {
            return el( 'div', { className: 'ktf2021-container-' + props.attributes.color },
                        el('div', { className: 'ktf2021-content ktf2021-reveal' },
                            el( RichText.Content,
                                {
                                    tagName: 'p',
                                    className: 'under-title ktf2021-blocks-align-' + props.attributes.alignment,
                                    value: props.attributes.content,
                                }
                            )
                        )
            )
		},
	} );
}(
	window.wp.blocks,
	window.wp.editor,
	window.wp.i18n,
	window.wp.element
) );