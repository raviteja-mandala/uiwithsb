import { Box, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import blinkistHeaderIcon from "../../pictures/blinkist_icon.png";
import HeaderButton from "../atoms/buttons/HeaderButton";
import SimpleHeaderButton from "../atoms/buttons/SimpleHeaderButton";
import ExploreDialog from "./ExploreDialog";
import SearchBox from "./SearchBox";
import WindowContext from "./WindowContext";

const useStyles = makeStyles((theme) => ({
  hideIcon: {
    display: "none",
  },

  headerContainer: (props) => ({
    width: "100%",
    display: "flex",
    flexDirection: props.width > 1110 ? "row" : "column",
  }),

  showIcon: {
    display: "visible",
  },
  expandLess: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },

  push: (props) => ({
    marginLeft: props.width > 1110 ? "auto" : "",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  }),

  bigFontForHeader: {
    fontSize: "40px",
    fontWeight: 700,
    display: "inline-block",
    marginBottom: "8px",
  },

  searchBox: {
    position: "fixed",
    width: "300px",
    top: 10,
    left: 620,
    display: "none",
    backgroundColor: "#ffffff",
    zIndex: 3,
  },

  overlay: {
    position: "fixed",
    display: "none" /* Hidden by default */,
    width: "100%" /* Full width (cover the whole page) */,
    top: 60,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.4,
    backgroundColor: "#808080",
    zIndex: 1,
    cursor: "pointer" /* Add a pointer on hover */,
  },
}));

function BlinkistHeader(props) {
  const winContext = React.useContext(WindowContext);
  const classes = useStyles(winContext);

  const [isOpen, setIsOpen] = useState(false);
  const handleClose = (state) => {
    if (state) {
      document.getElementById("overlay").style.display = "block";
    } else {
      document.getElementById("overlay").style.display = "none";
    }
    if (document.getElementById("sbox")) {
      document.getElementById("sbox").style.display = "none";
    }
    setIsOpen(state);
  };

  const onSearchClick = () => {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("sbox").style.display = "block";
    setIsOpen(false);
  };

  const onSearchClose = () => {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("sbox").style.display = "none";
  };

  return (
    <Box className={classes.headerContainer}>
      <HeaderButton>
        <img src={blinkistHeaderIcon} alt="Blinkist" />
        <span className={classes.bigFontForHeader}>Blinkist</span>
      </HeaderButton>
      <HeaderButton onlinkclick={onSearchClick}>
        <BsSearch></BsSearch>
      </HeaderButton>

      <Box id="sbox" className={classes.searchBox}>
        <SearchBox onsearchclose={onSearchClose}></SearchBox>
      </Box>

      <HeaderButton onlinkclick={handleClose} state={isOpen}>
        Explore
        <MdExpandMore
          className={isOpen === true ? classes.hideIcon : classes.showIcon}
        />
        <MdExpandLess
          className={isOpen === true ? classes.showIcon : classes.hideIcon}
        />
      </HeaderButton>

      <SimpleHeaderButton
        state={isOpen}
        tolink="/mylibrary"
        onlinkclick={handleClose}
      >
        MyLibrary
      </SimpleHeaderButton>
      <SimpleHeaderButton
        tolink="/addBook"
        onlinkclick={handleClose}
        state={isOpen}
      >
        Add Book
      </SimpleHeaderButton>
      <div className={classes.push}>
        <HeaderButton tolink="/myaccount">
          Account
          <MdExpandMore />
        </HeaderButton>
      </div>
      <ExploreDialog open={isOpen} onclose={handleClose}></ExploreDialog>
      <Box
        id="overlay"
        className={classes.overlay}
        onClick={() => {
          handleClose(false);
        }}
      ></Box>
    </Box>
  );
}

BlinkistHeader.propTypes = {
  width: PropTypes.number,
};

export default BlinkistHeader;
