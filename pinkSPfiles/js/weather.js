$(document).ready(function() {
  $.simpleWeather({
    location: '',
    woeid: '766273',
    unit: 'c',
    success: function(weather) {
      html = '<i class="icon-'+weather.code+'"></i> ';
      html += '<ul><li class="currently">'+weather.currently+'</li>';
      html += '<li class="city">'+weather.city+'</li></ul>';
      html +='<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});