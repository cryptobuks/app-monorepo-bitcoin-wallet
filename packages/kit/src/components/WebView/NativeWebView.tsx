import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';

import { JsBridgeNativeHost } from '@onekeyfe/onekey-cross-webview';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

import debugLogger from '@onekeyhq/shared/src/logger/debugLogger';

import ErrorView from './ErrorView';

import type { InpageProviderWebViewProps } from '@onekeyfe/cross-inpage-provider-types';
import type { IWebViewWrapperRef } from '@onekeyfe/onekey-cross-webview';
import type { WebViewMessageEvent, WebViewProps } from 'react-native-webview';

export type NativeWebViewProps = WebViewProps & InpageProviderWebViewProps;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flex: 1,
  },
});
const NativeWebView = forwardRef(
  (
    {
      style,
      src,
      receiveHandler,
      onSrcChange,
      onLoadProgress,
      injectedJavaScriptBeforeContentLoaded = '',
      onMessage,
      ...props
    }: NativeWebViewProps,
    ref,
  ) => {
    const webviewRef = useRef<WebView>();

    const jsBridge = useMemo(
      () =>
        new JsBridgeNativeHost({
          webviewRef,
          receiveHandler,
        }),
      [receiveHandler],
    );

    const webviewOnMessage = useCallback(
      (event: WebViewMessageEvent) => {
        const { data } = event.nativeEvent;
        try {
          const uri = new URL(event.nativeEvent.url);
          const origin = uri?.origin || '';
          debugLogger.webview.info('onMessage', origin, data);
          // - receive
          jsBridge.receive(data, { origin });
          // eslint-disable-next-line no-empty
        } catch {}
        onMessage?.(event);
      },
      [jsBridge, onMessage],
    );

    useImperativeHandle(ref, (): IWebViewWrapperRef => {
      const wrapper = {
        innerRef: webviewRef.current,
        jsBridge,
        reload: () => webviewRef.current?.reload(),
        loadURL: (url: string) =>
          // @ts-ignore
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
          webviewRef.current?.loadUrl(url),
      };

      jsBridge.webviewWrapper = wrapper;

      return wrapper;
    });

    return (
      <WebView
        style={styles.container}
        onLoadProgress={onLoadProgress}
        ref={webviewRef}
        // injectedJavaScript={injectedNative}
        injectedJavaScriptBeforeContentLoaded={
          injectedJavaScriptBeforeContentLoaded
        }
        // the video element must also include the `playsinline` attribute
        allowsInlineMediaPlayback
        // disable video autoplay
        allowFileAccess
        allowFileAccessFromFileURLs
        allowUniversalAccessFromFileURLs
        allowingReadAccessToURL="file://"
        mediaPlaybackRequiresUserAction
        source={{ uri: src }}
        onMessage={webviewOnMessage}
        renderError={() => (
          <ErrorView onRefresh={() => webviewRef.current?.reload()} />
        )}
        originWhitelist={['*']}
        {...props}
      />
    );
  },
);
NativeWebView.displayName = 'NativeWebView';

export { NativeWebView };
