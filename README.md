#angular-stack-exchange-api

Lets you make easy ajax calls to the stackexchange api

###Usage

- Set the `angular-stack-exchange-api` as dependency
```javascript
angular.module('myApp', [
    'angular-stack-exchange-api'
]);
```
- Include the `SE` factory
```javascript
myApp.controller('ExampleCtrl',[
    'SE',
    function(SE) {
       //your code goes here
    }
]);
```
- Make any call you like
```javascript
SE.api('CALLDATA').then(function(a){
    console.log('response: ',a);
});
```

How the api exacly works can you read [here](https://api.stackexchange.com/docs).