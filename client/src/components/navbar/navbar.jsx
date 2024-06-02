import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import Styles from "./navbar.module.scss";

import { logout } from "../../store/user/userActions";

export const Navbar = () => {
  const { selectedSchool } = useSelector((state) => state?.school);
//   const navigate = useNavigate();
	const dispatch = useDispatch();

  const handleLogout =  () => {
	
	dispatch(logout({localStorage}))
  };
  return (
    <nav className={Styles.navbar}>
      <Container>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            School: <b>{selectedSchool?.name}</b>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <button className="primaryButton ml-4">Select School</button>
            </Link>
          </div>
          <div className={Styles.user}>
            <button className="primaryButton " onClick={handleLogout}>
              logout
            </button>
            <img
              className={Styles.avatar}
              src="https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg"
              alt="user"
            />
          </div>
        </div>
      </Container>
    </nav>
  );
};
