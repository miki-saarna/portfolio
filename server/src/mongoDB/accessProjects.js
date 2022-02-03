require("dotenv").config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database!'));

const ProjectSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    github_link: {
        type: String
    },
    image: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    languages: {
        type: Array
    }
})

// ProjectSchema.methods.findSelect = function (code) {
//     return mongoose.model('accessToken').find({ item_id: })
// }

const projects = mongoose.model('projects', ProjectSchema)

// module.exports = mongoose.model('accessToken', accessTokenSchema);
module.exports = projects;