# Local SEO Council Pages — SOP

A repeatable playbook for building local council pages that rank without falling into the duplicate-doorway-page trap. Built around tradie clients on 11ty / CodeStitch sites, but the principles work elsewhere.

---

## Strategy

**Goal:** Rank for `[Service] in [Council/Suburb]` keyword patterns across the client's broader service area, expanding visibility beyond their home suburb.

**Why councils first?** Council-level pages are the right unit to start with. Broad enough to gather meaningful traffic, specific enough to be locally relevant, and they avoid the cost of building 50+ thin suburb pages from day one. Once council pages start ranking, drop to suburb level for the high-value ones.

**Realistic scope:** 5 to 12 councils the client genuinely services. Skip councils that are too far for them to take work in. Better to be strong in 5 than thin across 15.

---

## What works (the happy medium)

Two extremes to avoid:

1. **"Article about the location"** — long passages about local housing history, suburb character, demographics. Reads like Wikipedia, doesn't sell. Visitors bounce.
2. **"Find and replace"** — same page repeated with the council name swapped. Google's near-duplicate detection may collapse them to one canonical, killing the play.

The right framing is a **standard service page that targets the council keyword**. Sales-led, localised in subtle but genuine ways, roughly 50 to 60% unique copy per page.

---

## Page anatomy

Every council page uses the same 8 sections. Sections fall into three categories:

- **Templated** — same across all pages (fine, like a header/footer)
- **Slightly localised** — minor swap-ins (council name, area mentions)
- **Genuinely unique** — body content that earns rankings

| Section | Type | Notes |
|---|---|---|
| Hero | Templated | H1 mirrors home page title format. Benefit-led intro line with a single council-name swap (see Hero rules below). |
| Intro (SBSR) | Genuinely unique | Sales-led, mirrors the home page intro tone. 5 paragraphs of benefit copy with 1 to 2 organic local mentions woven in. **Do not explain the council to the visitor.** That reads as blog content. Heavy local context belongs lower on the page. |
| Services grid | Slightly localised | Same service cards as the home page (match the count to what the client actually offers, do not pad to 6). Append a short council-flavoured tail to each card description. |
| Why Choose Us (SBS) | Genuinely unique | This is where the heavy local context lives. 3 paragraphs covering the council's housing mix, the patterns of work that come up there, and a direct-contact closer. Real suburb mentions are good. |
| Reviews | Templated | Same testimonials. Topper swaps to "Trusted By [Council] Home Owners". |
| Contact | Templated | Same form. Heading swaps via Nunjucks variable (see below). |
| Extended services | Genuinely unique | The biggest SEO play. Each H3 talks about that service in context of this council — common job types, real suburb mentions, local angles. Internal links to the matching service pages. |
| FAQ | Genuinely unique | 3 council-specific Qs (coverage, a local concern such as overlays/permits, common job type) + 3 generic (cost, licensing, smaller jobs). |

---

## Hero rules

- **H1 must mirror the home page title pattern.** If the home page is "Premium Outdoor Living & Home Renovation Builders Melbourne", council pages become "Outdoor Living & Home Renovation Builders [Council]". Keep the structure parallel so the visitor sees the same offer they'd see on the home page.
- **Subline mirrors home page subline** with one swap: replace the home location term with the council name. Don't rewrite it.
- **Topper can stay identical to the home page topper** — it's templated, not where you earn uniqueness.

---

## Intro section rules (the section that gets ruined first)

The intro SBSR is the section that's easiest to get wrong. First drafts almost always slide into a Whitehorse/Manningham/etc. *explainer*. They shouldn't.

**Do:**
- Mirror the home page intro paragraph-by-paragraph.
- Replace the home location term with the council name in the first paragraph.
- Weave 1 to 2 organic local mentions into the second paragraph (e.g. "decks and alfresco spaces tucked into established Box Hill and Blackburn backyards" or "full kitchen and bathroom renovations in older Mitcham and Vermont homes").
- Keep paragraphs 3 to 5 effectively templated (experience, direct-builder-contact, CTA).

