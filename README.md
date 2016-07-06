# Component-css-demo

The purpose of this demo is to show an issue with https://github.com/ebryn/ember-component-css and in-repo addons.

The problem is that as of `0.2.0-beta.6` styles from [in-repo addons](https://www.youtube.com/watch?v=VYrMs1Zzpqs) are not being included.

Run the following commands and open in your browser. You should see a blue border around the second link, but alas no.


### With `0.2.0-beta.6`

![graphic-1](http://i.imgur.com/XgJv1B8.png)

### With `0.1.8`

![graphic-2](http://i.imgur.com/EDpi7Ox.png)

## Installation

* `git clone git@github.com:erkie/component-css-demo.git` this repository
* `cd component-css-demo`
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Notes

`lib/my-in-repo-addon/index.js` contains what I believe to be a hack to get templates to work properly using pods. Remove the funky code in there and the `in-repo-component` component will not be visible because of a missing template.
