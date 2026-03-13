# CLAUDE.md — Chavruta Project Context

## What is Chavruta?

Chavruta (חברותא) is an open-source, community-driven initiative to replace Israel's failing Zoom-based wartime remote education with a better model. Named for the ancient Jewish tradition of paired study — two learners sitting together, questioning and teaching each other.

The project was born in March 2026 during the Israel-Iran war, when schools closed nationwide and Zoom learning collapsed — parents drowning, teachers burning out, kids not learning. Chavruta proposes a fundamentally different approach.

## The Four Pillars

1. **AI-Powered Personalized Learning (Asynchronous):** Each child gets access to an AI tutoring environment anchored to the official Bagrut (matriculation) curriculum in Hebrew. Works on any device including smartphones. Works in bomb shelters. No parental supervision required.

2. **Teacher as Mentor, Not Lecturer:** Teachers shift from multi-hour Zoom lectures to short (15-20 min) targeted mentorship sessions. An AI dashboard shows where each student is struggling. Teachers do what only humans can — build relationships, provide emotional support, guide critical thinking.

3. **Structured Peer Mentorship:** Older students (grades 9-12) paired with younger students (grades 2-5) in assigned pairs with scheduled calls and guided topics. Gives younger kids human support, gives older kids purpose and agency.

4. **Emotional and Community Connection:** Short group video sessions (10-15 min) preserved not for academics but for togetherness — seeing familiar faces, sharing feelings, experiencing normalcy.

## Technical Architecture

### Current State
- Single-page static site (`index.html`) with trilingual Hebrew/English/Arabic toggle
- Hosted on GitHub Pages with custom domain (chavruta.org.il)
- No build tools, no framework — pure HTML/CSS/JS
- Hebrew is the default language
- Forced light mode (dark mode explicitly blocked via `color-scheme: light only`)

