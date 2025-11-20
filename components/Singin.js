import styles from "../styles/Singup.module.css";
import ReactModal from "react-modal";
import { useState } from "react";
import { useSelector } from "react-redux";

function Singup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [verifConnection, setVerifConnection] = useState(false);

  const visible = useSelector((state) => state.singin.value);

  //Fetch de connexion user
  function singinBtn() {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setVerifConnection(true);
          console.log("Connection Ok", data);
        } else {
          console.log("Calmate hombre");
        }
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
        <button className={styles.signup} onClick={() => singinBtn()}>
          Sign in
        </button>
      </div>
    </ReactModal>
  );
}

export default Singup;
