const mongoose = require('mongoose');

const labelSchema = mongoose.Schema({
    labelName: {
        type: String,
        required: true
       
    }

});

const labelModel = mongoose.model('label', labelSchema);
exports.labelModel = labelModel

exports.createLabel = (label) => {
    return labelModel.create(label)
}

exports.deleteLabel = (id) => {
    return labelModel.findByIdAndRemove({
        _id: id
    }).exec()
}

exports.editLabel = (id, label) => {
    return labelModel.findByIdAndUpdate({
        _id: id
    }, label)
}