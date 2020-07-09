import React, { Component } from "react";
import styles from "./TopHeader.module.css";
import { Avatar } from "antd";
import { Button } from "antd";
export default class TopHeader extends Component {
  render() {
    return (
      <>
        <div className={styles.topheader}>
          <div className={styles.branding}>
            <label className={styles.l1}>Gamersback</label>
            <label className={styles.l2}>Unleash the gamer in you</label>
          </div>
        </div>
      </>
    );
  }
}
