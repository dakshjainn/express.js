const express = require('express');
const app = express();
let courses = [
    {id:1, name: "java"},
    {id:1, name: "javascript"},
    {id:1, name: "python"},
];
app.get('/', (req, res) => {
    res.json(courses);
});
app.post('/', (req, res) => {
    res.json(courses);
});
app.put('/', (req, res) => {
    res.json(courses);
});

app.listen(3000, () => console.log('Listening on port 3000...'));