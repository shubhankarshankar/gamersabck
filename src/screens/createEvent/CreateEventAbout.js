import React from "react";
import { Link } from "react-router-dom";

import * as styles from "./CreateEvent.module.css";

class CreateEventAbout extends React.Component {
  state = {
    gameName: "",
    ticketName: "",
    entryFee: "",
    regStartDate: "",
    regEndDate: "",
    playerMode: "solo",
    nplayers: "",
    nsubs: "",
    nteams: "",
  };

  onRadioChange = event => {
    this.setState({
      playerMode: event.target.value,
    });
  };

  render() {
    return (
      <div className>
        <div className={styles.componentHeader}>about</div>
        <div className={styles.innerComponent}>
          <form
            onSubmit={event => {
              event.preventDefault();
            }}
          >
            <label htmlFor="game-name" className={styles.label}>
              Game Name
            </label>
            <br />
            <input
              name="game-name"
              type="text"
              onChange={event => {
                this.setState({
                  gameName: event.target.value,
                });
              }}
              value={this.state.eventName}
              placeholder="Enter the Name of the Game"
              autoComplete="off"
            />
            <br />
            <div className={styles.ticketInfo}>
              <div className={styles.tName}>
                <label htmlFor="ticket-name" className={styles.label}>
                  Ticket Name
                </label>
                <br />
                <input
                  name="ticket-name"
                  type="text"
                  onChange={event => {
                    this.setState({
                      ticketName: event.target.value,
                    });
                  }}
                  value={this.state.ticketName}
                  placeholder="Enter the Name of the Ticket"
                  autoComplete="off"
                />
              </div>

              <div className={styles.tFee}>
                <label htmlFor="ticket-price" className={styles.label}>
                  Entry Fee
                </label>
                <br />
                <input
                  name="ticket-price"
                  type="text"
                  onChange={event => {
                    this.setState({
                      entryFee: event.target.value,
                    });
                  }}
                  value={this.state.entryFee}
                  placeholder="Enter the Entry Fee, mention the unit as well"
                  autoComplete="off"
                />
              </div>
            </div>
            <br />
            <div className={styles.regInfo}>
              <div className={styles.regStartDate}>
                <label htmlFor="reg-start-date" className={styles.label}>
                  Registerations Start Date
                </label>
                <br />
                <input
                  name="reg-start-date"
                  type="text"
                  onChange={event => {
                    this.setState({
                      regStartDate: event.target.value,
                    });
                  }}
                  value={this.state.regStartDate}
                  placeholder="Enter Date in dd-mm-yyy format."
                  autoComplete="off"
                />
              </div>

              <div className={styles.regEndDate}>
                <label htmlFor="reg-end-date" className={styles.label}>
                  Registerations End Date
                </label>
                <br />
                <input
                  name="reg-end-date"
                  type="text"
                  onChange={event => {
                    this.setState({
                      regEndDate: event.target.value,
                    });
                  }}
                  value={this.state.regEndDate}
                  placeholder="Enter Date in dd-mm-yyy format."
                  autoComplete="off"
                />
              </div>
            </div>
            <br />
            <label htmlFor="game-name" className={styles.label}>
              What will be the player mode?
            </label>
            <br />
            <input
              type="radio"
              value="solo"
              checked={this.state.playerMode === "solo"}
              onChange={this.onRadioChange}
            />
            Solo <br />
            <input
              type="radio"
              value="multi-player"
              checked={this.state.playerMode === "multi-player"}
              onChange={this.onRadioChange}
            />
            Multiplayer
            <br />
            {this.state.playerMode === "multi-player" && (
              <div className={styles.playersInfo}>
                <div className={styles.nPlayers}>
                  <label htmlFor="nplayers" className={styles.label}>
                    No. of Players in a team
                  </label>
                  <br />
                  <input
                    name="nplayers"
                    type="text"
                    onChange={event => {
                      this.setState({
                        nplayers: event.target.value,
                      });
                    }}
                    value={this.state.nplayers}
                    placeholder="Enter the number of players in a team"
                    autoComplete="off"
                  />
                  <br />
                </div>

                <div className={styles.nSubs}>
                  <label htmlFor="nsubs" className={styles.label}>
                    No. of substitutes in a team
                  </label>
                  <br />
                  <input
                    name="nsubs"
                    type="text"
                    onChange={event => {
                      this.setState({
                        nsubs: event.target.value,
                      });
                    }}
                    value={this.state.nsubs}
                    placeholder="Enter the number of substitutes in a team"
                    autoComplete="off"
                  />
                  <br />
                </div>
              </div>
            )}
            <label htmlFor="nteams" className={styles.label}>
              Expected total No. of teams/players
            </label>
            <br />
            <input
              name="teams"
              type="text"
              onChange={event => {
                this.setState({
                  nteams: event.target.value,
                });
              }}
              value={this.state.nteams}
              placeholder="Enter the total number of expected teams/players in the tournament"
              autoComplete="off"
            />
            <br />
            <div className={styles.createEventInfoSubmitButton}>
              <Link to="/createevent/rules-regulations">
                <input type="submit" value="Next" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateEventAbout;
