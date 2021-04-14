import Head from 'next/head'
import Link from 'next/link'
import { Button } from '@material-ui/core'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
// import theme from '../theme'
// import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  bg: {
    background: '#011638'
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    // <ThemeProvider theme={theme}>
      <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classes.bg}>
        <NavBar />
        <div className={classes.toolbar} />
        <div>
          {/* <Link href='/contact' passHref>
            <Button variant='contained' > 
              Get Started for Free 
            </Button>
          </Link> */}
          <Hero />
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo"  />
        </a>
      </footer>
    </div>
    // </ThemeProvider>
  )
}
