import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';

import masthead from './img/bg-masthead.jpg';


const drawerWidth = 240;

const H={
    img: {
        background: `url(${masthead})`,
        minHeight: '30rem',
        position:'relative',
        width: '100%',
        height: 'auto',
        marginTop: '50px',
        paddingTop: '8rem',
        paddingBottom:'8rem',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    t1: {
        fontSize: '4rem',
        textAlign: 'center',
        fontWeight: '700',
        lineHeight: '1.2',
        marginBottom: '.5rem',
    },
    t2: {
        fontSize: '1.75rem',
        textAlign: 'center',
        fontWeight: '700',
        lineHeight: '1.2',
    },
    bt: {
        backgroundColor: '#155d74',
        borderColor: '#155d74',
        padding: '1.25rem 2.5rem',
        color: '#fff',
        boxShadow: '0 3px 3px 0 rgba(0,0,0,.1)',
        fontWeight: '700',
        marginTop: '3rem',
        border: '1px solid rgba(0,0,0,.1)',
        fontSize: '1rem',
        lineHeight: '1.5',
        borderRadius: '.25rem',
    },
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: '#ebc807',
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    title: {
        flexGrow: 1,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor:'#1d809f',
        color:'white',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
}));

export default function PersistentDrawerRight() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [Dopen, setDOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleClickOpen = () => {
        setDOpen(true);
    };

    const handleClose = () => {
        setDOpen(false);
    };
    return (
        <>
        <div style={H.img}>
            <div style={H.t1}>Dogether</div>
            <div style={H.t2}>
                <em>Do something together with somebody</em>
            </div>
            <Button style={H.bt} onClick={handleClickOpen}>
                함께하기
            </Button>
        </div>
            {/*로그인 창*/}
            <Dialog open={Dopen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">로그인 하기</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        이 사이트에서 활동하기를 원하신다면 로그인후 이용해 주시기 바랍니다.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="이메일주소"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="pw"
                        label="비밀번호"
                        type="password"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        회원가입
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        로그인
                    </Button>
                </DialogActions>
            </Dialog>


        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap className={classes.title}>
                        Dogether
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                        className={clsx(open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />

            </main>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton
                        color="inherit"
                        onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {['홈', '페이지 소개', '개발 목적', '주요 기능'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
            </>
    );
}