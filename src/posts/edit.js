/**
 * External dependencies
 */

import isUndefined from 'lodash/isUndefined';
import pickBy from 'lodash/pickBy';
import moment from 'moment';
import classnames from 'classnames';

const { Component, Fragment } = wp.element;

const { __ } = wp.i18n;

const { decodeEntities } = wp.htmlEntities;

const { withSelect } = wp.data;

const {
	BaseControl,
	PanelBody,
	Placeholder,
	QueryControls,
	Spinner,
	TextControl,
	ToggleControl,
} = wp.components;

const {
	InspectorControls,
	ColorPalette,
	RichText
} = wp.editor;

class LatestPostsBlock extends Component {
	constructor() {
		super(...arguments);

		this.toggleDisplayPostDate = this.toggleDisplayPostDate.bind(this);
		this.toggleDisplayPostExcerpt = this.toggleDisplayPostExcerpt.bind(this);
		this.toggleDisplayPostAuthor = this.toggleDisplayPostAuthor.bind(this);
		this.toggleDisplayPostImage = this.toggleDisplayPostImage.bind(this);
		this.toggleDisplayPostLink = this.toggleDisplayPostLink.bind(this);
		this.toggleDisplayNewsArchiveButton = this.toggleDisplayNewsArchiveButton.bind(this);
	}

	toggleDisplayPostDate() {
		const { displayPostDate } = this.props.attributes;
		const { setAttributes } = this.props;

		setAttributes({ displayPostDate: !displayPostDate });
	}

	toggleDisplayPostExcerpt() {
		const { displayPostExcerpt } = this.props.attributes;
		const { setAttributes } = this.props;

		setAttributes({ displayPostExcerpt: !displayPostExcerpt });
	}

	toggleDisplayPostAuthor() {
		const { displayPostAuthor } = this.props.attributes;
		const { setAttributes } = this.props;

		setAttributes({ displayPostAuthor: !displayPostAuthor });
	}

	toggleDisplayPostImage() {
		const { displayPostImage } = this.props.attributes;
		const { setAttributes } = this.props;

		setAttributes({ displayPostImage: !displayPostImage });
	}

	toggleDisplayPostLink() {
		const { displayPostLink } = this.props.attributes;
		const { setAttributes } = this.props;

		setAttributes({ displayPostLink: !displayPostLink });
	}

	toggleDisplayNewsArchiveButton() {
		const { displayNewsArchiveButton } = this.props.attributes;
		const { setAttributes } = this.props;

		setAttributes({ displayNewsArchiveButton: !displayNewsArchiveButton });
	}

	customizeReadMoreText() {
		const { readMoreText } = this.props.attributes;
		const { setAttributes } = this.props;

		setAttributes({ readMoreText: !readMoreText });
	}

