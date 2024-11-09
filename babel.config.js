export default {
  presets: ['@docusaurus/babel/preset'],
  ignore: [
    // Ignore all files that end with .test.js or are in __tests__ directories
    '**/*.test.js',
    '**/__tests__',
  ],
  comments: false,
};
