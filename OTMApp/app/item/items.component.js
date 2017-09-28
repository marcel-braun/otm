"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http = require("http");
var ItemsComponent = (function () {
    function ItemsComponent() {
        this.tvtext = "";
        this.AccessToken = "b8a99727bfe27e085c371292056e1ff2";
    }
    ItemsComponent.prototype.ngOnInit = function () {
    };
    ItemsComponent.prototype.send = function () {
        var message = this.tvtext;
        http.request({
            url: "https://otm.marcel-braun.de/index.php",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ Message: message, AccessToken: this.AccessToken })
        }).then(function (response) {
            var result = response.content.toJSON();
            alert(result.Link);
        }, function (e) {
            alert("Error occurred " + e);
        });
    };
    ItemsComponent.prototype.submit = function ($event) {
        alert(this.tvtext);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQVEzQjtJQUtJO1FBSE8sV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNYLGdCQUFXLEdBQUcsa0NBQWtDLENBQUM7SUFFekMsQ0FBQztJQUVqQixpQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVNLDZCQUFJLEdBQVg7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRTFCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDVCxHQUFHLEVBQUUsdUNBQXVDO1lBQzVDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFO1lBQy9DLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQy9FLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxRQUFRO1lBQ3RCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdkMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixDQUFDLEVBQUUsVUFBVSxDQUFDO1lBQ1YsS0FBSyxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLCtCQUFNLEdBQWIsVUFBYyxNQUFNO1FBQ2hCLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQTdCUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDOztPQUNXLGNBQWMsQ0E4QjFCO0lBQUQscUJBQUM7Q0FBQSxBQTlCRCxJQThCQztBQTlCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxubGV0IGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgdHZ0ZXh0ID0gXCJcIjtcbiAgICBwcml2YXRlIEFjY2Vzc1Rva2VuID0gXCJiOGE5OTcyN2JmZTI3ZTA4NWMzNzEyOTIwNTZlMWZmMlwiO1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgfVxuXG4gICAgcHVibGljIHNlbmQoKSB7XG4gICAgICAgIGxldCBtZXNzYWdlID0gdGhpcy50dnRleHQ7XG5cbiAgICAgICAgaHR0cC5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL290bS5tYXJjZWwtYnJhdW4uZGUvaW5kZXgucGhwXCIsXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkoeyBNZXNzYWdlOiBtZXNzYWdlLCBBY2Nlc3NUb2tlbjogdGhpcy5BY2Nlc3NUb2tlbiB9KVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk7XG4gICAgICAgICAgICBhbGVydChyZXN1bHQuTGluayk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBhbGVydChcIkVycm9yIG9jY3VycmVkIFwiICsgZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdWJtaXQoJGV2ZW50KSB7XG4gICAgICAgIGFsZXJ0KHRoaXMudHZ0ZXh0KTtcbiAgICB9XG59Il19