import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  fetchData,
  sortUsers,
  fetchFromUrl
} from '../actions/userTable';
import UserTable from '../components/table';



class UserTableContainer extends Component{
  static defaultProps = {
    pageIndex : 0,
    tablePages: [[]],
  }

  componentDidMount(){
    this.props.fetchFromUrl(500);
  }

  render(){
    return (
      <UserTable
        {...this.props}
        users={this.props.tablePages[this.props.currentPage]}
      />
    )
  }
}

UserTableContainer.propTypes = {
  isLoading:        PropTypes.bool,
  users :           PropTypes.arrayOf(PropTypes.object),
  headers:          PropTypes.arrayOf(PropTypes.string),
  sortUsers:        PropTypes.func,
  currentSortBy:    PropTypes.string,
  currentSortOrder: PropTypes.number,
}



const mapStateToProps = (state, ownProps) => {
  const src = state.userTableReducer;
  const {
    tablePages,
    currentPage,
    headers,
    currentSortBy,
    currentSortOrder,
    isLoading
  } = src;
  return {
    ...ownProps,
    tablePages,
    currentPage,
    headers,
    currentSortBy,
    currentSortOrder,
    isLoading
  }
}



const mapDispatchToProps = (dispatch) => {
  return (
    {
      fetchUsers: (data)=> {dispatch(fetchData(data))},
      sortUsers: (sortBy)=> {dispatch(sortUsers(sortBy))},
      fetchFromUrl: (number) => {fetchFromUrl(dispatch, number)}
    }
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTableContainer);
