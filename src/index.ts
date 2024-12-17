import {TransliterationProvider} from "./transliteration-provider";
import "./styles/style.scss";

export function enableTransliteration(input: any, language: any){
    new TransliterationProvider(input, language);
}

const result = sass.renderSync({
  silenceDeprecations: ['legacy-js-api'],
});

export function disableTransliteration(input: any){
    // Disable transliteration by cloning the node and replacing evement
    var newInput = input.cloneNode(true);
    input.parentNode.replaceChild(newInput, input);
}

if(window){
    window["enableTransliteration"] = enableTransliteration;
    window["disableTransliteration"] = disableTransliteration;
}
