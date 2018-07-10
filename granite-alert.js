import { LitElement, html } from '@polymer/lit-element';

/**
 * `granite-alert`
 * Bootstrap-like alerts
 *
 * @license MIT
 * Copyright (c) 2016 Horacio "LostInBrittany" Gonzalez
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation * files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, * modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
 * Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,* ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * Typical usage:
 *
 * ```html
 * <granite-alert level="danger">This is a serious alert!</granite-alert>
 * ```
 *
 * Allowed values for `level`: `info`, `warning`, `danger` and `success`
 *
 *
 * @element granite-alert
 * @blurb A set of Bootstrap-like alert elements
 * @homepage index.html
 * @demo demo/index.html
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class GraniteAlert extends LitElement {
  _render({level, hide}) {

    if (this.hide) {
      return;
    }
    return html`
      <style>
        :host {
          display: block;
        }
        .hidden {
          display: none;
        }
        .alert {
          padding: 15px;
          margin-bottom: 20px;
          border: 1px solid transparent;
          border-radius: 4px;
        }
        .success {
          color: #3c763d;
          background-color: #dff0d8;
          border-color: #d6e9c6;
        }
        .info {
          color: #31708f;
          background-color: #d9edf7;
          border-color: #bce8f1;
        }
        .warning {
          color: #8a6d3b;
          background-color: #fcf8e3;
          border-color: #faebcc;
        }
        .danger {
          color: #a94442;
          background-color: #f2dede;
          border-color: #ebccd1;
       }
      </style>
      <div class$="alert ${this._checkLevel(this.level)}">
        <slot></slot>
      </div>
    `;
  }

  static get properties() {
    return {
     level: String,
     hide: Boolean,
    };
  }

  constructor() {
    super();
    this._allowedLevels = ['info', 'warning', 'danger', 'success'];
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.level) {
      this.level = 'info';
    }
  }

  _isHidden() {
    if (this.hide) {
      return 'hidden';
    }
    return '';
  }

  _checkLevel() {
    if (!this.level || this._allowedLevels.indexOf(this.level) < 0) {
      return this._allowedLevels[0];  // Set default value for `level` if unknown value is given
    }
    return this.level;
  }
}

window.customElements.define('granite-alert', GraniteAlert);
