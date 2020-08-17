/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b7f835c18c4a1e09f90a9b4f06086b98"
  },
  {
    "url": "assets/css/0.styles.a66b2b1a.css",
    "revision": "588840f8136c4bdb74bbe563a199dc59"
  },
  {
    "url": "assets/img/home-bg.cf2212b4.jpg",
    "revision": "cf2212b4822dc4ae698b7215c0c42532"
  },
  {
    "url": "assets/js/1.91705b1a.js",
    "revision": "00a3c6ec51bd2d1f6c826847f0995658"
  },
  {
    "url": "assets/js/10.c5bb13d6.js",
    "revision": "7fda17f9cbb765e36977b381cfac85d7"
  },
  {
    "url": "assets/js/11.980358da.js",
    "revision": "ab4f5d2033483aa71ae19eef22a6f776"
  },
  {
    "url": "assets/js/12.94cbd312.js",
    "revision": "78a320d225df86931f45148d84a84597"
  },
  {
    "url": "assets/js/13.827c2f63.js",
    "revision": "0ebeee98a218a9c6059928256ae43105"
  },
  {
    "url": "assets/js/14.0fa9046b.js",
    "revision": "c511ec6c12f22b6533eca383dcbab5d4"
  },
  {
    "url": "assets/js/15.d7245fef.js",
    "revision": "1bcf160e63d8b2ae280ff8eb3526c88b"
  },
  {
    "url": "assets/js/16.ffdbc432.js",
    "revision": "acde075998a98959e3896a945b045980"
  },
  {
    "url": "assets/js/17.3f4fcbe8.js",
    "revision": "fee7fd7cc670bd5dbc12e21410da7263"
  },
  {
    "url": "assets/js/18.472b54d2.js",
    "revision": "eac006db2855073d50b2618178b6bcfb"
  },
  {
    "url": "assets/js/19.1e134f25.js",
    "revision": "d672d375e8f44722a0c5b7700bd1270b"
  },
  {
    "url": "assets/js/2.ee77c428.js",
    "revision": "c8836087f49f1296f09e979ce889d2cf"
  },
  {
    "url": "assets/js/20.de64c21e.js",
    "revision": "c9f81abb2832e245f4fb8058d410c72e"
  },
  {
    "url": "assets/js/21.4ca38f71.js",
    "revision": "47e68f6fbc97db5482c4fd5f24c16eb5"
  },
  {
    "url": "assets/js/22.f7ed22ff.js",
    "revision": "e9909664b812a036a7f998b20a1c9bd6"
  },
  {
    "url": "assets/js/23.7a59def5.js",
    "revision": "aa5b72baa470f9b2b6f27caaa89f9d41"
  },
  {
    "url": "assets/js/24.89a51e29.js",
    "revision": "2aa8cdb2c4ae8e5f1dccded72e539f99"
  },
  {
    "url": "assets/js/25.ee65d9cd.js",
    "revision": "cbe642c8572bd0d13911970da6b7f5c0"
  },
  {
    "url": "assets/js/26.9ba923c3.js",
    "revision": "f7fd0e3874edc2e7046cc25b975ca991"
  },
  {
    "url": "assets/js/27.5ec95fbf.js",
    "revision": "21dd55bb263857e3d8cd1d928bf1141a"
  },
  {
    "url": "assets/js/28.121de2c2.js",
    "revision": "80142acf599001fb10f617e74bdc6a12"
  },
  {
    "url": "assets/js/29.de5619ee.js",
    "revision": "6dae8ecc71808e1e99d49103f98e1207"
  },
  {
    "url": "assets/js/30.85beb005.js",
    "revision": "85cdee8f29b712cf4c9315e170500048"
  },
  {
    "url": "assets/js/4.fb13b2f0.js",
    "revision": "3b373b5efa6a9c91abb025d5139002e7"
  },
  {
    "url": "assets/js/5.206667ac.js",
    "revision": "25495c38536135d1f9f7aeb8ced31137"
  },
  {
    "url": "assets/js/6.76fc0160.js",
    "revision": "76bbd0847202180467cb5baa5f038165"
  },
  {
    "url": "assets/js/7.846f5e9c.js",
    "revision": "416daa48cd78fb198aedc25a65d5674d"
  },
  {
    "url": "assets/js/8.57ddca28.js",
    "revision": "32ad08fe84e186d56ce49b710191aea1"
  },
  {
    "url": "assets/js/9.7cdabb3f.js",
    "revision": "be65a0a18f3f432adb698aaa1e30c37c"
  },
  {
    "url": "assets/js/app.fb80f49e.js",
    "revision": "e93f2b3f4b159378f66914b7cef2a5b6"
  },
  {
    "url": "avatar.png",
    "revision": "eb500f798477a48ae45578c56f94c00f"
  },
  {
    "url": "blogs/java/2020/ Reprint/Git笔记.html",
    "revision": "d0e3e7483591255e6b8a36412816771b"
  },
  {
    "url": "blogs/java/2020/Design Pattern/Design1.html",
    "revision": "cfdaa68cc1f47f5e546203d374cbf161"
  },
  {
    "url": "blogs/java/2020/Design Pattern/Design2Singleton.html",
    "revision": "207daa63b31ffba1324a59a0602fd2e0"
  },
  {
    "url": "blogs/java/2020/Design Pattern/Design3Factory.html",
    "revision": "1da98ec46f1c0b02162ed99b297f288b"
  },
  {
    "url": "blogs/java/2020/Design Pattern/Design4Prototype.html",
    "revision": "ff449f14d9b907ecd8e898c21ba92dc1"
  },
  {
    "url": "blogs/java/2020/Design Pattern/Design5Builder.html",
    "revision": "65cb01ce877fd557be920f16bbafee3e"
  },
  {
    "url": "blogs/java/2020/Design Pattern/Design6Adaptor.html",
    "revision": "82052b0305df61db651ed9035dbb2bd9"
  },
  {
    "url": "blogs/java/2020/Design Pattern/Design7Bridge.html",
    "revision": "43fe55882e6e0ef70a8979fff16991ba"
  },
  {
    "url": "blogs/java/2020/Essay/20200817.html",
    "revision": "aee22cc754b435f559b28e269429245c"
  },
  {
    "url": "blogs/java/2020/Scenario/20200720.html",
    "revision": "2c312d706eacf308245bd1ce28d2f0b7"
  },
  {
    "url": "blogs/java/2020/SpringSecurity/SpringSecurity1.html",
    "revision": "04806e3a0951e9d85845c4d33531c6d8"
  },
  {
    "url": "blogs/java/2020/SpringSecurity/SpringSecurity2.html",
    "revision": "ab13915ae821a5b74cb41705e2d8967e"
  },
  {
    "url": "blogs/java/2020/SpringSecurity/SpringSecurity3.html",
    "revision": "62d70157dcdc026e46fee0fbe931ef13"
  },
  {
    "url": "blogs/java/2020/SpringSecurity/SpringSecurity4.html",
    "revision": "eb03084620dfeb83b6b74528c628331e"
  },
  {
    "url": "blogs/java/2020/SpringSecurity/SpringSecurity5.html",
    "revision": "dd246c59ed3e8f6b9b967db1df6fcabf"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "f2f06a372c5e04aa2b5ce8dce8a97780"
  },
  {
    "url": "categories/index.html",
    "revision": "e93f619dbb7dbf6ecb7d3c3bccdc618e"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "413030ba14c8c26075ba8ef652b67d70"
  },
  {
    "url": "categories/脚本/index.html",
    "revision": "a498822755c75e68d7d6bf976dd3160b"
  },
  {
    "url": "categories/设计模式/index.html",
    "revision": "b19cc9102e5c5e06923ddeede94e217a"
  },
  {
    "url": "categories/转载/index.html",
    "revision": "7c26581c124a754877b54347cb23cce7"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "094b1ec321c7fa59094d3cda5b1587e0"
  },
  {
    "url": "friend/index.html",
    "revision": "2066059fbaf64817a7cf71273db72f2b"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "home-bg.jpg",
    "revision": "cf2212b4822dc4ae698b7215c0c42532"
  },
  {
    "url": "icon.css",
    "revision": "c7b83f3ec33a7b6313952575e798cf91"
  },
  {
    "url": "index.html",
    "revision": "1150efb55ad9bffe134b5eb47e90f585"
  },
  {
    "url": "logo_my.png",
    "revision": "fd3e679bca0ec66e2c10804b0f60f3ba"
  },
  {
    "url": "logo_my1.png",
    "revision": "bad9b0d82e9b222dabffb19d74f39c8e"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "f88d14f6a7154c8161c368b6620149da"
  },
  {
    "url": "tag/index.html",
    "revision": "f9d681dbff98b49d6c12071d2a79392c"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "ed057f5330e7bee1461c3e09e9abeb5f"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "c7248b5d9f69d94dda98f9d2eef315b3"
  },
  {
    "url": "tag/Spring Boot/index.html",
    "revision": "cfd2eb0378d631251ed2cdce03e92be1"
  },
  {
    "url": "tag/Spring Security/index.html",
    "revision": "7342882efa62f3c556350249799d3751"
  },
  {
    "url": "tag/开源项目/index.html",
    "revision": "8f99c328cdcd9cf2eec803ad98beaaee"
  },
  {
    "url": "tag/脚本/index.html",
    "revision": "a44fa4e962b7be1c21339f3fd6cbbb58"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "ff12dc919610bd342277f5fc823e13db"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "1ded22dc2f7f1a7188dc588b16a19fc8"
  },
  {
    "url": "timeline/index.html",
    "revision": "76636c1bb4e38c5c8c8cefe261ff7df9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
