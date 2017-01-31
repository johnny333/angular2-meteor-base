/**
 * Created by jakub on 20.02.17.
 */
Package.describe({
    name: 'account:roles',
    version: '0.0.1',
    summary: '',
    git: ''
});

Package.onUse(function (api) {
    api.use([
        'mongo', 'ddp',
        'jquery',
        'tracker', 'angular2-compilers',
        'reactive-var',
        'ecmascript',
        'underscore'
    ]);


});