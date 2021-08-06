import "@fontsource/raleway";
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({

    palette: {
        primary: {
            main: '#00cc00',
            dark: '#006600'
        }
    },

    cardcolor: {
        main: '#cccccc'
    },

    bookStatusButtonColor: {
        main: '#ffffff'
    },

    typography: {
        fontFamily: 'Raleway',
        fontSize: {
            cardIconsFont: 14,
            reads: 13,
            bookStatusFontSize: 20,
            category: 16,
            categoryIconFont: 19

        }
    }
})

export default theme;