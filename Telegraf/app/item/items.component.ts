import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import * as SocialShare from "nativescript-social-share";
import {AbsoluteLayout} from "tns-core-modules/ui/layouts/absolute-layout";
import {screen} from "tns-core-modules/platform";
import * as animation from "tns-core-modules/ui/animation";
import { registerElement } from "nativescript-angular";
import {Page} from "tns-core-modules/ui/page";

registerElement("Gradient", () => require("nativescript-gradient").Gradient);

let http = require("http");


@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {

    public tvtext = "";
    private AccessToken = "b8a99727bfe27e085c371292056e1ff2";
    public link = "";

    private duration = 500;

    @ViewChild('page2') _page2: ElementRef;
    @ViewChild('page1') _page1: ElementRef;

    page1: AbsoluteLayout;
    page2: AbsoluteLayout;

    constructor(private page: Page) {
        page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this.page1 = this._page1.nativeElement;
        this.page2 = this._page2.nativeElement;

        this.page2.left = screen.mainScreen.widthPixels;
    }

    public send() {
        http.request({
            url: "https://otm.marcel-braun.de/index.php",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ Message: this.tvtext, AccessToken: this.AccessToken })
        }).then((response) => {
            let result = response.content.toJSON();
            this.link = result.link;
            this.showPage2();

        }, function (e) {
            alert("Error occurred " + e);
        });
    }

    public submit($event) {
        alert(this.tvtext);
    }

    public share() {
        SocialShare.shareUrl(this.link, "One Time Message");
    }

    public showPage2() {
        let definitions: Array<any> = [];

        let page1 = {
            target: this.page1,
            translate: { x: -screen.mainScreen.widthPixels, y: 0},
            duration: this.duration
        }

        definitions.push(page1);

        let page2 = {
            target: this.page2,
            translate: { x: -screen.mainScreen.widthPixels, y: 0},
            duration: this.duration
        }

        definitions.push(page2);

        let set = new animation.Animation(definitions);
        set.play();
    }
}