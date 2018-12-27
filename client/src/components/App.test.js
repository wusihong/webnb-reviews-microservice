import React from 'react';
import { shallow} from 'enzyme';
import App from './App.jsx';

describe('App', () => {
    it('should be defined', () => {
      expect(App).toBeDefined();
    });
    // it('should render correctly', () => {
    //   const tree = shallow(
    //     <Button name='button test' />
    //   );
    //   expect(tree).toMatchSnapshot();
    // });
   });