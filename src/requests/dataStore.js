import { request, plugins } from 'popsicle';

const DATASTORE_URL = 'https://blob.aliwaseem.com';
const SUMMARY_KEY = 'aliwaseem-summary';
const CONTACT_KEY = 'aliwaseem-contact';
const WORK_KEY = 'aliwaseem-work';
const PORTFOLIO_KEY = 'aliwaseem-portfolio';

function get(url) {
  return request({
    method: 'GET',
    url,
  })
  .use(plugins.parse('json'));
}

function post(url, data = {}) {
  return request({
    method: 'POST',
    url,
    body: data,
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .use(plugins.parse('json'));
}

export function login(username = '', password = '') {
  return post(`${DATASTORE_URL}/login`, {
    username,
    password,
  });
}

export function getSummaryFromStore() {
  return get(`${DATASTORE_URL}/get/${SUMMARY_KEY}`);
}

export function getContactFromStore() {
  return get(`${DATASTORE_URL}/get/${CONTACT_KEY}`);
}

export function getWorkFromStore() {
  return get(`${DATASTORE_URL}/get/${WORK_KEY}`);
}

export function getPortolfioFromStore() {
  return get(`${DATASTORE_URL}/get/${PORTFOLIO_KEY}`);
}
