/*
    KTF2021 Text
*/

( function( blocks, editor, i18n, element ) {
	var el = element.createElement;
	var __ = i18n.__;
    var RichText = editor.RichText;
    var AlignmentToolbar = editor.AlignmentToolbar;
    var BlockControls = editor.BlockControls;
    var InspectorControls = editor.InspectorControls;
    var ColorPalette = editor.ColorPalette;
    var ToggleControl = wp.components.ToggleControl;

	i18n.setLocaleData( window.ktf2021_blocks.localeData, 'ktf2021-blocks' );

	blocks.registerBlockType( 'ktf2021-blocks/ktf2021-text', {
		title: __( 'KTF2021 Text', 'ktf2021-blocks' ),
		icon: 'editor-paragraph',
		category: 'layout',

		attributes: {
			title: {
				type: 'array',
				source: 'children',
				selector: 'h2',
            },
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
            },
            fadeIn: {
                type: 'boolean',
                default: true
            }
		},

		edit: function( props ) {
            var title = props.attributes.title;
            var content = props.attributes.content;
            var alignment = props.attributes.alignment;
            var color = props.attributes.color;
            var fadeIn = props.attributes.fadeIn;

            const colors = [ 
                { name: 'Weiss', color: 'white' },
                { name: 'Schwarz', color: 'black' },
                { name: 'Grün', color: 'green' },
                { name: 'Blau', color: 'blue' },
            ];

            function onChangeTitle( newTitle ) {
				props.setAttributes( { title: newTitle === undefined ? '' : newTitle } );
			}

			function onChangeContent( newContent ) {
				props.setAttributes( { content: newContent === undefined ? '' : newContent } );
            }

            function onChangeAlignment( newAlignment ) {
				props.setAttributes( { alignment: newAlignment === undefined ? 'none' : newAlignment } );
            }

            function onChangeColor( newColor ) {
				props.setAttributes( { color: newColor === undefined ? 'white' : newColor } );
			}

            function onChangeFadeIn( newFadeIn ) {
				props.setAttributes( { fadeIn: newFadeIn === undefined ? true : newFadeIn } );
			}

			return [
                el(
                    RichText,
                    {
                        key: 'richtext',
                        tagName: 'h2',
                        style: { textAlign: 'center' },
                        className: props.className,
                        onChange: onChangeTitle,
                        value: title,
                        placeholder: 'Titel...'
                    }
                ),
                el(
                    RichText,
                    {
                        key: 'richtext',
                        tagName: 'p',
                        style: { textAlign: alignment },
                        className: props.className,
                        onChange: onChangeContent,
                        value: content,
                        placeholder: "Text..."
                    }
                ),
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
                            }),
                        el(ToggleControl,
                            {
                                checked: fadeIn,
                                onChange: onChangeFadeIn,
                                label: 'fade in effect'
                            })
                    ]),
			];
		},

		save: function( props ) {
            return el( 'div', { className: 'ktf2021-container-' + props.attributes.color },
                        el('div', { className: props.attributes.fadeIn ? 'ktf2021-content ktf2021-reveal' : 'ktf2021-content' },
                            [
                                el( RichText.Content,
                                    {
                                        tagName: 'h2',
                                        className: 'ktf2021-text-title text-center',
                                        value: props.attributes.title,
                                    }
                                ),
                                el( RichText.Content,
                                    {
                                        tagName: 'p',
                                        className: 'ktf2021-text ktf2021-blocks-align-' + props.attributes.alignment,
                                        value: props.attributes.content,
                                    }
                                )
                            ]
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