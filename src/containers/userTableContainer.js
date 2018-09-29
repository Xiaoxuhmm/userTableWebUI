import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {connect} from 'react-redux';
import {
  fetchData,
  sortUsers
} from '../actions/userTable';
import UserTable from '../components/table';



class UserTableContainer extends Component{
  static defaultProps = {
    pageIndex : 0,
    tablePages: [[]],
  }

  componentDidMount(){
    axios.get("https://randomuser.me/api/?results=500")
      .then((response)=>{
        this.props.fetchUsers(response.data.results);
      })
      .catch((err)=>{
        console.log(err);
      });
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
      sortUsers: (sortBy)=> {dispatch(sortUsers(sortBy))}
    }
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTableContainer);
