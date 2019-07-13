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

    $('#fname').change(function() {
      let inputValue = $(this).val();
      let letter = $('#letter');

      letter.val(letter.val() + `\nFirst Name: ${inputValue}`)
    })

    $('#lname').change(function() {
      let inputValue = $(this).val();
      let letter = $('#letter');

      letter.val(letter.val() + `\nLast Name: ${inputValue}`)
    })

    $('#email').change(function() {
      let inputValue = $(this).val();
      let letter = $('#letter');

      letter.val(letter.val() + `\nEmail: ${inputValue}`)
    })

    $('#phone').change(function() {
      let inputValue = $(this).val();
      let letter = $('#letter');

      letter.val(letter.val() + `\nPhone: ${inputValue}`)
    })
   
    $('#addr1').change(function() {
      let inputValue = $(this).val();
      let letter = $('#letter');

      letter.val(letter.val() + `\nAddress: ${inputValue}`)
    })

    $('#addr2').change(function() {
      let inputValue = $(this).val();
      let letter = $('#letter');

      letter.val(letter.val() + `\nAddress Line 2: ${inputValue}`)
    })

    $('#city').change(function() {
      let inputValue = $(this).val();
      let letter = $('#letter');

      letter.val(letter.val() + `\nCity: ${inputValue}`)
    })

    $('#state').change(function() {
      let inputValue = $(this).val();
      let letter = $('#letter');

      letter.val(letter.val() + `\nState: ${inputValue}`)
    })

    $('#zip').change(function() {
      let inputValue = $(this).val();
      let letter = $('#letter');

      letter.val(letter.val() + `\nZip Code: ${inputValue}`)
    })

});

//clear textarea


