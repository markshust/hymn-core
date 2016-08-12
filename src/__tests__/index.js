import {expect} from 'chai';
import {createApp} from '../';
import * as indexExports from '../';
import * as diExports from 'hymn-di';
import * as composerExports from 'hymn-composer';
const {describe, it} = global;

describe('Module', () => {
  describe('createApp', async () => {
    it('should create app with provided args', () => {
      const context = {aa: 10};
      const app = createApp(context);
      expect(app.context).to.deep.equal(context);
    });
  });

  it('should have useDeps from hymn-di', () => {
    expect(indexExports.useDeps).to.be.equal(diExports.useDeps);
  });

  it('should have all functions from hymn-composer', () => {
    const fnNames = [
      'compose',
      'composeWithPromise',
      'composeWithTracker',
      'composeWithObservable',
      'composeWithMobx',
      'composeAll',
      'disable',
      'setDefaultErrorComponent',
      'setDefaultLoadingComponent',
      'setStubbingMode',
    ];

    fnNames.forEach(fnName => {
      const reactKomposerFn = composerExports[fnName];
      const indexFN = indexExports[fnName];
      expect(reactKomposerFn).to.be.equal(indexFN);
    });
  });
});
