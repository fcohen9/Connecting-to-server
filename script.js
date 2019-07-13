$(document).ready(function($) {
    $('.tab_content').hide();
    $('.tab_content:first').show();
    $('.tabs li:first').addClass('active');
    $('.tabs li').click(function(event) {
      $('.tabs li').removeClass('active');
      $(this).addClass('active');
      $('.tab_content').hide();
  
      var selectTab = $(this).find('a').attr("href");
  
      $(selectTab).fadeIn();
    });
  });
  

  $(function(){
    $(".makeEditable").click(function(){
        $('textarea').removeAttr("readonly");
    });

    $('#parent-fname').change(function() {
      let inputValue = $(this).val();
      let letter = $('#letter');

      letter.val(letter.val() + `\nFirst Name: ${inputValue}`)
    })

   
});

//clear textarea


