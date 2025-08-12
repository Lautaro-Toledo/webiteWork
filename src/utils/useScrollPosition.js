import { useEffect } from 'react';

export const useScrollPosition = () => {
  useEffect(() => {
    // Restore scroll position on mount
    const savedPosition = localStorage.getItem('scrollPosition');
    if (savedPosition) {
      const { x, y } = JSON.parse(savedPosition);
      window.scrollTo(x, y);
      // Clear the saved position after restoring
      localStorage.removeItem('scrollPosition');
    }

    // Save scroll position before unload
    const handleBeforeUnload = () => {
      const currentPosition = {
        x: window.scrollX,
        y: window.scrollY
      };
      localStorage.setItem('scrollPosition', JSON.stringify(currentPosition));
    };

    // Save scroll position on page visibility change (for mobile)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        const currentPosition = {
          x: window.scrollX,
          y: window.scrollY
        };
        localStorage.setItem('scrollPosition', JSON.stringify(currentPosition));
      }
    };

    // Add event listeners
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup event listeners
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
};
