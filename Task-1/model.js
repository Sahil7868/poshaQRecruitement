var mongoose=require('mongoose');


const schemaofCategory = mongoose.Schema({
    category: {
        type: String   
    }

});

const modelofCategory = mongoose.model('categories', schemaofCategory);
exports.modelofCategory = modelofCategory;

exports.findCategory=()=>{
    return modelofCategory.find();
}