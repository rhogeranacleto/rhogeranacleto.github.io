import tailwindcss from 'tailwindcss';
import postcssCustomMedia from 'postcss-custom-media';

console.log('aAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa')

export default function(config, env, helpers) {

  const postCssLoaders = helpers.getLoadersByName(config, 'postcss-loader');
  postCssLoaders.forEach(({ loader }) => {
    const plugins = loader.options.plugins;

    // Add tailwind css at the top.
    plugins.unshift(tailwindcss);
  });

  return config;
}
