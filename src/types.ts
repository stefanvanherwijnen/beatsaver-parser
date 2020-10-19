// https://raw.githubusercontent.com/lolPants/beatsaver-reloaded/master/server/src/routes/upload/types.ts

export interface IBeatmapInfo {
  _version: string
  _songName: string
  _songSubName: string
  _songAuthorName: string
  _levelAuthorName: string
  _beatsPerMinute: number
  _songFilename: string
  _coverImageFilename: string
  _difficultyBeatmapSets: IBeatmapSet[]
}

export interface IBeatmapSet {
  _beatmapCharacteristicName: string
  _difficultyBeatmaps: IDifficultyBeatmap[]
}

export interface IDifficultyBeatmap {
  _difficulty: string
  _difficultyRank: number
  _beatmapFilename: string
  _noteJumpMovementSpeed: number
  _noteJumpStartBeatOffset: number
}

export interface IDifficultyJSON {
  _version: string
  _BPMChanges: IBPMChange[]
  _events: IEvent[]
  _notes: INote[]
  _obstacles: IObstacle[]
  _bookmarks: IBookmark[]
}

export interface IBPMChange {
  _BPM: number
  _time: number
  _beatsPerBar: number
  _metronomeOffset: number
}

export interface IEvent {
  _time: number
  _type: number
  _value: number
}

export interface INote {
  _time: number
  _lineIndex: number
  _lineLayer: number
  _type: number
  _cutDirection: number
}

export interface IObstacle {
  _time: number
  _lineIndex: number
  _type: number
  _duration: number
  _width: number
}

export interface IBookmark {
  _time: number
  _name: string
}

export interface IParsedBeatmap {
  metadata: {
    songName: string
    songSubName: string
    songAuthorName: string
    levelAuthorName: string

    duration: number
    bpm: number

    difficulties: {
      easy: boolean
      normal: boolean
      hard: boolean
      expert: boolean
      expertPlus: boolean
    }

    characteristics: IBeatmapCharacteristic[]
  }

  hash: string
  coverExt: string
}

export interface IBeatmapCharacteristic {
  name: string
  difficulties: {
    easy: IParsedDifficulty | null
    normal: IParsedDifficulty | null
    hard: IParsedDifficulty | null
    expert: IParsedDifficulty | null
    expertPlus: IParsedDifficulty | null
  }
}

export interface IParsedDifficulty {
  duration: number
  length: number
  bombs: number
  notes: number
  obstacles: number
  njs: number
  njsOffset: number
}
