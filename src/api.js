const url = 'https://api.coincap.io/v2';

async function getAssets() {
  let data = await fetch(`${url}/assets?limit=20`);
  data = await data.json();
  data = data.data;
  return data;
}

export default {
  getAssets,
};
