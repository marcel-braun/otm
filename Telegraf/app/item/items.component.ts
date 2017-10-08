import {Component, OnInit, ViewChild, ElementRef} from "@angular/core";
import * as SocialShare from "nativescript-social-share";
import {AbsoluteLayout} from "tns-core-modules/ui/layouts/absolute-layout";
import {screen} from "tns-core-modules/platform";
import * as animation from "tns-core-modules/ui/animation";
import {registerElement} from "nativescript-angular";
import {Page} from "tns-core-modules/ui/page";
import {toBase64String} from "@angular/compiler/src/output/source_map";
import * as piwik from "../shared/piwik";
import {WebView} from "tns-core-modules/ui/web-view";

registerElement("Gradient", () => require("nativescript-gradient").Gradient);

let http = require("http");
let tsfx = require('nativescript-effects');
let AES = require("crypto-js/aes");
let MD5 = require("crypto-js/md5");
let markdown = require( "markdown" ).markdown;


@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {

    public message = "";
    public password = "";
    private accessToken = "b8a99727bfe27e085c371292056e1ff2";
    public link = "";
    public webViewSrc = "";

    private _piwik = new piwik.Piwik();

    @ViewChild('page2') _page2: ElementRef;
    @ViewChild('page1') _page1: ElementRef;
    @ViewChild('webview') _webview: ElementRef;

    page1: AbsoluteLayout;
    page2: AbsoluteLayout;
    webview: AbsoluteLayout;

    constructor(private page: Page) {
        //page.actionBarHidden = true;
    }

    ngOnInit(): void {
        // register native elements
        this.page1 = this._page1.nativeElement;
        this.page2 = this._page2.nativeElement;
        this.webview = this._webview.nativeElement;

        // hide pages on start
        this.page2.hide();
        this.webview.hide();

        this._piwik.trackPage("startseite");
    }

    public send() {
        let message = this.message;

        http.request({
            url: "https://otm.marcel-braun.de/save",
            method: "POST",
            headers: {"Content-Type": "application/json"},
            content: JSON.stringify({message: message, password: this.password, accessToken: this.accessToken})
        }).then((response) => {
            let result = response.content.toJSON();
            this.link = result.link;

            this.slidePage(this.page1, this.page2);
            this._piwik.trackPage("showLink");

        }, function (e) {
            alert("Error occurred " + e);
        });
    }

    public share() {
        SocialShare.shareText(this.link);
    }

    public slidePage(pageOne: AbsoluteLayout, pageTwo: AbsoluteLayout, direction: string = "in") {
        let definitions: Array<any> = [];

        let page1: any;
        let page2: any;

        if (direction == "out") {
            pageOne.floatIn("slow", "right");
            pageTwo.floatOut("fast", "left");
        }

        if (direction == "in") {
            pageOne.floatOut("fast", "right");
            pageTwo.floatIn("slow", "left");
        }
    }

    public goBack() {
        this.slidePage(this.page1, this.page2, "out")
    }

    public preview() {
        let head = "<link href=\"https://otm.marcel-braun.de/css/webview.css\" rel=\"stylesheet\">";
        this.webViewSrc = head + markdown.toHTML(this.message);
        this.slidePage(this.page1, this.webview, "in");
    }

    public previewBack() {
        this.slidePage(this.page1, this.webview, "out");
    }
}