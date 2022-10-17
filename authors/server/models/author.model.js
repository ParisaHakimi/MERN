const mongoose = require("mongoose");
const AuthorSchema = mongoose.Schema(
  {
    authorName: {
      type: String,
      required: [true, "Name is required"],
      minLength: [3, "Name must be at least 3 characters"],
    },
    petType: { type: String, enum: ["dog", "cat", "fish"] },
    isLiked: { type: Boolean },
  
    // skills: {
    //   type: String,
    //   enum: ["Free", "Basic", "premium", "apple"],
    //   required: function () {
    //     return this.skillNum <= 3;
    //   },
    // },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Author", AuthorSchema);
