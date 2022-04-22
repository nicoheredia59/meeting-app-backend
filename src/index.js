const app = require("./config/app");
const connection = require("./config/connection");
const authRouter = require("./routes/auth");
const meetingRouter = require("./routes/meeting");

connection();

app.use("/api/auth", authRouter);
app.use("/api/meeting", meetingRouter);

app.listen({ port: process.env.PORT || 4000 }, () => {
  console.log(`server running on http://localhost:4000`);
});
