import React from 'react';
import {shallow} from 'enzyme';
import PageNotFound from '../../components/NotFoundPage.js';
import NotFoundPage from '../../components/NotFoundPage.js';

test('should render NotFoundPage', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
} )