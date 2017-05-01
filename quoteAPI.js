
$(document).ready(function() {

    $("#getQuote").on("click", function(){
      $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en", function(json) {
       	var html = "";
       	var linkText = json.quoteText + " - ";
       	$("#postTwitter").attr("href", "https://twitter.com/intent/tweet?text=" + linkText + json.quoteAuthor);
       	html += "<strong>" + json.quoteText + "</strong>";
        if (json.quoteAuthor.length == 0) {
        	html+= "- Unknown";
        }
        else {
        	html += " - " + json.quoteAuthor;
        }

        $("#quote").html(html);
      });
      
    });

    

  });
