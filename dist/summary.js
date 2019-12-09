"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var index_1 = require("./index");
var KEYS = {
    ENTER: 13,
    SPACE: 32
};
function Summary(_a) {
    var id = _a.id, children = _a.children, className = _a.className;
    return (react_1["default"].createElement(index_1.Context.Consumer, null, function (value) {
        return (react_1["default"].createElement("summary", { id: id, role: "button", "aria-expanded": value.isOpen, tabIndex: 0, onClick: function (e) {
                e.preventDefault();
                if (!value.setIsOpen)
                    return;
                value.setIsOpen(!value.isOpen);
            }, onKeyDown: function (e) {
                if ([KEYS.ENTER, KEYS.SPACE].indexOf(e.keyCode) !== -1) {
                    e.preventDefault();
                    if (!value.setIsOpen)
                        return;
                    value.setIsOpen(!value.isOpen);
                }
            }, className: className || undefined }, children));
    }));
}
exports["default"] = Summary;
