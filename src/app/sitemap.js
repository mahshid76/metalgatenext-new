export const dynamic = "force-static";

const base = "https://metalgateleeds.co.uk";

export default function sitemap() {
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/contact`, changeFrequency: "yearly", priority: 0.8 },
  ];
}
