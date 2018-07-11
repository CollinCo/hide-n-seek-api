import { Entity } from '@loopback/repository';
export declare class GameUserMap extends Entity {
    uid?: number;
    userId: number;
    gameId: number;
    userStatus: string;
    lng: number;
    lat: number;
    role: string;
    timer: number;
    getId(): any;
}
