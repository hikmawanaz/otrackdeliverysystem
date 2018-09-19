var mongoose = require('mongoose');  
var ResiSchema = new mongoose.Schema({  
    idResi : { type : String, required : true },
    namaPenerima : { type : String, required : true },
    alamatPenerima : { type : String, required : true },
    telpPenerima : { type : String, required : true },
    jenisBarang : { type : String, required : true },
    harga : { type : String, required : true },
    berat : { type : String, required : true },
    namaPengirim : { type : String, required : true },
    telpPengirim : { type : String, required : true },
    alamatPengirim : { type : String, required : true },
    idCounter : { type : String, required : true },
	created_at : { type : Date, default: Date.now },
	updatedAt : { type : Date, default: Date.now }
}

);
mongoose.model('Resi', RecordSchema);

module.exports = mongoose.model('Resi');