import { Component, NgModule } from '@angular/core';
import { of } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/hello.component/hello.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HelloComponent {
}
HelloComponent.decorators = [
    { type: Component, args: [{
                selector: 'hello-cmp',
                template: "<h1>AAAAAAAAAAAAAAAAAAAAAA</h1>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/my-lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MyLibModule {
}
MyLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [HelloComponent],
                imports: [],
                exports: [HelloComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BaseService {
    /**
     * @protected
     * @template T
     * @param {?=} operation
     * @param {?=} result
     * @return {?}
     */
    handleError(operation = 'operation', result) {
        return (/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            console.log(operation);
            console.error(error);
            return of((/** @type {?} */ (result)));
        });
    }
}

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
