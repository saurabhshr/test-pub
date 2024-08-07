import http from 'k6/http';
import { check } from 'k6';

export let options = {
  vus: 10, // number of virtual users
  duration: '30s', // duration of the test
};

export default function () {
  const url = __ENV.TEST_URL; // get the URL from the environment variable
  const res = http.get(`${url}/healthcheck`);
  
  check(res, {
    'is status 200': (r) => r.status === 200,
    'response time is less than 200ms': (r) => r.timings.duration < 200,
  });
}
