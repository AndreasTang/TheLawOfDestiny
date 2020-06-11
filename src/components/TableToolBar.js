import React from 'react'
import { Toolbar, Typography, Grid } from '@material-ui/core'
import FilterMenu from './FilterMenu'

const TableToolBar = ({ handleFilter }) => {

    return (
        <Toolbar>
            <Grid container justify='space-between' alignItems='center'>
                <Grid item>
                    <Typography variant='h4'>
                        角色列表
                    </Typography>
                </Grid>
                <Grid item>
                    <FilterMenu handleFilter={handleFilter} />
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default TableToolBar