import http from 'k6/http';
import { check, group, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '3m', target: 100 }, // simulate ramp-up of traffic from 1 to 100 users over 5 minutes.
    { duration: '12m', target: 100 }, // stay at 100 users for 10 minutes
    { duration: '3m', target: 0 }, // ramp-down to 0 users
  ],
  thresholds: {
  },
};



export default () => {
  

  const myObjects = http.get("https://www.google.com/doodles");

  sleep(1);
};