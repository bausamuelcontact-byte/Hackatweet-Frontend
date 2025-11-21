import styles from "../styles/Login.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { isVisible } from "../reducers/login";
import { isVisibleSingin } from "../reducers/singin";
import Singup from "./Singup";
import Singin from "./Singin";

function Login() {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.login}>
          <div className={styles.text}>
            <img src="/logoclean.png" alt="logo" className={styles.logo}></img>
            <h1 className={styles.title}>See what's happening</h1>
            <h2 className={styles.littletitle}>Join Hackatweet today.</h2>
            <button
              className={styles.singup}
              onClick={() => {
                dispatch(isVisible());
              }}
            >
              Sign up
            </button>
            <p className={styles.account}>Already have an account ?</p>
            <button
              className={styles.singin}
              onClick={() => {
                dispatch(isVisibleSingin());
              }}
            >
              Sign in
            </button>
          </div>
          <Singup />
          <Singin />
        </div>
      </main>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/react-modal/3.14.3/react-modal.min.js"
        integrity="sha512-MY2jfK3DBnVzdS2V8MXo5lRtr0mNRroUI9hoLVv2/yL3vrJTam3VzASuKQ96fLEpyYIT4a8o7YgtUs5lPjiLVQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></script>
    </div>
  );
}

export default Login;
