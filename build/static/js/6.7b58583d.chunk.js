(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{119:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABUJJREFUWEdlV+uOFkUQre4e3wMUFFm8/ULIRkPcZBPjShBRZCFGo+//BF+XOZfqmW/dzXxz73Pq1Knqnvb19fuMiGj8GZEtonX+6GIfEb0F/qN5C7zCN/ibeYrEpZyRMyNrP2fkacacMyauneo+Hp14IRoJcLwWQUz84NgkvG8EN6mFjIMEA+3CIHmKmEHgPGXMeSKgtozJ50E0o31zfZvJsEViAS0VWrRBKaxAqSUFMAjRIwkWACkFAA51DE5CUGiCwET80b66usWeQUviHjEgeI+E9G3w0k5OZPkygS09OWBwRwqM0zFyq0FpFD2F/PLqXSq/aZC+5IcXet+J7CoJd/0BGGQ4MEAV5S67pUfeAXxG4Ie3SeetKLtM2LVv3Et+XW/RmDLaT9JX9IgOaUgYTwSYEkhOI/pagkiTB568+F1VYIcLsICRfxHAfaViMAU4dAIUvU2l6ACKB070Rc6T0+Pc455cG+3i+zfJ6HDNwJCdJAxe51Clt6ZSpQIaiGBIoaUFAR5X9DwHB6nRqgrw2sXlr5klPwCgNvYFXgqQnAxZ4OBAFRi9KgKDE3jlWmSYGrFw5mzCR5e/rBSU6foYLD2QQPQkg8qoVDBdd31YaQDOTqA56h0YJCCY289nz1+JgA02CGjwMQzeYxwJ4FlWjjuhVYDJpEA1J6WF1yiAu1+pgFEePnsJPrv0vcXYEHGPjxi5VdhQniK32vJZR9ybUoPxnGfK7+OGY/sGluHrD579TC0kf4sBQG/b1qNj61DA1cDmdJwXakx0PUlbgAo7oiHwOdW4MqJbfrazj5/+lK2hzDDvSGqAYSOBA6FVHWzTGM7VU3YoqYsEwV1uOVkoDJbWxXmLdv/pTWqOAbDAtw1qDKZC1+wFd0bNlioBHKsSXJJuSgKrktuVoXtKGRzf//aGcwHqG4NtA1s3+FikVBF7g1pzg32AMSk1/mC2Ilj5BxmDs4DKA/ee36SqqsWgB0zAKUBVDCricjTR5YNjPbrEqQkNfwDlvYzOFFQaItq9y5foyiRMsKMKB09U/vGMWrLas72sGXLNzALGOQzHuoEHzuTXC+3edyCgFKALbnR8i80VgZQAHOdrnqh5odYIqyet1nhmOE60CJJVguzYmPTACzUi+Go0pYHgVkKqoAW4H9iAnJxKAa3nVHLUswAAqnXDIsF7VT0ow6vXMmFwHXKHhNLC6JvmCRrxID9ISPD6Owy++k5qtk/tRdckP7l+sxQoFTYTYUW4TUMRVsph0yxa80KVI545ABhMCoiEF3M6f/Cj1gMEP6RCJKyI/fE/AoDHi7WodWzLmgTjzQVc6WAXBNGHN3+sFKw0OB0431qP0ZIEOwa6qwKUrGV7LWyKiAnskUMvz4ZuBO3TV7esAq97YySiTqqxFMFkdUZAfUPNyAvUWtQcvhcq14wUZNifUI4uQVx/9PpDWcWgMgoJpIjgfBGgCiKglbR6Aq+sarDzqYSb0TKhJyuqFdE+/+1P2pEKJBfjO7Bdu0gUXqWCIZYSXqSSTHW7Q8fDuoAq7bMicR+//UsLEhJA9CCgYyjA6Gu/V7v9IAKgD4MKeV+oSCAuGG3CvTXr4Yx28e7vcwIGXwQ4oyEl6OOq8eqcO+CxKbkP1MdWdQkqsDekmo3a4/f/pCYIA3kKZfR1jHsTiuwEqv7Xcv7QD2jM/VOD76oc3QOqPIH75MO/8sAh8kpFP4mENvVx2e2wMl7VsDekO9nw/C8S+1rAnfALEigFWvSc0adBuddKRik5msu931/SqyOucvTHkz3EmY8p8DJNHxPxH/ZjHOXsirKUAAAAAElFTkSuQmCC"},120:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(0),i=a.n(c),s=a(14),r=a(15),o=a(47),l=a(119),A=a.n(l),m=a(48);a(120);t.default=i.a.memo(function(){var e=Object(c.useState)("all"),t=Object(n.a)(e,2),a=t[0],l=t[1],d=Object(c.useState)(!1),u=Object(n.a)(d,2),E=u[0],v=u[1];document.title=a.toString().toUpperCase()+" - EVENTS",Object(c.useEffect)(function(){document.querySelectorAll(".tab").forEach(function(e){return e.classList.remove("is-active")}),document.querySelector("."+a).classList.add("is-active")},[a]);var g=function(){v(!0)},f=Object(c.useMemo)(function(){return"all"===a?m.a:m.a.filter(function(e){return e.keyword.toString().split(",").includes(a.toString())})},[a]);return i.a.createElement("div",{className:"events"},i.a.createElement("div",{className:"eventTitle"},i.a.createElement(r.a,{icon:"tabler:timeline-event"})," ",document.title),i.a.createElement("div",{className:"border"}),i.a.createElement("div",{className:"navigation d-flex justify-content-center container"},m.b.map(function(e,t){return i.a.createElement(s.b,{className:e.class+" tab",onClick:function(){return l(e.class)},key:t},i.a.createElement("img",{src:e.logo,alt:"",width:50}))})),i.a.createElement("div",{className:"cardContent"},f.length?f.map(function(e,t){return i.a.createElement("div",{key:t,id:"card-".concat(t),className:"cardDiv d-flex justify-content-center"},function(e){return i.a.createElement(o.a,{className:"eventTiltDiv",tiltReverse:!0,scale:1.2},i.a.createElement("div",{className:"eventCard"},i.a.createElement("div",{className:"eventDiv"},i.a.createElement("div",{className:"imgDiv p-2 "},i.a.createElement("img",{src:E?e.imgsrc:A.a,alt:e.title,className:"img-fluid rounded w-100",loading:"lazy"})),i.a.createElement("div",{className:"eventContent p-1"},i.a.createElement(r.a,{icon:"icons8:idea"})," ",e.description))),i.a.createElement("img",{src:e.imgsrc,alt:e.title,onLoad:g,style:{display:"none"}}))}(e))}):"Stay Tuned For Further Updates!"))})}}]);
//# sourceMappingURL=6.7b58583d.chunk.js.map