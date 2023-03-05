module.exports = {
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!build/)"],
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
    ],
  };
  