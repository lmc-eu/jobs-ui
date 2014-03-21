*Viktor* is the codename of the new design of [jobs.cz](http://jobs.cz).

# <a name="changelog"></a>Changelog

## v1.1.0

- Add breadcrumbs navigation

## v1.0.0

- Initial release
- Redesign the styleguide
- First entry the changelog

No details about development versions.

# <a name="usage"></a>Usage

## Install

At this moment Jobs UI is integrated in Jobs.cz. Usage of documented components
is limited to some pages, that is those which utilise the new enveloper.

In the future it is intended to use *bower* for installing this library.

## Directory structure

There are four types of files:

- **modules** are utilities and do not produce code on them own;
- **partials** represent high level parts and may be used at most once on a page;
- **components** are general and may be used at will;
- **vendor** files are external dependencies, either installed directly or by bower

Everything is linked together in the correct order in `core.less`, which is the only file which should be included when using Jobs UI.

```
viktor/
├── components/
│   ├── button.less
│   ├── typography.less
│   └── …
├── modules/
│   ├── mixins.less
│   └── variables.less
├── partials/
│   ├── footer.less
│   └── …
├── vendor/
└── core.less
```
