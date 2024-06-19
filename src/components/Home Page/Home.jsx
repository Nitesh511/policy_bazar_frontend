import "./Home.css";
import "../Navbar/navbar.css";
import thunder from "../../images/thuder.png";
import thunder1 from "../../images/thuder1.png";
import akshay from "../../images/akshay.png";
import hands from "../../images/hands.png";
import umre from "../../images/Umbrella1.png";
import bk from "../../images/bk.png";
import car1 from "../../images/car1.png";
import Fam1 from "../../images/Fam1.png";
import box from "../../images/boxz1.png";
import cr from "../../images/cr1.png";
import bacha from "../../images/bacha1.png";
import tra from "../../images/trv1.png";
import pepl from "../../images/pepl.png";
import all from "../../images/all.png";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Navbar } from "../Navbar/Navbar";
import { Caus } from "./Caus";
import left from "../../images/left-bg.webp";
import right from "../../images/right-bg.png";
import part from "../../images/Party1.png";
import sear1 from "../../images/sear1.png";
import sear2 from "../../images/sear2.png";
import sear3 from "../../images/sear3.png";
import Pri1 from "../../images/Pri1.png";
import Pri2 from "../../images/Pri2.png";
import Pri3 from "../../images/Pri3.png";
import Pri4 from "../../images/Pri4.png";
import Pri5 from "../../images/Pri5.png";
import star from "../../images/star.png";
import bigp from "../../images/bigp.png";
import Ap1 from "../../images/Ap1.png";
import Ap2 from "../../images/Ap2.png";
import o1 from "../../images/o1.png";
import o2 from "../../images/o2.png";
import o3 from "../../images/o3.png";
import o4 from "../../images/o4.png";
import o5 from "../../images/o5.png";
import o6 from "../../images/o6.png";
import o7 from "../../images/o7.png";
import o8 from "../../images/o8.png";
import o9 from "../../images/o9.png";
import o0 from "../../images/o0.png";
import k1 from "../../images/k1.png";
import k2 from "../../images/k2.png";
import k3 from "../../images/k3.png";
import k4 from "../../images/k4.png";
import k5 from "../../images/k5.png";
import k6 from "../../images/k6.png";
import k7 from "../../images/k7.png";
import k8 from "../../images/k8.png";
import k9 from "../../images/k9.png";
import k0 from "../../images/k0.png";
import new1 from "../../images/new.png";
import invest1 from "../../images/invest1.png";
import invest2 from "../../images/invest2.png";
import kapil from "../../images/kapil.png";
import { Footer } from "./Footer";
import Testimonials from "./testo";
import { useHistory } from "react-router-dom";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height: "65%",
  color: theme.palette.text.secondary,
}));

