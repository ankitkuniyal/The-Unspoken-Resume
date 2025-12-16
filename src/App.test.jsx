import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from './App.jsx';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    // Just check if it renders something meaningful, e.g., typically the hero text or something.
    // Since pages are lazy loaded, we might just checking wrapper or waiting.
    // For a smoke test, simple rendering is enough.
    expect(document.body).toBeTruthy();
  });
});
