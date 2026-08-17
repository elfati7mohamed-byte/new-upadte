
We standardized the **country destination pages** to follow one shared premium layout, using the **Northern Cyprus page as the master structure**.

## Main layout system applied

All country pages are being moved toward this structure:

1. Hero section
    
2. Long description + 4 quick info cards
    
3. Scholarships / financial aid section
    
4. Monthly budget / living costs section
    
5. Top universities section
    
6. Apply CTA section
    

This structure has already been adapted for:

- Northern Cyprus
    
- Malaysia
    
- Rwanda
    
- Turkey
    
- Uganda
    

---

## Country pages

We rebuilt the newer country pages so they visually match the Northern Cyprus page style instead of each having a different layout language.

### Northern Cyprus

Used as the main reference page/template.

### Malaysia

Reworked to use the same structure as Northern Cyprus:

- same hero style
    
- same text + cards layout
    
- same scholarship card system
    
- same monthly budget block
    
- added university section
    
- added themed apply form
    

### Rwanda

Reworked to match the same full structure:

- hero updated to shared layout style
    
- intro section changed to text + quick cards
    
- scholarship section matched to shared style
    
- monthly budget section changed to same dark block format
    
- added university section
    
- added themed apply form
    

### Turkey

Reworked to same shared structure:

- old “why choose Turkey” box replaced with the same quick-card pattern
    
- scholarship section restyled to match system
    
- monthly budget block updated to shared style
    
- added university section
    
- added themed apply form
    

### Uganda

Reworked to same shared structure:

- intro section moved into shared text + quick-card design
    
- scholarship section moved into shared 3-card pattern
    
- budget section moved into same dark layout
    
- added university section
    
- added themed apply form
    

---

## Country data

We cleaned up and improved the country data structure used for country cards.

### `Countries.ts`

`countryOptions` contains:

- `name`
    
- `slug`
    
- `location`
    
- `students`
    
- `universities`
    
- `population`
    
- `description`
    
- `images`
    
- `benefits`
    

We also replaced placeholder values with more realistic stats and descriptions for:

- Turkey
    
- Malaysia
    
- Cyprus
    
- Rwanda
    
- Uganda
    

There was also discussion that **Northern Cyprus** may need to be represented separately from Cyprus in some places depending on page slug / filtering logic.

---

## Countries page

We separated countries from the old generic `DetailCard` system.

### New dedicated component

Created a dedicated `CountryDetailCard.tsx` so countries no longer depend on university-style labels.

### Countries page

Updated `page.tsx` for countries to map through:

- `CountryDetailCard`
    
- `countryOptions`
    

instead of using generic `DetailCard` with labels/icons meant for universities.

---

## Universities data model

We cleaned the university data structure so universities can belong to countries properly.

### New `UniversityItem`

University items now use:

```ts
export interface UniversityItem {
  name: string;
  slug: string;
  location: string;
  country: {
    name: string;
    slug: string;
  };
  faculties: number;
  programs: number;
  ranking: number;
  description?: string;
  images: {
    src: string;
  }[];
}
```

This was done so:

- country pages can filter universities properly
    
- universities are no longer guessed from `location`
    
- the data model is cleaner and more scalable
    

---

## Generic card architecture

We kept `DetailCard` as a **generic UI card**, but stopped treating it as the raw source data model.

### Final architecture

- `UniversityItem` = source university data
    
- `CountryOption` / `CountryItem` = source country data
    
- `DetailCardItem` = presentation shape only
    
- `DetailCard.tsx` = generic card UI
    

### Mappers

We use mappers to transform source data into generic card data:

- `universityToDetailItem()`
    
- `countryToDetailItem()`
    

That keeps the UI reusable without polluting source models.

---

## Universities page

The universities page still uses the generic `DetailCard`, but now it should receive mapped data from `UniversityItem` through `universityToDetailItem()`.

So the universities page keeps:

- labels
    
- icons
    
- generic card layout
    

while the source university data remains clean.

---

## Country-specific universities section

Created `CountryUniversitiesSection.tsx`.

### Purpose

This component:

- imports `universityOptions`
    
- filters universities by `country.slug`
    
- sorts / slices if needed
    
- maps them into `DetailCard`
    
- shows the top universities for that specific country page
    

### Example usage

Used like:

```tsx
<CountryUniversitiesSection
  countrySlug="uganda"
  countryName="Uganda"
/>
```

This was added into country pages like:

- Northern Cyprus
    
- Malaysia
    
- Rwanda
    
- Turkey
    
- Uganda
    

Important: `countrySlug` must match the slug used inside each university’s `country.slug`.

---

## Apply form (`ApplyCard`)

We heavily improved `ApplyCard`.

### Initial improvements

- removed the old purple gradient background
    
- made the selected country auto-detect from the route using `usePathname()`
    
- still supports `preferredCountry` prop override
    

### Theme system

We then added support for per-page styling via a theme prop.

### `ApplyCard.tsx`

Now supports:

- `preferredCountry?: string`
    
- `theme?: ApplyCardTheme`
    

### `ApplyCardTheme`

The theme controls:

- accent text color
    
- accent background color
    
- accent soft badge background
    
- icon accent color
    
- focus ring/border color
    
- button hover color
    
- secure card background
    
- secure card text/subtext
    
- secure blob tint
    

### Theme presets

Created separate theme presets in:

- `applyCardTheme.ts` or `applyCardThemes.ts` depending on final file naming
    

Theme presets were added for:

- cyprus
    
- northernCyprus
    
- malaysia
    
- turkey
    
- uganda
    
- rwanda
    

### Important fix

The theme presets had to be moved **out of `ApplyCard.tsx`** because importing named exports from a client component caused a React Client Manifest / RSC bundler issue.

So:

- `ApplyCard.tsx` remains client component
    
- theme presets are stored in a separate normal module
    

---

## Apply form usage

Country pages now use the form like:

```tsx
<ApplyCard
  preferredCountry="Uganda"
  theme={applyCardThemes.uganda}
/>
```

This makes the form auto-match the page color system.

---

## Apply form secure card

We also customized the “Secure Process” block inside `ApplyCard`.

### What changed

- the secure card is now theme-colored per page
    
- the shield icon stays white
    
- the icon position was moved to the top-right corner
    
- hover animation works again using `group` and `group-hover`
    

This makes:

- Cyprus / Northern Cyprus → blue secure card
    
- Malaysia / Rwanda → green secure card
    
- Turkey → red secure card
    
- Uganda → amber card
    

---

## Ribbon / popular badge

We fixed the scholarship “POPULAR” badge/ribbon issue.

### Fixes applied

- removed clipping issues caused by `overflow-hidden`
    
- repositioned the badge so it stays visible
    
- in some sections changed it to a clean top-right pill badge instead of a rotated ribbon for reliability
    

---

## Misc notes

- There were broken image issues earlier; public image paths should still be checked carefully.
    
- Slug consistency is important:
    
    - if country page uses `northern-cyprus`, university data and section filters must also use `northern-cyprus`
        
- Some import paths may still need consistency cleanup:
    
    - `applyCardTheme` vs `applyCardThemes`
        
    - `components/cards` vs `components/sections` for `CountryUniversitiesSection`
        

---

## Current goal achieved

We now have:

- a shared destination-page design system
    
- cleaner country/university data separation
    
- reusable filtered university sections for country pages
    
- a themed, route-aware application form
    
- countries separated from the old generic university card system where needed
    
