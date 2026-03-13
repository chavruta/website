# Chavruta (חַבְרוּתָא)

**AI-powered emergency education for Israel's children during wartime.**

Chavruta is a community-driven initiative to replace Israel's failing Zoom-based remote education with a model that actually works — personalized AI tutoring, structured peer mentorship, and teacher-led mentoring. Named for the ancient Jewish tradition of paired study, where two learners sit together, question, and teach each other.

The project was born in March 2026, when schools closed nationwide during the Israel-Iran war and Zoom learning collapsed — parents drowning, teachers burning out, kids not learning.

**Website:** [chavruta.org.il](https://chavruta.org.il)

## The Model: Four Pillars

1. **AI-Powered Personalized Learning** — Each child gets an AI tutor anchored to the official Bagrut (matriculation) curriculum. Works on a smartphone, in a bomb shelter, at 2am, without parental supervision.

2. **Teacher as Mentor, Not Lecturer** — Teachers shift from multi-hour Zoom lectures to short (15-20 min) targeted mentorship, guided by an AI dashboard showing where each student struggles.

3. **Structured Peer Mentorship** — Older students (grades 9-12) paired with younger students (grades 2-5) in scheduled sessions with guided topics. Purpose and connection for both.

4. **Emotional and Community Connection** — Short group video sessions (10-15 min) for togetherness, not academics. Familiar faces, shared feelings, a moment of normalcy.

## Current Status

We are in the **coalition-building phase** — assembling technologists, educators, and civic leaders to move from concept to deployment. The landing page is live at [chavruta.org.il](https://chavruta.org.il) in Hebrew, English, and Arabic.

No platform code is being built yet. This repo currently contains the static landing page.

## How to Contribute

There are many ways to help, and you don't need to be a developer:

### Join the conversation
- **[Join our WhatsApp group](https://chat.whatsapp.com/LLGqYWYCZ5EK4Z0luPd5OC)** — this is where the coalition coordinates. Parents, teachers, engineers, policy people — all welcome.

### If you're a teacher or school administrator
- **[Volunteer your school for a pilot](../../issues/new?template=school-pilot.yml)** — We're looking for 4-6 schools (Jewish and Arab sector) willing to test this model.
- Share your experience with remote learning and what's not working — your insights shape the solution.

### If you're a parent
- Tell us what you need — what's failing, what would help. Open a [general feedback issue](../../issues/new?template=general-feedback.yml) or join the WhatsApp group.

### If you're an engineer or designer
- Look at the [open issues](../../issues) for things that need building.
- The landing page (`index.html`) is a single static HTML file — contributions welcome.
- When we move to the platform phase, we'll need full-stack help. Stay tuned.

### If you're in education policy or civic leadership
- We need champions who can open doors to the Ministry of Education and school networks.
- Join the WhatsApp group and introduce yourself.

### If you speak Arabic natively
- We especially need native Arabic speakers to review and refine the Arabic version of the site for tone, terminology, and cultural sensitivity.

### Content contributions
- **[Submit curriculum content or educational resources](../../issues/new?template=content-contribution.yml)** — Bagrut materials, study guides, or pedagogical insights.

## Contributing Code

1. Fork the repo
2. Create a feature branch (`git checkout -b my-change`)
3. Make your changes
4. Submit a pull request with a clear description of what you changed and why

Keep it simple — this project values clarity over cleverness. The site should work on a smartphone with a slow connection.

### Languages

The site is trilingual. If you're editing content, please update all three language versions (Hebrew, English, Arabic) or note in your PR which languages are covered so someone else can translate.

## Technical Details

- **Static site:** Pure HTML/CSS/JS, no build step, hosted on GitHub Pages
- **Fonts:** DM Serif Display, DM Sans (English), Frank Ruhl Libre, Heebo (Hebrew), IBM Plex Sans Arabic (Arabic)
- **Design:** Hebrew-first, RTL-native, forced light mode
- **Baseline device:** Smartphone with basic internet. No camera, broadband, or laptop required.

## Key Principles

- **Hebrew-first, RTL-native** — Hebrew is the primary language. Arabic is equally important.
- **Works on a phone in a bomb shelter** — Low bandwidth, small screen, intermittent connectivity.
- **Anchored to Bagrut curriculum** — Official Israeli matriculation materials, not experimental pedagogy.
- **Teacher-friendly** — If a non-technical teacher can't figure it out in 5 minutes, it's too complex.
- **Don't replace teachers — augment them.**
- **Don't create vendor lock-in** — Stay tool-agnostic on the AI layer.

## License

This project is open source. License TBD — we want to ensure the work stays open and community-owned.

## Contact

**Edoe Cohen** — Project lead
- [Join the WhatsApp group](https://chat.whatsapp.com/LLGqYWYCZ5EK4Z0luPd5OC)
- [Open an issue](../../issues/new)
