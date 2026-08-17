// components/DetailPageTemplate.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export type DetailPageItem = {
  name: string;
  slug: string;
  location: string;
  //rate: string;
  stat1: number;
  stat2: number;
  stat3: number;
  description?: string;
  images: { src: string }[];
};

type StatConfig = {
  label: string;
  icon: string;
};

type Feature = {
  title: string;
  desc: string;
  icon: string;
};

type Offer = {
  text: string;
  icon: string;
};

type QuickLink = {
  href: string;
  text: string;
  icon?: string;
};

type TemplateLabels = {
  backText: string; // "Back to Countries"
  detailsTitle: string; // "Country details"
  offersTitle: string; // "What this country offers"
  mapTitle: string; // "Location map"
  budgetTitle?: string; // "Estimated monthly budget"
  budgetValue?: string; // "€900–€1,300"
  budgetNote?: string; // "(rent + food + transport)"
  ctaText?: string; // "Get in touch"
  breadcrumbBase: string; // "countries"
};

type DetailPageTemplateProps = {
  item: DetailPageItem;

  basePath: string; // "countries" | "universities" | ...
  backHref: string; // "/countries"
  quickLinks?: QuickLink[];

  stats: {
    stat1: StatConfig;
    stat2: StatConfig;
    stat3: StatConfig;
  };

  labels: TemplateLabels;

  features?: Feature[];
  offers?: Offer[];

  testimonial?: {
    text: string;
    name: string;
    role: string;
  };

  mapSubtitle?: string; // e.g. "Cyprus • Eastern Mediterranean"
  mapSlot?: React.ReactNode; // plug in real map component
};

