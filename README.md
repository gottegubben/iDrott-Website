# iDrott Website

iDrott is a website built with Vue.js for the Computer Engineering department at Chalmers.

## 1. Background

iDrott is a standalone committee, under the DTEK umbrella, that makes sure
that the Computer Engineering students at Chalmers excercise. Because of our
responsibility it's neccessary that the audience, the students, are reachable
to allow for spreading news about iDrott's excercise events.

While iDrott uses many different channels to reach out to the students, there's still a need for a website. Especially for the newly admitted students which doesn't have access to all the different channels at start.

The goal of the website is to give newly admitted students a chance to familiarize themselves with the committee of iDrott while also working as a channel for advertising events for every student this concerns.

## 2. iDrott socials

[![Instagram](https://img.shields.io/badge/-Instagram-purple?style=flat-square&logo=instagram&logoColor=white)](https://www.instagram.com/idrottdata/)

[![Facebook](https://img.shields.io/badge/-Facebook-blue?style=flat-square&logo=facebook&logoColor=white)](https://www.facebook.com/DatasIdrottsforeningIDrott)

[![Discord](https://img.shields.io/badge/-Discord-green?style=flat-square&logo=discord&logoColor=white)]()

## 3. Repository guidelines

When writing, committing, creating branches etc. the programmer should follow the standard that is presented in this section.

### 3.1 Branches

When creating branches, these are the things to be aware of.

**main** - is the main branch of the repository and should only contain code that's in production. This branch can only be merged into using a pull request.

**baseline-X** - is the branch that models all the features that will be committed in this baseline. A collective of features, hotfixes, bugfixes and tests etc. X is a placeholder for a version, ex: 1. Baselines can also bridge out from an existing baseline. Ex: a baseline called `baseline-1` could have a dependent branch named `baseline-1.1`, and this `baseline-1.1.1`.

Features, hotfixes etc. uses the baseline as origin. Here are the main keywords to use for different things:

| Category Word | Meaning                                        |
| :------------ | :--------------------------------------------- |
| baseline-X    | _The root except main, X = Version, ex: 1._    |
| hotfix        | _For quikcly fixing critical issues._          |
| bugfix        | _For fixing a bug._                            |
| feature       | _For adding, removing or modifying a feature._ |
| test          | _For experimenting, not an issue._             |

The naming convention for naming category word is the use of the slash: `/` and for naming the feature with a long name: `-`.

An example: `main/baseline-1/feature/about-button`.

### 3.2 Roadmap & Changelog

**Roadmap** - Contains all features and core goals for the upcoming baseline. Useful for structering up what each baseline should contain.

Format of the roadmap file:

1. Baseline version (ex: Baseline-1.2.3)

2. Main objective (ex: have a functional page)

3. Core features (ex: added an API)

**Changelog** - Contains all the information about the changes that's has been made in the latest baseline.

Format of the changelog file:

1. Baseline version (ex: Baseline-1.2.3)

2. Changes made in no particular order.

### 3.3 Project structure

### 3.4 Code standard

## 4. Build

_OBS!!! This build guide assumes that the device is a Windows machine._

1. Make sure you've **NPM** installed. Otherwise you can download it together with Node.js [here](https://nodejs.org/en/download/package-manager).

2. Then clone the repository to your local machine.

3. Configure your IDE, recommended is VS Code, to use the "Vue Official" extension, to allow for autocorrection and other useful stuff. Link to extension [here](https://marketplace.visualstudio.com/items?itemName=Vue.volar).

4. Run this command to install all the required packages:

```sh
npm install
```

5. To run the web server locally on your computer, use this command. This allows for Hot-Reload as well:

```sh
npm run dev
```

6. When you feel ready to build it into it's final form, use this command to Type-Check, Compile and Minify:

```sh
npm run build
```

## 5. Resources

When working on this project, you'll need to know how to work with the tools given to you. For this project there's a couple of libraries and frameworks that's being used to make this project easier to work with. The packages this program uses, through npm, can be found inside of the package-lock.json which also contains their respective versions.

The project itself is built upon **Vue.js** which in short is a javascript framework. When you write components, which is in a certain format, Vue will later interpret these and build it down to only _css_, _html_ & _javascript_.

### 5.1 Links

This section covers links that could be useful to read through to understand the use of some tools, ex: Vue.js.

- [Vue](https://vuejs.org/guide/introduction.html)

- [Vue Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)

- [Vue Router](https://router.vuejs.org/guide/)
