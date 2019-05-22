/**
 * ktf2021-blocks: Collapse
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls, RichText, ColorPalette } = wp.editor;
const {
	PanelBody,
	BaseControl,
	TextControl
} = wp.components;

const { Fragment } = wp.element;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   Collapse   Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType('ktf2021/ktf2021-collapse', {
	title: __('KTF 2021 Collapse'),
	icon: 'welcome-widgets-menus',
	category: 'ktf2021-blocks',
	keywords: [
		__('collapse'),
		__('accordion'),
		__('click'),
	],
	supports: {
		multiple: false
	},

	attributes: {
		title: {
			type: 'string',
			default: ''
		},
		buttonColor: {
			type: 'string',
			default: 'green'
		},
		content: {
			source: "query",
			default: [],
			selector: "div.ktf2021-collapse-content-desktop",
			query: {
				index: {
					source: "attribute",
					selector: "h3.ktf2021-collapse-title-desktop",
					attribute: "data-index"
				},
				title: {
					type: "string",
					source: "text",
					selector: "h3.ktf2021-collapse-title-desktop",
				},
				text: {
					type: "string",
					source: "text",
					selector: "p.ktf2021-collapse-text-desktop",
				}
			}
		}
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function (props) {
		const { attributes: { title, buttonColor, content }, setAttributes, className } = props;

		const colors = [
			{ name: 'Schwarz', color: 'black' },
			{ name: 'Grün', color: 'green' },
			{ name: 'Blau', color: 'blue' },
		];

		if (content.length == 0) {
			setAttributes({
				content: [
					{
						index: 0
					},
					{
						index: 1
					},
					{
						index: 2
					}
				]
			});
		}

		const editorContentRendered = content
			.sort((i1, i2) => i1.index - i2.index)
			.map(c => {
				return (
					<div className={'collapse-content'} key={c.index}>
						<span className="collapse-index" style={{ display: 'none' }}>
							{c.index}
						</span>
						<div className={"d-flex justify-content-between"}>
							<div className={'collapse-title flex-grow-1'}>
								<RichText
									tagName="h3"
									value={c.title}
									placeholder={"Titel"}
									key={c.index}
									onChange={(value) => {
										const newContent = Object.assign({}, c, {
											title: value
										});
										setAttributes({
											content: [
												...content.filter(
													item => item.index != c.index
												),
												newContent
											]
										});
									}
									}
								/>
							</div>
							<div className={'collapse-remove'}>
								<button
									className={'btn btn-outline-danger'}
									key={c.index}
									onClick={() => {
										const newContent = content
											.filter(item => item.index != c.index)
											.map(i => {
												if (i.index > c.index) {
													i.index -= 1;
												}
												return i;
											});

										setAttributes({
											content: newContent
										});
									}}
								>Entfernen</button>
							</div>
						</div>
						<div className={'collapse-text'}>
							<RichText
								tagName="p"
								value={c.text}
								placeholder={"Inhalt"}
								key={c.index}
								onChange={(value) => {
									const newContent = Object.assign({}, c, {
										text: value
									});
									setAttributes({
										content: [
											...content.filter(
												item => item.index != c.index
											),
											newContent
										]
									});
								}
								}
							/>
						</div>
					</div>
				);
			});

		return (
			<Fragment>
				<div className={className + " ktf2021-container-white"}>
					<RichText
						className={'text-center'}
						tagName="h2"
						value={title}
						placeholder={"Titel"}
						onChange={(value) => setAttributes({ title: value })}
					/>
					{editorContentRendered}
					<button
						className="btn btn-primary"
						onClick={click => {
							setAttributes({
								content: [
									...content,
									{
										index: content.length
									}
								]
							});
						}
						}
					>Hinzufügen</button>
				</div>
				<InspectorControls>
					<PanelBody title={__('Button Colors')}>
						<ColorPalette
							value={buttonColor}
							colors={colors}
							onChange={(value) => setAttributes({ buttonColor: value })} />
					</PanelBody>
					<PanelBody>
						<BaseControl>
							<b>Info</b>
							<p>Die Farbe der Buttons kann ausgewählt werden - Die Farbe des Hintergrunds nicht, die ist immer weiss</p>
							<p>Die Buttons sind hier im Bearbeitungsmodus nicht dargestellt.</p>
							<p>Verwende diesen Collapse-Block bitte nur mit minimum 3 Inhalten</p>
							<p>Auf dem PC ist der Inhalt rechts von den Buttons - auf dem Smartphone ist der Inhalt direkt unter dem Button</p>
						</BaseControl>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function (props) {
		const { attributes: { title, buttonColor, content } } = props;

		if (content.length > 0) {

			const desktopButtons = content
				.map(c => {
					return (
						<div className={"m-2"} key={c.index}>
							<button className={"ktf2021-button " + buttonColor} type="button" data-toggle="collapse" data-target={"#ktf2021-content-desktop-" + c.index} aria-expanded={c.index == 0} aria-controls={"#ktf2021-content-desktop-" + c.index}>
								<RichText.Content className={"m-0"} tagName="h3" value={c.title} />
							</button>
						</div>
					);
				});

			const desktopContent = content
				.map(c => {
					const showRendered = c.index == 0 ? ' show' : '';
					return (
						<div className={"collapse" + showRendered} key={c.index} id={"ktf2021-content-desktop-" + c.index} data-parent="#ktf2021-collapse-desktop">
							<div className={'ktf2021-collapse-content-desktop border'}>
								<RichText.Content className={"ktf2021-collapse-title-desktop"} tagName="h3" value={c.title} data-index={c.index} />
								<RichText.Content className={"ktf2021-collapse-text-desktop"} tagName="p" value={c.text} />
							</div>
						</div>
					);
				});

			const mobileContent = content
				.map(c => {
					const showRendered = c.index == 0 ? ' show' : '';
					return (
						<div className={"m-2"} key={c.index}>
							<button className={"ktf2021-button btn-block " + buttonColor} type="button" data-toggle="collapse" data-target={"#ktf2021-content-mobile-" + c.index} aria-expanded={c.index == 0} aria-controls={"#ktf2021-content-mobile-" + c.index}>
								<RichText.Content className={"m-0"} tagName="h3" value={c.title} />
							</button>
							<div className={"collapse" + showRendered} id={"ktf2021-content-mobile-" + c.index} data-parent="#ktf2021-collapse-mobile">
								<div className={'ktf2021-collapse-content-mobile border border-top-0'}>
									<RichText.Content className={"ktf2021-collapse-text-mobile"} tagName="p" value={c.text} />
								</div>
							</div>
						</div>
					);
				});

			const titleRender = title != '' ? <RichText.Content className="text-center" tagName="h2" value={title} /> : null;

			return (
				<div className={"ktf2021-container-white"}>
					<div className={"ktf2021-content ktf2021-reveal"}>
						{titleRender}
						<div className={"d-none d-lg-block"}>
							<div className={"accordion d-flex"} id={"ktf2021-collapse-desktop"}>
								<div className={"d-flex flex-column justify-content-between align-items-stretch"}>
									{desktopButtons}
								</div>
								<div className={"flex-fill"}>
									{desktopContent}
								</div>
							</div>
						</div>
						<div className={"d-block d-lg-none"}>
							<div className={"accordion"} id={"ktf2021-collapse-mobile"}>
								{mobileContent}
							</div>
						</div>
					</div>
				</div>
			);
		}
		else {
			return null;
		}
	}
});
