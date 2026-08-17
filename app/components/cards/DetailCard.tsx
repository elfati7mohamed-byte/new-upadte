"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import type { DetailBasePath, DetailCardItem } from "@/app/data/DetailCardItem";

export type DetailCardLabels = {
  stat1: string;
  stat2: string;
  stat3: string;
};

export type DetailCardIcons = {
  stat1: string;
  stat2: string;
  stat3: string;
};

export interface DetailCardProps {
  item: DetailCardItem;
  basePath: DetailBasePath;
  labels: DetailCardLabels;
  icons: DetailCardIcons;
  formatNumbers?: boolean;
}

const DetailCard: React.FC<DetailCardProps> = ({
  item,
  basePath,
  labels,
  icons,
  formatNumbers = true,
}) => {
  const { name, location, stat1, stat2, stat3, slug, images } = item;
  const mainImage = images?.[0]?.src || "/placeholder.jpg";
  const href = `/${basePath}/${slug}`;

  const format = (n?: number) =>
    n == null ? "" : formatNumbers ? n.toLocaleString() : n.toString();

  return (
    <div className="relative w-full min-w-0 h-full flex flex-col rounded-2xl border border-black/10 dark:border-white/10 group hover:shadow-xl transition-all duration-300 bg-white dark:bg-dark overflow-hidden">
      
      {/* Top Image Section - Height reduced for smaller/responsive look */}
      <div className="relative w-full h-40 sm:h-48 overflow-hidden rounded-t-2xl shrink-0">
        <Link href={href} className="block w-full h-full">
          <Image
            src={mainImage}
            alt={name}
            fill
            className="object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-90"
            unoptimized
          />
        </Link>

        <div className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition duration-300 shadow-sm">
          <Icon
            icon="solar:arrow-right-linear"
            width={16}
            height={16}
            className="text-black"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-4">
        
        {/* Title & Location */}
        <div className="min-w-0">
          <Link href={href}>
            <h3 className="text-base sm:text-lg font-bold text-black dark:text-white group-hover:text-primary transition line-clamp-1 leading-snug">
              {name}
            </h3>
          </Link>
          <p className="text-xs sm:text-sm text-black/50 dark:text-white/50 line-clamp-1 mt-1">
            {location}
          </p>
        </div>

        {/* Stats Grid - Fixed 3 columns layout that auto-fits all screens */}
        <div className="grid grid-cols-3 gap-1 pt-3 border-t border-black/10 dark:border-white/10 text-center">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center px-1 border-e border-black/10 dark:border-white/10 min-w-0">
            <Icon icon={icons.stat1} width={18} height={18} className="text-primary mb-1 shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-black dark:text-white truncate max-w-full">
              {format(stat1)}
            </span>
            <span className="text-[10px] sm:text-xs text-black/50 dark:text-white/50 truncate max-w-full">
              {labels.stat1}
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center px-1 border-e border-black/10 dark:border-white/10 min-w-0">
            <Icon icon={icons.stat2} width={18} height={18} className="text-primary mb-1 shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-black dark:text-white truncate max-w-full">
              {format(stat2)}
            </span>
            <span className="text-[10px] sm:text-xs text-black/50 dark:text-white/50 truncate max-w-full">
              {labels.stat2}
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center px-1 min-w-0">
            <Icon icon={icons.stat3} width={18} height={18} className="text-primary mb-1 shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-black dark:text-white truncate max-w-full">
              {format(stat3)}
            </span>
            <span className="text-[10px] sm:text-xs text-black/50 dark:text-white/50 truncate max-w-full">
              {labels.stat3}
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default DetailCard;