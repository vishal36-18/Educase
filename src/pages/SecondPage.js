import React from "react";
import styles from "../styleSheet/SecondPage.module.css";
import { useNavigate } from "react-router-dom";

export default function SecondPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.container1}>
          <h2>
            Signin to your
            <br /> PopX account
          </h2>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit,
          </p>
          <form onSubmit={() => navigate("/Profile")}>
            <div className={styles.inputGroup}>
              <label>Email Address</label>
              <input type="email" placeholder="Enter email address" required />
            </div>
            <div className={styles.inputGroup}>
              <label>Password</label>
              <input type="text" placeholder="Enter password" required></input>
            </div>
            <button className={styles.login}>Login</button>
          </form>
        </div>
      </div>
      <div className={styles.footer}>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/")}>Left</button>2
        <button onClick={() => navigate("/Signup")}>Right</button>
      </div>
    </>
  );
}
