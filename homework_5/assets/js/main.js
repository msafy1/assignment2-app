//function to change images when color selection changes
$(document).ready(function() {
  $('.color-choose input').on('click', function() {
    var itemColor = $(this).attr('data-image')
    $('.active').removeClass('active');
    $('.left-column img[data-image = ' + itemColor + ']').addClass('active');
    $(this).addClass('active');
  });
});

//function to highlight whichever size is selected on product detail
$(document).ready(function() {
  $('.size-choose button').on('click', function(){
  	$('.size-choose button.active').removeClass('active');
  	$(this).addClass('active');
  });
});

//function to highlight add to cart button when user adds to cart
$(document).ready(function() {
  $('.add-to-cart button').on('click', function(){
  	$(this).addClass('active');
  });
});

//function to increase cart counter when product is added to cart
function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
        } else {
            sessionStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML ="Cart (" + sessionStorage.clickcount + ")";
    } else {
        document.getElementById("result").innerHTML = "Cart (0)";
    }
}

