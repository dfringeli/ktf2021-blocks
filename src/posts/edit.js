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

const { apiFetch } = wp;

const {
	withSelect,
} = wp.data;

const {
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
	PlainText
} = wp.editor;

class LatestPostsBlock extends Component {
	constructor() {
		super( ...arguments );

		this.toggleDisplayPostDate = this.toggleDisplayPostDate.bind( this );
		this.toggleDisplayPostExcerpt = this.toggleDisplayPostExcerpt.bind( this );
		this.toggleDisplayPostAuthor = this.toggleDisplayPostAuthor.bind( this );
		this.toggleDisplayPostImage = this.toggleDisplayPostImage.bind( this );
		this.toggleDisplayPostLink = this.toggleDisplayPostLink.bind( this );
		this.toggleDisplayNewsArchiveButton = this.toggleDisplayNewsArchiveButton.bind( this );
	}

	toggleDisplayPostDate() {
		const { displayPostDate } = this.props.attributes;
		const { setAttributes } = this.props;

		setAttributes( { displayPostDate: ! displayPostDate } );
	}

	toggleDisplayPostExcerpt() {
		const { displayPostExcerpt } = this.props.attributes;
		const { setAttributes } = this.props;

		setAttributes( { displayPostExcerpt: ! displayPostExcerpt } );
	}

	toggleDisplayPostAuthor() {
		const { displayPostAuthor } = this.props.attributes;
		const { setAttributes } = this.props;

		setAttributes( { displayPostAuthor: ! displayPostAuthor } );
	}

	toggleDisplayPostImage() {
		const { displayPostImage } = this.props.attributes;
		const { setAttributes } = this.props;

		setAttributes( { displayPostImage: ! displayPostImage } );
	}

	toggleDisplayPostLink() {
		const { displayPostLink } = this.props.attributes;
		const { setAttributes } = this.props;

		setAttributes( { displayPostLink: ! displayPostLink } );
	}

	toggleDisplayNewsArchiveButton() {
		const { displayNewsArchiveButton } = this.props.attributes;
		const { setAttributes } = this.props;

		setAttributes( { displayNewsArchiveButton: ! displayNewsArchiveButton } );
	}

	customizeReadMoreText() {
		const { readMoreText } = this.props.attributes;
		const { setAttributes } = this.props;

		setAttributes( { readMoreText: ! readMoreText } );
	}

