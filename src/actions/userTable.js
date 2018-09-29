import axios from 'axios';
export const FETCH_DATA = "FETCH_DATA";
export const DATA_LOADING = 'DATA_LOADING'
export const DATA_RECEIVED = 'DATA_RECEIVED';
export const SORT_USERS = "SORT_USERS";
export const PAGE_TO = 'PAGE_TO';


export const fetchData = (data, status) =>  {
  return {
    type: FETCH_DATA,
    data,
    status
  }
}

export const fetchFromUrl = (dispatch, number) => {
  dispatch(fetchData(null, DATA_LOADING));
  const url = "https://randomuser.me/api/?results=" + number;
  axios.get(url)
    .then((response) => {
      dispatch(fetchData(response.data.results, DATA_RECEIVED));
    })
    .catch((err)=>{
      console.log(err);
    });
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
