const getNotes = (req, res) => {
  res.json([
    { title: "First Note", content: "This is my first note" },
    { title: "Second Note", content: "Learning backend is fun" }
  ]);
};

module.exports = { getNotes };
