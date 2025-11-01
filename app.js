const express = require("express")
const path = require("path")

const app = express()
const PORT = process.env.PORT || 3000

// Set EJS as templating engine
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

// Middleware
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
app.get("/", (req, res) => {
  res.render("index", {
    title: "NIMMS - Nesodden IM Makerspace",
    description: "Skaperglede, teknologi og fellesskap for ungdom 14–24 år på Nesodden",
  })
})

// Contact form endpoint (placeholder)
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body
  console.log("Contact form submission:", { name, email, message })
  res.json({ success: true, message: "Takk for din henvendelse! Vi tar kontakt snart." })
})

// Start server
app.listen(PORT, () => {
  console.log(`NIMMS server running on http://localhost:${PORT}`)
})
