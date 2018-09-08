({
    baseUrl: '.',
    out: 'dist/jean-dom-element.js',
    optimize: 'none',
    name: 'node_modules/jean-amd/dist/jean-amd',
    include: ["src/DomElement"],
    wrap: {
        start: 
        "(function (root, factory) { \n" +
        " \t if (typeof define === 'function' && define.amd) { \n" +
        "\t \t define([], factory); \n" +
        "\t} else { \n" +
        "\t \troot.DomElement = root.DomElement || {}; \n" +
        "\t \troot.DomElement = factory();\n" +
        "\t}\n" +
        "}(this, function() {",
        end:
        "\n \t return require('src/DomElement'); \n" +
        "}));"
    },
     paths:{
       TypeCheck: "node_modules/jean-type-check/src/TypeCheck",
       Failure: "node_modules/jean-failure/src/Failure"
    }
})