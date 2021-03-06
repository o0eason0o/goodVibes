const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
	dispensary: String,
	img: String,
	name: String,
	type: String,
	cost: Number,
	description: String,
	rating: Number,
	totalRatings: Number,
	moods: {
		happy: Number,
		relaxed: Number,
		euphoric: Number,
		giggy: Number
	},
	addedToCart: Boolean,
	canAddToCart: Boolean,
	images: [ String ]
});

global.FakeProduct = mongoose.model('FakeProduct', ProductSchema);
