<h1 align="center" style="border-bottom: none;"> semantic-release-github-milestones🚩🚀</h1>
<h2 align="center">Use <a href="https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/about-milestones">Github milestones</a> with <a href="https://github.com/semantic-release/semantic-release">semantic-release</a></h2>
<hr>
<center>


</center>

<div align="center">

[![npm latest version](https://img.shields.io/npm/v/semantic-release-github-milestones/latest.svg)](https://www.npmjs.com/package/semantic-release-github-milestones)
[![npm next version](https://img.shields.io/npm/v/semantic-release-github-milestones/next.svg)](https://www.npmjs.com/package/semantic-release-github-milestones)
[![npm beta version](https://img.shields.io/npm/v/semantic-release-github-milestones/beta.svg)](https://www.npmjs.com/package/@semantic-release/github)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

</div>

| Step               | Description                                                                                                                        |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `verifyConditions` | Verify github tokens are present and valid                                                                                         |
| `verifyRelease`    | Verify all github issues are closed for the target github milestones                                                               |
| `success`          | Close the target [GitHub milestone](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/about-milestones). |
| `fail`             | Show a descriptive message to why the release failed                                                                               |

## Highlights

1. Shows a summary information of matching [GitHub milestones](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/about-milestones)


### Future versions

1. Verifies all issues are closed on matching milestone before releasing a new version.
1. Appends milestone data to releases (FUTURE VERSION)
1. Automatically closes milestone when a release with the same name is deployed (FUTURE VERSION)
## Examples

### Milestone with open issues

```
[semantic-release] [semantic-release-github-milestones] › ℹ  🚩 Github Milestone: v1.0.1  🚩
[semantic-release] [semantic-release-github-milestones] › ℹ  (https://github.com/owner1/repo1/milestone/1)
[semantic-release] [semantic-release-github-milestones] › ℹ  2 total issues
[semantic-release] [semantic-release-github-milestones] › ℹ  ⚠️ ⚠️  2 open issues ⚠️ ⚠️
```

### Milestone with no open issues

```
[semantic-release] [semantic-release-github-milestones] › ℹ  🚩 Github Milestone: v1.0.1  🚩
[semantic-release] [semantic-release-github-milestones] › ℹ  (https://github.com/owner1/repo1/milestone/1)
[semantic-release] [semantic-release-github-milestones] › ℹ  2 total issues
[semantic-release] [semantic-release-github-milestones] › ℹ  No open issues ✔️
```



# Install

TBD

# Usage

TBD

# Configuration

TBD

## Environment variables

TBD

## Options

TBD
