# [Jobs UI](http://jobs.cz/ui/)

Jobs UI is a complete underlayer for uniform visual appearance of the brand;
including **styles**, **scripts**, and **assets** (e.g. images).

## How to use

Configured [Node.js](http://nodejs.org/) with *NPM* is considered a 
prerequisite.

Install with npm:
`npm install --save jobs-ui=ssh://git@bitbucket.lmc.cz:7999/jobs/jobs-ui.git`.

Install with Yarn:
`yarn add --save jobs-ui=ssh://git@bitbucket.lmc.cz:7999/jobs/jobs-ui.git`.

### Setting up

#### LESS

If *less* is already used in the project, just do these two steps:

1.  Include `$dependencies_dir` in the `paths` option of *less* by modifying 
    this variable. E.g. *--modify-var=\"dependencies_dir='node_modules/'\"* 
    in `lessc` task directly or in `grunt-contrib-less` task with *modifyVars*
    directly.
    
1.  Import `jobs-ui/style` in the project style, preferably somewhere at
    the beginning. This file makes sure everything is linked together in the
    correct order.

If not, it is recommended to consider implementing it or upgrading to the
desired version as unexpected behaviour may occur otherwise.

*Note*: It is recommended to minify the output *CSS*.

*Note*: Had there been an inconquerable problem with the `paths` option, it is
possible to alternatively set `@dependencies_dir` variable to represent the
relative path to dependencies from `jobs-ui/src/` directory (typically
`../../`).

#### JavaScript

This package uses the *CommonJS* module format.

We recommended to use [browserify](http://browserify.org/).
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

### How to release new version
1. At *master* merge feature branch without auto commit: `git merge <feature-branch> --no-commit`.
1. Add new version in `styleguide.md` and change it in `package.json`.
1. Commit all changes: `git commit --all`.
1. Add new tag: `git tag v<version-number> (e.g. v1.2.3)`.
1. Push changes to origin master branch: `git push origin master`.
1. Push new tag to the server: `git push --tags`.

### How to release documentation
1. Checkout the *master* branch and pull: `git checkout master && git pull`.
1. Create a new *version branch*: `git checkout -b v<version-number> (E.g v5.1.1)`.
1. Run `npm run compile`.
1. At *master* branch remove the *docs* directory from `.gitignore` file for these few steps.
1. Add and commit *docs* directory: `git add docs/ && git commit -m "v<version-number> docs release" (e.g. v5.1.1)`.
1. Create a local *gh-pages* branch containing the splitted output *docs* directory: `git subtree split --prefix docs -b gh-pages`.
1. Make sure you have your SSH key added in GitHub [See Documentation](https://help.github.com/articles/generating-an-ssh-key/).
1. Set the *GitHub* remote: `git remote add github git@github.com:lmc-eu/jobs-ui.git`.
1. Force the push of the *gh-pages* branch to the remote gh-pages branch on GitHub: `git push -f github gh-pages`.
1. Delete the local *gh-pages* branch because you will need to create it again next time: `git branch -D gh-pages`.
1. Check it on [JobsUI](https://lmc-eu.github.io/jobs-ui/).

### KSS
For documentation of components [KSS](https://github.com/hughsk/kss-node) is
used. Every component must have an appropriate description and a sample in the
matching file.

Note that the `styleguide.less` file is left blank as the styles are copied to
the documentation from the distribution folder to insure consistency.

### How to manage icons
1. Go to [IcoMoon](http://icomoon.io/app/).
1. In menu choose Manage projects
1. Import project, use *src/modules/icons/_generated/selection.json*.
1. Load project.
1. Add/remove/update icons.
1. At the bottom bar, click `Generate font` - this will take you to a font screen
1. Under the `Generate font` a `Download` button will appear. Click it.
1. Download and unzip the package.
1. Copy *style.css* and *selection.json* to *src/modules/icons/_generated*.
1. Copy *fonts/jobsicon.eot* to *src/modules/icons/font*.
1. Update KSS documentation.
1. Regenerate project by NPM.

### Available NPM tasks

#### Complete: `npm run compile`

Prepares the workspace by deleting temporary, distribution, and documentation
directories. Downloads needed *bower* components. Builds styles and scripts
for production use, copies assets into the distribution folder. Generates
full featured documentation.

#### Distribution: `npm run build`

Creates just the production distribution folder.

#### Individually: `npm run build:scripts`, `npm run build:styles`, and `npm run docs`

Runs compilation of that one element, including the minimization.

### Directory structure

There are four types of files:

*   **modules** are common utilities;
*   **partials** represent high level parts and may be used at most once on a page;
*   **components** are general and may be used at will;

```
ui/
├── dist/
│   ├── favicon/
│   ├── fonts/
│   ├── images/
│   ├── index.min.js
│   ├── style.min.css
│   └── style-legacy.min.css
├── lib/
│   └── styleguide_template/
├── node_modules/
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
├── index.js
├── package.json
├── README.md
├── style.less
├── yarn.lock
└── …
```

### Versioning

Versions in the form of `vMAJOR.MINOR.PATCH` must comply with the [Semantic Versioning 2.0.0](http://semver.org/spec/v2.0.0.html).
