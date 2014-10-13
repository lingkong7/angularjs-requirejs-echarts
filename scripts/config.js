requirejs.config({
  appDir: '.',
  baseUrl: 'scripts',
  // Set paths
  paths:{
    'angular':              ['../vendor/angular/angular'],
    'angular-route':        ['../vendor/angular-route/angular-route.min'],
    'bootstrap':            ['../vendor/bootstrap-3.0.1/js/bootstrap.min'],
    'echarts': '../vendor/echarts/echarts',
    "echarts/chart/bar": '../vendor/echarts/echarts',
    'echarts/chart/scatter': '../vendor/echarts/echarts',
    'echarts/chart/k': '../vendor/echarts/echarts',
    'echarts/chart/pie': '../vendor/echarts/echarts',
    'echarts/chart/radar': '../vendor/echarts/echarts',
    'echarts/chart/map': '../vendor/echarts/echarts' ,
    'echarts/chart/chord': '../vendor/echarts/echarts',
    'echarts/chart/force': '../vendor/echarts/echarts',
    zrender: '../vendor/echarts/echarts',
    'domReady':             ['../vendor/requirejs-domready/domReady'],
    'jquery':               ['../vendor/jquery-1.10.2/jquery.min']
  },
  // Set dependencies
  shim: {
    'angular':              {exports: 'angular'},
    'angular-route':        ['angular'],
    'bootstrap':            ['jquery']
  }
});
