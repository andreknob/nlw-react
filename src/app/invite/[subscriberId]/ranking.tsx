import { getSubscribersRanking } from '@/http/api';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import bronze from '../../../assets/medal-bronze.svg';
import gold from '../../../assets/medal-gold.svg';
import silver from '../../../assets/medal-silver.svg';

export async function Ranking() {
  const { ranking } = await getSubscribersRanking();

  const renderMedal = (index: number) => {
    let medal: StaticImport;

    if (index === 0) medal = gold;
    else if (index === 1) medal = silver;
    else medal = bronze;

    return <Image src={medal} alt="" className="absolute top-0 right-8" />;
  };

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Subscriptions Ranking
      </h2>

      <div className="space-y-4">
        {ranking.map((item, index) => (
          <div
            key={item.id}
            className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
          >
            <span className="text-sm text-gray-300 leading-none">
              <span className="font-semibold">{index + 1}º</span> | {item.name}
            </span>

            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
              {item.score}
            </span>

            {renderMedal(index)}
          </div>
        ))}
      </div>
    </div>
  );
}
