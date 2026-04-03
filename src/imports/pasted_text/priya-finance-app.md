Design a complete mobile personal finance app for a young professional named Priya. 375×812px, iPhone 14 frame for each screen. Same design system throughout — dark textured hero sections, cream body, editorial serif + Inter pairing.

GLOBAL DESIGN SYSTEM (applies to all screens)
Hero background: #1A1A18 base + 8×8px checkered tile texture (alternating #242420 squares, felt more than seen)
Body background: #F5F2EB warm cream
Card background: #FFFFFF, border #E8E4DC 1px, radius 12px
Primary text: #222222 — Muted: #999999 — Cream on dark: #F5EFE0
Accent green: #6FCF97 — Teal: #5DCAA5 — Amber: #EF9F27 — Soft red: #E07060
Fonts: Playfair Display Italic for display/names, Inter for all UI
Weights: 400 regular, 500 medium only
Horizontal padding: 20px throughout
Bottom nav: 4 tabs — Home / Spend / Goals / Mood — #F5F2EB bg, 0.5px top border, 60px height, active tab has 2px top underline in #1A1A18

SCREEN 1 — HOME
(Already designed — include as-is with all upgrades from previous prompt)
Quick recap of key elements:

Textured dark hero with greeting + ₹18,240 balance
"28 days left · ₹651/day to stay on track" insight line
Dynamic amber progress bar at 62%
Floating Health Pulse card (74/100) with arc gauge + sparkline + pills
Inline mood check-in card with 5-point face scale
Top spending 3-card grid with distinct category icons
Recent transactions with coloured initials
Salary day banner in soft green


SCREEN 2 — SPEND
Hero section (same dark textured bg, ~32% height):

"APRIL 2025" all-caps 10px tracked, cream 40% opacity
"You've spent" Inter 13px cream 50% opacity
"₹23,760" Playfair Display 44px cream — this is total spent so far
"of ₹42,000 salary" Inter 12px cream 40% opacity
14px gap
Two pill stats side by side:

"↑ 8% vs March" — amber bg at 18% opacity, amber text #EF9F27
"Biggest: Food" — cream bg at 12% opacity, cream text



Floating category breakdown card (overlaps hero/body boundary, same dark texture, radius 18px):

Title: "WHERE IT'S GOING" all-caps 10px tracked, cream 45% opacity
Horizontal bar chart — 5 categories stacked as proportional pill bars:

RENT ₹14,000 — cream fill, widest
FOOD ₹5,820 — amber fill
TRANSPORT ₹1,940 — teal fill
SUBSCRIPTIONS ₹890 — muted fill
OTHER ₹1,110 — lightest fill


Each bar: full-width container, filled proportionally, height 8px, radius 4px, label left + amount right in 12px Inter
At bottom of card: "Rent is 59% of spending. That's healthy for Mumbai." — italic 11px cream 45% opacity. Contextual city-aware insight.

Body — Spending calendar heatmap (UNIQUE FEATURE):
Section label: "This month, day by day"
7×5 grid of day squares (Mon–Sun columns, 5 weeks):

Each day square: 36×36px, radius 6px
Colour intensity by spend amount:

No spend: #F5F2EB (cream, invisible — blends with bg)
Light spend (<₹200): #FFF3E0 warm tint
Medium (₹200–800): #EF9F27 amber at 40%
Heavy (>₹800): #EF9F27 full amber
Exceptional (>₹2000): #E07060 soft red


Today's date has a 1.5px #1A1A18 border
Salary day (Apr 1) has a small green dot above the square
Below grid: legend row — four squares with labels "Low / Mid / High / Ouch" in 10px muted

Body — Top 3 unusual spends this month:
Section label: "Stood out this month"
Three rows, each with:

Left: category icon in dark square (same style as home)
Center: merchant + "₹X more than usual" in amber 12px
Right: small spark of that category's last 4 weeks as tiny 4-bar chart


SCREEN 3 — GOALS
Hero section (dark textured, ~30% height):

"YOUR GOALS" all-caps tracked label
Large number: "3 active" in Playfair Display 40px cream
Subtitle: "₹8,200 saved toward goals this month" Inter 12px cream 45% opacity
Progress arc — large 160px diameter thin arc (270°) showing overall goals completion at 41%, cream track at 15% opacity, cream fill at 85% opacity for the 41% portion

