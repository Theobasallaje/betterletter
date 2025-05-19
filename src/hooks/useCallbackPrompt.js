import { useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBlocker } from './useBlocker';

export function useCallbackPrompt(when) {
  const navigate = useNavigate();
  const [showPrompt, setShowPrompt] = useState(false);
  const [lastLocation, setLastLocation] = useState(null);
  const [confirmedNavigation, setConfirmedNavigation] = useState(false);

  const cancelNavigation = useCallback(() => {
    setShowPrompt(false);
  }, []);

  const confirmNavigation = useCallback(() => {
    setShowPrompt(false);
    setConfirmedNavigation(true);
  }, []);

  useEffect(() => {
    if (confirmedNavigation && lastLocation) {
      navigate(lastLocation);
    }
  }, [confirmedNavigation, lastLocation, navigate]);

  // Handle blocking the navigation in React Router v7 using useBlocker
  const [blockNavigation, startBlocking] = useBlocker(() => {
    setShowPrompt(true);
    setLastLocation(window.location.pathname); // Store the last location
  }, when);

  // Return the prompt visibility, navigation functions, and startBlocking function
  return [showPrompt, confirmNavigation, cancelNavigation, startBlocking];
}