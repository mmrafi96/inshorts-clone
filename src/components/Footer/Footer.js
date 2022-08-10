import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <img
          src="https://assets.inshorts.com/website_assets/images/logo_footer.png"
          alt=""
        />
        <p>Inshorts Clone Pte. Ltd. </p>
        <p> ©COPYRIGHT 2022</p>
      </div>
      <div className="line"></div>
      <div className="right">
        <img
          src="https://assets.inshorts.com/website_assets/images/contact_icon.png"
          alt="Contact Us"
        />
        <p>Terms & conditions Privacy Policies</p>
        <div className="icons">
          <FacebookIcon className="icon" />
          <TwitterIcon className="icon" />
          <LinkedInIcon className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
