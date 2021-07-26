// const data = require("./utils/projectsData");
const data = require("./utils/pages");

module.exports = {
  trailingSlash: true,
  exportPathMap: async function () {
    // const { projects } = data;
    const { pages } = data;
    let paths = {
      "/": { page: "/" },
    };

    // projects.forEach((project) => {
    //   paths[`/project/${project.slug}`] = {
    //     page: "/project/[path]",
    //     query: { path: project.slug },
    //   };
    // });

    paths = [];

    pages.forEach((page) => {
      paths.push({
        page: page.path ? `/${page.locale}}/${page.path}` : `/${page.locale}`,
        query: { path: page.slug },
      });
    });

    return paths;
  },
};
