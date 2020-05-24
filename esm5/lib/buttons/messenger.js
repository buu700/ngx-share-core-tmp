/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ShareButtonBase } from './base';
var MessengerButton = /** @class */ (function (_super) {
    tslib_1.__extends(MessengerButton, _super);
    function MessengerButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        var _this = _super.call(this, _props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) || this;
        _this._props = _props;
        _this._url = _url;
        _this._http = _http;
        _this._platform = _platform;
        _this._document = _document;
        _this._windowSize = _windowSize;
        _this._disableButtonClick = _disableButtonClick;
        _this._logger = _logger;
        _this._supportedMetaTags = {
            url: 'link'
        };
        return _this;
    }
    Object.defineProperty(MessengerButton.prototype, "android", {
        get: /**
         * @return {?}
         */
        function () {
            return 'fb-messenger://share/?';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MessengerButton.prototype, "ios", {
        get: /**
         * @return {?}
         */
        function () {
            return 'fb-messenger://share/?';
        },
        enumerable: true,
        configurable: true
    });
    return MessengerButton;
}(ShareButtonBase));
export { MessengerButton };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    MessengerButton.prototype._supportedMetaTags;
    /**
     * @type {?}
     * @protected
     */
    MessengerButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    MessengerButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    MessengerButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    MessengerButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    MessengerButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    MessengerButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    MessengerButton.prototype._disableButtonClick;
    /**
     * @type {?}
     * @protected
     */
    MessengerButton.prototype._logger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2VuZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1zaGFyZS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2J1dHRvbnMvbWVzc2VuZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUd6QztJQUFxQywyQ0FBZTtJQWNsRCx5QkFBc0IsTUFBb0IsRUFDcEIsSUFBa0IsRUFDbEIsS0FBaUIsRUFDakIsU0FBbUIsRUFDbkIsU0FBbUIsRUFDbkIsV0FBbUIsRUFDbkIsbUJBQStDLEVBQy9DLE9BQStCO1FBUHJELFlBUUUsa0JBQU0sTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLFNBQzVGO1FBVHFCLFlBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsVUFBSSxHQUFKLElBQUksQ0FBYztRQUNsQixXQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGVBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsZUFBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixpQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQix5QkFBbUIsR0FBbkIsbUJBQW1CLENBQTRCO1FBQy9DLGFBQU8sR0FBUCxPQUFPLENBQXdCO1FBbkIzQyx3QkFBa0IsR0FBa0I7WUFDNUMsR0FBRyxFQUFFLE1BQU07U0FDWixDQUFDOztJQW1CRixDQUFDO0lBakJELHNCQUFJLG9DQUFPOzs7O1FBQVg7WUFDRSxPQUFPLHdCQUF3QixDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksZ0NBQUc7Ozs7UUFBUDtZQUNFLE9BQU8sd0JBQXdCLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFZSCxzQkFBQztBQUFELENBQUMsQUF4QkQsQ0FBcUMsZUFBZSxHQXdCbkQ7Ozs7Ozs7SUF0QkMsNkNBRUU7Ozs7O0lBVVUsaUNBQThCOzs7OztJQUM5QiwrQkFBNEI7Ozs7O0lBQzVCLGdDQUEyQjs7Ozs7SUFDM0Isb0NBQTZCOzs7OztJQUM3QixvQ0FBNkI7Ozs7O0lBQzdCLHNDQUE2Qjs7Ozs7SUFDN0IsOENBQXlEOzs7OztJQUN6RCxrQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgU2hhcmVCdXR0b25CYXNlIH0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7IElTaGFyZUJ1dHRvbiwgU2hhcmVNZXRhVGFncyB9IGZyb20gJy4uL3NoYXJlLm1vZGVscyc7XG5cbmV4cG9ydCBjbGFzcyBNZXNzZW5nZXJCdXR0b24gZXh0ZW5kcyBTaGFyZUJ1dHRvbkJhc2Uge1xuXG4gIHByb3RlY3RlZCBfc3VwcG9ydGVkTWV0YVRhZ3M6IFNoYXJlTWV0YVRhZ3MgPSB7XG4gICAgdXJsOiAnbGluaydcbiAgfTtcblxuICBnZXQgYW5kcm9pZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnZmItbWVzc2VuZ2VyOi8vc2hhcmUvPyc7XG4gIH1cblxuICBnZXQgaW9zKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdmYi1tZXNzZW5nZXI6Ly9zaGFyZS8/JztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfcHJvcHM6IElTaGFyZUJ1dHRvbixcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF91cmw6ICgpID0+IHN0cmluZyxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9odHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3BsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9kb2N1bWVudDogRG9jdW1lbnQsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfd2luZG93U2l6ZTogc3RyaW5nLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2Rpc2FibGVCdXR0b25DbGljazogKGRpc2FibGU6IGJvb2xlYW4pID0+IHZvaWQsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfbG9nZ2VyOiAodGV4dDogc3RyaW5nKSA9PiB2b2lkKSB7XG4gICAgc3VwZXIoX3Byb3BzLCBfdXJsLCBfaHR0cCwgX3BsYXRmb3JtLCBfZG9jdW1lbnQsIF93aW5kb3dTaXplLCBfZGlzYWJsZUJ1dHRvbkNsaWNrLCBfbG9nZ2VyKTtcbiAgfVxufVxuIl19