export default async function handler(req, res) {
  const response = await fetch("https://www.swiggy.com" + req.url, {
    method: req.method,
    headers: {
      ...req.headers,
    },
  });
  const data = await response.json();
  res.status(200).json(data);
}
