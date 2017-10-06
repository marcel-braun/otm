"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SocialShare = require("nativescript-social-share");
var nativescript_angular_1 = require("nativescript-angular");
var page_1 = require("tns-core-modules/ui/page");
nativescript_angular_1.registerElement("Gradient", function () { return require("nativescript-gradient").Gradient; });
var http = require("http");
var tsfx = require('nativescript-effects');
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
var ItemsComponent = (function () {
    function ItemsComponent(page) {
        this.page = page;
        this.message = "";
        this.password = "";
        this.accessToken = "b8a99727bfe27e085c371292056e1ff2";
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
            content: JSON.stringify({ message: this.message, password: this.password, accessToken: this.accessToken })
        }).then(function (response) {
            var result = response.content.toJSON();
            _this.link = result.link;
            _this.slidePage(_this.page1, _this.page2);
        }, function (e) {
            alert("Error occurred " + e);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLHVEQUF5RDtBQUl6RCw2REFBdUQ7QUFDdkQsaURBQThDO0FBRTlDLHNDQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxRQUFRLEVBQXpDLENBQXlDLENBQUMsQ0FBQztBQUU3RSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDM0MsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ25DLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBUXpDO0lBYUksd0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBWHZCLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2IsZ0JBQVcsR0FBRyxrQ0FBa0MsQ0FBQztRQUNsRCxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBU2IsOEJBQThCO0lBQ2xDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBRXZDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVNLDZCQUFJLEdBQVg7UUFBQSxpQkFlQztRQWRHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDVCxHQUFHLEVBQUUsdUNBQXVDO1lBQzVDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFO1lBQy9DLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM3RyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBUTtZQUNiLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdkMsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBRXhCLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFM0MsQ0FBQyxFQUFFLFVBQVUsQ0FBQztZQUNWLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSw4QkFBSyxHQUFaO1FBQ0ksV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVNLGtDQUFTLEdBQWhCLFVBQWlCLE9BQXVCLEVBQUUsT0FBdUIsRUFBRSxTQUF3QjtRQUF4QiwwQkFBQSxFQUFBLGdCQUF3QjtRQUN2RixJQUFJLFdBQVcsR0FBZSxFQUFFLENBQUM7UUFFakMsSUFBSSxLQUFVLENBQUM7UUFDZixJQUFJLEtBQVUsQ0FBQztRQUVmLEVBQUUsQ0FBQSxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFFRCxFQUFFLENBQUEsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuQixPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNsQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNwQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLCtCQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUNsRCxDQUFDO0lBekRtQjtRQUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQztrQ0FBUyxpQkFBVTtrREFBQztJQUNuQjtRQUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQztrQ0FBUyxpQkFBVTtrREFBQztJQVI5QixjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO3lDQWM0QixXQUFJO09BYnJCLGNBQWMsQ0FpRTFCO0lBQUQscUJBQUM7Q0FBQSxBQWpFRCxJQWlFQztBQWpFWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgU29jaWFsU2hhcmUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1zb2NpYWwtc2hhcmVcIjtcbmltcG9ydCB7QWJzb2x1dGVMYXlvdXR9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvYWJzb2x1dGUtbGF5b3V0XCI7XG5pbXBvcnQge3NjcmVlbn0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCAqIGFzIGFuaW1hdGlvbiBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9hbmltYXRpb25cIjtcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5cbnJlZ2lzdGVyRWxlbWVudChcIkdyYWRpZW50XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZ3JhZGllbnRcIikuR3JhZGllbnQpO1xuXG5sZXQgaHR0cCA9IHJlcXVpcmUoXCJodHRwXCIpO1xubGV0IHRzZnggPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtZWZmZWN0cycpO1xubGV0IEFFUyA9IHJlcXVpcmUoXCJjcnlwdG8tanMvYWVzXCIpO1xudmFyIFNIQTI1NiA9IHJlcXVpcmUoXCJjcnlwdG8tanMvc2hhMjU2XCIpO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyBtZXNzYWdlID0gXCJcIjtcbiAgICBwdWJsaWMgcGFzc3dvcmQgPSBcIlwiO1xuICAgIHByaXZhdGUgYWNjZXNzVG9rZW4gPSBcImI4YTk5NzI3YmZlMjdlMDg1YzM3MTI5MjA1NmUxZmYyXCI7XG4gICAgcHVibGljIGxpbmsgPSBcIlwiO1xuXG4gICAgQFZpZXdDaGlsZCgncGFnZTInKSBfcGFnZTI6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgncGFnZTEnKSBfcGFnZTE6IEVsZW1lbnRSZWY7XG5cbiAgICBwYWdlMTogQWJzb2x1dGVMYXlvdXQ7XG4gICAgcGFnZTI6IEFic29sdXRlTGF5b3V0O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlKSB7XG4gICAgICAgIC8vcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBhZ2UxID0gdGhpcy5fcGFnZTEubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5wYWdlMiA9IHRoaXMuX3BhZ2UyLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5wYWdlMi5oaWRlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbmQoKSB7XG4gICAgICAgIGh0dHAucmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9vdG0ubWFyY2VsLWJyYXVuLmRlL2luZGV4LnBocFwiLFxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogdGhpcy5tZXNzYWdlLCBwYXNzd29yZDogdGhpcy5wYXNzd29yZCwgYWNjZXNzVG9rZW46IHRoaXMuYWNjZXNzVG9rZW4gfSlcbiAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xuICAgICAgICAgICAgdGhpcy5saW5rID0gcmVzdWx0Lmxpbms7XG5cbiAgICAgICAgICAgIHRoaXMuc2xpZGVQYWdlKHRoaXMucGFnZTEsIHRoaXMucGFnZTIpO1xuXG4gICAgICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBhbGVydChcIkVycm9yIG9jY3VycmVkIFwiICsgZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaGFyZSgpIHtcbiAgICAgICAgU29jaWFsU2hhcmUuc2hhcmVVcmwodGhpcy5saW5rLCBcIk9uZSBUaW1lIE1lc3NhZ2VcIik7XG4gICAgfVxuXG4gICAgcHVibGljIHNsaWRlUGFnZShwYWdlT25lOiBBYnNvbHV0ZUxheW91dCwgcGFnZVR3bzogQWJzb2x1dGVMYXlvdXQsIGRpcmVjdGlvbjogc3RyaW5nID0gXCJpblwiKSB7XG4gICAgICAgIGxldCBkZWZpbml0aW9uczogQXJyYXk8YW55PiA9IFtdO1xuXG4gICAgICAgIGxldCBwYWdlMTogYW55O1xuICAgICAgICBsZXQgcGFnZTI6IGFueTtcblxuICAgICAgICBpZihkaXJlY3Rpb24gPT0gXCJiYWNrXCIpIHtcbiAgICAgICAgICAgIHBhZ2VPbmUuZmxvYXRJbihcInNsb3dcIiwgXCJyaWdodFwiKTtcbiAgICAgICAgICAgIHBhZ2VUd28uZmxvYXRPdXQoXCJmYXN0XCIsIFwibGVmdFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGRpcmVjdGlvbiA9PSBcImluXCIpIHtcbiAgICAgICAgICAgIHBhZ2VPbmUuZmxvYXRPdXQoXCJmYXN0XCIsIFwicmlnaHRcIik7XG4gICAgICAgICAgICBwYWdlVHdvLmZsb2F0SW4oXCJzbG93XCIsIFwibGVmdFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnb0JhY2soKSB7XG4gICAgICAgIHRoaXMuc2xpZGVQYWdlKHRoaXMucGFnZTEsIHRoaXMucGFnZTIsIFwiYmFja1wiKVxuICAgIH1cbn0iXX0=