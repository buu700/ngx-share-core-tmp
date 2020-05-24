/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { PlatformModule } from '@angular/cdk/platform';
import { ShareDirective } from './share-button.directive';
import { ShareCountPipe } from './share-count.pipe';
import { SHARE_BUTTONS_CONFIG } from './share.models';
var ShareModule = /** @class */ (function () {
    function ShareModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    ShareModule.withConfig = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: ShareModule,
            providers: [
                { provide: SHARE_BUTTONS_CONFIG, useValue: config }
            ]
        };
    };
    ShareModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        PlatformModule
                    ],
                    declarations: [
                        ShareDirective,
                        ShareCountPipe
                    ],
                    exports: [
                        ShareDirective,
                        ShareCountPipe
                    ]
                },] }
    ];
    return ShareModule;
}());
export { ShareModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1zaGFyZS9jb3JlLyIsInNvdXJjZXMiOlsibGliL3NoYXJlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLG9CQUFvQixFQUFzQixNQUFNLGdCQUFnQixDQUFDO0FBRTFFO0lBQUE7SUFzQkEsQ0FBQzs7Ozs7SUFSUSxzQkFBVTs7OztJQUFqQixVQUFrQixNQUEyQjtRQUMzQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLFdBQVc7WUFDckIsU0FBUyxFQUFFO2dCQUNULEVBQUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUM7YUFDbEQ7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBckJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsY0FBYztxQkFDZjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osY0FBYzt3QkFDZCxjQUFjO3FCQUNmO29CQUNELE9BQU8sRUFBRTt3QkFDUCxjQUFjO3dCQUNkLGNBQWM7cUJBQ2Y7aUJBQ0Y7O0lBVUQsa0JBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQVRZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm1Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuXG5pbXBvcnQgeyBTaGFyZURpcmVjdGl2ZSB9IGZyb20gJy4vc2hhcmUtYnV0dG9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTaGFyZUNvdW50UGlwZSB9IGZyb20gJy4vc2hhcmUtY291bnQucGlwZSc7XG5pbXBvcnQgeyBTSEFSRV9CVVRUT05TX0NPTkZJRywgU2hhcmVCdXR0b25zQ29uZmlnIH0gZnJvbSAnLi9zaGFyZS5tb2RlbHMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUGxhdGZvcm1Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU2hhcmVEaXJlY3RpdmUsXG4gICAgU2hhcmVDb3VudFBpcGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFNoYXJlRGlyZWN0aXZlLFxuICAgIFNoYXJlQ291bnRQaXBlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVNb2R1bGUge1xuICBzdGF0aWMgd2l0aENvbmZpZyhjb25maWc/OiBTaGFyZUJ1dHRvbnNDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFNoYXJlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtwcm92aWRlOiBTSEFSRV9CVVRUT05TX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZ31cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=