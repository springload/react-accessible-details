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
var index_1 = require("./index");
var summary_1 = __importDefault(require("./summary"));
function Details(_a) {
    var detailsId = _a.detailsId, children = _a.children, className = _a.className;
    var _b = react_1.useState(false), isScriptingEnabled = _b[0], setIsScriptingEnabled = _b[1];
    react_1.useEffect(function () { return setIsScriptingEnabled(true); }, []);
    return (react_1["default"].createElement(index_1.Context.Consumer, null, function (value) {
        var kids = react_1["default"].Children.toArray(children);
        var SummaryChildren = kids.filter(function (kid) {
            // @ts-ignore
            return kid && kid.type && kid.type.toString() === summary_1["default"].toString();
        });
        var OtherChildren = kids.filter(function (kid) {
            // @ts-ignore
            return (kid && !kid.type) ||
                // @ts-ignore
                (kid && kid.type && kid.type.toString() !== summary_1["default"].toString());
        });
        return (react_1["default"].createElement("details", { open: value.isOpen, role: "group", className: className || undefined, id: detailsId },
            SummaryChildren,
            !isScriptingEnabled || value.isOpen ? (react_1["default"].createElement("div", null, OtherChildren)) : null));
    }));
}
exports["default"] = Details;
