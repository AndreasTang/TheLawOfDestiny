import React, { useState } from 'react'
import { Box, Container, TextField, Divider, MenuItem, Paper, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import backgroundImage from '../pic/狸兮opacity0.2.jpg'

const rarity = ['SSR', 'SR', 'R']
const job = ['勇者', '遊俠', '魔導師', '守護者', '吟誦者']
const race = ['深淵族', '精靈族', '泰坦族', '小人族', '古特族', '鬼族', '未知', '龍族', '獸族', '星界人族', '地球人族', '人造生命', '亞古族', '小惡魔族']
const team = ['至高議會', '深淵', '榮光組織', '神之裁決', '鋼鐵之心', '地球', '機關島', '天空商會', '不夜湖', '魔偶之家', '龍島', '黎明守望', '咕嚕島', '暮組織']

const useStyles = makeStyles(() => ({
    box: {
        minHeight: '84vh',
        backgroundColor: '#d9d9d9',
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        paddingTop: 20,
        paddingBottom: 20
    },
    paper: {
        width: '100%',
        padding: 20
    },
    textField: {
        marginTop: 10,
        marginRight: 20,
        marginBottom: 20
    },
    divider: {
        marginTop: 10,
        marginBottom: 10
    },
    textFieldSelect: {
        marginTop: 10,
        marginRight: 20,
        marginBottom: 20,
        minWidth: 100
    },
    menuItem: {
        minHeight: 30
    },
    button: {
        marginTop: 10,
        marginBottom: 20
    }
}))

const rawData = {
    avatar: '',
    sortNum: '',
    name: '',
    rarity: '',
    job: '',
    race: '',
    team: '',
    constitution: '',
    agility: '',
    intelligence: '',
    strength: '',
    healthPoint: '',
    defence: '',
    attack: '',
    attackSpeed: '',
    criticalChance: '',
    criticalBonus: '',
    criticalResistance: '',
    hitChance: '',
    evasion: '',
    blockChance: '',
    blockDamgeReduce: '',
    movingSpeed: '',
    cooldown: '',
    waterfireResistance: '',
    fireResistance: '',
    lightingResistance: '',
    darkResistance: '',
    holyResistance: '', 
    characterSkill: '',
    normalSkill: '',
    specialSkill: '',
    activeSkill: [],
    passiveSkill: [],
    bondingSkill: ''
}

const errorState = {
    name: {
        value: true,
        helperText: '姓名不得為空'
    },
    rarity: {
        value: true,
        helperText: '需選擇一種'
    },
    job: {
        value: true,
        helperText: '需選擇一種'
    },
    race: {
        value: true,
        helperText: '需選擇一種'
    },
    team: {
        value: true,
        helperText: '需選擇一種'
    },
    constitution: {
        value: true,
        helperText: '必須為數字'
    },
    agility: {
        value: true,
        helperText: '必須為數字'
    },
    intelligence: {
        value: true,
        helperText: '必須為數字'
    },
    strength: {
        value: true,
        helperText: '必須為數字'
    },
    healthPoint: {
        value: true,
        helperText: '必須為數字'
    },
    defence: {
        value: true,
        helperText: '必須為數字'
    },
    attack: {
        value: true,
        helperText: '必須為數字'
    },
    criticalChance: {
        value: true,
        helperText: '必須為數字'
    },
    criticalBonus: {
        value: true,
        helperText: '必須為數字'
    },
    criticalResistance: {
        value: true,
        helperText: '必須為數字'
    },
    evasion: {
        value: true,
        helperText: '必須為數字'
    },
    waterfireResistance: {
        value: true,
        helperText: '必須為數字'
    },
    fireResistance: {
        value: true,
        helperText: '必須為數字'
    },
    lightingResistance: {
        value: true,
        helperText: '必須為數字'
    },
    darkResistance: {
        value: true,
        helperText: '必須為數字'
    },
    holyResistance: {
        value: true,
        helperText: '必須為數字'
    },
}

const DataProvider = () => {

    const classes = useStyles()

    const [data, setData] = useState(rawData)
    const [showError, setShowError] = useState(errorState)

    const handleChange = (e, component, validateType) => {
        if (validateType === 'text') {
            const text = e.target.value
            setData({...data, [component]: text})
            setShowError({...showError, [component]: text ? {value: false, helperText: ''} : {value: true, helperText: '姓名不得為空'}})
        } else if (validateType === 'select') {
            const selectValue = e.target.value
            console.log(component)
            console.log(selectValue)
            setData({...data, [component]: selectValue})
            setShowError({...showError, [component]: selectValue ? {value: false, helperText: ''} : {value: true, helperText: '需選擇一種'}})
        } else if (validateType === 'number') {
            const numberValue = e.target.value
            const regExp = /\D/
            const isValueAllNumber = numberValue.match(regExp) && numberValue.match(regExp).toString() ? false : true
            console.log(isValueAllNumber)
            console.log(component)
            console.log(numberValue)
            setData({...data, [component]: numberValue})
            setShowError({...showError, [component]: numberValue && isValueAllNumber ? {value: false, helperText: ''} : {value: true, helperText: '必須為數字'}})
        }
    }

    const handleDisable = () => {
        for (let state in showError) {
            if (showError[state].value) {
                return true
            }
        }
        return false
    }

    const postData = async (data) => {
        console.log(data)
        const createCharacterUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8080/createCharacter' : 'https://the-law-of-destiny.herokuapp.com/createCharacter'
        await fetch(createCharacterUrl, {
            body: JSON.stringify(data),
            cache: 'no-cache',
            headers: {
                'content-type': 'application/json'
              },
            method: 'POST',
            mode: 'cors'
        }).then((response) => {
            console.log(response.status)
            if (response.status === 201) {
                alert('送出成功')
            }
            else {
                alert(`送出失敗 伺服器回傳${response.status}`)
            }
        }).catch((error) => {
            return error
        })
    }

    const handleClick = async () => {
        const responseCode = await postData(data)
        console.log(responseCode)
    }

    return (
        <Box className={classes.box}>
            <Container maxWidth='md'>
                <Paper className={classes.paper}>
                    <form>
                        <div>
                            <TextField className={classes.textField} error={showError.name.value} value={data.name} onChange={(e) => handleChange(e, 'name', 'text')} label='角色姓名' helperText={showError.name.helperText} />
                            <TextField className={classes.textFieldSelect} select error={showError.rarity.value} value={data.rarity} onChange={(e) => handleChange(e, 'rarity', 'select')} label='稀有度' helperText={showError.rarity.helperText}>
                                {rarity.map((rarityName) => {
                                    return (
                                        <MenuItem className={classes.menuItem} value={rarityName} key={rarityName}>
                                            {rarityName}
                                        </MenuItem>
                                    )
                                })}
                            </TextField>
                            <TextField className={classes.textFieldSelect} select error={showError.job.value} value={data.job} onChange={(e) => handleChange(e, 'job', 'select')} label='職業' helperText={showError.job.helperText}>
                                {job.map((jobName) => {
                                    return (
                                        <MenuItem className={classes.menuItem} value={jobName} key={jobName}>
                                            {jobName}
                                        </MenuItem>
                                    )
                                    
                                })}
                            </TextField>
                            <TextField className={classes.textFieldSelect} select error={showError.race.value} value={data.race} onChange={(e) => handleChange(e, 'race', 'select')} label='種族' helperText={showError.race.helperText}>
                                {race.map((raceName) => {
                                    return (
                                        <MenuItem className={classes.menuItem} value={raceName} key={raceName}>
                                            {raceName}
                                        </MenuItem>
                                    )
                                    
                                })}
                            </TextField>
                            <TextField className={classes.textFieldSelect} select error={showError.team.value} value={data.team} onChange={(e) => handleChange(e, 'team', 'select')} label='組織' helperText={showError.team.helperText}>
                                {team.map((teamName) => {
                                    return (
                                        <MenuItem className={classes.menuItem} value={teamName} key={teamName}>
                                            {teamName}
                                        </MenuItem>
                                    )
                                    
                                })}
                            </TextField>
                        </div>
                        <Divider className={classes.divider} />
                        <div>
                            <TextField className={classes.textField} error={showError.constitution.value} value={data.constitution} onChange={(e) => handleChange(e, 'constitution', 'number')} label='角色體質' helperText={showError.constitution.helperText} />
                            <TextField className={classes.textField} error={showError.agility.value} value={data.agility} onChange={(e) => handleChange(e, 'agility', 'number')} label='角色敏捷' helperText={showError.agility.helperText} />
                            <TextField className={classes.textField} error={showError.intelligence.value} value={data.intelligence} onChange={(e) => handleChange(e, 'intelligence', 'number')} label='角色智力' helperText={showError.intelligence.helperText} />
                            <TextField className={classes.textField} error={showError.strength.value} value={data.strength} onChange={(e) => handleChange(e, 'strength', 'number')} label='角色力量' helperText={showError.strength.helperText} />
                        </div>
                        <Divider className={classes.divider} />
                        <div>
                            <TextField className={classes.textField} error={showError.healthPoint.value} value={data.healthPoint} onChange={(e) => handleChange(e, 'healthPoint', 'number')} label='角色血量' helperText={showError.healthPoint.helperText} />
                            <TextField className={classes.textField} error={showError.defence.value} value={data.defence} onChange={(e) => handleChange(e, 'defence', 'number')} label='角色防禦' helperText={showError.defence.helperText} />
                            <TextField className={classes.textField} error={showError.attack.value} value={data.attack} onChange={(e) => handleChange(e, 'attack', 'number')} label='角色攻擊' helperText={showError.attack.helperText} />
                        </div>
                        <Divider className={classes.divider} />
                        <div>
                            <TextField className={classes.textField} error={showError.criticalChance.value} value={data.criticalChance} onChange={(e) => handleChange(e, 'criticalChance', 'number')} label='角色爆擊值' helperText={showError.criticalChance.helperText} />
                            <TextField className={classes.textField} error={showError.criticalBonus.value} value={data.criticalBonus} onChange={(e) => handleChange(e, 'criticalBonus', 'number')} label='角色爆擊加成' helperText={showError.criticalBonus.helperText} />
                            <TextField className={classes.textField} error={showError.criticalResistance.value} value={data.criticalReiset} onChange={(e) => handleChange(e, 'criticalResistance', 'number')} label='角色抗暴' helperText={showError.criticalResistance.helperText} />
                            <TextField className={classes.textField} error={showError.evasion.value} value={data.evasion} onChange={(e) => handleChange(e, 'evasion', 'number')} label='角色迴避' helperText={showError.evasion.helperText} />
                        </div>
                        <Divider className={classes.divider} />
                        <div>
                            <TextField className={classes.textField} error={showError.waterfireResistance.value} value={data.waterfireResistance} onChange={(e) => handleChange(e, 'waterfireResistance', 'number')} label='角色水抗' helperText={showError.waterfireResistance.helperText} />
                            <TextField className={classes.textField} error={showError.fireResistance.value} value={data.fireResistance} onChange={(e) => handleChange(e, 'fireResistance', 'number')} label='角色火抗' helperText={showError.fireResistance.helperText} />
                            <TextField className={classes.textField} error={showError.lightingResistance.value} value={data.lightingResistance} onChange={(e) => handleChange(e, 'lightingResistance', 'number')} label='角色雷抗' helperText={showError.lightingResistance.helperText} />
                        </div>
                        <Divider className={classes.divider} />
                        <div>
                            <TextField className={classes.textField} error={showError.darkResistance.value} value={data.darkResistance} onChange={(e) => handleChange(e, 'darkResistance', 'number')} label='角色暗抗' helperText={showError.darkResistance.helperText} />
                            <TextField className={classes.textField} error={showError.holyResistance.value} value={data.holyResistance} onChange={(e) => handleChange(e, 'holyResistance', 'number')} label='角色光抗' helperText={showError.holyResistance.helperText} />
                        </div>
                        <Divider className={classes.divider} />
                        <div>
                            <Button className={classes.button} variant='contained' color='primary' onClick={handleClick} disabled={handleDisable()}>送出資料</Button>
                        </div>
                    </form>
                </Paper>
            </Container>
        </Box>
    )
}

export default DataProvider