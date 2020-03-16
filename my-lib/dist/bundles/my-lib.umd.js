(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('my-lib', ['exports', '@angular/core', 'rxjs'], factory) :
    (global = global || self, factory(global['my-lib'] = {}, global.ng.core, global.rxjs));
}(this, (function (exports, core, rxjs) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/hello.component/hello.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HelloComponent = /** @class */ (function () {
        function HelloComponent() {
        }
        HelloComponent.decorators = [
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
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
                return rxjs.of((/** @type {?} */ (result)));
            });
        };
        return BaseService;
    }());

    exports.BaseService = BaseService;
    exports.HelloComponent = HelloComponent;
    exports.MyLibModule = MyLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=my-lib.umd.js.map
