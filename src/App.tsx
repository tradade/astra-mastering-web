import React, { useCallback, useEffect, useState } from 'react';
import {
  MASTERING_STRINGS,
  MasteringAudioProvider,
  MasteringI18nProvider,
  MasteringLanding,
  MasteringThemeProvider,
  MasteringWorkspace
} from '@tradade/astra-mastering-ui';
import BrandBar from './components/BrandBar';

// Standalone wording only: the shared copy talks about accounts and AI because
// it is also used inside AstraStudio.
const APP_COPY: Record<string, string> = {
  'ai.title': 'Mastering Assist',
  'footer.privacy': 'Processed on this device — no upload, no account.'
};

const appCopy = (key: string) =>
  APP_COPY[key] ?? (MASTERING_STRINGS.en as Record<string, string>)[key] ?? key;

type View = 'landing' | 'studio';

const readView = (): View => (window.location.hash.replace('#', '') === 'studio' ? 'studio' : 'landing');

const App: React.FC = () => {
  const [view, setView] = useState<View>(readView);

  useEffect(() => {
    const sync = () => setView(readView());
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  const enterStudio = useCallback(() => { window.location.hash = 'studio'; }, []);
  const goHome = useCallback(() => {
    // Drop the hash entirely (no trailing '#') and sync the view by hand, since
    // replaceState does not emit `hashchange`.
    window.history.replaceState(null, '', window.location.pathname);
    setView('landing');
  }, []);

  return (
    <MasteringThemeProvider>
      <MasteringI18nProvider locale="en" t={appCopy}>
        {view === 'studio' ? (
          <MasteringAudioProvider>
            <MasteringWorkspace navbar={<BrandBar onHome={goHome} />} suggestionLabel="Auto" />
          </MasteringAudioProvider>
        ) : (
          <MasteringLanding onEnterStudio={enterStudio} />
        )}
      </MasteringI18nProvider>
    </MasteringThemeProvider>
  );
};

export default App;
