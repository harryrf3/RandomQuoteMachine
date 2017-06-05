$(document).ready( function() {

  var colors = [
    "#C9D20D", "#6337E7", "#62A1EB", "#667C9E", "#8095D1",
    "#06A38E", "#2FB85C", "#92A2C6", "#CD5252", "#178865",
    "#E0B484", "#876DBD", "#EFC773", "#82BA89", "#779F24",
    "#AFC09b", "#bfc62d", "#a9924e", "#63C98A", "#938F86"
  ];
  
  

  function randomQuote() {
    $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function (response) {
        $("#newQuote").html('<p id="newQuote">' + response.quoteText + '<br/>&#126; ' + response.quoteAuthor + '</p>');
        $("#quoteSocial").attr("href", "https://twitter.com/home/?status=" + response.quoteText + " by " + response.quoteAuthor);

        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        $("#newQuote").animate({
          color: "#eee"
        }, 2);
        
        $("html body").animate({
          backgroundColor: randomColor
        });
        
        $(".button").animate({
          backgroundColor: randomColor
        }, 1000);
        
        $("#newQuote").animate({
          color: randomColor
        }, 1000);
        
      }
    });
  }

  $(function () {
    randomQuote();
  });

  $("button").click(function () {
    randomQuote();
  });

});