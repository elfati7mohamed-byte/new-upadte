import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import type { CountryOption } from "@/app/data/countries";

export interface CountryDetailCardProps {
  item: CountryOption;
  formatNumbers?: boolean;
}

const CountryDetailCard: React.FC<CountryDetailCardProps> = ({
  item,
  formatNumbers = true,
}) => {
  const {
    name,
    location,
    students,
    universities,
    population,
    slug,
    images,
  } = item;

  const mainImage = images?.[0]?.src;
  const href = `/countries/${slug}`;

  const format = (n?: number) =>
    n == null ? "" : formatNumbers ? n.toLocaleString() : n.toString();

  return (
    <div className="relative h-full flex flex-col rounded-2xl border border-dark/10 dark:border-white/10 group hover:shadow-2xl transition-all duration-300">
      {/* Image Section */}
      <div className="relative w-full h-60 overflow-hidden rounded-t-2xl">
        <Link href={href} className="block w-full h-full">
          {mainImage && (
            <Image
              src={mainImage}
              alt={name}
              fill
              className="object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-75"
              unoptimized
            />
          )}
        </Link>

        <div className="absolute top-5 right-5 p-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition duration-300">
          <Icon
            icon="solar:arrow-right-linear"
            width={20}
            height={20}
            className="text-black"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start gap-4 mb-6">
          <div className="min-w-0">
            <Link href={href}>
              <h3 className="text-xl font-medium text-black dark:text-white group-hover:text-primary transition line-clamp-2">
                {name}
              </h3>
            </Link>
            <p className="text-sm text-black/50 dark:text-white/50 line-clamp-1">
              {location}
            </p>
          </div>
        </div>

        {/* Stats pinned to bottom */}
        <div className="mt-auto flex">
          <div className="flex flex-col gap-2 border-e border-black/10 dark:border-white/20 pr-4">
            <Icon icon="mdi:account-group-outline" width={18} height={18} />
            <p className="text-sm text-black dark:text-white">
              {format(students)} Students
            </p>
          </div>

          <div className="flex flex-col gap-2 border-e border-black/10 dark:border-white/20 px-4">
            <Icon icon="mdi:school-outline" width={18} height={18} />
            <p className="text-sm text-black dark:text-white">
              {format(universities)} Universities
            </p>
          </div>

          <div className="flex flex-col gap-2 pl-4">
            <Icon icon="mdi:earth" width={18} height={18} />
            <p className="text-sm text-black dark:text-white">
              {format(population)} Population
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailCard;