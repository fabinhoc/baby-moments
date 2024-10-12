import { AlbumFileType } from './AbumFile.type';
import { MomentType } from './Moment.type';

export interface AlbumType {
  id: number;
  moment: MomentType;
  memory_usage: number;
  album_files: AlbumFileType[];
  created_at: Date;
  updated_at: Date;
}
