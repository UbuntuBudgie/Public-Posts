---
sidebar_position: 6
---
# Setting up Github account

To start with editing the documentation, the first thing that you need to do is to have registered Github account. The repository for the documentation is stored on Github, thus the Github account is necessary to edit the documentation either via GitHub website or via code editor after fetching repo files.

1. Follow the guide from official Github Docs on how to setup Github. The section called "[Setting up Git&#34;](https://docs.github.com/en/get-started/quickstart/set-up-git "Setting up Git guide") contains what it needs to be done to setup your Github account details on your computer.
2. Next step is to generate SSH key. The SSH key is used to securely connect to GitHub and download necessary files from repos. Follow the steps outlined in "[Generating a new SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent "Generating SSH key")"
3. After generating follow the guide on [how to add it](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account?tool=webui) to your Github account. We recommend that you use the web interface to add the key to minimize the possibility of an error happening when connecting.
4. Test your connection
5. Add key passphrases as an another measure of security. Think of passphrases as passwords. In case you lose access to your keys, or someone else gets them, they cannot be used without entering passphrase to decrypt them.  Use the following guide: [Working witth SSH key passphrases](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases "Working with SSH passphrases") to add your passphrase.

## What's next?

- Read the [official documentation](https://docusaurus.io/)
- Modify your site configuration with [`docusaurus.config.js`](https://docusaurus.io/docs/api/docusaurus-config)
- Add navbar and footer items with [`themeConfig`](https://docusaurus.io/docs/api/themes/configuration)
- Add a custom [Design and Layout](https://docusaurus.io/docs/styling-layout)
- Add a [search bar](https://docusaurus.io/docs/search)
- Find inspirations in the [Docusaurus showcase](https://docusaurus.io/showcase)
- Get involved in the [Docusaurus Community](https://docusaurus.io/community/support)
