import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import * as SocialShare from "nativescript-social-share";
import {AbsoluteLayout} from "tns-core-modules/ui/layouts/absolute-layout";
import {screen} from "tns-core-modules/platform";
import * as animation from "tns-core-modules/ui/animation";
import { registerElement } from "nativescript-angular";
import {Page} from "tns-core-modules/ui/page";
import {toBase64String} from "@angular/compiler/src/output/source_map";

registerElement("Gradient", () => require("nativescript-gradient").Gradient);

let http = require("http");
let tsfx = require('nativescript-effects');
let AES = require("crypto-js/aes");
let MD5 = require("crypto-js/md5");


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

    @ViewChild('page2') _page2: ElementRef;
    @ViewChild('page1') _page1: ElementRef;

    page1: AbsoluteLayout;
    page2: AbsoluteLayout;

    constructor(private page: Page) {
        //page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this.page1 = this._page1.nativeElement;
        this.page2 = this._page2.nativeElement;

        this.page2.hide();
    }

    public send() {
        http.request({
            url: "https://otm.marcel-braun.de/index.php",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ message: this.message, password: this.password, accessToken: this.accessToken })
        }).then((response) => {
            let result = response.content.toJSON();
            this.link = result.link;

            this.slidePage(this.page1, this.page2);

        }, function (e) {
            alert("Error occurred " + e);
        });
    }

    public share() {
        SocialShare.shareUrl(this.link, "Secure Message");
    }

    public slidePage(pageOne: AbsoluteLayout, pageTwo: AbsoluteLayout, direction: string = "in") {
        let definitions: Array<any> = [];

        let page1: any;
        let page2: any;

        if(direction == "back") {
            pageOne.floatIn("slow", "right");
            pageTwo.floatOut("fast", "left");
        }

        if(direction == "in") {
            pageOne.floatOut("fast", "right");
            pageTwo.floatIn("slow", "left");
        }
    }

    public goBack() {
        this.slidePage(this.page1, this.page2, "back")
    }
}