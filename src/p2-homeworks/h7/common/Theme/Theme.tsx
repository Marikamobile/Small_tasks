import {createMuiTheme} from "@material-ui/core";

export const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#dba332"
            },

            text: {
                primary: "black"
            },

        }, typography: {
            fontFamily: "Montserrat",
            body1: {
                fontSize: "1.1rem"
            }
        },
        shape: {
            borderRadius: 10
        },
        spacing: 10,
        overrides: {
            MuiCard: {
                root: {
                    borderRadius: 3,
                    border: 0,
                    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
                }
            },


        },
        props: {
            MuiCheckbox: {
                disableRipple: true
            }
        }
    }
);