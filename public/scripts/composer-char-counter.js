$(document).ready(function() {
    
    //option 1
    
    let maxLength = 140;
    $('textarea').on("keyup",function(){
        let length = $(this).val().length;
        let length = maxLength-length;
        console.log(length)
        $('.new-tweet').text(length)
    })
    //option 2
    /*
    $("#tweet-text").on("keyup",function(event){
        checkTextAreaMaxLength(this,event);
      });
      

      function checkTextAreaMaxLength(textBox, e) { 
          
          var maxLength = parseInt($(textBox).data("length"));
          
        
          if (!checkSpecialKeys(e)) { 
              if (textBox.value.length > maxLength - 1) textBox.value = textBox.value.substring(0, maxLength); 
         } 
        $("#counter").html(maxLength - textBox.value.length);
          
          return true; 
      } 

      function checkSpecialKeys(e) { 
          if (e.keyCode != 8 && e.keyCode != 46 && e.keyCode != 37 && e.keyCode != 38 && e.keyCode != 39 && e.keyCode != 40) 
              return false; 
          else 
              return true; 
      }
      */

});