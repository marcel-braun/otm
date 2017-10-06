"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gradient_common_1 = require("./gradient-common");
var Gradient = (function (_super) {
    __extends(Gradient, _super);
    function Gradient() {
        var _this = _super.call(this) || this;
        _this._gradientLayer = CAGradientLayer.layer();
        if (_this.ios) {
            _this.ios.layer.insertSublayerAtIndex(_this._gradientLayer, 0);
        }
        return _this;
    }
    Gradient.prototype.onLayout = function (left, top, right, bottom) {
        _super.prototype.onLayout.call(this, left, top, right, bottom);
        this._gradientLayer.frame = this.ios.layer.bounds;
    };
    Gradient.prototype.updateBorderRadius = function (radius) {
        if (radius) {
            this._gradientLayer.cornerRadius = radius;
        }
    };
    Gradient.prototype.updateColors = function (colors) {
        if (colors && colors.length >= 2 && this.ios && this._gradientLayer) {
            var colorsArray = NSMutableArray.alloc().initWithCapacity(colors.length);
            for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
                var _color = colors_1[_i];
                colorsArray.addObject(_color.ios.CGColor);
            }
            this._gradientLayer.colors = colorsArray;
        }
    };
    Gradient.prototype.updateDirection = function (direction) {
        if (direction && this.ios && this._gradientLayer) {
            switch (direction) {
                case gradient_common_1.GradientDirection.TO_BOTTOM:
                    this._gradientLayer.startPoint = CGPointMake(0.5, 0);
                    this._gradientLayer.endPoint = CGPointMake(0.5, 1);
                    break;
                case gradient_common_1.GradientDirection.TO_TOP:
                    this._gradientLayer.startPoint = CGPointMake(0.5, 1);
                    this._gradientLayer.endPoint = CGPointMake(0.5, 0);
                    break;
                case gradient_common_1.GradientDirection.TO_RIGHT:
                    this._gradientLayer.startPoint = CGPointMake(0, 0.5);
                    this._gradientLayer.endPoint = CGPointMake(1, 0.5);
                    break;
                case gradient_common_1.GradientDirection.TO_LEFT:
                    this._gradientLayer.startPoint = CGPointMake(1, 0.5);
                    this._gradientLayer.endPoint = CGPointMake(0, 0.5);
                    break;
                case gradient_common_1.GradientDirection.TO_BOTTOM_LEFT:
                    this._gradientLayer.startPoint = CGPointMake(1, 0);
                    this._gradientLayer.endPoint = CGPointMake(0, 1);
                    break;
                case gradient_common_1.GradientDirection.TO_TOP_LEFT:
                    this._gradientLayer.startPoint = CGPointMake(1, 1);
                    this._gradientLayer.endPoint = CGPointMake(0, 0);
                    break;
                case gradient_common_1.GradientDirection.TO_BOTTOM_RIGHT:
                    this._gradientLayer.startPoint = CGPointMake(0, 0);
                    this._gradientLayer.endPoint = CGPointMake(1, 1);
                    break;
                case gradient_common_1.GradientDirection.TO_TOP_RIGHT:
                    this._gradientLayer.startPoint = CGPointMake(0, 1);
                    this._gradientLayer.endPoint = CGPointMake(1, 0);
                    break;
                default:
                    this._gradientLayer.startPoint = CGPointMake(0.5, 0);
                    this._gradientLayer.endPoint = CGPointMake(0.5, 1);
                    break;
            }
        }
    };
    return Gradient;
}(gradient_common_1.Gradient));
exports.Gradient = Gradient;
//# sourceMappingURL=gradient.js.map