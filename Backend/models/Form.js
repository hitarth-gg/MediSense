const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
	},
	sex: {
		type: String,
	},
	pastHistory: {
		type: String,
	},
	durationOfSymptoms: {
		type: String,
	},
	physicalExamination: {
		type: String,
	},
	presentCase: {
		type: String,
	},
	remarks: {
		type: String,
	},
	status: {
		type: String,
		default: "Pending",
	},
});

module.exports = mongoose.model("Form", formSchema);
