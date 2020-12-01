import { IBeatmapInfo, IDifficultyJSON } from './types';
export declare const parseZip: (url: string) => Promise<{
    info: IBeatmapInfo;
    beatmaps: Record<string, Record<string, IDifficultyJSON>>;
    beatspeeds: Record<string, Record<string, number>>;
    songBuffer: ArrayBuffer;
}>;
