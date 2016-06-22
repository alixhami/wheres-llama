

$(document).ready(function(){
	$('#button1').click(function(){
  	$('.even').hide();
  });
});

$(document).ready(function(){
	$('#button2').click(function(){
  	$('.odd').hide();
  });
});

$(document).ready(function(){
	$('.odd').on({
  	mouseenter: function(){
    	$(this).css("background-color","red");
    },
    mouseleave: function(){
    	$(this).css("background-color","lightgray");
    }
  });
});

$(document).ready(function(){
	$('.even').on({
  	mouseenter: function(){
    	$(this).css("background-color","red");
    },
    mouseleave: function(){
    	$(this).css("background-color","black");
    }
  });
});

$(document).ready(function(){
	$('#secret').mouseenter(function(){
  	$('img').css("visibility","visible");
    $('h2').css("visibility","visible");
  });
});
