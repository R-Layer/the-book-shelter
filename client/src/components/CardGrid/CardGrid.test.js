import React from 'react';
import CardGrid from './CardGrid';

import { shallow } from 'enzyme';

const props = {books: [
  {
    id: '1',
    thumbnail: 'www.test.jpeg',
    title: 'test book n°1',
    authors: ['layer'],
    categories: ['test'],
    publisher: 'the book shelter',
    publishedDate: '2019-01-01',
    bookinfo: 'www.test.com'
  },
  {
    id: '2',
    thumbnail: 'www.test-2.jpeg',
    title: 'test book n°2',
    authors: ['layer'],
    categories: ['test'],
    publisher: 'the book shelter',
    publishedDate: '2019-01-01',
    bookinfo: 'www.test-2.com'
  }
]}

it('renders', () => {
  shallow(<CardGrid {...props} />);
});