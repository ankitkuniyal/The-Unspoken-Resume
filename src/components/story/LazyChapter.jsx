import { lazy, Suspense } from 'react';

// Lazy load all chapter components
const chapterComponents = {
  1: lazy(() => import('./Chapter1')),
  2: lazy(() => import('./Chapter2')),
  3: lazy(() => import('./Chapter3')),
  4: lazy(() => import('./Chapter4')),
  5: lazy(() => import('./Chapter5')),
  6: lazy(() => import('./Chapter6')),
  7: lazy(() => import('./Chapter7')),
};

/**
 * Lazy-loaded chapter wrapper component
 * Reduces initial bundle size by code-splitting chapters
 */
export const LazyChapter = ({ number }) => {
  const Component = chapterComponents[number];
  
  if (!Component) {
    return null;
  }

  return (
    <Suspense fallback={
      <div className="flex h-screen items-center justify-center bg-neutral-950">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white" />
      </div>
    }>
      <Component />
    </Suspense>
  );
};
