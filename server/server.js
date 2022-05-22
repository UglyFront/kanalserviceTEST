const express = require("express");
const cors = require("cors");
const app = express()
const router = require("./routers/routerTable")

const PORT = 8877;


app.use(cors({
    origin: "*"
}))


app.use(express.json())
app.use("/api", router)



app.listen(PORT, () => {
    console.log(`server start on ${PORT}`)
})