import React, { useEffect, useState } from 'react'
import clsx from 'clsx';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { useHistory, useLocation } from "react-router-dom";
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import MessageIcon from '@material-ui/icons/Message';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const drawerWidth = 240;

const MuiListItem = withStyles({
    root: {
        "&$selected": {
            backgroundColor: "#00203FFF",
            margin: '0px 5px 0px 5px',
            borderRadius: '2px',
            border: '0.3px solid #ddd',
            color: "#ADEFD1FF !important",
            fontWeight: "700 !important",
            "& .MuiListItemIcon-root": {
                color: "#ADEFD1FF",
            },
            "&& .MuiListItemText-primary":
            {
                fontWeight: 600,
            }
        },
        "&$selected:hover": {
            backgroundColor: "#101820FF",
            color: "#FEE715FF !important",
            "& .MuiListItemIcon-root": {
                color: "#FEE715FF",
            }
        },
        "&:hover": {
            backgroundColor: "#606060FF",
            color: "#D6ED17FF",
            "& .MuiListItemIcon-root": {
                color: "#D6ED17FF",
            }
        }
    },
    selected: {}
})(ListItem);

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
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
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        // padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

const InternalDrawer = () => {
    const classes = useStyles();
    const location = useLocation();
    const history = useHistory();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [selectedIndex, setSelectedIndex] = React.useState('');
    const [pageTitle, setPageTitle] = useState('');


    const token = localStorage.getItem("type");

    // navbar desktop and mobile view start

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleUser1Profile = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
        setSelectedIndex('user-1-profile')
        history.push('/user-1-profile')
    }

    const handleUser2Profile = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
        setSelectedIndex('user-2-profile')
        history.push('/user-2-profile')
    }

    const handleUser1Account = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
        setSelectedIndex('user-1-account')
        history.push('/user-1-account')
    }

    const handleUser2Account = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
        setSelectedIndex('user-2-account')
        history.push('/user-2-account')
    }

    const ITEM_HEIGHT = 100;

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            id={menuId}
            MenuListProps={{
                'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            PaperProps={{
                elevation: 0,
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                },
            }}
        >
            {token == 'internal1' && (
                <>
                    <MenuItem onClick={handleUser1Profile}>
                        <Typography variant="inherit" noWrap>
                            user 1 Profile
                        </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleUser1Account}>
                        <Typography variant="inherit" noWrap>
                            user 1  account
                        </Typography>
                    </MenuItem>
                </>
            )}

            {token == 'internal2' && (
                <>
                    <MenuItem onClick={handleUser2Profile}>
                        <Typography variant="inherit" noWrap>
                            user 2 Profile
                        </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleUser2Account}>
                        <Typography variant="inherit" noWrap>
                            user 2  account
                        </Typography>
                    </MenuItem>
                </>
            )}

            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            PaperProps={{
                elevation: 0,
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                },
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            {token == 'internal1' && (
                <>
                    <MenuItem>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <Typography variant="inherit" noWrap>
                            Messages
                        </Typography>
                    </MenuItem>
                    <MenuItem>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <Typography variant="inherit" noWrap>
                            Notifications
                        </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleProfileMenuOpen}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="primary-search-account-menu"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Typography variant="inherit" noWrap>
                            Profile
                        </Typography>
                    </MenuItem>
                </>
            )}

            {token == 'internal2' && (
                <>
                    <MenuItem>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={1} color="secondary">
                                <MessageIcon />
                            </Badge>
                        </IconButton>
                        <Typography variant="inherit" noWrap>
                            Messages
                        </Typography>
                    </MenuItem>
                    <MenuItem>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={1} color="secondary">
                                <NotificationImportantIcon />
                            </Badge>
                        </IconButton>
                        <Typography variant="inherit" noWrap>
                            Notifications
                        </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleProfileMenuOpen}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="primary-search-account-menu"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountBoxIcon />
                        </IconButton>
                        <Typography variant="inherit" noWrap>
                            Profile
                        </Typography>
                    </MenuItem>
                </>
            )}

            <MenuItem>
                <Button variant="contained" color="secondary" size='large' onClick={() => handleLogout()} >Logout</Button>
            </MenuItem>
        </Menu>
    );


    // navbar desktop and mobile view end

    const navItems1 = [
        {
            text: "Products",
            icon: <InboxIcon />,
            indexes: 0,
        },
        {
            text: "Users",
            icon: <MailIcon />,
            indexes: 1,
        }
    ];

    const navItems2 = [
        {
            text: "Sales",
            icon: <InboxIcon />,
            indexes: 0,
        },
        {
            text: "Marketing",
            icon: <MailIcon />,
            indexes: 1,
        }
    ];

    const [itemsList, setItemsList] = useState([]);

    useEffect(() => {
        if (token == 'internal1') {
            setItemsList(navItems1)
        } else if (token == 'internal2') {
            setItemsList(navItems2)
        }
    }, [token])

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        if (index == 0 && token == 'internal1') {
            history.push('/products')
        }
        else if (index == 1 && token == 'internal1') {
            history.push('/users')
        }
        else if (index == 0 && token == 'internal2') {
            history.push('/sales')
        }
        else if (index == 1 && token == 'internal2') {
            history.push('/marketing')
        }
    };


    React.useEffect(() => {
        let total_url = window.location.pathname.split('/')
        let url = total_url[1];
        if (url == "products" && token == 'internal1') {
            setSelectedIndex(0)
        }
        else if (url == "users" && token == 'internal1') {
            setSelectedIndex(1)
        }
        else if (url == "sales" && token == 'internal2') {
            setSelectedIndex(0)
        }
        else if (url == "marketing" && token == 'internal2') {
            setSelectedIndex(1)
        }

    }, []);

    let pageTitlePath = location.pathname;
    useEffect(() => {
        if (pageTitlePath == '/') {
            setPageTitle("Home")
        } else {
            setPageTitle(pageTitlePath.trim().split('/').join(" ").replace("-", " "))
        }
    }, [pageTitlePath])



    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleLogout = () => {
        localStorage.clear();
        history.push('/login');
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>


                    <Typography variant="h6" noWrap component="div">
                        {pageTitle.toLocaleUpperCase()}
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />

                    {/* this is for desktop view */}
                    {token == 'internal1' && (<>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Badge badgeContent={17} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <div>
                                <Button variant="contained" color="secondary" style={{ marginLeft: "10px" }} onClick={() => handleLogout()} >Logout</Button>
                            </div>
                        </Box>
                    </>)}

                    {token == 'internal2' && (<>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={1} color="secondary">
                                    <MessageIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Badge badgeContent={1} color="secondary">
                                    <NotificationImportantIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountBoxIcon />
                            </IconButton>
                            <div>
                                <Button variant="contained" color="secondary" style={{ marginLeft: "10px" }} onClick={() => handleLogout()} >Logout</Button>
                            </div>
                        </Box>
                    </>)}

                    {/* this is for mobile view */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>

                </Toolbar>
            </AppBar>

            {renderMobileMenu}
            {renderMenu}

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {itemsList.map((item, index) => {
                        const { text, icon, indexes } = item;
                        return (
                            <MuiListItem button key={index} selected={selectedIndex === indexes}
                                onClick={(event) => handleListItemClick(event, indexes)}
                            >
                                {icon && <ListItemIcon>
                                    {icon}
                                </ListItemIcon>}
                                <ListItemText primary={text} />

                            </MuiListItem>
                        );
                    })}
                </List>

            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
            </main>
        </div>
    );
}

export default InternalDrawer