**Don't:**
- Don't write an opening that reads like "Whitehorse is a varied council with a mix of housing styles..." — this is the exact failure mode.
- Don't explain the council back to a visitor who lives there.
- Don't list every suburb. One or two natural mentions per paragraph is the limit.

---

## Content rules

- **Plain English.** "Older homes" not "post-war brick veneer". Skip jargon.
- **Sell, don't lecture.** No history-of-the-suburb. Every paragraph should answer "what's in this for me" for the visitor.
- **Suburb mentions are subtle.** A few real suburbs in the body content is fine; don't list every suburb in the council.
- **Authentic local angles only.** If you don't know the area well, stick to general statements about the area's housing mix. Don't fabricate.
- **Avoid em dashes (—).** They feel artificial and date the copy. Use sentence breaks or commas instead. This is a tell that the copy was rushed or generated, and it tanks the natural feel of the page.
- **Length:** Each page lands around 300 to 400 lines of HTML / 700 to 1,000 words.

---

## Technical setup (11ty / CodeStitch)

### Directory structure
```
src/content/pages/areas-we-serve/
  areas-we-serve.html      ← index page, permalink: /areas-we-serve/
  [council-slug].html      ← one per council, permalink: /areas-we-serve/[council]/
```

### Reusable contact area name (Nunjucks)
Make the contact include accept a per-page area name. Preserve the original heading for non-council pages:

```html
<!-- src/_includes/sections/contact.html -->
<h2 class="cs-title">{% if contactArea %}Planning a Build or Renovation in {{ contactArea }}?{% else %}{{ defaultContactHeading }}{% endif %}</h2>
```

Use it on each council page just before the include:
```nunjucks
{% set contactArea = "Whitehorse" %}
{% include 'sections/contact.html' %}
```

### CSS — source, not build output
If the project compiles SCSS to CSS (most CodeStitch builds do), **add styles to the SCSS source**, not the built CSS. The build overwrites the built file on every run. Confirm by checking `.eleventy.js` or the project's build config.

### Footer link, not nav
Don't clutter the main nav. Add "Areas We Serve" to the footer Quick Links instead.

### Home page integration
Add a compact "Areas We Serve" section to the home page (short intro + map + a separate floating card with the council list). Place it between the extended-services content section and the FAQ. The same section ID and styles get reused on the index page.

---

## Areas section layout (the pattern that took two passes to get right)

The "Areas We Serve" section appears in two places (home page + index page) and uses the same component on both. The structure that works:

```
[Section: #areas-1588]
└─ .cs-container (flex row at tablet+, justify-content: center)
   ├─ .cs-left (flex 0 1 ~640px)
   │  ├─ .cs-content  (topper, h2, 2 short paragraphs)
   │  └─ .cs-map      (Google Maps iframe, ~320-360px tall)
   └─ .cs-card (flex 0 0 ~360px, sticky top)
      ├─ .cs-topper "Explore Our Service Regions"
      ├─ h3 "Areas we work in"
      └─ .cs-list (one li per council, plain council name only)
```

**Key gotchas:**
- **Map size matters.** First draft had the map filling the whole left column at 480px tall and it dominated the section. Cap at ~320px mobile / ~360px desktop.
- **Don't let the left column flex-grow.** If `.cs-left` is `flex: 1`, the map stretches past 800px wide and looks oversized. Use `flex: 0 1 640px` so the column stops at a sensible reading width.
- **Use `justify-content: center` on the container** so the row sits centered in the viewport on wide screens, instead of pushed left with empty space on the right of the card.
- **Plain council names in the card.** Don't pack suburb sublabels under each link — visually noisy and the map already handles geographic context.
- **The card on the right has its own topper + h3** to signal it's a secondary nav element, not just a list dumped on the page.

