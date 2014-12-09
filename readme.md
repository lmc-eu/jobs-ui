# [Jobs UI](http://jobs.cz/ui/)

Jobs UI is a complete underlayer for uniform visual appearance of the brand;
including **styles**, **scripts**, and **assets** (e.g. images).

## How to use

Configured [Node.js](http://nodejs.org/) with *NPM*, installed `grunt-cli`,
and initialized [*Bower*](http://bower.io/) in the project are considered a
prerequisite.

Install with:
`bower install --save jobs-ui=ssh://git@stash.int.lmc.cz:7999/jobs/ui.git`.

In the following `$bower_components$` denotes the directory in which bower
installs its components (`./app/bower_components` relative to the `bower.json` file
by default).

### Setting up

#### LESS
If `less#v1.7.0` is already used in the project, just do these two steps:

1.  Include `$bower_components$` in the `paths` option of *less*. E.g.
    `grunt-contrib-less` task supports this option directly.
2.  Import `jobs-ui/style` in the project style, preferably somewhere at
    the beginning. This file makes sure everything is linked together in the
    correct order.

If not, it is recommended to consider implementing it or upgrading to the
desired version as unexpected behaviour may occur otherwise.

*Note*: It is recommended to minify the output *CSS*.

*Note*: Had there been a inconquerable problem with the `paths` option, it is
possible to alternatively set `@bower-directory` variable to represent the
relative path to `$bower_components$` from `jobs-ui/src/` directory
(typically `../../`).

#### JavaScript

This package uses the *CommonJS* module format.

Recommended use consists of a combination of [browserify](http://browserify.org/)
and its transform [debowerify](https://github.com/eugeneware/debowerify).
Then just require the 'jobs-ui' module.

Note that *jQuery* is a dependency and must be accessible via `$`.
However it is **not** included neither when required as a module nor in the
precompiled build!

It is recommended to take an advantage of a CDN.
E.g. *Google Hosted Libraries*:

    <script src="//ajax.googleapis.com/ajax/libs/jquery/x.y.z/jquery.min.js"></script>

#### Assets

When possible assets are inlined using `base64` format.

Other files are contained in subdirectories of the `dist/` directory.
These are to be copied to the same level as the resulting CSS file.
This behaviour may be overwritten setting the `rootpath` option in *less*.

## Contributing

### KSS
For documentation of components [KSS](https://github.com/hughsk/kss-node) is
used. Every component must have an appropriate description and a sample in the
matching file.

Note that the `styleguide.less` file is left blank as the styles are copied to
the documentation from the distribution folder to insure consistency.

### How to manage icons
1. Go to [IcoMoon](http://icomoon.io/app/)
2. In menu choose Manage projects
3. Import project, use *src/modules/icons/_generated/selection.json*
4. Load project
5. Add/remove/update icons
6. Download the package
7. Copy *style.css* and *selection.json* to *src/modules/icons/_generated*
8. Copy *fonts/jobsicon.eot* to *src/modules/icons/font*
9. Update KSS documentation
10. Regenerate project by Grunt

### Available Grunt tasks

#### Complete: `grunt`

Prepares the workspace by deleting temporary, distribution, and documentation
directories. Downloads needed *bower* components. Builds styles and scripts
for production use, copies assets into the distribution folder. Generates
full featured documentation.

#### Distribution: `grunt dist`

Creates just the production distribution folder.

#### Develop: `grunt serve`

Conveniently opens documentation in a browser window and reloads it when a
change has happened.

#### Individually: `grunt scripts`, `grunt styles`, and `grunt docs`

Runs compilation of that one element, including the minimization.

### Directory structure

There are four types of files:

*   **modules** are common utilities;
*   **partials** represent high level parts and may be used at most once on a page;
*   **components** are general and may be used at will;

```
ui/
├── dist/
│   ├── fonts/
│   ├── images/
│   ├── index.min.js
│   ├── style.min.css
│   └── style-legacy.min.css
├── grunt/
├── lib/
│   ├── bower-components/
│   └── styleguide_template/
├── src/
│   ├── components/
│   │   ├── component-A/
│   │   ├── …
│   │   └── component-R/
│   │       ├── images/
│   │       ├── index.js
│   │       └── style.less
│   ├── modules/
│   │   ├── module-A/
│   │   ├── …
│   │   └── module-P/
│   │       ├── images/
│   │       ├── index.js
│   │       └── style.less
│   ├── partials/
│   ├── core.less
│   ├── styleguide.less
│   └── styleguide.md
├── about.me.json
├── bower.json
├── Gruntfile.js
├── index.js
├── package.json
├── readme.md
├── style.less
└── …
```

### Versioning

Versions in the form of `vMAJOR.MINOR.PATCH` must comply with the [Semantic Versioning 2.0.0](http://semver.org/spec/v2.0.0.html).
