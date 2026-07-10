import { useLocation } from 'react-router-dom';

export default function PageNotFound() {
  const location = useLocation();
  const pageName = location.pathname.substring(1);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#050713]">
      <div className="max-w-md w-full">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-7xl font-light text-[#18C5FF]/40">404</h1>
            <div className="h-0.5 w-16 bg-[#18C5FF]/20 mx-auto"></div>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-medium text-[#F5F7FF]">Page Not Found</h2>
            <p className="text-[#C3C8E5] leading-relaxed">
              The page{' '}
              <span className="font-medium text-[#F5F7FF]">&quot;{pageName}&quot;</span>{' '}
              could not be found.
            </p>
          </div>

          <div className="pt-6">
            <button
              onClick={() => (window.location.href = '/')}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#2563FF] hover:bg-[#1d4ed8] rounded-lg transition-colors"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
