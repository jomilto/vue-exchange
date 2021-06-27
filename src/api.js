const url = 'https://api.coincap.io/v2';

async function getAssets() {
  let data = await fetch(`${url}/assets?limit=20`);
  data = await data.json();
  data = data.data;
  return data;
}

async function getAsset(coinName) {
  let data = await fetch(`${url}/assets/${coinName}`);
  data = await data.json();
  data = data.data;
  return data;
}

async function getAssetHistory(coinName) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();

  let data = await fetch(
    `${url}/assets/${coinName}/history?interval=h1&start=${start}&end=${end}`
  );
  data = await data.json();
  data = data.data;
  return data;
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
};
