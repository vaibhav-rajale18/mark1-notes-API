function loadNotes() {
  fetch("/api/notes")
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("notes");
      list.innerHTML = "";

      data.forEach(note => {
        const li = document.createElement("li");
        li.innerHTML = `
          <strong>${note.title}</strong><br/>
          ${note.content}<br/>
          <small>${new Date(note.createdAt).toLocaleString()}</small><br/>

          <button onclick="deleteNote('${note._id}')">Delete</button>
          <button onclick="editNote('${note._id}', '${note.title}', '${note.content}')">
            Edit
          </button>
        `;
        list.appendChild(li);
      });
    });
}

function createNote() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (!title || !content) {
    alert("Please fill both fields");
    return;
  }

  fetch("/api/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content }),
  })
    .then(() => {
      document.getElementById("title").value = "";
      document.getElementById("content").value = "";
      loadNotes();
    });
}

function deleteNote(id) {
  fetch(`/api/notes/${id}`, { method: "DELETE" })
    .then(() => loadNotes());
}

function editNote(id, oldTitle, oldContent) {
  const title = prompt("Edit title", oldTitle);
  const content = prompt("Edit content", oldContent);

  if (!title || !content) return;

  fetch(`/api/notes/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content }),
  })
    .then(() => loadNotes());
}

// auto load
loadNotes();
