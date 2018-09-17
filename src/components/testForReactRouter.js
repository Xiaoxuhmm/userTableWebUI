import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import {StyledComponents} from './testForStyledComponents';


export const TestForReactRouter = () => {
  <div>
    <Switch>
      <Route path="/test" component={StyledComponents} />
    </Switch>
  </div>
}
