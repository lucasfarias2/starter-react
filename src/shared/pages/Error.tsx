import React, { Component, ErrorInfo, ReactElement } from 'react';
import { LuAlertCircle } from 'react-icons/lu';
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component<{ children: ReactElement }> {
  state = { hasError: false, errorMessage: '' };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ErrorBondary component caught an error', error, info);
    this.setState({ errorMessage: error.message });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8">
          <div className="flex">
            <a href={'/'} className={'mr-4'}>
              <img src={'/static/logo-2.png'} alt={'Packlify logo'} className="h-8" />
            </a>
            <h1 className="text-2xl">There was an error loading the page.</h1>
          </div>
          <div className="my-4 flex items-center rounded-lg bg-rose-600 p-4 font-semibold text-white shadow-lg">
            <LuAlertCircle className="mr-4 text-xl" />
            {this.state.errorMessage}.
          </div>

          <div>
            <Link to="/" className="text-sm font-medium">
              Go to home page
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
