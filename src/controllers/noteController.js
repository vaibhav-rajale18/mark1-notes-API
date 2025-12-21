const Note = require("../models/Note");

// GET all notes
const getNotes = async (req, res) => {
  const notes = await Note.find().sort({ createdAt: -1 });
  res.json(notes);
};

// CREATE note
const createNote = async (req, res) => {
  const { title, content } = req.body;
  const note = await Note.create({ title, content });
  res.status(201).json(note);
};

// DELETE note
const deleteNote = async (req, res) => {
  const note = await Note.findByIdAndDelete(req.params.id);

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  res.json({ message: "Note deleted successfully" });
};

// UPDATE note
const updateNote = async (req, res) => {
  const { title, content } = req.body;

  const note = await Note.findByIdAndUpdate(
    req.params.id,
    { title, content },
    { new: true }
  );

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  res.json(note);
};

module.exports = {
  getNotes,
  createNote,
  deleteNote,
  updateNote,
};
