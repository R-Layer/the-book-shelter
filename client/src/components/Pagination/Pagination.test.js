import React from 'react';
import Pagination from './Pagination';

import { shallow } from 'enzyme';

const props = {
  pages: [2,10],
  changePage: () => {}
};

it('renders', () => {
  shallow(<Pagination {...props} />);
});