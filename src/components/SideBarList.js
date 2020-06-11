import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Link } from 'react-router-dom'

const listItem = [{
    title: '首頁',
    to: '/'
}, {
    title: '角色資訊',
    to: '/Characters'
}, {
    title: '技能資訊',
    to: '/Skills'
}, {
    title: '裝備資訊',
    to: '/Gears'
}, {
    title: '抽抽模擬器',
    to: '/Gacha'
}, {
    title: '編隊模擬器',
    to: '/Simulator'
}, {
    title: '資料撰寫',
    to: '/DataProvider'
}]

const useStyles = makeStyles(() => ({
    list: {
        width: 250
    }
}))

const SideBarList = ({ toggleDrawer }) => {

    const classes = useStyles()

    return (
        <div className={classes.list} role='presentation' onClick={toggleDrawer(false, 'Div OnClick')} onKeyDown={toggleDrawer(false, 'Div OnKeyDown')}>
            <List>
                {listItem.map((item, index) => {
                    return (
                        <ListItem button component={Link} to={item.to} key={index}>
                            <ListItemText primary={item.title} />
                        </ListItem>
                    )
                })}
            </List>
        </div>
    )
}

export default SideBarList