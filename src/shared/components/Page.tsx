import { HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from '@/shared/components/Layout';
import { DarkModeContext } from '@/shared/context/DarkModeContext';
import { DeviceContext } from '@/shared/context/DeviceContext';
import ErrorBoundary from '@/shared/pages/Error';

const Page = ({ children, device, navbar, footer, initialState }: IProps) => {
  const queryClient = new QueryClient();

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={initialState}>
          <DeviceContext.Provider value={{ type: device?.type }}>
            <DarkModeContext.Provider value={{ mode: 'light' }}>
              <Layout navbar={navbar} footer={footer}>
                {children}
              </Layout>
            </DarkModeContext.Provider>
          </DeviceContext.Provider>
        </HydrationBoundary>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

interface IProps extends IComponent {
  navbar?: React.ReactNode;
  footer?: React.ReactNode;
  initialState?: IInitialState;
  device?: IDevice;
  darkMode?: boolean;
}

export default Page;
