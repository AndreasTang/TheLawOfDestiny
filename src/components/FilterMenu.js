import React, { useState } from 'react'
import { Button, Menu, MenuItem, Checkbox, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const rarity = {
    SSR: false,
    SR: false,
    R: false
}

const job = {
    勇者: false,
    遊俠: false,
    魔導師: false,
    守護者: false,
    吟誦者: false
}

const race = {
    深淵族: false,
    精靈族: false,
    泰坦族: false,
    小人族: false,
    古特族: false,
    鬼族: false,
    未知: false,
    龍族: false,
    獸族: false,
    星界人族: false,
    地球人族: false,
    人造生命: false,
    亞古族: false,
    小惡魔族: false
}

const team = {
    至高議會: false,
    深淵: false,
    榮光組織: false,
    神之裁決: false,
    鋼鐵之心: false,
    地球: false,
    機關島: false,
    天空商會: false,
    不夜湖: false,
    魔偶之家: false,
    龍島: false,
    黎明守望: false,
    咕嚕島: false,
    暮組織: false
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3)
    },
    typography: {
        padding: 12
    },
    menuItem: {
        minWidth: 120
    }
}))

const FilterMenu = ({ handleFilter }) => {

    const classes = useStyles()

    const [open, setOpen] = useState(null)
    const [checkboxFilters, setCheckboxFilters] = useState({rarity, job, race, team})

    const handleClick = (e) => {
        setOpen(e.currentTarget)
    }

    const handleClose = () => {
        setOpen(null)
    }

    const sendFilters = (newState) => {
        let finalFilters = {}
        for (let filterSet in newState) {
            for (let filterValue in newState[filterSet]) {
                if (newState[filterSet][filterValue] && !finalFilters[filterSet]) {
                    finalFilters = {...finalFilters, [filterSet]: [filterValue] }
                } else if (newState[filterSet][filterValue] && finalFilters[filterSet]) {
                    finalFilters[filterSet] = [...finalFilters[filterSet], filterValue]
                }
            }
        }
        handleFilter(finalFilters)
    }

    const handleChange = (e, filterGroup) => {
        const newState = {...checkboxFilters, [filterGroup]: {...checkboxFilters[filterGroup], [e.target.name]: e.target.checked}}
        setCheckboxFilters(newState)
        sendFilters(newState)
    }

    return (
        <React.Fragment>
            <Button onClick={handleClick} aria-controls="simple-menu" aria-haspopup="true">
                <Typography variant='button'> 
                    Filter
                </Typography>
            </Button>
            <Menu
                id='simple-menu'
                anchorEl={open}
                keepMounted
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem className={classes.typography}>稀有度</MenuItem>
                {Object.keys(rarity).map((rarityName, index) => {
                    return (
                        <Grid direction='row' container key={index}>
                            <Checkbox checked={checkboxFilters.rarity[rarityName]} onChange={(e) => handleChange(e, 'rarity')} name={rarityName} color='primary' inputProps={{ 'aria-label': 'secondary checkbox' }} />
                            <MenuItem className={classes.menuItem}>{rarityName}</MenuItem>
                        </Grid>
                    )
                })}
                <MenuItem className={classes.typography}>職業</MenuItem>
                {Object.keys(job).map((jobName, index) => {
                    return (
                        <Grid direction='row' container key={index}>
                            <Checkbox checked={checkboxFilters.job[jobName]} onChange={(e) => handleChange(e, 'job')} name={jobName} color='primary' inputProps={{ 'aria-label': 'secondary checkbox' }} />
                            <MenuItem className={classes.menuItem}>{jobName}</MenuItem>
                        </Grid>
                    )
                })}
                <MenuItem className={classes.typography}>種族</MenuItem>
                {Object.keys(race).map((raceName, index) => {
                    return (
                        <Grid direction='row' container key={index}>
                            <Checkbox checked={checkboxFilters.race[raceName]} onChange={(e) => handleChange(e, 'race')} name={raceName} color='primary' inputProps={{ 'aria-label': 'secondary checkbox' }} />
                            <MenuItem className={classes.menuItem}>{raceName}</MenuItem>
                        </Grid>
                    )
                })}
                <MenuItem className={classes.typography}>陣營</MenuItem>
                {Object.keys(team).map((teamName, index) => {
                    return (
                        <Grid direction='row' container key={index}>
                            <Checkbox checked={checkboxFilters.team[teamName]} onChange={(e) => handleChange(e, 'team')} name={teamName} color='primary' inputProps={{ 'aria-label': 'secondary checkbox' }} />
                            <MenuItem className={classes.menuItem}>{teamName}</MenuItem>
                        </Grid>
                    )
                })}
            </Menu>
        </React.Fragment>
    )
}

export default FilterMenu