Goal cards — 3 cards stacked in body (white bg, 1px border, radius 14px, padding 16px):
Each card has:

Top row: goal icon (32×32px dark square, radius 8px, with SVG icon) + goal name in Inter 15px #222 + status pill right-aligned
Status pills:

"On track" — green bg #EAF3DE, text #3B6D11
"Needs push" — amber bg #FAEEDA, text #854F0B
"Just started" — cream bg, text #888


Progress bar: full width, 6px height, radius 3px, cream track, filled portion in matching accent colour
Amount row: "₹X saved" left in 13px #222 / "₹Y to go" right in 13px #999
Deadline: "by December 2025" in 11px #BBB italic
Micro insight below bar (italic 11px muted): contextual one-liner per goal

Goal 1 — Emergency Fund:
Icon: shield outline. Progress: 68%. ₹34,000 of ₹50,000. Status: On track.
Insight: "At this pace you'll hit it by September."
Goal 2 — Goa Trip:
Icon: airplane outline. Progress: 31%. ₹4,650 of ₹15,000. Status: Needs push.
Insight: "Save ₹1,400 more/month to make it by June."
Goal 3 — New Laptop:
Icon: screen/monitor outline. Progress: 12%. ₹2,400 of ₹20,000. Status: Just started.
Insight: "You've just begun — ₹1,600/month gets you there by January."
Bottom of screen — Add goal button:
Full-width button, dark #1A1A18 bg, cream text "＋ Add a new goal", radius 12px, 52px height, Inter 14px. Not a floating button — sits in normal document flow above nav bar.
UNIQUE FEATURE — Monthly goal contribution timeline:
Below the three cards, a horizontal scroll strip showing next 6 months (May–Oct) as columns. Each column shows how much is allocated to goals that month as a stacked bar. Lets Priya see future commitment at a glance. Label: "Your next 6 months" section header.

SCREEN 4 — MOOD
This is the most distinctive screen. Treat it as a financial wellness journal, not a tracker.
Hero section (dark textured, ~28% height):

"MOOD JOURNAL" all-caps tracked label, cream 45% opacity
"How money felt this week" — Playfair Display Italic 26px cream
Week range: "Mar 31 – Apr 6" Inter 12px cream 40% opacity
Weekly mood summary pill: "Mostly calm" — soft teal bg at 20% opacity, teal text #5DCAA5, 12px Inter

7-day mood strip (sits at hero/body boundary, floating card, dark texture, radius 18px):

7 columns for Mon–Sun, each showing:

Day label: "M T W T F S S" — 10px, cream 40% opacity
Mood face circle (28px): filled circle with minimal face expression using basic shapes only (no emoji). Face states:

Calm: slight curve up, relaxed eyes
Stressed: slight curve down, small eyes
Motivated: bigger curve up, open eyes
Anxious: flat mouth, wide eyes
Neutral: straight line mouth


Face circle colours by mood: calm = teal, stressed = amber, motivated = green, anxious = soft red, neutral = cream/grey
Small spend dot below face: size proportional to that day's spend (bigger dot = more spent)


Correlation label below strip: "You spent 34% more on stressed days" — italic 11px cream 45% opacity. This is the key insight — connects mood to money.

Body — Weekly reflection cards:
Section label: "This week's moments"
3–4 mini journal entry cards (white bg, 1px border, radius 12px, padding 14px):
Each card:

Top row: day + mood face (18px circle, same colour coding) + spend amount for that day right-aligned
One-line auto-generated reflection in italic 13px #555:

"Ordered food twice — comfort spending after a long day"
"Salary day. Transferred ₹5,000 to savings right away."
"Weekend chill — lowest spend of the week"


Bottom row: small tag for mood category — same pill style as health pulse

Body — Mood × Money insight card (UNIQUE FEATURE — star of this screen):
Full-width card with dark #1A1A18 bg + texture, radius 14px, padding 16px:

