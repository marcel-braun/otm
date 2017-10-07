"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SocialShare = require("nativescript-social-share");
var nativescript_angular_1 = require("nativescript-angular");
var page_1 = require("tns-core-modules/ui/page");
var piwik = require("../shared/piwik");
nativescript_angular_1.registerElement("Gradient", function () { return require("nativescript-gradient").Gradient; });
var http = require("http");
var tsfx = require('nativescript-effects');
var AES = require("crypto-js/aes");
var MD5 = require("crypto-js/md5");
var ItemsComponent = (function () {
    function ItemsComponent(page) {
        this.page = page;
        this.message = "";
        this.password = "";
        this.accessToken = "b8a99727bfe27e085c371292056e1ff2";
        this.link = "";
        this._piwik = new piwik.Piwik();
        //page.actionBarHidden = true;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.page1 = this._page1.nativeElement;
        this.page2 = this._page2.nativeElement;
        this.page2.hide();
        this._piwik.trackPage("startseite");
    };
    ItemsComponent.prototype.send = function () {
        var _this = this;
        http.request({
            url: "https://otm.marcel-braun.de/save",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ message: this.message, password: this.password, accessToken: this.accessToken })
        }).then(function (response) {
            var result = response.content.toJSON();
            _this.link = result.link;
            _this.slidePage(_this.page1, _this.page2);
            _this._piwik.trackPage("showLink");
        }, function (e) {
            alert("Error occurred " + e);
        });
    };
    ItemsComponent.prototype.share = function () {
        SocialShare.shareText(this.link);
    };
    ItemsComponent.prototype.slidePage = function (pageOne, pageTwo, direction) {
        if (direction === void 0) { direction = "in"; }
        var definitions = [];
        var page1;
        var page2;
        if (direction == "back") {
            pageOne.floatIn("slow", "right");
            pageTwo.floatOut("fast", "left");
        }
        if (direction == "in") {
            pageOne.floatOut("fast", "right");
            pageTwo.floatIn("slow", "left");
        }
    };
    ItemsComponent.prototype.goBack = function () {
        this.slidePage(this.page1, this.page2, "back");
    };
    __decorate([
        core_1.ViewChild('page2'),
        __metadata("design:type", core_1.ElementRef)
    ], ItemsComponent.prototype, "_page2", void 0);
    __decorate([
        core_1.ViewChild('page1'),
        __metadata("design:type", core_1.ElementRef)
    ], ItemsComponent.prototype, "_page1", void 0);
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVFO0FBQ3ZFLHVEQUF5RDtBQUl6RCw2REFBcUQ7QUFDckQsaURBQThDO0FBRTlDLHVDQUF5QztBQUV6QyxzQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFFN0UsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQzNDLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNuQyxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFRbkM7SUFlSSx3QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFidkIsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDYixnQkFBVyxHQUFHLGtDQUFrQyxDQUFDO1FBQ2xELFNBQUksR0FBRyxFQUFFLENBQUM7UUFFVCxXQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFTL0IsOEJBQThCO0lBQ2xDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBRXZDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVNLDZCQUFJLEdBQVg7UUFBQSxpQkFnQkM7UUFmRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsR0FBRyxFQUFFLGtDQUFrQztZQUN2QyxNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRSxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQztZQUM3QyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFDLENBQUM7U0FDM0csQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVE7WUFDYixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUV4QixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXRDLENBQUMsRUFBRSxVQUFVLENBQUM7WUFDVixLQUFLLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sOEJBQUssR0FBWjtRQUNJLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSxrQ0FBUyxHQUFoQixVQUFpQixPQUF1QixFQUFFLE9BQXVCLEVBQUUsU0FBd0I7UUFBeEIsMEJBQUEsRUFBQSxnQkFBd0I7UUFDdkYsSUFBSSxXQUFXLEdBQWUsRUFBRSxDQUFDO1FBRWpDLElBQUksS0FBVSxDQUFDO1FBQ2YsSUFBSSxLQUFVLENBQUM7UUFFZixFQUFFLENBQUMsQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNqQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDbEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEMsQ0FBQztJQUNMLENBQUM7SUFFTSwrQkFBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDbEQsQ0FBQztJQTVEbUI7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQVMsaUJBQVU7a0RBQUM7SUFDbkI7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQVMsaUJBQVU7a0RBQUM7SUFWOUIsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzt5Q0FnQjRCLFdBQUk7T0FmckIsY0FBYyxDQXNFMUI7SUFBRCxxQkFBQztDQUFBLEFBdEVELElBc0VDO0FBdEVZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgU29jaWFsU2hhcmUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1zb2NpYWwtc2hhcmVcIjtcbmltcG9ydCB7QWJzb2x1dGVMYXlvdXR9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvYWJzb2x1dGUtbGF5b3V0XCI7XG5pbXBvcnQge3NjcmVlbn0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCAqIGFzIGFuaW1hdGlvbiBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9hbmltYXRpb25cIjtcbmltcG9ydCB7cmVnaXN0ZXJFbGVtZW50fSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHt0b0Jhc2U2NFN0cmluZ30gZnJvbSBcIkBhbmd1bGFyL2NvbXBpbGVyL3NyYy9vdXRwdXQvc291cmNlX21hcFwiO1xuaW1wb3J0ICogYXMgcGl3aWsgZnJvbSBcIi4uL3NoYXJlZC9waXdpa1wiO1xuXG5yZWdpc3RlckVsZW1lbnQoXCJHcmFkaWVudFwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWdyYWRpZW50XCIpLkdyYWRpZW50KTtcblxubGV0IGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcbmxldCB0c2Z4ID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LWVmZmVjdHMnKTtcbmxldCBBRVMgPSByZXF1aXJlKFwiY3J5cHRvLWpzL2Flc1wiKTtcbmxldCBNRDUgPSByZXF1aXJlKFwiY3J5cHRvLWpzL21kNVwiKTtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgbWVzc2FnZSA9IFwiXCI7XG4gICAgcHVibGljIHBhc3N3b3JkID0gXCJcIjtcbiAgICBwcml2YXRlIGFjY2Vzc1Rva2VuID0gXCJiOGE5OTcyN2JmZTI3ZTA4NWMzNzEyOTIwNTZlMWZmMlwiO1xuICAgIHB1YmxpYyBsaW5rID0gXCJcIjtcblxuICAgIHByaXZhdGUgX3Bpd2lrID0gbmV3IHBpd2lrLlBpd2lrKCk7XG5cbiAgICBAVmlld0NoaWxkKCdwYWdlMicpIF9wYWdlMjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdwYWdlMScpIF9wYWdlMTogRWxlbWVudFJlZjtcblxuICAgIHBhZ2UxOiBBYnNvbHV0ZUxheW91dDtcbiAgICBwYWdlMjogQWJzb2x1dGVMYXlvdXQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcbiAgICAgICAgLy9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGFnZTEgPSB0aGlzLl9wYWdlMS5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLnBhZ2UyID0gdGhpcy5fcGFnZTIubmF0aXZlRWxlbWVudDtcblxuICAgICAgICB0aGlzLnBhZ2UyLmhpZGUoKTtcblxuICAgICAgICB0aGlzLl9waXdpay50cmFja1BhZ2UoXCJzdGFydHNlaXRlXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZW5kKCkge1xuICAgICAgICBodHRwLnJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vb3RtLm1hcmNlbC1icmF1bi5kZS9zYXZlXCIsXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1wiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwifSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KHttZXNzYWdlOiB0aGlzLm1lc3NhZ2UsIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLCBhY2Nlc3NUb2tlbjogdGhpcy5hY2Nlc3NUb2tlbn0pXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcbiAgICAgICAgICAgIHRoaXMubGluayA9IHJlc3VsdC5saW5rO1xuXG4gICAgICAgICAgICB0aGlzLnNsaWRlUGFnZSh0aGlzLnBhZ2UxLCB0aGlzLnBhZ2UyKTtcbiAgICAgICAgICAgIHRoaXMuX3Bpd2lrLnRyYWNrUGFnZShcInNob3dMaW5rXCIpO1xuXG4gICAgICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBhbGVydChcIkVycm9yIG9jY3VycmVkIFwiICsgZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaGFyZSgpIHtcbiAgICAgICAgU29jaWFsU2hhcmUuc2hhcmVUZXh0KHRoaXMubGluayk7XG4gICAgfVxuXG4gICAgcHVibGljIHNsaWRlUGFnZShwYWdlT25lOiBBYnNvbHV0ZUxheW91dCwgcGFnZVR3bzogQWJzb2x1dGVMYXlvdXQsIGRpcmVjdGlvbjogc3RyaW5nID0gXCJpblwiKSB7XG4gICAgICAgIGxldCBkZWZpbml0aW9uczogQXJyYXk8YW55PiA9IFtdO1xuXG4gICAgICAgIGxldCBwYWdlMTogYW55O1xuICAgICAgICBsZXQgcGFnZTI6IGFueTtcblxuICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwiYmFja1wiKSB7XG4gICAgICAgICAgICBwYWdlT25lLmZsb2F0SW4oXCJzbG93XCIsIFwicmlnaHRcIik7XG4gICAgICAgICAgICBwYWdlVHdvLmZsb2F0T3V0KFwiZmFzdFwiLCBcImxlZnRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwiaW5cIikge1xuICAgICAgICAgICAgcGFnZU9uZS5mbG9hdE91dChcImZhc3RcIiwgXCJyaWdodFwiKTtcbiAgICAgICAgICAgIHBhZ2VUd28uZmxvYXRJbihcInNsb3dcIiwgXCJsZWZ0XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdvQmFjaygpIHtcbiAgICAgICAgdGhpcy5zbGlkZVBhZ2UodGhpcy5wYWdlMSwgdGhpcy5wYWdlMiwgXCJiYWNrXCIpXG4gICAgfVxufSJdfQ==