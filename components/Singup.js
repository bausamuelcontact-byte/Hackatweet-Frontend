import styles from "../styles/Singup.module.css";
import ReactModal from "react-modal";
import { useState } from "react";
import { useSelector } from "react-redux";

function Singup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [verifConnection, setVerifConnection] = useState(false);

  const visible = useSelector((state) => state.login.value);

  //fetch création User
  function singupBtn() {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        firstname: firstname,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("newClient ok", data);
      });
  }

  return (
    <ReactModal
      isOpen={visible}
      style={{
        overlay: {
          top: "20%",
          bottom: "20%",
          right: "37%",
          left: "37%",
          backgroundColor: "rgb(21, 29, 39)",
          border: "1px solid #000000",
          borderRadius: 30,
        },
        content: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "rgb(21, 29, 39)",
          color: "rgba(255, 255, 255, 1)",
        },
      }}
    >
      <div>
        <p>Username</p>
        <input
          type="text"
          placeholder="Username"
          className={styles.input}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <p>Firstname</p>
        <input
          type="text"
          placeholder="Firstname"
          className={styles.input}
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <p>Password</p>
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <button className={styles.signup} onClick={() => singupBtn()}>
          Sign up
        </button>
      </div>
    </ReactModal>
  );
}

export default Singup;
