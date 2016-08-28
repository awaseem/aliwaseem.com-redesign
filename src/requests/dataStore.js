import { request, plugins } from 'popsicle';

const DATASTORE_URL = 'https://blob.aliwaseem.com';
const SUMMARY_KEY = 'aliwaseem-summary';
const CONTACT_KEY = 'aliwaseem-contact';

function get(url) {
  return request({
    method: 'GET',
    url,
  })
  .use(plugins.parse('json'));
}

export function getSummaryFromStore() {
  return get(`${DATASTORE_URL}/get/${SUMMARY_KEY}`);
}

export function getContactFromStore() {
  return get(`${DATASTORE_URL}/get/${CONTACT_KEY}`);
}
