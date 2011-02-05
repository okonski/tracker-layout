$(document).ready(function(){
  $('ul[sub]').prepend('<li><a class="back" href="javascript:void(0)">&laquo; Back</a></li>');
  $('.clickable').each(function(){
    $(this).click(showSubMenu);
    $(this).append(" &raquo;");
  });
  $('.sub .back').click(returnToParentMenu);
});

function showSubMenu(){
  $(this).parents('ul').hide('slide', { direction: 'up' }, 200);
  $('ul.sub[sub="'+$(this).attr('sub')+'"]').delay(200).show('slide', { direction: 'left' }, 200);
}

function returnToParentMenu(){
  $(this).parents('ul').hide('slide', { direction: 'up' }, 200);
  $('a[sub="'+$(this).parents('ul').attr('sub')+'"]').parents('ul').delay(200).show('slide', { direction: 'left' }, 200);
}
