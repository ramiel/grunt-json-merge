[![Build Status](https://travis-ci.org/ramiel/grunt-json-merge.svg?branch=master)](https://travis-ci.org/ramiel/grunt-json-merge)

# grunt-json-merge

> Grunt plugin to merge JSON files handling override of keys

## Getting Started
This plugin requires Grunt `>=0.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-json-merge --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-json-merge');
```

## The "json_merge" task

### Overview
In your project's Gruntfile, add a section named `json_merge` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  json_merge: {
    options: {
      replacer: null,
      space: " "
    },
    your_target: {
      files: { 'dest/merged.json': ['src/a.json','src/b.json'] },
    },
  },
});
```

### Options

#### options.replacer
Type: `Function` or `Array` 
Default value: `null`

Replacer option for JSON.stringify as specified in [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

#### options.space
Type: `String`
Default value: `\t`

Spacer string for JSON.stringify as specified in [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

### Usage Examples

##General
Json files will be merged and colliding keys will be overwrite from latest to first file defined in src parameter.
So in this case:
```js
grunt.initConfig({
  json_merge: {
    files: { 'dest/merged.json': ['src/a.json','src/b.json'] },
  },
});
```
Properties in file `b` will overwrite properties in file `a`.
For further information read documentation of [underscoreDeepExtend](https://github.com/pygy/underscoreDeepExtend) which is internally used to merge properties


#### Default Options
Merge all files `.json` in a direcotry to create a merged file specified as destination

```js
grunt.initConfig({
  json_merge: {
    options: {},
    files: {
      'dest/merged.json': ['src/*.json'],
    },
  },
});
```

#### Custom Options
Merge all files `.json` in a direcotry to create a merged file specified as destination. In this case we use custom spaces which are four spaes as you can see in options

```js
grunt.initConfig({
  json_merge: {
    options: {
      space: '    '
    },
    files: {
      'dest/merged.json': ['src/*.json'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.2.2
  - Readme improvements
0.2.0
  - Powerful merge
0.1.0
  - Base functionalities
