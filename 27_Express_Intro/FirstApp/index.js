const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("We got a new request!!!!")
//     res.send({ color: 'red' })
// })

app.get("/", (req, res) => {
    res.send("Welcome to the home page!!!")
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`)
})

app.post('/cats', (req, res) => {
    res.send('POST request to /cats')
})

app.get('/cats', (req, res) => {
    res.send("MEOW!!")
})

app.get('/dogs', (req, res) => {
    res.send("WOOF!!")
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send("NOTHING FOUND")
    }
    res.send(`<h1> Search request for : ${q}</h1>`)
})

app.get('*', (req, res) => {
    res.send("I don't know that path")
})

app.listen(8080, () => {
    console.log("Listening on port 8080!")
})