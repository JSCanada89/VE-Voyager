/* VE Command — CVS Track. Follows the SAVE Core Competencies marked CVS only (effective 1 Oct 2025). Tiers b, i, a.
   Sources read: Core Competencies list, Certification Program Manual 19th Ed., VMF 2 slides (2019), Supplemental Facilitation slides (2021).
   The VM Guide text itself was not available; section numbers come from the competency list. */
window.VE = window.VE || {};
VE.command = VE.command || {};
VE.command.cvs = {
id:"cvs", name:"CVS Track", glyph:"CVS",
blurb:"The added Certified Value Specialist competencies: the certification path, preparation, advanced analysis, facilitation, implementation and VM programs.",
tiers:{
/* ============================== BEGINNER ============================== */
b:{ title:"The path to CVS and the Preparation Phase (Competencies 1.B.6 and 3)",
lessons:[
{t:"What the CVS credential is", ref:"SAVE Certification Program Manual, 19th Ed. · Sections 1.4.1.2, 1.5, 2.2.1",
h:`<p>The <b>Certified Value Specialist (CVS)</b> recognizes knowledge and competency sufficient to <b>lead the facilitation of VM studies</b>. A CVS is recognized as knowing all components of all twelve Core Competencies; a VMA knows most but not all.</p>
<p>To achieve it, a candidate must:</p>
<ol><li>be a VMA in good standing</li>
<li>complete VMF 2A (e-learning) and VMF 2B (instructor-led)</li>
<li>submit the application in the CVS Certification Application Portal and be approved to sit the exam</li>
<li>pass the CVS exam</li></ol>`,
k:"CVS = VMA in good standing, VMF 2, an approved application, and the exam."},
{t:"Practice VM: 160 PDUs", ref:"Certification Program Manual · Sections 1.4.4, 2.2.2.1, 2.2.3.1",
h:`<p>One PDU is one contact hour. The application requires <b>160 Practice VM PDUs</b> from a minimum of <b>six VM studies</b> (ten examples at most).</p>
<ul><li>Only hours with the whole VM team present count, in person or virtual.</li>
<li>Only phases 2 through 7 count: Information through Presentation. Preparation and Implementation hours do not.</li>
<li>Each study counts for at least 24 and at most 56 PDUs.</li>
<li>Hours may be as a team member or co-facilitator, under a facilitator who is a CVS in good standing.</li></ul>
<p>SAVE expects applicants to have facilitated phases, not only observed, and encourages experience under more than one facilitator.</p>`,
k:"160 hours across at least six full studies, 24 to 56 hours each, counting only workshop phases."},
{t:"Learn to Facilitate and Communicate VM", ref:"Certification Program Manual · Sections 2.2.2.2, 2.2.2.3, 2.2.3.3, Table 2",
h:`<p><b>Learn to Facilitate VM</b>: 24 PDUs of facilitation training, at least 16 live and at most 8 pre-recorded, tied to Core Competency 11.</p>
<p><b>Communicate VM</b>: for one approved study, the applicant answers nine questions covering scope, purpose and need as functions, a significant risk, the sponsor's goals, an analysis technique and what it revealed, three functions that yielded ideas, the idea with the greatest value improvement, and how the study met the sponsor's goals.</p>
<p>Answers are scored against six criteria, with <i>Demonstrate Value Improvement</i> weighted 25% and the others 15% each. A score of 70% is required. One of the criteria is to avoid regurgitating generic VM concepts.</p>`,
k:"The written section is graded on a specific study's value improvement. Generic VM language loses points."},
{t:"Exam, renewal and CVS-Life", ref:"Certification Program Manual · Sections 2.3, 3.1.2, 3.2.6, 3.3.2, 4.1.2, 4.2.2",
h:`<ul><li><b>Exam</b>: 3 hours, online and proctored. It focuses on the CVS-marked competencies and also applies VMA-level content. Two retakes are allowed within a year; a third failure requires a new application.</li>
<li><b>Renewal</b>: every four years, with 160 VM Activities PDUs, 56 Learn VM PDUs (including 8 in live function analysis training and 8 in live facilitation training) and 16 PDUs of VM society service and promotion.</li>
<li><b>CVS-Life</b>: available after holding the CVS for at least twelve years, with reduced renewal requirements.</li></ul>
<p>Using the designation after it expires is treated as an ethics matter.</p>`,
k:"Three-hour exam, four-year renewal: 160 practice, 56 learning, 16 service."},
{t:"Measuring value: beyond the basic approach", ref:"Core Competency 1.B.6 · VM Guide 2.6, 2.6.1, 2.6.2, 2.6.3",
h:`<p>The CVS is expected to choose how value improvement will be measured for a given study, and to verify it with the sponsor during preparation. Options include changes to:</p>
<ul><li>time</li><li>initial cost</li><li>life-cycle cost</li><li>performance and quality</li><li>return on investment</li></ul>
<p>The value index can be written as worth over cost or cost over worth. Worth can be set from historical data, benchmarking, team and estimator experience, the lowest-cost alternative way to perform the function, or a target based on the budget.</p>`,
k:"Decide with the sponsor which resource and which performance measures define value before the workshop starts."},
{t:"Preparation: goals and objectives", ref:"Core Competency 3.A.1 · VM Guide 4.2.1",
h:`<p>The Preparation Phase begins by identifying the <b>VM study goals and objectives</b> with the sponsor. These are different from the project's own goals:</p>
<ul><li><b>Project goals</b>: what the study subject must achieve.</li>
<li><b>Study goals</b>: what the sponsor wants from the VM study, such as reducing cost to budget, resolving a risk, shortening schedule or validating a concept.</li></ul>
<p>The study goals drive everything that follows: scope, team, duration, how value is measured and which functions will be prioritized.</p>`,
k:"Ask what the sponsor wants the study to accomplish. It is often not the same as what the project must accomplish."},
{t:"The Preparation Phase process", ref:"Core Competency 3.A.2 · VM Guide 4.2.2",
h:`<p>With goals set, the facilitator establishes the study parameters:</p>
<ul><li><b>Scope and constraints</b>: what may and may not be changed.</li>
<li><b>Duration</b> and agenda for the workshop phases.</li>
<li><b>Team</b>: size, subject matter experts, when a second facilitator is needed, which stakeholders take part.</li>
<li><b>Logistics</b>: venue, room layout, breakout space, equipment, travel.</li>
<li><b>Models</b>: cost and other models prepared ahead of the workshop.</li></ul>
<p>The agenda is reviewed with the client, and the facilitator keeps a more detailed version with timing for each activity.</p>`,
k:"Scope, constraints, team, agenda, logistics and models are all settled before day one."},
{t:"The VM pre-study meeting", ref:"Core Competency 3.A.3 · VM Guide 4.3.1 · VM Guide 12.5",
h:`<p>The pre-study meeting brings the facilitator, sponsor and project team together before the workshop. A useful structure is the <b>five P's</b>:</p>
<ul><li><b>Purpose</b>: why the session is being held.</li>
<li><b>Participants</b>: who must be involved and their perspectives.</li>
<li><b>Product</b>: what will exist when the study is done.</li>
<li><b>Process</b>: the steps to get there.</li>
<li><b>Probable issues</b>: concerns likely to arise.</li></ul>
<p>It is also where the facilitator learns the client's terminology and finds out about strong personalities or hidden agendas.</p>`,
k:"Purpose, participants, product, process, probable issues. Ask many questions."},
{t:"Identify, collect, distribute and review information", ref:"Core Competency 3.A.4 · VM Guide 4.3.2",
h:`<p>The facilitator defines the data the study needs, collects it and sends a compiled package to participants before the workshop.</p>
<ul><li><b>Project data</b>: basis of design, drawings, specifications, budget, latest estimate, system narratives, supporting reports.</li>
<li><b>Product data</b>: customer requirements, costed bill of materials, drawings, failure mode analysis, competitive analysis, test requirements.</li>
<li><b>Process data</b>: work instructions, routings, process flow diagrams, value stream map, volumes.</li></ul>
<p>A pre-workshop checklist and a meeting with the project manager are the usual ways to obtain it.</p>`,
k:"Team members who read the package beforehand let day one be spent on understanding, not on reading."},
{t:"Orienting participants, the kick-off and the site visit", ref:"Core Competencies 4.A.3, 4.A.10, 4.A.11 · VM Guide 5.2.3, 5.3.6, 5.3.7",
h:`<p><b>Orienting participants</b>: explain the Job Plan and relate the agenda to it, state the goals and get the group's agreement, and set up group memory on flip charts or a shared screen.</p>
<p><b>Kick-off meeting</b>: management opens the workshop, welcomes the team, confirms the goals and asks for a presentation at the end. The project team then presents the subject.</p>
<p><b>Site visit</b>: keep the team together so everyone hears the same explanations and the same answers, and manage the time closely.</p>`,
k:"Open with the sponsor, tie the agenda to the Job Plan, and keep the team together on site."}
],
mid:[
{s:"Requirements", q:"Which is a prerequisite for applying for the CVS?",
 o:["A professional engineering license","Being a VMA in good standing","Ten years of experience","SAVE board service"], a:1,
 e:"The CVS requires a VMA in good standing, VMF 2A and 2B, an approved application and the exam."},
{s:"Practice VM", q:"How many Practice VM PDUs and studies does the CVS application require?",
 o:["56 PDUs from two studies","160 PDUs from at least six studies","24 PDUs from one study","400 PDUs from ten studies"], a:1,
 e:"160 PDUs from a minimum of six VM studies; ten examples at most."},
{s:"Practice VM", q:"Which hours count toward Practice VM for a first CVS application?",
 o:["Pre-study meetings","Contact hours with the whole team in phases 2 through 7","Report writing","Implementation meetings"], a:1,
 e:"Preparation and Implementation activities do not count as VM study contact hours for the application."}
],
quiz:[
{s:"Scope of credential", q:"What does the CVS recognize that the VMA does not?",
 o:["Membership in SAVE","Competency sufficient to lead the facilitation of VM studies","An engineering degree","Cost estimating certification"], a:1,
 e:"The CVS is recognized as able to lead VM studies; the VMA participates and assists."},
{s:"Practice VM", q:"What is the maximum number of PDUs one VM study can contribute to the application?",
 o:["24","40","56","160"], a:2,
 e:"For any one study the maximum is 56 PDUs and the minimum is 24."},
{s:"Facilitation training", q:"Of the 24 Learn to Facilitate PDUs, how many must be live?",
 o:["None","At least 8","At least 16","All 24"], a:2,
 e:"A minimum of 16 hours must be live, in person or virtual. Up to 8 may be pre-recorded."},
{s:"Communicate VM", q:"Which Communicate VM evaluation criterion carries the highest weight?",
 o:["Stimulate Interest","Demonstrate Value Improvement","Meet Requirements","Enhance Understanding"], a:1,
 e:"Demonstrate Value Improvement is weighted 25%. The other five are 15% each."},
{s:"Communicate VM", q:"What score must an applicant reach on the Communicate VM section?",
 o:["50%","60%","70%","90%"], a:2,
 e:"70% or more is required to be approved to sit for the exam."},
{s:"Renewal", q:"How often does a CVS renew, and how many VM Activities PDUs are required?",
 o:["Every two years, 8 PDUs","Every four years, 160 PDUs","Every year, 56 PDUs","Every ten years, 24 PDUs"], a:1,
 e:"The CVS renewal interval is four years, with 160 VM Activities, 56 Learn VM and 16 service and promotion PDUs."},
{s:"Value measurement", q:"During preparation, what should the facilitator verify with the sponsor about value?",
 o:["The room layout","How value improvement will be measured","The lunch order","The report font"], a:1,
 e:"Time, initial cost, life-cycle cost, performance and ROI are options. The choice shapes the study."},
{s:"Goals", q:"A sponsor says the project is $8M over budget and must stay on schedule. What is this?",
 o:["A function","VM study goals and objectives","A FAST diagram","A VM proposal"], a:1,
 e:"These are the sponsor's goals for the study, which set scope, team and priorities."},
{s:"Pre-study", q:"Which is one of the five P's of preparation?",
 o:["Profit","Probable issues","Paperwork","Permits"], a:1,
 e:"Purpose, Participants, Product, Process and Probable issues."},
{s:"Site visit", q:"How should the team move through a site visit?",
 o:["Each expert explores alone","Together, so everyone hears the same explanations and answers","Only the facilitator attends","In shifts by discipline"], a:1,
 e:"Keeping the group together gives everyone the same information and keeps time under control."}
]},

/* ============================== INTERMEDIATE ============================== */
i:{ title:"Analysis tools and facilitating function analysis (Competencies 4.B, 5.B and 9.B)",
lessons:[
{t:"SWOT analysis", ref:"Core Competency 4.B.2 · VM Guide 5.4.2",
h:`<p>A SWOT analysis sorts what is known about the subject into four cells:</p>
<ul><li><b>Strengths</b> and <b>Weaknesses</b>: internal to the subject or organization.</li>
<li><b>Opportunities</b> and <b>Threats</b>: external to it.</li></ul>
<p>In a VM study it is a quick way to get a team's understanding onto one page during the Information Phase. Weaknesses and threats point to functions that underperform or carry risk; strengths show what proposals must not damage.</p>`,
k:"Internal strengths and weaknesses, external opportunities and threats, on one page."},
{t:"RACI matrix", ref:"Core Competency 4.B.3 · VM Guide 5.4.3",
h:`<p>A RACI matrix lists activities or decisions down the side and people or organizations across the top, and marks each cell:</p>
<ul><li><b>R</b>esponsible: does the work.</li>
<li><b>A</b>ccountable: owns the outcome. One per activity.</li>
<li><b>C</b>onsulted: gives input before the work.</li>
<li><b>I</b>nformed: told afterward.</li></ul>
<p>It is most useful on process, service and organization studies, where gaps, overlaps and too many approvers are a source of poor value. It also clarifies who decides on VM proposals.</p>`,
k:"One Accountable per activity. Rows with none, or with several, are findings."},
{t:"Balanced scorecard", ref:"Core Competency 4.B.5 · VM Guide 5.4.5",
h:`<p>A balanced scorecard looks at an organization's performance from several perspectives at once, so that financial results are not the only measure. The classic four are:</p>
<ul><li>financial</li><li>customer</li><li>internal process</li><li>learning and growth</li></ul>
<p>For a VM study it supplies performance measures that are already accepted by management. Those measures can become evaluation criteria, which ties proposals to what the organization tracks.</p>`,
k:"A scorecard gives the team performance measures the organization already uses."},
{t:"Risk registers and scoring", ref:"Core Competency 4.B.8 · VM Guide 5.4.8",
h:`<p>A <b>risk register</b> lists each risk with its cause, its effect, its probability and its impact on cost, time or performance, plus an owner and a response.</p>
<p><b>Scoring</b> combines probability and impact, usually on a matrix, to rank risks.</p>
<p>In the Information Phase the register shows which functions carry the most uncertainty. Those functions can be prioritized for creativity even when their cost is not the highest, and proposals can be credited for retiring a risk.</p>`,
k:"Rank risks by probability and impact, then trace the top ones to the functions they threaten."},
{t:"Work breakdown structure", ref:"Core Competency 4.B.9 · VM Guide 5.4.9",
h:`<p>A work breakdown structure (WBS) divides the subject into a hierarchy of deliverables, each level adding detail. Estimates and schedules are usually organized by it.</p>
<p>For the VM team it does two jobs:</p>
<ul><li>It confirms the scope: anything not in the WBS is not in the estimate.</li>
<li>It supplies the rows for the cost model and the function resource matrix.</li></ul>
<p>A WBS is organized by <i>things</i>. Function analysis reorganizes the same cost by <i>purposes</i>, which is where the new insight comes from.</p>`,
k:"The WBS organizes cost by deliverable. The function resource matrix re-sorts it by function."},
{t:"Facilitating development of a FAST diagram", ref:"Core Competency 5.B.3 · VM Guide 6.4.2, 12.7",
h:`<p>A working sequence:</p>
<ol><li>Write each function from the random list on its own sticky note.</li>
<li>Draw How, Why and When and the scope lines on the wall.</li>
<li>Place the function believed to be basic just right of the left scope line.</li>
<li>Ask <b>Why?</b> The answer is the higher-order function, left of the line.</li>
<li>Ask <b>How?</b> repeatedly, moving right, until the lower-order function is reached.</li>
<li>Test the path from right to left by asking <b>Why?</b></li>
<li>Add When-direction functions below the function they accompany.</li></ol>
<p>The team builds it standing at the wall. The facilitator coaches and does not do it for them.</p>`,
k:"Start at the basic function, Why to the left, How to the right, then test in reverse."},
{t:"Gates, special functions and validation", ref:"Core Competency 5.B.3 · VM Guide 6.4.2",
h:`<ul><li><b>AND gate</b>: a fork where both branches must be satisfied to move on.</li>
<li><b>OR gate</b>: a fork where any one branch is enough.</li>
<li><b>Subject objectives</b>: upper left. Requirements and specifications.</li>
<li><b>One-time functions</b>: upper center, for example <i>maintain traffic</i> during construction.</li>
<li><b>All-the-time functions</b>: upper right, for example <i>assure quality</i>.</li></ul>
<p>Coaching points: listen for <i>before</i>, <i>after</i> and <i>next</i>, which signal flowchart thinking; do not force every random function onto the diagram; when the logic stops working, a function is missing or misplaced. The most important output is valid How-Why logic. The second is team consensus.</p>`,
k:"Words like before and after mean the team has drifted into sequence. Bring them back to How and Why."},
{t:"Function performance specification matrix", ref:"Core Competency 5.B.5 · VM Guide 6.4.4",
h:`<p>A function resource matrix answers what each function costs. A <b>function performance specification matrix</b> answers how well each function must be performed.</p>
<p>For each key function it records:</p>
<ul><li>the performance attribute, for example capacity, reliability or response time</li>
<li>the unit of measure</li>
<li>the required level, and where known the current level</li></ul>
<p>Functions that perform below the requirement, or far above it, are value mismatches just as high-cost functions are. The matrix also gives the Evaluation Phase measurable criteria.</p>`,
k:"Cost shows what a function consumes. The performance specification shows what it has to deliver."},
{t:"FAST dimensioning", ref:"Core Competency 5.B.6 · VM Guide 6.4.5",
h:`<p>Dimensioning adds data to the FAST diagram so that the logic and the numbers are read together.</p>
<ul><li>Place each function's cost, or other resource such as space or time, beside its box.</li>
<li>Add its percentage of the total.</li>
<li>Other dimensions can be added: performance level, risk, responsibility.</li></ul>
<p>The team then reads the diagram for mismatches: high cost on low-order supporting functions, or little resource on the basic function. Some facilitators use a different color note for the numbers.</p>`,
k:"A dimensioned FAST diagram shows where the resources sit in the function logic."},
{t:"Presentation Phase techniques", ref:"Core Competency 9.B.1 · VM Guide 10.4, 12.11",
h:`<p>The CVS is expected to apply presentation techniques, not only know the process:</p>
<ul><li><b>Organize</b>: decide what will be presented and who presents each part.</li>
<li><b>Set expectations</b>: purpose of the meeting, time per speaker, total length, and what happens if discussion drifts into implementation.</li>
<li><b>Use the FAST diagram</b> to show that functions are still achieved.</li>
<li><b>Prepare for questions</b> and anticipated objections.</li>
<li><b>Rehearse</b>, especially for virtual presentations.</li></ul>
<p>Terminology can be adapted to the client; some prefer <i>proposal</i> or <i>concept</i> to <i>alternative</i>.</p>`,
k:"Assign speakers, set time limits, rehearse, and keep the meeting informational."}
],
mid:[
{s:"SWOT", q:"In a SWOT analysis, which two categories are external to the subject?",
 o:["Strengths and weaknesses","Opportunities and threats","Strengths and opportunities","Weaknesses and threats"], a:1,
 e:"Strengths and weaknesses are internal. Opportunities and threats are external."},
{s:"RACI", q:"In a RACI matrix, how many parties should be Accountable for one activity?",
 o:["None","One","Two","As many as possible"], a:1,
 e:"Accountable is the single owner of the outcome."},
{s:"WBS", q:"How does a function resource matrix relate to a WBS-based estimate?",
 o:["It replaces the estimate","It re-sorts the same cost from deliverables to functions","It adds contingency","It removes overhead"], a:1,
 e:"The WBS organizes cost by things. Function analysis reorganizes it by purposes."}
],
quiz:[
{s:"Balanced scorecard", q:"What does a balanced scorecard add to a VM study?",
 o:["A construction schedule","Performance measures from several perspectives that management already accepts","A bill of materials","A site plan"], a:1,
 e:"It supplies accepted measures beyond financial ones, which can become evaluation criteria."},
{s:"Risk register", q:"A function has moderate cost but is tied to the top-ranked risk. What can the team do?",
 o:["Ignore it because cost is moderate","Prioritize it for creativity on the basis of risk","Delete the risk","Move it outside the scope line"], a:1,
 e:"Functions can be prioritized for high risk as well as high cost."},
{s:"FAST construction", q:"Where is the function believed to be basic first placed?",
 o:["Left of the left scope line","Immediately right of the left scope line","Right of the right scope line","Upper right corner"], a:1,
 e:"The basic function sits just inside the left scope line. Asking Why gives the higher-order function to its left."},
{s:"FAST construction", q:"After building the path by asking How, how is it tested?",
 o:["By counting notes","By asking Why from right to left","By asking the designer","By adding cost"], a:1,
 e:"Each adjacent pair must answer How in one direction and Why in the other."},
{s:"Gates", q:"What does an AND gate on a FAST diagram mean?",
 o:["Either branch is enough","Both branches must be satisfied to proceed","The function is unwanted","The function is outside scope"], a:1,
 e:"AND requires all branches, like a series circuit. OR allows any one, like a parallel circuit."},
{s:"Special functions", q:"Where is a one-time function such as maintain traffic during construction placed?",
 o:["Upper left","Upper center","Upper right","Right of the right scope line"], a:1,
 e:"Subject objectives go upper left, one-time functions upper center, all-the-time functions upper right."},
{s:"Coaching", q:"A team member says this function comes next after that one. What should the facilitator do?",
 o:["Agree and move on","Remind the team the diagram is How-Why logic, not sequence","Draw an arrow for time","End the exercise"], a:1,
 e:"Before, after and next signal flowchart thinking."},
{s:"Coaching", q:"The team tries to fit all 40 random functions onto the diagram. What is the guidance?",
 o:["All must be used","Not every random function belongs; some are duplicates or activities","Start over","Add a second diagram for leftovers"], a:1,
 e:"Force-fitting wastes time. Redundant functions and activities are left off."},
{s:"Performance matrix", q:"What does a function performance specification matrix record?",
 o:["Who attended","The attribute, measure and required level for each key function","The bid results","The team's hourly rates"], a:1,
 e:"It states how well each function must be performed, in measurable terms."},
{s:"Dimensioning", q:"What is FAST dimensioning?",
 o:["Drawing the diagram to scale","Adding cost or other resource and performance data to the functions on the diagram","Counting the functions","Measuring the wall"], a:1,
 e:"Placing resources beside each function lets the team read logic and numbers together."}
]},

/* ============================== ADVANCED ============================== */
a:{ title:"Implementation, facilitation and VM programs (Competencies 10, 11 and 12)",
lessons:[
{t:"Managing change and the forces of change", ref:"Core Competencies 10.A.1, 10.A.2 · VM Guide 11.2.1, 11.2.2",
h:`<p>A VM proposal is a request to change something people have already decided. Whether it is implemented depends on forces around the decision:</p>
<ul><li><b>Driving forces</b>: budget pressure, schedule, sponsor support, a clear benefit.</li>
<li><b>Restraining forces</b>: redesign cost, ownership of the original design, fear of failure, commitments already made.</li></ul>
<p>The facilitator's contribution is made during the study: anticipate roadblocks while developing each proposal, prepare responses, and involve decision-makers early so the proposals are not a surprise.</p>`,
k:"Implementation starts in development. Each proposal should already answer the objections it will meet."},
{t:"The Implementation Phase: review, assess and resolve", ref:"Core Competencies 10.A.3 to 10.A.6 · VM Guide 11.2.3, 11.2.4, 11.3.1, 11.3.2",
h:`<p>After the report, the owner's decision-makers review and assess each VM proposal and resolve it with a documented decision:</p>
<ul><li>accept</li><li>partially accept</li><li>accept as modified</li><li>reject</li><li>further study</li></ul>
<p>The VM team and facilitator are often not part of this. When they are, it is usually to facilitate an implementation meeting and record decisions. The facilitator documents the decisions and does not execute them.</p>
<p>A cover letter with the report that states what kind of response is expected improves the meeting.</p>`,
k:"Every proposal ends with a recorded decision. Further study is a decision with an owner and a date."},
{t:"Implementation plan, tracking and reports", ref:"Core Competencies 10.A.7, 10.A.8, 10.B.1, 10.B.2 · VM Guide 11.3.3, 11.3.4, 11.4.1, 11.4.2",
h:`<p>Accepted proposals need an <b>implementation plan</b>: tasks, who is responsible, and dates. On manufacturing or internal process studies this can be completed at the implementation meeting.</p>
<p><b>Tracking and audit</b> confirm that accepted changes were made and that the expected results appeared.</p>
<ul><li><b>Implementation forms</b> record each proposal's decision, reason and owner.</li>
<li><b>Status reports</b> show progress and realized value over time.</li></ul>
<p>Post-workshop activities also include confirming that the study met stakeholders' expectations.</p>`,
k:"Value is realized when the change is made and verified, not when the proposal is accepted."},
{t:"General facilitation skills", ref:"Core Competency 11.A.1 · VM Guide 12.0, 12.2",
h:`<p>The VM facilitator's role is to enable the team to complete every step of the Job Plan in the time available and produce useful outcomes. Core skills:</p>
<ul><li><b>Active listening</b>: stop talking, put the speaker at ease, remove distractions, be patient, ask questions, stop talking.</li>
<li><b>Questioning</b>: Socratic questions for clarity, accuracy, precision, relevance, depth, breadth, logic, significance and fairness.</li>
<li><b>Using feedback</b>: ask the group how the process is going and adjust.</li>
<li><b>Handling conflict</b>: find points of agreement, build on shared ideas, and test for false consensus.</li></ul>`,
k:"Listen, question, check in, and referee. The first and last rule of active listening is to stop talking."},
{t:"Facilitator or consultant", ref:"Core Competency 11.A.1 · VM Guide 12.2",
h:`<p>A <b>facilitator</b> is substantively neutral, holds no significant decision-making authority, and helps a group improve how it solves problems. A <b>consultant</b> gives professional advice and is not neutral.</p>
<ul><li><b>Content</b> is what is being worked on. <b>Process</b> is how the conversation happens.</li>
<li>The CVS owns process. The team members are the subject matter experts who own content.</li></ul>
<p>The mix shifts with the activity and the group. Passive groups need more direction; active groups need more facilitation. If the facilitator has an idea, posing it as a question lets the team own it.</p>`,
k:"The CVS manages process and stays neutral on content. Guiding a team to a predetermined outcome is the failure mode."},
{t:"Group dynamics", ref:"Core Competency 11.A.2 · VM Guide 12.3",
h:`<p><b>Tuckman's model</b> describes how groups develop: forming, storming, norming, performing, adjourning. A VM team has to pass through these in days.</p>
<p>Other dynamics to watch:</p>
<ul><li><b>Groupthink</b>: blind confidence in the group's own ideas.</li>
<li><b>Social loafing</b>: members coast, more often in large groups.</li>
<li><b>Silence is not concurrence</b>: check with a show of hands or a quick round.</li>
<li><b>Heuristics</b>: anchoring, availability, confirmation and representativeness shape judgments.</li></ul>`,
k:"Storming is a stage, not a failure. Never read silence as agreement."},
{t:"Forming teams", ref:"Core Competency 11.A.3 · VM Guide 12.4",
h:`<p>Three team models are used:</p>
<ul><li><b>Fully independent</b>: fresh eyes and less bias, but less project knowledge and more preparation time.</li>
<li><b>Design team and stakeholders</b>: deep knowledge and higher likelihood of implementation, with a risk of bias against change.</li>
<li><b>Hybrid</b>: combines both when balanced, and needs care to avoid an us-versus-them split.</li></ul>
<p><b>Size</b>: include the expertise the subject needs, but do not add people because budget allows. Liking for the group and performance fall as size grows. Large groups work better in sub-groups.</p>`,
k:"Choose the team model to fit the study goals, and keep the team as small as the expertise allows."},
{t:"Facilitating each phase", ref:"Core Competencies 11.B.1 to 11.B.8 · VM Guide 12.5 to 12.12",
h:`<ul><li><b>Preparation</b>: build the relationship with the client; agree the agenda.</li>
<li><b>Information</b>: get buy-in on goals; control sidebars.</li>
<li><b>Function Analysis</b>: move people to abstract thinking; coach, do not manipulate.</li>
<li><b>Creativity</b>: accept all ideas; record them exactly; keep eye contact with the room.</li>
<li><b>Evaluation</b>: state the process and time; do not accept one person's verdict.</li>
<li><b>Development</b>: coach and review; do not write the proposals.</li>
<li><b>Presentation</b>: set expectations; keep it informational.</li>
<li><b>Implementation</b>: document decisions.</li></ul>`,
k:"In every phase the facilitator enables the team's work and does not substitute for it."},
{t:"Virtual facilitation", ref:"Core Competencies 11.C.1 to 11.C.3 · SAVE supplemental facilitation material (2021)",
h:`<p><b>Deciding whether virtual will work</b>: consider whether in-person collaboration, a site visit or client participation is critical, how complex the subject is, and any legal limits on tools.</p>
<p><b>Running it</b>:</p>
<ul><li>shorter days over more days</li>
<li>a technical assistant to run the platform, and a dry run with the team</li>
<li>multiple screens so the facilitator can see everyone; cameras on</li>
<li>longer introductions and deliberate team-building</li>
<li>formal check-ins during development, and a rehearsal of the presentation</li></ul>
<p>Virtual workshops require more facilitation skill, not less, and creativity, evaluation and development take more time.</p>`,
k:"Plan shorter days, more check-ins and a platform assistant. Expect the later phases to run longer."},
{t:"VM programs", ref:"Core Competencies 12.A.1, 12.A.2, 12.A.3 · VM Guide 13.2, 13.3, 13.4",
h:`<p>A VM program applies the methodology across an organization. Managing one is a different job from leading a study.</p>
<p><b>Elements of a successful program</b>:</p>
<ul><li>a strong manager who champions it</li>
<li>program metrics</li>
<li>supportive upper management that attends out-briefs and tracks results</li>
<li>qualified study leaders and team members</li></ul>
<p><b>Signs of trouble</b>: constant argument about the need for the program, proposals not implemented, items added to designs so they can be removed to satisfy a requirement, and a program manager with a title but no authority.</p>
<p>The program manager educates continuously, and every CVS working for the organization is expected to help.</p>`,
k:"The study leader delivers one study. The program manager keeps the organization using the method."}
],
mid:[
{s:"Change", q:"When should the team begin dealing with likely objections to a proposal?",
 o:["After rejection","During development, by anticipating roadblocks and preparing responses","Only if asked","During the site visit"], a:1,
 e:"Proposals are developed with anticipated roadblocks and prepared responses."},
{s:"Resolution", q:"Which set lists the decisions used to resolve VM proposals?",
 o:["Pass or fail","Accept, partially accept, accept modified, reject, further study","Low, medium, high","Draft, final, archived"], a:1,
 e:"These five dispositions are recorded for each proposal."},
{s:"Role", q:"What is the facilitator's role in an implementation meeting?",
 o:["To approve proposals","To document decisions","To execute the changes","To redesign the project"], a:1,
 e:"The facilitator documents decisions and does not take part in executing them."}
],
quiz:[
{s:"Tracking", q:"When is the value from a VM proposal realized?",
 o:["When the idea is recorded","When the change is implemented and verified","When the report is issued","When the workshop ends"], a:1,
 e:"Tracking and audit confirm that accepted changes were made and delivered the expected result."},
{s:"Listening", q:"What is both the first and the last rule of active listening?",
 o:["Take notes","Stop talking","Summarize","Ask why"], a:1,
 e:"The list of ten rules begins and ends with stop talking."},
{s:"Questioning", q:"Which Socratic question tests relevance?",
 o:["Could you give an example?","How does that relate to the problem?","How could we verify that?","What are other points of view?"], a:1,
 e:"Relevance questions connect a statement back to the issue at hand."},
{s:"Neutrality", q:"In VM facilitation, who owns content and who owns process?",
 o:["The facilitator owns both","Team members own content; the facilitator owns process","The sponsor owns both","The designer owns process"], a:1,
 e:"The CVS is the facilitator. Team members are the subject matter experts."},
{s:"Neutrality", q:"The facilitator has a strong idea about the design. What is the recommended way to introduce it?",
 o:["State it as the answer","Pose it as a question so the group can consider and own it","Write it into the report","Keep repeating it"], a:1,
 e:"Posing questions that trigger the idea preserves neutrality and team ownership."},
{s:"Tuckman", q:"Which stage follows storming in Tuckman's model?",
 o:["Forming","Norming","Adjourning","Performing"], a:1,
 e:"Forming, storming, norming, performing, adjourning."},
{s:"Dynamics", q:"Nobody objects when the facilitator asks if all agree. What should the facilitator do?",
 o:["Record consensus","Check each person, for example with a show of hands","End the phase","Ask the sponsor"], a:1,
 e:"Silence does not mean concurrence. Quick check-ins confirm real agreement."},
{s:"Teams", q:"Which team model tends to give the highest likelihood of implementation, with a risk of bias against change?",
 o:["Fully independent","Design team and stakeholders","Hybrid","Single expert"], a:1,
 e:"Teams of designers and stakeholders know the project and include decision-makers, but have a stake in the current design."},
{s:"Virtual", q:"Which adjustment is recommended for a virtual VM workshop?",
 o:["Longer days to finish sooner","Shorter days, possibly over more days or weeks","No breaks","Cameras off"], a:1,
 e:"Virtual sessions drain energy. Shorter days and a longer study help."},
{s:"Programs", q:"Which is a sign that a VM program is not working as intended?",
 o:["Managers ask for studies","Items are inserted into designs so they can be valued out to satisfy the requirement","Proposals are implemented","Results are tracked"], a:1,
 e:"Padding a design to be cut later shows the program has become a box to check."}
]}
},
notes:[
{h:"Source status for this track", p:"Briefings and questions were drafted from the SAVE Core Competencies list (effective 1 October 2025), the Certification Program Manual (19th Edition), the VMF 2 training slides (2019) and the Supplemental Facilitation Slides for VMF 2 (2021). The VM Guide text was not available, so wording has not been checked against it.", src:"Author note"},
{h:"Items to check against the VM Guide", p:"Alternative value measurement approaches (2.6.1 to 2.6.3), SWOT, RACI, balanced scorecard, risk register and WBS sections (5.4), the function performance specification matrix (6.4.4), FAST dimensioning (6.4.5), and managing change (11.2). These briefings are written from general practice.", src:"Author note"},
{h:"The VMF 2 slides predate the current certification rules", p:"The 2019 slides describe CVS requirements in certification points (Learn 30, Share 10, Practice 24). The 19th Edition manual replaces this with PDUs: 160 Practice VM, 24 Learn to Facilitate, and the Communicate VM written section. This track uses the manual.", src:"VMF 2 slides (2019); Certification Program Manual, 19th Ed."},
{h:"Virtual facilitation resources", p:"The competency list marks 11.C (virtual facilitation) with resources to be provided, with no VM Guide section yet. The briefing here draws on the 2021 supplemental slides.", src:"SAVE Core Competencies, page 4"},
{h:"FAST variants accepted by SAVE", p:"For the pending European PVM recognition path, the manual accepts classic, technical or customer FAST diagrams, and function trees that clearly show a function hierarchy.", src:"Certification Program Manual, Section 5"}
]
};
