//CHOOSE REDDIT THEME
var redditTheme = [
  'https://www.reddit.com/r/EarthPorn.json?jsonp=?',
  'https://www.reddit.com/r/ArtPorn.json?jsonp=?',
  'https://www.reddit.com/r/AnimeSketch.json?jsonp=?',
  'https://www.reddit.com/r/battlestations.json?jsonp=?',
  'https://www.reddit.com/r/4chan.json?jsonp=?',
];
var x = 0;

$( document ).ready(function() {
  $('#switch-box li').click(function() {
    x = $(this).index();
    loadReddit();//Trigger loadReddit() when changing reddit theme so it re-loads
  });
});



//LOAD REDDIT POSTS
$( document ).ready(function() {
  loadReddit();//Trigger loadReddit() on page load.
});

function loadReddit() {
  //REDDIT 1
  $.getJSON(redditTheme[x],
    function foo(data) {
      //Retrieve 1st Post
      $.each( 
        data.data.children.slice(2, 3),//skipe 1st post because it is a sticky
        function (i, post) {

          //Check title length
          var title = post.data.title;
          if (title.length > 37) {
            title = title.substr(0,37)+'...';
          }

          //Transform date into human readable form
          var myDate = new Date( post.data.created *1000);
          var weekday = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ];
          var week = weekday[myDate.getDay()];

          var monthNumber = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ];
          var month = monthNumber[myDate.getMonth()];

          var monthDay = myDate.getDate();

          //Print reddit info
          $(".reddit-title:eq(0) p").text(week + ', ' + month + ' ' + monthDay);
          $(".reddit-title:eq(0) h2").text(post.data.subreddit);
          $(".reddit-post:eq(0) h2").text(title);
          $(".reddit-post:eq(0)").css("background", "url(" + post.data.url + ")");
          $(".reddit-post:eq(0)").click(function() {
            window.location = "http://reddit.com" + post.data.permalink;
          });
        }
      )
    }
  );
  //REDDIT 2
  $.getJSON(redditTheme[x],
    function foo(data) {
      //Retrieve 2nd Post
      $.each( 
        data.data.children.slice(3, 4),
        function (i, post) {

          //Check title length
          var title = post.data.title;
          if (title.length > 40) {
            title = title.substr(0,40)+'...';
          }

          //Transform date into human readable form
          var myDate = new Date( post.data.created *1000);
          var weekday = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ];
          var week = weekday[myDate.getDay()];

          var monthNumber = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ];
          var month = monthNumber[myDate.getMonth()];

          var monthDay = myDate.getDate();

          //Print reddit info
          $(".reddit-title:eq(1) p").text(week + ', ' + month + ' ' + monthDay);
          $(".reddit-title:eq(1) h2").text(post.data.subreddit);
          $(".reddit-post:eq(1) h2").text(title);
          $(".reddit-post:eq(1)").css("background", "url(" + post.data.url + ")");
          $(".reddit-post:eq(1)").click(function() {
            window.location = "http://reddit.com" + post.data.permalink;
          });
        }
      )
    }
  );
  //REDDIT 3
  $.getJSON(redditTheme[x],
    function foo(data) {
      //Retrieve 3rd Post
      $.each( 
        data.data.children.slice(4, 5),
        function (i, post) {

          //Check title length
          var title = post.data.title;
          if (title.length > 40) {
            title = title.substr(0,40)+'...';
          }

          //Transform date into human readable form
          var myDate = new Date( post.data.created *1000);
          var weekday = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ];
          var week = weekday[myDate.getDay()];

          var monthNumber = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ];
          var month = monthNumber[myDate.getMonth()];

          var monthDay = myDate.getDate();

          //Print reddit info
          $(".reddit-title:eq(2) p").text(week + ', ' + month + ' ' + monthDay);
          $(".reddit-title:eq(2) h2").text(post.data.subreddit);
          $(".reddit-post:eq(2) h2").text(title);
          $(".reddit-post:eq(2)").css("background", "url(" + post.data.url + ")");
          $(".reddit-post:eq(2)").click(function() {
            window.location = "http://reddit.com" + post.data.permalink;
          });
        }
      )
    }
  );
};



//LOAD RANDOM QUOTES
$( document ).ready(function() {
  loadQuotes();//Trigger loadQuotes() on page load.
});

function loadQuotes(){
  $.getJSON("https://talaikis.com/api/quotes/random/", function(data){
    //Check Quote length
    var quote = data.quote;
    if (quote.length > 80) {
      quote = quote.substr(0,80)+'...';
    }
    $("#profile p").text(quote);
    $("#profile h5").text(data.author);
  });
};