# 📘 Mark-1 Notes API

A beginner-friendly **Notes REST API** built using **Node.js, Express, MongoDB Atlas, and Mongoose**, following clean backend architecture with a simple frontend viewer.

---

## 🚀 Features

- ✅ Create notes  
- ✅ Read all notes  
- ✅ Update existing notes  
- ✅ Delete notes  
- ✅ MongoDB Atlas (Cloud Database)  
- ✅ MongoDB Compass integration  
- ✅ Clean folder structure (MVC style)  
- ✅ Frontend separated into HTML, CSS, and JavaScript  

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas  
- **ODM:** Mongoose  
- **Frontend:** HTML, CSS, Vanilla JavaScript  
- **Tools:** Git, GitHub, Postman, MongoDB Compass  

---

## 📂 Project Structure

mark1-notes-api/
│
├── src/
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ └── noteController.js
│ ├── models/
│ │ └── Note.js
│ ├── routes/
│ │ └── noteRoutes.js
│ ├── views/
│ │ └── index.html
│ └── public/
│ ├── css/
│ │ └── style.css
│ └── js/
│ └── app.js
│
├── server.js
├── package.json
├── .env
└── .gitignore

yaml
Copy code

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|------|---------|-------------|
| GET | `/api/notes` | Fetch all notes |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

MONGO_URI=your_mongodb_atlas_connection_string
PORT=3000






---

## ▶️ How to Run Locally

### 1️⃣ Clone the repository
```bash
cd mark1-notes-API
npm install
```
## 2️⃣ Setup environment variables
Create a ```.env``` file in the project root

Refer to ```.env.example``` for required variables

Example:

env
Copy code
```
PORT=3000
MONGO_URI=your_mongodb_connection_string_here
```
## 3️⃣ Start the server
```bash
npm start
```
Then open in your browser:

arduino
```Copy code
http://localhost:3000
```

---
## 📌 Learning Outcomes

- REST API design  
- MVC architecture in Express  
- MongoDB Atlas + Compass usage  
- CRUD operations using Mongoose  
- Frontend–backend integration  
- Git & GitHub workflow  

---

## 🔮 Future Enhancements

- User authentication (JWT)  
- Search & pagination  
- Better UI with React  
- Deployment to cloud (Render / Railway)  

---

## 👨‍💻 Author

**Vaibhav Rajale**  
Computer Engineering Student  
Aspiring Backend / Full Stack Developer  

---

## ⭐ Final Note

This project is part of my learning journey to master backend development and build production-ready applications and learn Full Mern Stack development.
