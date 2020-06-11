import React from 'react'
import { TableHead, TableRow, TableCell, TableSortLabel } from '@material-ui/core'

const headCells = [{
    id: 'picture',
    numeric: false,
    disablePadding: true,
    label: '圖片'
}, {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: '姓名'
}, {
    id: 'rarity',
    numeric: false,
    disablePadding: true,
    label: '稀有度'
}, {
    id: 'job',
    numeric: false,
    disablePadding: true,
    label: '職業'
}, {
    id: 'race',
    numeric: false,
    disablePadding: true,
    label: '種族'
},{
    id: 'team',
    numeric: false,
    disablePadding: true,
    label: '勢力'
}, {
    id: 'constitution',
    numeric: false,
    disablePadding: true,
    label: '體質'
}, {
    id: 'agility',
    numeric: false,
    disablePadding: true,
    label: '敏捷'
}, {
    id: 'intelligence',
    numeric: false,
    disablePadding: true,
    label: '智力'
}, {
    id: 'strength',
    numeric: false,
    disablePadding: true,
    label: '力量'
}, {
    id: 'healthPoint',
    numeric: false,
    disablePadding: true,
    label: '血量'
}, {
    id: 'defence',
    numeric: false,
    disablePadding: true,
    label: '防禦'
}, {
    id: 'attack',
    numeric: false,
    disablePadding: true,
    label: '攻擊'
}]

const TableRowHead = ({ classes, sortDirection, sortBy, handleSort }) => {

    const idCheck = (id) => {
        if (id === 'picture' || id === 'name') {
            return 'sortNum'
        } else {
            return id
        }
    }

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => {
                    return (
                        <TableCell key={headCell.id} align='center' sortDirection={sortBy === headCell.id ? sortDirection : false}>
                            {headCell.label}
                            <TableSortLabel active={sortBy === headCell.id} direction={sortBy === headCell.id ? sortDirection : 'asc'} onClick={() => handleSort(idCheck(headCell.id))}>
                                {sortBy === headCell.id ? (
                                    <span className={classes.visuallyHidden}>
                                        {sortDirection === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </span>
                                ) : null}
                            </TableSortLabel>
                        </TableCell>
                    )
                })}
            </TableRow>
        </TableHead>
    )
}

export default TableRowHead