import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Backend Bengapers funcionando 🚀");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});