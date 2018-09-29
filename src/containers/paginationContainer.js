import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UserTablePagination from '../components/pagination';
import {connect} from 'react-redux';
import {pageTo} from '../actions/userTable';

class PaginationContainer extends Component{
  render(){
    return (
      <UserTablePagination
        {...this.props}
      />
    )
  }
}

PaginationContainer.defaultProps = {
  pageList:    [],
  currentPage:  0,
  totalPages:   0,
  userPerPage:  0,
  totalUsers:   0
}

PaginationContainer.propTypes = {
  pageList:    PropTypes.arrayOf(PropTypes.string),
  currentPage:  PropTypes.number,
  totalPages:   PropTypes.number,
  userPerPage:  PropTypes.number,
  totalUsers:   PropTypes.number,
  onPageClick:  PropTypes.func
}

const mapStateToProps = (state, ownProps)=> {
  const src = state.userTableReducer;
  const {
    paginationList,
    currentPage,
    totalPages,
    userPerPage,
    totalUsers
  } = src;
  return {
    ...ownProps,
    pageList: paginationList,
    currentPage,
    totalPages,
    userPerPage,
    totalUsers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPageClick : (page) => {dispatch(pageTo(page))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationContainer);
