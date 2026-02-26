<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the **DevEvent** Next.js App Router project. The following changes were made:

- **`instrumentation-client.ts`** (new) — Initialises PostHog client-side using Next.js 15.3+ `instrumentation-client` convention. Configured with EU host via reverse proxy (`/ingest`), automatic exception capture, and debug mode in development.
- **`next.config.ts`** (updated) — Added reverse proxy rewrites routing `/ingest/*` and `/ingest/static/*` to the PostHog EU endpoints, plus `skipTrailingSlashRedirect: true` for PostHog compatibility.
- **`.env.local`** (updated) — `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` added with correct EU values.
- **`app/components/ExploreBtn.tsx`** (updated) — Replaced placeholder `console.log` with `posthog.capture('explore_events_clicked')` in the button click handler.
- **`app/components/EventCard.tsx`** (updated) — Added `'use client'` directive and `posthog.capture('event_card_clicked', {...})` with rich properties (title, slug, location, date) on card click.
- **`app/components/Navbar.tsx`** (updated) — Added `'use client'` directive and `posthog.capture` calls for `nav_events_clicked` and `nav_create_event_clicked` on the respective nav links.

## Events instrumented

| Event Name | Description | File |
|---|---|---|
| `explore_events_clicked` | User clicks the "Explore events" CTA button — top of the discovery funnel | `app/components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicks a featured event card to view its detail page — key engagement event (properties: `event_title`, `event_slug`, `event_location`, `event_date`) | `app/components/EventCard.tsx` |
| `nav_events_clicked` | User clicks "Events" in the navigation bar — indicates browsing intent | `app/components/Navbar.tsx` |
| `nav_create_event_clicked` | User clicks "Create Event" in the navigation bar — indicates creator intent | `app/components/Navbar.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- 📊 **Dashboard — Analytics basics**: https://eu.posthog.com/project/129331/dashboard/533379
- 📈 **Explore & Event Click Trends** (line chart of CTA + card clicks over time): https://eu.posthog.com/project/129331/insights/lPNvqHNv
- 🔽 **Event Discovery Funnel** (Explore CTA → Event Card click conversion): https://eu.posthog.com/project/129331/insights/PJ7cUQtN
- 🏆 **Most Popular Events** (card clicks broken down by event title): https://eu.posthog.com/project/129331/insights/dWirH2KG
- 🧭 **Navigation Intent — Events vs Create Event** (browsing vs creator intent): https://eu.posthog.com/project/129331/insights/Vlon61D3
- 👥 **Daily Active Users Engaging with Events** (unique users clicking event cards per day): https://eu.posthog.com/project/129331/insights/QeubnbNw

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
