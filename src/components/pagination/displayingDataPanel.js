import React from 'react';
import PropTypes from 'prop-types';

const DisplayingDataPanel = ({currentPage, userPerPage, totalUsers}) => {
    const start = Math.max(0, currentPage * userPerPage + 1);
    const end = Math.min((currentPage + 1) * userPerPage, totalUsers);
    return (
      <span>
        {`Display: ${start}-${end} of ${totalUsers}`}
      </span>
    )
}

DisplayingDataPanel.defaultProps = {
  currentPage: 0,
  userPerPage: 0,
  totalUsers: 0,
}

DisplayingDataPanel.propTypes = {
  currentPage:  PropTypes.number,
  userPerPage:  PropTypes.number,
  totalUsers:   PropTypes.number,
}

export default DisplayingDataPanel;
