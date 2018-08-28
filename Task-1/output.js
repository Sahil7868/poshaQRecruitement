var mongoose=require('mongoose');
var model=require('./model.js');
// Load the lodash libery
var _ = require('lodash');


function submission (client, dbName, collectionName, bucketSize)  { 

const connection = 'mongodb://'+client+'/'+dbName;

    (async () => {
        const client = await mongoose.connect(connection,{ useNewUrlParser: true });

        try {
          var res;
            model.findCategory().then((data)=>{
        let categories = {}
        data.map(a => {
          categories[a.category] = [...(categories[a.category] || []), a._id]
        })
        Object.keys(categories).map(b => {
            let cat = {
              category: b,
              id:categories[b]
            }   
            console.log(cat.category);
            console.log(_.chunk(cat.id,bucketSize));
          
          })
        
            }).catch(err=>{
                console.log(err);
            })

                
                
        }
        finally {
            
        }
    })() .catch(err => console.error(err));
}
submission("localhost:27017","Lodash","categories",2);

