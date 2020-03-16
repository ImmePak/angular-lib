import { Component, NgModule } from '@angular/core';

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
                    template: ""
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
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: my-lib.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { HelloComponent, MyLibModule };
//# sourceMappingURL=my-lib.js.map
