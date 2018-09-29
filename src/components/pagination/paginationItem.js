import React from 'react';
import PropTypes from 'prop-types';
import {
  PaginationItem,
  PaginationLink
} from 'reactstrap';

const UserTablePaginationItem = ({
  page,
  currentPage,
  totalPages,
  onPageClick
}) => {
  const onClick = () => {onPageClick(page)};
  if(page === "first"){
    return (
      <PaginationItem
        key={page}
        disabled= {currentPage === 0}
        onClick = {onClick}
      >
        <PaginationLink previous />
      </PaginationItem>
    )
  }else if(page === "last"){
    return (
      <PaginationItem
        key={page}
        disabled = {currentPage === totalPages - 1}
        onClick = {onClick}
      >
        <PaginationLink next />
      </PaginationItem>
    )
  }else if(page === '<'){
    return (
      <PaginationItem
        key={page}
        disabled ={currentPage === 0}
        onClick = {onClick}
      >
        <PaginationLink>
          {page}
        </PaginationLink>
      </PaginationItem>
    )
  }else if(page === '>'){
      return (
        <PaginationItem
          key={page}
          disabled ={currentPage === totalPages - 1}
          onClick = {onClick}
        >
          <PaginationLink>
            {page}
          </PaginationLink>
        </PaginationItem>
      )
  }else{
    return (
      <PaginationItem
        key={page}
        active={parseInt(page, 10) === currentPage + 1}
        onClick = {onClick}
      >
        <PaginationLink>
          {page}
        </PaginationLink>
      </PaginationItem>
    )
  }
}

UserTablePaginationItem.defaultProps = {
  page        : '0',
  currentPage :  0,
  totalPages  :  0
}

UserTablePaginationItem.propTypes = {
  page        : PropTypes.string,
  currentPage : PropTypes.number,
  totalPages  : PropTypes.number,
  onPageClick : PropTypes.func
}

export default UserTablePaginationItem;
