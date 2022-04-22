const { findOneAndUpdate } = require("../models/meeting.model");
const Meeting = require("../models/meeting.model");
const User = require("../models/user.model");

exports.getMeetings = async (req, res) => {
  const meetings = await Meeting.find({})
    .populate("created_by")
    .populate("invitations");

  return res.status(200).json(meetings);
};

exports.getMeeting = async (req, res) => {
  const { id } = req.params;

  const meeting = await Meeting.findById(id);

  if (!meeting) {
    return res.status(400).json({ message: "Id malformed" });
  }

  return res.status(200).json(meeting);
};

exports.myMeetings = async (req, res) => {
  const { id } = req.session.user;

  const findUser = await User.findById(id).populate("created_meeting");

  const findMeetings = await Meeting.find({});

  return res.status(200).json({ message: "success", user: findUser });
};

exports.createMeeting = async (req, res) => {
  const { id } = req.session.user;

  const me = await User.findById(id);

  const meeting = await Meeting.create({
    ...req.body,
    created_by: me,
  });

  return res.status(201).json(meeting);
};

exports.sendIvitation = async (req, res) => {
  const { id, invitations } = req.body;
  const updatedMeeting = {
    ...req.body,
    invitations,
  };

  const createInvitation = await Meeting.findOneAndUpdate(id, updatedMeeting, {
    new: true,
  });

  return res.status(200).json(createInvitation);
};

exports.updateMeeting = async (req, res) => {
  const { id } = req.body;

  const updateMeeting = await findOneAndUpdate({ id, ...req.body });

  return res.status(200).json({ updateMeeting });
};

exports.deleteMeeting = async (req, res) => {};
