
$(document).ready(function(){
	var geoProzess = function(call){
		$.getJSON("/refugees.geojson",{},function( data ) {
			var all = data.features.length;
			var count = $.grep(data.features,function(i){
					return (i.properties.Status == "versorgt");
			}).length;
			prozet = Math.round(100*count/all);
			if(call)
				call(count,all);
			else{
				$("#geoprozess").width(prozet+'%');
				$("#geoprozess").text(prozet+'% Complete');
			}
	} );
	}
	geoProzess();
});
