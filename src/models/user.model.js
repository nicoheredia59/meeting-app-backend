const { model, Schema } = require("mongoose");

const userSchema = Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  created_meeting: [
    {
      type: Schema.Types.ObjectId,
      ref: "Meeting",
    },
  ],
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    // returnedObject.user_id = returnedObject._id; ==> replace to be more specific
    returnedObject.id = returnedObject._id;
    delete returnedObject._id,
      delete returnedObject.__v,
      delete returnedObject.password;
  },
});

const User = model("User", userSchema);

module.exports = User;
