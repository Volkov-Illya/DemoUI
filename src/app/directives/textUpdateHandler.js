// (function () {
//   'use strict';
//
//   angular
//     .module('todoListUi')
//     .directive('textUpdateHandler', function ($timeout) {
//       return {
//         restrict: 'A',
//         scope: {
//           textUpdateHandler: '&'
//         },
//         link: function (scope, elm, attrs) {
//           if (attrs.type === 'radio' || attrs.type === 'checkbox') return;
//
//           var oldValue = null;
//
//           elm.bind('dblclick', function (e) {
//             // var keyCode = e.which || e.keyCode;
//             // if (keyCode === 13 && elm[0].type !== 'textarea') {
//               elm.blur();
//             // }
//           });
//
//           elm.bind('focus', function () {
//             $timeout(function () {
//               oldValue = elm.val().trim();
//             });
//             // scope.$apply(function() { });
//           });
//
//           elm.blur('blur', valueChangeHandler);
//
//           function valueChangeHandler() {
//             $timeout(function () {
//               var newValue = elm.val();
//               if (newValue != oldValue) {
//                 scope.textUpdateHandler({oldVal: oldValue, newVal: newValue});
//               }
//             });
//           }
//         }
//       };
//     });
// })();
