import { useState } from "react";
import { AppBar, IconButton, Link, SwipeableDrawer, Toolbar, Typography, Divider, List, ListItem } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Testimonials", href: "/testimonial" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

const NewNavbar = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "black" }}>
      <Toolbar sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
        {isNonMobileScreens
          ? navigationLinks.map((item) => (
              <Link
                color="textPrimary"
                variant="button"
                underline="none"
                href={item.href}
                sx={{ mx: 10, color: "white", "&:hover": { color: "white" } }}
              >
                <Typography variant="h6" fontWeight="bold">
                  {item.name}
                </Typography>
              </Link>
            ))
          : null}
        {!isNonMobileScreens ? (
          <IconButton sx={{ ml: "auto" }}>
            <MenuIcon sx={{ color: "white", fontSize: 80 }} onClick={() => setOpen(true)} />
          </IconButton>
        ) : null}
      </Toolbar>
      <SwipeableDrawer anchor="right" open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
        <IconButton>
          <ChevronRightIcon sx={{ color: "black", fontSize: 80 }} onClick={() => setOpen(false)} />
        </IconButton>
        <Divider sx={{ backgroundColor: "black", height: "4px" }} />
        <List>
          {navigationLinks.map((item) => (
            <ListItem>
              <Link
                color="textPrimary"
                variant="button"
                underline="none"
                href={item.href}
                sx={{ color: "black", "&:hover": { color: "black" } }}
              >
                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "3rem" }}>
                  {item.name}
                </Typography>
              </Link>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
};

export default NewNavbar;
