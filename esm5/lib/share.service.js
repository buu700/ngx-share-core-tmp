/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SHARE_BUTTONS_CONFIG } from './share.models';
import { SHARE_BUTTONS } from './share.defaults';
import { mergeDeep } from './utils';
import * as i0 from "@angular/core";
import * as i1 from "./share.models";
var ShareService = /** @class */ (function () {
    function ShareService(config) {
        /**
         * Global config that applies on all share buttons in the app
         */
        this.config = {
            prop: SHARE_BUTTONS,
            theme: 'default',
            include: [],
            exclude: [],
            size: 0,
            autoSetMeta: true,
            windowWidth: 800,
            windowHeight: 500,
            moreButtonIcon: 'ellipsis-h',
            lessButtonIcon: 'minus'
        };
        /**
         * Stream that emits when config changes
         */
        this.config$ = new BehaviorSubject(this.config);
        if (config) {
            this.setConfig(config);
        }
    }
    Object.defineProperty(ShareService.prototype, "prop", {
        /**
         * Share buttons properties, used to get the text, color and icon of each button.
         */
        get: /**
         * Share buttons properties, used to get the text, color and icon of each button.
         * @return {?}
         */
        function () {
            return this.config.prop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareService.prototype, "windowSize", {
        get: /**
         * @return {?}
         */
        function () {
            return "width=" + this.config.windowWidth + ", height=" + this.config.windowHeight;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} config
     * @return {?}
     */
    ShareService.prototype.setConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.config = mergeDeep(this.config, config);
        this.config$.next(this.config);
    };
    ShareService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ShareService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [SHARE_BUTTONS_CONFIG,] }] }
    ]; };
    /** @nocollapse */ ShareService.ngInjectableDef = i0.defineInjectable({ factory: function ShareService_Factory() { return new ShareService(i0.inject(i1.SHARE_BUTTONS_CONFIG, 8)); }, token: ShareService, providedIn: "root" });
    return ShareService;
}());
export { ShareService };
if (false) {
    /**
     * Global config that applies on all share buttons in the app
     * @type {?}
     */
    ShareService.prototype.config;
    /**
     * Stream that emits when config changes
     * @type {?}
     */
    ShareService.prototype.config$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQXNCLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxTQUFTLENBQUM7OztBQUVwQztJQXNCRSxzQkFBc0QsTUFBMEI7Ozs7UUFoQmhGLFdBQU0sR0FBdUI7WUFDM0IsSUFBSSxFQUFFLGFBQWE7WUFDbkIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsT0FBTyxFQUFFLEVBQUU7WUFDWCxPQUFPLEVBQUUsRUFBRTtZQUNYLElBQUksRUFBRSxDQUFDO1lBQ1AsV0FBVyxFQUFFLElBQUk7WUFDakIsV0FBVyxFQUFFLEdBQUc7WUFDaEIsWUFBWSxFQUFFLEdBQUc7WUFDakIsY0FBYyxFQUFFLFlBQVk7WUFDNUIsY0FBYyxFQUFFLE9BQU87U0FDeEIsQ0FBQzs7OztRQUdGLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFHekMsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUtELHNCQUFJLDhCQUFJO1FBSFI7O1dBRUc7Ozs7O1FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksb0NBQVU7Ozs7UUFBZDtZQUNFLE9BQU8sV0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsaUJBQVksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFjLENBQUM7UUFDaEYsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsZ0NBQVM7Ozs7SUFBVCxVQUFVLE1BQTBCO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dCQTFDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dEQW9CYyxRQUFRLFlBQUksTUFBTSxTQUFDLG9CQUFvQjs7O3VCQTVCdEQ7Q0FrREMsQUE1Q0QsSUE0Q0M7U0F6Q1ksWUFBWTs7Ozs7O0lBR3ZCLDhCQVdFOzs7OztJQUdGLCtCQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2hhcmVCdXR0b25zQ29uZmlnLCBTSEFSRV9CVVRUT05TX0NPTkZJRyB9IGZyb20gJy4vc2hhcmUubW9kZWxzJztcbmltcG9ydCB7IFNIQVJFX0JVVFRPTlMgfSBmcm9tICcuL3NoYXJlLmRlZmF1bHRzJztcbmltcG9ydCB7IG1lcmdlRGVlcCB9IGZyb20gJy4vdXRpbHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTaGFyZVNlcnZpY2Uge1xuXG4gIC8qKiBHbG9iYWwgY29uZmlnIHRoYXQgYXBwbGllcyBvbiBhbGwgc2hhcmUgYnV0dG9ucyBpbiB0aGUgYXBwICovXG4gIGNvbmZpZzogU2hhcmVCdXR0b25zQ29uZmlnID0ge1xuICAgIHByb3A6IFNIQVJFX0JVVFRPTlMsXG4gICAgdGhlbWU6ICdkZWZhdWx0JyxcbiAgICBpbmNsdWRlOiBbXSxcbiAgICBleGNsdWRlOiBbXSxcbiAgICBzaXplOiAwLFxuICAgIGF1dG9TZXRNZXRhOiB0cnVlLFxuICAgIHdpbmRvd1dpZHRoOiA4MDAsXG4gICAgd2luZG93SGVpZ2h0OiA1MDAsXG4gICAgbW9yZUJ1dHRvbkljb246ICdlbGxpcHNpcy1oJyxcbiAgICBsZXNzQnV0dG9uSWNvbjogJ21pbnVzJ1xuICB9O1xuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIGNvbmZpZyBjaGFuZ2VzICovXG4gIGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuY29uZmlnKTtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KFNIQVJFX0JVVFRPTlNfQ09ORklHKSBjb25maWc6IFNoYXJlQnV0dG9uc0NvbmZpZykge1xuICAgIGlmIChjb25maWcpIHtcbiAgICAgIHRoaXMuc2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlIGJ1dHRvbnMgcHJvcGVydGllcywgdXNlZCB0byBnZXQgdGhlIHRleHQsIGNvbG9yIGFuZCBpY29uIG9mIGVhY2ggYnV0dG9uLlxuICAgKi9cbiAgZ2V0IHByb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLnByb3A7XG4gIH1cblxuICBnZXQgd2luZG93U2l6ZSgpIHtcbiAgICByZXR1cm4gYHdpZHRoPSR7dGhpcy5jb25maWcud2luZG93V2lkdGh9LCBoZWlnaHQ9JHt0aGlzLmNvbmZpZy53aW5kb3dIZWlnaHR9YDtcbiAgfVxuXG4gIHNldENvbmZpZyhjb25maWc6IFNoYXJlQnV0dG9uc0NvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gbWVyZ2VEZWVwKHRoaXMuY29uZmlnLCBjb25maWcpO1xuICAgIHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuY29uZmlnKTtcbiAgfVxuXG59XG4iXX0=