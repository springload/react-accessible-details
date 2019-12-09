"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var details_1 = __importDefault(require("./details"));
var summary_1 = require("./summary");
exports.Summary = summary_1["default"];
exports.Context = react_1["default"].createContext({
    id: undefined,
    isOpen: false,
    setIsOpen: undefined
});
function Details(_a) {
    var children = _a.children, isOpen = _a.isOpen, isOpenDefault = _a.isOpenDefault, className = _a.className, onChange = _a.onChange, detailsId = _a.id;
    var id = react_1.useState(exports.generateId("Details"))[0];
    var _b = react_1.useState(isOpen !== undefined
        ? isOpen
        : isOpenDefault !== undefined
            ? isOpenDefault
            : false), _isOpen = _b[0], _setIsOpen = _b[1];
    var setIsOpen = function (isOpen) {
        _setIsOpen(isOpen);
        if (onChange) {
            onChange(isOpen);
        }
    };
    return (react_1["default"].createElement(exports.Context.Provider, { value: {
            id: id,
            isOpen: isOpen !== undefined ? isOpen : _isOpen,
            setIsOpen: setIsOpen
        } },
        react_1["default"].createElement(details_1["default"], { className: className, detailsId: detailsId }, children)));
}
exports.Details = Details;
var idCounter = 0;
exports.generateId = function (prefix) {
    idCounter++;
    return prefix + "_" + idCounter;
};
