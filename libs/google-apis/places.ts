import Places from 'google-places-web';

const apiKey = process.env.GOOGLE_API_KEY;
if (!apiKey) {
  throw new Error('GOOGLE_API_KEY is not defined');
} else {
  console.log(`[libs/google-apis/index] using API key ${apiKey}`);
}

Places.apiKey = process.env.GOOGLE_API_KEY;

export { Places };
