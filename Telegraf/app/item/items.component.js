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
var markdown = require("markdown").markdown;
var ItemsComponent = (function () {
    function ItemsComponent(page) {
        this.page = page;
        this.message = "";
        this.password = "";
        this.accessToken = "b8a99727bfe27e085c371292056e1ff2";
        this.link = "";
        this.webViewSrc = "";
        this._piwik = new piwik.Piwik();
        //page.actionBarHidden = true;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        // register native elements
        this.page1 = this._page1.nativeElement;
        this.page2 = this._page2.nativeElement;
        this.webview = this._webview.nativeElement;
        // hide pages on start
        this.page2.hide();
        this.webview.hide();
        this._piwik.trackPage("startseite");
    };
    ItemsComponent.prototype.send = function () {
        var _this = this;
        var message = this.message;
        http.request({
            url: "https://otm.marcel-braun.de/save",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ message: message, password: this.password, accessToken: this.accessToken })
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
        if (direction == "out") {
            pageOne.floatIn("slow", "right");
            pageTwo.floatOut("fast", "left");
        }
        if (direction == "in") {
            pageOne.floatOut("fast", "right");
            pageTwo.floatIn("slow", "left");
        }
    };
    ItemsComponent.prototype.goBack = function () {
        this.slidePage(this.page1, this.page2, "out");
    };
    ItemsComponent.prototype.preview = function () {
        var head = "<link href=\"https://otm.marcel-braun.de/css/webview.css\" rel=\"stylesheet\">";
        this.webViewSrc = head + markdown.toHTML(this.message);
        this.slidePage(this.page1, this.webview, "in");
    };
    ItemsComponent.prototype.previewBack = function () {
        this.slidePage(this.page1, this.webview, "out");
    };
    __decorate([
        core_1.ViewChild('page2'),
        __metadata("design:type", core_1.ElementRef)
    ], ItemsComponent.prototype, "_page2", void 0);
    __decorate([
        core_1.ViewChild('page1'),
        __metadata("design:type", core_1.ElementRef)
    ], ItemsComponent.prototype, "_page1", void 0);
    __decorate([
        core_1.ViewChild('webview'),
        __metadata("design:type", core_1.ElementRef)
    ], ItemsComponent.prototype, "_webview", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVFO0FBQ3ZFLHVEQUF5RDtBQUl6RCw2REFBcUQ7QUFDckQsaURBQThDO0FBRTlDLHVDQUF5QztBQUd6QyxzQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFFN0UsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQzNDLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNuQyxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDbkMsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFFLFVBQVUsQ0FBRSxDQUFDLFFBQVEsQ0FBQztBQVE5QztJQWtCSSx3QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFoQnZCLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2IsZ0JBQVcsR0FBRyxrQ0FBa0MsQ0FBQztRQUNsRCxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUVmLFdBQU0sR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQVcvQiw4QkFBOEI7SUFDbEMsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSwyQkFBMkI7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7UUFFM0Msc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVwQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sNkJBQUksR0FBWDtRQUFBLGlCQWtCQztRQWpCRyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRTNCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDVCxHQUFHLEVBQUUsa0NBQWtDO1lBQ3ZDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDO1lBQzdDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBQyxDQUFDO1NBQ3RHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFRO1lBQ2IsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN2QyxLQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFFeEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsS0FBSyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV0QyxDQUFDLEVBQUUsVUFBVSxDQUFDO1lBQ1YsS0FBSyxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLDhCQUFLLEdBQVo7UUFDSSxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0sa0NBQVMsR0FBaEIsVUFBaUIsT0FBdUIsRUFBRSxPQUF1QixFQUFFLFNBQXdCO1FBQXhCLDBCQUFBLEVBQUEsZ0JBQXdCO1FBQ3ZGLElBQUksV0FBVyxHQUFlLEVBQUUsQ0FBQztRQUVqQyxJQUFJLEtBQVUsQ0FBQztRQUNmLElBQUksS0FBVSxDQUFDO1FBRWYsRUFBRSxDQUFDLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDckIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDakMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLENBQUM7SUFDTCxDQUFDO0lBRU0sK0JBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ2pELENBQUM7SUFFTSxnQ0FBTyxHQUFkO1FBQ0ksSUFBSSxJQUFJLEdBQUcsZ0ZBQWdGLENBQUM7UUFDNUYsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVNLG9DQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQTlFbUI7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQVMsaUJBQVU7a0RBQUM7SUFDbkI7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQVMsaUJBQVU7a0RBQUM7SUFDakI7UUFBckIsZ0JBQVMsQ0FBQyxTQUFTLENBQUM7a0NBQVcsaUJBQVU7b0RBQUM7SUFabEMsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzt5Q0FtQjRCLFdBQUk7T0FsQnJCLGNBQWMsQ0F5RjFCO0lBQUQscUJBQUM7Q0FBQSxBQXpGRCxJQXlGQztBQXpGWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIFNvY2lhbFNoYXJlIGZyb20gXCJuYXRpdmVzY3JpcHQtc29jaWFsLXNoYXJlXCI7XG5pbXBvcnQge0Fic29sdXRlTGF5b3V0fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2Fic29sdXRlLWxheW91dFwiO1xuaW1wb3J0IHtzY3JlZW59IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQgKiBhcyBhbmltYXRpb24gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYW5pbWF0aW9uXCI7XG5pbXBvcnQge3JlZ2lzdGVyRWxlbWVudH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7dG9CYXNlNjRTdHJpbmd9IGZyb20gXCJAYW5ndWxhci9jb21waWxlci9zcmMvb3V0cHV0L3NvdXJjZV9tYXBcIjtcbmltcG9ydCAqIGFzIHBpd2lrIGZyb20gXCIuLi9zaGFyZWQvcGl3aWtcIjtcbmltcG9ydCB7V2ViVmlld30gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvd2ViLXZpZXdcIjtcblxucmVnaXN0ZXJFbGVtZW50KFwiR3JhZGllbnRcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1ncmFkaWVudFwiKS5HcmFkaWVudCk7XG5cbmxldCBodHRwID0gcmVxdWlyZShcImh0dHBcIik7XG5sZXQgdHNmeCA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1lZmZlY3RzJyk7XG5sZXQgQUVTID0gcmVxdWlyZShcImNyeXB0by1qcy9hZXNcIik7XG5sZXQgTUQ1ID0gcmVxdWlyZShcImNyeXB0by1qcy9tZDVcIik7XG5sZXQgbWFya2Rvd24gPSByZXF1aXJlKCBcIm1hcmtkb3duXCIgKS5tYXJrZG93bjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgbWVzc2FnZSA9IFwiXCI7XG4gICAgcHVibGljIHBhc3N3b3JkID0gXCJcIjtcbiAgICBwcml2YXRlIGFjY2Vzc1Rva2VuID0gXCJiOGE5OTcyN2JmZTI3ZTA4NWMzNzEyOTIwNTZlMWZmMlwiO1xuICAgIHB1YmxpYyBsaW5rID0gXCJcIjtcbiAgICBwdWJsaWMgd2ViVmlld1NyYyA9IFwiXCI7XG5cbiAgICBwcml2YXRlIF9waXdpayA9IG5ldyBwaXdpay5QaXdpaygpO1xuXG4gICAgQFZpZXdDaGlsZCgncGFnZTInKSBfcGFnZTI6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgncGFnZTEnKSBfcGFnZTE6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnd2VidmlldycpIF93ZWJ2aWV3OiBFbGVtZW50UmVmO1xuXG4gICAgcGFnZTE6IEFic29sdXRlTGF5b3V0O1xuICAgIHBhZ2UyOiBBYnNvbHV0ZUxheW91dDtcbiAgICB3ZWJ2aWV3OiBBYnNvbHV0ZUxheW91dDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkge1xuICAgICAgICAvL3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gcmVnaXN0ZXIgbmF0aXZlIGVsZW1lbnRzXG4gICAgICAgIHRoaXMucGFnZTEgPSB0aGlzLl9wYWdlMS5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLnBhZ2UyID0gdGhpcy5fcGFnZTIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy53ZWJ2aWV3ID0gdGhpcy5fd2Vidmlldy5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAgIC8vIGhpZGUgcGFnZXMgb24gc3RhcnRcbiAgICAgICAgdGhpcy5wYWdlMi5oaWRlKCk7XG4gICAgICAgIHRoaXMud2Vidmlldy5oaWRlKCk7XG5cbiAgICAgICAgdGhpcy5fcGl3aWsudHJhY2tQYWdlKFwic3RhcnRzZWl0ZVwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VuZCgpIHtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2U7XG5cbiAgICAgICAgaHR0cC5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL290bS5tYXJjZWwtYnJhdW4uZGUvc2F2ZVwiLFxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIn0sXG4gICAgICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeSh7bWVzc2FnZTogbWVzc2FnZSwgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsIGFjY2Vzc1Rva2VuOiB0aGlzLmFjY2Vzc1Rva2VufSlcbiAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xuICAgICAgICAgICAgdGhpcy5saW5rID0gcmVzdWx0Lmxpbms7XG5cbiAgICAgICAgICAgIHRoaXMuc2xpZGVQYWdlKHRoaXMucGFnZTEsIHRoaXMucGFnZTIpO1xuICAgICAgICAgICAgdGhpcy5fcGl3aWsudHJhY2tQYWdlKFwic2hvd0xpbmtcIik7XG5cbiAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiRXJyb3Igb2NjdXJyZWQgXCIgKyBlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNoYXJlKCkge1xuICAgICAgICBTb2NpYWxTaGFyZS5zaGFyZVRleHQodGhpcy5saW5rKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2xpZGVQYWdlKHBhZ2VPbmU6IEFic29sdXRlTGF5b3V0LCBwYWdlVHdvOiBBYnNvbHV0ZUxheW91dCwgZGlyZWN0aW9uOiBzdHJpbmcgPSBcImluXCIpIHtcbiAgICAgICAgbGV0IGRlZmluaXRpb25zOiBBcnJheTxhbnk+ID0gW107XG5cbiAgICAgICAgbGV0IHBhZ2UxOiBhbnk7XG4gICAgICAgIGxldCBwYWdlMjogYW55O1xuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJvdXRcIikge1xuICAgICAgICAgICAgcGFnZU9uZS5mbG9hdEluKFwic2xvd1wiLCBcInJpZ2h0XCIpO1xuICAgICAgICAgICAgcGFnZVR3by5mbG9hdE91dChcImZhc3RcIiwgXCJsZWZ0XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcImluXCIpIHtcbiAgICAgICAgICAgIHBhZ2VPbmUuZmxvYXRPdXQoXCJmYXN0XCIsIFwicmlnaHRcIik7XG4gICAgICAgICAgICBwYWdlVHdvLmZsb2F0SW4oXCJzbG93XCIsIFwibGVmdFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnb0JhY2soKSB7XG4gICAgICAgIHRoaXMuc2xpZGVQYWdlKHRoaXMucGFnZTEsIHRoaXMucGFnZTIsIFwib3V0XCIpXG4gICAgfVxuXG4gICAgcHVibGljIHByZXZpZXcoKSB7XG4gICAgICAgIGxldCBoZWFkID0gXCI8bGluayBocmVmPVxcXCJodHRwczovL290bS5tYXJjZWwtYnJhdW4uZGUvY3NzL3dlYnZpZXcuY3NzXFxcIiByZWw9XFxcInN0eWxlc2hlZXRcXFwiPlwiO1xuICAgICAgICB0aGlzLndlYlZpZXdTcmMgPSBoZWFkICsgbWFya2Rvd24udG9IVE1MKHRoaXMubWVzc2FnZSk7XG4gICAgICAgIHRoaXMuc2xpZGVQYWdlKHRoaXMucGFnZTEsIHRoaXMud2VidmlldywgXCJpblwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHJldmlld0JhY2soKSB7XG4gICAgICAgIHRoaXMuc2xpZGVQYWdlKHRoaXMucGFnZTEsIHRoaXMud2VidmlldywgXCJvdXRcIik7XG4gICAgfVxufSJdfQ==