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

### 3.3 Project structure

### 3.4 Code standard

---

# Idrott-Website

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
