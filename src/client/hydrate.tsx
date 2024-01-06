/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import 'vite/modulepreload-polyfill';

declare const window: IWindow;

const hydrate = (
  Component: React.FunctionComponent<any> | React.ComponentClass<any>,
  {
    withRouter = false,
  }: {
    withRouter?: boolean;
  } = {}
) => {
  const props = window.__PRELOADED_STATE__;
  delete window.__PRELOADED_STATE__;

  const component = <Component {...props} />;
  const domElement = document.getElementById('root') as HTMLElement;

  if (withRouter) {
    hydrateRoot(domElement, <BrowserRouter>{component}</BrowserRouter>);
  } else {
    hydrateRoot(domElement, component);
  }
};

export default hydrate;
