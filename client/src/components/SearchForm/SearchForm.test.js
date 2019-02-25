import React from 'react';
import SearchForm from './SearchForm';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<SearchForm/>);
});