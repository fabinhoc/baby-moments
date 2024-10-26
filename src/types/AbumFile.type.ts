import { AlbumType } from './Album.type';
import { AlbumFileFileTypeEnum } from './enums/AlbumFileFileType.enum';

export interface AlbumFileType {
  id: number;
  album: AlbumType;
  title: string;
  memory_usage: number;
  file_path: string;
  file_type: AlbumFileFileTypeEnum;
}
