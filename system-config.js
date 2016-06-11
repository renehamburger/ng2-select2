/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    '@jQuery': 'vendor/jquery/dist',
    '@select2': 'vendor/select2/dist/js'
};
/** User packages configuration. */
var packages = {
    '@jQuery': {
        main: 'jquery.min.js',
        format: 'global',
        defaultExtension: 'js'
    },
    '@select2': {
        main: 'select2.min.js',
        format: 'global',
        defaultExtension: 'js'
    }
};
var meta = {
    '@select2': {
        deps: ['@jQuery']
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app/shared',
    'app/demo',
    'select2'
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages, meta: meta });
