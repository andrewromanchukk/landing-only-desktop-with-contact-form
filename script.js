$(function(){
    $('a[href^="#"]').on('click', function(event) {
      // отменяем стандартное действие
      event.preventDefault();
      
      var sc = $(this).attr("href"),
          dn = $(sc).offset().top;
      /*
      * sc - в переменную заносим информацию о том, к какому блоку надо перейти
      * dn - определяем положение блока на странице
      */
      
      $('html, body').animate({scrollTop: dn}, 1000);
      
      /*
      * 1000 скорость перехода в миллисекундах
      */
    });
  });
//   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

$(document).ready(function() {

    $("#btn-submit").on("click", function() {
    
        var name = $("#name").val(); // Получаем имя
        var email = $("#email").val(); // Получаем e-mail
        var message = $("#message").val(); // Получаем сообщение
        
        $.ajax({
        
            url: "mail.php", // Куда отправляем данные (обработчик)
            type: "post",

            data: {
                "name": name,
                "email": email,
                "message": message
            },

            success: function(data) {
            
                $(".result").html(data); // Выводим результат
                
            }
            
        });
        
    });
    
});
