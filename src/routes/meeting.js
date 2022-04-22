const express = require("express");
const { loginRequired } = require("../controllers/auth");
const {
  getMeetings,
  myMeetings,
  createMeeting,
  sendIvitation,
  getMeeting,
} = require("../controllers/meeting");

const meetingRouter = express.Router();

meetingRouter.get("/", getMeetings);

meetingRouter.get("/:id", getMeeting);

meetingRouter.get("/my-meetings", loginRequired, myMeetings);

meetingRouter.post("/", loginRequired, createMeeting);

meetingRouter.post("/invitation", loginRequired, sendIvitation);

module.exports = meetingRouter;
