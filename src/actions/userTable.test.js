import * as actions from './userTable';

describe('User Table actions', () => {
  it('fetchData should create FETCH_DATA action', ()=>{
    expect(actions.fetchData('fetch data')).toEqual({
      type: 'FETCH_DATA',
      data : 'fetch data'
    })
  })

  it('sortUsers should create SORT_USERS action', ()=>{
    expect(actions.sortUsers('filter')).toEqual({
      type: 'SORT_USERS',
      sortBy : 'filter'
    })
  })

  it('pageTo should create PAGE_TO action', ()=>{
    expect(actions.pageTo('first')).toEqual({
      type: 'PAGE_TO',
      page : 'first'
    })
  })
})
