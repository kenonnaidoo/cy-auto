# cy-auto

cy-auto is an easy-to-use npm package that helps QA testers to write better automated tests using Cypress by adding custom data-cy attributes to all elements of an HTML file. These attributes provide a simple way to reference elements in a browser, making it easier to write and maintain tests.

With cy-auto, front-end developers can generate unique data-cy tags to all elements apart from the ones listed in the ignored tags without having to manually add them. Additionally, you can add or remove tags to be ignored to ensure that only the relevant elements are targeted.

cy-auto is designed to be simple and straightforward, with commands that are easy to use even for those who are not familiar with Cypress. It is an excellent tool for those who want to improve their testing process by making it more efficient and accurate.

If you're looking to improve your testing process and make it more efficient, cy-auto is an excellent tool to add to your toolkit.
## Installation

To install globally, use:

```bash
npm install -g cy-auto
```

## Usage

To use cy-auto, navigate to the project directory or the directory where the file that needs data attributes added to is located. Then, you can execute the following commands:

### Generate Tags

To generate unique data-cy tags to all elements apart from the elements listed in the ignored tags, use:

```bash
cy-auto generate --file <FILE>
```

### List Ignored Tags

To list all tags that get ignored when generating unique data-cy tags, use:

```bash
cy-auto list-tags
```

### Add Ignored Tag

To add to the tags that won't receive data-cy tags, use:

```bash
cy-auto add <TAG>
```

### Remove Ignored Tag

To remove from the tags that won't receive data-cy tags, use:

```bash
cy-auto remove <TAG>
```

## Contributing

If you find any issues or have suggestions for improvement, please feel free to create an issue or a pull request in the [cy-auto GitHub repository](https://github.com/kenonnaidoo/cy-auto).

## License

Cy-auto is released under the [MIT License](https://opensource.org/licenses/MIT).
