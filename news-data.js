// ─────────────────────────────────────────────────────────────
//  NEWS DATA — add, edit, or remove articles here
//  Each article: { id, category, title, summary, body, author, date, featured }
//  date format: "YYYY-MM-DD"
//  featured: true  →  shown in the hero spotlight
//
//  Suggested categories:
//    Student News   — general school news for everyone
//    Events         — upcoming events for staff & students
//    Sports         — sports results, trials, carnivals
//    Faculty News   — faculty-specific updates (visible to all)
//    Staff Notice   — staff-only operational updates
//    Administration — IT, portal, admin notices
//    Wellbeing      — wellbeing & community notices
//    Weekly Update  — principal / deputy weekly message
// ─────────────────────────────────────────────────────────────

const NEWS_DATA = [
  {
    id: 1,
    category: "Student News",
    title: "Welcome to The Weekly Brief",
    summary:
      "Our school news site is now open to all students and staff. Stay up to date with everything happening across the school.",
    body: `<p>Welcome to <strong>The Weekly Brief</strong> — your one-stop source for news, events, and updates from across the school.</p>
<p>Whether you're a student or a staff member, you'll find everything here:</p>
<ul>
  <li><strong>Student News</strong> — general school-wide news</li>
  <li><strong>Events</strong> — upcoming dates for the diary</li>
  <li><strong>Sports</strong> — results, trials, and carnivals</li>
  <li><strong>Faculty News</strong> — updates from each faculty</li>
  <li><strong>Staff Notice</strong> — operational updates for teaching staff</li>
  <li><strong>Wellbeing</strong> — community and wellbeing news</li>
</ul>
<p>Use the search bar or the category filters to find what you're looking for. New articles are added every week.</p>`,
    author: "Editorial Team",
    date: "2026-05-30",
    featured: true,
  },
  {
    id: 2,
    category: "Events",
    title: "Athletics Carnival — Save the Date",
    summary:
      "The annual Athletics Carnival is on Thursday 18 June. Students in all year groups will compete. Get your house colours ready!",
    body: `<p>The Annual Athletics Carnival is coming up on <strong>Thursday 18 June</strong> at the school oval. All students are expected to attend and participate in their year group events.</p>
<p><strong>What to bring:</strong></p>
<ul>
  <li>Full sports uniform</li>
  <li>House colour t-shirt or ribbon</li>
  <li>Sunscreen, hat, and plenty of water</li>
  <li>Snacks and lunch</li>
</ul>
<p><strong>Schedule:</strong></p>
<ul>
  <li>8:45 am — Arrive at the oval</li>
  <li>9:00 am — Opening ceremony</li>
  <li>9:15 am — Track and field events begin</li>
  <li>2:30 pm — Presentations and closing</li>
</ul>
<p>Staff volunteers are also still needed — please see the Staff Notice section for details.</p>`,
    author: "PDHPE Faculty",
    date: "2026-05-29",
    featured: false,
  },
  {
    id: 3,
    category: "Sports",
    title: "Cross Country Results — Congratulations to All Competitors",
    summary:
      "Last Friday's cross country event was a huge success. Check out the results and find out who qualified for the regional carnival.",
    body: `<p>Last Friday's whole-school Cross Country Carnival was a fantastic event. Well done to every student who participated — your effort and sportsmanship were outstanding.</p>
<p><strong>Overall House Results:</strong></p>
<ol>
  <li>Banksia House — 312 points</li>
  <li>Waratah House — 298 points</li>
  <li>Boronia House — 276 points</li>
  <li>Grevillea House — 251 points</li>
</ol>
<p><strong>Regional Qualifiers:</strong> Students who finished in the top 3 in their age group will represent the school at the Regional Carnival on <strong>Friday 13 June</strong>. Letters will be sent home this week. Congratulations!</p>
<p>Thank you to the PDHPE faculty and all parent and staff volunteers who made the day run so smoothly.</p>`,
    author: "PDHPE Faculty",
    date: "2026-05-28",
    featured: false,
  },
  {
    id: 4,
    category: "Student News",
    title: "Year 12 Formal — Ticket Sales Open",
    summary:
      "Tickets for the Year 12 Formal are now on sale through the front office. Limited spots available — don't miss out.",
    body: `<p>Ticket sales for the <strong>Year 12 Formal</strong> are now open. This year's event will be held at:</p>
<ul>
  <li><strong>Date:</strong> Friday 28 August</li>
  <li><strong>Venue:</strong> The Grand Pavilion</li>
  <li><strong>Time:</strong> 6:30 pm — 11:00 pm</li>
  <li><strong>Dress:</strong> Formal</li>
</ul>
<p>Tickets are $95 per person and must be purchased through the front office. Payment can be made by cash, card, or via the school payment portal.</p>
<p>Numbers are limited — only <strong>180 tickets</strong> available. See the front office before Friday 20 June to secure yours.</p>`,
    author: "Year 12 Coordinator",
    date: "2026-05-27",
    featured: false,
  },
  {
    id: 5,
    category: "Faculty News",
    title: "Science Faculty: New Lab Equipment Arrives",
    summary:
      "The Science faculty has taken delivery of new microscopes and chemistry kits — just in time for upcoming practical lessons.",
    body: `<p>The Science faculty is excited to announce that brand new equipment has arrived and been installed in Labs 3 and 4, including:</p>
<ul>
  <li>12 × digital binocular microscopes with USB output</li>
  <li>Complete Year 11–12 Chemistry kit sets</li>
  <li>Updated safety equipment throughout</li>
</ul>
<p>Students in Stage 5 and Stage 6 Science will be among the first to use the new equipment in upcoming practical lessons. Teachers will introduce the equipment safely before students use it independently.</p>`,
    author: "Head of Science",
    date: "2026-05-26",
    featured: false,
  },
  {
    id: 6,
    category: "Weekly Update",
    title: "Principal's Weekly Message — Term 2 Week 5",
    summary:
      "A message from the Principal on a great few weeks, welcoming new staff, and a reminder about the upcoming Professional Development Day.",
    body: `<p>Dear Students and Staff,</p>
<p>What a fantastic few weeks it has been. The energy and enthusiasm I see across the school every day is something truly special, and I want to thank everyone — students and staff alike — for contributing to such a positive community.</p>
<p>A reminder to staff that our whole-school <strong>Professional Development Day</strong> is scheduled for <strong>Friday 12 June</strong>. More details will follow early next week.</p>
<p>I also want to warmly welcome Ms Hartley and Mr Osei, who join us this term in the English and Mathematics faculties. Please make them feel at home.</p>
<p>To our students — keep up the great work in class. The effort you're putting in is noticed and appreciated.</p>
<p>Have a wonderful week,<br/>Principal</p>`,
    author: "Principal",
    date: "2026-05-25",
    featured: false,
  },
  {
    id: 7,
    category: "Wellbeing",
    title: "R U OK? Lunchtime Session This Thursday",
    summary:
      "The Wellbeing team is running a free lunchtime session on mental health and checking in on friends. All students welcome.",
    body: `<p>The School Wellbeing Team is hosting a free lunchtime session this <strong>Thursday 4 June</strong> in the Library (Room 12) from <strong>1:10 pm – 1:50 pm</strong>.</p>
<p>The session will cover:</p>
<ul>
  <li>How to check in on friends who might be struggling</li>
  <li>Where to get support at school and beyond</li>
  <li>Simple strategies for managing stress</li>
</ul>
<p>All students are welcome. No sign-up required — just show up. Light snacks will be provided.</p>
<p>If you ever need to talk to someone, the Wellbeing team is available every day at the Student Services office.</p>`,
    author: "Wellbeing Team",
    date: "2026-05-24",
    featured: false,
  },
  {
    id: 8,
    category: "Staff Notice",
    title: "Relief Teacher Roster — Term 2 Week 5",
    summary:
      "Updated relief teacher availability for this week. Coordinators please confirm coverage by Thursday.",
    body: `<p>The updated relief teacher roster for Term 2, Week 5 has been finalised. Coordinators are asked to review coverage across all year levels and confirm any outstanding gaps by end of day Thursday.</p>
<p>Teachers wishing to add themselves to the availability pool should contact the front office directly or update their availability via the staff portal.</p>
<ul>
  <li>Monday–Tuesday: Full coverage confirmed</li>
  <li>Wednesday: 2 periods uncovered in Years 9–10 Science</li>
  <li>Thursday–Friday: Awaiting confirmation from three staff members</li>
</ul>
<p>Please direct queries to the Deputy Principal.</p>`,
    author: "Deputy Principal",
    date: "2026-05-23",
    featured: false,
  },
];
