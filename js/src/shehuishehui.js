var sloganIdx = 0;
jQuery( document ).ready(function($){
	$("body").click(function(e) {
		var x = e.pageX, y = e.pageY;
		var slogans = new Array(
			"富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善"
			);
		var $i = $("<span/>").text( slogans[sloganIdx] );
		sloganIdx = (sloganIdx + 1) % slogans.length;
		$i.css({ 
			"z-index": 99999, 
			"top": y - 20, 
			"left": x, 
			"position": "absolute", 
			"font-weight": "bold", 
			"color": "#ff6651",
			"pointer-events": "none"
		}); 
		$("body").append($i); 
		$i.animate({ "top": y - 180, "opacity": 0 }, 1500, function() { 
			$i.remove(); 
		}); 
	});
});