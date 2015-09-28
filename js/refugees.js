
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
			var percent   = Math.round(100*finished/all);
			if(call)
				call(remaining, finished);
			else{
				$("#geoprozess").width(percent+'%');
				var text = 'Noch '+remaining+' ohne Internet!';
				$("#geoprozess").text(text);
			}
		}
});
}
