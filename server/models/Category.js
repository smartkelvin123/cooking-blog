const mongoose = require("mongoose");
const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: "this flied is required",
  },
  image: {
    type: String,
    required: "this flied is required",
  },
});

module.exports = mongoose.model("category", CategorySchema);
