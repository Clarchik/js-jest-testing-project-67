const { Axios } = require('axios');
const fs = require('fs');

async function loadPage(dir, url) {
  const fileName = url.split('//')[1].replace(/[.\/]/g, '-');

  const { data } = await new Axios({ method: 'get' }).get(url);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(`${dir}/${fileName}.html`, data);
}

module.exports = {
  loadPage
}