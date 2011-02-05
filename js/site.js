$(document).ready(function(){
  $('ul[sub]').prepend('<li><a class="back" href="javascript:void(0)">&laquo; Back</a></li>');
  $('ul.tabs a[sub]').each(function(){
    $(this).click(showSubMenu);
    $(this).append(" &raquo;");
  });
  $('.sub .back').click(returnToParentMenu);
});

function showSubMenu(){
  var current = $(this).parents('ul');
  var next = $('ul.sub[sub="'+$(this).attr('sub')+'"]');
  current.animate({top: "-=50"}, 200);
  next.css({top: '50px'}).show().animate({top: "-=50"},200);
}

function returnToParentMenu(){
  var current = $(this).parents('ul');
  var prev = $('a[sub="'+$(this).parents('ul').attr('sub')+'"]').parents('ul'); 
  current.animate({top: "+=50"},200);
  prev.css({top: "-50px"});
  prev.animate({top: "+=50"},200);
 
}
