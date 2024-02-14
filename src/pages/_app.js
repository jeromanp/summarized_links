import "@/styles/globals.css";
import RootLayout from "@/components/Layout";
import { Provider } from "react-redux";
import { store } from "@/lib/store";
// import { Analytics } from "@vercel/analytics/react";
// import { SpeedInsights } from "@vercel/speed-insights/next";

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Provider store={store}>
        <Component {...pageProps} />
        {/* <Analytics /> */}
        {/* <SpeedInsights /> */}
      </Provider>
    </RootLayout>
  );
}
