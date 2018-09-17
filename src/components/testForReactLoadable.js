import Loadable from 'react-loadable';
import React from 'react';

const AsyncComponent = Loadable({
  loader: () => import("./testComponent"),
  loading: () => <div>loading...</div>
});

export default AsyncComponent;
