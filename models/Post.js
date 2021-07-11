const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    img: {
        type: Array,
        require: true
    },
    typeSell: {
        type: String,
        require: true
    },
    typeBuild: {
        type: String,
        require: true
    },
    countRooms: {
        type: String
    },
    description: {
        type: String,
        require: true
    },
    longDescription: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    }
});


module.exports = mongoose.model('Posts', PostSchema);
