import {createMuiTheme} from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors';

const timesNewRoman = {
    fontFamily: 'Times New Roman',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
    local('Times New Roman'),
    url(/fonts/timesNewRoman.ttf) format('ttf')
  `,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

// Create a lightTheme instance.
const lightTheme = createMuiTheme({
    palette: {
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
    typography: {
        fontFamily: 'Times New Roman, sans-serif',
        h1: {
            fontSize: '3.75rem',
            // fontFamily: 'Times New Roman',

        },
        h2: {
            fontSize: '2.5rem',
            // fontFamily: 'Times New Roman',

        },
        h3: {
            fontSize: '2rem',
            // fontFamily: 'Times New Roman',

        },
        h4: {
            fontSize: '1.5rem',
            // fontFamily: 'Times New Roman',

        },
        h5: {
            fontSize: '1.3rem',
        },
        h6: {
            fontSize: '1rem',
        },
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                "@font-face": [timesNewRoman],
                body: {
                    fontFamily: 'Times New Roman, sans-serif',
                },
            },
        },
    },
});

export default lightTheme;
