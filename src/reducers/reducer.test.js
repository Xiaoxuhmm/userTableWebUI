import {
  sortUsersByProperty,
  getSortOrder,
  userTableReducer
} from './index';


describe('User data manipulation functions', () => {
  it('sortUsersByProperty should sort users by given property', ()=>{
    const users = [
      {last:  'a', first: 'g', email: 'e@m'},
      {last:  'k', first: 'f', email: 'p@m'},
      {last:  'o', first: 'z', email: 'x@m'}
    ]
    sortUsersByProperty(users, 'first', 1);
    expect(users[0].first).toEqual('f');
    sortUsersByProperty(users, 'first', -1);
    expect(users[0].first).toEqual('z');
    sortUsersByProperty(users, 'last', 1);
    expect(users[0].last).toEqual('a');
    sortUsersByProperty(users, 'last', -1);
    expect(users[0].last).toEqual('o');
    sortUsersByProperty(users, 'email', 1);
    expect(users[0].email).toEqual('e@m');
    sortUsersByProperty(users, 'email', -1);
    expect(users[0].email).toEqual('x@m');
  });

  it('getSortOrder should get the order to sort', ()=>{
    expect(getSortOrder(0, 'first', '')).toEqual(1);
    expect(getSortOrder(0, 'last', '')).toEqual(1);
    expect(getSortOrder(1, 'first', '')).toEqual(1);
    expect(getSortOrder(-1, 'first', '')).toEqual(1);
    expect(getSortOrder(1, 'first', 'last')).toEqual(1);
    expect(getSortOrder(-1, 'first', 'last')).toEqual(1);
    expect(getSortOrder(1, 'first', 'email')).toEqual(1);
    expect(getSortOrder(0, 'first', 'first')).toEqual(1);
    expect(getSortOrder(1, 'first', 'first')).toEqual(-1);
    expect(getSortOrder(-1, 'first', 'first')).toEqual(1);
  })

})


describe('userTableReducer', ()=>{
  it('should handle initial state', ()=>{
    expect(userTableReducer(undefined, {})).toEqual(
      {
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
    )
  })
})
