import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { ThemeToggle } from '@tradade/astra-mastering-ui';

interface BrandBarProps {
  onHome?: () => void;
}

const BrandBar: React.FC<BrandBarProps> = ({ onHome }) => (
  <header className="brandbar">
    <div className="brandbar__identity">
      {onHome && (
        <button type="button" className="brandbar__home" onClick={onHome} title="Back to overview">
          <ArrowLeft size={14} aria-hidden="true" />
          <span>Overview</span>
        </button>
      )}
      <span className="brandbar__mark" aria-hidden="true">◈</span>
      <span className="brandbar__name">Astra Mastering</span>
      <span className="brandbar__badge">standalone</span>
    </div>
    <div className="brandbar__actions">
      <p className="brandbar__note">Local-first · your audio never leaves this device</p>
      <ThemeToggle />
    </div>
  </header>
);

export default BrandBar;