### Map embed
Embed a Google Maps iframe centered on the geographic midpoint of the service area, zoomed out enough to show all councils:
```html
<iframe src="https://maps.google.com/maps?ll=-37.85,145.18&t=m&z=10&output=embed" ...>
```
For something more polished later, use Google My Maps with a polygon over the service area, or the Embed API with markers per council.

---

## Order of execution

1. **Define councils.** Talk to the client about which councils they actually take work in. Skip the "too far" ones.
2. **Update the contact include** to accept a `contactArea` variable (does not affect non-council pages).
3. **Build the index page** (`areas-we-serve.html`). Hero, council card grid, reviews, contact. (The full map+list section is optional on the index — the home page version covers that role and the index works fine as a card grid.)
4. **Add SCSS** for the new sections to the source (`#areas-1588` and `#areas-index-1600` patterns).
5. **Build the first council page** as the locked template. Get it right before duplicating.
6. **Sanity-check the template** with the client. Tone, length, structure.
7. **Roll out the rest of the councils.** Same structure, but rewrite the genuinely-unique sections (intro, why-us, extended services, FAQs) with content authentic to that council.
8. **Update the home page** with the compact areas section between the extended-services block and the FAQ.
9. **Add footer link** to the index page.
10. **Submit URLs** to Google Search Console for indexing.
11. **Wait 4 to 8 weeks** for rankings to settle. Use GSC data to identify which councils pull traffic — those are the ones worth dropping to suburb level on the next pass.

---

## Common mistakes (lessons learned)

1. **Going too article-heavy in the intro.** First drafts often turn the intro into a council explainer ("Whitehorse is a varied council with..."). Visitors who live there don't need their suburb explained. Mirror the home page intro instead, with one or two organic local mentions woven in. Save the heavy local context for the Why Choose Us and Extended Services sections.
2. **Going too template-heavy.** Second drafts often end up 95% identical across pages. Google's near-duplicate detection collapses them. Roughly 50 to 60% unique copy is the sweet spot, and the unique copy concentrates in Why Choose Us, Extended Services, and FAQ.
3. **Hero title mismatch.** Council page H1 needs to mirror the home page H1 format. Don't reinvent the title for council pages.
4. **Em dashes everywhere.** Every long pause becomes "—" by default. They read as artificial. Sentence breaks and commas do the same job and feel natural.
5. **Putting CSS in the wrong place.** SCSS source compiles over the built CSS file on every run. Always edit the source.
6. **Cluttering the main nav.** Adding "Areas We Serve" to the top nav makes the site look spammy. Footer is the right home.
7. **Hardcoding the contact section.** A Nunjucks variable for the area name keeps the contact heading on-message per page without forking the include.
8. **Areas section map oversized + content flush left.** The left column needs a max-width and the map needs a sensible height cap, otherwise the section feels imbalanced and the map dominates.
9. **Padding the services grid.** If the client only offers 3 services, the council page services grid has 3 cards. Don't fabricate categories to fit a "6 cards" template from someone else's site.

---

## Files touched per project

```
src/index.html                                          (add areas section)
src/_includes/sections/footer.html                      (add areas link)
src/_includes/sections/contact.html                     (add contactArea variable)
src/assets/sass/local.scss                              (add #areas-1588 + #areas-index-1600 styles)
src/content/pages/areas-we-serve/areas-we-serve.html    (new)
src/content/pages/areas-we-serve/[council].html         (new, x N)
```

---

## Reference: section ID conventions used

- `#areas-1588` — the "Areas We Serve" section with map + sticky council card
- `#areas-index-1600` — the grid of council cards on the index page
- `#sbsr-1309` — the side-by-side reverse layout (used for intro)
- `#sbs-683` — the side-by-side layout (used for why-us)
- `#services-1251` — the services card grid
- `#content-page-848` — the extended services / long-form local content section
- `#faq-1263` — the FAQ section
- `#reviews-864` — the testimonials section
- `#hero-1786` — the page hero

These are CodeStitch defaults. If a project uses different IDs, swap accordingly but keep the structural pattern.
