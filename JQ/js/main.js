$(document).ready(function(){


    $('li').click(function(){
        if (event.target.nodeName === 'BUTTON') {
            $(this).removeClass('active')
        } else {
            $(this).addClass('active')
        }
    });





    // $('h1').click(function(){
    //     $(this).toggleClass('img');
    //     $(this).css({
    //         fontSize: '60px',
    //         color: 'red',
    //         backgroundColor: '#000'
    //     });
    // })



    // $('img').click(function(){
    //     $(this).addClass('img');
    // })



    // $('button').click(function(){
    //     var imgUrl = $('input').val();
    //     // $('img').attr({
    //     //     src: imgUrl,
    //     //     alt: 'my image',
    //     //     width: '50%'
    //     // });
    //     $('input').val('');
    //     // $('#ul').append('<img src=' + imgUrl + ' width="200px" >');
    //     $('#ul').prepend('<img src=' + imgUrl + ' width="200px" >');

    //     $('#ul').before('content');
    //     $('#ul').after('content');
    //     $('#ul').remove();
    //     $('#ul').empty();



    // });







    // $('button').click(function(){
    //     // $('p').text('salom hammaga');
    //     $('p').html('<b>salom hamaga</b>');
    //     var input = $('#name').val('i done'); // form uchun
    //     var type = $('input').attr('type');
    //     console.log(input, type); 

    // })
    

    // var h1 = $('h1').text();
    // console.log(h1);






    // $('#hide-me').click(function(){
    //     $('h2').toggle(2000);
    //     // $('h2').show(2000);
    //     // $('h2').hide(2000);
    // });

    // $('#show-me').click(function(){
    //     // $('h2').fadeToggle(2000);
    //     // $('h2').fadeToggle(2000);
    //     // $('h2').fadeToggle(2000);
    //     $('h2').fadeTo(2000, 0.2);
    // })

    // $('#slide-me').click(function(){
    //     // $('h2').slideUp();
    //     // $('h2').slideDown(5000);
    //     $('h2').slideToggle(2000);
    // })

    // $('#animate-me').click(function(){
    //     $('#anim').animate({
    //         height: '200px',
    //         width: '1000px'
    //     },2000, function() {
    //         alert('finish');
    //     });
    // });

    // $('#anim').click(function(){
    //     $(this).stop();
    // }, function(){
    //     alert('stop');
    // });















})