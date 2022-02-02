const Projects = require('../mongoDB/accessProjects');

async function list(req, res) {
    try {
        const projects = await Projects.find();
        res.json(projects);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

async function read(req, res) {
    try {
        const found = await Projects.find({ languages: req.params.language });
        res.json(found)
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

module.exports = {
    list,
    read
}