import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a lightTheme instance.
const DarkTheme = createMuiTheme({
    palette: {
        // We use these pallets for dark theme
        type: 'dark',
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
});

export default DarkTheme;
