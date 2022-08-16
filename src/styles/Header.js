import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    button__holder: {
        display: 'flex',
        fontFamily: 'Inter',

    },

    button: {
        '& .css-cjctlb-MuiButtonBase-root-MuiTab-root': {
            fontFamily: 'Inter',
            textTransform: 'Initial',

        },
        top: '20px',
        height: '5px',
        [theme.breakpoints.up('320')]: {
            top: '12px',
        },
        [theme.breakpoints.up('481')]: {
            top: '20px',
        },
        [theme.breakpoints.up('641')]: {
            top: '20px',
        },
    },
    tab__name: {
        '& .css-cjctlb-MuiButtonBase-root-MuiTab-root': {
            color: 'white',
            opacity: 1,
            fontFamily: 'Inter',
            textTransform: 'Initial',
            fontSize: '18px',
            marginLeft: '50px',
            marginRight: '80px',
            [theme.breakpoints.down('320')]: {
                fontSize: '13px',
                marginLeft: '0px',
                marginRight: '0px',
            },
            [theme.breakpoints.up('320')]: {
                fontSize: '13px',
                marginLeft: '0px',
                marginRight: '0px',
            },
            [theme.breakpoints.up('481')]: {
                fontSize: '17px',
                marginLeft: '20px',
                marginRight: '20px',
            },
            [theme.breakpoints.up('641')]: {
                fontSize: '18px',
                marginLeft: '40px',
                marginRight: '40px',
            },

            [theme.breakpoints.up('961')]: {
                fontSize: '18px',
                marginLeft: '50px',
                marginRight: '50px',
            },
            [theme.breakpoints.up('1025')]: {
                fontSize: '18px',
                marginLeft: '60px',
                marginRight: '60px',
            },

        },
        '& .Mui-selected': {
            color: '#00B2FF',
            borderRadius: '20rem',
        },

        '& .css-8je8zh-MuiTouchRipple-root': {
            color: 'blue',
        },

    },

    link__holder: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        '& .css-1d6wzja-MuiButton-startIcon': {
            width: '40px',
        }



    },


    link__button: {
        display: 'flex',
        fontFamily: 'Inter',
        textTransform: 'Initial',
    }




}));