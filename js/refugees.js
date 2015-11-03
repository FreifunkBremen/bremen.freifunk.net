
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
			var remaining = 0;
			for(var i=0;i<data.features.length;i++){
				var item = ata.features[i];
				if(item.Anzahl){
					remaining += item.Anzahl;
				}else{
					remaining++;
				}
			}
			var finished  = data.versorgt;
			var all       = finished+remaining
			if(callback)
				callback(finished, all);
		}
	});
}