	render() {
		const { attributes, categoriesList, setAttributes, latestPosts } = this.props;
		const { title, color, fadeIn, displayPostDate, displayPostExcerpt, displayPostAuthor, displayPostImage, displayPostLink, order, orderBy, categories, postsToShow, readMoreText, displayNewsArchiveButton, newsArchiveButtonText } = attributes;

		const colors = [
			{ name: 'Schwarz', color: 'black' },
			{ name: 'Grün', color: 'green' },
			{ name: 'Blau', color: 'blue' },
		];

		const inspectorControls = (
			<InspectorControls>
				<PanelBody title={ __('KTF2021 Settings') }>
					<ColorPalette
						value={ color }
						colors={ colors }
						onChange={ ( value ) => setAttributes( { color: value } ) }
						label={ __( 'Hintergrundfarbe' ) }
					/>
					<ToggleControl
						checked={ fadeIn }
						onChange={ ( value ) => setAttributes( { fadeIn: value } ) }
						label={ "fade in effect" }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Posts Settings' ) }>
					<QueryControls
						{ ...{ order, orderBy } }
						numberOfItems={ postsToShow }
						categoriesList={ categoriesList }
						selectedCategoryId={ categories }
						onOrderChange={ ( value ) => setAttributes( { order: value } ) }
						onOrderByChange={ ( value ) => setAttributes( { orderBy: value } ) }
						onCategoryChange={ ( value ) => setAttributes( { categories: '' !== value ? value : undefined } ) }
						onNumberOfItemsChange={ ( value ) => setAttributes( { postsToShow: value } ) }
					/>
					<ToggleControl
						label={ __( 'Display Featured Image' ) }
						checked={ displayPostImage }
						onChange={ this.toggleDisplayPostImage }
					/>
					<ToggleControl
						label={ __( 'Display Post Author' ) }
						checked={ displayPostAuthor }
						onChange={ this.toggleDisplayPostAuthor }
					/>
					<ToggleControl
						label={ __( 'Display Post Date' ) }
						checked={ displayPostDate }
						onChange={ this.toggleDisplayPostDate }
					/>
					<ToggleControl
						label={ __( 'Display Post Excerpt' ) }
						checked={ displayPostExcerpt }
						onChange={ this.toggleDisplayPostExcerpt }
					/>
					<ToggleControl
						label={ __( 'Display Continue Reading Link' ) }
						checked={ displayPostLink }
						onChange={ this.toggleDisplayPostLink }
					/>
					{ displayPostLink &&
					<TextControl
						label={ __( 'Customize Read More Link' ) }
						type="text"
						value={ readMoreText }
						onChange={ ( value ) => this.props.setAttributes( { readMoreText: value } ) }
					/>
					}
					<ToggleControl
						label={ __( 'Display News Archiv Button' ) }
						checked={ displayNewsArchiveButton }
						onChange={ this.toggleDisplayNewsArchiveButton }
					/>
					{ displayNewsArchiveButton &&
					<TextControl
						label={ __( 'Customize Text of the News Archiv Button' ) }
						type="text"
						value={ newsArchiveButtonText }
						onChange={ ( value ) => this.props.setAttributes( { newsArchiveButtonText: value } ) }
					/>
					}
				</PanelBody>
			</InspectorControls>
		);

		const hasPosts = Array.isArray( latestPosts ) && latestPosts.length;
		if ( ! hasPosts ) {
			return (
				<Fragment>
					{ inspectorControls }
					<PlainText
						tagName={ 'h2' }
						value={ title }
						onChange={ (value) => this.props.setAttributes( { title: value} ) }
						placeholder={ "Titel..." }
					/>
					<Placeholder
						icon="admin-post"
						label={ __( 'KTF2021 Posts' ) }
					>
						{ ! Array.isArray( latestPosts ) ?
							<Spinner /> :
							__( 'No posts found.' )
						}
					</Placeholder>
				</Fragment>
			);
		}

		// Removing posts from display should be instant.
		const displayPosts = latestPosts.length > postsToShow ?
			latestPosts.slice( 0, postsToShow ) :
			latestPosts;

		return (
			<Fragment>
				{ inspectorControls }
				<PlainText
					tagName={ 'h2' }
					value={ title }
					onChange={ (value) => this.props.setAttributes( { title: value} ) }
					placeholder={ "Titel..." }
				/>
				<div
					className={ classnames(
						this.props.className,
						'ab-block-post-grid',
					) }
				>
					<div>
						{ displayPosts.map( ( post, i ) =>
							<article
								key={ i }
								className={ classnames(
									post.featured_image_src && displayPostImage ? 'has-thumb' : 'no-thumb'
								) }
							>
								{
									displayPostImage && post.featured_image_src !== undefined && post.featured_image_src ? (
										<div class="ab-block-post-grid-image">
											<a href={ post.link } target="_blank" rel="bookmark">
												<img
													src={ post.featured_image_src_square }
													alt={ decodeEntities( post.title.rendered.trim() ) || __( '(Untitled)' ) }
												/>
											</a>
										</div>
									) : (
										null
									)
								}

								<div class="ab-block-post-grid-text">
									<h2 class="entry-title"><a href={ post.link } target="_blank" rel="bookmark">{ decodeEntities( post.title.rendered.trim() ) || __( '(Untitled)' ) }</a></h2>

									<div class="ab-block-post-grid-byline">
										{ displayPostAuthor && post.author_info.display_name &&
											<div class="ab-block-post-grid-author">{ post.author_info.display_name }</div>
										}

										{ displayPostDate && post.date_gmt &&
											<time dateTime={ moment( post.date_gmt ).utc().format() } className={ 'ab-block-post-grid-date' }>
												{ moment( post.date_gmt ).local().format( 'MMMM DD, Y' ) }
											</time>
										}
									</div>

									<div class="ab-block-post-grid-excerpt">
										{ displayPostExcerpt && post.excerpt &&
											<div dangerouslySetInnerHTML={ { __html: post.excerpt.rendered } } />
										}

										{ displayPostLink &&
											<p><a class="ab-block-post-grid-link ab-text-link" href={ post.link } target="_blank" rel="bookmark">{ readMoreText }</a></p>
										}
									</div>
								</div>
							</article>
						) }
					</div>
				</div>
			</Fragment>
		);
	}
}

export default withSelect( ( select, props ) => {
	const { postsToShow, order, orderBy, categories } = props.attributes;
	const { getEntityRecords } = select( 'core' );
	const latestPostsQuery = pickBy( {
		categories,
		order,
		orderby: orderBy,
		per_page: postsToShow,
	}, ( value ) => ! isUndefined( value ) );
	const categoriesListQuery = {
		per_page: 100,
	};
	return {
		latestPosts: getEntityRecords( 'postType', 'post', latestPostsQuery ),
		categoriesList: getEntityRecords( 'taxonomy', 'category', categoriesListQuery ),
	};
} )( LatestPostsBlock );
