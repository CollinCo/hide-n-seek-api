import { Entity } from '@loopback/repository';
export declare class Game extends Entity {
    uid?: number;
    radius: number;
    lng?: number;
    lat?: number;
    getId(): any;
}
