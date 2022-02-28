# rvezy-assessment

### How to run?
npm run start

I never completed the last step of the tasks because, as luck would have it, nothing supports Vue 3 yet.  Over half my time was spent with dependency issues and project configuration, easily.  Initially I wanted to make a nicely linted and configured project from scratch because the taks at hand was fairly easy.

However, the first hiccup I ran into was Bootstrap Vue did not support Vue3.  Someone had ported this which was OK for pagination, but the modals were not supported (go figure).

I tried another modal plugin (vue-universal-modal, or something of the sorts), but this time it conflicted with bootstrap.

Then I tried Vuetify, also to learn that it was not, in fact, supported by Vue 3.  I tried using the alpha channel at the very end, as they had partial support, but of course dialogs would not work.

## Technologies
### Vue 3
While I prefer Angular, I chose Vue as it seemed fitting when applying to a frontend Vue position.
### Vuex
For stateful services and state management
### Bootstrap
Helps implement grid system amongst basic styling in a time crunch
### Eslint/Prettier
Configured ESLint with Prettier plugin
### Typescript
While I 100% understand that TypeScript is overkill for this project (and probably just makes things more complicated), it was done for example purposes to show my ability to configure npm projects as well as ability to use TypeScript if necessary.  Similary to linting rules
### Webpack/webpack dev server
