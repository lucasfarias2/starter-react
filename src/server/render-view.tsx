/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderToString } from 'react-dom/server';
import getTemplate from './template';

export default function renderView(
  Component: React.FunctionComponent<any> | React.ComponentClass<any>,
  props: any,
  bundleName: string,
  title: string
) {
  const stream = renderToString(<Component {...props} />);
  const template = getTemplate(title, bundleName);

  return new Response(template.replace('<!-- react -->', stream), {
    headers: { 'Content-Type': 'text/html' },
  });
}
