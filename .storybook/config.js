import { withInfo } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';
import { themes } from '@storybook/components';
import { addDecorator, configure } from '@storybook/react';
import LayoutDecorator from './LayoutDecorator';

const req = require.context(
  '../src/components',
  true,
  /.stories.(js|jsx|tsx)$/
);

//decorators
addDecorator(
  withInfo({
    header: false, // Toggles display of header with component name and description
    inline: true, // Displays info inline vs click button to view
    source: true, // Displays the source of story Component
    propTables: [
      /* Components used in story */
    ], // displays Prop Tables with this components
    propTablesExclude: [], // Exclude Components from being shown in Prop Tables section. Accepts an array of component classes or functions.
    styles: {}, // Overrides styles of addon. The object should follow this shape: https://github.com/storybooks/storybook/blob/master/addons/info/src/components/Story.js#L19. This prop can also accept a function which has the default stylesheet passed as an argument.
    maxPropsIntoLine: 1, // Max props to display per line in source code
    maxPropObjectKeys: 10, // Displays the first 10 characters of the prop name
    maxPropArrayLength: 10, // Displays the first 10 items in the default prop array
    maxPropStringLength: 100 // Displays the first 100 characters in the default prop string,
  })
);

const newTheme = { ...themes.normal };

newTheme.mainFill = '#f3f3f3';

// Option defaults.
addDecorator(
  withOptions({
    theme: newTheme
  })
);

addDecorator(LayoutDecorator);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
