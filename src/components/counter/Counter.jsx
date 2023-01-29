import React from "react";
import "./Counter.scss";

function Counter() {
  return (
    <div class="counter">
      <section id="counter" className="sec-padding">
        <div class="heading mt-0">
          <h3 className="subTitle">Our achievements</h3>
          <h4 className="subText ">
            Find all our achievements and success we earn..
          </h4>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 ">
              <div className="count">
                {" "}
                <span className="fa fa-users" />
                <p className="number">126</p>
                <h4>Happy Clients</h4>{" "}
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="count">
                {" "}
                <span className="fa fa-box" />
                <p className="number">535</p>
                <h4>Loan Dispersed</h4>{" "}
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="count">
                {" "}
                <span className="fa fa-hourglass-start" />
                <p className="number">896</p>
                <h4>Loan Initiated</h4>{" "}
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="count">
                {" "}
                <span className="fa fa-person-running" />
                <p className="number">77 %</p>
                <h4>Success Rate</h4>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Counter;
