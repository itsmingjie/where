import 'styles/globals.css';

import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div>
      <Toaster />
      <Component {...pageProps} />
    </div>
  );
}

export default App;
