import "./Footer.css";
// import AddIcon from '@mui/icons-material/Add';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CopyrightIcon from "@mui/icons-material/Copyright";
import PinterestIcon from "@mui/icons-material/Pinterest";

function Footer() {
  return (
    <>
      <div className="footer">
        <hr />
        <div className="row">
          <div className="myrows">
            <div className="col-md-3">
              <p className="titleFooter">Main</p>
              <ul className="lists">
                <li className="list-items">Home</li>
                <li className="list-items">About</li>
                <li className="list-items">Contact</li>
                <li className="list-items">Login</li>
              </ul>
            </div>
            <div className="col-md-3">
              <p className="titleFooter">Category</p>
              <ul className="lists">
                <li className="list-items">Personal</li>
                <li className="list-items">Mortgage</li>
                <li className="list-items">Auto Loan</li>
                <li className="list-items">Student Loan</li>
              </ul>
            </div>
            <div className="col-md-3">
              <p className="titleFooter">Latest</p>
              <ul className="lists">
                <li className="list-items">Payday Loan</li>
                <li className="list-items">Holiday Loan</li>
                <li className="list-items">Medical Loan</li>
                <li className="list-items">Pawn Loan</li>
              </ul>
            </div>
            <div className="col-md-3 last-col">
              <p className="titleFooter">Advanced</p>
              <ul className="lists">
                <li className="list-items">Game</li>
                <li className="list-items">Program</li>
                <li className="list-items">Utech</li>
                <li className="list-items">Itech</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <ul className="lists copyright float-start">
              <li className="list-items">
                <CopyrightIcon size={18} />
                2022{" "}
                <a
                  className="copy-link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.temxtech.66ghz.com"
                >
                  {" "}
                  temxtech
                </a>{" "}
                all right reserved
              </li>
            </ul>
          </div>
          <div className="col-md-4 ">
            <ul className="social-lists">
              {/* <span className='titleFooter'>follow us </span> */}
              <li className="social">
                <FacebookIcon />
              </li>
              <li className="social">
                <InstagramIcon />
              </li>
              <li className="social">
                <TwitterIcon />
              </li>
              <li className="social">
                <LinkedInIcon />
              </li>
              <li className="social">
                <GitHubIcon />
              </li>
              <li className="social">
                <PinterestIcon />
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <div class="form-group my-form-group">
              <input
                type="text"
                placeholder="Enter Your Email"
                class="form-control input-field"
              />
              <button class="sub-btn">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
