module.exports = {
  ci: {
    collect: {
      staticDistDir: "./out",
    },
    upload: {
      target: "temporary-public-storage",
    },
    assert: {
      assertions: {
        "categories:accessibility": ["error", { minScore: 0.85 }],
      },
    },
  },
};
