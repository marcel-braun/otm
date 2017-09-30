"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SocialShare = require("nativescript-social-share");
var http = require("http");
var ItemsComponent = (function () {
    function ItemsComponent() {
        this.tvtext = "";
        this.AccessToken = "b8a99727bfe27e085c371292056e1ff2";
        this.link = "";
    }
    ItemsComponent.prototype.ngOnInit = function () {
    };
    ItemsComponent.prototype.send = function () {
        var _this = this;
        http.request({
            url: "https://otm.marcel-braun.de/index.php",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ Message: this.tvtext, AccessToken: this.AccessToken })
        }).then(function (response) {
            var result = response.content.toJSON();
            _this.link = result.link;
        }, function (e) {
            alert("Error occurred " + e);
        });
    };
    ItemsComponent.prototype.submit = function ($event) {
        alert(this.tvtext);
    };
    ItemsComponent.prototype.share = function () {
        SocialShare.shareUrl(this.link, "One Time Message");
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHVEQUF5RDtBQUd6RCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFRM0I7SUFNSTtRQUpPLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWCxnQkFBVyxHQUFHLGtDQUFrQyxDQUFDO1FBQ2xELFNBQUksR0FBRyxFQUFFLENBQUM7SUFFRCxDQUFDO0lBRWpCLGlDQUFRLEdBQVI7SUFFQSxDQUFDO0lBQ00sNkJBQUksR0FBWDtRQUFBLGlCQWFDO1FBWkcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBRSx1Q0FBdUM7WUFDNUMsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUUsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUU7WUFDL0MsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ25GLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFRO1lBQ2IsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN2QyxLQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFFNUIsQ0FBQyxFQUFFLFVBQVUsQ0FBQztZQUNWLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSwrQkFBTSxHQUFiLFVBQWMsTUFBTTtRQUNoQixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSw4QkFBSyxHQUFaO1FBQ0ksV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDeEQsQ0FBQztJQWhDUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDOztPQUNXLGNBQWMsQ0FpQzFCO0lBQUQscUJBQUM7Q0FBQSxBQWpDRCxJQWlDQztBQWpDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIFNvY2lhbFNoYXJlIGZyb20gXCJuYXRpdmVzY3JpcHQtc29jaWFsLXNoYXJlXCI7XG5cblxubGV0IGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgdHZ0ZXh0ID0gXCJcIjtcbiAgICBwcml2YXRlIEFjY2Vzc1Rva2VuID0gXCJiOGE5OTcyN2JmZTI3ZTA4NWMzNzEyOTIwNTZlMWZmMlwiO1xuICAgIHB1YmxpYyBsaW5rID0gXCJcIjtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIH1cbiAgICBwdWJsaWMgc2VuZCgpIHtcbiAgICAgICAgaHR0cC5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL290bS5tYXJjZWwtYnJhdW4uZGUvaW5kZXgucGhwXCIsXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkoeyBNZXNzYWdlOiB0aGlzLnR2dGV4dCwgQWNjZXNzVG9rZW46IHRoaXMuQWNjZXNzVG9rZW4gfSlcbiAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xuICAgICAgICAgICAgdGhpcy5saW5rID0gcmVzdWx0Lmxpbms7XG5cbiAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiRXJyb3Igb2NjdXJyZWQgXCIgKyBlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN1Ym1pdCgkZXZlbnQpIHtcbiAgICAgICAgYWxlcnQodGhpcy50dnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaGFyZSgpIHtcbiAgICAgICAgU29jaWFsU2hhcmUuc2hhcmVVcmwodGhpcy5saW5rLCBcIk9uZSBUaW1lIE1lc3NhZ2VcIik7XG4gICAgfVxufSJdfQ==