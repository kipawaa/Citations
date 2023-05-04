window.MathJax = {
    loader: {
        load: ['[tex]/natbib']
    },
    startup: {
        pageReady: () => {
            alert('Running MathJax');
            return MathJax.startup.defaultPageReady();
        }
    },
    tex: {
        packages: {
            '[+]': ['natbib']
        }
    }
};
