Prevent Double Click
======

AngularJS directive prevents a form getting submitted twice
-----------------------------------------------------------------


Setup
-----
1. Get the file
    * Download and copy the  `src/preventDoubleClick.js` file

2. Include the  `src/preventDoubleClick.js` file in your index.html
3. Include add `preventDoubleClick` as  a dependency in you app

Something like this:
```
<!doctype html>
<html ng-app="myApp">
<head>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.3/angular.min.js"></script>

    <script>
        var myApp = angular.module('myApp', ['preventDoubleClick']);
    </script>
    ...
</head>
<body>
    ...
</body>
</html>
```


# Directives


## preventDouble

Add directive to your submit button

```
 <button prevent-double>
```

If you have more than on button on a page you can specify an ID

```
 <button prevent-double="newItemForm">
```



## To Release

Inject the preventDoubleClick service into your controller
Call the enable method

```
 .controller('myController', ['$scope', 'preventDoubleClick', function ($scope, preventDoubleClick) {

             if (!form.$valid) {
                 preventDoubleClick.enable();
                 return;
             }


             $http.get().then(
             function() { },
             function(){
               //Something went wrong
              preventDoubleClick.enable('newItemForm');
             })
 }]);

```



Download on Github
------------------
Version 0.0.1: https://github.com/snapjay/preventDoubleClick



License
-------

This module is licensed using the MIT License:

```
The MIT License (MIT)

Copyright (c) 2013 Dan Shreim

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```



Credit
------
Dan Shreim <br />
<a href="http://www.twitter.com/snapjay/">@snapjay</a> <br />
http://snapjay.com
If you use the script, please let me know @snapjay;  Don't worry, I won't ask for anything!