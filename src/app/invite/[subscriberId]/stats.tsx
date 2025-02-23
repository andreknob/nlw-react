import {
  getSubscribersSubscriberIdRankingClicks,
  getSubscribersSubscriberIdRankingCount,
  getSubscribersSubscriberIdRankingPosition,
} from '@/http/api';
import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react';

interface StatsProps {
  subscriberId: string;
}

export async function Stats({ subscriberId }: StatsProps) {
  const { count: linkAcessesCount } =
    await getSubscribersSubscriberIdRankingClicks(subscriberId);
  const { count: subscriptionsCount } =
    await getSubscribersSubscriberIdRankingCount(subscriberId);
  const { position: rankingPosition } =
    await getSubscribersSubscriberIdRankingPosition(subscriberId);

  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {linkAcessesCount}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Link Accesses
        </span>

        <MousePointerClick className="size-5 text-purple absolute top-3 left-3" />
      </div>

      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {subscriptionsCount}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Subscriptions made
        </span>

        <BadgeCheck className="size-5 text-purple absolute top-3 left-3" />
      </div>

      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {rankingPosition ? `${rankingPosition}º` : '-'}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Ranking position
        </span>

        <Medal className="size-5 text-purple absolute top-3 left-3" />
      </div>
    </div>
  );
}
