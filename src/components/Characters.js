import React, { useState, useEffect } from 'react'
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TableRowHead from './TableRowHead'
import TableToolBar from './TableToolBar'
import backgroundImage from '../pic/狸兮opacity0.2.jpg'

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
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
    },
    table: {
        minWidth: 800,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0,0,0,0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1
    }
}))

const Characters = () => {

    useEffect(() => {
        console.log(process.env.PORT)
        const readAllCharactersUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8080/readAllCharacters' : 'https://the-law-of-destiny.herokuapp.com/readAllCharacters'
        async function fetchData() {
            await fetch(readAllCharactersUrl)
            .then((response) => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    setIsLoadFailed(true)
                    return []
                }
                
            }).catch((error) => {
                console.log(error)
            }).then((data) => {
                console.log(data)
                setDatas(data)
                setIsLoaded(true)
            })
        }
        fetchData()
    }, [])

    const classes = useStyles()
    const [datas, setDatas] = useState([])
    const [sortDirection, setSortDirection] = useState('asc')
    const [sortBy, setSortBy] = useState('sortNum')
    const [isLoaded, setIsLoaded] = useState(false)
    const [isLoadFailed, setIsLoadFailed] = useState(false)
    const [filters, setFilters] = useState({})

    const handleSort = (id) => {
        console.log(id)
        const isAsc = sortBy === id && sortDirection === 'asc'
        setSortDirection(isAsc ? 'desc' : 'asc')
        setSortBy(id)
    }

    const numCompareFunction = (a, b ,sortBy) => {
        if (a[sortBy] > b[sortBy]) {
            return -1
        } else if (a[sortBy] <= b[sortBy]) {
            return 1
        }
    }

    const textCompareFunction = (a, b, sortBy) => {
        const conversion = {
            SSR: 3,
            SR: 2,
            R: 1,
            勇者: 5,
            遊俠: 4,
            魔導師: 3,
            守護者: 2,
            吟誦者: 1
        }
        if (conversion[a[sortBy]] > conversion[b[sortBy]]) {
            return -1
        } else if (conversion[a[sortBy]] <= conversion[b[sortBy]]) {
            return 1
        }
    }

    const backGroundCompareFunction = (a, b, sortBy) => {
        if (a[sortBy] === b[sortBy]) {
            return -1
        } else {
            return 1
        }
    }

    const compare = (pivot, arr, sortBy, i) => {
        if (sortBy === 'rarity' || sortBy === 'job') {
            return textCompareFunction(pivot, arr[i], sortBy)
        } else if (sortBy === 'races' || sortBy === 'teams') {
            return backGroundCompareFunction(pivot, arr[i], sortBy)
        } else {
            return numCompareFunction(pivot, arr[i], sortBy)
        }
    }

    const quickSort = (arr, sortDir, sortBy) => {
        const sortDirection = sortDir === 'asc' || sortDir === 'desc' ? sortDir : 'asc'
        if (arr.length <= 1) {
            return arr
        } else {
            const pivot = arr[0]
            const greater = []
            const less = []
            for (let i = 1; i <= arr.length -1; i++) {
                const compareResult = compare(pivot, arr, sortBy, i)
                if (compareResult === -1) {
                    less.push(arr[i])
                } else if (compareResult === 1) {
                    greater.push(arr[i])
                }
            }
            return sortDirection === 'asc' ? [...quickSort(less, sortDirection, sortBy), pivot, ...quickSort(greater, sortDirection, sortBy)] : [...quickSort(greater, sortDirection, sortBy), pivot, ...quickSort(less, sortDirection, sortBy)]
        }
    }

    const filtering = (datas, filterGroup, filterGroupName, filteredData = []) => {
        if (filterGroup.length <= 0) {
            return filteredData
        } else {
            let unmatched = []
            let matched = []
            const filterArray = [...filterGroup]
            const filterValue = filterArray.shift()
            datas.forEach((data) => {
                if (data[filterGroupName] === filterValue) {
                    matched.push(data)
                } else {
                    unmatched.push(data)
                }
            })
            return filtering(unmatched, filterArray, filterGroupName, [...filteredData, ...matched])
        }
    }

    const filterData = (datas) => {
        let filtered = [...datas]
        for (let filter in filters) {
            filtered = filtering(filtered, filters[filter], filter)
        }
        return filtered
    } 

    const handleFilter = (filterSets) => {
        console.log(filterSets)
        setFilters(filterSets)
    }

    if (!isLoaded) {
        return (
            <Box className={classes.root}>
                <Container maxWidth='lg'>
                    <Paper className={classes.paper}>
                        <Typography>讀取中......</Typography>
                    </Paper>        
                </Container>
            </Box>
        )
    } else if (isLoaded && !isLoadFailed && !datas.toString()) {
        return (
            <Box className={classes.root}>
                <Container maxWidth='lg'>
                    <Paper className={classes.paper}>
                        <Typography>目前無資料喔</Typography>
                    </Paper>        
                </Container>
            </Box>
        )
    }  else if (isLoaded && isLoadFailed) {
        return (
            <Box className={classes.root}>
                <Container maxWidth='lg'>
                    <Paper className={classes.paper}>
                        <Typography>連結伺服器錯誤</Typography>
                    </Paper>        
                </Container>
            </Box>
        )
    } else {
        return (
            <Box className={classes.root}>
                <Container maxWidth='lg'>
                    <Paper className={classes.paper}>
                        <TableToolBar handleFilter={handleFilter} />
                        <TableContainer>
                            <Table className={classes.table} aria-labelledby='tableTitle' size={'medium'} aria-label='enhanced table'>
                                <TableRowHead classes={classes} sortDirection={sortDirection} sortBy={sortBy} handleSort={handleSort} />
                                <TableBody>
                                {quickSort(filterData(datas), sortDirection, sortBy).map((data, index) => {
                                    return (
                                        <TableRow hover key={data.sortNum}>
                                            <TableCell component='th' scope='row' align='left' >{'No Picture'}</TableCell>
                                            <TableCell align='left'>{data.name}</TableCell>
                                            <TableCell align='left'>{data.rarity}</TableCell>
                                            <TableCell align='left'>{data.job}</TableCell>
                                            <TableCell align='left'>{data.race}</TableCell>
                                            <TableCell align='left'>{data.team}</TableCell>
                                            <TableCell align='left'>{data.constitution}</TableCell>
                                            <TableCell align='left'>{data.agility}</TableCell>
                                            <TableCell align='left'>{data.intelligence}</TableCell>
                                            <TableCell align='left'>{data.strength}</TableCell>
                                            <TableCell align='left'>{data.healthPoint}</TableCell>
                                            <TableCell align='left'>{data.defence}</TableCell>
                                            <TableCell align='left'>{data.attack}</TableCell>
                                        </TableRow>
                                    )
                                })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Container>
            </Box>
        )
    }

}

export default Characters