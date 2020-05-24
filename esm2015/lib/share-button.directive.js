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
export class ShareDirective {
    /**
     * @param {?} _meta
     * @param {?} _el
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _renderer
     * @param {?} _cd
     * @param {?} _share
     * @param {?} _document
     */
    constructor(_meta, _el, _http, _platform, _renderer, _cd, _share, _document) {
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
    /**
     * Share the link
     * @return {?}
     */
    share() {
        /** @type {?} */
        const metaTags = this.autoSetMeta ? {
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
        () => 
        // Emit when share dialog is closed
        this.closed.emit(this.shareButtonName)));
    }
    /**
     * @param {?=} changes
     * @return {?}
     */
    init(changes) {
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
                    (count) => this.count.emit(count)));
                }
            }
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.init(changes);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._shareWindowClosed.unsubscribe();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.init();
    }
    /**
     * @private
     * @return {?}
     */
    _createShareButton() {
        /** @type {?} */
        const shareButtonFactory = this._share.config.prop[this.shareButtonName];
        /** @type {?} */
        const button = shareButtonFactory.create(shareButtonFactory, (
        // Pass the url property as a function, so the button class always gets the recent url value.
        /**
         * @return {?}
         */
        () => this.url), this._http, this._platform, this._document, this._share.windowSize, (
        // This function is meant for the copy button
        /**
         * @param {?} disabled
         * @return {?}
         */
        (disabled) => {
            this.pointerEvents = disabled ? 'none' : 'auto';
            this._cd.markForCheck();
        }), (
        // Logger used for debugging
        /**
         * @param {?} text
         * @return {?}
         */
        (text) => this._share.config.debug ? console.log(text) : null));
        if (button) {
            // Set share button properties
            this.shareButton = button;
            // Remove previous button class
            this._renderer.removeClass(this._el.nativeElement, `sb-${this._buttonClass}`);
            // Add new button class
            this._renderer.addClass(this._el.nativeElement, `sb-${this.shareButtonName}`);
            // Set button css color variable
            this._el.nativeElement.style.setProperty('--button-color', this.shareButton.color);
            // Keep a copy of the class for future replacement
            this._buttonClass = this.shareButtonName;
            // Set aria-label attribute
            this._renderer.setAttribute(this._el.nativeElement, 'aria-label', button.ariaLabel);
        }
        else {
            console.error(`[ShareButtons]: The share button '${this.shareButtonName}' does not exist!`);
        }
    }
    /**
     * Get meta tag content
     * @private
     * @param {?} key
     * @return {?}
     */
    _getMetaTagContent(key) {
        /** @type {?} */
        const metaUsingProperty = this._meta.getTag(`property="${key}"`);
        if (metaUsingProperty)
            return metaUsingProperty.getAttribute('content');
        /** @type {?} */
        const metaUsingName = this._meta.getTag(`name="${key}"`);
        if (metaUsingName)
            return metaUsingName.getAttribute('content');
    }
    /**
     * @private
     * @param {?} change
     * @return {?}
     */
    _shareButtonChanged(change) {
        return change && (change.firstChange || change.previousValue !== change.currentValue);
    }
    /**
     * @private
     * @param {?} change
     * @return {?}
     */
    _urlChanged(change) {
        return !this.url || (change && change.previousValue !== change.currentValue);
    }
}
ShareDirective.decorators = [
    { type: Directive, args: [{
                selector: '[shareButton], [share-button]'
            },] }
];
/** @nocollapse */
ShareDirective.ctorParameters = () => [
    { type: Meta },
    { type: ElementRef },
    { type: HttpClient },
    { type: Platform },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: ShareService },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZS1idXR0b24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFlBQVksRUFDWixNQUFNLEVBTU4sWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBTXRDLE1BQU0sT0FBTyxjQUFjOzs7Ozs7Ozs7OztJQTRDekIsWUFBb0IsS0FBVyxFQUNYLEdBQWUsRUFDZixLQUFpQixFQUNqQixTQUFtQixFQUNuQixTQUFvQixFQUNwQixHQUFzQixFQUN0QixNQUFvQixFQUNGLFNBQWM7UUFQaEMsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUNYLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFjO1FBQ0Ys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Ozs7Ozs7O0lBdERyQixzQ0FBNkI7Ozs7OztJQUc3Qiw0Q0FBZ0Q7Ozs7O0lBR2hELHFDQUE2Qjs7Ozs7SUFHN0IseUNBQThDOzs7OztJQUc5QyxrQ0FBMEI7Ozs7O0lBRzFCLHFDQUErRDs7Ozs7SUFHL0QsNkJBQThDOzs7OztJQUc5QywrQkFBa0Q7Ozs7O0lBR2xELHFDQUE4RDs7Ozs7SUFHOUQsK0JBQWtEOzs7OztJQUdsRCw4QkFBZ0Q7Ozs7O0lBR2hELCtCQUE2Qzs7Ozs7SUFHN0MsZ0NBQThDOzs7OztJQUc5QyxnQ0FBOEM7O0lBWTlDLHVDQUEwRDs7Ozs7SUFWOUMsK0JBQW1COzs7OztJQUNuQiw2QkFBdUI7Ozs7O0lBQ3ZCLCtCQUF5Qjs7Ozs7SUFDekIsbUNBQTJCOzs7OztJQUMzQixtQ0FBNEI7Ozs7O0lBQzVCLDZCQUE4Qjs7Ozs7SUFDOUIsZ0NBQTRCOzs7OztJQUM1QixtQ0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlLFxuICBFdmVudEVtaXR0ZXIsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTWV0YSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFNoYXJlU2VydmljZSB9IGZyb20gJy4vc2hhcmUuc2VydmljZSc7XG5pbXBvcnQgeyBJU2hhcmVCdXR0b24sIFNoYXJlTWV0YVRhZ3MgfSBmcm9tICcuL3NoYXJlLm1vZGVscyc7XG5pbXBvcnQgeyBnZXRWYWxpZFVybCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgU2hhcmVCdXR0b25CYXNlIH0gZnJvbSAnLi9idXR0b25zJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3NoYXJlQnV0dG9uXSwgW3NoYXJlLWJ1dHRvbl0nXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCB7XG5cbiAgLyoqIEEgcmVmIHRvIGJ1dHRvbiBjbGFzcyAtIHVzZWQgdG8gcmVtb3ZlIHByZXZpb3VzIGNsYXNzIHdoZW4gdGhlIGJ1dHRvbiB0eXBlIGlzIGNoYW5nZWQgKi9cbiAgcHJpdmF0ZSBfYnV0dG9uQ2xhc3M6IHN0cmluZztcblxuICAvKiogU2hhcmUgd2luZG93IGNsb3NlZCBldmVudCBzdWJzY3JpcHRpb24gKi9cbiAgcHJpdmF0ZSBfc2hhcmVXaW5kb3dDbG9zZWQgPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgLyoqIEJ1dHRvbiBwcm9wZXJ0aWVzICovXG4gIHNoYXJlQnV0dG9uOiBTaGFyZUJ1dHRvbkJhc2U7XG5cbiAgLyoqIFNoYXJlIGJ1dHRvbiB0eXBlICovXG4gIEBJbnB1dCgnc2hhcmVCdXR0b24nKSBzaGFyZUJ1dHRvbk5hbWU6IHN0cmluZztcblxuICAvKiogR2V0IHNoYXJlIGNvdW50ICovXG4gIEBJbnB1dCgpIGdldENvdW50ID0gZmFsc2U7XG5cbiAgLyoqIFNldCBtZXRhIHRhZ3MgZnJvbSBkb2N1bWVudCBoZWFkLCB1c2VmdWwgd2hlbiBTRU8gaXMgc3VwcG9ydGVkICovXG4gIEBJbnB1dCgpIGF1dG9TZXRNZXRhOiBib29sZWFuID0gdGhpcy5fc2hhcmUuY29uZmlnLmF1dG9TZXRNZXRhO1xuXG4gIC8qKiBTaGFyaW5nIGxpbmsgKi9cbiAgQElucHV0KCkgdXJsOiBzdHJpbmcgPSB0aGlzLl9zaGFyZS5jb25maWcudXJsO1xuXG4gIC8qKiBTZXRzIHRoZSB0aXRsZSBwYXJhbWV0ZXIgKi9cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9IHRoaXMuX3NoYXJlLmNvbmZpZy50aXRsZTtcblxuICAvKiogU2V0cyB0aGUgZGVzY3JpcHRpb24gcGFyYW1ldGVyICovXG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSB0aGlzLl9zaGFyZS5jb25maWcuZGVzY3JpcHRpb247XG5cbiAgLyoqIFNldHMgdGhlIGltYWdlIHBhcmFtZXRlciBmb3Igc2hhcmluZyBvbiBQaW50ZXJlc3QgKi9cbiAgQElucHV0KCkgaW1hZ2U6IHN0cmluZyA9IHRoaXMuX3NoYXJlLmNvbmZpZy5pbWFnZTtcblxuICAvKiogU2V0cyB0aGUgdGFncyBwYXJhbWV0ZXIgZm9yIHNoYXJpbmcgb24gVHdpdHRlciBhbmQgVHVtYmxyICovXG4gIEBJbnB1dCgpIHRhZ3M6IHN0cmluZyA9IHRoaXMuX3NoYXJlLmNvbmZpZy50YWdzO1xuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIHNoYXJlIGNvdW50IGlzIGZldGNoZWQgKi9cbiAgQE91dHB1dCgpIGNvdW50ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gc2hhcmUgZGlhbG9nIGlzIG9wZW5lZCAqL1xuICBAT3V0cHV0KCkgb3BlbmVkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gc2hhcmUgZGlhbG9nIGlzIGNsb3NlZCAqL1xuICBAT3V0cHV0KCkgY2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWV0YTogTWV0YSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3BsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9zaGFyZTogU2hhcmVTZXJ2aWNlLFxuICAgICAgICAgICAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55KSB7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBvaW50ZXJFdmVudHMnKSBwb2ludGVyRXZlbnRzOiBzdHJpbmc7XG5cbiAgLyoqIFNoYXJlIHRoZSBsaW5rICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgc2hhcmUoKSB7XG4gICAgY29uc3QgbWV0YVRhZ3M6IFNoYXJlTWV0YVRhZ3MgPSB0aGlzLmF1dG9TZXRNZXRhID8ge1xuICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlIHx8IHRoaXMuX2dldE1ldGFUYWdDb250ZW50KCdvZzp0aXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24gfHwgdGhpcy5fZ2V0TWV0YVRhZ0NvbnRlbnQoJ29nOmRlc2NyaXB0aW9uJyksXG4gICAgICBpbWFnZTogdGhpcy5pbWFnZSB8fCB0aGlzLl9nZXRNZXRhVGFnQ29udGVudCgnb2c6aW1hZ2UnKSxcbiAgICAgIHZpYTogdGhpcy5fc2hhcmUuY29uZmlnLnR3aXR0ZXJBY2NvdW50LFxuICAgICAgdGFnczogdGhpcy50YWdzLFxuICAgIH0gOiB7XG4gICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgdGFnczogdGhpcy50YWdzLFxuICAgICAgdmlhOiB0aGlzLl9zaGFyZS5jb25maWcudHdpdHRlckFjY291bnQsXG4gICAgfTtcblxuICAgIC8vIEVtaXQgd2hlbiBzaGFyZSBkaWFsb2cgaXMgb3BlbmVkXG4gICAgdGhpcy5vcGVuZWQuZW1pdCh0aGlzLnNoYXJlQnV0dG9uTmFtZSk7XG4gICAgLy8gU2hhcmUgdGhlIGxpbmtcbiAgICB0aGlzLnNoYXJlQnV0dG9uLmNsaWNrKG1ldGFUYWdzKS50aGVuKCgpID0+XG4gICAgLy8gRW1pdCB3aGVuIHNoYXJlIGRpYWxvZyBpcyBjbG9zZWRcbiAgICAgIHRoaXMuY2xvc2VkLmVtaXQodGhpcy5zaGFyZUJ1dHRvbk5hbWUpXG4gICAgKTtcbiAgfVxuXG4gIGluaXQoY2hhbmdlcz86IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAvLyBBdm9pZCBTU1IgZXJyb3JcbiAgICBpZiAodGhpcy5fcGxhdGZvcm0uaXNCcm93c2VyKSB7XG5cbiAgICAgIGlmICghY2hhbmdlcyB8fCB0aGlzLl9zaGFyZUJ1dHRvbkNoYW5nZWQoY2hhbmdlc1snc2hhcmVCdXR0b25OYW1lJ10pKSB7XG4gICAgICAgIHRoaXMuX2NyZWF0ZVNoYXJlQnV0dG9uKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghY2hhbmdlcyB8fCB0aGlzLl91cmxDaGFuZ2VkKGNoYW5nZXNbJ3VybCddKSkge1xuICAgICAgICB0aGlzLnVybCA9IGdldFZhbGlkVXJsKFxuICAgICAgICAgIHRoaXMuYXV0b1NldE1ldGFcbiAgICAgICAgICAgID8gdGhpcy51cmwgfHwgdGhpcy5fZ2V0TWV0YVRhZ0NvbnRlbnQoJ29nOnVybCcpXG4gICAgICAgICAgICA6IHRoaXMudXJsLFxuICAgICAgICAgIHRoaXMuX2RvY3VtZW50LmRlZmF1bHRWaWV3LmxvY2F0aW9uLmhyZWZcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAodGhpcy5nZXRDb3VudCAmJiB0aGlzLnNoYXJlQnV0dG9uLnN1cHBvcnRTaGFyZUNvdW50KSB7XG4gICAgICAgICAgdGhpcy5zaGFyZUJ1dHRvbi5zaGFyZUNvdW50KHRoaXMudXJsKS5zdWJzY3JpYmUoKGNvdW50OiBudW1iZXIpID0+IHRoaXMuY291bnQuZW1pdChjb3VudCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMuaW5pdChjaGFuZ2VzKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3NoYXJlV2luZG93Q2xvc2VkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVNoYXJlQnV0dG9uKCkge1xuICAgIGNvbnN0IHNoYXJlQnV0dG9uRmFjdG9yeTogSVNoYXJlQnV0dG9uID0gdGhpcy5fc2hhcmUuY29uZmlnLnByb3BbdGhpcy5zaGFyZUJ1dHRvbk5hbWVdO1xuICAgIGNvbnN0IGJ1dHRvbjogU2hhcmVCdXR0b25CYXNlID0gc2hhcmVCdXR0b25GYWN0b3J5LmNyZWF0ZShcbiAgICAgIHNoYXJlQnV0dG9uRmFjdG9yeSxcbiAgICAgIC8vIFBhc3MgdGhlIHVybCBwcm9wZXJ0eSBhcyBhIGZ1bmN0aW9uLCBzbyB0aGUgYnV0dG9uIGNsYXNzIGFsd2F5cyBnZXRzIHRoZSByZWNlbnQgdXJsIHZhbHVlLlxuICAgICAgKCkgPT4gdGhpcy51cmwsXG4gICAgICB0aGlzLl9odHRwLFxuICAgICAgdGhpcy5fcGxhdGZvcm0sXG4gICAgICB0aGlzLl9kb2N1bWVudCxcbiAgICAgIHRoaXMuX3NoYXJlLndpbmRvd1NpemUsXG4gICAgICAvLyBUaGlzIGZ1bmN0aW9uIGlzIG1lYW50IGZvciB0aGUgY29weSBidXR0b25cbiAgICAgIChkaXNhYmxlZDogYm9vbGVhbikgPT4ge1xuICAgICAgICB0aGlzLnBvaW50ZXJFdmVudHMgPSBkaXNhYmxlZCA/ICdub25lJyA6ICdhdXRvJztcbiAgICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICB9LFxuICAgICAgLy8gTG9nZ2VyIHVzZWQgZm9yIGRlYnVnZ2luZ1xuICAgICAgKHRleHQ6IHN0cmluZykgPT4gdGhpcy5fc2hhcmUuY29uZmlnLmRlYnVnID8gY29uc29sZS5sb2codGV4dCkgOiBudWxsXG4gICAgKTtcbiAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAvLyBTZXQgc2hhcmUgYnV0dG9uIHByb3BlcnRpZXNcbiAgICAgIHRoaXMuc2hhcmVCdXR0b24gPSBidXR0b247XG5cbiAgICAgIC8vIFJlbW92ZSBwcmV2aW91cyBidXR0b24gY2xhc3NcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGBzYi0ke3RoaXMuX2J1dHRvbkNsYXNzfWApO1xuXG4gICAgICAvLyBBZGQgbmV3IGJ1dHRvbiBjbGFzc1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgYHNiLSR7dGhpcy5zaGFyZUJ1dHRvbk5hbWV9YCk7XG5cbiAgICAgIC8vIFNldCBidXR0b24gY3NzIGNvbG9yIHZhcmlhYmxlXG4gICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWJ1dHRvbi1jb2xvcicsIHRoaXMuc2hhcmVCdXR0b24uY29sb3IpO1xuXG4gICAgICAvLyBLZWVwIGEgY29weSBvZiB0aGUgY2xhc3MgZm9yIGZ1dHVyZSByZXBsYWNlbWVudFxuICAgICAgdGhpcy5fYnV0dG9uQ2xhc3MgPSB0aGlzLnNoYXJlQnV0dG9uTmFtZTtcblxuICAgICAgLy8gU2V0IGFyaWEtbGFiZWwgYXR0cmlidXRlXG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2FyaWEtbGFiZWwnLCBidXR0b24uYXJpYUxhYmVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihgW1NoYXJlQnV0dG9uc106IFRoZSBzaGFyZSBidXR0b24gJyR7dGhpcy5zaGFyZUJ1dHRvbk5hbWV9JyBkb2VzIG5vdCBleGlzdCFgKTtcbiAgICB9XG4gIH1cblxuICAvKiogR2V0IG1ldGEgdGFnIGNvbnRlbnQgKi9cbiAgcHJpdmF0ZSBfZ2V0TWV0YVRhZ0NvbnRlbnQoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG1ldGFVc2luZ1Byb3BlcnR5OiBIVE1MTWV0YUVsZW1lbnQgPSB0aGlzLl9tZXRhLmdldFRhZyhgcHJvcGVydHk9XCIke2tleX1cImApO1xuICAgIGlmIChtZXRhVXNpbmdQcm9wZXJ0eSkgcmV0dXJuIG1ldGFVc2luZ1Byb3BlcnR5LmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgIGNvbnN0IG1ldGFVc2luZ05hbWU6IEhUTUxNZXRhRWxlbWVudCA9IHRoaXMuX21ldGEuZ2V0VGFnKGBuYW1lPVwiJHtrZXl9XCJgKTtcbiAgICBpZiAobWV0YVVzaW5nTmFtZSkgcmV0dXJuIG1ldGFVc2luZ05hbWUuZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG4gIH1cblxuICBwcml2YXRlIF9zaGFyZUJ1dHRvbkNoYW5nZWQoY2hhbmdlOiBTaW1wbGVDaGFuZ2UpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY2hhbmdlICYmIChjaGFuZ2UuZmlyc3RDaGFuZ2UgfHwgY2hhbmdlLnByZXZpb3VzVmFsdWUgIT09IGNoYW5nZS5jdXJyZW50VmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXJsQ2hhbmdlZChjaGFuZ2U6IFNpbXBsZUNoYW5nZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy51cmwgfHwgKGNoYW5nZSAmJiBjaGFuZ2UucHJldmlvdXNWYWx1ZSAhPT0gY2hhbmdlLmN1cnJlbnRWYWx1ZSk7XG4gIH1cblxufVxuIl19