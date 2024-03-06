# Contributing Guide

Welcome to our project! We're excited to have you contribute. Follow these steps to set up your environment and start contributing.

## Prerequisites

Before you start, make sure you have:
- Git installed on your machine
- Visual Studio Code (or your preferred IDE) installed
- Node.js and npm installed

## Getting Started

1. **Clone the Repository**

    ```
    git clone https://github.com/NectDz/Prototype
    ```

    Replace `[REPO_LINK]` with the actual link to the repository.

2. **Open the Project**

    Open the cloned repository using Visual Studio Code.

3. **Set Up the Project**

    In the terminal, run the following commands:

    ```
    npm install
    ```

    Replace the "key" in `firebase-config.tsk` with an empty string `""`.

4. **Run the Project**

    To start the development server, run:

    ```
    npm run dev
    ```

    The website should now be running locally, and you should be able to see the content.

## Making Changes

1. **Create a New Branch**

    Create a new branch off the `dev-test` branch (not the main branch). Use a descriptive name for your branch:

    ```
    git checkout -b YOUR_BRANCH_NAME dev-test
    ```

    Replace `YOUR_BRANCH_NAME` with a name related to the feature or fix you're working on.

2. **Commit Your Changes**

    After completing your task, commit your changes:

    ```
    git add [file]
    git commit -m "Your descriptive commit message"
    ```

3. **Push to Your Branch**

    Push the changes to your branch:

    ```
    git push origin YOUR_BRANCH_NAME
    ```

4. **Open a Pull Request**

    Go to the repository page on GitHub, and create a pull request to merge your branch into the `dev-test` branch.

## Need Help?

If you have any questions or need assistance with any of the steps, feel free to message me on Discord. I'm more than willing to hop on a call to help out.

Thank you for contributing to our project!
