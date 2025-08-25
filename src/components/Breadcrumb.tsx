import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const getBreadcrumbLabel = (pathname: string): string => {
    const labels: { [key: string]: string } = {
      'spiti-valley': 'Spiti Valley Tours',
      'himachal': 'Himachal Tours',
      'uttarakhand': 'Uttarakhand Tours',
      'kashmir': 'Kashmir Tours',
      'ladakh': 'Ladakh Tours',
      'rajasthan': 'Rajasthan Tours',
      'weekend-getaways': 'Weekend Getaways',
      'about-us': 'About Us',
      'contact': 'Contact',
      'privacy-policy': 'Privacy Policy',
      'terms-and-conditions': 'Terms & Conditions',
      'disclaimer': 'Disclaimer'
    };
    return labels[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);
  };

  if (pathnames.length === 0) return null;

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Link 
        to="/" 
        className="flex items-center hover:text-primary transition-colors"
        aria-label="Home"
      >
        <Home className="h-4 w-4" />
        <span className="sr-only">Home</span>
      </Link>
      
      {pathnames.map((pathname, index) => {
        const href = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        
        return (
          <div key={pathname} className="flex items-center space-x-2">
            <ChevronRight className="h-4 w-4" />
            {isLast ? (
              <span className="text-foreground font-medium">
                {getBreadcrumbLabel(pathname)}
              </span>
            ) : (
              <Link 
                to={href} 
                className="hover:text-primary transition-colors"
              >
                {getBreadcrumbLabel(pathname)}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
