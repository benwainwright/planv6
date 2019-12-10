module.exports = environment => {
  return require(`./webpack/webpack.config.${environment}.js`);
};