	render() {
		const { attributes, setAttributes, latestPosts } = this.props;
		const { title, color, fadeIn, displayPostDate, displayPostExcerpt, displayPostAuthor, displayPostImage, displayPostLink, order, orderBy, postsToShow, readMoreText, displayNewsArchiveButton, newsArchiveButtonText } = attributes;

		const colors = [
			{ name: 'Schwarz', color: 'black' },
			{ name: 'Grün', color: 'green' },
			{ name: 'Blau', color: 'blue' },
		];

		const inspectorControls = (
			<InspectorControls>
				<PanelBody title={__('KTF2021 Settings')}>
					<ColorPalette
						value={color}
						colors={colors}
						onChange={(value) => setAttributes({ color: value })}
						label={__('Hintergrundfarbe')}
					/>
					<ToggleControl
						checked={fadeIn}
						onChange={(value) => setAttributes({ fadeIn: value })}
						label={"fade in effect"}
					/>
				</PanelBody>
				<PanelBody title={__('Posts Settings')}>
					<ToggleControl
						label={__('Display Featured Image')}
						checked={displayPostImage}
						onChange={this.toggleDisplayPostImage}
					/>
					<ToggleControl
						label={__('Display Post Author')}
						checked={displayPostAuthor}
						onChange={this.toggleDisplayPostAuthor}
					/>
					<ToggleControl
						label={__('Display Post Date')}
						checked={displayPostDate}
						onChange={this.toggleDisplayPostDate}
					/>
					<ToggleControl
						label={__('Display Post Excerpt')}
						checked={displayPostExcerpt}
						onChange={this.toggleDisplayPostExcerpt}
					/>
					<ToggleControl
						label={__('Display Continue Reading Link')}
						checked={displayPostLink}
						onChange={this.toggleDisplayPostLink}
					/>
					{displayPostLink &&
						<TextControl
							label={__('Customize Read More Link')}
							type="text"
							value={readMoreText}
							onChange={(value) => setAttributes({ readMoreText: value })}
						/>
					}
					<ToggleControl
						label={__('Display News Archiv Button')}
						checked={displayNewsArchiveButton}
						onChange={this.toggleDisplayNewsArchiveButton}
					/>
					{displayNewsArchiveButton &&
						<TextControl
							label={__('Customize Text of the News Archiv Button')}
							type="text"
							value={newsArchiveButtonText}
							onChange={(value) => setAttributes({ newsArchiveButtonText: value })}
						/>
					}
				</PanelBody>
				<PanelBody>
					<BaseControl>
						<h3>
							Info zum Letzte-Beiträge-Block
						</h3>
						<p>
							Die Mobile- und Desktop-Ansicht für den Letzte-Beiträge-Block unterscheiden sich.
							In der Mobile-Ansicht sind die Beiträge hintereinander von links nach rechts und lassen sich swipen.
							Auf dem Laptop, PC und Desktop sind die Beiträge als Kacheln dargestellt.
							Hier im Bearbeitungsmodus ist nur die Desktop-Ansicht unterstützt.
						</p>
						<p>
							Die News werden nur dargestellt. Wenn Du gespeichert hast, dann kann man auf der normalen Website die News anklicken.
						</p>
					</BaseControl>
				</PanelBody>
			</InspectorControls>
		);

		const noPosts = (
			<Fragment>
				{inspectorControls}
				<RichText
					tagName={'h2'}
					value={title}
					onChange={(value) => setAttributes({ title: value })}
					placeholder={"Titel..."}
				/>
				<Placeholder
					icon="admin-post"
					label={__('KTF2021 Posts')}
				>
					{!Array.isArray(latestPosts) ?
						<Spinner /> :
						__('Keine Beiträge gefunden.')
					}
				</Placeholder>
			</Fragment>
		);

		const hasPosts = Array.isArray(latestPosts) && latestPosts.length;
		if (!hasPosts) {
			return noPosts;
		}
		else {

			// Removing posts from display should be instant.
			const displayPosts = latestPosts.length > postsToShow ?
				latestPosts.slice(0, postsToShow) :
				latestPosts;

			if (displayPosts && Array.isArray(displayPosts)) {
				return noPosts;
			} else {

				const editorBlockClassNames = classnames("ktf2021-container-" + color);

				return (
					<Fragment>
						{inspectorControls}
						<div className={editorBlockClassNames}>
							<RichText
								tagName={'h2'}
								value={title}
								onChange={(value) => setAttributes({ title: value })}
								placeholder={"Titel..."}
							/>
							<div className={classnames(this.props.className, "d-flex justify-content-center flex-wrap")}>
								{displayPosts.map((post, i) =>
									<div key={i} className="ktf2021-post d-flex flex-column flex-fill">
										{
											displayPostImage && post.featured_image_src &&
											<div className="ktf2021-post-image">
												<img src={post.featured_image_src} />
											</div>
										}
										<h3 className="ktf2021-post-title">
											<span>{decodeEntities(post.title.rendered.trim())}</span>
										</h3>
										<div className="ktf2021-post-byline d-flex justify-content-between">
											{
												displayPostDate && post.date_gmt &&
												<time dateTime={moment(post.date_gmt).utc().format()}>
													{moment(post.date_gmt).local().format('MMMM DD, Y')}
												</time>
											}
											{
												displayPostAuthor && post.author_info.display_name &&
												<div className="ktf2021-post-author">{post.author_info.display_name}</div>
											}
										</div>
										<div className="ktf2021-post-excerpt">
											{
												displayPostExcerpt && post.excerpt &&
												<div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
											}
										</div>
										{
											displayPostLink && readMoreText &&
											<div className="flex-fill d-flex justify-content-end"><span className="ktf2021-post-link">{readMoreText}</span></div>
										}
									</div>
								)}
							</div>
						</div>
					</Fragment>
				);
			}
		}
	}
}

export default withSelect((select, props) => {
	const { postsToShow, order, orderBy } = props.attributes;
	const { getEntityRecords } = select('core');
	const latestPostsQuery = pickBy({
		order,
		orderby: orderBy,
		per_page: postsToShow,
	}, (value) => !isUndefined(value));
	return {
		latestPosts: getEntityRecords('postType', 'post', latestPostsQuery)
	};
})(LatestPostsBlock);
