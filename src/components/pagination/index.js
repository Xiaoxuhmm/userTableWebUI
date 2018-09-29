import React from 'react';
import PropTypes from 'prop-types';
import {Pagination} from 'reactstrap';
import UserTablePaginationItem from './paginationItem';
import DisplayingDataPanel from './displayingDataPanel';
import {PaginationWrapper} from './style';


const renderPaginationItems = (pageList, currentPage, totalPages, onPageClick) => {
  return pageList.map((page)=>{
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
    pageList,
    currentPage,
    totalPages,
    userPerPage,
    totalUsers,
    onPageClick
  } = props;
  const paginationItems = renderPaginationItems(
    pageList,
    currentPage,
    totalPages,
    onPageClick
  );
  return (
    <PaginationWrapper>
      <DisplayingDataPanel
        numberPerPage = {userPerPage}
        currentPage = {currentPage}
        totalNum = {totalUsers}
      />
      <Pagination>
        {paginationItems}
      </Pagination>
    </PaginationWrapper>
  )
}

UserTablePagination.defaultProps = {
  pageList:    [],
  currentPage:  -1,
  totalPages:    0
}

UserTablePagination.propTypes = {
  pageList:    PropTypes.arrayOf(PropTypes.string),
  currentPage:  PropTypes.number,
  totalPages:   PropTypes.number
}

export default UserTablePagination;
