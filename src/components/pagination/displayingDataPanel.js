import React from 'react';
import PropTypes from 'prop-types';

const DisplayingDataPanel = ({currentPage, numberPerPage, totalNum}) => {
    const end = Math.min((currentPage + 1) * numberPerPage, totalNum);
    const start = Math.min(end, Math.max(0, currentPage * numberPerPage + 1));
    return (
      <span>
        {`Display: ${start}-${end} of ${totalNum}`}
      </span>
    )
}

DisplayingDataPanel.defaultProps = {
  currentPage: 0,
  numberPerPage: 0,
  totalNum: 0,
}

DisplayingDataPanel.propTypes = {
  currentPage:  PropTypes.number,
  numberPerPage:  PropTypes.number,
  totalNum:   PropTypes.number,
}

export default DisplayingDataPanel;
