<?php
/**
 * The template for displaying the Submit a Quote page.
 *
 * @package QOD_Starter_Theme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

         <section class="quote-submission">
            <header class="entry-header">
         		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
         	</header><!-- .entry-header -->

            <?php if ( is_user_logged_in() && current_user_can( 'edit_posts' ) ) : ?>

               <div class="quote-submission-wrapper">
                  <form name="quoteForm" id="quote-submission-form">
                     <div class="quote-author">
                        <label class="text-title" for="quote-author">Author of Quote</label>
                        <input class="input-field" type="text" name="quote_author" id="quote-author" required aria-required="true">
                     </div>
                     <div class="quote-content">
                        <label class="text-title" for="quote-content">Quote</label>
                        <textarea class="input-field" rows="3" cols="20" name="quote_content" id="quote-content" required aria-required="true"></textarea>
                     </div>
                     <div class="quote-source">
                        <label class="text-title" for="quote-source">Where did you find this quote? (e.g. book name)</label>
                        <input class="input-field" type="text" name="quote_source" id="quote-source">
                     </div>
                     <div class="quote-source-url">
                        <label class="text-title" for="quote-source-url">Provide the the URL of the quote source, if available.</label>
                        <input class="input-field" type="url" name="quote_source_url" id="quote-source-url">
                     </div>
                         <input class="submit-button" type="submit" value="Submit Quote">
                  </form>

                  <p class="submit-success-message" style="display:none;"></p>
               </div>

            <?php else : ?>

               <p>Sorry, you must be logged in to submit a quote!</p>

               <p><?php echo sprintf( '<a href="%1s">%2s</a>', esc_url( wp_login_url() ), 'Click here to login.' ); ?></p>

            <?php endif; ?>
         </section>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>
