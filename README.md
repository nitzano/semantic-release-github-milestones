<h1 align="center" style="border-bottom: none;"> semantic-release-github-milestones🚩🚀</h1>
<h2 align="center">Sync <a href="https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/about-milestones">Github milestones</a> with <a href="https://github.com/semantic-release/semantic-release">semantic-release</a></h2>


<div align="center">

[![npm latest version](https://img.shields.io/npm/v/semantic-release-github-milestones/latest.svg)](https://www.npmjs.com/package/semantic-release-github-milestones)
[![npm next version](https://img.shields.io/npm/v/semantic-release-github-milestones/next.svg)](https://www.npmjs.com/package/semantic-release-github-milestones)
[![npm beta version](https://img.shields.io/npm/v/semantic-release-github-milestones/beta.svg)](https://www.npmjs.com/package/@semantic-release/github)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

</div>

| Step               | Description                                                                                                                        |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `verifyConditions` | Verify github tokens are present and valid.                                                                                         |
| `verifyRelease`    | Display information regarding the github milestone.                                                               |
<!-- | `success`          | [TBD] Close the target [GitHub milestone](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/about-milestones). |
| `fail`             | [TBD] Show a descriptive message to why the release failed                                                                               | -->

## Highlights

*  Shows [Github milestones](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/about-milestones) summary information when releasing a new version.
* Matches milestones either by:
  * Next release version (`v1.1.0`, `2.2.0`, ...)
  * Channel name (`next`, `beta`, ...)
  * Branch name ( `master`, `next-major`, ...)


### Future versions

* Appends milestone data to Github Releases 
* Automatically closes milestones after releasing
* Protects against releasing milestones with open issues
  
## Examples

### Milestone with open issues

```
[semantic-release-github-milestones] › ℹ  🚩 Github Milestone: v1.0.1  🚩
[semantic-release-github-milestones] › ℹ  (https://github.com/owner1/repo1/milestone/1)
[semantic-release-github-milestones] › ℹ  2 total issues
[semantic-release-github-milestones] › ℹ  ⚠️ ⚠️  2 open issues ⚠️ ⚠️
```

### Milestone with no open issues

```
[semantic-release-github-milestones] › ℹ  🚩 Github Milestone: next  🚩
[semantic-release-github-milestones] › ℹ  (https://github.com/owner1/repo1/milestone/7)
[semantic-release-github-milestones] › ℹ  15 total issues
[semantic-release-github-milestones] › ℹ  No open issues ✔️
```



## Install
```
npm install --save-dev semantic-release-github-milestones
```


## Usage

The plugin can be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

```json
{
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "semantic-release-github-milestones",
  ]
}
```

## Configuration

Github authentication  is **required** and can be set via [environment variables](#environment-variables).

### Environment variables

| Variable                                           | Description                                               |
| -------------------------------------------------- | --------------------------------------------------------- |
| `GH_TOKEN` or `GITHUB_TOKEN`                       | **Required.** The token used to authenticate with GitHub. |


<!-- ## Options

TBD -->
