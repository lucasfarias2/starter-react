import { useState } from 'react';
import { LuCheck, LuPointer } from 'react-icons/lu';
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
      <div className="rounded-2xl bg-white py-16 shadow-lg">
        <div className="my-4 flex items-center justify-center">
          <img src="https://bun.sh/logo.svg" alt="Bun Logo" className="h-10" />
          <span className="mx-4 text-2xl text-zinc-400">+</span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"
            alt="React Logo"
            className="h-10"
          />
        </div>
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
