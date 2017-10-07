import * as platformModule from "tns-core-modules/platform";

let http = require("http");

export class Piwik {
    private _url: string;

    constructor(url: string = "https://piwik.marcel-braun.de") {
        this._url = url;
    }

    trackPage(page: string) {
        page = encodeURIComponent("https://app/" + page);
        let resolution = platformModule.screen.mainScreen.widthPixels + "x" + platformModule.screen.mainScreen.heightPixels;

        let params = "idsite=2&";
        params += "rec=1&";
        params += "res=" + resolution + "&";
        params += "url=" + page;

        http.getString(this._url + "/piwik.php?" + params).then(
            (response) => {
                // code ...
            },
            (error) => {
                // code ...
            });
    }
}