/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
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
    /**
     * Share button label
     * @return {?}
     */
    get text() {
        return this._props.text;
    }
    /**
     * Share button aria-label attribute
     * @return {?}
     */
    get ariaLabel() {
        return this._props.ariaLabel;
    }
    /**
     * Share button color
     * @return {?}
     */
    get color() {
        return this._props.color;
    }
    /**
     * Share button icon (FontAwesome)
     * @return {?}
     */
    get icon() {
        return this._props.icon;
    }
    /**
     * @return {?}
     */
    get desktop() {
        return undefined;
    }
    /**
     * @return {?}
     */
    get android() {
        return this.desktop;
    }
    /**
     * @return {?}
     */
    get ios() {
        return this.desktop;
    }
    /**
     * @return {?}
     */
    get sharerUrl() {
        if (this._platform.IOS)
            return this.ios;
        if (this._platform.ANDROID)
            return this.android;
        return this.desktop;
    }
    /**
     * Opens share window
     * @param {?} metaTags
     * @return {?}
     */
    click(metaTags) {
        return this._open(this._serializeMetaTags(metaTags));
    }
    /**
     * Get share count of a URL
     * @param {?} url
     * @return {?}
     */
    shareCount(url) {
        return undefined;
    }
    /**
     * @protected
     * @param {?} metaTags
     * @return {?}
     */
    _serializeMetaTags(metaTags) {
        return Object.entries(this._supportedMetaTags)
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        ([key, value]) => metaTags[key] ? `${value}=${encodeURIComponent(metaTags[key])}` : ''))
            .join('&');
    }
    /**
     * @protected
     * @param {?} serializedMetaTags
     * @return {?}
     */
    _open(serializedMetaTags) {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => {
            // Avoid SSR error
            if (this.sharerUrl && this._platform.isBrowser) {
                /** @type {?} */
                const finalUrl = this.sharerUrl + serializedMetaTags;
                // Debug mode, log sharer link
                this._logger(finalUrl);
                /** @type {?} */
                const popUp = this._document.defaultView.open(finalUrl, 'newwindow', this._windowSize);
                // Resolve when share dialog is closed
                if (popUp) {
                    /** @type {?} */
                    const pollTimer = this._document.defaultView.setInterval((/**
                     * @return {?}
                     */
                    () => {
                        if (popUp.closed) {
                            this._document.defaultView.clearInterval(pollTimer);
                            resolve();
                        }
                    }), 200);
                }
            }
            else {
                console.warn(`${this.text} button is not compatible on this Platform`);
            }
        }));
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9idXR0b25zL2Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUtBLE1BQU0sT0FBTyxlQUFlOzs7Ozs7Ozs7OztJQWdEMUIsWUFBc0IsTUFBb0IsRUFDcEIsSUFBa0IsRUFDbEIsS0FBaUIsRUFDakIsU0FBbUIsRUFDbkIsU0FBbUIsRUFDbkIsV0FBbUIsRUFFbkIsbUJBQStDLEVBRS9DLE9BQStCO1FBVC9CLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBYztRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUVuQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQTRCO1FBRS9DLFlBQU8sR0FBUCxPQUFPLENBQXdCO1FBdkRsQyxVQUFLLEdBQW9CLElBQUksQ0FBQzs7OztRQTRDakQsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO0lBWTFCLENBQUM7Ozs7O0lBbERELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFHRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBR0QsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUMzQixDQUFDOzs7OztJQUdELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsSUFBSSxTQUFTO1FBQ1gsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUc7WUFBRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDeEMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87WUFBRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDaEQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7OztJQW9CRCxLQUFLLENBQUMsUUFBdUI7UUFDM0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7OztJQUdELFVBQVUsQ0FBQyxHQUFXO1FBQ3BCLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7OztJQUVTLGtCQUFrQixDQUFDLFFBQXVCO1FBQ2xELE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7YUFDM0MsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUNwQixRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFDckU7YUFDQSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDOzs7Ozs7SUFFUyxLQUFLLENBQUMsa0JBQTBCO1FBQ3hDLE9BQU8sSUFBSSxPQUFPOzs7O1FBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUM3QixrQkFBa0I7WUFDbEIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFOztzQkFFeEMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsa0JBQWtCO2dCQUVwRCw4QkFBOEI7Z0JBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7O3NCQUVqQixLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUMzQyxRQUFRLEVBQ1IsV0FBVyxFQUNYLElBQUksQ0FBQyxXQUFXLENBQ2pCO2dCQUVELHNDQUFzQztnQkFDdEMsSUFBSSxLQUFLLEVBQUU7OzBCQUNILFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxXQUFXOzs7b0JBQUMsR0FBRyxFQUFFO3dCQUM1RCxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7NEJBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQzs0QkFDcEQsT0FBTyxFQUFFLENBQUM7eUJBQ1g7b0JBQ0gsQ0FBQyxHQUFFLEdBQUcsQ0FBQztpQkFDUjthQUNGO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSw0Q0FBNEMsQ0FBQyxDQUFDO2FBQ3hFO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7Ozs7OztJQTVHQyxnQ0FBaUQ7Ozs7OztJQUdqRCw2Q0FBcUQ7Ozs7O0lBeUNyRCw0Q0FBMEI7Ozs7O0lBRWQsaUNBQThCOzs7OztJQUM5QiwrQkFBNEI7Ozs7O0lBQzVCLGdDQUEyQjs7Ozs7SUFDM0Isb0NBQTZCOzs7OztJQUM3QixvQ0FBNkI7Ozs7O0lBQzdCLHNDQUE2Qjs7Ozs7SUFFN0IsOENBQXlEOzs7OztJQUV6RCxrQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSVNoYXJlQnV0dG9uLCBTaGFyZU1ldGFUYWdzIH0gZnJvbSAnLi4vc2hhcmUubW9kZWxzJztcblxuZXhwb3J0IGNsYXNzIFNoYXJlQnV0dG9uQmFzZSB7XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IF9zZWxmOiBTaGFyZUJ1dHRvbkJhc2UgPSB0aGlzO1xuXG4gIC8qKiBTaGFyZSBidXR0b24gc3VwcG9ydGVkIG1ldGEgdGFncyAqL1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgX3N1cHBvcnRlZE1ldGFUYWdzOiBTaGFyZU1ldGFUYWdzO1xuXG4gIC8qKiBTaGFyZSBidXR0b24gbGFiZWwgKi9cbiAgZ2V0IHRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvcHMudGV4dDtcbiAgfVxuXG4gIC8qKiBTaGFyZSBidXR0b24gYXJpYS1sYWJlbCBhdHRyaWJ1dGUgKi9cbiAgZ2V0IGFyaWFMYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wcm9wcy5hcmlhTGFiZWw7XG4gIH1cblxuICAvKiogU2hhcmUgYnV0dG9uIGNvbG9yICovXG4gIGdldCBjb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wcm9wcy5jb2xvcjtcbiAgfVxuXG4gIC8qKiBTaGFyZSBidXR0b24gaWNvbiAoRm9udEF3ZXNvbWUpICovXG4gIGdldCBpY29uKCk6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvcHMuaWNvbjtcbiAgfVxuXG4gIGdldCBkZXNrdG9wKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCBhbmRyb2lkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuZGVza3RvcDtcbiAgfVxuXG4gIGdldCBpb3MoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5kZXNrdG9wO1xuICB9XG5cbiAgZ2V0IHNoYXJlclVybCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLl9wbGF0Zm9ybS5JT1MpIHJldHVybiB0aGlzLmlvcztcbiAgICBpZiAodGhpcy5fcGxhdGZvcm0uQU5EUk9JRCkgcmV0dXJuIHRoaXMuYW5kcm9pZDtcbiAgICByZXR1cm4gdGhpcy5kZXNrdG9wO1xuICB9XG5cbiAgLyoqIElmIHNoYXJlIGJ1dHRvbiBzdXBwb3J0cyBzaGFyZSBjb3VudCAqL1xuICBzdXBwb3J0U2hhcmVDb3VudCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfcHJvcHM6IElTaGFyZUJ1dHRvbixcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF91cmw6ICgpID0+IHN0cmluZyxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9odHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3BsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9kb2N1bWVudDogRG9jdW1lbnQsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfd2luZG93U2l6ZTogc3RyaW5nLFxuICAgICAgICAgICAgICAvLyBkaXNhYmxlIGJ1dHRvbiBjbGljayAodXNlZCBpbiBjb3B5IGJ1dHRvbilcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9kaXNhYmxlQnV0dG9uQ2xpY2s6IChkaXNhYmxlOiBib29sZWFuKSA9PiB2b2lkLFxuICAgICAgICAgICAgICAvLyBMb2dnZXIgZnVuY3Rpb24gKGRlYnVnIG1vZGUpXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfbG9nZ2VyOiAodGV4dDogc3RyaW5nKSA9PiB2b2lkKSB7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgc2hhcmUgd2luZG93XG4gICAqL1xuICBjbGljayhtZXRhVGFnczogU2hhcmVNZXRhVGFncyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX29wZW4odGhpcy5fc2VyaWFsaXplTWV0YVRhZ3MobWV0YVRhZ3MpKTtcbiAgfVxuXG4gIC8qKiBHZXQgc2hhcmUgY291bnQgb2YgYSBVUkwgKi9cbiAgc2hhcmVDb3VudCh1cmw6IHN0cmluZyk6IE9ic2VydmFibGU8bnVtYmVyPiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByb3RlY3RlZCBfc2VyaWFsaXplTWV0YVRhZ3MobWV0YVRhZ3M6IFNoYXJlTWV0YVRhZ3MpOiBzdHJpbmcge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyh0aGlzLl9zdXBwb3J0ZWRNZXRhVGFncylcbiAgICAgIC5tYXAoKFtrZXksIHZhbHVlXSkgPT5cbiAgICAgICAgbWV0YVRhZ3Nba2V5XSA/IGAke3ZhbHVlfT0ke2VuY29kZVVSSUNvbXBvbmVudChtZXRhVGFnc1trZXldKX1gIDogJydcbiAgICAgIClcbiAgICAgIC5qb2luKCcmJyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX29wZW4oc2VyaWFsaXplZE1ldGFUYWdzOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgLy8gQXZvaWQgU1NSIGVycm9yXG4gICAgICBpZiAodGhpcy5zaGFyZXJVcmwgJiYgdGhpcy5fcGxhdGZvcm0uaXNCcm93c2VyKSB7XG5cbiAgICAgICAgY29uc3QgZmluYWxVcmwgPSB0aGlzLnNoYXJlclVybCArIHNlcmlhbGl6ZWRNZXRhVGFncztcblxuICAgICAgICAvLyBEZWJ1ZyBtb2RlLCBsb2cgc2hhcmVyIGxpbmtcbiAgICAgICAgdGhpcy5fbG9nZ2VyKGZpbmFsVXJsKTtcblxuICAgICAgICBjb25zdCBwb3BVcCA9IHRoaXMuX2RvY3VtZW50LmRlZmF1bHRWaWV3Lm9wZW4oXG4gICAgICAgICAgZmluYWxVcmwsXG4gICAgICAgICAgJ25ld3dpbmRvdycsXG4gICAgICAgICAgdGhpcy5fd2luZG93U2l6ZVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFJlc29sdmUgd2hlbiBzaGFyZSBkaWFsb2cgaXMgY2xvc2VkXG4gICAgICAgIGlmIChwb3BVcCkge1xuICAgICAgICAgIGNvbnN0IHBvbGxUaW1lciA9IHRoaXMuX2RvY3VtZW50LmRlZmF1bHRWaWV3LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChwb3BVcC5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5fZG9jdW1lbnQuZGVmYXVsdFZpZXcuY2xlYXJJbnRlcnZhbChwb2xsVGltZXIpO1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKGAke3RoaXMudGV4dH0gYnV0dG9uIGlzIG5vdCBjb21wYXRpYmxlIG9uIHRoaXMgUGxhdGZvcm1gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19