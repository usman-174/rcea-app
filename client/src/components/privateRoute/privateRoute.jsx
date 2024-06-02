import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

import { Sidebar } from "../sidebar";
import { Navbar } from "../navbar";

function PrivateRoute({ Component, ...props }) {
  const location = useLocation();
  const { userInfo } = useSelector((state) => state.user);
  const hiddenNavbarPaths = ["/", "/academic-select", "/sign-in", "/sign-up"];

  const shouldShowNavbar = !hiddenNavbarPaths.includes(location.pathname);
  document.title = props.title ? `${props.title} | RCEA` : "RCEA";

  return (
    <Row>
      <Col sm={!shouldShowNavbar ? 0 : 2} className="m-0 pr-0">
        {shouldShowNavbar && <Sidebar />}
      </Col>
      <Col sm={!shouldShowNavbar ? 12 : 10} className="m-0 p-0">
        {userInfo ? (
          <>
            {shouldShowNavbar && <Navbar />}
            <div className="pl-2 pr-4">
              <Component {...props} />
            </div>
          </>
        ) : (
          <Navigate
            to={{ pathname: "/sign-in", state: { from: props.location } }}
            replace
          />
        )}
       
      </Col>
    </Row>
  );
}

export { PrivateRoute };
