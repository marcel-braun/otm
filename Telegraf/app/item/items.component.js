"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SocialShare = require("nativescript-social-share");
var platform_1 = require("tns-core-modules/platform");
var animation = require("tns-core-modules/ui/animation");
var nativescript_angular_1 = require("nativescript-angular");
var page_1 = require("tns-core-modules/ui/page");
nativescript_angular_1.registerElement("Gradient", function () { return require("nativescript-gradient").Gradient; });
var http = require("http");
var ItemsComponent = (function () {
    function ItemsComponent(page) {
        this.page = page;
        this.tvtext = "";
        this.AccessToken = "b8a99727bfe27e085c371292056e1ff2";
        this.link = "";
        this.duration = 500;
        page.actionBarHidden = true;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.page1 = this._page1.nativeElement;
        this.page2 = this._page2.nativeElement;
        this.page2.left = platform_1.screen.mainScreen.widthPixels;
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
            _this.showPage2();
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
    ItemsComponent.prototype.showPage2 = function () {
        var definitions = [];
        var page1 = {
            target: this.page1,
            translate: { x: -platform_1.screen.mainScreen.widthPixels, y: 0 },
            duration: this.duration
        };
        definitions.push(page1);
        var page2 = {
            target: this.page2,
            translate: { x: -platform_1.screen.mainScreen.widthPixels, y: 0 },
            duration: this.duration
        };
        definitions.push(page2);
        var set = new animation.Animation(definitions);
        set.play();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLHVEQUF5RDtBQUV6RCxzREFBaUQ7QUFDakQseURBQTJEO0FBQzNELDZEQUF1RDtBQUN2RCxpREFBOEM7QUFFOUMsc0NBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0FBRTdFLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQVEzQjtJQWNJLHdCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQVp2QixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1gsZ0JBQVcsR0FBRyxrQ0FBa0MsQ0FBQztRQUNsRCxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBRVQsYUFBUSxHQUFHLEdBQUcsQ0FBQztRQVNuQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUV2QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7SUFDcEQsQ0FBQztJQUVNLDZCQUFJLEdBQVg7UUFBQSxpQkFjQztRQWJHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDVCxHQUFHLEVBQUUsdUNBQXVDO1lBQzVDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFO1lBQy9DLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNuRixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBUTtZQUNiLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdkMsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVyQixDQUFDLEVBQUUsVUFBVSxDQUFDO1lBQ1YsS0FBSyxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLCtCQUFNLEdBQWIsVUFBYyxNQUFNO1FBQ2hCLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVNLDhCQUFLLEdBQVo7UUFDSSxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRU0sa0NBQVMsR0FBaEI7UUFDSSxJQUFJLFdBQVcsR0FBZSxFQUFFLENBQUM7UUFFakMsSUFBSSxLQUFLLEdBQUc7WUFDUixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDbEIsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsaUJBQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUM7WUFDckQsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQzFCLENBQUE7UUFFRCxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXhCLElBQUksS0FBSyxHQUFHO1lBQ1IsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2xCLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLGlCQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDO1lBQ3JELFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUMxQixDQUFBO1FBRUQsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV4QixJQUFJLEdBQUcsR0FBRyxJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0MsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQTlEbUI7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQVMsaUJBQVU7a0RBQUM7SUFDbkI7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQVMsaUJBQVU7a0RBQUM7SUFUOUIsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzt5Q0FlNEIsV0FBSTtPQWRyQixjQUFjLENBdUUxQjtJQUFELHFCQUFDO0NBQUEsQUF2RUQsSUF1RUM7QUF2RVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIFNvY2lhbFNoYXJlIGZyb20gXCJuYXRpdmVzY3JpcHQtc29jaWFsLXNoYXJlXCI7XG5pbXBvcnQge0Fic29sdXRlTGF5b3V0fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2Fic29sdXRlLWxheW91dFwiO1xuaW1wb3J0IHtzY3JlZW59IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQgKiBhcyBhbmltYXRpb24gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYW5pbWF0aW9uXCI7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuXG5yZWdpc3RlckVsZW1lbnQoXCJHcmFkaWVudFwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWdyYWRpZW50XCIpLkdyYWRpZW50KTtcblxubGV0IGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgdHZ0ZXh0ID0gXCJcIjtcbiAgICBwcml2YXRlIEFjY2Vzc1Rva2VuID0gXCJiOGE5OTcyN2JmZTI3ZTA4NWMzNzEyOTIwNTZlMWZmMlwiO1xuICAgIHB1YmxpYyBsaW5rID0gXCJcIjtcblxuICAgIHByaXZhdGUgZHVyYXRpb24gPSA1MDA7XG5cbiAgICBAVmlld0NoaWxkKCdwYWdlMicpIF9wYWdlMjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdwYWdlMScpIF9wYWdlMTogRWxlbWVudFJlZjtcblxuICAgIHBhZ2UxOiBBYnNvbHV0ZUxheW91dDtcbiAgICBwYWdlMjogQWJzb2x1dGVMYXlvdXQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBhZ2UxID0gdGhpcy5fcGFnZTEubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5wYWdlMiA9IHRoaXMuX3BhZ2UyLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5wYWdlMi5sZWZ0ID0gc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhQaXhlbHM7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbmQoKSB7XG4gICAgICAgIGh0dHAucmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9vdG0ubWFyY2VsLWJyYXVuLmRlL2luZGV4LnBocFwiLFxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KHsgTWVzc2FnZTogdGhpcy50dnRleHQsIEFjY2Vzc1Rva2VuOiB0aGlzLkFjY2Vzc1Rva2VuIH0pXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcbiAgICAgICAgICAgIHRoaXMubGluayA9IHJlc3VsdC5saW5rO1xuICAgICAgICAgICAgdGhpcy5zaG93UGFnZTIoKTtcblxuICAgICAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBvY2N1cnJlZCBcIiArIGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3VibWl0KCRldmVudCkge1xuICAgICAgICBhbGVydCh0aGlzLnR2dGV4dCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNoYXJlKCkge1xuICAgICAgICBTb2NpYWxTaGFyZS5zaGFyZVVybCh0aGlzLmxpbmssIFwiT25lIFRpbWUgTWVzc2FnZVwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd1BhZ2UyKCkge1xuICAgICAgICBsZXQgZGVmaW5pdGlvbnM6IEFycmF5PGFueT4gPSBbXTtcblxuICAgICAgICBsZXQgcGFnZTEgPSB7XG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXMucGFnZTEsXG4gICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogLXNjcmVlbi5tYWluU2NyZWVuLndpZHRoUGl4ZWxzLCB5OiAwfSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uXG4gICAgICAgIH1cblxuICAgICAgICBkZWZpbml0aW9ucy5wdXNoKHBhZ2UxKTtcblxuICAgICAgICBsZXQgcGFnZTIgPSB7XG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXMucGFnZTIsXG4gICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogLXNjcmVlbi5tYWluU2NyZWVuLndpZHRoUGl4ZWxzLCB5OiAwfSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uXG4gICAgICAgIH1cblxuICAgICAgICBkZWZpbml0aW9ucy5wdXNoKHBhZ2UyKTtcblxuICAgICAgICBsZXQgc2V0ID0gbmV3IGFuaW1hdGlvbi5BbmltYXRpb24oZGVmaW5pdGlvbnMpO1xuICAgICAgICBzZXQucGxheSgpO1xuICAgIH1cbn0iXX0=