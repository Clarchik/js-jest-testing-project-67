import nock from 'nock';
import * as main from '../index.js';
import fs from 'fs/promises';
import * as os from 'os';
import path from 'path';

const html = `<html><body></body></html>`;
const fileName = 'ru-hexlet-io-course.html';
const url = 'https://ru.hexlet.io/course';
let tempDir;

nock.disableNetConnect();

beforeEach(async () => {
  tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'page-loader'));
})

test('test', async () => {
  nock('https://ru.hexlet.io').get('/course').reply(200, html);

  await main.loadPage(tempDir, url);

  const file = await fs.readFile(`${tempDir}/${fileName}`, 'utf-8');

  expect(file).toBe(html);
});