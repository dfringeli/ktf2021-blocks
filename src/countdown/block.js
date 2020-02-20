/**
 * ktf2021-blocks: Count Down
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import './countdown.js';

import classnames from 'classnames';
import ScriptTag from 'react-script-tag';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls, RichText, ColorPalette } = wp.editor;
const {
	PanelBody,
	BaseControl,
	DateTimePicker,
	ToggleControl,
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
 * @param  {string}   Count Down   Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType('ktf2021/ktf2021-countdown', {
	title: __('KTF 2021 Count Down'),
	icon: 'clock',
	category: 'ktf2021-blocks',
	keywords: [
		__('count down'),
		__('tage'),
	],
	supports: {
		multiple: false
	},

	attributes: {
		title: {
			type: 'string',
			default: 'Es goht nume noh..'
		},
		targetDate: {
			type: 'string',
			default: '2021-06-18T14:00:00'
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

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function (props) {
		const { attributes: { title, targetDate, color, fadeIn }, setAttributes, className } = props;

		const colors = [
			{ name: 'Weiss', color: 'white' },
			{ name: 'Schwarz', color: 'black' },
			{ name: 'Grün', color: 'green' },
			{ name: 'Blau', color: 'blue' },
		];

		function onChangeColor(newColor) {
			setAttributes({ color: newColor === undefined ? 'white' : newColor });
		}

		function onChangeFadeIn(newFadeIn) {
			setAttributes({ fadeIn: newFadeIn === undefined ? true : newFadeIn });
		}

		// Get today's date and time
		var now = new Date().getTime();
		var countDownDate = new Date(targetDate).getTime();

		// Find the distance between now and the count down date
		var distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Set the date we're counting down to
		if (countDownDate - new Date().getTime() < 0) {
			days = 0;
			hours = 0;
			minutes = 0;
			seconds = 0;
		}

		return (
			<Fragment>
				<div className={className + " ktf2021-container-" + color}>
					<RichText
						className={'text-center'}
						tagName="h2"
						value={title}
						placeholder={"Titel"}
						onChange={(value) => setAttributes({ title: value })}
					/>
					<div id="ktf2021-countdown" className={classnames('d-flex', 'justify-content-center')} data-datetime={targetDate}>
						<div className={classnames('d-flex', 'flex-column', 'p-2')}>
							<h2 className={classnames('ktf2021-countdown-days', 'text-center', 'm-0', 'ktf2021-countdown-fontsize')}>{days}</h2>
							<span className={classnames('text-center')}>Täg</span>
						</div>
						<h2 className={classnames('m-0', 'pt-1', 'ktf2021-countdown-fontsize')}>:</h2>
						<div className={classnames('d-flex flex-column p-2')}>
							<h2 className={classnames('ktf2021-countdown-hours', 'text-center', 'm-0', 'ktf2021-countdown-fontsize')}>{hours}</h2>
							<span className={classnames('text-center')}>Stundä</span>
						</div>
						<h2 className={classnames('m-0', 'pt-1', 'ktf2021-countdown-fontsize')}>:</h2>
						<div className={classnames('d-flex flex-column p-2')}>
							<h2 className={classnames('ktf2021-countdown-minutes', 'text-center', 'm-0', 'ktf2021-countdown-fontsize')}>{minutes}</h2>
							<span className={classnames('text-center')}>Minutä</span>
						</div>
						<h2 className={classnames('m-0', 'pt-1', 'ktf2021-countdown-fontsize')}>:</h2>
						<div className={classnames('d-flex flex-column p-2')}>
							<h2 className={classnames('ktf2021-countdown-seconds', 'text-center', 'm-0', 'ktf2021-countdown-fontsize')}>{seconds}</h2>
							<span className={classnames('text-center')}>Sekundä</span>
						</div>
					</div>
				</div>
				<InspectorControls>
					<PanelBody>
						<h4>Datum und Zeit</h4>
						<DateTimePicker
							currentDate={targetDate}
							onChange={(value) => setAttributes({ targetDate: value })} />
						<hr style={{ marginTop: '2.5em' }} />
						<h4>Farbe</h4>
						<ColorPalette
							value={color}
							colors={colors}
							onChange={onChangeColor} />
						<hr style={{ marginTop: '2.5em' }} />
						<ToggleControl
							checked={fadeIn}
							onChange={onChangeFadeIn}
							label={"fade in effect"} />
						<BaseControl>
							<b>Info</b>
							<p>Der Count Down zählt live die verbleibende Zeit bis zum KTF21.</p>
							<p>Das angezeigte Format ist: Tage, Stunden, Minuten, Sekunden.</p>
							<p>Ist der Count Down abgelaufen, so wird das Bild unterhalb des Count Downs angezeigt.</p>
							<p>Hier im Bearbeitungsmodus ändert der Count Down sporadisch, wenn man am Block eine Änderung vornimmt. Auf der richtigen Website ändert der Count Down jede Sekunde, wie erwartet.</p>
							<p>Der Titel ist optional und ist standardmässig "Es goht nume noh.."</p>
							<p>Hier im Bearbeitungsmodus wird das Bild immer angezeigt. Auf der richtigen Website erst, wenn der Count Down abgelaufen ist.</p>
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
		const { attributes: { title, targetDate, color, fadeIn }, className } = props;

		const titleRender = title != '' ? <RichText.Content className="text-center" tagName="h2" value={title} /> : null;

		return (
			<div className={classnames('ktf2021-container-' + color)}>
				<div className={classnames('ktf2021-content', fadeIn ? ' ktf2021-reveal' : '')}>
					{titleRender}
					<div id="ktf2021-countdown" className={classnames('d-none', 'justify-content-center')} data-datetime={targetDate}>
						<div className={classnames('d-flex', 'flex-column', 'p-2')}>
							<h2 className={classnames('ktf2021-countdown-days', 'text-center', 'm-0', 'ktf2021-countdown-fontsize')}></h2>
							<span className={classnames('text-center')}>Täg</span>
						</div>
						<h2 className={classnames('m-0', 'pt-1', 'ktf2021-countdown-fontsize')}>:</h2>
						<div className={classnames('d-flex flex-column p-2')}>
							<h2 className={classnames('ktf2021-countdown-hours', 'text-center', 'm-0', 'ktf2021-countdown-fontsize')}></h2>
							<span className={classnames('text-center')}>Stundä</span>
						</div>
						<h2 className={classnames('m-0', 'pt-1', 'ktf2021-countdown-fontsize')}>:</h2>
						<div className={classnames('d-flex flex-column p-2')}>
							<h2 className={classnames('ktf2021-countdown-minutes', 'text-center', 'm-0', 'ktf2021-countdown-fontsize')}></h2>
							<span className={classnames('text-center')}>Minutä</span>
						</div>
						<h2 className={classnames('m-0', 'pt-1', 'ktf2021-countdown-fontsize')}>:</h2>
						<div className={classnames('d-flex flex-column p-2')}>
							<h2 className={classnames('ktf2021-countdown-seconds', 'text-center', 'm-0', 'ktf2021-countdown-fontsize')}></h2>
							<span className={classnames('text-center')}>Sekundä</span>
						</div>
					</div>
					<ScriptTag type="text/javascript" src="./wp-content/plugins/ktf2021-blocks/src/countdown/countdown.js" />
				</div>
			</div >
		);
	}
});
