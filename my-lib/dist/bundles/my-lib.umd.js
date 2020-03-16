(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('my-lib', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['my-lib'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

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
            { type: core.NgModule, args: [{
                        declarations: [HelloComponent],
                        imports: [],
                        exports: [HelloComponent]
                    },] }
        ];
        return MyLibModule;
    }());

    exports.HelloComponent = HelloComponent;
    exports.MyLibModule = MyLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=my-lib.umd.js.map
