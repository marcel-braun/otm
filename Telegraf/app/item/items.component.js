"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SocialShare = require("nativescript-social-share");
var nativescript_angular_1 = require("nativescript-angular");
var page_1 = require("tns-core-modules/ui/page");
nativescript_angular_1.registerElement("Gradient", function () { return require("nativescript-gradient").Gradient; });
var http = require("http");
var tsfx = require('nativescript-effects');
var ItemsComponent = (function () {
    function ItemsComponent(page) {
        this.page = page;
        this.tvtext = "";
        this.AccessToken = "b8a99727bfe27e085c371292056e1ff2";
        this.link = "";
        //page.actionBarHidden = true;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.page1 = this._page1.nativeElement;
        this.page2 = this._page2.nativeElement;
        this.page2.hide();
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
            _this.slidePage(_this.page1, _this.page2);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLHVEQUF5RDtBQUl6RCw2REFBdUQ7QUFDdkQsaURBQThDO0FBRTlDLHNDQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxRQUFRLEVBQXpDLENBQXlDLENBQUMsQ0FBQztBQUU3RSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFRM0M7SUFZSSx3QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFWdkIsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNYLGdCQUFXLEdBQUcsa0NBQWtDLENBQUM7UUFDbEQsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQVNiLDhCQUE4QjtJQUNsQyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUV2QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTSw2QkFBSSxHQUFYO1FBQUEsaUJBY0M7UUFiRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsR0FBRyxFQUFFLHVDQUF1QztZQUM1QyxNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRSxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRTtZQUMvQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbkYsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVE7WUFDYixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUN4QixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTNDLENBQUMsRUFBRSxVQUFVLENBQUM7WUFDVixLQUFLLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sK0JBQU0sR0FBYixVQUFjLE1BQU07UUFDaEIsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRU0sOEJBQUssR0FBWjtRQUNJLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTSxrQ0FBUyxHQUFoQixVQUFpQixPQUF1QixFQUFFLE9BQXVCLEVBQUUsU0FBd0I7UUFBeEIsMEJBQUEsRUFBQSxnQkFBd0I7UUFDdkYsSUFBSSxXQUFXLEdBQWUsRUFBRSxDQUFDO1FBRWpDLElBQUksS0FBVSxDQUFDO1FBQ2YsSUFBSSxLQUFVLENBQUM7UUFFZixFQUFFLENBQUEsQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNyQixPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNqQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBRUQsRUFBRSxDQUFBLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDbEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEMsQ0FBQztJQUNMLENBQUM7SUFFTSwrQkFBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDbEQsQ0FBQztJQTVEbUI7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQVMsaUJBQVU7a0RBQUM7SUFDbkI7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQVMsaUJBQVU7a0RBQUM7SUFQOUIsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzt5Q0FhNEIsV0FBSTtPQVpyQixjQUFjLENBbUUxQjtJQUFELHFCQUFDO0NBQUEsQUFuRUQsSUFtRUM7QUFuRVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIFNvY2lhbFNoYXJlIGZyb20gXCJuYXRpdmVzY3JpcHQtc29jaWFsLXNoYXJlXCI7XG5pbXBvcnQge0Fic29sdXRlTGF5b3V0fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2Fic29sdXRlLWxheW91dFwiO1xuaW1wb3J0IHtzY3JlZW59IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQgKiBhcyBhbmltYXRpb24gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYW5pbWF0aW9uXCI7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuXG5yZWdpc3RlckVsZW1lbnQoXCJHcmFkaWVudFwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWdyYWRpZW50XCIpLkdyYWRpZW50KTtcblxubGV0IGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcbmxldCB0c2Z4ID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LWVmZmVjdHMnKTtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgdHZ0ZXh0ID0gXCJcIjtcbiAgICBwcml2YXRlIEFjY2Vzc1Rva2VuID0gXCJiOGE5OTcyN2JmZTI3ZTA4NWMzNzEyOTIwNTZlMWZmMlwiO1xuICAgIHB1YmxpYyBsaW5rID0gXCJcIjtcblxuICAgIEBWaWV3Q2hpbGQoJ3BhZ2UyJykgX3BhZ2UyOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ3BhZ2UxJykgX3BhZ2UxOiBFbGVtZW50UmVmO1xuXG4gICAgcGFnZTE6IEFic29sdXRlTGF5b3V0O1xuICAgIHBhZ2UyOiBBYnNvbHV0ZUxheW91dDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkge1xuICAgICAgICAvL3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wYWdlMSA9IHRoaXMuX3BhZ2UxLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMucGFnZTIgPSB0aGlzLl9wYWdlMi5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAgIHRoaXMucGFnZTIuaGlkZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZW5kKCkge1xuICAgICAgICBodHRwLnJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vb3RtLm1hcmNlbC1icmF1bi5kZS9pbmRleC5waHBcIixcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeSh7IE1lc3NhZ2U6IHRoaXMudHZ0ZXh0LCBBY2Nlc3NUb2tlbjogdGhpcy5BY2Nlc3NUb2tlbiB9KVxuICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk7XG4gICAgICAgICAgICB0aGlzLmxpbmsgPSByZXN1bHQubGluaztcbiAgICAgICAgICAgIHRoaXMuc2xpZGVQYWdlKHRoaXMucGFnZTEsIHRoaXMucGFnZTIpO1xuXG4gICAgICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBhbGVydChcIkVycm9yIG9jY3VycmVkIFwiICsgZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdWJtaXQoJGV2ZW50KSB7XG4gICAgICAgIGFsZXJ0KHRoaXMudHZ0ZXh0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hhcmUoKSB7XG4gICAgICAgIFNvY2lhbFNoYXJlLnNoYXJlVXJsKHRoaXMubGluaywgXCJPbmUgVGltZSBNZXNzYWdlXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzbGlkZVBhZ2UocGFnZU9uZTogQWJzb2x1dGVMYXlvdXQsIHBhZ2VUd286IEFic29sdXRlTGF5b3V0LCBkaXJlY3Rpb246IHN0cmluZyA9IFwiaW5cIikge1xuICAgICAgICBsZXQgZGVmaW5pdGlvbnM6IEFycmF5PGFueT4gPSBbXTtcblxuICAgICAgICBsZXQgcGFnZTE6IGFueTtcbiAgICAgICAgbGV0IHBhZ2UyOiBhbnk7XG5cbiAgICAgICAgaWYoZGlyZWN0aW9uID09IFwiYmFja1wiKSB7XG4gICAgICAgICAgICBwYWdlT25lLmZsb2F0SW4oXCJzbG93XCIsIFwicmlnaHRcIik7XG4gICAgICAgICAgICBwYWdlVHdvLmZsb2F0T3V0KFwiZmFzdFwiLCBcImxlZnRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZihkaXJlY3Rpb24gPT0gXCJpblwiKSB7XG4gICAgICAgICAgICBwYWdlT25lLmZsb2F0T3V0KFwiZmFzdFwiLCBcInJpZ2h0XCIpO1xuICAgICAgICAgICAgcGFnZVR3by5mbG9hdEluKFwic2xvd1wiLCBcImxlZnRcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ29CYWNrKCkge1xuICAgICAgICB0aGlzLnNsaWRlUGFnZSh0aGlzLnBhZ2UxLCB0aGlzLnBhZ2UyLCBcImJhY2tcIilcbiAgICB9XG59Il19