import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-rose-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center text-slate-600 text-sm">
            <span>Designed & Built by</span>
            <span className="text-rose-600 font-semibold mx-1">Vivek Yadav</span>
          </div>

          <div className="flex items-center text-slate-500 text-sm">
            <span>Made with</span>
            <Heart className="mx-1 text-red-500" size={16} fill="currentColor" />
            <span>using React & TypeScript</span>
          </div>

          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Vivek Yadav. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
