<?php
/**
 * Server-side rendering for the post block
 */

/**
 * Renders the post grid block on server.
 */
function ktf2021_blocks_render_block_core_latest_posts( $attributes ) {

	$categories = isset( $attributes['categories'] ) ? $attributes['categories'] : '';

	$recent_posts = wp_get_recent_posts( array(
		'numberposts' => $attributes['postsToShow'],
		'post_status' => 'publish',
		'post_type' => array('post', 'message'),
		'order' => $attributes['order'],
		'orderby' => $attributes['orderBy'],
		'category' => $categories,
	), 'OBJECT' );

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
			$list_items_markup .= sprintf(
				'<div class="ktf2021-post d-flex flex-column flex-fill %1$s">',
				esc_attr( $post_thumb_class )
			);

			// Get the featured image
			if ( isset( $attributes['displayPostImage'] ) && $attributes['displayPostImage'] && $post_thumb_id ) {

				$list_items_markup .= sprintf(
					'<div class="ktf2021-post-image"><a href="%1$s"><img src="%2$s" /></a></div>',
					esc_url( get_permalink( $post_id ) ),
					wp_get_attachment_url( $post_thumb_id, array( '', '200' ) )
				);
			}

				// Get the post title
				$title = get_the_title( $post_id );

				if ( ! $title ) {
					$title = __( 'KTF2021 News' );
				}

				$list_items_markup .= sprintf(
					'<h3 class="ktf2021-post-title"><a href="%1$s">%2$s</a></h3>',
					esc_url( get_permalink( $post_id ) ),
					esc_html( $title )
				);

				// Wrap the byline for author and/or date
				$list_items_markup .= sprintf(
					'<div class="ktf2021-post-byline d-flex justify-content-between">'
				);

				// Get the post author
				if ( isset( $attributes['displayPostAuthor'] ) && $attributes['displayPostAuthor'] ) {
					$list_items_markup .= sprintf(
						'<div class="ktf2021-post-author">%1$s</div>',
						esc_html( get_the_author_meta( 'display_name', $post->post_author ) )
					);
				}

				// Get the post date
				if ( isset( $attributes['displayPostDate'] ) && $attributes['displayPostDate'] ) {
					$list_items_markup .= sprintf(
						'<time datetime="%1$s" class="ab-block-post-grid-date">%2$s</time>',
						esc_attr( get_the_date( 'c', $post_id ) ),
						esc_html( get_the_date( '', $post_id ) )
					);
				}

				// Close the byline content
				$list_items_markup .= sprintf(
					'</div>'
				);

				// Wrap the excerpt content
				$list_items_markup .= sprintf(
					'<div class="ktf2021-post-excerpt">'
				);

				// Get the excerpt
				$excerpt = apply_filters( 'the_excerpt', get_post_field( 'post_excerpt', $post_id, 'display' ) );

				if( empty( $excerpt ) ) {
					$excerpt = apply_filters( 'the_excerpt', wp_trim_words( $post->post_content, 55 ) );
				}

				if ( ! $excerpt ) {
					$excerpt = null;
				}

				if ( isset( $attributes['displayPostExcerpt'] ) && $attributes['displayPostExcerpt'] ) {
					$list_items_markup .=  wp_kses_post( $excerpt );
				}

				// Close the excerpt content
				$list_items_markup .= sprintf(
					'</div>'
				);

				// Add read more link
				if ( isset( $attributes['displayPostLink'] ) && $attributes['displayPostLink'] ) {
					$list_items_markup .= sprintf(
						'<div class="flex-fill d-flex justify-content-end"><a class="align-self-end" href="%1$s"><span class="ktf2021-post-link">%2$s</span></a></div>',
						esc_url( get_permalink( $post_id ) ),
						esc_html( $attributes['readMoreText'] )
					);
				}

			// Close the markup for the post
			$list_items_markup .= "</div>\n";
		}
	}

	// Build the classes
	$class = "ktf2021-container-" . $attributes['color'];

	if ( isset( $attributes['className'] ) ) {
		$class .= ' ' . $attributes['className'];
	}

	$content_class = 'ktf2021-content';

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

	// Output the post markup
	$block_content = sprintf(
		'<div class="%1$s"><div class="%2$s"><div class="text-center">%3$s</div><div class="d-flex justify-content-center flex-wrap">%4$s</div>%5$s</div></div>',
		esc_attr( $class ),	// ktf-container
		esc_attr( $content_class ),	// ktf-content
		$postsTitle,
		$list_items_markup,
		$newsArchiveButton
	);

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
			),
			'color' => array(
				'type' => 'string',
				'default' => 'black'
			),
			'fadeIn' => array(
				'type' => 'boolean',
				'default' => 'true'
			),
			'categories' => array(
				'type' => 'string',
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
