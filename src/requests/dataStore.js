import { request, plugins } from 'popsicle';

const DATASTORE_URL = 'https://blob.aliwaseem.com';
const SUMMARY_KEY = 'aliwaseem-summary';

export function getSummaryFromStore() {
  return request({
    method: 'GET',
    url: `${DATASTORE_URL}/get/${SUMMARY_KEY}`,
  })
  .use(plugins.parse('json'));
}
