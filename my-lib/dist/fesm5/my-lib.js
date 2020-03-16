import { Component, NgModule } from '@angular/core';
import { of } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/hello.component/hello.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HelloComponent = /** @class */ (function () {
    function HelloComponent() {
    }
    HelloComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hello-cmp',
                    template: "<h1>AAAAAAAAAAAAAAAAAAAAAA</h1>"
                }] }
    ];
    return HelloComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/my-lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MyLibModule = /** @class */ (function () {
    function MyLibModule() {
    }
    MyLibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [HelloComponent],
                    imports: [],
                    exports: [HelloComponent]
                },] }
    ];
    return MyLibModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BaseService = /** @class */ (function () {
    function BaseService() {
    }
    /**
     * @protected
     * @template T
     * @param {?=} operation
     * @param {?=} result
     * @return {?}
     */
    BaseService.prototype.handleError = /**
     * @protected
     * @template T
     * @param {?=} operation
     * @param {?=} result
     * @return {?}
     */
    function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            console.log(operation);
            console.error(error);
            return of((/** @type {?} */ (result)));
        });
    };
    return BaseService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: my-lib.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BaseService, HelloComponent, MyLibModule };
//# sourceMappingURL=my-lib.js.map
