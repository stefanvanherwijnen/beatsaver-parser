import { IBeatmapInfo, IDifficultyJSON } from './types'
import { load, parse } from './zip'
import JSZip from 'jszip'
import { AudioContext, IAudioBufferSourceNode, IAudioContext } from 'standardized-audio-context';

const parseBeatmaps = async (unzipped: JSZip) => {
  const info = await parseAsJson(unzipped, 'info.dat') as IBeatmapInfo
  const songBuffer = await unzipped.file(info._songFilename)!.async('arraybuffer')
  // let song: IAudioBufferSourceNode<IAudioContext>
  // if (songBuffer) {

    // }
  const beatmaps: Record<string, Record<string, IDifficultyJSON>> = {}
  const beatspeeds: Record<string, Record<string, number>> = {}
  for (const mode of info._difficultyBeatmapSets) {
    beatmaps[mode._beatmapCharacteristicName] = {}
    beatspeeds[mode._beatmapCharacteristicName] = {}
    for (const difficulty of mode._difficultyBeatmaps) {
      beatmaps[mode._beatmapCharacteristicName][difficulty._difficulty] = await parseAsJson(unzipped, difficulty._beatmapFilename)
      beatspeeds[mode._beatmapCharacteristicName][difficulty._difficulty] = difficulty._noteJumpMovementSpeed
    }
  }
  return {
    info,
    beatmaps,
    beatspeeds,
    songBuffer
  }
}

const parseAsJson = async (unzipped: JSZip, filename: string) => {
  return JSON.parse(await parse(unzipped, filename))
}


const parseZip = async (url: string) => {
  const unzipped = await load(url)
  const parsed = await parseBeatmaps(unzipped)

  return parsed
}

export {
  parseZip
}
