import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  stages: [
    { duration: '3m', target: 100 }, // below normal load
    { duration: '5m', target: 200 },
    { duration: '1m', target: 200 }, // normal load
    { duration: '5m', target: 100 },
    { duration: '4m', target: 300 }, // around the breaking point
    { duration: '5m', target: 250 },
    { duration: '2m', target: 400 }, // beyond the breaking point
    { duration: '5m', target: 400 },
    { duration: '12m', target: 0 }, // scale down. Recovery stage.
  ],
};

export default function () {
  const BASE_URL = 'https://www.google.com/doodles'; // make sure this is not production
  const myObjects = http.get(BASE_URL);
  sleep(2);
}