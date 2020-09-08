export interface BackendData {
  vidType1: Video[];
  vidType2: Video[];
  vidType3: Video[];
}

export interface Video {
  name?: string;
  url?: string;
  groupIndex?: number;
}
