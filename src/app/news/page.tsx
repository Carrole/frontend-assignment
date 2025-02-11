import { Carousel } from '@/components/common/Carousel';
import { CarouselData } from '@/constants/carouselData';
import { InfiniteScrollList } from '@/components/contentList/InfiniteScrollList';

export default function NewsPage() {
  return (
    <div>
      <Carousel items={CarouselData} />
      <h5 className="font-large">뉴스 페이지</h5>
      <InfiniteScrollList />
    </div>
  );
}
