$(document).ready(function () {
  const url = 'http://0.0.0.0:5001/api/v1/status/';

  $.get(url, function (response, textStatus) {
    if (response.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });

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
