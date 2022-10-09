import { Head, Html, Main, NextScript } from 'next/document';

export default function Document(): JSX.Element {
  return (
    <Html>
      <Head />
      <body className='text-white bg-gray-900'>
        <div className='p-4 md:p-8'>
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
