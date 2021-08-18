const fetch = require('node-fetch');
const parse = require('node-html-parser').parse;

exports.handler = async (event) => {
  const out = fetch('https://feedlink.io/scot_hampel')
  .then(res => res.text())
  .then(data => {
    const html = parse(data);
    const images = html.querySelectorAll('.image-wrapper .link-img').map(val => {
      return {
        img: val._attrs['data-href'],
        cap: val._attrs['data-img-alt']
      }
    })
    return images
  })
  .catch(error => { error })

  return out;
};