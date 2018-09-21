[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/LostInBrittany/granite-alert)
![Vaadin Directory availability](https://img.shields.io/badge/Vaadin%20Directory-available-green.svg?style=flat-square&colorB=00b4f0&link=https://vaadin.com/directory)

# granite-alert

> A set of [Bootstrap-like alert](http://getbootstrap.com/components/#alerts) elements
>
> Built on [lit-element](https://github.com/Polymer/lit-element)
>
> The old Polymer 2.x-1.x version is available on the [`polymer-hybrid` branch](https://github.com/LostInBrittany/granite-alert/tree/polymer-hybrid).


## Usage example

<!---
```
<custom-element-demo>
  <template>
    <script src="@webcomponents/webcomponentsjs/webcomponents-bundle.js"></script>
    <script src="@granite-elements/granite-alert/granite-alert.js"></script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<granite-alert level="warning">Be careful, my friend...</granite-alert>
<granite-alert>Information is key</granite-alert>
```


## Install


Install the component using [npm](https://www.npmjs.com/):

```sh
$ npm i @granite-elements/granite-alert 
```

Once installed, import it in your application:

import '@granite-elements/granite-alert/granite-alert.js';



## Running demos and tests in browser

1. Fork the `granite-alert` repository and clone it locally.

1. Make sure you have [npm](https://www.npmjs.com/) 
and the [Polymer CLI](https://www.polymer-project.org/3.0/docs/tools/polymer-cli) installed.

1. When in the `granite-alert` directory, run `npm install` to install dependencies.

1. Serve the project using Polyumer CLI:

    `polymer serve --npm`

1. Open the demo in the browser

    - http://127.0.0.1:8080/components/@greanite-elements/granite-alert/demo


## Attributes

Attribute     | Type      | Default  | Description
---           | ---       | ---      | ---
`level`       | *String*  | `"info"` | The level of the alert

Alowed values for `level`: `info`, `warning`, `danger` and `success`


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](http://opensource.org/licenses/MIT)
