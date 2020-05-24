/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
var ShareButtonBase = /** @class */ (function () {
    function ShareButtonBase(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this._self = this;
        /**
         * If share button supports share count
         */
        this.supportShareCount = false;
    }
    Object.defineProperty(ShareButtonBase.prototype, "text", {
        /** Share button label */
        get: /**
         * Share button label
         * @return {?}
         */
        function () {
            return this._props.text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtonBase.prototype, "ariaLabel", {
        /** Share button aria-label attribute */
        get: /**
         * Share button aria-label attribute
         * @return {?}
         */
        function () {
            return this._props.ariaLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtonBase.prototype, "color", {
        /** Share button color */
        get: /**
         * Share button color
         * @return {?}
         */
        function () {
            return this._props.color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtonBase.prototype, "icon", {
        /** Share button icon (FontAwesome) */
        get: /**
         * Share button icon (FontAwesome)
         * @return {?}
         */
        function () {
            return this._props.icon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtonBase.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtonBase.prototype, "android", {
        get: /**
         * @return {?}
         */
        function () {
            return this.desktop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtonBase.prototype, "ios", {
        get: /**
         * @return {?}
         */
        function () {
            return this.desktop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtonBase.prototype, "sharerUrl", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._platform.IOS)
                return this.ios;
            if (this._platform.ANDROID)
                return this.android;
            return this.desktop;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens share window
     */
    /**
     * Opens share window
     * @param {?} metaTags
     * @return {?}
     */
    ShareButtonBase.prototype.click = /**
     * Opens share window
     * @param {?} metaTags
     * @return {?}
     */
    function (metaTags) {
        return this._open(this._serializeMetaTags(metaTags));
    };
    /** Get share count of a URL */
    /**
     * Get share count of a URL
     * @param {?} url
     * @return {?}
     */
    ShareButtonBase.prototype.shareCount = /**
     * Get share count of a URL
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return undefined;
    };
    /**
     * @protected
     * @param {?} metaTags
     * @return {?}
     */
    ShareButtonBase.prototype._serializeMetaTags = /**
     * @protected
     * @param {?} metaTags
     * @return {?}
     */
    function (metaTags) {
        return Object.entries(this._supportedMetaTags)
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), key = _b[0], value = _b[1];
            return metaTags[key] ? value + "=" + encodeURIComponent(metaTags[key]) : '';
        }))
            .join('&');
    };
    /**
     * @protected
     * @param {?} serializedMetaTags
     * @return {?}
     */
    ShareButtonBase.prototype._open = /**
     * @protected
     * @param {?} serializedMetaTags
     * @return {?}
     */
    function (serializedMetaTags) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            // Avoid SSR error
            if (_this.sharerUrl && _this._platform.isBrowser) {
                /** @type {?} */
                var finalUrl = _this.sharerUrl + serializedMetaTags;
                // Debug mode, log sharer link
                _this._logger(finalUrl);
                /** @type {?} */
                var popUp_1 = _this._document.defaultView.open(finalUrl, 'newwindow', _this._windowSize);
                // Resolve when share dialog is closed
                if (popUp_1) {
                    /** @type {?} */
                    var pollTimer_1 = _this._document.defaultView.setInterval((/**
                     * @return {?}
                     */
                    function () {
                        if (popUp_1.closed) {
                            _this._document.defaultView.clearInterval(pollTimer_1);
                            resolve();
                        }
                    }), 200);
                }
            }
            else {
                console.warn(_this.text + " button is not compatible on this Platform");
            }
        }));
    };
    return ShareButtonBase;
}());
export { ShareButtonBase };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ShareButtonBase.prototype._self;
    /**
     * Share button supported meta tags
     * @type {?}
     * @protected
     */
    ShareButtonBase.prototype._supportedMetaTags;
    /**
     * If share button supports share count
     * @type {?}
     */
    ShareButtonBase.prototype.supportShareCount;
    /**
     * @type {?}
     * @protected
     */
    ShareButtonBase.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    ShareButtonBase.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    ShareButtonBase.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    ShareButtonBase.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    ShareButtonBase.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    ShareButtonBase.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    ShareButtonBase.prototype._disableButtonClick;
    /**
     * @type {?}
     * @protected
     */
    ShareButtonBase.prototype._logger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9idXR0b25zL2Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQTtJQWdERSx5QkFBc0IsTUFBb0IsRUFDcEIsSUFBa0IsRUFDbEIsS0FBaUIsRUFDakIsU0FBbUIsRUFDbkIsU0FBbUIsRUFDbkIsV0FBbUIsRUFFbkIsbUJBQStDLEVBRS9DLE9BQStCO1FBVC9CLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBYztRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUVuQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQTRCO1FBRS9DLFlBQU8sR0FBUCxPQUFPLENBQXdCO1FBdkRsQyxVQUFLLEdBQW9CLElBQUksQ0FBQzs7OztRQTRDakQsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO0lBWTFCLENBQUM7SUFsREQsc0JBQUksaUNBQUk7UUFEUix5QkFBeUI7Ozs7O1FBQ3pCO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUdELHNCQUFJLHNDQUFTO1FBRGIsd0NBQXdDOzs7OztRQUN4QztZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFHRCxzQkFBSSxrQ0FBSztRQURULHlCQUF5Qjs7Ozs7UUFDekI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBR0Qsc0JBQUksaUNBQUk7UUFEUixzQ0FBc0M7Ozs7O1FBQ3RDO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUMx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QUE0Qjs7Ozs7SUFDNUIsZ0NBQTJCOzs7OztJQUMzQixvQ0FBNkI7Ozs7O0lBQzdCLG9DQUE2Qjs7Ozs7SUFDN0Isc0NBQTZCOzs7OztJQUU3Qiw4Q0FBeUQ7Ozs7O0lBRXpELGtDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJU2hhcmVCdXR0b24sIFNoYXJlTWV0YVRhZ3MgfSBmcm9tICcuLi9zaGFyZS5tb2RlbHMnO1xuXG5leHBvcnQgY2xhc3MgU2hhcmVCdXR0b25CYXNlIHtcblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgX3NlbGY6IFNoYXJlQnV0dG9uQmFzZSA9IHRoaXM7XG5cbiAgLyoqIFNoYXJlIGJ1dHRvbiBzdXBwb3J0ZWQgbWV0YSB0YWdzICovXG4gIHByb3RlY3RlZCByZWFkb25seSBfc3VwcG9ydGVkTWV0YVRhZ3M6IFNoYXJlTWV0YVRhZ3M7XG5cbiAgLyoqIFNoYXJlIGJ1dHRvbiBsYWJlbCAqL1xuICBnZXQgdGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wcm9wcy50ZXh0O1xuICB9XG5cbiAgLyoqIFNoYXJlIGJ1dHRvbiBhcmlhLWxhYmVsIGF0dHJpYnV0ZSAqL1xuICBnZXQgYXJpYUxhYmVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3BzLmFyaWFMYWJlbDtcbiAgfVxuXG4gIC8qKiBTaGFyZSBidXR0b24gY29sb3IgKi9cbiAgZ2V0IGNvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3BzLmNvbG9yO1xuICB9XG5cbiAgLyoqIFNoYXJlIGJ1dHRvbiBpY29uIChGb250QXdlc29tZSkgKi9cbiAgZ2V0IGljb24oKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9wcm9wcy5pY29uO1xuICB9XG5cbiAgZ2V0IGRlc2t0b3AoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IGFuZHJvaWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5kZXNrdG9wO1xuICB9XG5cbiAgZ2V0IGlvcygpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLmRlc2t0b3A7XG4gIH1cblxuICBnZXQgc2hhcmVyVXJsKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuX3BsYXRmb3JtLklPUykgcmV0dXJuIHRoaXMuaW9zO1xuICAgIGlmICh0aGlzLl9wbGF0Zm9ybS5BTkRST0lEKSByZXR1cm4gdGhpcy5hbmRyb2lkO1xuICAgIHJldHVybiB0aGlzLmRlc2t0b3A7XG4gIH1cblxuICAvKiogSWYgc2hhcmUgYnV0dG9uIHN1cHBvcnRzIHNoYXJlIGNvdW50ICovXG4gIHN1cHBvcnRTaGFyZUNvdW50ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9wcm9wczogSVNoYXJlQnV0dG9uLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3VybDogKCkgPT4gc3RyaW5nLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2h0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2RvY3VtZW50OiBEb2N1bWVudCxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF93aW5kb3dTaXplOiBzdHJpbmcsXG4gICAgICAgICAgICAgIC8vIGRpc2FibGUgYnV0dG9uIGNsaWNrICh1c2VkIGluIGNvcHkgYnV0dG9uKVxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2Rpc2FibGVCdXR0b25DbGljazogKGRpc2FibGU6IGJvb2xlYW4pID0+IHZvaWQsXG4gICAgICAgICAgICAgIC8vIExvZ2dlciBmdW5jdGlvbiAoZGVidWcgbW9kZSlcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9sb2dnZXI6ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBzaGFyZSB3aW5kb3dcbiAgICovXG4gIGNsaWNrKG1ldGFUYWdzOiBTaGFyZU1ldGFUYWdzKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fb3Blbih0aGlzLl9zZXJpYWxpemVNZXRhVGFncyhtZXRhVGFncykpO1xuICB9XG5cbiAgLyoqIEdldCBzaGFyZSBjb3VudCBvZiBhIFVSTCAqL1xuICBzaGFyZUNvdW50KHVybDogc3RyaW5nKTogT2JzZXJ2YWJsZTxudW1iZXI+IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9zZXJpYWxpemVNZXRhVGFncyhtZXRhVGFnczogU2hhcmVNZXRhVGFncyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMuX3N1cHBvcnRlZE1ldGFUYWdzKVxuICAgICAgLm1hcCgoW2tleSwgdmFsdWVdKSA9PlxuICAgICAgICBtZXRhVGFnc1trZXldID8gYCR7dmFsdWV9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KG1ldGFUYWdzW2tleV0pfWAgOiAnJ1xuICAgICAgKVxuICAgICAgLmpvaW4oJyYnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfb3BlbihzZXJpYWxpemVkTWV0YVRhZ3M6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAvLyBBdm9pZCBTU1IgZXJyb3JcbiAgICAgIGlmICh0aGlzLnNoYXJlclVybCAmJiB0aGlzLl9wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcblxuICAgICAgICBjb25zdCBmaW5hbFVybCA9IHRoaXMuc2hhcmVyVXJsICsgc2VyaWFsaXplZE1ldGFUYWdzO1xuXG4gICAgICAgIC8vIERlYnVnIG1vZGUsIGxvZyBzaGFyZXIgbGlua1xuICAgICAgICB0aGlzLl9sb2dnZXIoZmluYWxVcmwpO1xuXG4gICAgICAgIGNvbnN0IHBvcFVwID0gdGhpcy5fZG9jdW1lbnQuZGVmYXVsdFZpZXcub3BlbihcbiAgICAgICAgICBmaW5hbFVybCxcbiAgICAgICAgICAnbmV3d2luZG93JyxcbiAgICAgICAgICB0aGlzLl93aW5kb3dTaXplXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gUmVzb2x2ZSB3aGVuIHNoYXJlIGRpYWxvZyBpcyBjbG9zZWRcbiAgICAgICAgaWYgKHBvcFVwKSB7XG4gICAgICAgICAgY29uc3QgcG9sbFRpbWVyID0gdGhpcy5fZG9jdW1lbnQuZGVmYXVsdFZpZXcuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHBvcFVwLmNsb3NlZCkge1xuICAgICAgICAgICAgICB0aGlzLl9kb2N1bWVudC5kZWZhdWx0Vmlldy5jbGVhckludGVydmFsKHBvbGxUaW1lcik7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oYCR7dGhpcy50ZXh0fSBidXR0b24gaXMgbm90IGNvbXBhdGlibGUgb24gdGhpcyBQbGF0Zm9ybWApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=