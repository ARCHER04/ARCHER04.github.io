$(document).ready(function(){
    $(".preloader").css("display","none");//прелодер
    //калькулятор
    function calcul(){
        let sum = parseInt($("#select1 option:selected").val()) + parseInt($("#select2 option:selected").val()) + parseInt($("#select3 option:selected").val());
        let days = parseInt($("#select1 option:selected").attr("days")) + parseInt($("#select2 option:selected").attr("days")) + parseInt($("#select3 option:selected").attr("days"));
        $(".days .digit").text(days);
        $(".price .digit").text(sum);
    }
    $("select").on("change",function(){
        calcul();
    });
    calcul();
    //наши active
    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();

        $('.sec').each((i, el) => {
            if ($(el).offset().top - $('nav').outerHeight() <=scrollDistance) {
                $('nav a').each((i, el) => {
                    if ($(el).hasClass('active')) {
                        $(el).removeClass('active');
                    }
                });

                $('nav li:eq(' + i + ')').find('a').addClass('active');
            }

        });
    });
    //якорь скролл
   $('a[href^="#"').click(function(){
    let valHref=$(this).attr("href");
    $('html, body').animate({scrollTop:$(valHref).offset().top-68+ "px"})
   });
   //модальное окно
   window.addEventListener('load', function() {
    setTimeout(function() { 
        $('.modal').modal('show');
    }, 10000);
    });
    //бегающее цифры
   var show = true;
   var countbox = ".benefits__inner";
   $(window).on("scroll load resize", function () {
       if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
       var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
       var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
       var w_height = $(window).height(); // Высота окна браузера
       var d_height = $(document).height(); // Высота всего документа
       var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
       if (w_top + 500>= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
           $('.number').css('opacity', '1');
           $('.number').spincrement({
            thousandSeparator: "",
            duration: 1200
        });
            
        
           show = false;
       }
   });
   //планое появление
   let options={threshold:[0.5]};
   let observer=new IntersectionObserver(onEntry,options);
   let element=$('.activ-animate');
   element.each((i,el)=>{
        observer.observe(el);
   });
   function onEntry(entry){
    entry.forEach(change => {
        if(change.isInteresting){
            change.target.classList.add('activ_show');
        }
    });
   }
   //magnificpopup
   $(document).ready(function() {
    $('.image-link').magnificPopup({type:'image'});
  });
});