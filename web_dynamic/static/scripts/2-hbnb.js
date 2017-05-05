
$(document).ready(function () {
  const request = require('request');
  const url = 'http://0.0.0.0:5001/api/v1/status/';

  request(url, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      if (response === 'OK') {
        $('DIV#api_status').append('.available');
      } else {
        delete $('available');
      }
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
