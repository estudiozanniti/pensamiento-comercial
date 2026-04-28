module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addFilter("fechaES", function(value) {
    if (!value) return "";
    const date = new Date(value);
    return date.toLocaleDateString("es-AR", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  });

  eleventyConfig.addCollection("articulos", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/articulos/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });

  eleventyConfig.addCollection("categorias", function(collectionApi) {
    const articulos = collectionApi.getFilteredByGlob("src/articulos/*.md");
    const categorias = {};
    articulos.forEach((item) => {
      const categoria = item.data.category || "Sin categoría";
      if (!categorias[categoria]) categorias[categoria] = [];
      categorias[categoria].push(item);
    });
    return Object.keys(categorias).sort().map((nombre) => ({
      nombre,
      articulos: categorias[nombre]
    }));
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
