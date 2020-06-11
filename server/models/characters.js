const mongoose =require('mongoose')

const charactersSchema = new mongoose.Schema({
    avatar: {
        type: Buffer
    },
    sortNum: {
        type: Number,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    rarity: {
        type: String,
        default: '-',
        trim: true
    },
    job: {
        type: String,
        default: '-',
        trim: true
    },
    race: {
        type: String,
        default: '-'
    },
    team: {
        type: String,
        default: '-'
    },
    constitution: {
        type: Number
    },
    agility: {
        type: Number
    },
    intelligence: {
        type: Number
    },
    strength: {
        type: Number
    },
    healthPoint: {
        type: Number
    },
    defence: {
        type: Number
    },
    attack: {
        type: Number
    },
    attackSpeed: {
        type: Number
    },
    criticalChance: {
        type: Number
    },
    criticalBonus: {
        type: Number
    },
    criticalResistance: {
        type: Number
    },
    hitChance: {
        type: Number
    },
    evasion: {
        type: Number
    },
    blockChance: {
        type: Number
    },
    blockDamgeReduce: {
        type: Number
    },
    movingSpeed: {
        type: Number
    },
    cooldown: {
        type: Number
    },
    waterfireResistance: {
        type: Number
    },
    fireResistance: {
        type: Number
    },
    lightingResistance: {
        type: Number
    },
    darkResistance: {
        type: Number
    },
    holyResistance: {
        type: Number
    }, 
    characterSkill: {
        type: String,
        default: '-',
        trim: true
    },
    normalSkill: {
        type: String,
        default: '-',
        trim: true
    },
    specialSkill: {
        type: String,
        default: '-',
        trim: true
    },
    activeSkill: {
        type: Array,
        default: ['-'],
        trim: true
    },
    passiveSkill: {
        type: Array,
        default: ['-'],
        trim: true
    },
    bondingSkill: {
        type: Array,
        default: ['-'],
        trim: true
    },
})

const Characters = mongoose.model('Characters', charactersSchema)

module.exports = Characters