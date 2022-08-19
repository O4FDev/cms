# CMS App

The point of this application is to make digital technologies like Websites, and Apps easier to create and manage.

## Getting started

Run the following command to install dependencies:

```bash
npm install
```

Create a .env file by copying the .env.copy file and filling in the correct values.

```bash
cp .env.copy .env
```

You can find more information about setting up a GitHub app [here at the NextAuth docs.]("https://next-auth.js.org/providers/github") note: the callback url is set to http://localhost:3000/api/auth/github/callback


## Todo
<!-- table -->
| Name | Description |
| ---- | ----- |
| Fix GitHub actions testing | GitHub actions tests are broken because it cannot load enviornment variables, it would be super helpful if anyone had suggestions or could pr a fix. |
| Add more features | ...go free till your heart's content |
| Check the database schema | [See here for inspiration but all PRs as always appreciated, especially if they bring us a bit closer to having the HTML CSS JS specs for rendering.]("https://www.figma.com/file/MiJuTQhBuN2PzXhfdOjVIg/Image-Collection-%F0%9F%93%B8?node-id=1%3A2") |
| Add Sentry to API | Sentry is a great tool for debugging and error reporting. |
| Add templates | Projects should be created with optional templates which can be converted to blocks. |

Link for image is here since GitHub READMEs are not allowed to have HREFs in tables: [See here for inspiration but all PRs as always appreciated, especially if they bring us a bit closer to having the HTML CSS JS specs for rendering.]("https://www.figma.com/file/MiJuTQhBuN2PzXhfdOjVIg/Image-Collection-%F0%9F%93%B8?node-id=1%3A2")

## The vision 

My current vision is to make a drag-and-drop project-based system so as users can view their websites in real time, then the ability to edit and export them.

No line of code is ever un-rewriteable, feel free to open pull requests to provide feedback on what's already written! 
