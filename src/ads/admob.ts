export const iosProductionBannerUnitId = 'ca-app-pub-5950430918685177/4311662553';
export const iosTestBannerUnitId = 'ca-app-pub-3940256099942544/2435281174';

type TestAdsInput = {
  isDev?: boolean;
  testAdsEnv?: string;
};

function runtimeIsDev() {
  return typeof __DEV__ !== 'undefined' && __DEV__;
}

export function shouldUseTestAds({
  isDev = runtimeIsDev(),
  testAdsEnv = process.env.EXPO_PUBLIC_ADMOB_USE_TEST_ADS,
}: TestAdsInput = {}) {
  return isDev || testAdsEnv?.toLowerCase() === 'true';
}

export function getIosBannerUnitId(input: TestAdsInput = {}) {
  return shouldUseTestAds(input) ? iosTestBannerUnitId : iosProductionBannerUnitId;
}
