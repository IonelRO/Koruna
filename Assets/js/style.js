/***************** Fixed Header ******************/
$(document).ready(function() {
  var s = $("#sticker");
  var pos = s.position();            
  $(window).scroll(function() {
    var windowpos = $(window).scrollTop();
    if (windowpos >= pos.top) {
      s.addClass("stick");
    } else {
      s.removeClass("stick"); 
    }
  });
  
	$('#project-container').mixItUp({
	  load: {
		sort: 'order:asc'
	  },
	  animation: {
		effects: 'fade rotateZ(-180deg)',
		duration: 700
	  },
	  selectors: {
		target: '.mix',
		filter: '.filter'
	  },
	  callbacks: {
		onMixEnd: function(state){
		  console.log(state)
		}
	  }
	});
	
	$('#portfolio-container').mixItUp({
      load: {
        sort: 'order:asc'
      },
      animation: {
        effects: 'fade rotateZ(-180deg)',
        duration: 700
      },
      selectors: {
        target: '.mixit',
        filter: '.filters'
      },
      callbacks: {
        onMixEnd: function(state){
          console.log(state)
        }
      }
    });
	 
  var btt=$('#back-to-top');
  btt.on('click',function(){
    $('html,body').animate({
      scrollTop:0
    },2000);
    e.preventDefault();
  });
  $(window).on('scroll',function(){
    var self=$(this),
      height=self.height(),
      top=self.scrollTop();
    if (top>height) {
      if (!btt.is(':visible')) {
        btt.fadeIn(1000);
      }
    } else{
      btt.hide();
    }
  });
  
});