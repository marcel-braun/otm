"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platformModule = require("tns-core-modules/platform");
var http = require("http");
var Piwik = (function () {
    function Piwik(url) {
        if (url === void 0) { url = "https://piwik.marcel-braun.de"; }
        this._url = url;
    }
    Piwik.prototype.trackPage = function (page) {
        page = encodeURIComponent("https://app/" + page);
        var resolution = platformModule.screen.mainScreen.widthPixels + "x" + platformModule.screen.mainScreen.heightPixels;
        var params = "idsite=2&";
        params += "rec=1&";
        params += "res=" + resolution + "&";
        params += "url=" + page;
        http.getString(this._url + "/piwik.php?" + params).then(function (response) {
            // code ...
        }, function (error) {
            // code ...
        });
    };
    return Piwik;
}());
exports.Piwik = Piwik;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl3aWsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwaXdpay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBEQUE0RDtBQUU1RCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFM0I7SUFHSSxlQUFZLEdBQTZDO1FBQTdDLG9CQUFBLEVBQUEscUNBQTZDO1FBQ3JELElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ3BCLENBQUM7SUFFRCx5QkFBUyxHQUFULFVBQVUsSUFBWTtRQUNsQixJQUFJLEdBQUcsa0JBQWtCLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2pELElBQUksVUFBVSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxHQUFHLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBRXBILElBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQztRQUN6QixNQUFNLElBQUksUUFBUSxDQUFDO1FBQ25CLE1BQU0sSUFBSSxNQUFNLEdBQUcsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUNwQyxNQUFNLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztRQUV4QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDbkQsVUFBQyxRQUFRO1lBQ0wsV0FBVztRQUNmLENBQUMsRUFDRCxVQUFDLEtBQUs7WUFDRixXQUFXO1FBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0wsWUFBQztBQUFELENBQUMsQUF4QkQsSUF3QkM7QUF4Qlksc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBwbGF0Zm9ybU1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuXG5sZXQgaHR0cCA9IHJlcXVpcmUoXCJodHRwXCIpO1xuXG5leHBvcnQgY2xhc3MgUGl3aWsge1xuICAgIHByaXZhdGUgX3VybDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IodXJsOiBzdHJpbmcgPSBcImh0dHBzOi8vcGl3aWsubWFyY2VsLWJyYXVuLmRlXCIpIHtcbiAgICAgICAgdGhpcy5fdXJsID0gdXJsO1xuICAgIH1cblxuICAgIHRyYWNrUGFnZShwYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgcGFnZSA9IGVuY29kZVVSSUNvbXBvbmVudChcImh0dHBzOi8vYXBwL1wiICsgcGFnZSk7XG4gICAgICAgIGxldCByZXNvbHV0aW9uID0gcGxhdGZvcm1Nb2R1bGUuc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhQaXhlbHMgKyBcInhcIiArIHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLmhlaWdodFBpeGVscztcblxuICAgICAgICBsZXQgcGFyYW1zID0gXCJpZHNpdGU9MiZcIjtcbiAgICAgICAgcGFyYW1zICs9IFwicmVjPTEmXCI7XG4gICAgICAgIHBhcmFtcyArPSBcInJlcz1cIiArIHJlc29sdXRpb24gKyBcIiZcIjtcbiAgICAgICAgcGFyYW1zICs9IFwidXJsPVwiICsgcGFnZTtcblxuICAgICAgICBodHRwLmdldFN0cmluZyh0aGlzLl91cmwgKyBcIi9waXdpay5waHA/XCIgKyBwYXJhbXMpLnRoZW4oXG4gICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb2RlIC4uLlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvZGUgLi4uXG4gICAgICAgICAgICB9KTtcbiAgICB9XG59Il19