export default function DetailPageTemplate({
  item,
  basePath,
  backHref,
  quickLinks = [],
  stats,
  labels,
  features = [],
  offers = [],
  testimonial,
  mapSubtitle,
  mapSlot,
}: DetailPageTemplateProps) {
  const mainImage = item.images?.[0]?.src;
  const sideImages = item.images?.slice(1, 4) || [];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Top nav / back */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-black/70 dark:text-white/70 hover:text-primary duration-200"
        >
          <Icon icon="solar:arrow-left-linear" width={18} height={18} />
          {labels.backText}
        </Link>

        <div className="text-sm text-black/50 dark:text-white/50">
          / {labels.breadcrumbBase} /{" "}
          <span className="text-black dark:text-white">{item.slug}</span>
        </div>
      </div>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-black dark:text-white">
          {item.name}
        </h1>
        <p className="text-black/50 dark:text-white/50 mt-2">{item.location}</p>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left */}
        <div className="lg:col-span-8">
          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-8 relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
              {mainImage && (
                <Image
                  src={mainImage}
                  alt={item.name}
                  width={900}
                  height={600}
                  className="w-full h-[340px] md:h-[420px] object-cover"
                  unoptimized
                />
              )}
            </div>

            <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4">
              {sideImages.map((img, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10"
                >
                  <Image
                    src={img.src}
                    alt={`${item.name} photo ${idx + 1}`}
                    width={500}
                    height={400}
                    className="w-full h-[160px] md:h-[132px] object-cover"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            <StatBlock icon={stats.stat1.icon} value={item.stat1} label={stats.stat1.label} />
            <StatBlock icon={stats.stat2.icon} value={item.stat2} label={stats.stat2.label} />
            <StatBlock icon={stats.stat3.icon} value={item.stat3} label={stats.stat3.label} />
          </div>

          {/* Details */}
          <div className="mt-8 rounded-2xl border border-black/10 dark:border-white/10 p-6">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              {labels.detailsTitle}
            </h2>

            {features.length > 0 && (
              <div className="space-y-4">
                {features.map((f, i) => (
                  <FeatureRow key={i} title={f.title} desc={f.desc} icon={f.icon} />
                ))}
              </div>
            )}

            {item.description && (
              <p className="mt-6 text-black/70 dark:text-white/70 leading-7">
                {item.description}
              </p>
            )}
          </div>

          {/* Offers */}
          {offers.length > 0 && (
            <div className="mt-6 rounded-2xl border border-black/10 dark:border-white/10 p-6">
              <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                {labels.offersTitle}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-black/70 dark:text-white/70">
                {offers.map((o, i) => (
                  <OfferItem key={i} icon={o.icon} text={o.text} />
                ))}
              </div>
            </div>
          )}

          {/* Map */}
          <div className="mt-6 rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden">
            <div className="p-4 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-black dark:text-white">
                {labels.mapTitle}
              </h3>
              {mapSubtitle && (
                <span className="text-sm text-black/50 dark:text-white/50">
                  {mapSubtitle}
                </span>
              )}
            </div>

            <div className="h-[280px]">
              {mapSlot ? (
                mapSlot
              ) : (
                <div className="h-full flex items-center justify-center text-black/50 dark:text-white/50">
                  Map goes here (Google Maps / Leaflet)
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="lg:col-span-4 space-y-6">
          {/* Budget / CTA */}
          {(labels.budgetTitle || labels.ctaText) && (
            <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6">
              <div className="mb-4">
                {labels.budgetTitle && (
                  <p className="text-sm text-black/50 dark:text-white/50">
                    {labels.budgetTitle}
                  </p>
                )}
                {labels.budgetValue && (
                  <div className="text-3xl font-semibold text-black dark:text-white mt-1">
                    {labels.budgetValue}
                  </div>
                )}
                {labels.budgetNote && (
                  <p className="text-sm text-black/50 dark:text-white/50 mt-1">
                    {labels.budgetNote}
                  </p>
                )}
              </div>

              {labels.ctaText && (
                <button className="w-full py-3 rounded-full bg-primary text-white font-medium hover:opacity-90 duration-200">
                  {labels.ctaText}
                </button>
              )}
            </div>
          )}

          {/* Testimonial */}
          {testimonial && (
            <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon icon="solar:chat-round-linear" width={20} height={20} />
                </div>
                <div>
                  <p className="text-black/70 dark:text-white/70 leading-7">
                    {testimonial.text}
                  </p>

                  <div className="mt-4">
                    <p className="font-medium text-black dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-black/50 dark:text-white/50">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Quick links */}
          {quickLinks.length > 0 && (
            <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6">
              <h4 className="text-lg font-semibold text-black dark:text-white mb-4">
                Next steps
              </h4>

              <div className="flex flex-col gap-3">
                {quickLinks.map((q, i) => (
                  <Link
                    key={i}
                    href={q.href}
                    className="inline-flex items-center justify-between rounded-xl px-4 py-3 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 duration-200"
                  >
                    <span className="text-black dark:text-white">{q.text}</span>
                    <Icon icon={q.icon || "solar:arrow-right-linear"} width={18} height={18} />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Rate chip (optional display) */}
        </div>
      </div>
    </div>
  );
}

function StatBlock({ icon, value, label }: { icon: string; value: number; label: string }) {
  return (
    <div className="rounded-2xl border border-black/10 dark:border-white/10 p-4 flex items-center gap-3">
      <Icon icon={icon} width={22} height={22} />
      <div>
        <p className="text-lg font-semibold text-black dark:text-white">
          {value.toLocaleString()}
        </p>
        <p className="text-sm text-black/50 dark:text-white/50">{label}</p>
      </div>
    </div>
  );
}

function FeatureRow({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  return (
    <div className="flex gap-3">
      <div className="w-10 h-10 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center">
        <Icon icon={icon} width={20} height={20} />
      </div>
      <div>
        <p className="font-medium text-black dark:text-white">{title}</p>
        <p className="text-sm text-black/60 dark:text-white/60">{desc}</p>
      </div>
    </div>
  );
}

function OfferItem({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-2">
      <Icon icon={icon} width={18} height={18} />
      <span className="text-sm">{text}</span>
    </div>
  );
}