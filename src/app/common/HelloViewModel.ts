import * as ko from "knockout";

export class HelloViewModel {
    language: any;
    framework: any;

    constructor(language: string, framework: string) {
        this.language = ko.observable(language);
        this.framework = ko.observable(framework);        
    }
}
