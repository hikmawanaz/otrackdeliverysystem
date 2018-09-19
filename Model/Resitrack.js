var mongoose = require('mongoose');  
var ResitrackSchema = new mongoose.Schema({  
    idResi : { type : String, required : true },
    statusTrack : { type : String, required : true },
    detailTrack : { type : String, required : true },
	created_at : { type : Date, default: Date.now },
	updatedAt : { type : Date, default: Date.now }
}

);
mongoose.model('Resitrack', RecordSchema);

module.exports = mongoose.model('Resitrack');