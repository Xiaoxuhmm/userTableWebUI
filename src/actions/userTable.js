export const FETCH_DATA = "FETCH_DATA";
export const SORT_USERS = "SORT_USERS";
export const PAGE_TO = 'PAGE_TO';


export const fetchData = (data) =>  {
  return {
    type: FETCH_DATA,
    data
  }
}

export const sortUsers = (sortBy)=>{
  return {
    type: SORT_USERS,
    sortBy
  }
}

export const pageTo = (page) => {
  return {
    type: PAGE_TO,
    page
  }
}
