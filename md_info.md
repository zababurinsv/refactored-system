# @newkind/Service
## Node
[add root for node (port 80)](https://stackoverflow.com/questions/60372618/nodejs-listen-eacces-permission-denied-0-0-0-080)
```shell
> sudo apt-get install libcap2-bin 
> sudo setcap cap_net_bind_service=+ep `readlink -f \`which node\`` 
```
## Методы смарт контрактов
* [node/gitlab.com/terafoundation/tera2/SourceJinn/HTML/JS/smart-vm.js](https://gitlab.com/terafoundation/tera2/-/blob/master/Source/HTML/JS/smart-vm.js#L514)
* [node/gitlab.com/terafoundation/tera2/SourceJinn/HTML/JS/coinlib.js](https://gitlab.com/terafoundation/tera2/-/blob/master/Source/HTML/JS/coinlib.js)

### Константы
"HTTP_PORT_NUMBER": 8000, - полная нода (требует пароль для входа)
"HTTP_HOSTING_PORT": 80, - веб доступ и API

## TEST FOR SERVICE WORKERS
[testing-service-workers](https://medium.com/dev-channel/testing-service-workers-318d7b016b19)  
[code for pages](https://github.com/googlearchive/web-testing-examples/blob/master/test/in-page/register.js)  
[service-workers](https://github.com/zackargyle/service-workers)  
[opensource google](https://opensource.google)  

[testing-service-worker workbox 1 part](https://medium.com/ynap-tech/how-we-built-a-service-worker-for-our-micro-frontends-881eabfbf267)  
[testing-service-worker workbox 2 part](https://medium.com/ynap-tech/testing-service-worker-2f9ede60bae)  
[audio-worklet](https://googlechromelabs.github.io/web-audio-samples/audio-worklet/)  
[web-speech](https://github.com/mdn/web-speech-api)
## maskable-icon
https://web.dev/maskable-icon/?utm_source=devtools

[add-manifest](https://web.dev/add-manifest/)
[dev-server](https://parceljs.org/features/development#dev-server)

## Service Worker
* [Strategy CACHE](https://habr.com/ru/company/2gis/blog/345552/)
* [workers](https://medium.com/@vKuka/%D0%B2%D0%B5%D0%B1-%D0%B2%D0%BE%D1%80%D0%BA%D0%B5%D1%80%D1%8B-%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81-%D0%B2%D0%BE%D1%80%D0%BA%D0%B5%D1%80%D1%8B-%D0%B8-%D0%B2%D0%BE%D1%80%D0%BA%D0%BB%D0%B5%D1%82%D1%8B-1e2f561312fd)
* [react ssr](https://habr.com/ru/post/551948/)
* [parcel worklet](https://parceljs.org/blog/rc0/)
---  

packagesrc  
┣ pen_file_foldercomponents  
┃ ┣scrollsome.component.tsx
┣open_file_folderpages  
┃ ┣open_file_foldersome-specific-page  
┃ ┃ ┗scrollsome-specific-page.tsx  
┃ ┣scrollmain.ts

```js
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState == 'hidden') {

    }
    if (document.visibilityState == 'visible') {

    }
    // if (document.visibilityState == 'hidden') {
    //     navigator.sendBeacon("/log.php", analyticsData);
    // }
});
window.onpagehide = event => {
    if (event.persisted) {
        alert('sdsds')
    }
    alert('sdsds')
}
window.addEventListener('beforeunload', function(event) {
    alert('sdsds')
    console.assert(false)
    console.log('I am the 1st one.');
});
window.addEventListener('unload', function(event) {
    alert('sdsds')
    console.assert(false)
    console.log('I am the 3rd one.');
});
const beforeUnloadListener = (event) => {
    event.preventDefault();
    return event.returnValue = "Are you sure you want to exit?";
};
document.body.addEventListener("beforeunload", beforeUnloadListener, {capture: true});
```
[tera ide](https://terawallet.org/dapp-edit.html)