---
title: "Git"
description: "Everything about Git."
pubDate: 2024-2-7
author: FinnTheHero
---


Git is a distributed version control system designed to track changes in source code during software development. It allows multiple developers to collaborate on projects, keeping track of every modification made to the codebase.

## Purpose
The main purpose of Git is to manage and track changes to source code efficiently. However, Git can also be used for other purposes such as:

- **Collaboration**: Git facilitates collaboration among developers by allowing them to work on the same codebase simultaneously and merge their changes seamlessly.
- **Versioning**: Git provides a history of changes made to the codebase, enabling developers to revert to previous versions if needed.
- **Branching and Merging**: Git allows developers to create branches to work on new features or bug fixes independently. These branches can later be merged back into the main codebase.
- **Code Review**: Git integrates with various code review tools, making it easier for developers to review each other's code changes before merging them into the main branch.

---

# Instalation

## Windows

### Website
There are multiple ways to install Git on windows, but the best way to install Git on `Windows` is from the [website](https://git-scm.com/) itself. 

<p class="custom-subtitle">If you want to include other methods like installing from terminal, request an update or submit a `pr`</p>

## Linux

There are multiple ways to go on about installing Git on `Linux`, but best way is to use your package manager to install it.

### Package Manager
> Pacman - Arch based distributions like Manjaro & Endeavour
```shell
sudo pacman -S git
```

> Apt - Debian based distributions like Ubuntu & Mint
```shell
sudo apt install git
```

If you want to include other package managers, request an update or submit a `pr`

### Website

You can download Git from the official [website](https://git-scm.com/) as well.


## MacOS 
!!!
Comming soon...
!!!

---

## Basic Usage

This is basic usage of git and it doesn't include fancy stuff like branches.

This is basic overview on how to get started with git.

### Order

To use git, we need to follow correct order of the steps:

1. Clonning repostory or initializing it locally.
2. Creating files and adding them to tracked list.
3. Creating commits after some changes in the codebase.
4. Pushing changes to remote repository.

### Initializing a repository

When you want to create a new empty repository you can use init command.

> This will turn your directory into git repository. Nothing much will change except that `.git` hidden file will be generated which will track all the change in files and information about branches, remote repositories and more.

To init a Git repository, use the following command:
```shell
git init
```

### Cloning a Repository

When you clone a Git repository, you're essentially making a copy of it on your local machine. This allows you to work on the codebase without affecting the original repository. Cloning is typically done when you want to start working on a project or collaborate with others.

To clone a Git repository, use the following command:
```shell
git clone <repository_url>
```

### Tracking files

Git tracks changes to files in your project by monitoring their status. When you add a file to the staging area using the git add command, you're telling Git to start tracking changes to that file. Once a file is added to the staging area, Git will include it in the next commit.

After creating new file, you need to track them to see change overtime.

Use the following command to add file to tracking list:

```shell
git add <file_name>
# Add the file(s) to the staging area
```

### Committing Changes

Committing changes means saving the modifications you've made to the code. It's like taking a snapshot of the current state of your project. When you commit changes, Git keeps track of what files were modified and what exactly was changed within those files. This helps you keep a record of your progress and allows you to revert to previous versions if needed.

After making changes to the code, you need to commit them to the repository.

Use one of the following commands to commit changes:

```shell
git commit -m "Commit message"
# Commit the changes with a descriptive message
```
You can also include description in commit to add more detail and keep `Commit message` clean
```shell
git commit -m "Commit message" -m "Commit description"
# Add description as well
```

### Pushing Changes

Pushing changes means uploading your committed changes from your local machine to a remote repository, such as GitHub or GitLab. This allows others to access and collaborate on your code. Pushing updates the remote repository with your latest changes, making them available to other team members.

After creating commits in local repository, you need to push them to the remote repository.

To push your committed changes to a remote repository, use the following command:

```shell
git push origin <branch_name>
```

---

!!!
These are most basic functions of `Git`<br />
More advanced instructions will be uploaded at a later date.
!!!

---