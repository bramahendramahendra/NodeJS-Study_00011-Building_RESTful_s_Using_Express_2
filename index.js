const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    {id: 1, name: 'courses1'},
    {id: 2, name: 'courses2'},
    {id: 3, name: 'courses3'},
];

// 2 parameter router 
app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.query);
});
 
// older courses 
app.get('/api/courses', (req, res) => {
    res.send(courses);
});

// all courses 
app.get('/api/courses/:id', (req, res) => {
    var course = courses.find(c => c.id === parseInt(req.params.id));
    // 404
    if (!course) res.status(404).send('The course with the given ID was not found.');
    res.send(course);
});

app.post('/api/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

// PORT 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));