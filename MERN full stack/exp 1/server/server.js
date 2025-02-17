const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const users = []; // Temporary storage (Use MongoDB in production)

app.post("/register", (req, res) => {
    const { name, email, password, company } = req.body;
    
    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    users.push({ name, email, password, company });
    res.json({ message: "User registered successfully!" });
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
