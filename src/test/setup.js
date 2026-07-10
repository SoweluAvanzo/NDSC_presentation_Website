import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

// jsdom lacks browser APIs that framer-motion and Radix UI (Dialog, Select)
// rely on. Stub them so component tests run.

class IntersectionObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
vi.stubGlobal('IntersectionObserver', IntersectionObserverStub);

class ResizeObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}
vi.stubGlobal('ResizeObserver', ResizeObserverStub);

if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener() {},
    removeListener() {},
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent() {
      return false;
    },
  });
}

// Radix Select drives a pointer-capture + scroll dance jsdom does not implement.
window.HTMLElement.prototype.scrollIntoView ||= () => {};
window.HTMLElement.prototype.hasPointerCapture ||= () => false;
window.HTMLElement.prototype.setPointerCapture ||= () => {};
window.HTMLElement.prototype.releasePointerCapture ||= () => {};
