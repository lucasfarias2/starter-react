import { useState } from 'react';
import { LuActivity, LuAlertTriangle, LuCheck, LuClipboardCheck, LuPointer } from 'react-icons/lu';
import { Route, Routes } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import Navbar from '@/shared/components/AppNavbar';
import Button from '@/shared/components/Button';
import Footer from '@/shared/components/Footer';
import Page from '@/shared/components/Page';

const Router = (props: IViewProps) => {
  return (
    <Page {...props} navbar={<Navbar />} footer={<Footer />}>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Page>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8 text-center">
      <div className="panel mb-36 rounded-2xl bg-white py-16 shadow-lg">
        <h1 className="mb-2 text-5xl font-medium">Packlify Starter-React</h1>
        <p className="text-xl text-zinc-500">
          Bun, Express, React, Vite, Tailwind, Prettier, ESLint, Firebase and React Query
        </p>

        <div className="mt-8 flex flex-col items-center justify-center rounded-2xl text-zinc-400">
          This is an application starter, please click the button bellow to test client side rendering.
          <Button
            text={`${count > 0 ? 'It works!' : 'Click me'}`}
            className={twMerge('mt-4 shadow-lg', count > 0 ? 'bg-green-700' : '')}
            size="sm"
            icon={count > 0 ? LuCheck : LuPointer}
            onClick={() => {
              setCount(count + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Router;
