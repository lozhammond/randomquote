
$(document).ready(function() {

    $("#getQuote").on("click", function(){
      $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random", function(json) {
       	var html = "";
       	var linkText = json.quote + " - ";
       	$("#postTwitter").attr("href", "https://twitter.com/intent/tweet?text=" + linkText + json.author);
       	html += "<strong>" + json.quote + "</strong>";
        if (json.author.length == 0) {
        	html+= "- Unknown";
        }
        else {
        	html += " - " + json.author;
        }

        $("#quote").html(html);
      });
      
    });

    

  });
