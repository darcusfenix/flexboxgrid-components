var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var parse = require('react-docgen').parse;
var chokidar = require('chokidar');

var paths = {
  examples: path.join(__dirname, '../src', 'docs', 'examples'),
  components: path.join(__dirname, '../src', 'components'),
  output: path.join(__dirname, '../config', 'componentData.js'),
  outputExamples: path.join(__dirname, '../config', 'componentDataExamples.js')
};


const enableWatchMode = process.argv.slice(2) == '--watch';
if (enableWatchMode) {
  // Regenerate component metadata when components or examples change.
  chokidar.watch([paths.examples, paths.components]).on('change', function(event, path) {
    generate(paths);
  });
} else {
  // Generate component metadata
  generate(paths);
}

function generate(paths) {
  var errors = [];

  var componentData = getDirectories(paths.components).map(function(componentName) {
    try {
      return getComponentData(paths, componentName);
    } catch(error) {
      errors.push('An error occurred while attempting to generate metadata for ' + componentName + '. ' + error);
    }
  });

  writeFile(paths.output, "module.exports = /* eslint-disable */ " + JSON.stringify(errors.length ? errors : componentData));

  var componentDataExamples = getDirectories(paths.examples).map(function(exampleName) {
      try {
          return getExampleData(paths.examples, exampleName);
      } catch(error) {
          errors.push('An error occurred while attempting to generate metadata for ' + exampleName + '. ' + error);
      }
  });

  writeFile(paths.outputExamples, "module.exports = /* eslint-disable */ " + JSON.stringify(errors.length ? errors : componentDataExamples));
}

function getComponentData(paths, componentName) {
  var content = readFile(path.join(paths.components, componentName, componentName + '.js'));
  var info = parse(content);
  return {
    name: componentName,
    description: info.description,
    props: info.props,
    code: content
  }
}

function getHtmlData(componentName, file) {
  var content = readFile(path.join(paths.examples, componentName, file + '.html'));
  return {
    name: componentName,
    id: componentName,
    code: content
  }
}

function getExampleData(examplesPath, exampleName) {
  var examples = getExampleFiles(examplesPath, exampleName);
  return examples.map(function(file) {
    var filePath = path.join(examplesPath, exampleName, file);
    var content = readFile(filePath);
    var info = parse(content);
    return {
      // By convention, component name should match the filename.
      // So remove the .js extension to get the component name.
      name: file.slice(0, -3),
      description: info.description,
      code: content,
      id: exampleName,
      html: getHtmlData(exampleName, file.slice(0, -3))
    };
  });
}

function getExampleFiles(examplesPath, exampleName) {
  var exampleFiles = [];
  try {
    exampleFiles = getJSFiles(path.join(examplesPath, exampleName));
  } catch(error) {
    console.log(chalk.red(`No examples found ${exampleName}`));
  }
  return exampleFiles;
}

function getDirectories(filepath) {
  return fs.readdirSync(filepath).filter(function(file) {
    return fs.statSync(path.join(filepath, file)).isDirectory();
  });
}

function getJSFiles(filepath) {
  return fs.readdirSync(filepath).filter(function(file) {
    return fs.statSync(path.join(filepath, file)).isFile() && file.indexOf(".js") > -1;
  });
}

function writeFile(filepath, content) {
  fs.writeFile(filepath, content, function (err) {
    err ? console.log(chalk.red(err)) : console.log(chalk.green("Component data saved."));
  });
}

function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}
