import S from 's-js';
import * as Surplus from 'surplus';

import { compile } from 'surplus/compiler/es';

// export packages to global namespace
const global = window as any;
global.S = S;
global.Surplus = Surplus;

document.addEventListener("DOMContentLoaded", compileSurplus);

function compileSurplus() {
    let scriptIn : HTMLScriptElement | null,
        scriptOut : HTMLScriptElement,
        source : string,
        compiled : string;

    while (scriptIn = document.querySelector("script[type='text/ecmascript']")) {
        scriptIn.type += '-processed';

        source = scriptIn.textContent || scriptIn.innerText || scriptIn.innerHTML;
        compiled = compile(source, { sourcemap: 'append' }) as string;

        scriptOut = document.createElement('script');
        scriptOut.type = 'text/javascript';
        scriptOut.src  = 'data:text/javascript;charset=utf-8,' + encodeURIComponent(compiled);
        scriptOut.async = scriptIn.async;
        scriptOut.defer = scriptIn.defer;

        if (scriptIn.nextSibling) {
            scriptIn.parentNode!.insertBefore(scriptOut, scriptIn.nextSibling);
        } else {
            scriptIn.parentNode!.appendChild(scriptOut);
        }
    }
}

