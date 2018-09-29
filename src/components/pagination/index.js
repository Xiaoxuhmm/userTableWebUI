import React from 'react';
import PropTypes from 'prop-types';
import {Pagination} from 'reactstrap';
import UserTablePaginationItem from './paginationItem';
import DisplayingDataPanel from './displayingDataPanel';
import {PaginationWrapper} from './style';


const renderPaginationItems = (pageLists, currentPage, totalPages, onPageClick) => {
  return pageLists.map((page)=>{
    return (
      <UserTablePaginationItem
        page={page}
        key={page}
        currentPage = {currentPage}
        totalPages = {totalPages}
        onPageClick = {onPageClick}
      />
    )
  })
}

const UserTablePagination = (props)=>{
  const {
    pageLists,
    currentPage,
    totalPages,
    userPerPage,
    totalUsers,
    onPageClick
  } = props;
  const paginationItems = renderPaginationItems(
    pageLists,
    currentPage,
    totalPages,
    onPageClick
  );
  return (
    <PaginationWrapper>
      <DisplayingDataPanel
        userPerPage = {userPerPage}
        currentPage = {currentPage}
        totalUsers = {totalUsers}
      />
      <Pagination>
        {paginationItems}
      </Pagination>
    </PaginationWrapper>
  )
}

UserTablePagination.defaultProps = {
  pageLists:    [],
  currentPage:  -1,
  totalPages:    0
}

UserTablePagination.propTypes = {
  pageLists:    PropTypes.arrayOf(PropTypes.string),
  currentPage:  PropTypes.number,
  totalPages:   PropTypes.number
}

export default UserTablePagination;
