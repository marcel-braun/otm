import { Component, OnInit } from "@angular/core";
import * as SocialShare from "nativescript-social-share";


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

    constructor() { }

    ngOnInit(): void {

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
}