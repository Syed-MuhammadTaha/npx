# ahmad-salah

A CLI portfolio that displays personal and professional information when run using `npx ahmad-salah` in the terminal.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Publishing Your Own Version](#publishing-your-own-version)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v10 or above)
- npm (v5.2 or later for `npx` support)
- A GitHub account (for hosting your repository)
- An npm account (for publishing your package)

## Installation

This package is meant to be used with `npx`, so there's no need to install it globally. However, if you want to customize and create your own version, follow these steps:

1. Use this template to create your own GitHub repository.
2. Clone your new repository:
   ```
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To view the CLI portfolio, simply run:

```
npm run dev
```

This will display the portfolio information in your terminal.

## Customization

To customize the portfolio with your own information:

1. Edit the `index.js` file with your personal details.
2. Modify the `package.json` file:
   - Change the `name` field to your desired package name (use lowercase and hyphens)
   - Update the `repository` URL to your GitHub repository
   - Adjust the `keywords` as needed
3. Run `npm run dev` to see your changes locally.

## Publishing Your Own Version

1. Ensure you're logged in to npm:
   ```
   npm login
   ```

2. Publish your package:
   ```
   npm publish --access=public
   ```

Now others can view your CLI portfolio using `npx your-package-name`.

## Folder Structure

```
.
├── node_modules
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## Dependencies

The main dependencies for this project are set in the `package.json` file. Make sure to run `npm install` to install them.

## License

This project uses the [MIT License](https://opensource.org/licenses/MIT).

---

Feel free to customize this README further to match your specific CLI portfolio features and requirements!
