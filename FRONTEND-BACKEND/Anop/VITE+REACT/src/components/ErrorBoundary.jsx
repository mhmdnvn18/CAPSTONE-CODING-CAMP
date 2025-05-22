import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // log error jika perlu
  }
  render() {
    if (this.state.hasError) {
      return <div className="p-4 bg-red-100 text-red-700">Terjadi kesalahan pada aplikasi.</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
