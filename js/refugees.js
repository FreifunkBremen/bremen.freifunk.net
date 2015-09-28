
var geoProzess = function(callback){
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
			if(callback)
				callback(remaining, finished);
});
}
