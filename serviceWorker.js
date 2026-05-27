const staticRaffle = "raffle";
const assets = [
  "/",
  "/index.html",
  "/draw.html",
  "/select.html",
  "/css/style.css",
  "/css/colors.css",
  "/js/draw.js",
  "/js/app.js",
  "/js/index.js",
  "/js/select.js",
  "/images/background.png",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticRaffle).then((cache) => {
      cache.addAll(assets);
    }),
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    }),
  );
});
