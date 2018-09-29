import React from 'react';
import {Table} from 'reactstrap';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import TableRow from './tableRow';
import TableHeader from './tableHeader';
import {
  TableWrapper,
  SpinnerWrapper
} from './style';

const UserTable = ({
  users,
  headers,
  sortUsers,
  isLoading,
  currentSortBy,
  currentSortOrder
}) => {
  if(isLoading){
    return (
      <TableWrapper>
        <SpinnerWrapper>
          <ReactLoading
            type = {"bars"}
          />
        </SpinnerWrapper>
      </TableWrapper>
    )
  }
  const tableRows = users.map(user => {
    return (
      <TableRow
        key = {user.email}
        user = {user}
      />
    )
  })
  return (
    <TableWrapper>
      <Table
        striped
      >
        <thead>
          <TableHeader
            headers =           {headers}
            sortUsers =         {sortUsers}
            currentSortBy =     {currentSortBy}
            currentSortOrder =  {currentSortOrder}
          />
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </Table>
    </TableWrapper>
  )
}

UserTable.defaultProps = {
  users   :         [],
  headers :         [],
  currentSortBy:    '',
  currentSortOrder: 0
}

UserTable.propTypes = {
  users:            PropTypes.arrayOf(PropTypes.object),
  headers:          PropTypes.arrayOf(PropTypes.string),
  sortUsers:        PropTypes.func,
  currentSortBy:    PropTypes.string,
  currentSortOrder: PropTypes.number
}

export default UserTable;
