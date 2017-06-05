$(document).ready( function() {

  // 28 colors
  var colors = [
    "#afc09b", "#018273", "#4a49aa", "#dc6d9d", "#554f7a", "#a1a729", "#f4cf35",
    "#32f5cc", "#d60761", "#09f9d0", "#288969", "#71fb27", "#6fd6d9", "#3498c4",
    "#314e1d", "#941fa1", "#7b42a3", "#087bb6", "#830547", "#eb9a33", "#56b7d8",
    "#a9924e", "#bf7c1e", "#3c490d", "#86cd47", "#3adb1e", "#b47cf9", "#63a03e"
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
        
        $("html body").animate({
          backgroundColor: randomColor
        });
        
        $("#newQuote").animate({
          color: randomColor
        }, 1000);
        
        $(".button").animate({
          backgroundColor: randomColor
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