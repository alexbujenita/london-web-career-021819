# Git Process Cheat Sheet

1. Find the repo
2. `git clone` the fork
3. Make Changes in your editor
4. Stage the changes via `git add .`
5. Commit the changes via `git commit -m "message"`
6. Make a new branch
  1. Method 1
    - `git branch <branch_name>`
    - `git checkout <branch_name>`
  2. Method 2
    - `git checkout -b <new_branch_name>`
    Instead of `checkout` you can also say `co`

7. `git push -u origin <branch_name>`
8. Compare and make a PR on Github between your branch and master

## IF THERE ARE CONFLICTS
after step 7:
8. Pull the new master branch

(and if you really need to get rid of a commit, you can run `git reset --hard <hash_for_the_latest_commit_you_want>`)

  * `git pull`

9. Merge the new, updated master into your branch
  * `git checkout <branch_name>`
  * `git merge master`
10. Resolve merge conflicts in your editor, and save the new files
11. Commit the new post-conflict changes and push them up
12. MERGE THE PULL REQUEST YAY!
## Terminology

* Repository - where all of the code lives
  * Local - the version of the repo that exists on yours or another's computer
  * Remote - what git pushes to and pulls from (can be called origin, and generally refers to github)
* Changes - a series of changes made to files on a repository
* Commit - an atomic collection of changes that can be transferred between branches
* Stage - to prepare changes to be added to a commit
* Branch - a particular named "version" of the repository that represents some set of commits that may or may not differ from master
  * There are also local and remote branches, depending on where they are
* Upstream - the relationship between any local and remote branch
* Merge - resolve the different changes via their commits in order. Later commits get replayed on top of previous commits
