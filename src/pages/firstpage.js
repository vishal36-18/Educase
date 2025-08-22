import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styleSheet/firstpage.module.css";


export default function FirstPage() {
  const navigate = useNavigate();

  return (
   <>
     <div className={styles.container}>
      <img></img>
      <div className={styles.part2}>
        <h2>Welcome to PopX</h2>
        <p>Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit,</p>
        <button onClick={() => navigate("/Signup")} className={styles.button1}>Create Account</button>
        <button onClick={() => navigate("/Login")} className={styles.button2}>Already Registered? Login</button>
      </div>
    </div>
    <div className={styles.footer}>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/Profile")}>Left</button>1
      <button onClick={() => navigate("/Login")}>Right</button>
    </div>
   </>
  );
}
