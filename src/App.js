import React from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline'
import AppRouter from './routers/AppRouter';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const App = () => {

    const theme = createMuiTheme({
        overrides: {
            MuiCssBaseline: {
                '@global': {
                    html: {
                        margin: 0,
                        padding: 0,
                        border: 0,
                        outline: 0,
                    }
                }
            }
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <CssBaseLine />
            <AppRouter />
        </ThemeProvider>
    )
}

export default App;
