const { model, Schema } = require("mongoose");

const meetingSchema = Schema({
  name: { type: String, required: true },
  type: [
    {
      type: String,
    },
  ],
  date: { type: Date, required: true },
  created_at: { type: Date, default: Date.now },
  created_by: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  invitations: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

meetingSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id, delete returnedObject.__v;
  },
});

const Meeting = model("Meeting", meetingSchema);

module.exports = Meeting;
