/**
 * This file is a configuration file generated by the `Template` extension on `vscode`
 * @see https://marketplace.visualstudio.com/items?itemName=yongwoo.template
 */
module.exports = {
  // You can change the template path to another path
  templateRootPath: "./.templates",
  // After copying the template file the `replaceFileTextFn` function is executed
  replaceFileTextFn: (fileText, templateName, utils) => {
    // @see https://www.npmjs.com/package/change-case
    const { changeCase } = utils;
    // You can change the text in the file
    return fileText
      .replace(/__templateName__/gm, templateName)
      .replace(
        /__templateNameToPascalCase__/gm,
        changeCase.pascalCase(templateName)
      )
      .replace(
        /__templateNameToParamCase__/gm,
        changeCase.paramCase(templateName)
      );
  },
  replaceFileNameFn: (fileName, templateName, utils) => {
    const { path, changeCase } = utils;
    // @see https://nodejs.org/api/path.html#path_path_parse_path
    const { base } = path.parse(fileName);
    // You can change the file name

    return base.replace(/__templateName__/gm, templateName)
      .replace(
        /__templateNameToPascalCase__/gm,
        changeCase.pascalCase(templateName)
      )
      .replace(
        /__templateNameToParamCase__/gm,
        changeCase.paramCase(templateName)
      );
  }
};