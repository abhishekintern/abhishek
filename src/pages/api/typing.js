export default function handler(req, res) {
  res.status(200).json({
    text: "With this setup, when the component mounts, it will simulate fetching data from an API and display a typewriting effect while waiting for the response. Once the response is received, the typewriting effect stops, and the fetched text is displayed.",
  });
}
