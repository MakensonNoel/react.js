"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tic",{

/***/ "./pages/tic.jsx":
/*!***********************!*\
  !*** ./pages/tic.jsx ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_assets_projects_tictactoe_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/assets/projects/tictactoe.png */ \"./public/assets/projects/tictactoe.png\");\n/* harmony import */ var _components_TicTacToe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TicTacToe */ \"./components/TicTacToe.jsx\");\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ri */ \"./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\nvar _this = undefined;\n\n\n\n //Tic Tac Toe\n\n\n\n\nvar TicTacToePage = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-[50vh] relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: \"absolute\",\n                        layout: \"fill\",\n                        objectFit: \"cover\",\n                        src: _public_assets_projects_tictactoe_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"/\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"py-2\",\n                                children: \"Tic Tac Toe\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Next.js / TailwindCSS \"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Project\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Tic Tac Toe\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TicTacToe__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 20\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Overview\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"This Tic Tac Toe game is implemented as a component in a Next.js application, allowing users to play against a computer-controlled player. The game board is rendered using a grid layout, and the styling is done using Tailwind CSS classes.\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://github.com/makensonn/makensonn.github.io/blob/master/components/TicTacToe.jsx\",\n                                target: \"_blank\",\n                                rel: \"noreferrer\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"px-8 py-2 mt-4 mr-8\",\n                                    children: \"Code\"\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/tic\",\n                                target: \"_blank\",\n                                rel: \"noreferrer\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"px-8 py-2 mt-4\",\n                                    children: \"Demo\"\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-center font-bold pb-2\",\n                                    children: \"Technologies\"\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"grid grid-cols-3 md:grid-cols-1\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-gray-600 py-2 flex items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__.RiRadioButtonFill, {\n                                                    className: \"pr-1\"\n                                                }, void 0, false, {\n                                                    fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 17\n                                                }, _this),\n                                                \" Next.js\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-gray-600 py-2 flex items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__.RiRadioButtonFill, {\n                                                    className: \"pr-1\"\n                                                }, void 0, false, {\n                                                    fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                                                    lineNumber: 76,\n                                                    columnNumber: 17\n                                                }, _this),\n                                                \" TailwindCSS\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center py-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    href: \"/#projects\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_7__.HiOutlineChevronDoubleLeft, {\n                                className: \"text-[#0a192f]\",\n                                size: 30\n                            }, void 0, false, {\n                                fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                                lineNumber: 89,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                            lineNumber: 88,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                    lineNumber: 86,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/makensonn.github.io/pages/tic.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this);\n};\n_c = TicTacToePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TicTacToePage);\nvar _c;\n$RefreshReg$(_c, \"TicTacToePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsMkJBQTJCOzBCQUN0Qyw0RUFBQ0osa0RBQUk7b0JBQUNjLElBQUksRUFBQyxZQUFZOzhCQUNyQiw0RUFBQ0QsR0FBQztrQ0FDQSw0RUFBQ1YsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLGdHQUFnRztzQ0FDN0csNEVBQUNILHNFQUEwQjtnQ0FDekJHLFNBQVMsRUFBQyxnQkFBZ0I7Z0NBQzFCYyxJQUFJLEVBQUUsRUFBRTs7Ozs7cUNBQ1I7Ozs7O2lDQUNFOzs7Ozs2QkFDSjs7Ozs7eUJBQ0M7Ozs7O3FCQUNIOzs7Ozs7YUFHSixDQUNOO0NBQ0g7QUE1RktoQixLQUFBQSxhQUFhO0FBOEZuQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RpYy5qc3g/MTU3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRpY0ltZyBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL3Byb2plY3RzL3RpY3RhY3RvZS5wbmcnOyAvL1RpYyBUYWMgVG9lXG5pbXBvcnQgVGljVGFjVG9lIGZyb20gJy4uL2NvbXBvbmVudHMvVGljVGFjVG9lJztcbmltcG9ydCB7IFJpUmFkaW9CdXR0b25GaWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvcmknO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEhpT3V0bGluZUNoZXZyb25Eb3VibGVMZWZ0IH0gZnJvbSAncmVhY3QtaWNvbnMvaGknO1xuXG5jb25zdCBUaWNUYWNUb2VQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgaC1zY3JlZW4nPlxuXG4gICAgICB7LypIZWFkZXIqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgaC1bNTB2aF0gcmVsYXRpdmUnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLVs1MHZoXSBiZy1ibGFjay83MCB6LTEwJyAvPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBjbGFzc05hbWU9J2Fic29sdXRlJyBcbiAgICAgICAgICBsYXlvdXQ9J2ZpbGwnXG4gICAgICAgICAgb2JqZWN0Rml0PSdjb3ZlcidcbiAgICAgICAgICBzcmM9e3RpY0ltZ31cbiAgICAgICAgICBhbHQ9Jy8nXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSB0b3AtWzcwJV0gbWF4LXctWzEyNDBweF0gdy1mdWxsIGxlZnQtWzUwJV0gcmlnaHQtWzUwJV0gdHJhbnNsYXRlLXgtWy01MCVdIHRyYW5zbGF0ZS15LVstNTAlXSB0ZXh0LXdoaXRlIHotMTAgcC0yJz5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdweS0yJz5UaWMgVGFjIFRvZTwvaDI+XG4gICAgICAgICAgPGgzPk5leHQuanMgLyBUYWlsd2luZENTUyA8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qSGVhZGVyKi99XG4gICAgXG4gICAgICB7LyogUHJvamVjdCBPdmVydmlldyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYXgtdy1bMTI0MHB4XSBteC1hdXRvIHAtMiBncmlkIG1kOmdyaWQtY29scy01IGdhcC04IHB5LTgnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNwYW4tNCc+XG4gICAgICAgICAgPHA+UHJvamVjdDwvcD5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBUaWMgVGFjIFRvZVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgPFRpY1RhY1RvZSAvPiBcblxuICAgICAgICAgIDxicj48L2JyPjxicj48L2JyPlxuICAgICAgICAgIDxoMj5PdmVydmlldzwvaDI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBUaGlzIFRpYyBUYWMgVG9lIGdhbWUgaXMgaW1wbGVtZW50ZWQgYXMgYSBjb21wb25lbnQgaW4gYSBOZXh0LmpzIGFwcGxpY2F0aW9uLCBhbGxvd2luZyB1c2VycyBcbiAgICAgICAgICAgIHRvIHBsYXkgYWdhaW5zdCBhIGNvbXB1dGVyLWNvbnRyb2xsZWQgcGxheWVyLiBUaGUgZ2FtZSBib2FyZCBpcyByZW5kZXJlZCB1c2luZyBhIGdyaWQgbGF5b3V0LCBcbiAgICAgICAgICAgIGFuZCB0aGUgc3R5bGluZyBpcyBkb25lIHVzaW5nIFRhaWx3aW5kIENTUyBjbGFzc2VzLlxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgXG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL21ha2Vuc29ubi9tYWtlbnNvbm4uZ2l0aHViLmlvL2Jsb2IvbWFzdGVyL2NvbXBvbmVudHMvVGljVGFjVG9lLmpzeCdcbiAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgcmVsPSdub3JlZmVycmVyJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdweC04IHB5LTIgbXQtNCBtci04Jz5Db2RlPC9idXR0b24+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPScvdGljJ1xuICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICByZWw9J25vcmVmZXJyZXInXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3B4LTggcHktMiBtdC00Jz5EZW1vPC9idXR0b24+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qUHJvamVjdCBPdmVydmlldyovfVxuXG4gICAgICAgIHsvKlRlY2hub2xvZ2llcyovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNwYW4tNCBtZDpjb2wtc3Bhbi0xIHNoYWRvdy14bCBzaGFkb3ctZ3JheS00MDAgcm91bmRlZC14bCBweS00Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncC0yJz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgZm9udC1ib2xkIHBiLTInPlRlY2hub2xvZ2llczwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0zIG1kOmdyaWQtY29scy0xJz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNjAwIHB5LTIgZmxleCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgIDxSaVJhZGlvQnV0dG9uRmlsbCBjbGFzc05hbWU9J3ByLTEnIC8+IE5leHQuanNcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtZ3JheS02MDAgcHktMiBmbGV4IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgPFJpUmFkaW9CdXR0b25GaWxsIGNsYXNzTmFtZT0ncHItMScgLz4gVGFpbHdpbmRDU1NcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogVGVjaG5vbG9naWVzICovfVxuICAgICAgXG4gICAgICB7LyogQmFjayBCdXR0b24gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBweS0xMic+XG4gICAgICAgICAgPExpbmsgaHJlZj0nLyNwcm9qZWN0cyc+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdW5kZWQtZnVsbCBzaGFkb3ctbGcgc2hhZG93LWdyYXktNDAwIHAtNCBjdXJzb3ItcG9pbnRlciBob3ZlcjpzY2FsZS0xMTAgZWFzZS1pbiBkdXJhdGlvbi0zMDAnPlxuICAgICAgICAgICAgICAgIDxIaU91dGxpbmVDaGV2cm9uRG91YmxlTGVmdFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LVsjMGExOTJmXSdcbiAgICAgICAgICAgICAgICAgIHNpemU9ezMwfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICB7LyogQmFjayBCdXR0b24gKi99XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpY1RhY1RvZVBhZ2U7Il0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJ0aWNJbWciLCJUaWNUYWNUb2UiLCJSaVJhZGlvQnV0dG9uRmlsbCIsIkxpbmsiLCJIaU91dGxpbmVDaGV2cm9uRG91YmxlTGVmdCIsIlRpY1RhY1RvZVBhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJzcmMiLCJhbHQiLCJoMiIsImgzIiwicCIsImJyIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJidXR0b24iLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tic.jsx\n"));

/***/ })

});