### Design System
- **Colors:** Navy (#0A1628), Blue (#1B4965), Sky (#5FA8D3), Gold (#CAA53D), Cream (#FBF8F0)
- **Fonts (web):** DM Serif Display (English headings), DM Sans (English body), Frank Ruhl Libre (Hebrew headings), Heebo (Hebrew body), IBM Plex Sans Arabic (Arabic headings and body)
- **Tone:** Professional but warm. Civic initiative, not a startup pitch. No religious vibes despite Jewish cultural references.

### What Needs to Be Built

#### Phase 1 — Community & Landing (Current)
- [x] Trilingual proposal page (Hebrew/English/Arabic)
- [ ] "How to contribute" section on the site
- [x] GitHub Issues templates for feature requests, school pilot volunteers, content contributions
- [x] README.md with contribution guidelines
- [x] Community WhatsApp group (WhatsApp is the dominant communication channel in Israel, essential for engaging non-technical partners like parents and educators)

#### Phase 2 — Coordination Platform (MVP)
A lightweight platform that does three things:
1. **Mentor matching:** Pairs older students with younger ones based on school, subject strength, availability
2. **Session management:** Provides guided session plans, scheduling, and tracks participation
3. **Teacher dashboard:** Shows which students engaged with AI content, where they're stuck, who needs attention

This is NOT a massive build. Think scheduling + matching engine + content feed + basic dashboard. Could be built as a simple web app.

**Tech stack considerations:**
- Should work on low-bandwidth connections and basic smartphones
- Must support Hebrew (RTL) and Arabic (RTL) as first-class languages
- Should be as simple as possible — teachers who aren't tech-savvy need to use this
- Consider offline-first or low-connectivity patterns (bomb shelter scenario)

#### Phase 3 — AI Tutoring Layer
The AI tutoring environment where students interact with curriculum content. Key decisions:
- **Tool-agnostic approach:** The proposal deliberately doesn't name specific AI vendors. The system should work with multiple backends (OpenAI, Anthropic, Google, open-source models)
- **Curriculum ingestion:** The Ministry of Education's Bagrut materials in Hebrew need to be fed into the AI as context/knowledge base
- **Hebrew-first:** All AI interactions must work fluently in Hebrew. Arabic support for the ~20% of students in the Arab education system
- **Content guardrails:** Students should only interact with curriculum-aligned content, not open internet browsing
- **Device constraints:** Must work on smartphones with basic internet. No camera or stable broadband required

#### Phase 4 — Analytics & Measurement
- Track student engagement and progress against Bagrut benchmarks
- Teacher visibility into student learning gaps
- Pilot program metrics: compare outcomes between AI-assisted schools and Zoom-only schools
- Data privacy: student data must be handled with extreme care, especially for minors

## Key Constraints

### Must-haves
- **Hebrew-first, RTL-native:** This is non-negotiable. Hebrew is the primary language. Arabic is secondary but important.
- **Works on a phone in a bomb shelter:** Low bandwidth, small screen, possibly intermittent connectivity
- **Anchored to Bagrut curriculum:** Not experimental pedagogy. The official Israeli matriculation materials are the content backbone.
- **Teacher-friendly:** If a non-technical teacher can't figure it out in 5 minutes, it's too complex.
- **Privacy-safe for minors:** No data collection beyond what's strictly necessary. Compliance with Israeli privacy law.

### Must-nots
- Don't build a new curriculum — use the existing Bagrut materials
- Don't replace teachers — augment them
- Don't require expensive hardware — smartphones are the baseline
- Don't create vendor lock-in — stay tool-agnostic on the AI layer
- Don't make it religious — culturally Jewish but secular in tone

## Community & Open Source Approach

This is a bottom-up, community-driven project. The philosophy:
- Parents, teachers, principals, and students drive adoption — not Ministry bureaucracy
- Individual engineers contribute because they believe in it, not because their company signed a contract
- Schools can run ad-hoc pilots by stitching together existing AI tools
- The platform we build is the coordination and mentorship layer — the AI tutoring can use off-the-shelf tools initially

### Who's involved
- **Edoe Cohen** — Project lead. Parent, product builder, based in Jaffa.
- Coalition building across the tech, education, and public policy sectors

### Target audiences for the platform
1. Students (ages ~7-18, Hebrew and Arabic speakers)
2. Teachers (varying tech literacy, need simple interfaces)
3. Parents (need to see it's working, need relief from supervision burden)
4. Peer mentors (older students, need guided session plans)
5. School administrators (need aggregate dashboards)

## Localization

### Languages (priority order)
1. Hebrew (עברית) — primary, RTL
2. Arabic (العربية) — secondary, RTL, ~20% of Israeli students
3. English — for international donors, press, diaspora supporters

### Cultural context
- Israeli school year and exam calendar
- Bagrut exam structure and subjects
- IDF Home Front Command guidelines affect when/where students can gather
- Many families share devices among siblings
- "Chavruta" resonates culturally with all Israeli Jews regardless of religiosity

## File Structure (Current)
```
/
├── index.html                          # Main trilingual site (Hebrew default)
├── CLAUDE.md                           # This file
├── README.md                           # Project overview and contribution guide
├── .github/
│   └── ISSUE_TEMPLATE/                 # GitHub issue form templates
│       ├── config.yml                  # Template chooser config + WhatsApp link
│       ├── school-pilot.yml            # School pilot volunteer form
│       ├── content-contribution.yml    # Curriculum/content contribution form
│       ├── feature-request.yml         # Feature request form
│       └── general-feedback.yml        # General feedback form
├── .claude/
│   └── commands/
│       └── ship.md                     # /ship deployment command
└── assets/                             # (future) images, icons, etc.
```

## Development Notes
- No build step currently — just static HTML served by GitHub Pages
- Google Fonts loaded via CDN (DM Serif Display, DM Sans, Frank Ruhl Libre, Heebo, IBM Plex Sans Arabic)
- Language toggle is client-side JS, no server required
- All content is self-contained in the single HTML file
- When adding complexity, consider: Next.js or Astro for static generation, deployed to Vercel (where Edoe hosts other projects)

## Links & References
- [JTA article on Zoom learning failure (March 2026)](https://www.jta.org/2026/03/10/israel/workplaces-open-schools-remain-shut-and-israeli-parents-pull-out-their-hair-over-wartime-zoom-classes)
- [Jerusalem Post on parent struggles](https://www.jpost.com/israel-news/article-889375)
- [Edutopia on AI tutors in flipped classrooms](https://www.edutopia.org/article/using-ai-tutors-flipped-classroom/)
- [Flipped Classroom 2.0 with AI](https://www.facultyfocus.com/articles/blended-flipped-learning/reimagining-the-flipped-classroom-integrating-ai-microlearning-and-learning-analytics-to-elevate-student-engagement-and-critical-thinking/)
