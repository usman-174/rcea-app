import { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Sidebar } from "../sidebar";

function PublicRoute({ Component, ...props }) {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState(props.title);
  const { userInfo } = useSelector((state) => state.user);

  const showNavbar = () => {
    return !location.pathname.startsWith("/sign-in") && !location.pathname.startsWith("/sign-up");
  };

  useEffect(() => {
    const title = props.title ? `${props.title} | RCEA` : "RCEA";
    document.title = pageTitle || title;
  }, [props.title, pageTitle]);
  return (
    <>
      {showNavbar() && <Sidebar />}
      {userInfo && props.restricted ? (
        <Navigate
          to={{ pathname: "/", state: { from: props.location } }}
          replace
        />
      ) : (
        <Component {...props} setPageTitle={setPageTitle} />
      )}
    </>
  );
}

export { PublicRoute };
