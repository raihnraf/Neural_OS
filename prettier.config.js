/**
 * Prettier Configuration
 * 
 * @see https://prettier.io/docs/en/configuration.html
 */
export default {
  // Line length
  printWidth: 100,
  
  // Tabs vs spaces
  tabWidth: 2,
  useTabs: false,
  
  // Semicolons
  semi: false,
  
  // Quotes
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  
  // Trailing commas (ES5 = trailing commas where valid in ES5)
  trailingComma: 'es5',
  
  // Brackets
  bracketSpacing: true,
  bracketSameLine: false,
  
  // Arrow functions
  arrowParens: 'always',
  
  // End of line
  endOfLine: 'lf',
  
  // Single attribute per line
  singleAttributePerLine: false,
  
  // Overrides for specific file types
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
    {
      files: ['*.md', '*.mdx'],
      options: {
        proseWrap: 'preserve',
        printWidth: 80,
      },
    },
  ],
}
