<?php
/**
 * Server-side rendering for the post block
 */

/**
 * Renders the post grid block on server.
 */
function ktf2021_blocks_render_block_core_latest_posts( $attributes ) {

	$recent_posts = wp_get_recent_posts( array(
		'numberposts' => $attributes['postsToShow'],
		'post_status' => 'publish',
		'post_type' => array('post', 'message'),
		'order' => $attributes['order'],
		'orderby' => $attributes['orderBy'],
	), 'OBJECT' );

	$glide_items_markup = '';
	$list_items_markup = '';

	if ( $recent_posts ) {
		foreach ( $recent_posts as $post ) {
			// Get the post ID
			$post_id = $post->ID;

			// Get the post thumbnail
			$post_thumb_id = get_post_thumbnail_id( $post_id );

			if ( $post_thumb_id && isset( $attributes['displayPostImage'] ) && $attributes['displayPostImage'] ) {
				$post_thumb_class = 'has-thumb';
			} else {
				$post_thumb_class = 'no-thumb';
			}

			// Start the markup for the post
			$post_markup = sprintf(
				'<div class="ktf2021-post d-flex flex-column %1$s">',
				esc_attr( $post_thumb_class )
			);

			// Get the featured image
			if ( isset( $attributes['displayPostImage'] ) && $attributes['displayPostImage'] && $post_thumb_id ) {

				$post_markup .= sprintf(
					'<a class="ktf2021-post-image-link" href="%1$s"><div class="ktf2021-post-image" style="background-image: url(%2$s)"></div></a>',
					esc_url( get_permalink( $post_id ) ),
					wp_get_attachment_url( $post_thumb_id, array( '', '200' ) )
				);
			}

				// Get the post title
				$title = get_the_title( $post_id );

				if ( ! $title ) {
					$title = __( 'KTF2021 News' );
				}

				$post_markup .= sprintf(
					'<h3 class="ktf2021-post-title"><a href="%1$s">%2$s</a></h3>',
					esc_url( get_permalink( $post_id ) ),
					esc_html( $title )
				);

				// Wrap the byline for author and/or date
				$post_markup .= sprintf(
					'<div class="ktf2021-post-byline d-flex justify-content-between">'
				);

				// Get the post author
				if ( isset( $attributes['displayPostAuthor'] ) && $attributes['displayPostAuthor'] ) {
					$post_markup .= sprintf(
						'<div class="ktf2021-post-author">%1$s</div>',
						esc_html( get_the_author_meta( 'display_name', $post->post_author ) )
					);
				}

				// Get the post date
				if ( isset( $attributes['displayPostDate'] ) && $attributes['displayPostDate'] ) {
					$post_markup .= sprintf(
						'<time datetime="%1$s" class="ab-block-post-grid-date">%2$s</time>',
						esc_attr( get_the_date( 'c', $post_id ) ),
						esc_html( get_the_date( '', $post_id ) )
					);
				}

				// Close the byline content
				$post_markup .= sprintf(
					'</div>'
				);

				// Wrap the excerpt content
				$post_markup .= sprintf(
					'<div class="ktf2021-post-excerpt">'
				);

				// Get the excerpt
				$excerpt = apply_filters( 'the_excerpt', get_post_field( 'post_excerpt', $post_id, 'display' ) );

				if( empty( $excerpt ) ) {
					$excerpt = apply_filters( 'the_excerpt', wp_trim_words( $post->post_content, 30 ) );
				}

				if ( ! $excerpt ) {
					$excerpt = null;
				}

				if ( isset( $attributes['displayPostExcerpt'] ) && $attributes['displayPostExcerpt'] ) {
					$post_markup .=  wp_kses_post( $excerpt );
				}

				// Close the excerpt content
				$post_markup .= sprintf(
					'</div>'
				);

				// Add read more link
				if ( isset( $attributes['displayPostLink'] ) && $attributes['displayPostLink'] ) {
					$post_markup .= sprintf(
						'<div class="flex-fill d-flex justify-content-end"><a class="align-self-end" href="%1$s"><span class="ktf2021-post-link">%2$s</span></a></div>',
						esc_url( get_permalink( $post_id ) ),
						esc_html( $attributes['readMoreText'] )
					);
				}

			// Close the markup for the post
			$post_markup .= '</div>';
			$glide_items_markup .= '<li class="glide__slide">' . $post_markup . '</li>';
			$list_items_markup .= $post_markup;
		}
	}

	// Build the classes
	$class = "ktf2021-container-" . $attributes['color'];

	if ( isset( $attributes['className'] ) ) {
		$class .= ' ' . $attributes['className'];
	}

	$content_class = 'ktf2021-content no-x-indent-sm';

	if ( isset( $attributes['fadeIn'] ) && $attributes['fadeIn'] ) {
		$content_class .= ' ktf2021-reveal';
	}

	$postsTitle = '';

	// Set the title for the posts
	if ( isset( $attributes['title'] ) && $attributes['title'] ) {
		$postsTitle .= sprintf(
			'<h2>%1$s</h2>',
			$attributes['title']
		);
	}

	$newsArchiveButton = '';

	// Set the news archive button for more posts
	if ( isset( $attributes['displayNewsArchiveButton'] ) && $attributes['displayNewsArchiveButton'] && isset( $attributes['newsArchiveButtonText'] )) {
		$newsArchiveButton .= sprintf(
			'<div class="d-flex justify-content-center"><div class="ktf2021-button-squared"><a class="ktf2021-button-link" href="' . get_site_url() . '/news"><span>%1$s</span></a></div></div>',
			$attributes['newsArchiveButtonText']
		);
	}

	// Block Start	
	$block_content = sprintf('<div class="%1$s"><div class="%2$s">
		<div class="text-center">%3$s</div>',
		esc_attr( $class ),	// ktf-container
		esc_attr( $content_class ),	// ktf-content
		$postsTitle);
	
	// Glide Mobile
	$block_content .= sprintf('<div class="ktf2021-news-mobile d-sm-none">
				<div class="glide__track" data-glide-el="track">
					<ul class="glide__slides m-0">
						%1$s
					</ul>
				</div>
				<div class="glide__arrows" data-glide-el="controls">
					<button class="glide__arrow glide__arrow--left" data-glide-dir="&lt;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M0 12l10.975 11 2.848-2.828-6.176-6.176H24v-3.992H7.646l6.176-6.176L10.975 1 0 12z"></path></svg></button>
					<button class="glide__arrow glide__arrow--right" data-glide-dir="&gt;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path></svg></button>
				</div>
			</div>',
		$glide_items_markup);
	$block_content .= "<script>var glide = new Glide('.ktf2021-news-mobile', { type: 'slider', perView: 2, focusAt: 'center', rewind: false, gap: 50, breakpoints: {
		768: {
		  perView: 1,
		  peek: 30,
		  gap: 0
		}
		}}); glide.mount();</script>";
		
	// Normal Desktop
	$block_content .= sprintf('<div class="ktf2021-news-desktop d-none d-sm-block">
			<div class="d-flex justify-content-center flex-wrap">%1$s</div>
		</div>',
		$list_items_markup
	);

	// Block End
	$block_content .= sprintf('%1$s</div></div>', $newsArchiveButton);

	return $block_content;
}

