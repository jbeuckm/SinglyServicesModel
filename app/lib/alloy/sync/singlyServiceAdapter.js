
module.exports.sync = function(method, model, options) {

    switch (method) {

        case "read":
            if (model.id) {
                options.error('read singular service not implemented');
                break;
            }


            var xhr = Ti.Network.createHTTPClient({

                onload: function() {
                    if (this.status == 200) {
                        var resp = JSON.parse(this.responseText);

                        var results = [];
                        
                        for (var i in resp) {
                            var d = resp[i];
                            
                            var obj = {
                                id: i,
                                name: d.name,
                                description: d.desc,
                                key: d.key,
                                secret: d.secret,
                            };
                            
                            for (var j in d.icons) {
                                var icon = d.icons[j];
                                obj["icon_"+icon.height] = icon.source;
                            }

                            results.push(obj);
                        }

                        options.success(results);

                    } else {
                        options.error('There was a problem loading singly services list.');
                    }
                    
                },
                
                onerror: function(err) {
                    Ti.API.error(JSON.stringify(err));
                }
            });

            var url = 'https://api.singly.com/services';
            xhr.open('GET', url);
            Ti.API.info("will now GET " + url);
            xhr.send();

            break;
            
            
        case "create":
            options.error('create service not implemented');
            break;
        case "update":
            options.error('update service not implemented');
            break;
        case "delete":
            options.error('delete service not implemented');
            break;
    }
};




