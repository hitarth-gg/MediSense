const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	presentCase: {
		type: String,
	},
});

module.exports = mongoose.model("Form", formSchema);
