/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, HostBinding, HostListener, Inject, EventEmitter, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Meta } from '@angular/platform-browser';
import { Platform } from '@angular/cdk/platform';
import { Subscription } from 'rxjs';
import { ShareService } from './share.service';
import { getValidUrl } from './utils';
var ShareDirective = /** @class */ (function () {
    function ShareDirective(_meta, _el, _http, _platform, _renderer, _cd, _share, _document) {
        this._meta = _meta;
        this._el = _el;
        this._http = _http;
        this._platform = _platform;
        this._renderer = _renderer;
        this._cd = _cd;
        this._share = _share;
        this._document = _document;
        /**
         * Share window closed event subscription
         */
        this._shareWindowClosed = Subscription.EMPTY;
        /**
         * Get share count
         */
        this.getCount = false;
        /**
         * Set meta tags from document head, useful when SEO is supported
         */
        this.autoSetMeta = this._share.config.autoSetMeta;
        /**
         * Sharing link
         */
        this.url = this._share.config.url;
        /**
         * Sets the title parameter
         */
        this.title = this._share.config.title;
        /**
         * Sets the description parameter
         */
        this.description = this._share.config.description;
        /**
         * Sets the image parameter for sharing on Pinterest
         */
        this.image = this._share.config.image;
        /**
         * Sets the tags parameter for sharing on Twitter and Tumblr
         */
        this.tags = this._share.config.tags;
        /**
         * Stream that emits when share count is fetched
         */
        this.count = new EventEmitter();
        /**
         * Stream that emits when share dialog is opened
         */
        this.opened = new EventEmitter();
        /**
         * Stream that emits when share dialog is closed
         */
        this.closed = new EventEmitter();
    }
    /** Share the link */
    /**
     * Share the link
     * @return {?}
     */
    ShareDirective.prototype.share = /**
     * Share the link
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var metaTags = this.autoSetMeta ? {
            url: this.url,
            title: this.title || this._getMetaTagContent('og:title'),
            description: this.description || this._getMetaTagContent('og:description'),
            image: this.image || this._getMetaTagContent('og:image'),
            via: this._share.config.twitterAccount,
            tags: this.tags,
        } : {
            url: this.url,
            title: this.title,
            description: this.description,
            image: this.image,
            tags: this.tags,
            via: this._share.config.twitterAccount,
        };
        // Emit when share dialog is opened
        this.opened.emit(this.shareButtonName);
        // Share the link
        this.shareButton.click(metaTags).then((/**
         * @return {?}
         */
        function () {
            // Emit when share dialog is closed
            return _this.closed.emit(_this.shareButtonName);
        }));
    };
    /**
     * @param {?=} changes
     * @return {?}
     */
    ShareDirective.prototype.init = /**
     * @param {?=} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        // Avoid SSR error
        if (this._platform.isBrowser) {
            if (!changes || this._shareButtonChanged(changes['shareButtonName'])) {
                this._createShareButton();
            }
            if (!changes || this._urlChanged(changes['url'])) {
                this.url = getValidUrl(this.autoSetMeta
                    ? this.url || this._getMetaTagContent('og:url')
                    : this.url, this._document.defaultView.location.href);
                if (this.getCount && this.shareButton.supportShareCount) {
                    this.shareButton.shareCount(this.url).subscribe((/**
                     * @param {?} count
                     * @return {?}
                     */
                    function (count) { return _this.count.emit(count); }));
                }
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ShareDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.init(changes);
    };
    /**
     * @return {?}
     */
    ShareDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._shareWindowClosed.unsubscribe();
    };
    /**
     * @return {?}
     */
    ShareDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.init();
    };
    /**
     * @private
     * @return {?}
     */
    ShareDirective.prototype._createShareButton = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var shareButtonFactory = this._share.config.prop[this.shareButtonName];
        /** @type {?} */
        var button = shareButtonFactory.create(shareButtonFactory, (
        // Pass the url property as a function, so the button class always gets the recent url value.
        // Pass the url property as a function, so the button class always gets the recent url value.
        /**
         * @return {?}
         */
        function () { return _this.url; }), this._http, this._platform, this._document, this._share.windowSize, (
        // This function is meant for the copy button
        // This function is meant for the copy button
        /**
         * @param {?} disabled
         * @return {?}
         */
        function (disabled) {
            _this.pointerEvents = disabled ? 'none' : 'auto';
            _this._cd.markForCheck();
        }), (
        // Logger used for debugging
        // Logger used for debugging
        /**
         * @param {?} text
         * @return {?}
         */
        function (text) { return _this._share.config.debug ? console.log(text) : null; }));
        if (button) {
            // Set share button properties
            this.shareButton = button;
            // Remove previous button class
            this._renderer.removeClass(this._el.nativeElement, "sb-" + this._buttonClass);
            // Add new button class
            this._renderer.addClass(this._el.nativeElement, "sb-" + this.shareButtonName);
            // Set button css color variable
            this._el.nativeElement.style.setProperty('--button-color', this.shareButton.color);
            // Keep a copy of the class for future replacement
            this._buttonClass = this.shareButtonName;
            // Set aria-label attribute
            this._renderer.setAttribute(this._el.nativeElement, 'aria-label', button.ariaLabel);
        }
        else {
            console.error("[ShareButtons]: The share button '" + this.shareButtonName + "' does not exist!");
        }
    };
    /** Get meta tag content */
    /**
     * Get meta tag content
     * @private
     * @param {?} key
     * @return {?}
     */
    ShareDirective.prototype._getMetaTagContent = /**
     * Get meta tag content
     * @private
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var metaUsingProperty = this._meta.getTag("property=\"" + key + "\"");
        if (metaUsingProperty)
            return metaUsingProperty.getAttribute('content');
        /** @type {?} */
        var metaUsingName = this._meta.getTag("name=\"" + key + "\"");
        if (metaUsingName)
            return metaUsingName.getAttribute('content');
    };
    /**
     * @private
     * @param {?} change
     * @return {?}
     */
    ShareDirective.prototype._shareButtonChanged = /**
     * @private
     * @param {?} change
     * @return {?}
     */
    function (change) {
        return change && (change.firstChange || change.previousValue !== change.currentValue);
    };
    /**
     * @private
     * @param {?} change
     * @return {?}
     */
    ShareDirective.prototype._urlChanged = /**
     * @private
     * @param {?} change
     * @return {?}
     */
    function (change) {
        return !this.url || (change && change.previousValue !== change.currentValue);
    };
    ShareDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[shareButton], [share-button]'
                },] }
    ];
    /** @nocollapse */
    ShareDirective.ctorParameters = function () { return [
        { type: Meta },
        { type: ElementRef },
        { type: HttpClient },
        { type: Platform },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: ShareService },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    ShareDirective.propDecorators = {
        shareButtonName: [{ type: Input, args: ['shareButton',] }],
        getCount: [{ type: Input }],
        autoSetMeta: [{ type: Input }],
        url: [{ type: Input }],
        title: [{ type: Input }],
        description: [{ type: Input }],
        image: [{ type: Input }],
        tags: [{ type: Input }],
        count: [{ type: Output }],
        opened: [{ type: Output }],
        closed: [{ type: Output }],
        pointerEvents: [{ type: HostBinding, args: ['style.pointerEvents',] }],
        share: [{ type: HostListener, args: ['click',] }]
    };
    return ShareDirective;
}());
export { ShareDirective };
if (false) {
    /**
     * A ref to button class - used to remove previous class when the button type is changed
     * @type {?}
     * @private
     */
    ShareDirective.prototype._buttonClass;
    /**
     * Share window closed event subscription
     * @type {?}
     * @private
     */
    ShareDirective.prototype._shareWindowClosed;
    /**
     * Button properties
     * @type {?}
     */
    ShareDirective.prototype.shareButton;
    /**
     * Share button type
     * @type {?}
     */
    ShareDirective.prototype.shareButtonName;
    /**
     * Get share count
     * @type {?}
     */
    ShareDirective.prototype.getCount;
    /**
     * Set meta tags from document head, useful when SEO is supported
     * @type {?}
     */
    ShareDirective.prototype.autoSetMeta;
    /**
     * Sharing link
     * @type {?}
     */
    ShareDirective.prototype.url;
    /**
     * Sets the title parameter
     * @type {?}
     */
    ShareDirective.prototype.title;
    /**
     * Sets the description parameter
     * @type {?}
     */
    ShareDirective.prototype.description;
    /**
     * Sets the image parameter for sharing on Pinterest
     * @type {?}
     */
    ShareDirective.prototype.image;
    /**
     * Sets the tags parameter for sharing on Twitter and Tumblr
     * @type {?}
     */
    ShareDirective.prototype.tags;
    /**
     * Stream that emits when share count is fetched
     * @type {?}
     */
    ShareDirective.prototype.count;
    /**
     * Stream that emits when share dialog is opened
     * @type {?}
     */
    ShareDirective.prototype.opened;
    /**
     * Stream that emits when share dialog is closed
     * @type {?}
     */
    ShareDirective.prototype.closed;
    /** @type {?} */
    ShareDirective.prototype.pointerEvents;
    /**
     * @type {?}
     * @private
     */
    ShareDirective.prototype._meta;
    /**
     * @type {?}
     * @private
     */
    ShareDirective.prototype._el;
    /**
     * @type {?}
     * @private
     */
    ShareDirective.prototype._http;
    /**
     * @type {?}
     * @private
     */
    ShareDirective.prototype._platform;
    /**
     * @type {?}
     * @private
     */
    ShareDirective.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    ShareDirective.prototype._cd;
    /**
     * @type {?}
     * @private
     */
    ShareDirective.prototype._share;
    /**
     * @type {?}
     * @private
     */
    ShareDirective.prototype._document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZS1idXR0b24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFlBQVksRUFDWixNQUFNLEVBTU4sWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBR3RDO0lBK0NFLHdCQUFvQixLQUFXLEVBQ1gsR0FBZSxFQUNmLEtBQWlCLEVBQ2pCLFNBQW1CLEVBQ25CLFNBQW9CLEVBQ3BCLEdBQXNCLEVBQ3RCLE1BQW9CLEVBQ0YsU0FBYztRQVBoQyxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQ1gsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDRixjQUFTLEdBQVQsU0FBUyxDQUFLOzs7O1FB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OztrQ0F2QzNCLEtBQUssU0FBQyxhQUFhOzJCQUduQixLQUFLOzhCQUdMLEtBQUs7c0JBR0wsS0FBSzt3QkFHTCxLQUFLOzhCQUdMLEtBQUs7d0JBR0wsS0FBSzt1QkFHTCxLQUFLO3dCQUdMLE1BQU07eUJBR04sTUFBTTt5QkFHTixNQUFNO2dDQVlOLFdBQVcsU0FBQyxxQkFBcUI7d0JBR2pDLFlBQVksU0FBQyxPQUFPOztJQXVIdkIscUJBQUM7Q0FBQSxBQW5MRCxJQW1MQztTQWhMWSxjQUFjOzs7Ozs7O0lBR3pCLHNDQUE2Qjs7Ozs7O0lBRzdCLDRDQUFnRDs7Ozs7SUFHaEQscUNBQTZCOzs7OztJQUc3Qix5Q0FBOEM7Ozs7O0lBRzlDLGtDQUEwQjs7Ozs7SUFHMUIscUNBQStEOzs7OztJQUcvRCw2QkFBOEM7Ozs7O0lBRzlDLCtCQUFrRDs7Ozs7SUFHbEQscUNBQThEOzs7OztJQUc5RCwrQkFBa0Q7Ozs7O0lBR2xELDhCQUFnRDs7Ozs7SUFHaEQsK0JBQTZDOzs7OztJQUc3QyxnQ0FBOEM7Ozs7O0lBRzlDLGdDQUE4Qzs7SUFZOUMsdUNBQTBEOzs7OztJQVY5QywrQkFBbUI7Ozs7O0lBQ25CLDZCQUF1Qjs7Ozs7SUFDdkIsK0JBQXlCOzs7OztJQUN6QixtQ0FBMkI7Ozs7O0lBQzNCLG1DQUE0Qjs7Ozs7SUFDNUIsNkJBQThCOzs7OztJQUM5QixnQ0FBNEI7Ozs7O0lBQzVCLG1DQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2UsXG4gIEV2ZW50RW1pdHRlcixcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBDaGFuZ2VEZXRlY3RvclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBNZXRhIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU2hhcmVTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZS5zZXJ2aWNlJztcbmltcG9ydCB7IElTaGFyZUJ1dHRvbiwgU2hhcmVNZXRhVGFncyB9IGZyb20gJy4vc2hhcmUubW9kZWxzJztcbmltcG9ydCB7IGdldFZhbGlkVXJsIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBTaGFyZUJ1dHRvbkJhc2UgfSBmcm9tICcuL2J1dHRvbnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc2hhcmVCdXR0b25dLCBbc2hhcmUtYnV0dG9uXSdcbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0IHtcblxuICAvKiogQSByZWYgdG8gYnV0dG9uIGNsYXNzIC0gdXNlZCB0byByZW1vdmUgcHJldmlvdXMgY2xhc3Mgd2hlbiB0aGUgYnV0dG9uIHR5cGUgaXMgY2hhbmdlZCAqL1xuICBwcml2YXRlIF9idXR0b25DbGFzczogc3RyaW5nO1xuXG4gIC8qKiBTaGFyZSB3aW5kb3cgY2xvc2VkIGV2ZW50IHN1YnNjcmlwdGlvbiAqL1xuICBwcml2YXRlIF9zaGFyZVdpbmRvd0Nsb3NlZCA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcblxuICAvKiogQnV0dG9uIHByb3BlcnRpZXMgKi9cbiAgc2hhcmVCdXR0b246IFNoYXJlQnV0dG9uQmFzZTtcblxuICAvKiogU2hhcmUgYnV0dG9uIHR5cGUgKi9cbiAgQElucHV0KCdzaGFyZUJ1dHRvbicpIHNoYXJlQnV0dG9uTmFtZTogc3RyaW5nO1xuXG4gIC8qKiBHZXQgc2hhcmUgY291bnQgKi9cbiAgQElucHV0KCkgZ2V0Q291bnQgPSBmYWxzZTtcblxuICAvKiogU2V0IG1ldGEgdGFncyBmcm9tIGRvY3VtZW50IGhlYWQsIHVzZWZ1bCB3aGVuIFNFTyBpcyBzdXBwb3J0ZWQgKi9cbiAgQElucHV0KCkgYXV0b1NldE1ldGE6IGJvb2xlYW4gPSB0aGlzLl9zaGFyZS5jb25maWcuYXV0b1NldE1ldGE7XG5cbiAgLyoqIFNoYXJpbmcgbGluayAqL1xuICBASW5wdXQoKSB1cmw6IHN0cmluZyA9IHRoaXMuX3NoYXJlLmNvbmZpZy51cmw7XG5cbiAgLyoqIFNldHMgdGhlIHRpdGxlIHBhcmFtZXRlciAqL1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gdGhpcy5fc2hhcmUuY29uZmlnLnRpdGxlO1xuXG4gIC8qKiBTZXRzIHRoZSBkZXNjcmlwdGlvbiBwYXJhbWV0ZXIgKi9cbiAgQElucHV0KCkgZGVzY3JpcHRpb246IHN0cmluZyA9IHRoaXMuX3NoYXJlLmNvbmZpZy5kZXNjcmlwdGlvbjtcblxuICAvKiogU2V0cyB0aGUgaW1hZ2UgcGFyYW1ldGVyIGZvciBzaGFyaW5nIG9uIFBpbnRlcmVzdCAqL1xuICBASW5wdXQoKSBpbWFnZTogc3RyaW5nID0gdGhpcy5fc2hhcmUuY29uZmlnLmltYWdlO1xuXG4gIC8qKiBTZXRzIHRoZSB0YWdzIHBhcmFtZXRlciBmb3Igc2hhcmluZyBvbiBUd2l0dGVyIGFuZCBUdW1ibHIgKi9cbiAgQElucHV0KCkgdGFnczogc3RyaW5nID0gdGhpcy5fc2hhcmUuY29uZmlnLnRhZ3M7XG5cbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gc2hhcmUgY291bnQgaXMgZmV0Y2hlZCAqL1xuICBAT3V0cHV0KCkgY291bnQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBzaGFyZSBkaWFsb2cgaXMgb3BlbmVkICovXG4gIEBPdXRwdXQoKSBvcGVuZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBzaGFyZSBkaWFsb2cgaXMgY2xvc2VkICovXG4gIEBPdXRwdXQoKSBjbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZXRhOiBNZXRhLFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3NoYXJlOiBTaGFyZVNlcnZpY2UsXG4gICAgICAgICAgICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnkpIHtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUucG9pbnRlckV2ZW50cycpIHBvaW50ZXJFdmVudHM6IHN0cmluZztcblxuICAvKiogU2hhcmUgdGhlIGxpbmsgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBzaGFyZSgpIHtcbiAgICBjb25zdCBtZXRhVGFnczogU2hhcmVNZXRhVGFncyA9IHRoaXMuYXV0b1NldE1ldGEgPyB7XG4gICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgdGl0bGU6IHRoaXMudGl0bGUgfHwgdGhpcy5fZ2V0TWV0YVRhZ0NvbnRlbnQoJ29nOnRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbiB8fCB0aGlzLl9nZXRNZXRhVGFnQ29udGVudCgnb2c6ZGVzY3JpcHRpb24nKSxcbiAgICAgIGltYWdlOiB0aGlzLmltYWdlIHx8IHRoaXMuX2dldE1ldGFUYWdDb250ZW50KCdvZzppbWFnZScpLFxuICAgICAgdmlhOiB0aGlzLl9zaGFyZS5jb25maWcudHdpdHRlckFjY291bnQsXG4gICAgICB0YWdzOiB0aGlzLnRhZ3MsXG4gICAgfSA6IHtcbiAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICB0YWdzOiB0aGlzLnRhZ3MsXG4gICAgICB2aWE6IHRoaXMuX3NoYXJlLmNvbmZpZy50d2l0dGVyQWNjb3VudCxcbiAgICB9O1xuXG4gICAgLy8gRW1pdCB3aGVuIHNoYXJlIGRpYWxvZyBpcyBvcGVuZWRcbiAgICB0aGlzLm9wZW5lZC5lbWl0KHRoaXMuc2hhcmVCdXR0b25OYW1lKTtcbiAgICAvLyBTaGFyZSB0aGUgbGlua1xuICAgIHRoaXMuc2hhcmVCdXR0b24uY2xpY2sobWV0YVRhZ3MpLnRoZW4oKCkgPT5cbiAgICAvLyBFbWl0IHdoZW4gc2hhcmUgZGlhbG9nIGlzIGNsb3NlZFxuICAgICAgdGhpcy5jbG9zZWQuZW1pdCh0aGlzLnNoYXJlQnV0dG9uTmFtZSlcbiAgICApO1xuICB9XG5cbiAgaW5pdChjaGFuZ2VzPzogU2ltcGxlQ2hhbmdlcykge1xuICAgIC8vIEF2b2lkIFNTUiBlcnJvclxuICAgIGlmICh0aGlzLl9wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcblxuICAgICAgaWYgKCFjaGFuZ2VzIHx8IHRoaXMuX3NoYXJlQnV0dG9uQ2hhbmdlZChjaGFuZ2VzWydzaGFyZUJ1dHRvbk5hbWUnXSkpIHtcbiAgICAgICAgdGhpcy5fY3JlYXRlU2hhcmVCdXR0b24oKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFjaGFuZ2VzIHx8IHRoaXMuX3VybENoYW5nZWQoY2hhbmdlc1sndXJsJ10pKSB7XG4gICAgICAgIHRoaXMudXJsID0gZ2V0VmFsaWRVcmwoXG4gICAgICAgICAgdGhpcy5hdXRvU2V0TWV0YVxuICAgICAgICAgICAgPyB0aGlzLnVybCB8fCB0aGlzLl9nZXRNZXRhVGFnQ29udGVudCgnb2c6dXJsJylcbiAgICAgICAgICAgIDogdGhpcy51cmwsXG4gICAgICAgICAgdGhpcy5fZG9jdW1lbnQuZGVmYXVsdFZpZXcubG9jYXRpb24uaHJlZlxuICAgICAgICApO1xuXG4gICAgICAgIGlmICh0aGlzLmdldENvdW50ICYmIHRoaXMuc2hhcmVCdXR0b24uc3VwcG9ydFNoYXJlQ291bnQpIHtcbiAgICAgICAgICB0aGlzLnNoYXJlQnV0dG9uLnNoYXJlQ291bnQodGhpcy51cmwpLnN1YnNjcmliZSgoY291bnQ6IG51bWJlcikgPT4gdGhpcy5jb3VudC5lbWl0KGNvdW50KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5pbml0KGNoYW5nZXMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fc2hhcmVXaW5kb3dDbG9zZWQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlU2hhcmVCdXR0b24oKSB7XG4gICAgY29uc3Qgc2hhcmVCdXR0b25GYWN0b3J5OiBJU2hhcmVCdXR0b24gPSB0aGlzLl9zaGFyZS5jb25maWcucHJvcFt0aGlzLnNoYXJlQnV0dG9uTmFtZV07XG4gICAgY29uc3QgYnV0dG9uOiBTaGFyZUJ1dHRvbkJhc2UgPSBzaGFyZUJ1dHRvbkZhY3RvcnkuY3JlYXRlKFxuICAgICAgc2hhcmVCdXR0b25GYWN0b3J5LFxuICAgICAgLy8gUGFzcyB0aGUgdXJsIHByb3BlcnR5IGFzIGEgZnVuY3Rpb24sIHNvIHRoZSBidXR0b24gY2xhc3MgYWx3YXlzIGdldHMgdGhlIHJlY2VudCB1cmwgdmFsdWUuXG4gICAgICAoKSA9PiB0aGlzLnVybCxcbiAgICAgIHRoaXMuX2h0dHAsXG4gICAgICB0aGlzLl9wbGF0Zm9ybSxcbiAgICAgIHRoaXMuX2RvY3VtZW50LFxuICAgICAgdGhpcy5fc2hhcmUud2luZG93U2l6ZSxcbiAgICAgIC8vIFRoaXMgZnVuY3Rpb24gaXMgbWVhbnQgZm9yIHRoZSBjb3B5IGJ1dHRvblxuICAgICAgKGRpc2FibGVkOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHRoaXMucG9pbnRlckV2ZW50cyA9IGRpc2FibGVkID8gJ25vbmUnIDogJ2F1dG8nO1xuICAgICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0sXG4gICAgICAvLyBMb2dnZXIgdXNlZCBmb3IgZGVidWdnaW5nXG4gICAgICAodGV4dDogc3RyaW5nKSA9PiB0aGlzLl9zaGFyZS5jb25maWcuZGVidWcgPyBjb25zb2xlLmxvZyh0ZXh0KSA6IG51bGxcbiAgICApO1xuICAgIGlmIChidXR0b24pIHtcbiAgICAgIC8vIFNldCBzaGFyZSBidXR0b24gcHJvcGVydGllc1xuICAgICAgdGhpcy5zaGFyZUJ1dHRvbiA9IGJ1dHRvbjtcblxuICAgICAgLy8gUmVtb3ZlIHByZXZpb3VzIGJ1dHRvbiBjbGFzc1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgYHNiLSR7dGhpcy5fYnV0dG9uQ2xhc3N9YCk7XG5cbiAgICAgIC8vIEFkZCBuZXcgYnV0dG9uIGNsYXNzXG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBgc2ItJHt0aGlzLnNoYXJlQnV0dG9uTmFtZX1gKTtcblxuICAgICAgLy8gU2V0IGJ1dHRvbiBjc3MgY29sb3IgdmFyaWFibGVcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYnV0dG9uLWNvbG9yJywgdGhpcy5zaGFyZUJ1dHRvbi5jb2xvcik7XG5cbiAgICAgIC8vIEtlZXAgYSBjb3B5IG9mIHRoZSBjbGFzcyBmb3IgZnV0dXJlIHJlcGxhY2VtZW50XG4gICAgICB0aGlzLl9idXR0b25DbGFzcyA9IHRoaXMuc2hhcmVCdXR0b25OYW1lO1xuXG4gICAgICAvLyBTZXQgYXJpYS1sYWJlbCBhdHRyaWJ1dGVcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnYXJpYS1sYWJlbCcsIGJ1dHRvbi5hcmlhTGFiZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBbU2hhcmVCdXR0b25zXTogVGhlIHNoYXJlIGJ1dHRvbiAnJHt0aGlzLnNoYXJlQnV0dG9uTmFtZX0nIGRvZXMgbm90IGV4aXN0IWApO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBHZXQgbWV0YSB0YWcgY29udGVudCAqL1xuICBwcml2YXRlIF9nZXRNZXRhVGFnQ29udGVudChrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgbWV0YVVzaW5nUHJvcGVydHk6IEhUTUxNZXRhRWxlbWVudCA9IHRoaXMuX21ldGEuZ2V0VGFnKGBwcm9wZXJ0eT1cIiR7a2V5fVwiYCk7XG4gICAgaWYgKG1ldGFVc2luZ1Byb3BlcnR5KSByZXR1cm4gbWV0YVVzaW5nUHJvcGVydHkuZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG4gICAgY29uc3QgbWV0YVVzaW5nTmFtZTogSFRNTE1ldGFFbGVtZW50ID0gdGhpcy5fbWV0YS5nZXRUYWcoYG5hbWU9XCIke2tleX1cImApO1xuICAgIGlmIChtZXRhVXNpbmdOYW1lKSByZXR1cm4gbWV0YVVzaW5nTmFtZS5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NoYXJlQnV0dG9uQ2hhbmdlZChjaGFuZ2U6IFNpbXBsZUNoYW5nZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjaGFuZ2UgJiYgKGNoYW5nZS5maXJzdENoYW5nZSB8fCBjaGFuZ2UucHJldmlvdXNWYWx1ZSAhPT0gY2hhbmdlLmN1cnJlbnRWYWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIF91cmxDaGFuZ2VkKGNoYW5nZTogU2ltcGxlQ2hhbmdlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLnVybCB8fCAoY2hhbmdlICYmIGNoYW5nZS5wcmV2aW91c1ZhbHVlICE9PSBjaGFuZ2UuY3VycmVudFZhbHVlKTtcbiAgfVxuXG59XG4iXX0=