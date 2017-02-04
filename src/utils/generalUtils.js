const activeClassNameGenerator = (baseClassName, linkPath) => {
  var classname = baseClassName;

  if (linkPath.includes(window.location.pathname)) {
    classname = `${classname} active`;
  }
  return classname;
};

export {
  activeClassNameGenerator
};
