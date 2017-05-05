$(document).ready(function () {
  let storeDict = {};
  $('.small-list li input').change(function () {
    if (this.checked) {
      storeDict[($(this).attr('data-id'))] = $(this).attr('data-name');
      console.log(storeDict);
    } else {
      delete storeDict[($(this).attr('data-id'))];
    }
    let totalString = Object.values(storeDict).join(', ');
    $('.amenities H4').text(totalString);
  });
});
