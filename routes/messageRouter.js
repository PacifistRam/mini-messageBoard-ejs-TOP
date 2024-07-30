const { Router } = require("express");

const messageRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

messageRouter.get("/", (req, res) => {
  const sortedMessages = [...messages].sort((a, b) => b.added - a.added);
  res.render("index", {
    title: "Mini Message board",
    messages: sortedMessages,
  });
});
messageRouter.get("/new", (req, res) =>
  res.render("newMessage", {
    title: "Create new Message",
  })
);

messageRouter.post("/new", (req, res) => {
  const message = req.body.message;
  const userName = req.body.user;

  if (message && userName) {
    messages.push({
      text: message,
      user: userName,
      added: new Date(),
    });
    res.redirect("/");
  } else console.log("fields Are empty");
});

module.exports = messageRouter;
