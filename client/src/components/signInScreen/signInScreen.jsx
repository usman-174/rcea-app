import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../store/user/userActions';
import { Spinner } from '../spinner';
import Styles from './signInScreen.module.scss';

function SignInScreen() {
	const { loading, error, userInfo } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	let email = useRef('');
	let password = useRef('');

	// redirect authenticated user to Home screen
	useEffect(() => {

		if (userInfo) {
			navigate('/');
		}
	}, [navigate, userInfo]);

	const signInUser = async (e) => {
		e.preventDefault();
		e.stopPropagation();

		await new Promise((resolve, reject) => {
			dispatch(loginUser({
			  email: email.value,
			  password: password.value,
			  localStorage
			})).then(resolve).catch(reject);
		  });
		
		
		  navigate('/');
	};
	
	return (
		<section className={Styles.mainContainer}>
			<div className={Styles.innerContainer}>
				<h2 className="text-center font-weight-normal pb-4">Welcome Back!</h2>
				<form onSubmit={signInUser}>
					<div className={Styles.inputsContainer}>
						<div className={Styles.loginText}>Log In</div>
						<div className={Styles.inputContainer}>
							<label>Email:</label>
							<input
								name="email"
								id="email"
								ref={(e) => { email = e; } }
								type="email"
								required />
						</div>
						<div className={Styles.inputContainer}>
							<label>Password:</label>
							<input
								name="password"
								id="password"
								ref={(e) => { password = e; } }
								type="password"
								required />
						</div>
						{/* <Link to='/sign-up' className={Styles.forgotPassword}>
							<div>Forgot Password?</div>
						</Link> */}
					</div>
					{loading && <Spinner />}
					{error && <p className="text-center">{error}</p>}
					<button type="submit" className={Styles.formButton}>Login</button>
					<button type="button" onClick={() => navigate('/sign-up')} className={Styles.formButton}>Create an account</button>
				</form>
			</div>
		</section>
	);
}

export { SignInScreen };

