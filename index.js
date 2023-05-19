const express = require("express")

const app = express()
const port = process.env.X_ZOHO_CATALYST_LISTEN_PORT || 9000;

app.use(express.json())
app.get("/" ,(req, res) => {
    res.send("hello");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`http://localhost:${port}/`);
  })

module.exports = app