require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/db");

const PORT = process.env.PORT || 3000;

// connect database
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// to run this on browser use this url 
// http://localhost:3000
