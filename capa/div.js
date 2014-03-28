var startY = 900;
var stopY = 1800;

$(window).scroll(function(){
    checkY();
});

function checkY()
{
    console.log($(window).scrollTop()); 
    if($(window).scrollTop() > startY && $(window).scrollTop() <= stopY)
    {    
         $('#div2').fadeOut("slow");
    }
    else
    {

         $('.#div2').fadeOut("slow");
    }
}

checkY();