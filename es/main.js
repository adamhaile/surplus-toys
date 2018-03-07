import S from 's-js';
import SArray, * as SArrayMethods from 's-array';
import * as Surplus from 'surplus';
import SurplusMixinData from 'surplus-mixin-data';
import SurplusMixinOnkey from 'surplus-mixin-onkey';
import { compile } from 'surplus/compiler/es';
// export packages to global namespace
var global = window;
global.S = S;
global.SArray = SArray;
for (var s in SArrayMethods)
    SArray[s] = SArrayMethods[s];
global.Surplus = Surplus;
global.SurplusMixinData = SurplusMixinData;
global.SurplusMixinOnkey = SurplusMixinOnkey;
var scriptIn, scriptOut, source, compiled;
while (scriptIn = document.querySelector("script[type='text/jsx']")) {
    scriptIn.type += '-processed';
    source = scriptIn.textContent || scriptIn.innerText || scriptIn.innerHTML;
    compiled = compile(source, { sourcemap: 'append' });
    scriptOut = document.createElement('script');
    scriptOut.type = 'text/javascript';
    scriptOut.src = 'data:text/javascript;charset=utf-8,' + encodeURIComponent(compiled);
    scriptOut.async = scriptIn.async;
    scriptOut.defer = scriptIn.defer;
    if (scriptIn.nextSibling) {
        scriptIn.parentNode.insertBefore(scriptOut, scriptIn.nextSibling);
    }
    else {
        scriptIn.parentNode.appendChild(scriptOut);
    }
}