import Link from 'next/link'
import { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import indigo from '@material-ui/core/colors/indigo';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    header: {
        background: 'transparent',
        boxShadow: 'none',
        color: '#ffffff',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    link: {
        marginRight: theme.spacing(2),
        '&:hover': {
            color: indigo[500]
        },
    },
    
}));

export default function NavBar() {
    const classes = useStyles();
    const [mobileView, setMobileView] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setMobileView(true)
                : setMobileView(false);
        };
        setResponsiveness();
        window.addEventListener('resize', () => setResponsiveness());
    });

    const displayDesktop = () => {
        return (
            <Toolbar className={classes.toolbar}>
                {devlabsLogo}

                <div style={{display: 'flex', flexDirection: 'row'}}>
                    {getMenuLinks()}
                </div>
                
            </Toolbar>
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () => {
            setDrawerOpen(true);
        }

        const handleDrawerClose = () => {
            setDrawerOpen(false)
        }

        const getDrawerChoices = () => {
            return links.map(({ label, path }) => {
                return (
                    <Link href={path} key={label}>
                        <a>
                            <MenuItem>{label}</MenuItem>
                        </a>
                    </Link>
                )
            })
        }
        return (
            <Toolbar>
                <IconButton
                    {...{
                        edge: 'start',
                        color: 'inherit',
                        'aria-label': 'menu',
                        'aria-haspopup': 'true',
                        onClick: handleDrawerOpen,
                    }}>
                        <MenuIcon />
                </IconButton>
                <Drawer
                    {...{
                        anchor: 'left',
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <div>{getDrawerChoices()}</div>
                </Drawer>
                <div>{devlabsLogo}</div>
            </Toolbar>
        );
    };

    const devlabsLogo = (
        <Typography variant='h6' component='h1'>
            Devlabs
        </Typography>
    );

    const links = [
        {
            label: 'Pathways',
            path: '/pathway',
        },
        {
            label: 'Challenges',
            path: '/challenge',
        },
        {
            label: 'Courses',
            path: '/course',
        },
        {
            label: 'Sign Up',
            path: '/signup',
        },
        {
            label: 'Sign In',
            path: '/signin'
        }
    ];

    const getMenuLinks = () => {
        return links.map(({ label, path}) => {
            return (
                <Link href={path} key={label}>
                    <a>
                        <Typography className={classes.link}>
                            {label}
                        </Typography>
                    </a>
                </Link>
            );
        });
    };

    return (
        <div className={classes.root}>
            <AppBar position='fixed' className={classes.header}>
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </div>
    );
}