/**
 * Registers the `ktf2021/ktf2021-posts` block on server.
 */
function ktf2021_blocks_register_block_core_latest_posts() {

	// Check if the register function exists
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	register_block_type( 'ktf2021/ktf2021-posts', array(
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'News'
			),
			'color' => array(
				'type' => 'string',
				'default' => 'black'
			),
			'fadeIn' => array(
				'type' => 'boolean',
				'default' => 'true'
			),
			'className' => array(
				'type' => 'string',
			),
			'postsToShow' => array(
				'type' => 'number',
				'default' => 6,
			),
			'displayPostDate' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'displayPostExcerpt' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'displayPostAuthor' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'displayPostImage' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'displayPostLink' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'order' => array(
				'type' => 'string',
				'default' => 'desc',
			),
			'orderBy'  => array(
				'type' => 'string',
				'default' => 'date',
			),
			'readMoreText'  => array(
				'type' => 'string',
				'default' => '> mehr',
			),
			'displayNewsArchiveButton' => array(
				'type' => 'boolean',
				'default' => false,
			),
			'newsArchiveButtonText'  => array(
				'type' => 'string',
				'default' => 'zum News Archiv',
			),
		),
		'render_callback' => 'ktf2021_blocks_render_block_core_latest_posts',
	) );
}

add_action( 'init', 'ktf2021_blocks_register_block_core_latest_posts' );


/**
 * Create API fields for additional info
 */
function ktf2021_blocks_register_rest_fields() {
	// Add landscape featured image source
	register_rest_field(
		'post',
		'featured_image_src',
		array(
			'get_callback' => 'ktf2021_blocks_get_image_src_landscape',
			'update_callback' => null,
			'schema' => null,
		)
	);

	// Add square featured image source
	register_rest_field(
		'post',
		'featured_image_src_square',
		array(
			'get_callback' => 'ktf2021_blocks_get_image_src_square',
			'update_callback' => null,
			'schema' => null,
		)
	);

	// Add author info
	register_rest_field(
		'post',
		'author_info',
		array(
			'get_callback' => 'ktf2021_blocks_get_author_info',
			'update_callback' => null,
			'schema' => null,
		)
	);
}
add_action( 'rest_api_init', 'ktf2021_blocks_register_rest_fields' );


/**
 * Get landscape featured image source for the rest field
 */
function ktf2021_blocks_get_image_src_landscape( $object, $field_name, $request ) {
	$feat_img_array = wp_get_attachment_image_src(
		$object['featured_media'],
		'ab-block-post-grid-landscape',
		false
	);
	return $feat_img_array[0];
}

/**
 * Get square featured image source for the rest field
 */
function ktf2021_blocks_get_image_src_square( $object, $field_name, $request ) {
	$feat_img_array = wp_get_attachment_image_src(
		$object['featured_media'],
		'ab-block-post-grid-square',
		false
	);
	return $feat_img_array[0];
}

/**
 * Get author info for the rest field
 */
function ktf2021_blocks_get_author_info( $object, $field_name, $request ) {
	// Get the author name
	$author_data['display_name'] = get_the_author_meta( 'display_name', $object['author'] );

	// Get the author link
	$author_data['author_link'] = get_author_posts_url( $object['author'] );

	// Return the author data
	return $author_data;
}
