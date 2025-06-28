import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import notesRoutes from "./routes/notesRoutes.js";
import rateLimiter from "./middleware/rateLimiter.js";
import {connectdb} from "./config/db.js";
// connectdb(); first runs the program and then connects to db (not the best method)

dotenv.config();
const app = express();
//const express = require("express");
const PORT = process.env.PORT
const __dirname = path.resolve()

//middleware
if(process.env.NODE_ENV !== "production"){
    app.use(cors({
        origin:"http://localhost:5173",
    }));
}

app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use(rateLimiter);


// our simple custom middleware
// app.use((req, res, next)=>{
//     console.log(`Req metod: ${req.method} & Req URL: ${req.url}`);
//     next();
// });

app.use("/api/notes/", notesRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist"))); //tell backend server to serve static files build folder.

    app.get("*", (req,res)=>{
        res.sendFile(path.join(__dirname, "../frontend","dist","index.html"));
})
}
// app.get("/api/notes", (req, res) =>{
//     //delete a note
//     res.status(200).send("you got 20 notes"); // 200 : OK - everything worked as expected
// });
// app.post("/api/notes", (req, res) => {
//     res.status(201).json({message:"post created successfully"})
// });
// app.put("/api/notes/:id", (req, res) =>{
//     res.status(200).json({message: "Post updated successfully!"})
// });
// app.delete("/api/notes/:id", (req, res) =>{
//     res.status(200).json({message: "Note deleted successfully!"})
// });
connectdb().then(() =>{
    app.listen(PORT, ()=>{
        console.log("[+]Listening to port 5001.");
    });
});