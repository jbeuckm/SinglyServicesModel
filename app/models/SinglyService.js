exports.definition = {
 
    config: {
        "columns": {
            id: "TEXT",
            name: "TEXT",
            description: "TEXT",
            key: "TEXT",
            secret: "TEXT",
            
            sandbox: "INTEGER",
            hasTestKeys: "INTEGER",
            
            icon_16: "TEXT",
            icon_24: "TEXT",
            icon_32: "TEXT",
            icon_48: "TEXT",
            icon_64: "TEXT",
            icon_128: "TEXT",
            icon_256: "TEXT",
            icon_512: "TEXT",
            icon_1024: "TEXT"

        },
        "defaults": {

        },
        "adapter": {
            type: "singlyServiceAdapter",
            collection_name: "SinglyServices"
        }
    },      
 
    extendModel: function(Model) {      
        _.extend(Model.prototype, {
 
            idAttribute: 'id'
        }); // end extend
 
        return Model;
    },
 
 
    extendCollection: function(Collection) {        
        _.extend(Collection.prototype, {
 
            // extended functions go here           

        }); // end extend
 
        return Collection;
    }
 
};
