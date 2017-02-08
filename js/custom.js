var test;
test1=1000;
test1= test1 + 10;
var test2 = 1;
test=test1-test2;
console.log('Мир!');
console.log(test);

test1=test1*4;
console.log(test1);
test1=test2/10;
console.log(test);

if (test1=1000)
{console.log('bolshe tushci')}

else (test1<1000)
{console.log('GG')}

function power(test1){
    var test2 = test1*test1;
    return test2;
}
$(document).ready(function(){

    $('.header').slideUp(200);
    $('.header').slideDown(200);

});

$('.gallery a').colorbox({maxWidth: '90%', height: '90%'});

$('.flexslider').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 400,
    itemMargin: 5
});