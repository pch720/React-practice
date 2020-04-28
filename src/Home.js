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
        marginTop: '50px',
        paddingTop: '8rem',
        background: `url(${masthead})`,
        minHeight: '30rem',
        height: 'auto',
        position:'relative',
        width: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

    },
    tt:{
        fontSize: '3rem',
        textAlign: 'center',
        fontWeight: '700',
        lineHeight: '1.2',
        marginBottom: '3rem',
    },
    t0:{
        minHeight: '30rem',
        height: 'auto',
        position:'relative',
        width: '100%',
        margin: '0 auto 0 auto',
        padding: '6rem 15% 7rem 15%',
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
    t3: {
        fontSize: '1rem',
        textAlign: 'center',
        fontWeight: '700',
        color: '#ecb807',
    },
    t4: {
        marginTop: '1rem',
        fontSize: '1rem',
        textAlign: 'center',
        fontWeight: '300',
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
    dA: {
        textAlign: 'center',
    }
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
            {/*헤더*/}
        <header style={H.img} id="0">
            <div style={H.t1}>Dogether</div>
            <div style={H.t2}>
                <em>Do something together with somebody</em>
            </div>
            <div style={H.dA}>
            <Button style={H.bt} onClick={handleClickOpen}>
                함께하기
            </Button>
            </div>
        </header>
            {/*헤더 끝*/}
            {/*소개*/}
            <section id="1" style={H.t0}>
                <div style={H.t3}>DOGETHER'S</div>
                <div style={H.tt}>소개</div>
                <div style={H.t2}>
                    이 사이트는 같은 목적을 가진 사람들이 모여서 활동할 것입니다!
                </div>
                <div style={H.t4}>한가지 일을 나누어서 하거나 한가지 일을 꾸준히 하기 위해서 사람들이 모일것입니다.</div>
                <div style={H.dA}>

                </div>
            </section>
            {/*소개 끝*/}
            {/* 개발 목적*/}
            <section id="2" style={H.t0}>
                <div style={H.t3}>DOGETHER'S</div>
                <div style={H.tt}>개발 목적</div>
                <div style={H.t2}>
                    이 사이트는 같은 목적을 가진 사람들이 모여서 활동할 것입니다!
                </div>
                <div style={H.t4}>한가지 일을 나누어서 하거나 한가지 일을 꾸준히 하기 위해서 사람들이 모일것입니다.</div>
                <div style={H.dA}>

                </div>
            </section>
            {/*개발 목적 끝*/}
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
            {/*로그인창 끝*/}
        {/*네비게이션바*/}
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
                        <ListItem button key={text}><a href={`#${index}`}>
                            <ListItemText primary={text} />
                        </a>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            </div>
            {/*네비게이션바 끝*/}
            </>
    );
}