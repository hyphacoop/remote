---
layout: page
title: Contributing Guidelines
lang: en
---

### Submitting Feedback, Requests, and Bugs
Our process for submitting feedback, feature requests, and reporting bugs usually begins by opening [GitHub issues](https://help.github.com/articles/about-issues/). Each project repository generally maintains its own set of issues:

        https://github.com/hyphacoop/<repository-name>/issues

### Submitting Code and Documentation Changes

Our process for accepting changes operates by [Pull Request (PR)](https://help.github.com/articles/about-pull-requests/) and has a few steps:

1.  If you haven't submitted anything before, and you aren't (yet!) a member of our organization, **fork and clone** the repo:

        $ git clone git@github.com:<your-username>/remote.git

    Organization members should clone the upsteam repo, instead of working from a personal fork:

        $ git clone git@github.com:hyphacoop/remote.git

1.  Create a **new branch** for the changes you want to work on. Choose a topic for your branch name that reflects the change:

        $ git checkout -b <branch-name>

1.  **Create or modify the files** with your changes and commit them in Git. If you are fixing a known issue, include [“fixes #123” (where “123” is the issue number) in one of your commit messages](https://help.github.com/en/github/managing-your-work-on-github/closing-issues-using-keywords) to help automatically link everything together.

1. Once your changes are ready for review, push your commits to GitHub and **[create a pull request (PR)](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork).** If you aren’t ready for final review and just need some preliminary feedback, create the PR as a *draft:*

    ![Screenshot of PR button with “draft” option](https://help.github.com/assets/images/help/pull_requests/pullrequest-send.png)

1.  Allow others sufficient **time for review and comments** before merging. We make use of GitHub's review feature to comment in-line on PRs when possible. There may be some fixes or adjustments you'll have to make based on feedback.

    In general, we do our best to provide some feedback or review within about 3 days. (And hopefully much quicker most of the time!)
    
    If you have commit rights on the repo, you should merge your own PR, but have someone else review it first. Allow up to 3 days for review. If you don’t get any feedback by then, you can merge it without review.

1.  Once you have integrated comments, or waited for feedback, a member should merge your changes in.
