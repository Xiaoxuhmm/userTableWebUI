import React from 'react';
import PropTypes from 'prop-types';
import {
  FaSort,
  FaSortDown,
  FaSortUp
} from 'react-icons/fa';

const TableHeader = ({
  headers,
  sortUsers,
  currentSortBy,
  currentSortOrder
}) => {
  const tableHeaders = headers.map((header)=>{
    return (
      <th
        key={header}
        onClick={()=>{sortUsers(header)}}
      >
          {header}
          {
            header === currentSortBy ?(
              currentSortOrder === 1? (
                <FaSortUp />
              ) : (
                <FaSortDown />
              )
            ) : (
              <FaSort />
            )
          }
      </th>
    )
  })
  return (
    <tr>
      {tableHeaders}
    </tr>
  )
}

TableHeader.defaultProps = {
  headers:          [],
  currentSortBy:    '',
  currentSortOrder: 0
}


TableHeader.propTypes = {
  headers:          PropTypes.arrayOf(PropTypes.string),
  sortUsers:        PropTypes.func,
  currentSortBy:    PropTypes.string,
  currentSortOrder: PropTypes.number,
}

export default TableHeader;
