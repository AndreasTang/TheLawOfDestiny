const mongoose =require('mongoose')

const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    skillType: {
        type: String,
        required: true,
        trim: true,
    },
    coolDown: {
        type: Number,
        default: 0
    },
    desc: {
        type: String,
        trim: true,
    },
})

const Skills = mongoose.model('Skills', skillSchema)

module.exports = Skills