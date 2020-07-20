import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import { DatePicker } from "antd";

import * as styles from "./CreateEvent.module.css";

const { RangePicker } = DatePicker;

class CreateEventGeneral extends React.Component {
  state = {
    eventName: "",
    eventDesc: "",
    startDate: "",
    endDate: "",
    location: "",
    types: [],
    open: false,
  };

  gameTypeOption = [
    {
      id: 1,
      option: "Game Tournament",
    },
    {
      id: 2,
      option: "Webinar",
    },
    {
      id: 3,
      option: "Workshop",
    },
  ];

  handleOnClick = item => {
    if (!this.state.types.some(current => current.id === item.id)) {
      this.setState({
        types: [...this.state.types, item],
      });
    } else {
      let selectionAfterRemoval = this.state.types;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        current => current.id !== item.id
      );
      this.setState({
        types: [...selectionAfterRemoval],
      });
    }
  };

  isItemSelected = item => {
    if (this.state.types.some(current => current.id === item.id)) {
      return true;
    }
    return false;
  };

  dropDown = () => {
    return (
      <div className={styles.dropDownMenu}>
        {this.gameTypeOption.map(item => (
          <div
            className={
              this.isItemSelected(item)
                ? cx(styles.dropDownMenuItem, styles.selectedDropDownMenuItem)
                : styles.dropDownMenuItem
            }
            key={item.id}
            onClick={() => this.handleOnClick(item)}
          >
            {item.option}
          </div>
        ))}
      </div>
    );
  };

  render() {
    return (
      <div>
        <div className={styles.componentHeader}>general</div>
        <div className={styles.innerComponent}>
          <form
            onSubmit={event => {
              event.preventDefault();
            }}
          >
            <label htmlFor="tournament-name" className={styles.label}>
              Event Name
            </label>
            <br />
            <input
              name="tournament-name"
              type="text"
              onChange={event => {
                this.setState({
                  eventName: event.target.value,
                });
              }}
              value={this.state.eventName}
              placeholder="Enter the Name of Tournament/Event"
              autoComplete="off"
            />
            <br />

            <label htmlFor="event-description" className={styles.label}>
              Event Description
            </label>
            <br />
            <textarea
              name="event-description"
              className={styles.eventDescription}
              onChange={event => {
                this.setState({
                  eventDesc: event.target.value,
                });
              }}
              value={this.state.eventDesc}
              placeholder="Enter the details like rules etc. for the event."
              autoComplete="off"
            />
            <br />

            <div className={styles.eventDates}>
              <div className={styles.startDate}>
                <label htmlFor="Start Date" className={styles.label}>
                  Start Date
                </label>
                <br />
                <DatePicker className={styles.datePicker} />
              </div>

              <div className={styles.endDate}>
                <label htmlFor="end-date" className={styles.label}>
                  end Date
                </label>
                <br />
                <DatePicker className={styles.datePicker} />
              </div>
            </div>
            <br />
            <label htmlFor="event-type" className={styles.label}>
              Select Type(s)
            </label>
            <div
              className={styles.dropDownSelect}
              onClick={() => {
                this.setState({ open: !this.state.open });
              }}
            >
              Select the type of event(s)
            </div>
            {this.state.open && this.dropDown()}
            <br />
            <label htmlFor="event-location" className={styles.label}>
              Location
            </label>
            <br />
            <input
              name="event-location"
              type="text"
              onChange={event => {
                this.setState({
                  location: event.target.value,
                });
              }}
              value={this.state.location}
              placeholder="Enter the Location of Tournament/Event"
              autoComplete="off"
            />
            <br />
            <div className={styles.createEventInfoSubmitButton}>
              <Link to="/createevent/about">
                <input type="submit" value="Next" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateEventGeneral;
