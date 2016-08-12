import {
  useDeps as _useDeps
} from 'hymn-di';

import {
  compose as _compose,
  composeWithTracker as _composeWithTracker,
  composeWithPromise as _composeWithPromise,
  composeWithObservable as _composeWithObservable,
  composeWithMobx as _composeWithMobx,
  composeAll as _composeAll,
  disable as _disable,
  setDefaultErrorComponent as _setDefaultErrorComponent,
  setDefaultLoadingComponent as _setDefaultLoadingComponent,
  setStubbingMode as _setStubbingMode,
} from 'hymn-composer';

import App from './app';

// export this module's functions
export const createApp = (...args) => (new App(...args));

// export hymn-di functions
export const useDeps = _useDeps;

// export hymn-composer functions
export const compose = _compose;
export const composeWithTracker = _composeWithTracker;
export const composeWithPromise = _composeWithPromise;
export const composeWithObservable = _composeWithObservable;
export const composeWithMobx = _composeWithMobx;
export const composeAll = _composeAll;
export const disable = _disable;
export const setDefaultErrorComponent = _setDefaultErrorComponent;
export const setDefaultLoadingComponent = _setDefaultLoadingComponent;
export const setStubbingMode = _setStubbingMode;
