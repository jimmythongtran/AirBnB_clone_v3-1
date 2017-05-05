$( document ).ready(function() {
  let storeDict = {};
  $('.small-list li input').change(function() {
    if $('.small-list li input').checked {
      storeList[($(this).attr('data-id'))] = $(this).attr('data-name');
    }
    else {
      delete storeDict[($(this).attr('data-id'))]
    };
  let totalString = Object.values(storeDict).join(', ');
  $('.amenities H4').text(totalString);
  })
);
