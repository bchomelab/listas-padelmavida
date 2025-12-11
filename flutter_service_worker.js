'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3ff10cd114493711f83ad157a8c0b4de",
"version.json": "42e6584963dc13a787946b7bef268ba4",
"index.html": "151943f41432e60ab46ee0f12008671a",
"/": "151943f41432e60ab46ee0f12008671a",
"LICENSE": "5e1fb51c322df296f9dc1da1e52c5e93",
"main.dart.js": "8d230a477bdb4a74f8b1209fb3e31ce9",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"README.md": "69c20031dc9094186fe9bf3b704acfdc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9127e0e7c58f984a86f5f8b787f1f86a",
".git/ORIG_HEAD": "ed12a1b0faa2d91e20e3bd6002e527f0",
".git/config": "601fce7c75e89157d5b8cea619a23b55",
".git/objects/0d/5113f8a100bdc427edf66ebf317d703a9974af": "97b174b9d7190eaceedcac45a5d26ca3",
".git/objects/0d/600d909469567898fdd2974836bdcaba7c55e8": "954ab1dbc4610f88c11df1cdfbe75706",
".git/objects/3e/c426750bd71141cc0341add870b59dac1cc611": "5adf889127f3b85f95bb60cd42b4c689",
".git/objects/56/56b2852693b1f33bb7525a35787c944f7c1d6d": "32854eb8a06171144efeba47ef2bdbb0",
".git/objects/67/6991d89b933def71422a2e41580dc38fee0a9e": "ae07ed4f6a0ca689d9b408cd44ccb915",
".git/objects/67/bc2422829aaa0c75160aa27d91b76234061383": "6b11aa47c601ab2907a1a6d72ec268be",
".git/objects/a3/2f77229f0736743341de75b3e442c2e4338e6d": "34b71a0aba9ca9d05dfbabc2c47b03f8",
".git/objects/b5/327a229405647716f7d47bc109affc11aa3141": "4ad889806a28721d3923b3bc7425e8d9",
".git/objects/b2/41b06dbce7308cbeccf17cd227cbd90aceee38": "031b7b500329431ea3663d06937a52b5",
".git/objects/d9/8da4950b27039f9cc90c941e13e452727bc88e": "21657ff9d15d895ab884ec164cb2717d",
".git/objects/b4/3d8e2b2161572160262d0fef7d896d691a6840": "6b4739309aba51deafea4cab1ea137d5",
".git/objects/a5/cf90e861c60addaf7cd25d5afbd00079f05553": "a69fda4aa87b59266d8445ff9c4f0620",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/d6fea590945e1f1ea3c702c5c8e507dd2d98ce": "92f07f4fd9b2e2153278e20bc6e82c4c",
".git/objects/d8/39aa25cccb5e3c02694db4aeb352d03fc68e52": "02aaeacd1e5817dbeecfa10ee10e17ce",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/8579e0330b4afa2131d3b08f7ddb626edce027": "58d18e9e7a1197cb6221fde6c8321a83",
".git/objects/ed/7cc46299a7659a9623d0eaf39096bd41d3af1b": "b5db3bc7d64384117d9c9d4eb93876d2",
".git/objects/c1/c7e3a3b66ad1f65509566ef700d02c248d21f2": "6cfabdf2f78fc19c1219609b38b15715",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/18/dde1cf0e02a3df4e02f364a9a0aec7e222a2ea": "04a6292d15481e9011200230d57e00bc",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/7c/d4cae10a976b6f2239b88d2fc0f4697e0e9eb4": "0a5fc09dd9c0f3621c170125d59ba8d1",
".git/objects/7c/e9040498e4a27135830b925b2619d941f1b24c": "4491b18672023c0373e215a0112d27e8",
".git/objects/16/b23c813a6c2c6a0b048216b94ce68420e3cb9f": "62ae6974f91b003ea1801846be59bed4",
".git/objects/45/548c496421e69fc0c691738b3a946d75a2232f": "7d01e78982ac57c896af99df15b8995b",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/4afbda44db23a01acca6308b15fa5570d50fd5": "6d3e33118f9a205f0442c30a00f37a3e",
".git/objects/10/8c977dce1198e19d4080c388d8878b38416068": "b6b9baa8f90727549e9a8713c972a523",
".git/objects/72/ebda3c75c08747c629398709da3aac6955742d": "57bbb8067540a5dc0e3dd40e8835e4e2",
".git/objects/2f/ba5488c0be9b6a54c0b152c029ecff93079d1a": "affba6385dee6d5231c8df5288663491",
".git/objects/43/4a60a2f772a1e0ec40ecb05d22abdbc844a5be": "6c6013122f856fc27b7aa9fcd8d8aa09",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/cc8f292eac6dc828d7a3a582e3b1691b933a8f": "b5f0020bc62858bc6bdf70e083e8a2db",
".git/objects/5c/7ed69f506f41e7960711efab9f4263fa892e58": "f019041fd5bc214aa8217c3ac03b3d59",
".git/objects/09/369127da4cfa50d92ae1e39fe42db647fdeebf": "4a55b426a61fa5efec6dc3b1379b92c0",
".git/objects/37/f9ae00dad2960476db2971a5762eef94da2c33": "9349c76e85bb32943d3b10baa6e309e1",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/ae43d2bd6cec950076dcf25ec42ce87198b7ab": "bcb21c8aa12dc3b9ee2f24fe827d768e",
".git/objects/39/217f7303f6701991377303da6e6369096a91d1": "82ee2a745d2afd2a09042bd1348f8acc",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/0f/57dcd032d40c357840736cc6ce6d0319a8b64f": "1e91aafee8ad3dd906352126ab18824c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/52c3e052790ec818489bc59a88b67803ec9bd4": "b058a9e9b3d00fb426c0cb27f0a545fc",
".git/objects/ef/9197dc7d3e8f1a9f02bba5c226b94fb67dc9c4": "2a39bbdc9844154482a79441be2fc15e",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c3/30ef8a5e0ad147123c6841509b6fce64a6ea85": "753cc8231d5413cd7d3896a67496b6c8",
".git/objects/e9/bf40e02ff44f278168ce99614cff77c7266875": "534074420fc56a0765ee821ee59b13c0",
".git/objects/e9/eac02447d8c2d395296bf2b5b9d07a19100c95": "c8851e9dc0a1c2aef339ae1ae92a6b64",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/31fe3bb0fdf57acc10ae5ca70a3e0d12819843": "b010beec2647ce722a9c5fe613e0b7a3",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/41/658369a45c36a2b25152ba42431011a076f1a3": "66b5d533192109a8098fc750ca338783",
".git/objects/70/57130d581ebf51d0007a0c1e27a244ed700bcb": "e6de3d7a2cf0bf44b563cb97ebe13534",
".git/objects/84/fada350da1c0940a597838ee91f874e06ebe84": "eb6a3ff91d6f5e32d02776dda5eccb27",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/8d/25dfc19119188fbf831b5f0bc6a807f2be7088": "2ed1efc7e52c46de5a007761d44e0c34",
".git/objects/8c/10247fe231bc1e0ece4cdcc85ab7c7b36dbb63": "e7f46c63ac414fefd8564cc828b00cd0",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1c/2137a796076edcfd26146914e124ac9a522d97": "7f6ddd74eb4a993461868ef2ed718642",
".git/objects/40/daab17a2cb83e18e2c47ce0a0f9bf5e6504d47": "6946cf06e14b9c05816c926209bb4d74",
".git/objects/78/12272d4e80a4c9cd1f3d8c905f6e6d271d857c": "b00ac3d7d6ec95d24e67d36f5b998d27",
".git/objects/7a/6003d6d611fec25ce7d59cbf31e57ef2c955dc": "fe7ec83dae45d3e21ba589beccc2159f",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b4ef4956699944f57ea46e179a2f263a",
".git/logs/refs/heads/main": "a3dd7acff5f867d493aa7fba0872cc11",
".git/logs/refs/remotes/origin/main": "626e8266cd950a32548df179e001fa27",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "10a1bb12458da28ae16ede9f5f69ac63",
".git/refs/remotes/origin/main": "10a1bb12458da28ae16ede9f5f69ac63",
".git/index": "d2e775f5080396da466c2cb17a3990db",
".git/COMMIT_EDITMSG": "7f1da7b0d7999666a22180a19f48d15c",
".git/FETCH_HEAD": "a4dac95a180fa174c523b7f2b08156fb",
"assets/AssetManifest.json": "339a3acd86675f62caf252ec78850e5a",
"assets/NOTICES": "3dfd8a754f786d70d2e4831a9a1f86be",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "42076c14b503cd0064067582905c215f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "df3413deac65d88911ecf5b703f23506",
"assets/fonts/MaterialIcons-Regular.otf": "fa3e562ce48f502f18c0f5e3f240f0af",
"assets/assets/padelmavida.png": "698c6eeca433fe4fb948e0e09b0596a8",
"assets/assets/logo.png": "b29e7a164169f09d99fcc1cb3cbae83b",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
