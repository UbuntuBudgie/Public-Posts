---
sidebar_position: 6
---
# Setting up work environment

## First steps

To start with editing the documentation, the first thing that you need to do is to have registered Github account. The repository for the documentation is stored on Github, thus the Github account is necessary to edit the documentation either via GitHub website or via code editor after fetching repo files.

1. Follow the guide from official Github Docs on how to setup Github. The section called "[Setting up Git&#34;](https://docs.github.com/en/get-started/quickstart/set-up-git "Setting up Git guide") contains what it needs to be done to setup your Github account details on your computer.
2. Next step is to generate SSH key. The SSH key is used to securely connect to GitHub and download necessary files from repos. Follow the steps outlined in "[Generating a new SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent "Generating SSH key")"
3. After generating follow the guide on [how to add it](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account?tool=webui) to your Github account. We recommend that you use the web interface to add the key to minimize the possibility of an error happening when connecting.
4. Test your connection
5. Add key passphrases as an another measure of security. Think of passphrases as passwords. In case you lose access to your keys, or someone else gets them, they cannot be used without entering passphrase to decrypt them.  Use the following guide: [Working witth SSH key passphrases](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases "Working with SSH passphrases") to add your passphrase.

## Add Remote Repo (UBdocs)

To contribute to Budgie Documentation, you first need to add UBDocs repo locally to your list of repos, so that you can push the necessary changes to the docs.

```
$ git remote add origin https://github.com/UbuntuBudgie/UBDocs.git
# Set a new remote

$ git remote -v
# Verify new remote
> origin  https://github.com/UbuntuBudgie/UBDocs.git (fetch)
> origin  https://github.com/UbuntuBudgie/UBDocs.git (push)
```

The default branch that the pull happens is master branch. In case there are some changes to the branch, this documentation will be updated to reflect that.

After adding the repo, the next thing you need to do is to **pull**   repo from Github. There are various ways on how you can do this, and it depends on which operating system you are using.

You can use both terminal/command prompt or GUI clients to **stage**, **commit**, and **push** your changes.

# Installing git and GUI Programs

In case you followed "Setting up Git" you have probably installed Github Desktop. While this is good program in case you have Windows or Mac OS, it is not available for Linux.

Here you can find the list of GUI programs to ease your Git and GitHub usage.

https://git-scm.com/downloads/guis

To install git on Ubuntu use

```
sudo apt-get install git
```

In case you want to use GUI, here is the programs we recommend.

Whether you want to use terminal or GUI is up to you. You should probably learn to use git from terminal, to understand the basics on how it works, thus continue using it or switch to GUI program in case you see it being faster and easier for you.

# Other options

While the presented option is the default one used in software development, we recognize that a lot of our users are also non-developers who would like to contribute to the documentation, providing useful tutorial for both newcomers and other users.

In that sense, we have devised two alternative options on making contribution even easier.

## Option 1: Using git and VSCode

The prerequisite for this option is to have Git installed either on your Linux distribution (We are assuming for the needs of this tutorial that it is Ubuntu, but the same applies for other distributions, with only difference being the commands for installing git).

After you've installed git, the next thing that you need to do is open your Terminal. For Windows users, this will be called Git Bash/CMD.

First, pull the latest changes from UBDocs repository.

After that go to /docs/ directory. This is the central directory that holds all the documentation files. To add new doc, open up your favorite markdown editor and load files or directory with the files in it. 

We recommend using VSCode due to ease of use *(Visual Studio Code) but if you have already an editor that works for you, the choice is up to you.

Note: The following extensions for VSCode are not necessary, but they will allow you to edit markdown files as if you were using WYSIWYG editor, without the need to know markdown and how it works. However, we also recommend to test writing in just markdown so that you can learn how it works in case at some point the extensions do not work, or you switch to an Markdown editor that does not have them.

Install the following extensions: Markdown All in One - Yu Zhang

Markdown Editor - zaaack

Office Viewer - Weijan Chen

After installing, reload VSCode. Once you open a file, or directory you will see that the default editor when you open markdown files has been replaced with WYSIWYG editor.

The editor options are similar to forum options or options you see while using Office programs.

## Option 2: Using Stackedit
