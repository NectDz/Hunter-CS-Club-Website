# Contribiting Guide

Welcome to our project! We're thrilled to have you onboard. Here's how to set up your environment and start contributing through forking and using Visual Studio Code's user-friendly interface for Git commands.

## Prerequisites

Ensure you have the following installed before you begin:
- Git
- Visual Studio Code (or your preferred IDE)
- Node.js and npm

## Getting Started

1. **Fork the Repository**

   Navigate to `https://github.com/NectDz/Prototype` on your web browser and click the "Fork" button at the top right corner to create a copy of the repository under your GitHub account.

2. **Clone Your Fork**

   Open Visual Studio Code, go to the "Source Control" panel, click on "Clone Repository", and enter the URL of your fork. This URL can be found by clicking the "Code" button on your fork's GitHub page and copying the URL.

3. **Open the Project**

   After cloning, Visual Studio Code will prompt you to open the cloned repository. Click "Open".

4. **Set Up the Project**

   Open the integrated terminal in Visual Studio Code (Terminal > New Terminal) and run:

```
npm install
```

Then, replace the "api key" in `firebase-config.tsk` with the API key mentioned in the provided Google Doc.

5. **Run the Project**

In the terminal, execute:

```
npm run dev
```

Your local server will start, and you can view the website locally.

## Making Changes

1. **Switch to the `dev-test` Branch**

In Visual Studio Code's "Source Control" panel, find the branch icon, click on it, and select `dev-test` from the list to switch branches.

2. **Create a New Branch**

With `dev-test` checked out, click on the branch icon again, select "Create New Branch..." and enter a descriptive name for your branch related to the feature or fix you're working on.

3. **Commit Your Changes**

After making your changes, open the "Source Control" panel, stage your changes by clicking the "+" icon next to each modified file, enter a descriptive commit message, and commit by clicking the checkmark icon.

4. **Push Your Branch**

Click on the "..." icon in the "Source Control" panel, select "Push" and then "Push to..." to push your branch to GitHub.

5. **Open a Pull Request**

Go to your fork on GitHub, select your branch, and click "Pull request" to open a new pull request against the original `NectDz/Prototype` repository's `dev-test` branch.

## Need Help?

If you're stuck or have questions, don't hesitate to reach out to me on Discord. I'm happy to assist or jump on a call if needed.

Thank you for contributing!

