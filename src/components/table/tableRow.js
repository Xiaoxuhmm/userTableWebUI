import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({user}) => {
  return (
    <tr
      key={user.email}
    >
      <th>
        {user.first}
      </th>
      <th>
        {user.last}
      </th>
      <th>
        <a
          href={`mailto:${user.email}`}
        >
          {user.email}
        </a>
      </th>
    </tr>
  )
}

TableRow.defaultProps = {
  user : {}
}

TableRow.propTypes = {
  user: PropTypes.shape({
    email:  PropTypes.string,
    first:  PropTypes.string,
    last:   PropTypes.string
  })
}


export default TableRow;
