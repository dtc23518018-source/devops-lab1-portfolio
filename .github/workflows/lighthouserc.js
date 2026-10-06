module.exports = {
  ci: {
    collect: {
      url: [
        'https://dtc23518018-source.github.io/devops-lab1-portfolio/',
        'https://dtc23518018-source.github.io/devops-lab1-portfolio/about.html',
        'https://dtc23518018-source.github.io/devops-lab1-portfolio/contact.html'
      ],
      numberOfRuns: 1
    },

    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.70 }],
        'categories:accessibility': ['warn', { minScore: 0.80 }],
        'categories:best-practices': ['warn', { minScore: 0.80 }],
        'categories:seo': ['warn', { minScore: 0.80 }]
      }
    },

    upload: {
      target: 'temporary-public-storage'
    }
  }
};
