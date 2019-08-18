import { FortressItemSlide } from './FortressItemSlide';
import { MapState } from '../military-fortress.component';

export interface FortressItem {
    roomId : number;
    roomName : string;
    slides : Array<FortressItemSlide>,
    mapState : MapState,
    cx : number,
    cy : number
}