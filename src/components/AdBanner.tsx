import { useEffect, useRef, useState } from 'react';
import Constants from 'expo-constants';
import { AppState, Platform, StyleSheet, View } from 'react-native';
import { getIosBannerUnitId, shouldUseTestAds } from '../ads/admob';
import { useAppTheme } from '../theme/theme-context';

let googleMobileAdsModule: typeof import('react-native-google-mobile-ads') | null = null;
type BannerAdRef = InstanceType<typeof import('react-native-google-mobile-ads').BannerAd>;

function getGoogleMobileAds() {
  if (Platform.OS !== 'ios' || Constants.appOwnership === 'expo') {
    return null;
  }

  googleMobileAdsModule ??=
    require('react-native-google-mobile-ads') as typeof import('react-native-google-mobile-ads');

  return googleMobileAdsModule;
}

export async function initializeAds() {
  const ads = getGoogleMobileAds();

  if (ads) {
    await ads.default().initialize();
  }
}

export function AdBanner() {
  const { colors } = useAppTheme();
  const bannerRef = useRef<BannerAdRef | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const ads = getGoogleMobileAds();

  useEffect(() => {
    let isMounted = true;

    async function startAds() {
      try {
        await initializeAds();
        if (isMounted) {
          setIsInitialized(true);
        }
      } catch (error) {
        console.warn('AdMob initialization failed', error);
      }
    }

    if (ads) {
      void startAds();
    }

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (state) => {
      if (state === 'active') {
        bannerRef.current?.load();
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  if (!ads) {
    return null;
  }

  const { BannerAd, BannerAdSize } = ads;
  const unitId = getIosBannerUnitId();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
          borderTopColor: colors.border,
        },
      ]}
    >
      {isInitialized ? (
        <BannerAd
          ref={bannerRef}
          unitId={unitId}
          size={BannerAdSize.LARGE_ANCHORED_ADAPTIVE_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
          onAdLoaded={(dimensions) => {
            console.log('AdMob banner loaded', {
              dimensions,
              testAds: shouldUseTestAds(),
            });
          }}
          onAdFailedToLoad={(error) => {
            console.warn('AdMob banner failed to load', {
              message: error.message,
              testAds: shouldUseTestAds(),
              unitId,
            });
          }}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderTopWidth: 1,
    minHeight: 58,
    justifyContent: 'center',
  },
});
