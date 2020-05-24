/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { map } from 'rxjs/operators';
import { ShareButtonBase } from './base';
export class PinterestButton extends ShareButtonBase {
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
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this.supportShareCount = true;
        this._supportedMetaTags = {
            url: 'url',
            description: 'description',
            image: 'media'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `https://pinterest.com/pin/create/button/?`;
    }
    /**
     * @param {?} metaTags
     * @return {?}
     */
    click(metaTags) {
        // Check if image parameter is defined
        if (metaTags.image) {
            return this._open(this._serializeMetaTags(metaTags));
        }
        console.warn('Pinterest button: image parameter is required!');
    }
    /**
     * @param {?} url
     * @return {?}
     */
    shareCount(url) {
        return this._http.get(`https://api.pinterest.com/v1/urls/count.json?url=${url}`, { responseType: 'text' }).pipe(map((/**
         * @param {?} text
         * @return {?}
         */
        (text) => JSON.parse(text.replace(/^receiveCount\((.*)\)/, '$1')))), map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => +res.count)));
    }
}
if (false) {
    /** @type {?} */
    PinterestButton.prototype.supportShareCount;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._supportedMetaTags;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._disableButtonClick;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._logger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGludGVyZXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1zaGFyZS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2J1dHRvbnMvcGludGVyZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUd6QyxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxlQUFlOzs7Ozs7Ozs7OztJQWNsRCxZQUFzQixNQUFvQixFQUNwQixJQUFrQixFQUNsQixLQUFpQixFQUNqQixTQUFtQixFQUNuQixTQUFtQixFQUNuQixXQUFtQixFQUNuQixtQkFBK0MsRUFDL0MsT0FBK0I7UUFDbkQsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBUnhFLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBYztRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQTRCO1FBQy9DLFlBQU8sR0FBUCxPQUFPLENBQXdCO1FBbkJyRCxzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFFZix1QkFBa0IsR0FBa0I7WUFDNUMsR0FBRyxFQUFFLEtBQUs7WUFDVixXQUFXLEVBQUUsYUFBYTtZQUMxQixLQUFLLEVBQUUsT0FBTztTQUNmLENBQUM7SUFlRixDQUFDOzs7O0lBYkQsSUFBSSxPQUFPO1FBQ1QsT0FBTywyQ0FBMkMsQ0FBQztJQUNyRCxDQUFDOzs7OztJQWFELEtBQUssQ0FBQyxRQUF1QjtRQUMzQixzQ0FBc0M7UUFDdEMsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUN0RDtRQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0RBQWdELENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxHQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQ25CLG9EQUFvRCxHQUFHLEVBQUUsRUFDekQsRUFBQyxZQUFZLEVBQUUsTUFBTSxFQUFDLENBQ3ZCLENBQUMsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxDQUFDLElBQVksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUMsRUFDOUUsR0FBRzs7OztRQUFDLENBQUMsR0FBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsQ0FDOUIsQ0FBQztJQUNKLENBQUM7Q0FDRjs7O0lBeENDLDRDQUF5Qjs7Ozs7SUFFekIsNkNBSUU7Ozs7O0lBTVUsaUNBQThCOzs7OztJQUM5QiwrQkFBNEI7Ozs7O0lBQzVCLGdDQUEyQjs7Ozs7SUFDM0Isb0NBQTZCOzs7OztJQUM3QixvQ0FBNkI7Ozs7O0lBQzdCLHNDQUE2Qjs7Ozs7SUFDN0IsOENBQXlEOzs7OztJQUN6RCxrQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU2hhcmVCdXR0b25CYXNlIH0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7IElTaGFyZUJ1dHRvbiwgU2hhcmVNZXRhVGFncyB9IGZyb20gJy4uL3NoYXJlLm1vZGVscyc7XG5cbmV4cG9ydCBjbGFzcyBQaW50ZXJlc3RCdXR0b24gZXh0ZW5kcyBTaGFyZUJ1dHRvbkJhc2Uge1xuXG4gIHN1cHBvcnRTaGFyZUNvdW50ID0gdHJ1ZTtcblxuICBwcm90ZWN0ZWQgX3N1cHBvcnRlZE1ldGFUYWdzOiBTaGFyZU1ldGFUYWdzID0ge1xuICAgIHVybDogJ3VybCcsXG4gICAgZGVzY3JpcHRpb246ICdkZXNjcmlwdGlvbicsXG4gICAgaW1hZ2U6ICdtZWRpYSdcbiAgfTtcblxuICBnZXQgZGVza3RvcCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgaHR0cHM6Ly9waW50ZXJlc3QuY29tL3Bpbi9jcmVhdGUvYnV0dG9uLz9gO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9wcm9wczogSVNoYXJlQnV0dG9uLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3VybDogKCkgPT4gc3RyaW5nLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2h0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2RvY3VtZW50OiBEb2N1bWVudCxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF93aW5kb3dTaXplOiBzdHJpbmcsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZGlzYWJsZUJ1dHRvbkNsaWNrOiAoZGlzYWJsZTogYm9vbGVhbikgPT4gdm9pZCxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9sb2dnZXI6ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQpIHtcbiAgICBzdXBlcihfcHJvcHMsIF91cmwsIF9odHRwLCBfcGxhdGZvcm0sIF9kb2N1bWVudCwgX3dpbmRvd1NpemUsIF9kaXNhYmxlQnV0dG9uQ2xpY2ssIF9sb2dnZXIpO1xuICB9XG5cbiAgY2xpY2sobWV0YVRhZ3M6IFNoYXJlTWV0YVRhZ3MpOiBQcm9taXNlPGFueT4ge1xuICAgIC8vIENoZWNrIGlmIGltYWdlIHBhcmFtZXRlciBpcyBkZWZpbmVkXG4gICAgaWYgKG1ldGFUYWdzLmltYWdlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fb3Blbih0aGlzLl9zZXJpYWxpemVNZXRhVGFncyhtZXRhVGFncykpO1xuICAgIH1cbiAgICBjb25zb2xlLndhcm4oJ1BpbnRlcmVzdCBidXR0b246IGltYWdlIHBhcmFtZXRlciBpcyByZXF1aXJlZCEnKTtcbiAgfVxuXG4gIHNoYXJlQ291bnQodXJsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldChcbiAgICAgIGBodHRwczovL2FwaS5waW50ZXJlc3QuY29tL3YxL3VybHMvY291bnQuanNvbj91cmw9JHt1cmx9YCxcbiAgICAgIHtyZXNwb25zZVR5cGU6ICd0ZXh0J31cbiAgICApLnBpcGUoXG4gICAgICBtYXAoKHRleHQ6IHN0cmluZykgPT4gSlNPTi5wYXJzZSh0ZXh0LnJlcGxhY2UoL15yZWNlaXZlQ291bnRcXCgoLiopXFwpLywgJyQxJykpKSxcbiAgICAgIG1hcCgocmVzOiBhbnkpID0+ICtyZXMuY291bnQpXG4gICAgKTtcbiAgfVxufVxuIl19