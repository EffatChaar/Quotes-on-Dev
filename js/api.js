(function($) {
  'use strict';

  var lastPage = "";

  /**
   * Ajax-based random post fetching & History API
   */

  $('#new-quote-button').on('click', function(event){
    event.preventDefault();
    lastPage = document.URL;
    console.log('click');

    //-------------------//

    $.ajax({
      method: 'get',
      url: api_vars.root_url + 'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1' ,
      cache: false

    }).done(function(data){
      console.log(data);
      history.pushState(null, null, data[0].slug);

      $('.entry-content').empty();
      $('.entry-content').append(data[0].content.rendered);

      $('.entry-title').html('&mdash;' + data[0].title.rendered);
      $('.source').html('<a href="' + data[0]._qod_quote_source_url + '">' + data[0]._qod_quote_source + '</a>');

    }).fail(function(){
      // some message for user saying there was an error
    });
  });

  $(window).on("popstate", function() {
    window.location.replace(lastPage);
  });
  


  $('#quote-submission-form').submit(function(event) {
    event.preventDefault();
  $.ajax({
    method: 'post',
    url: api_vars.root_url + 'wp/v2/posts/',
    data: {
      title: $('#quote-author').val(),
      content: $('#quote-content').val(),
      _qod_quote_source: $('#quote-source').val(),
      _qod_quote_source_url: $('#quote-source-url').val(),
      status: 'draft'
      },
    beforeSend: function(xhr) {
      xhr.setRequestHeader( 'X-WP-Nonce', api_vars.nonce );
      }
    })
    .done(function() {
      $('#quote-submission-form').slideUp('slowly');
      $('.quote-submission-wrapper').append('Success! Thank You For Submitting!');
    })
    .fail(function(err){
      $('.entry-header').append('<p class="warning">Something went wrong!' + JSON.stringify(err) + '</p>')

    });
  })

})(jQuery);
