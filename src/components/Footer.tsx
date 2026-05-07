import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#07080a] border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center text-[#9c9c9d] text-sm">
            <span>Designed & Built by</span>
            <span className="text-indigo-300 font-semibold mx-1">Vivek Yadav</span>
          </div>

          <div className="flex items-center text-[#9c9c9d] text-sm">
            <span>Made with</span>
            <Heart className="mx-1 text-red-500" size={16} fill="currentColor" />
            <span>using React & TypeScript</span>
          </div>

          <p className="text-[#9c9c9d] text-xs">
            © {new Date().getFullYear()} Vivek Yadav. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
