import { Axios } from "axios";
import { existsSync, mkdirSync, writeFileSync } from 'fs';

export async function loadPage(dir, url) {
  const fileName = url.split('//')[1].replace(/[.\/]/g, '-');

  const { data } = await new Axios({ method: 'get' }).get(url);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  writeFileSync(`${dir}/${fileName}.html`, data);
}