import { GameRepository } from "../repositories/game.repository";
import { Game } from "../models";
export declare class GameController {
    protected gameRepo: GameRepository;
    constructor(gameRepo: GameRepository);
    setupGame(game: Game): Promise<Game>;
}
