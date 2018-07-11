import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Game } from '../models';
export declare class GameRepository extends DefaultCrudRepository<Game, typeof Game.prototype.id> {
    protected datasource: juggler.DataSource;
    constructor(datasource: juggler.DataSource);
}
