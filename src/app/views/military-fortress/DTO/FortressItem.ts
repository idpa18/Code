import { FortressItemSlide } from './FortressItemSlide';

export interface FortressItem {
    roomId : number;
    roomName : string;
    slides : Array<FortressItemSlide>
}