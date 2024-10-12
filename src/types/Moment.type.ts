import { AlbumType } from './Album.type';
import { TimelineType } from './Timeline.type';

export interface MomentType {
  title: string;
  description: string | null;
  avatar: string | null;
  theme: string | null;
  album: AlbumType;
  timeline: TimelineType;
  position: number | null;
  created_at?: Date | null;
  updated_at?: Date | null;
}
