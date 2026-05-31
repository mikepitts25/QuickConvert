import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  getIosBannerUnitId,
  iosProductionBannerUnitId,
  iosTestBannerUnitId,
  shouldUseTestAds,
} from './admob';

describe('AdMob unit selection', () => {
  it('uses Google test ads in development', () => {
    assert.equal(shouldUseTestAds({ isDev: true }), true);
    assert.equal(getIosBannerUnitId({ isDev: true }), iosTestBannerUnitId);
  });

  it('uses Google test ads when a TestFlight build opts in', () => {
    assert.equal(shouldUseTestAds({ isDev: false, testAdsEnv: 'true' }), true);
    assert.equal(
      getIosBannerUnitId({ isDev: false, testAdsEnv: 'true' }),
      iosTestBannerUnitId,
    );
  });

  it('uses the production AdMob unit for production builds by default', () => {
    assert.equal(shouldUseTestAds({ isDev: false }), false);
    assert.equal(getIosBannerUnitId({ isDev: false }), iosProductionBannerUnitId);
  });
});
