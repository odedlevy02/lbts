'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {

    const prompts = [{
      type: 'confirm',
      name: 'reply',
      message: 'This generator will convert your default loopback to support typesscript with automigrate. It is recommended to run once after loopback initialization. Do you wish to continue',
      default: true
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    if((<any>this).props.reply==true){
      this._generateFiles()
      this._addDependencies()
    }

  }

  _generateFiles(){
    this.fs.copy('server/boot/root.js', 'server/boot/root.ts')
    this.fs.copy(
      this.templatePath(`server.js`),
      this.destinationPath('server/server.ts'));
    this.fs.copy(
      this.templatePath(`_tsconfig.json`),
      this.destinationPath(`tsconfig.json`));
    this.fs.copy(
      this.templatePath(`.env`),
      this.destinationPath(`config/.env`));
  }

  _addDependencies(){
    this.npmInstall(["dotenv","prompt"],{save:true})
    this.npmInstall(["@types/node","@types/dotenv"],{"save-dev":true})
  }

};
