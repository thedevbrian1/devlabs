import Image from 'next/image'
import { Grid, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    hero: {
        // background: '#011638',
        height: '100vh' 
    }
}))
export default function Hero() {
    const classes = useStyles();
    return (
       <div className={classes.hero}>
            <Grid container direction='row'>
                <Grid item xs={12} md={6}>
                    <Typography variant='h1'>
                        Match and Code
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Image
                        src='/collaborate.svg'
                        alt='Online collaboration'
                        width={500}
                        height={500}
                    />
                </Grid>
            </Grid>
       </div>
    )
}