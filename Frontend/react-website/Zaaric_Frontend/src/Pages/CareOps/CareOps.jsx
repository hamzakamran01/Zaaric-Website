import React, { useCallback, useLayoutEffect, useRef } from 'react';
import '@fontsource-variable/inter';

import useThemeClass from '../../hooks/useThemeClass';
import useReveal from '../../hooks/useReveal';
import CareOpsSeo from './CareOpsSeo.jsx';

import CoHero from './sections/CoHero.jsx';
import CoStory from './sections/CoStory.jsx';
import CoLeaks from './sections/CoLeaks.jsx';
import CoPipeline from './sections/CoPipeline.jsx';
import CoFrontDesk from './sections/CoFrontDesk.jsx';
import CoTasks from './sections/CoTasks.jsx';
import CoOwner from './sections/CoOwner.jsx';
import CoPms from './sections/CoPms.jsx';
import CoBuiltFor from './sections/CoBuiltFor.jsx';
import CoRoadmap from './sections/CoRoadmap.jsx';
import CoCta from './sections/CoCta.jsx';
import CoFaq from './sections/CoFaq.jsx';

// Order matters: tokens, then kit, then page shell, then section layout.
import './careops.tokens.css';
import './ui/ui.css';
import './careops.css';
import './sections.css';

const CareOps = () => {
  const rootRef = useRef(null);
  const ctaRef = useRef(null);

  // Repaints the document canvas for this route only; removed on unmount so
  // the dark site is untouched when the user navigates back.
  useThemeClass('careops-theme');

  // Gates the hidden reveal state on JS being alive: if the observer never
  // runs, the page degrades to fully visible rather than blank.
  useLayoutEffect(() => {
    const el = rootRef.current;
    if (!el) return undefined;
    el.classList.add('co-js');
    return () => el.classList.remove('co-js');
  }, []);

  useReveal(rootRef);

  const scrollTo = useCallback((ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const scrollToId = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <main className="careops-page" ref={rootRef}>
      <CareOpsSeo />

      <CoHero
        onPrimary={() => scrollTo(ctaRef)}
        onSecondary={() => scrollToId('careops-story')}
      />
      <CoStory />
      <CoLeaks />
      <CoPipeline />
      <CoFrontDesk />
      <CoTasks />
      <CoOwner />
      <CoPms />
      <CoBuiltFor />
      <CoRoadmap />
      <CoCta formRef={ctaRef} />
      <CoFaq />

      <footer className="co-foot">
        <div className="co-shell co-foot__inner">
          <div className="co-foot__brand">
            <span className="co-foot__name">Zaaric CareOps</span>
            <span className="co-foot__by">
              A product by <a href="/">Zaaric</a> · services@zaaric-ai.com
            </span>
          </div>
          <p className="co-foot__note">
            Screens on this page are the product rendered with illustrative sample data.
            No real guest or customer information is shown.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default CareOps;
