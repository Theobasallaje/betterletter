import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export function useBlocker(blocker, when = true) {
  const navigate = useNavigate();
  const location = useLocation();
  const [blockNavigation, setBlockNavigation] = useState(false);

  useEffect(() => {
    if (!when) return;

    // Block the navigation manually using `useTransition` logic
    const handleBeforeUnload = (event) => {
      if (blockNavigation) {
        event.preventDefault();
        event.returnValue = ''; // For the confirmation prompt in browsers
      }
    };

    // Attach event listener to block navigation
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup on unmount or when navigation is allowed
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [blockNavigation, when]);

  const startBlocking = () => {
    setBlockNavigation(true);
    blocker(); // Call the blocker function passed by the component
  };

  return [blockNavigation, startBlocking];
}
