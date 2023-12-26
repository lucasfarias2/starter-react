/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

declare global {
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

  export interface SUser {
    id: string;
    first_name?: string;
    last_name?: string;
    username?: string;
    email: string;
  }

  export interface IInitialState {
    user: SUser;
  }

  export interface IViewProps {
    initialState: IInitialState;
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
