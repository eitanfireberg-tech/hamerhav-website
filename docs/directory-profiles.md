# Off-site discoverability: directory profiles and Google Business Profile

Not deployed (Firebase serves only `out/`). Use this as the source text when updating Keren's external listings.
Every claim here also appears on kerenfireberg.co.il. Keep it that way: directories, site and schema should all say the same thing.

## Why this matters

In an agent search test, Keren matched all three criteria (psychodrama, Kfar Saba, children/grief) but was never found.
The search agent relied on directories (Yahat, Al HaSapa, Betipulnet, Doctorita), and she either has no profile there or only a stub.
Order of impact: directories > site topic pages (done) > Google Business Profile.

## Checklist

| # | Where | Action | Owner |
|---|-------|--------|-------|
| 1 | Doctorita | Change the category from "טיפול באמנות" to **פסיכודרמה**. Add the city **כפר סבא** and the long bio below. Add the specialty tags. Link to the site. | Keren |
| 2 | Al HaSapa | Create or complete the profile with the long bio, tags, city, phone and site link | Keren |
| 3 | Betipulnet | Same as Al HaSapa | Keren |
| 4 | Yahat (יה"ת, the Israeli association for expressive and creative therapies) | Check membership eligibility for an M.A. psychodramatist. If eligible, join and fill the therapist-directory profile | Keren |
| 5 | Google Business Profile | Create the profile. Category: "Psychotherapist" or a similar non-protected category. **Never use "Psychologist"**, because the title is legally protected in Israel. Set it up as a service-area business covering Kfar Saba and the Sharon, with the address hidden | Keren / Eitan |
| 6 | Search Console | Resubmit `https://kerenfireberg.co.il/sitemap.xml` after deploy and request indexing for the 3 new URLs | Eitan |
| 7 | Bing / IndexNow | Ping the 3 new URLs (key file already in `public/`) | Eitan |

Decision (2026-11-10): **no public street address.** The GBP is a service-area business (Kfar Saba and the Sharon) with the address hidden. Directories list only the city, כפר סבא. Don't add `streetAddress` to `lib/seo.ts`.

## Link targets (use the most specific page per directory field)

- Psychodrama: https://kerenfireberg.co.il/psychodrama-kfar-saba/
- Children, teens, and parent guidance: https://kerenfireberg.co.il/child-teen-therapy-kfar-saba/
- Grief and loss: https://kerenfireberg.co.il/grief-loss-therapy/
- Main site: https://kerenfireberg.co.il/

## Tags / specialties (pick what each directory offers)

פסיכודרמה · טיפול רגשי · פסיכותרפיה · טיפול בילדים · טיפול בנוער · הדרכת הורים · ADHD · ASD · רגישות גבוהה (HSP) · שכול ואובדן · משברי חיים · חרדה · התקפי פאניקה · חרדה חברתית · טראומה · SE (Somatic Experiencing) · CBT · Focusing · טיפול זוגי · טיפול קבוצתי · קבוצות נשים · טיפול Online

City: **כפר סבא** (area: השרון). Treatment also offered online via Zoom.

## Short bio (≈300 characters, for headline/summary fields)

קרן בן כליפה פיירברג, פסיכודרמטיסטית בעלת תואר שני בפסיכודרמה ו-Group Therapist, עם עשרים שנות ניסיון קליני. טיפול רגשי למבוגרים, לנוער ולילדים והדרכת הורים, בקליניקה בכפר סבא וב-Online. התמחויות: שכול ואובדן, חרדה, טראומה (SE) ומשברי חיים.

## Long bio (for the main "about" field)

שמי קרן בן כליפה פיירברג, פסיכודרמטיסטית בעלת תואר שני טיפולי בפסיכודרמה ו-Group Therapist. כבר עשרים שנה אני מלווה אנשים ברגעים משמעותיים ובצמתי חיים מורכבים, במסגרות ציבוריות ופרטיות, ביניהן משרד הביטחון ומשרד החינוך.

אני מטפלת במבוגרים, בבני נוער ובילדים, ומלווה הורים בהדרכת הורים, בפרט הורים לילדים עם ADHD, ASD ורגישות גבוהה (HSP). שכול, אובדן ומשברי חיים הם תחום התמחות מרכזי שלי, לצד חרדה והתקפי פאניקה, חרדה חברתית, טראומה, ויסות רגשי וחוסן.

הגישה שלי אינטגרטיבית. אני משלבת פסיכודרמה, CBT, Focusing, SE (Somatic Experiencing) לטיפול בטראומה, ויצירה ושיח עומק. את הכלים אני בוחרת לפי שפת התקשורת הטבעית של כל מטופל ומטופלת.

הטיפול מתקיים בקליניקה בכפר סבא או ב-Online דרך Zoom, פרטני או קבוצתי. אני מנחה גם קבוצות נשים וקבוצות מנהיגות לילדים ולבני נוער.

שיחת היכרות טלפונית ראשונה ללא עלות: 054-6306916.
https://kerenfireberg.co.il
