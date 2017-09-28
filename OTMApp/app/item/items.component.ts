import { Component, OnInit } from "@angular/core";

let http = require("http");


@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {

    public tvtext = "";
    private AccessToken = "b8a99727bfe27e085c371292056e1ff2";

    constructor() { }

    ngOnInit(): void {

    }

    public send() {
        let message = this.tvtext;

        http.request({
            url: "https://otm.marcel-braun.de/index.php",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ Message: message, AccessToken: this.AccessToken })
        }).then(function (response) {
            let result = response.content.toJSON();
            alert(result.Link);
        }, function (e) {
            alert("Error occurred " + e);
        });
    }

    public submit($event) {
        alert(this.tvtext);
    }
}