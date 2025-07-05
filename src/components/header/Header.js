import { AppBar, Typography, Toolbar } from "@mui/material";

const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Car Comparison Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header;
