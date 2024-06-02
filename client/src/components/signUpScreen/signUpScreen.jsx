import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Styles from "./signUpScreen.module.scss";
import { registerUser } from "../../store/user/userActions";
import { Spinner } from "../spinner";
import { successToast } from "../../utils";

function SignUpScreen() {
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let firstName = useRef("");
  let lastName = useRef("");
  let username = useRef("");
  let email = useRef("");
  let password = useRef("");
  let role = useRef("");

  const signUpUser = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(
      registerUser({
        firstname: firstName.value,
        lastname: lastName.value,
        username: username.value,
        email: email.value,
        password: password.value,
        role: role.value,
      })
    ).then(() => {
      e.target.reset();
      successToast("User Registered Successfully");
      navigate("/sign-in");
    });
  };

  return (
    <section className={Styles.mainContainer}>
      <Toaster />
      <div className={Styles.innerContainer}>
        <h2 className="text-center font-weight-normal pb-4">
          Create your account
        </h2>
        <form onSubmit={signUpUser}>
          <div className={Styles.inputsContainer}>
            <div className={Styles.loginText}>Register</div>
            <div className={Styles.inputContainer}>
              <label>First Name:</label>
              <input
                name="firstName"
                id="firstName"
                ref={(e) => {
                  firstName = e;
                }}
                type="text"
                required
              />
            </div>
            <div className={Styles.inputContainer}>
              <label>Last Name:</label>
              <input
                name="lastName"
                id="lastName"
                ref={(e) => {
                  lastName = e;
                }}
                type="text"
                required
              />
            </div>
            <div className={Styles.inputContainer}>
              <label>Username:</label>
              <input
                name="username"
                id="username"
                ref={(e) => {
                  username = e;
                }}
                type="text"
                required
              />
            </div>
            <div className={Styles.inputContainer}>
              <label>Email:</label>
              <input
                name="email"
                id="email"
                ref={(e) => {
                  email = e;
                }}
                type="email"
                required
              />
            </div>
            <div className={Styles.inputContainer}>
              <label>Password:</label>
              <input
                name="password"
                id="password"
                ref={(e) => {
                  password = e;
                }}
                type="password"
                required
              />
            </div>
            <div className={Styles.inputContainer}>
              <label>Role:</label>
              <select
                ref={(e) => {
                  role = e;
                }}
                defaultValue=""
                required
              >
                <option selected value="" disabled>
                  -
                </option>
                <option value="TEACHER">Teacher</option>
                <option value="ADMIN">Administrator</option>
                <option value="ADVISER">Pedagogical Adviser</option>
                <option value="HEADMASTER">Headmaster</option>
                <option value="CLERK">School Clerk</option>
              </select>
            </div>
            <Link to="/sign-in" className={Styles.alreadyAccount}>
              <div>Already have an account?</div>
            </Link>
          </div>
          {error && <p className="text-center">{error}</p>}
          {loading && <Spinner />}
          <button type="submit" className={Styles.formButton}>
            Register
          </button>
        </form>
      </div>
    </section>
  );
}

export { SignUpScreen };