export const Home = () => {
  let history = useHistory();
  return (
    <>
      <Navbar />
      <div className="home-main">
        <div className="home-total">
        <div className="home-head">
  <p>
    Let’s find you <br />
    the{" "}
    <b>
      Best Insurance for{" "}
      <span style={{ position: 'relative', display: 'inline-block' }}>
        NRIs
        <span
          style={{
            position: 'absolute',
            left: '50%',
            bottom: '-5px', // Adjust this value to control the bulge
            width: '110%', // Adjust this value to control the width of the curve
            height: '2px', // Adjust this value to control the thickness of the curve
            backgroundColor: 'blue', // Adjust this value to set the color of the curve
            borderRadius: '50%', // Makes the curve circular
            transform: 'translateX(-50%)',
            zIndex: '-10'
          }}
        ></span>
      </span>
    </b>
  </p>
</div>


          <div>
            <p>
              <img src={thunder} alt="thunder" />
              <p className="home-cont1">
                50+ insurers with one of the best prices{" "}
              </p>
            </p>
          </div>
          <div>
            <p>
              <img className="home-img" src={thunder1} alt="thunder" />
              <p className="home-cont2">Quick, easy & hassle free</p>
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderRadius: "16px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              maxWidth: "600px",
              backgroundColor: "#CBC3E3",
              padding: "20px",
              fontFamily: "Arial, sans-serif",
              margin: "20px auto",
              position: "relative",
              top: "-210px",
              left: "220px",
            }}
          >
            <div
              style={{
                flex: "1",
                padding: "20px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#E5EDFF",
                  borderRadius: "4px",
                  padding: "4px 8px",
                  display: "inline-block",
                  marginBottom: "10px",
                  color: "blue",
                  fontSize: "12px",
                }}
              >
                Term Life insurance for NRI's
              </div>
              <h2
                style={{
                  margin: "0 0 10px",
                  color: "blue",
                  fontSize: "24px",
                }}
              >
                ₹2 Crore
              </h2>
              <p
                style={{
                  margin: "0 0 10px",
                  color: "blue",
                  fontSize: "16px",
                }}
              >
                Term plan starting @ ₹802/month *
              </p>
              <button
                style={{
                  padding: "10px 20px",
                  backgroundColor: "white",
                  color: "blue",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                View plans
              </button>
              <p
                style={{
                  marginTop: "10px",
                  color: "#888",
                  fontSize: "10px",
                }}
              >
                Standard T&C Applied
                <br />
                UIN/ADV/1836/Banner/Jan/2024-25
              </p>
            </div>
            <div
              style={{
                flexShrink: 0,
              }}
            >
              <img
                src={kapil}
                alt="Person"
                style={{
                  width: "150px",
                  height: "auto",
                  borderRadius: "8px",
                  backgroundColor: "transparent",
                  background: "transparent",
                }}
              />
            </div>
          </div>

          <div style={{position:'relative',top:"-150px",left:"-60px"}}>
            
           
              <img src={all} alt="one" />
              
           
        
          </div>
        </div>

        <Grid
          container
          spacing={2}
          style={{ width: "80%", alignItems: "left", textAlign: "left" }}
        ></Grid>
      </div>
     

      <div
        style={{ backgroundColor: "#F0F6FF", cursor: "pointer", padding: "3%" }}
      >
        <div style={{ marginLeft: "5%", height: "100%", marginBottom: "2%" }}>
          <Caus
            style={{ marginLeft: "5%", height: "100%", marginBottom: "2%" }}
          />
        </div>
      </div>
      <div>
        <img style={{ float: "left" }} src={left} alt="left-bg" />
        <p
          style={{
            position: "absolute",
            marginTop: "8%",
            fontSize: "36px",
            marginLeft: "12%",
            color: "#253858",
          }}
        >
          What makes <br></br>
          <b> Policybazaar </b>one of<br></br>
          <b> India's Favourite places</b> <br></br>
          to <b>buy insurance?</b>
        </p>
        <img style={{ float: "right" }} src={right} alt="left-bg" />

        <div className="home-d1">
          <div className="home-l" style={{ backgroundColor: "#0550C7" }}></div>
          <img src={part} alt="party" />
          <p>
            <b
              style={{
                color: "#0550C7",
                position: "absolute",
                marginBottom: "13px",
              }}
            >
              Over 9 million
            </b>
          </p>
          <p className="home-d-text">
            Customers trust us & have bought their insurance on Policy bazaar
          </p>
        </div>
        <div className="home-d2">
          <div className="home-l" style={{ backgroundColor: "#3AC2F3" }}></div>
          <img src={sear1} alt="party" />
          <p>
            <b
              style={{
                color: "#3AC2F3",
                position: "absolute",
                marginBottom: "13px",
              }}
            >
              50+ insurers
            </b>
          </p>
          <p className="home-d-text">
            partnered with us so that you can compare easily & transparentlyr
          </p>
        </div>
        <div className="home-d3">
          <div className="home-l" style={{ backgroundColor: "#57CD1D" }}></div>
          <img src={sear2} alt="party" />
          <p>
            <b
              style={{
                color: "#57CD1D",
                position: "absolute",
                marginBottom: "13px",
              }}
            >
              Great Price
            </b>
          </p>
          <p className="home-d-text">
            for all insurance plans available online
          </p>
        </div>
        <div className="home-d4">
          <div className="home-l" style={{ backgroundColor: "#FFB62C" }}></div>
          <img src={sear3} alt="party" />
          <p>
            <b
              style={{
                color: "#FFB62C",
                position: "absolute",
                marginBottom: "13px",
              }}
            >
              Claims
            </b>
          </p>
          <p className="home-d-text">
            support built in with every policy for help, when you need it the
            mostr
          </p>
        </div>
      </div>
      <div
        style={{
          marginTop: "45%",
          marginLeft: "12%",
          fontFamily:
            "Roboto,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif",
        }}
      >
        <h1>PB Advantage</h1>
        <div className="home-hl"></div>
        <p className="home-hp">
          When you buy insurance from us, you get more than just financial
          safety. You also get: our promise of simplifying complex insurance
          terms and conditions, quick stress-free claims, instant quotes from
          top insurers and being present for you in the toughest of times.
        </p>
        <p
          style={{ color: "#0663F6", fontWeight: "500", alignItems: "center" }}
        >
          Know more
        </p>
      </div>
      <div style={{ width: "80%", marginLeft: "15%" }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={2.2}>
            <Item
              style={{ height: "200px", alignItems: "center" }}
              className="home-de"
            >
              <img
                style={{ marginLeft: "15%", marginTop: "15%" }}
                src={Pri1}
                alt="one"
              />
              <h4
                style={{
                  color: "black",
                  fontSize: "20px",
                  marginBottom: "0px",
                }}
              >
                On best Prices
              </h4>
              <p style={{ marginTop: "0px" }}>Guaranteed</p>
            </Item>
          </Grid>
          <Grid item xs={2.2}>
            <Item
              style={{ height: "200px", alignItems: "center" }}
              className="home-de"
            >
              <img
                style={{ marginLeft: "15%", marginTop: "15%" }}
                src={Pri2}
                alt="one"
              />
              <h4
                style={{
                  color: "black",
                  fontSize: "20px",
                  marginBottom: "0px",
                }}
              >
                Unbiased Advice
              </h4>
              <p style={{ marginTop: "0px" }}>Keeping customers first.</p>
            </Item>
          </Grid>
          <Grid item xs={2.2}>
            <Item
              style={{ height: "200px", alignItems: "center" }}
              className="home-de"
            >
              <img
                style={{ marginLeft: "15%", marginTop: "15%" }}
                src={Pri3}
                alt="one"
              />
              <h4
                style={{
                  color: "black",
                  fontSize: "20px",
                  marginBottom: "0px",
                }}
              >
                100% Reliable
              </h4>
              <p style={{ marginTop: "0px" }}>Regulated by IRDAI</p>
            </Item>
          </Grid>
          <Grid item xs={2.2}>
            <Item
              style={{ height: "200px", alignItems: "center" }}
              className="home-de"
            >
              <img
                style={{ marginLeft: "15%", marginTop: "15%" }}
                src={Pri4}
                alt="one"
              />
              <h4
                style={{
                  color: "black",
                  fontSize: "20px",
                  marginBottom: "0px",
                }}
              >
                Claims Support
              </h4>
              <p style={{ marginTop: "0px" }}>Made Stress-free</p>
            </Item>
          </Grid>
          <Grid item xs={2.2}>
            <Item
              style={{ height: "200px", alignItems: "center" }}
              className="home-de"
            >
              <img
                style={{ marginLeft: "15%", marginTop: "15%" }}
                src={Pri5}
                alt="one"
              />
              <h5
                style={{
                  color: "black",
                  fontSize: "20px",
                  marginBottom: "0px",
                }}
              >
                Happy to Help
              </h5>
              <p style={{ marginTop: "0px" }}>Every day of the week</p>
            </Item>
          </Grid>
        </Grid>
      </div>
      <Testimonials />
      <div
        style={{
          backgroundColor: "#F0F6FF",
          width: "100%",
          height: "543px",
          marginTop: "5%",
        }}
      >
        <img
          style={{ float: "right", marginRight: "15%", marginTop: "5%" }}
          src={bigp}
          alt="phone"
        />
        <div
          style={{
            marginLeft: "13%",
            position: "absolute",
            fontFamily:
              "Roboto,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif",
          }}
        >
          <h1
            style={{
              fontWeight: "500",
              fontFamily:
                "Roboto,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif",
              lineHeight: "114%",
            }}
          >
            Get the Policybazaar app
          </h1>
          <div className="home-hl"></div>
          <p style={{ color: "#253858", fontSize: "18px" }}>
            Get control of all your insurance needs anywhere, anytime
          </p>

          <p style={{ position: "absolute", top: "100%", left: "0%" }}>
            {" "}
            <img src={star} alt="star" /> Compare different insurance policies
          </p>
          <p style={{ position: "absolute", top: "130%", left: "0%" }}>
            <img src={star} alt="star" /> Buy, store and share all your policies
            online
          </p>
          <p style={{ position: "absolute", top: "160%", left: "0%" }}>
            <img src={star} alt="star" /> Track your policy status on the go
          </p>
          <p style={{ position: "absolute", top: "190%", left: "0%" }}>
            <img src={star} alt="star" /> Download your policy with a single tap
          </p>
          <p
            style={{
              position: "absolute",
              top: "225%",
              left: "0%",
              color: "#253858",
            }}
          >
            Download our app from
          </p>
          <div
            style={{
              position: "absolute",
              top: "265%",
              left: "0%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <img src={Ap2} alt="app" style={{ marginRight: "7%" }} />

            <img src={Ap1} alt="app" />
          </div>
        </div>
      </div>
      <div className="home-ma-pat">
        <p className="home-pat">Our Partners</p>
        <p className="home-pat1">Leading insurers for your financial freedom</p>
        <div
          style={{
            width: "70%",
            marginLeft: "15%",
            marginRight: "15%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o1} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o2} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o3} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o4} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o5} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o6} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o7} alt="one" />
          </div>
        </div>

        <div
          style={{
            width: "70%",
            marginLeft: "15%",
            marginTop: "2%",
            marginRight: "15%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o8} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px", height: "40px" }} src={o9} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o4} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o5} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={o6} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o7} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={o5} alt="one" />
          </div>
        </div>
        <div
          style={{
            width: "70%",
            marginLeft: "15%",
            marginTop: "2%",
            marginRight: "15%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k1} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px", height: "40px" }} src={k0} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k3} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k2} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={k8} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k3} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={k5} alt="one" />
          </div>
        </div>
        <div
          style={{
            width: "70%",
            marginLeft: "15%",
            marginTop: "2%",
            marginRight: "15%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k7} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px", height: "40px" }} src={k6} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k5} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k0} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={k3} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k8} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={k4} alt="one" />
          </div>
        </div>
        <div
          style={{
            width: "70%",
            marginLeft: "15%",
            marginTop: "2%",
            marginRight: "15%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k2} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px", height: "40px" }} src={o0} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o4} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k1} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={k9} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k8} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={k4} alt="one" />
          </div>
        </div>
        <div
          style={{
            width: "70%",
            marginLeft: "15%",
            marginTop: "2%",
            marginRight: "15%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o3} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px", height: "40px" }} src={k2} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k1} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={o5} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={o6} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px", height: "40px" }} src={o9} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={o0} alt="one" />
          </div>
        </div>
        <div
          style={{
            width: "70%",
            marginLeft: "15%",
            marginTop: "2%",
            marginRight: "15%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k7} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px", height: "40px" }} src={k6} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k5} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k0} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={k3} alt="one" />
          </div>
          <div className="home-ob">
            <img style={{ width: "90px" }} src={k8} alt="one" />
          </div>

          <div className="home-ob">
            <img style={{ width: "90px" }} src={k4} alt="one" />
          </div>
        </div>
      </div>

    
      <div style={{backgroundColor: "#ffffff", fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px"}}>
  <h2 style={{color: "#333333"}}>Have a question?</h2>
  <h3 style={{color: "#333333"}}>Here to help.</h3>
  <hr style={{border: "1px solid #0066cc", width: "100px", margin: "20px auto"}} />
  <p style={{color: "#666666", lineHeight: "1.5"}}>Our friendly customer support team is your extended family. Speak your heart out. They listen with undivided attention to resolve your concerns. Give us a call, request a callback or drop us an email, we're here to help.</p>
  <div style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
    <div style={{backgroundColor: "#f2f2f2", padding: "10px", borderRadius: "5px", marginRight: "10px"}}>
      <span style={{fontWeight: "bold"}}>General Enquiries</span><br />
      care@policybazaar.com
    </div>
    <div style={{backgroundColor: "#f2f2f2", padding: "10px", borderRadius: "5px"}}>
      <span style={{fontWeight: "bold"}}>Customer Sales Enquiries</span><br />
      1800 - 208 - 8787
    </div>
  </div>
  <img src="path/to/image.jpg" alt="Customer Support Team" style={{maxWidth: "100%", height: "auto", marginTop: "20px"}} />
</div>

      <div className="home-inv">
        <div
          style={{
            marginLeft: "12%",
            marginTop: "5%",
            fontFamily:
              "Roboto,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif",
          }}
        >
          <h1>Group Brands</h1>
          <div className="home-hl"></div>

          <div
            className="marquee"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
            }}
          >
            <div
              style={{
                width: "300px",
                height: "100px",
                backgroundColor: "white",
                borderRadius: "4px",
                paddingTop: "30px",
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
            >
              <img src={invest1} alt="inv" />
            </div>
            <div
              style={{
                width: "200px",
                height: "100px",
                backgroundColor: "white",
                borderRadius: "4px",
                paddingTop: "35px",
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
            >
              <img src={invest2} alt="inv" />
            </div>
            <div
              style={{
                width: "200px",
                height: "100px",
                backgroundColor: "white",
                borderRadius: "4px",
                paddingTop: "30px",
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
            >
              <img src={invest1} alt="inv" />
            </div>
            <div
              style={{
                width: "200px",
                height: "100px",
                backgroundColor: "white",
                borderRadius: "4px",
                paddingTop: "35px",
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
            >
              <img src={invest2} alt="inv" />
            </div>
            <div
              style={{
                width: "200px",
                height: "100px",
                backgroundColor: "white",
                borderRadius: "4px",
                paddingTop: "35px",
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
            >
              <img src={invest2} alt="inv" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
