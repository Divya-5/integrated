import { render } from '@testing-library/react';
import { foo } from 'libs/my-lib/__mocks__/index';

import App from './app';

// describe('App', () => {
//   it('should render successfully', () => {
//     const { baseElement } = render(<App />);
//     expect(baseElement).toBeTruthy();
//   });

//   it('should have a greeting as the title', () => {
//     const { getByText } = render(<App />);
//     expect(getByText(/Welcome straumann/gi)).toBeTruthy();
//   });
// });
jest.mock('libs/my-lib/__mocks__/index');
describe('test foo', () => {
  test('returns "foo"', () => {
    expect(foo()).toBe('foo');
  });
});
