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
var MD5 = require("crypto-js/md5");
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
        var base64 = MD5("xo7socx");
        var iv = "123dfbkkja2458h7";
        var encrypted_message = AES.encrypt("Das ist ein Test", base64.toString(), { iv: iv });
        alert(encrypted_message.toString());
        /*
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
        */
    };
    ItemsComponent.prototype.share = function () {
        SocialShare.shareUrl(this.link, "Secure Message");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLHVEQUF5RDtBQUl6RCw2REFBdUQ7QUFDdkQsaURBQThDO0FBRzlDLHNDQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxRQUFRLEVBQXpDLENBQXlDLENBQUMsQ0FBQztBQUU3RSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDM0MsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ25DLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQVFuQztJQWFJLHdCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQVh2QixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNiLGdCQUFXLEdBQUcsa0NBQWtDLENBQUM7UUFDbEQsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQVNiLDhCQUE4QjtJQUNsQyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUV2QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTSw2QkFBSSxHQUFYO1FBQ0ksSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLElBQUksRUFBRSxHQUFHLGtCQUFrQixDQUFDO1FBRTVCLElBQUksaUJBQWlCLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztRQUVyRixLQUFLLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUVwQzs7Ozs7Ozs7Ozs7Ozs7O1VBZUU7SUFDTixDQUFDO0lBRU0sOEJBQUssR0FBWjtRQUNJLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFTSxrQ0FBUyxHQUFoQixVQUFpQixPQUF1QixFQUFFLE9BQXVCLEVBQUUsU0FBd0I7UUFBeEIsMEJBQUEsRUFBQSxnQkFBd0I7UUFDdkYsSUFBSSxXQUFXLEdBQWUsRUFBRSxDQUFDO1FBRWpDLElBQUksS0FBVSxDQUFDO1FBQ2YsSUFBSSxLQUFVLENBQUM7UUFFZixFQUFFLENBQUEsQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNyQixPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNqQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBRUQsRUFBRSxDQUFBLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDbEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEMsQ0FBQztJQUNMLENBQUM7SUFFTSwrQkFBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDbEQsQ0FBQztJQWxFbUI7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQVMsaUJBQVU7a0RBQUM7SUFDbkI7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQVMsaUJBQVU7a0RBQUM7SUFSOUIsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzt5Q0FjNEIsV0FBSTtPQWJyQixjQUFjLENBMEUxQjtJQUFELHFCQUFDO0NBQUEsQUExRUQsSUEwRUM7QUExRVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIFNvY2lhbFNoYXJlIGZyb20gXCJuYXRpdmVzY3JpcHQtc29jaWFsLXNoYXJlXCI7XG5pbXBvcnQge0Fic29sdXRlTGF5b3V0fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2Fic29sdXRlLWxheW91dFwiO1xuaW1wb3J0IHtzY3JlZW59IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQgKiBhcyBhbmltYXRpb24gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYW5pbWF0aW9uXCI7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHt0b0Jhc2U2NFN0cmluZ30gZnJvbSBcIkBhbmd1bGFyL2NvbXBpbGVyL3NyYy9vdXRwdXQvc291cmNlX21hcFwiO1xuXG5yZWdpc3RlckVsZW1lbnQoXCJHcmFkaWVudFwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWdyYWRpZW50XCIpLkdyYWRpZW50KTtcblxubGV0IGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcbmxldCB0c2Z4ID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LWVmZmVjdHMnKTtcbmxldCBBRVMgPSByZXF1aXJlKFwiY3J5cHRvLWpzL2Flc1wiKTtcbmxldCBNRDUgPSByZXF1aXJlKFwiY3J5cHRvLWpzL21kNVwiKTtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgbWVzc2FnZSA9IFwiXCI7XG4gICAgcHVibGljIHBhc3N3b3JkID0gXCJcIjtcbiAgICBwcml2YXRlIGFjY2Vzc1Rva2VuID0gXCJiOGE5OTcyN2JmZTI3ZTA4NWMzNzEyOTIwNTZlMWZmMlwiO1xuICAgIHB1YmxpYyBsaW5rID0gXCJcIjtcblxuICAgIEBWaWV3Q2hpbGQoJ3BhZ2UyJykgX3BhZ2UyOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ3BhZ2UxJykgX3BhZ2UxOiBFbGVtZW50UmVmO1xuXG4gICAgcGFnZTE6IEFic29sdXRlTGF5b3V0O1xuICAgIHBhZ2UyOiBBYnNvbHV0ZUxheW91dDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkge1xuICAgICAgICAvL3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wYWdlMSA9IHRoaXMuX3BhZ2UxLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMucGFnZTIgPSB0aGlzLl9wYWdlMi5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAgIHRoaXMucGFnZTIuaGlkZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZW5kKCkge1xuICAgICAgICBsZXQgYmFzZTY0ID0gTUQ1KFwieG83c29jeFwiKTtcbiAgICAgICAgbGV0IGl2ID0gXCIxMjNkZmJra2phMjQ1OGg3XCI7XG5cbiAgICAgICAgbGV0IGVuY3J5cHRlZF9tZXNzYWdlID0gQUVTLmVuY3J5cHQoXCJEYXMgaXN0IGVpbiBUZXN0XCIsIGJhc2U2NC50b1N0cmluZygpLCB7aXY6IGl2fSk7XG5cbiAgICAgICAgYWxlcnQoZW5jcnlwdGVkX21lc3NhZ2UudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgLypcbiAgICAgICAgaHR0cC5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL290bS5tYXJjZWwtYnJhdW4uZGUvaW5kZXgucGhwXCIsXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLCBhY2Nlc3NUb2tlbjogdGhpcy5hY2Nlc3NUb2tlbiB9KVxuICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk7XG4gICAgICAgICAgICB0aGlzLmxpbmsgPSByZXN1bHQubGluaztcblxuICAgICAgICAgICAgdGhpcy5zbGlkZVBhZ2UodGhpcy5wYWdlMSwgdGhpcy5wYWdlMik7XG5cbiAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiRXJyb3Igb2NjdXJyZWQgXCIgKyBlKTtcbiAgICAgICAgfSk7XG4gICAgICAgICovXG4gICAgfVxuXG4gICAgcHVibGljIHNoYXJlKCkge1xuICAgICAgICBTb2NpYWxTaGFyZS5zaGFyZVVybCh0aGlzLmxpbmssIFwiU2VjdXJlIE1lc3NhZ2VcIik7XG4gICAgfVxuXG4gICAgcHVibGljIHNsaWRlUGFnZShwYWdlT25lOiBBYnNvbHV0ZUxheW91dCwgcGFnZVR3bzogQWJzb2x1dGVMYXlvdXQsIGRpcmVjdGlvbjogc3RyaW5nID0gXCJpblwiKSB7XG4gICAgICAgIGxldCBkZWZpbml0aW9uczogQXJyYXk8YW55PiA9IFtdO1xuXG4gICAgICAgIGxldCBwYWdlMTogYW55O1xuICAgICAgICBsZXQgcGFnZTI6IGFueTtcblxuICAgICAgICBpZihkaXJlY3Rpb24gPT0gXCJiYWNrXCIpIHtcbiAgICAgICAgICAgIHBhZ2VPbmUuZmxvYXRJbihcInNsb3dcIiwgXCJyaWdodFwiKTtcbiAgICAgICAgICAgIHBhZ2VUd28uZmxvYXRPdXQoXCJmYXN0XCIsIFwibGVmdFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGRpcmVjdGlvbiA9PSBcImluXCIpIHtcbiAgICAgICAgICAgIHBhZ2VPbmUuZmxvYXRPdXQoXCJmYXN0XCIsIFwicmlnaHRcIik7XG4gICAgICAgICAgICBwYWdlVHdvLmZsb2F0SW4oXCJzbG93XCIsIFwibGVmdFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnb0JhY2soKSB7XG4gICAgICAgIHRoaXMuc2xpZGVQYWdlKHRoaXMucGFnZTEsIHRoaXMucGFnZTIsIFwiYmFja1wiKVxuICAgIH1cbn0iXX0=