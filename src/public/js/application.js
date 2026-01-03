let editingNoteId = null;

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

          <button onclick="showDeleteConfirm('${note._id}')">Delete</button>
          <button onclick="startEditNote('${note._id}', '${note.title}', '${note.content}')">
            Edit
          </button>

          <div id="confirm-${note._id}" style="display:none; margin-top:6px;">
            <span>Are you sure you want to delete this note ?</span>
            <button onclick="confirmDelete('${note._id}')">Yes</button>
            <button onclick="hideDeleteConfirm('${note._id}')">Cancel</button>
          </div>
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

  // ✏️ EDIT MODE
  if (editingNoteId) {
    fetch(`/api/notes/${editingNoteId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    }).then(() => {
      resetForm();
      loadNotes();
    });
    return;
  }

  // 🆕 CREATE MODE
  fetch("/api/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content }),
  }).then(() => {
    resetForm();
    loadNotes();
  });
}

function startEditNote(id, title, content) {
  document.getElementById("title").value = title;
  document.getElementById("content").value = content;

  editingNoteId = id;

  const btn = document.getElementById("createBtn");
  btn.textContent = "Update Note";
  btn.style.backgroundColor = "#f59e0b";
}

/* 🔴 DELETE CONFIRM LOGIC (INLINE) */

function showDeleteConfirm(id) {
  document.getElementById(`confirm-${id}`).style.display = "block";
}

function hideDeleteConfirm(id) {
  document.getElementById(`confirm-${id}`).style.display = "none";
}

function confirmDelete(id) {
  fetch(`/api/notes/${id}`, { method: "DELETE" })
    .then(() => loadNotes());
}

function resetForm() {
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";

  editingNoteId = null;

  const btn = document.getElementById("createBtn");
  btn.textContent = "Create Note";
  btn.style.backgroundColor = "";
}

// auto load
loadNotes();
