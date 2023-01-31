import VideoChapter from './VideoChapter';

interface Videos {
  id: number;
  title: string;
  description: string;
  thumbnail_url: string;
  is_recommended: boolean;
  total_duration_ms: number;
  video_chapters: VideoChapter[];
  related_company_ids: number[];
  related_video_bundle_ids: number[];
}

export default Videos;