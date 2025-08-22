import React from "react";
import styles from "../styleSheet/ThirdPage.module.css";
import { useNavigate } from "react-router-dom";

export default function ThirdPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.container1}>
          <h2>
            Create your
            <br /> PopX account
          </h2>
          <form onSubmit={() => navigate("/Profile")}>
            <div className={styles.inputGroup}>
              <label>
                Full Name<span>*</span>
              </label>
              <input type="text" required></input>
            </div>
            <div className={styles.inputGroup}>
              <label>
                Phone number<span>*</span>
              </label>
              <input type="number" required></input>
            </div>
            <div className={styles.inputGroup}>
              <label>
                Email address<span>*</span>
              </label>
              <input type="email" required></input>
            </div>
            <div className={styles.inputGroup}>
              <label>
                Password<span>*</span>
              </label>
              <input type="text" required></input>
            </div>
            <div className={styles.inputGroup}>
              <label>
                Company name<span>*</span>
              </label>
              <input type="text" required></input>
            </div>
            <p>
              Are you an Agency?<span>*</span>
            </p>
            <input type="radio" id="yes" name="create"></input>
            <label for="yes">Yes</label>
            <input type="radio" id="no" name="create"></input>
            <label for="no">No</label>
            <button className={styles.create}>Create Account</button>
          </form>
        </div>
      </div>
      <div className={styles.footer}>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/Login")}>Left</button>3
        <button onClick={() => navigate("/Profile")}>Right</button>
      </div>
    </>
  );
}
