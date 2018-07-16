import { ApplicationConfig } from '@loopback/core';
import { RestApplication, RestServer, RestBindings } from '@loopback/rest';
import { MySequence } from './sequence';

/* tslint:disable:no-unused-variable */
// Binding and Booter imports are required to infer types for BootMixin!
import { BootMixin, Booter, Binding } from '@loopback/boot';
import {
  Class,
  Repository,
  RepositoryMixin,
  juggler
} from '@loopback/repository';
/* tslint:enable:no-unused-variable */

export class Day_6Application extends BootMixin(
  RepositoryMixin(RestApplication)
) {
  constructor(options?: ApplicationConfig) {
    super({
      rest: {
        port: process.env.PORT || 3000
      }
    });

    // Set up the custom sequence
    this.sequence(MySequence);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };

    // Use below to add enviroment variables
    // var dataSourceConfig = new juggler.DataSource({
    //   name: "db",
    //   connector: "loopback-connector-mysql",
    //   host: process.env.DB_HOST,
    //   port: process.env.DB_PORT,
    //   user: process.env.DB_USER,
    //   database: process.env.DB_DATABASE,
    //   password: process.env.DB_PASSWORD


    var dataSourceConfig = new juggler.DataSource({
      name: "db",
      connector: 'memory',

    });
    this.dataSource(dataSourceConfig);
  }

  // var dataSourceConfig = new juggler.DataSource({
  //   name: "db",
  //   connector: 'loopback-connector-mysql',
  //   host: 'localhost',
  //   port: 3306,
  //   database: 'project',
  //   user: 'root',
  //   password: ''


  async start() {
    await super.start();

    const server = await this.getServer(RestServer);
    const port = await server.get(RestBindings.PORT);
    console.log(`Server is running at http://127.0.0.1:${port}`);
    console.log(`Try http://127.0.0.1:${port}/ping`);
  }
}
