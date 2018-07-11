import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { GameUserMap } from '../models';
export declare class GameUserRepository extends DefaultCrudRepository<GameUserMap, typeof GameUserMap.prototype.id> {
    protected datasource: juggler.DataSource;
    constructor(datasource: juggler.DataSource);
}
