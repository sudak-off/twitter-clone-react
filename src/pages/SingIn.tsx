import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    // button: {
    //     fontWeight: 700,
    // },
    // lightBulb: {
    //     verticalAlight: 'middle',
    //     marginRight: theme.spacing(1)
    // }
    wrapper: {
        display: 'flex',
        height: '100%'
    },
    blueSide: {
        backgroundColor: '#1DA1F2',
    },
    loginSide: {},

}))

export const SingIn = () => {
    const classes = useStyles()

    return (
        <div>SingIn</div>
    )
}
