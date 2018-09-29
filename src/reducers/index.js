import {combineReducers} from 'redux';
import {
  FETCH_DATA,
  SORT_USERS,
  PAGE_TO,
} from '../actions/userTable';

const initialState = {
  users:            [],
  userPerPage:      10,
  totalUsers:       500,
  tablePages:       [],
  currentPage:      -1,
  totalPages:       0,
  paginationList:   [],
  headers:          ['first', 'last', 'email'],
  currentSortBy:    '',
  currentSortOrder: 0,
  isLoading :       true
}


export const sortUsersByProperty = (users, sortBy, sortOrder) => {
    users.sort((user1, user2)=>{
      if(sortOrder === 1){
        return user1[sortBy].localeCompare(user2[sortBy]);
      }else{
        return user2[sortBy].localeCompare(user1[sortBy]);
      }
    })
}

export const getSortOrder = (currentOrder, currentSortBy, sortBy) => {
  if(sortBy !== currentSortBy){
    return 1;
  }
  if(currentOrder === 0){
    return 1;
  }
  return -currentOrder;
}

export const parseData = (usersRowData) => {
  return usersRowData.map((user)=>{
    return {
      first: user.name.first,
      last: user.name.last,
      email: user.email
    }
  })
}

export const buildPages = (users) => {
  const pages = [];
  users.forEach((user, i) => {
    if(Math.floor(i / 10) > pages.length - 1){
      pages.push([]);
    }
    pages[pages.length - 1].push(user);
  });
  return pages;
}

export const getNextPageIndex = (page, currentPage, totalPages)=>{
  if(page === 'first'){
    return 0;
  }else if(page === 'last'){
    return totalPages - 1;
  }else if(page === '<'){
    return Math.max(0, currentPage - 1);
  }else if(page === '>'){
    return Math.min(totalPages - 1, currentPage + 1);
  }else{
    return parseInt(page, 10) - 1;
  }
}

export const buildPaginationList = (currentPage, totalPages) => {
  const list = ['first', '<'];
  for(let i = 0; i < Math.min(5, totalPages); i++){
    const page = Math.max(0, Math.min(currentPage + 2, totalPages - 1) - 4) + 1 + i;
    list.push(page.toString());
  }
  list.push('>');
  list.push('last');
  return list;
}


export const userTableReducer = (state = initialState, action) => {
  let users, tablePages, currentPage, totalPages, paginationList, currentSortBy, currentSortOrder;

  switch (action.type) {
    case FETCH_DATA:
      users = parseData(action.data);
      tablePages = buildPages(users);
      totalPages = tablePages.length;
      currentPage = totalPages === 0 ? -1 : 0;
      paginationList = buildPaginationList(currentPage, totalPages);
      return {
        ...state,
        users,
        tablePages,
        currentPage,
        totalPages,
        paginationList,
        isLoading: false
      }
    case SORT_USERS:
      currentSortOrder = getSortOrder(state.currentSortOrder, state.currentSortBy, action.sortBy);
      sortUsersByProperty(state.users, action.sortBy, currentSortOrder);
      tablePages = buildPages(state.users);
      currentSortBy = action.sortBy;
      return {
        ...state,
        tablePages,
        currentSortBy,
        currentSortOrder
      }
    case PAGE_TO:
      currentPage = getNextPageIndex(action.page, state.currentPage, state.totalPages);
      paginationList = buildPaginationList(currentPage, state.totalPages);
      return {
        ...state,
        currentPage,
        paginationList
      }
    default:
      return state;
  }
}


const appReducer = combineReducers({
  userTableReducer
});

export default appReducer;
