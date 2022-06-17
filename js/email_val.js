$(document).ready(function() {
    $('#form').trigger("reset");
    $("form :input").attr("autocomplete", "off");
    $('#form').submit(function(e) {
      e.preventDefault();
      var fname = $('#firstname').val();
      var lname = $('#lastname').val();
      var email = $('#email').val();
      var pass = $('#password').val();
  
      $(".error").remove();
  
      if (fname.length < 1) {
        $('#firstname').after('<span class="error">First Name cannot be empty</span>');
        $('#firstname').addClass('error-icon');
      } else {
          
        $('#firstname').removeClass('error-icon');
      
    }
      if (lname.length < 1) {
        $('#lastname').after('<span class="error">Last Name cannot be empty</span>');
        $('#lastname').addClass('error-icon');
      }else {
          
        $('#lastname').removeClass('error-icon');
      
    }
      if (email.length < 1) {
        $('#email').after('<span class="error">Email cannot be empty</span>');
        $('#email').addClass('error-icon');
      } else {
        var regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        var validEmail = regEx.test(email);
        if (!validEmail) {
          $('#email').after('<span class="error">Looks like this is not an email</span>');
          $('#email').addClass('error-icon');
        }else {
          
            $('#email').removeClass('error-icon');
          
        }
      }
      if (pass.length < 1) {
        $('#password').after('<span class="error">Password cannot be empty</span>');
        $('#password').addClass('error-icon');
      } else {
          
          $('#password').removeClass('error-icon');
        
      }
    });
  
  });