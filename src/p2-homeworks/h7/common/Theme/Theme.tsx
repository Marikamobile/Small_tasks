import {createMuiTheme} from "@material-ui/core";

export const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#dba332"
            },
            text: {
                primary: "#1d0404"
            },
            background: {
                paper: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            }

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
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
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