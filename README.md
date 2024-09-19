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

**baselineX** - is the branch that models all the features that will be committed in this baseline. A collective of features, hotfixes, bugfixes and tests etc. X is a placeholder for a version, ex: 1.0.

Features, hotfixes etc. uses the baseline as origin. Here are the main keywords to use for different things:

| Category Word | Meaning                                        |
| :------------ | :--------------------------------------------- |
| baselineX     | _The root except main, X = Version, ex: 1.0._  |
| hotfix        | _For quikcly fixing critical issues._          |
| bugfix        | _For fixing a bug._                            |
| feature       | _For adding, removing or modifying a feature._ |
| test          | _For experimenting, not an issue._             |

The naming convention for naming category word is the use of the slash: `/` and for naming the feature with a long name: `-`.

An example: `main/baseline1.0/feature/about-button`.