Label: "PATTERN DETECTED" all-caps 10px tracked, cream 45% opacity
Main insight in Playfair Display Italic 18px cream: "Stressed Tuesdays cost you ₹890 more on average"
Sub-insight Inter 12px cream 45% opacity: "Mostly food and transport. Recognising the pattern is the first step."
Bottom row: two pills — "View stressed days" teal / "Set a Tuesday budget" amber
This card feels like a therapist and a CFO combined

Body — Monthly mood trend:
Section label: "Your mood over April"
Simple horizontal calendar strip (same as spend heatmap but coloured by mood instead of spend). Shows mood colour for each day. No numbers — purely visual emotional map of the month.
Log today's mood CTA:
If today's mood hasn't been logged:
Full-width card, white bg, 1px border, radius 12px, padding 16px:

"How did today feel?" Inter 14px #222
5 mood face buttons in a row (same face circles, 40px each, tappable)
Below selection: text input placeholder "Anything on your mind? (optional)" — 12px, muted, single line
"Log it" button — dark bg, cream text, radius 8px, right-aligned


SCREEN 5 — PROFILE
Not a settings dump. Treat this as a personal financial identity card — warm, human, and motivating.
Hero section (dark textured, ~35% height):

Avatar circle: 64px, border 2px cream at 30% opacity, initials "P" in Playfair Display Italic 28px cream, bg slightly lighter dark #242420
"Priya Sharma" Playfair Display Italic 28px cream
"First job · Mumbai · Since Jan 2025" Inter 11px cream 40% opacity
3 stat pills in a row below name:

"Month 4" — how long they've used the app
"74 avg pulse" — their average health score
"3 goals" — active goals count
Pills: cream bg at 12% opacity, cream text, 11px Inter



Financial identity card (floating, dark texture, radius 18px — same overlap technique):

Label: "YOUR MONEY PERSONALITY" all-caps 10px tracked
Personality type in Playfair Display Italic 22px cream: "The Steady Builder"
Description Inter 12px cream 45% opacity italic: "You spend carefully, save consistently, and avoid impulse decisions. Your emergency fund is growing — keep going."
Thin divider
Three trait bars (label left, thin 4px bar, percentage right):

Saver instinct: 72%
Spending discipline: 68%
Goal consistency: 55%
Bars filled in cream at varying opacities



Body — Achievements strip (UNIQUE FEATURE):
Section label: "Milestones"
Horizontal scrollable row of achievement badges — each badge is a 72×72px dark card, radius 12px, 1px border:

Badge icon: simple SVG shape in cream (star, shield, flame, leaf, etc.)
Badge name: 10px all-caps below
Locked badges shown at 30% opacity with a lock icon
Achievements:
"First save" (unlocked) — star icon
"No debt" (unlocked) — shield icon
"7-day streak" (unlocked) — flame icon
"₹10k saved" (unlocked) — leaf icon
"Emergency ready" (locked, 68% there) — castle icon
"Goal crusher" (locked) — trophy icon

Body — This month's financial report card:
Section label: "April report card"
Four metric rows, each with label left + grade right:

Savings rate: A — "Saved 18% of income"
Spending control: B+ — "Food went up but manageable"
Goal progress: B — "On track for 2 of 3 goals"
Mood balance: A- — "Calm week overall"
Grades in Playfair Display Italic 18px, colour-coded: A = #6FCF97 green, B = #EF9F27 amber, C = #E07060 soft red

Body — Settings rows (minimal, at bottom):
Simple list rows, white bg card, 1px border, each row 48px:

Linked accounts (with bank icon)
Notification preferences
Currency & region
Export my data
About Priya (edit profile)
Each row: label left in 13px #222, chevron right in #CCC. No icons needed — clean text rows.


FIGMA COMPONENT NOTES
Create these as reusable components:

Dark textured hero frame — used on all 5 screens
Floating overlap card — dark texture, radius 18px, used on all screens
Section header — label left + "See all" right
Metric pill — small rounded label with bg tint
Goal card — full structure as component with progress bar
Mood face circle — 5 states as variants (calm/stressed/motivated/anxious/neutral)
Transaction row — icon circle + name/time + amount
Category spend bar — label + proportional fill bar
Achievement badge — locked and unlocked variants
Bottom navigation bar — 4 tab states


