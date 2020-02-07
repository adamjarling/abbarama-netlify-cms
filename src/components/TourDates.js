import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const TourDates = ({ tourDates = [] }) => {
  return (
    <ul className="alt align-left tour-dates">
      {tourDates.map(({ date, location, venue, rsvp, ticketUrl, venueUrl }) => (
        <li key={date}>
          <div className="row">
            <div className="col-3 col-12-small date">
              {moment(date).format("MMM D YYYY")}
            </div>
            <div className="col-4 col-12-small">
              {venueUrl && (
                <p className="venue">
                  <a href={venueUrl} target="_blank" rel="noopener noreferrer">
                    {venue}
                  </a>
                </p>
              )}
              {!venueUrl && <p className="venue">{venue}</p>}
              <p>{location}</p>
            </div>
            <div className="col-5 col-12-small actions-wrapper">
              {rsvp && (
                <a
                  href={rsvp}
                  className="button narrow icon solid fa-user-plus"
                  rel="noopener noreferrer"
                >
                  RSVP
                </a>
              )}
              {ticketUrl && (
                <a
                  href={ticketUrl}
                  className="button narrow icon solid fa-ticket-alt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tickets
                </a>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

TourDates.propTypes = { tourDates: PropTypes.array };

export default TourDates;
