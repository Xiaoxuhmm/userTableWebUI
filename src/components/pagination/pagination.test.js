import React from 'react';
import {mount} from 'enzyme';
import UserTablePaginationItem from './paginationItem';
import DisplayingDataPanel from './displayingDataPanel';
import UserTablePagination from './index';

describe('Pagination components', ()=>{
  it('UserTablePaginationItem should render initial state', ()=>{
    const wrapper = mount(<UserTablePaginationItem />);
    expect(wrapper.find('.page-item')).toHaveLength(1);
    expect(wrapper.find('.page-link')).toHaveLength(1);
  })

  it('UserTablePaginationItem should render render page correctly', ()=>{
    let wrapper;
    wrapper = mount(<UserTablePaginationItem page={'first'}/>);
    expect(wrapper.find('.page-item')).toHaveLength(1);
    expect(wrapper.find('.page-link')).toHaveLength(1);
    expect(wrapper.find('.sr-only').text()).toBe('Previous');
    wrapper = mount(<UserTablePaginationItem page={'last'} />);
    expect(wrapper.find('.page-item')).toHaveLength(1);
    expect(wrapper.find('.page-link')).toHaveLength(1);
    expect(wrapper.find('.sr-only').text()).toBe('Next');
    wrapper = mount(<UserTablePaginationItem page={'<'} />);
    expect(wrapper.find('.page-item')).toHaveLength(1);
    expect(wrapper.find('.page-link')).toHaveLength(1);
    expect(wrapper.find('.page-link').text()).toBe('<');
  })

  it('DisplayingDataPanel should render initial state', ()=>{
    const wrapper = mount(<DisplayingDataPanel />);
    expect(wrapper.text()).toBe('Display: 0-0 of 0');
  })

  it('DisplayingDataPanel should render start, end and totalNum correctly', ()=>{
    let wrapper;
    wrapper = mount(
      <DisplayingDataPanel
        currentPage = {0}
        numberPerPage = {20}
        totalNum = {30}
      />
    );
    expect(wrapper.text()).toBe('Display: 1-20 of 30');
    wrapper = mount(
      <DisplayingDataPanel
        currentPage = {1}
        numberPerPage = {20}
        totalNum = {30}
      />
    );
    expect(wrapper.text()).toBe('Display: 21-30 of 30');
  })

  it('UserTablePagination should render initial state', ()=>{
    const wrapper = mount(<UserTablePagination />);
    expect(wrapper.find('.pagination')).toHaveLength(1);
    expect(wrapper.find('span')).toHaveLength(1);
  });

  it('UserTablePagination should render pagination items correctly', ()=>{
    const pages = ['first','<', '1', '2', '3','4','5','>','last'];
    const wrapper = mount(<UserTablePagination pageList = {pages} />);
    expect(wrapper.find('.page-item')).toHaveLength(9);
  })
})
