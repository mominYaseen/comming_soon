import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  return (
    <div className="size-full min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1708596082640-6395c6906752?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY3VyZSUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzY3OTM3MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Medical background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/50 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo/Brand Name */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent tracking-tight">
            Shifarah
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 italic">
            The Road to Cure
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="mb-12">
          <div className="inline-block px-8 py-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200">
            <p className="text-lg md:text-xl text-gray-700 tracking-wide">
              Coming Soon
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center gap-2 mb-8">
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full animate-pulse" />
        </div>

        {/* Additional Info */}
        <p className="text-gray-500 max-w-lg mx-auto">
          We're working on something special. Stay tuned for our journey towards better healthcare solutions.
        </p>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-float-slower" />
      </div>
    </div>
  );
}
