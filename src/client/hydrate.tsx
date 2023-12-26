import React from 'react';
import { hydrateRoot } from 'react-dom/client';

declare const window: IWindow;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const hydrate = (Component: React.FunctionComponent<any> | React.ComponentClass<any>) => {
  const props = window.__PRELOADED_STATE__;

  const component = <Component {...props} />;
  const domElement = document.getElementById('root') as HTMLElement;

  hydrateRoot(domElement, component);
};

export default hydrate;
