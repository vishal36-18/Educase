import React from "react";
import styles from "../styleSheet/FourthPage.module.css";
import { useNavigate } from "react-router-dom";

export default function FourthPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.account}>Account Settings</div>
        <div className={styles.container1}>
          <div className={styles.user}>
            <img src="" />
            <p>
              Marry Doe
              <br /> Marry@gmail.com
            </p>
          </div>
          <p>
            Lorem ipsum Dolor Sit Ammet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
        <hr></hr>
        <div className={styles.container2}></div>
        <hr></hr>
      </div>
      <div className={styles.footer}>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/Signup")}>Left</button>4
        <button onClick={() => navigate("/")}>Right</button>
      </div>
    </>
  );
}
