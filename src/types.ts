/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-namespace */
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

declare global {
  namespace Express {
    interface Request {
      device?: IDevice;
      user: PFYUser;
    }

    interface Response {
      renderView: (
        Component: React.FunctionComponent<any> | React.ComponentClass<any>,
        props: any,
        options: TRenderViewProps
      ) => Promise<void>;
      loadQueryKeys: (queryKeys: string[]) => Response;
      queries: Record<string, unknown>;
    }
  }

  export type TRenderViewProps = {
    title: string;
    withRouter?: boolean;
    bundleName: string;
  };

  export interface IDevice {
    type?: TDeviceType;
  }

  type TDeviceType = 'mobile' | 'desktop';

  export type IWindow = typeof window & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    __PRELOADED_STATE__: any;
  };

  export interface IComponent {
    children?: React.ReactNode;
    className?: string;
    device?: IDevice;
  }

  export interface PFYUser {
    id: string;
    first_name?: string;
    last_name?: string;
    username?: string;
    email: string;
  }

  export interface IInitialState {
    user: PFYUser;
  }

  export interface IViewProps {
    initialState: IInitialState;
    user?: PFYUser;
    device: IDevice;
  }

  export interface IDarkMode {
    mode: 'light' | 'dark';
  }

  export type TOnClick = React.MouseEvent<HTMLButtonElement>;
  export type TOnChangeInputEvent = React.ChangeEvent<HTMLInputElement>;
  export type TOnChangeSelectEvent = React.ChangeEvent<HTMLSelectElement>;
  export type TOnChangeTextAreaEvent = React.ChangeEvent<HTMLTextAreaElement>;
}
