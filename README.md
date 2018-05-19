# Vue-Dynamic-Locale

A straightforward implemention for multi-language for local Vue app (e.g. electron). You can change language dynamically.

## Install

The recommended way to install and maintain vue-dynamic-locale in your project is through the Node.js Pacakge Manager (NPM), simply type the npm command in your project folder:

```sh
npm install vue-dynamic-locale --save
```

## Usage

To use vue-dynamic-locale, you must install it as a Vue plugin with store included in options:
```javascript
import VueDynamicLocale from 'vue-dynamic-locale'

// path is the directory of locale json files.
const path = 'static/locale'

// Vuex store must be included in options.
Vue.install(VueDynamicLocale, { store, path })
```

Then, you can use **$t** object in your Vue components to access current language for specific key. For example, the language json file may like this:

```json
{
  "Hellow": {
    "World": "Dynamic"
  },
  "Locale": "Vue",
  "Array": ["Value1", "Value2", "Value3"]
}
```

Then you can use it like this in Vue template:
```javascript
$t['Hellow.World'] // === 'Dynamic'
$t['Locale'] // === 'Vue'
$t['Array.0'] // === 'Value1'
$t['Array.2'] // === 'Value3'
```

You can change locale by **$setLocale()**, and **$getLocales()** to list all avaiable locales in your locale directory.


## License
Distributed under the MIT license. See [LICENSE](https://github.com/luz-alphacode/vue-undoable/blob/master/LICENSE) for detail.