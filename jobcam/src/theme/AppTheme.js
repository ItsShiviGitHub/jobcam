import { colors } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const AppTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 480,
            md: 768,
            lg: 1024,
            xl: 1368,
            xxl: 1980
        }
    },
    spacing: 8,
    palette: {
        mode: 'light',
        background: {
            default: "hsl(0, 0%, 100%)",
        },
        primary: {
            main: colors.indigo[900],
            deem: colors.indigo[700]
        },
        secondary: {
            main: colors.deepOrange[800]
        },
        info: {
            main: colors.grey[50]
        },
        success: {
            main: colors.lightGreen[400]
        },
        error: {
            main: colors.red[500],
            dark: colors.red[900],
        },

        blue: '#131938',
        tintBlue: '#326EE6'
    },
    shape: {
        borderRadius: 2
    },
    typography: {
        fontSize: 15,
        htmlFontSize: 20,
        h1: {
            fontWeight: 300,
            fontSize: "6rem",
            lineHeight: 1.167,
            letterSpacing: "-0.01562em"
        },
        h2: {
            fontWeight: 300,
            fontSize: "3.75rem",
            lineHeight: 1.2,
            letterSpacing: "-0.00833em"
        },
        h3: {
            fontWeight: 400,
            fontSize: "3rem",
            lineHeight: 1.167,
            letterSpacing: "0em"
        },
        h4: {
            fontWeight: 400,
            fontSize: "1.650rem",
            lineHeight: 1.235,
            letterSpacing: "0.00735em"
        },
        h5: {
            fontWeight: 400,
            fontSize: "1.2rem",
            lineHeight: 1.334,
            letterSpacing: "0em"
        },
        h6: {
            fontWeight: 500,
            fontSize: "1.25rem",
            lineHeight: 1.6,
            letterSpacing: "0.0075em"
        },
        body1: {
            // fontFamily: "'Inter', sans- serif",
            fontWeight: '700',
            fontSize: "0.600rem",
            lineHeight: 1.5,
            letterSpacing: "0.00938em"
        },
        body2: {
            fontFamily: "'Inter', sans- serif",
            fontWeight: 400,
            fontSize: "0.875rem",
            lineHeight: 1.43,
            letterSpacing: "0.01071em"
        },
        subtitle1: {
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: 1.75,
            letterSpacing: "0.00938em"
        },
        subtitle2: {
            fontWeight: 500,
            fontSize: "0.875rem",
            lineHeight: 1.57,
            letterSpacing: "0.00714em"
        },
        button: {
            fontWeight: 500,
            fontSize: "0.875rem",
            lineHeight: 1.75,
            letterSpacing: "0.02857em",
            textTransform: "uppercase",
        },
        caption: {
            fontWeight: 400,
            fontSize: "0.75rem",
            lineHeight: 1.66,
            letterSpacing: "0.03333em"

        },
        overline: {
            fontWeight: 400,
            fontSize: "0.75rem",
            lineHeight: 2.66,
            letterSpacing: "0.08333em",
            textTransform: "uppercase"
        }
    },
    mixins: {
        toolbar: {
            minHeight: 50
        }
    }

    // ... (rest of your theme configuration)
});



export default AppTheme