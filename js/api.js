(function($) {
  'use strict';

  // remove this body append code, just for initial test
  $('body').append('js file is working');

  /**
   * Ajax-based random post fetching & History API
   */
  $('#new-quote-button').oN('click', function(event){
    event.preventDefault();
    console.log('click');
    // write ajax for get request
    $.ajax({
      method: 'get',
      url: api_vars.root_url + 'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1' ,
      cache: false
    }).done(function(data){
      console.log(data);

      //append the data to html, look at template-parts/content.php

    }).fail(function(){

      // some message for user saying there was an error
    });
  });
  


  /**
   * Ajax-based front-end post submissions.
   */

   // take a look at wp javascript slides for post request
   // also in the redsprout theme

})(jQuery);
