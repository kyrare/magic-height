# jQuery MagicHeight Plugin

## Getting Started

#### 1.1. Installation with Package Managers

```shell
bower install magic-height
```

```shell
npm install magic-height
```

#### 1.2. The Basics
Include the jQuery library and plugin:

```html
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="dist/jquery.magic-height.min.js"></script>
```

Html markup:

```html
<div class="container js-demo-container">
  <div class="row">
    <div class="col-xs-12 js-demo-item">your content or markup</div>
    <div class="col-xs-12 js-demo-item">your content or markup</div>
    <div class="col-xs-12 js-demo-item">your content or markup</div>
    <div class="col-xs-12 js-demo-item">your content or markup</div>
    <div class="col-xs-12 js-demo-item">your content or markup</div>
  </div>
</div>
```
Start plugin:

```js
$(function () {
    $('.js-demo-container').magicHeight({
      itemClass: '.js-demo-item'
    });
});
```

## Options

### itemClass
Item class value  
**Default**: `'.item'`  
**Type**: `string`

### line
Elements count in line  
**Default**: `'auto'`  
**Type**: `string` | `integer`

### resize
Recalculate height of elements while loading a window  
**Default**: `true`  
**Type**: `boolean`

### load
Recalculate height of elements while changing window size  
**Default**: `true`  
**Type**: `boolean`

## Demo

https://kyrare.github.io/magic-height/