import styles from "../styles/Login.module.css";
import { useState } from "react";
import ReactModal from "react-modal";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [visible, setVisible] = useState(false);

  function singup() {
    fetch("http://localhost:3000/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { username: username, firstname: firstname, password: password },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("newClient ok", data);
      });
  }

  function signupModal() {
    setVisible(true);
  }

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
                console.log("hello"), signupModal();
              }}
            >
              Sign up
            </button>
            <p className={styles.account}>Already have an account ?</p>
            <button className={styles.singin}>Sign in</button>
          </div>
          <ReactModal
            isOpen={visible}
            style={{
              overlay: {
                top: 200,
                bottom: 200,
                right: 200,
                left: 200,
                backgroundColor: "rgb(21, 29, 39)",
              },
              content: {
                backgroundColor: "rgb(21, 29, 39)",
                color: "rgba(255, 255, 255, 1)",
              },
            }}
          >
            <p>Username</p>
            <input
              type="text"
              placeholder="Username"
              className={styles.input}
            ></input>
            <p>Firstname</p>
            <input
              type="text"
              placeholder="Firstname"
              className={styles.input}
            ></input>
            <p>Password</p>
            <input
              type="text"
              placeholder="Password"
              className={styles.input}
            ></input>
          </ReactModal>
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
