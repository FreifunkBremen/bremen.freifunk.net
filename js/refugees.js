
var geoProzess = function(call){
	$.ajax({
		url:"/refugees.geojson",
		beforeSend: function(xhr){
			if (xhr.overrideMimeType)
			{
				xhr.overrideMimeType("application/json");
			}
		},
		dataType: 'json',
		contentType: 'application/json',
		mimeType: "textPlain",
		success: function(data){
			var remaining = data.features.length;
			var finished  = data.versorgt;
			var all       = finished+remaining
			if(call)
				call(remaining, finished);
			else{
				$("#wifi-finished").width(Math.round(100*finished/all)+'%').text(finished+' haben Internet');
				$("#wifi-remaining").width(Math.round(100*remaining/all)+'%').text('Noch '+remaining+' ohne Internet');
			}
		}
});
}
