/* VE Command — VMA Track. Follows the SAVE Core Competencies marked VMA (effective 1 Oct 2025). Tiers b, i, a.
   Sources read: Core Competencies list, Certification Program Manual 19th Ed., VMF 2 slides (2019), Supplemental Facilitation slides (2021).
   The VM Guide text itself was not available; section numbers come from the competency list. */
window.VE = window.VE || {};
VE.command = VE.command || {};
VE.command.vma = {
id:"vma", name:"VMA Track", glyph:"VMA",
blurb:"The Value Methodology Associate competencies: value, the Job Plan, and the workshop phases from Information through Presentation.",
tiers:{
/* ============================== BEGINNER ============================== */
b:{ title:"Value and the Job Plan (Competencies 1 and 2)",
lessons:[
{t:"What the VMA credential is", ref:"SAVE Certification Program Manual, 19th Ed. · Sections 1.4.1.1, 2.1, 3.2.6, 4.2.1",
h:`<p>The <b>Value Methodology Associate (VMA)</b> is SAVE International's entry certification. It recognizes a fundamental level of VM knowledge, enough to take part in a VM study as a team member or assistant facilitator. SAVE does not recognize a VMA as qualified to lead studies.</p>
<ul><li><b>To earn it</b>: complete VMF 1A (e-learning) and VMF 1B (instructor-led), register and pay, and pass the VMA exam.</li>
<li><b>Exam</b>: online, proctored, multiple choice, 90 minutes, no reference material.</li>
<li><b>Renewal</b>: every two years, with 8 Learn VM PDUs and the renewal fee.</li></ul>`,
k:"VMA = VMF 1 plus a 90-minute exam. It qualifies you to participate, not to lead."},
{t:"What the Value Methodology is", ref:"Core Competency 1.A.1 · VM Guide 1.1",
h:`<p>The Value Methodology (VM) is a <b>systematic process used by a multidisciplinary team to improve the value of a project, product or process through the analysis of functions</b> and resources.</p>
<p>Three features set it apart from other improvement methods:</p>
<ul><li>a structured, step-by-step Job Plan</li>
<li>a multidisciplinary team</li>
<li>function analysis</li></ul>
<p>Value analysis, value engineering and value management are used interchangeably for the same methodology. VM is not a cost-cutting exercise and not a reduction in quality.</p>`,
k:"Systematic process, multidisciplinary team, function analysis. Remove any one and it is not VM."},
{t:"Where VM is applied", ref:"Core Competency 1.A.2 · VM Guide 1.2",
h:`<p>SAVE describes the subject of a VM study as a <b>project, product, process, service or organization</b>. The certification manual calls this the <i>study subject</i>.</p>
<ul><li><b>Projects</b>: highways, transit lines, buildings, facilities.</li>
<li><b>Products</b>: manufactured goods and their components.</li>
<li><b>Processes and services</b>: how work or service delivery is done.</li>
<li><b>Organizations</b>: structures and programs.</li></ul>
<p>The Job Plan is the same for all of them. What changes is the information gathered and the resources measured.</p>`,
k:"Five application areas, one Job Plan."},
{t:"History and evolution", ref:"Core Competency 1.A.3 · VM Guide 1.3",
h:`<ul><li><b>1940s</b>: Lawrence D. Miles develops value analysis at General Electric. His observation: the customer wants a function, not a thing.</li>
<li><b>1959</b>: the Society of American Value Engineers is formed.</li>
<li><b>1965</b>: Charles W. Bytheway presents the Function Analysis System Technique (FAST) at the SAVE conference.</li>
<li><b>1980s to 1990s</b>: J. Jerry Kaufman extends FAST through teaching and publications.</li>
<li><b>1996</b>: the society becomes SAVE International.</li></ul>
<p>The Miles Value Foundation continues education and advocacy for the methodology.</p>`,
k:"Miles (1940s, GE), SAVE (1959), Bytheway and FAST (1965), SAVE International (1996)."},
{t:"The value concept, and who determines value", ref:"Core Competencies 1.B.1, 1.B.2 · VM Guide 2.2, 2.3",
h:`<p>Value is a fair return for something exchanged. VM expresses it as a relationship:</p>
<div class="formula">Value = Function ÷ Resources</div>
<ul><li><b>Function</b> is what the subject must do, performed reliably.</li>
<li><b>Resources</b> are what it takes: cost, life-cycle cost, time, space and others.</li></ul>
<p>Value is best determined by the <b>customer</b>. Two classic types are <i>use value</i> (what it does) and <i>esteem value</i> (why someone wants to own it).</p>`,
k:"Value is function relative to resources, judged by the customer."},
{t:"Reasons for poor value", ref:"Core Competency 1.B.3 · VM Guide 2.4",
h:`<p>Poor value usually comes from how decisions were made, not from lack of skill. Common causes:</p>
<ul><li>lack of information, often because of a shortage of time</li>
<li>unclear goals and objectives</li>
<li>wrong beliefs</li>
<li>rigid application of standards and habits</li>
<li>negative attitudes toward new ideas</li>
<li>indecision and fear of failure</li></ul>
<p>The Job Plan answers each one: structured information gathering, function analysis, protected creativity and documented evaluation.</p>`,
k:"Poor value comes from missing information, habit and fear. The Job Plan is built to counter each."},
{t:"Elements of value and basic measurement", ref:"Core Competencies 1.B.4, 1.B.5 · VM Guide 2.5, 2.6, 2.6.3",
h:`<p>To measure value, the team needs a number for function and a number for resources. The basic approach compares what a function <b>costs</b> with what it is <b>worth</b>.</p>
<ul><li><b>Function cost</b>: the resources currently allocated to the function.</li>
<li><b>Function worth</b>: the lowest cost to perform the function, without regard to criteria or code.</li></ul>
<div class="formula">Value index = Function worth ÷ Function cost &nbsp;(sometimes shown reversed)</div>
<p>A function whose cost is far above its worth is a value mismatch and a candidate for creativity.</p>`,
k:"Compare function cost with function worth. Check which way the ratio is written before reading it."},
{t:"The VM Job Plan and its phases", ref:"Core Competencies 2.A.1, 2.A.4 · VM Guide 3.2, 3.5",
h:`<p>The Job Plan is the sequence every VM study follows. The current SAVE framework has <b>eight phases</b>:</p>
<ol><li>Preparation</li><li>Information</li><li>Function Analysis</li><li>Creativity</li>
<li>Evaluation</li><li>Development</li><li>Presentation</li><li>Implementation</li></ol>
<p>Older material, including the 2019 VMF 2 slides, shows a six-phase workshop (Information through Presentation) with pre-workshop and post-workshop activities on either side. The content is the same; the newer framing names the two outer stages as phases.</p>`,
k:"Eight phases. Phases 2 through 7 are the workshop; 1 comes before it and 8 after."},
{t:"How a VM study maps to the Job Plan", ref:"Core Competency 2.A.2 · VM Guide 3.3 · Certification Manual 2.2.2.1, 4.2.2.1.1",
h:`<p>A VM study has three stages:</p>
<ul><li><b>Pre-workshop</b>: the Preparation Phase.</li>
<li><b>Workshop</b>: Information, Function Analysis, Creativity, Evaluation, Development, Presentation.</li>
<li><b>Post-workshop</b>: report and the Implementation Phase.</li></ul>
<p>The certification manual uses this split. For a first CVS application, only contact hours in phases 2 through 7 count as VM study hours. For renewal, a VM study includes all eight phases.</p>`,
k:"Skipping a workshop phase means the activity is not a VM study for certification purposes."},
{t:"Communication and the Job Plan", ref:"Core Competency 2.A.3 · VM Guide 3.4 · VMF 2 function analysis material",
h:`<p>The Job Plan is also a communication structure. Each phase changes how the team talks:</p>
<ul><li><b>Information</b>: everyone hears the same facts.</li>
<li><b>Function Analysis</b>: verb-noun functions give people from different disciplines a common, non-technical language.</li>
<li><b>Creativity</b>: judgment is deferred so ideas are not suppressed.</li>
<li><b>Evaluation onward</b>: discussion converges on agreed criteria.</li></ul>
<p>Function analysis in particular causes interaction, expands knowledge, creates shared understanding and changes viewpoint.</p>`,
k:"Functions give a mixed team one language. The phase order keeps generating and judging apart."}
],
mid:[
{s:"Credential", q:"What does SAVE recognize a VMA as qualified to do?",
 o:["Lead VM studies","Participate in a VM study as a team member or assistant facilitator","Teach VMF 1 and VMF 2","Approve CVS applications"], a:1,
 e:"The certification manual states a VMA has fundamental knowledge sufficient to participate as a team member or assistant facilitator, and is not recognized as qualified to lead studies."},
{s:"Definition", q:"Which combination distinguishes the Value Methodology from other improvement methods?",
 o:["Cost targets, audits and benchmarks","A systematic Job Plan, a multidisciplinary team and function analysis","A single expert reviewer","Schedule compression and outsourcing"], a:1,
 e:"VM is a systematic process used by a multidisciplinary team that improves value through function analysis."},
{s:"Value", q:"In the VM value relationship, what is function divided by?",
 o:["Quality","Resources","Schedule only","Team size"], a:1,
 e:"Value = Function / Resources, where resources may be cost, life-cycle cost, time, space and others."}
],
quiz:[
{s:"Exam", q:"How long does a candidate have to answer the VMA exam questions?",
 o:["60 minutes","90 minutes","3 hours","No limit"], a:1,
 e:"The certification manual gives 90 minutes for the VMA exam and 3 hours for the CVS exam."},
{s:"Renewal", q:"What must a VMA accrue in each two-year renewal period?",
 o:["160 VM activity PDUs","8 Learn VM PDUs","56 Learn VM PDUs","Six VM studies"], a:1,
 e:"VMA renewal requires eight Learn VM PDUs and payment of renewal fees."},
{s:"Application areas", q:"Which list matches the study subjects SAVE names for VM?",
 o:["Projects only","Project, product, process, service or organization","Products and patents","Budgets and schedules"], a:1,
 e:"The certification manual describes the study subject as a project, product, process, service or organization."},
{s:"History", q:"Who is regarded as the originator of value analysis?",
 o:["Charles Bytheway","Lawrence D. Miles","J. Jerry Kaufman","Roger Schwarz"], a:1,
 e:"Miles developed value analysis at General Electric in the 1940s."},
{s:"History", q:"What did Charles Bytheway contribute in 1965?",
 o:["The Job Plan","The Function Analysis System Technique (FAST)","Life-cycle costing","The CVS exam"], a:1,
 e:"Bytheway presented FAST at the 1965 SAVE conference."},
{s:"Value", q:"Who is best placed to determine what is good value?",
 o:["The VM facilitator","The customer","The lowest bidder","The designer"], a:1,
 e:"Value is best determined by the customer."},
{s:"Poor value", q:"A design repeats a detail because that is how the agency has always done it. Which reason for poor value is this?",
 o:["Lack of information","Rigid application of standards and habit","Inflation","Scope growth"], a:1,
 e:"Habitual solutions and rigid use of standards are classic causes of poor value."},
{s:"Worth", q:"How is function worth defined?",
 o:["The current cost of the function","The lowest cost to perform the function, without regard to criteria or code","The sale price","The cost of the most durable option"], a:1,
 e:"Worth is the lowest cost to reliably perform the function."},
{s:"Job Plan", q:"Which phases make up the VM workshop?",
 o:["Preparation through Implementation","Information through Presentation","Creativity and Evaluation only","Function Analysis only"], a:1,
 e:"Phases 2 through 7 form the workshop. Preparation precedes it and Implementation follows."},
{s:"Sequence", q:"Which phase comes directly after Function Analysis?",
 o:["Evaluation","Creativity","Development","Information"], a:1,
 e:"The order is Information, Function Analysis, Creativity, Evaluation, Development, Presentation."}
]},

/* ============================== INTERMEDIATE ============================== */
i:{ title:"Information, Function Analysis and Creativity (Competencies 4, 5 and 6)",
lessons:[
{t:"The Information Phase", ref:"Core Competencies 4.A.1, 4.A.2, 4.A.4 · VM Guide 5.2.1, 5.2.2, 5.2.4",
h:`<p>The purpose of the Information Phase is a thorough, shared understanding of the study subject. Three activities run through it:</p>
<ul><li><b>Gather and organize</b>: drawings, specifications, estimates, schedules, requirements, constraints.</li>
<li><b>Review and transform</b>: turn raw data into models that show where the opportunities are.</li>
<li><b>Confirm</b>: management or the sponsor opens the workshop and restates the goals; the team identifies what is still missing.</li></ul>
<p>The phase formally ends on the first workshop day, but new information keeps arriving through every later phase.</p>`,
k:"Data becomes useful when it is transformed into a model the whole team can read."},
{t:"Scope, performance and quality information", ref:"Core Competencies 4.A.5, 4.A.6 · VM Guide 5.3.1, 5.3.2",
h:`<p><b>Scope information</b> states what is in the study and what is not: the limits of the subject, the baseline design or process, and the constraints the team must respect.</p>
<p><b>Performance and quality information</b> states what the subject must achieve and how well:</p>
<ul><li>customer and user requirements</li>
<li>design criteria and standards</li>
<li>performance attributes the owner cares about, and their relative importance</li></ul>
<p>Without it, the team can only judge ideas on cost.</p>`,
k:"Scope sets the boundary. Performance information sets what cannot be given up."},
{t:"Time, cost and risk information", ref:"Core Competencies 4.A.7, 4.A.8, 4.A.9 · VM Guide 5.3.3, 5.3.4, 5.3.5",
h:`<ul><li><b>Time</b>: the schedule, key milestones and what drives duration. On projects this includes procurement and construction sequence.</li>
<li><b>Cost</b>: the current estimate, its level of detail and what is included. A construction estimate at concept, schematic and design-development stages carries different reliability.</li>
<li><b>Risk</b>: the uncertainties that could change cost, time or performance, and how the owner has allowed for them.</li></ul>
<p>The Risk and Cost Estimating tracks in this station go deeper on the last two.</p>`,
k:"Time, cost and risk are all resources or threats to them. Each needs its own source document."},
{t:"Methods to transform information", ref:"Core Competencies 4.B.1, 4.B.4, 4.B.6, 4.B.7 · VM Guide 5.4.1, 5.4.4, 5.4.6, 5.4.7",
h:`<p>Four methods are in the VMA competencies:</p>
<ul><li><b>Voice of the customer</b>: what customers and users say they need, in their words.</li>
<li><b>Process flowchart</b>: the steps of a process in sequence, showing handoffs and rework.</li>
<li><b>Gantt chart</b>: activities against time.</li>
<li><b>Cost model</b>: cost broken down by element so the largest items stand out, often as a Pareto chart.</li></ul>
<p>Other models follow the same idea for space, time, energy or labor. The purpose is always to show where the opportunity is concentrated.</p>`,
k:"Each method turns a pile of data into a picture of where resources go."},
{t:"The function concept, and why function analysis", ref:"Core Competencies 5.A.1, 5.A.2 · VM Guide 6.2.1, 6.2.2",
h:`<p>A function is <b>what something does</b>, stated apart from the thing that does it. A farmer does not need a horse and plow; the need is to <i>turn soil</i>. People do not need a refrigerator; they need to <i>preserve food</i>.</p>
<p>Function analysis is considered the heart of VM because it:</p>
<ul><li>shifts thinking from objects to purposes</li>
<li>creates a common understanding across disciplines</li>
<li>identifies value mismatches: functions that cost too much or perform too little</li>
<li>opens the way to solutions that do not resemble the current design</li></ul>`,
k:"People want functions, not things. Stating the function frees the team from the current solution."},
{t:"Defining functions", ref:"Core Competencies 5.A.3, 5.A.4 · VM Guide 6.3, 6.3.1",
h:`<p>A function is stated in two words: an <b>active verb</b> and a <b>measurable noun</b>.</p>
<ul><li>The verb answers <i>What does it do?</i></li>
<li>The noun answers <i>What does it do it to?</i></li></ul>
<p>Common errors:</p>
<ul><li><b>Activities</b> in place of functions: <i>construct bridge</i> is an activity; <i>improve traffic</i> is a function.</li>
<li><b>Part names as nouns</b>: <i>charge battery</i> points at a component; <i>store energy</i> does not.</li>
<li><b>Weak verbs</b>: avoid <i>provide</i>. <i>Illuminate space</i> says more than <i>provide light</i>.</li></ul>`,
k:"Active verb, measurable noun. If the noun is a part name, the team will only think about that part."},
{t:"Classifying functions and random function identification", ref:"Core Competencies 5.A.4, 5.B.1 · VM Guide 6.3.1, 6.4.1",
h:`<p>In <b>random function identification</b> the team lists functions element by element on a worksheet, in no logical order, and classifies each:</p>
<ul><li><b>Basic</b>: the specific purpose the subject exists for. If it can be removed and the purpose is still met, it is not basic.</li>
<li><b>Secondary</b>: what else it does. <i>Required</i> secondary functions support the basic function; <i>unwanted</i> ones are by-products, such as a projector that generates heat.</li>
<li><b>Higher order</b>: the need that causes the basic function.</li>
<li><b>Lower order</b>: an input that lies outside the study scope.</li></ul>`,
k:"Basic is why it exists. Secondary functions often carry much of the cost."},
{t:"FAST diagram concepts", ref:"Core Competency 5.B.2 · VM Guide 6.4.2",
h:`<p>The Function Analysis System Technique organizes functions by logic, not by time.</p>
<ul><li>Reading to the right answers <b>How?</b> Reading to the left answers <b>Why?</b></li>
<li>The vertical direction answers <b>When?</b>: functions that happen at the same time as, or are caused by, another function.</li>
<li>Two vertical <b>scope lines</b> bound the study. The higher-order function sits left of the left line; the lower-order function sits right of the right line.</li>
<li>The chain between them is the <b>critical function logic path</b>.</li></ul>
<p>There is no single correct FAST diagram for a subject. There is a <i>valid</i> one: the logic works in both directions and the team agrees.</p>`,
k:"How to the right, Why to the left, When up and down. A FAST diagram is not a flowchart."},
{t:"Allocating resources and prioritizing functions", ref:"Core Competencies 5.A.5, 5.A.6, 5.B.4 · VM Guide 6.3.2, 6.3.3, 6.4.3",
h:`<p>A <b>function resource matrix</b> lists functions across the top and components down the side, then distributes each component's cost (or space, time, weight) to the functions it performs.</p>
<p>Two mistakes to avoid:</p>
<ul><li>splitting a component's cost equally among its functions</li>
<li>giving a function more cost because it is important</li></ul>
<p>Column totals show the cost of each function. By the Pareto principle, about 20% of the functions carry about 80% of the resources. Those, plus functions the client flags for risk or performance, are prioritized for the Creativity Phase.</p>`,
k:"Allocate actual cost to functions, total the columns, and take the top few into creativity."},
{t:"The Creativity Phase", ref:"Core Competencies 6.A.1, 6.A.2, 6.B.1, 6.B.2 · VM Guide 7.2, 7.3.1, 7.3.2, 7.4.1, 7.4.2",
h:`<p>The purpose is a large quantity of ideas for performing the prioritized functions. Key questions: What else will perform the function? Does it need to be done at all?</p>
<p><b>Brainstorming</b> rules:</p>
<ul><li>defer all judgment and comment</li>
<li>go for quantity</li>
<li>combine and build on others' ideas</li>
<li>let everyone take part</li></ul>
<p><b>Brainwriting</b> has people write ideas individually and pass them on, which helps quieter members contribute.</p>
<p>Record each idea as stated, as one complete thought that someone outside the room could understand.</p>`,
k:"Quantity first, no judgment, every idea recorded in the contributor's words."}
],
mid:[
{s:"Information", q:"What is the purpose of transforming information in the Information Phase?",
 o:["To shorten the report","To turn data into models that show where value opportunities are","To check the designer's math","To replace the estimate"], a:1,
 e:"Models such as cost, space or time models make the concentration of resources visible."},
{s:"Tools", q:"Which method shows the steps of a process in sequence, with handoffs?",
 o:["Gantt chart","Process flowchart","Cost model","Voice of the customer"], a:1,
 e:"A process flowchart maps steps in order. A Gantt chart maps activities against time."},
{s:"Function concept", q:"According to Miles, what does the customer want?",
 o:["A lower price","A function","A longer warranty","More features"], a:1,
 e:"Miles observed that the customer wants a function, not a thing."}
],
quiz:[
{s:"Information", q:"When does the Information Phase stop producing new information?",
 o:["At the end of day one","It never truly stops during a VM study","After the site visit","When the estimate is read"], a:1,
 e:"The formal phase ends on the first day, but the team keeps uncovering information in every later phase."},
{s:"Performance", q:"Why does the team need performance and quality information?",
 o:["To set the agenda","So ideas can be judged on what the subject must achieve, not only on cost","To choose the facilitator","To write the invitation"], a:1,
 e:"Without performance information, evaluation collapses to cost alone."},
{s:"Defining functions", q:"Which is a properly stated function?",
 o:["Construct bridge","Support load","Provide support","Charge battery"], a:1,
 e:"Support load has an active verb and a measurable noun. Construct bridge is an activity; charge battery names a part; provide is a weak verb."},
{s:"Defining functions", q:"Why avoid a part name as the noun in a function?",
 o:["It is too long","It focuses thinking on that part and leads to cost-cutting instead of alternatives","It is hard to spell","It breaks the worksheet"], a:1,
 e:"Store energy opens alternatives. Charge battery keeps the team on batteries."},
{s:"Classifying", q:"A projector's lamp generates heat. How is generate heat classified?",
 o:["Basic function","Unwanted secondary function","Higher-order function","Lower-order function"], a:1,
 e:"It is a by-product of how another function is performed, and it erodes value."},
{s:"Classifying", q:"Which test helps confirm a basic function?",
 o:["It is the most expensive function","If it is removed, the primary purpose can no longer be achieved","It is listed first","The designer prefers it"], a:1,
 e:"If a function can be eliminated while the primary purpose is still achieved, it is not basic."},
{s:"FAST", q:"On a FAST diagram, what question is answered by reading from right to left?",
 o:["How?","Why?","When?","Who?"], a:1,
 e:"How reads to the right, Why reads to the left."},
{s:"FAST", q:"What makes a FAST diagram valid?",
 o:["It matches a textbook example","The How and Why logic works in both directions and the team agrees","It has ten functions","The facilitator drew it"], a:1,
 e:"There is no single correct diagram. Validity comes from two-way logic and team consensus."},
{s:"Resources", q:"A component performs three functions. How should its cost be allocated?",
 o:["One third to each","According to the actual cost of performing each function","All to the most important","All to the basic function"], a:1,
 e:"Equal splits and importance-based splits are the two common mistakes."},
{s:"Creativity", q:"During brainstorming a team member starts explaining why an idea will not work. What should happen?",
 o:["The idea is deleted","Judgment is deferred and the idea is recorded as stated","The team votes","The session ends"], a:1,
 e:"Deferring judgment is the first rule. Evaluation comes in the next phase."}
]},

/* ============================== ADVANCED ============================== */
a:{ title:"Evaluation, Development and Presentation (Competencies 7, 8 and 9)",
lessons:[
{t:"The Evaluation Phase", ref:"Core Competency 7.A.1 · VM Guide 8.2",
h:`<p>Evaluation judges the ideas from the Creativity Phase. It starts with a long list and ends with a short list to develop.</p>
<p>Key questions for each idea:</p>
<ul><li>Will it perform the functions?</li>
<li>Will required performance and quality be achieved?</li>
<li>Will it improve value?</li>
<li>Can it be implemented, and what stands in the way?</li></ul>
<p>The goal is to protect ideas with potential, not to see how many can be discarded. Ideas can be modified or combined before they are judged.</p>`,
k:"Evaluation reduces the list. Its job is to find the ideas worth developing, not to reject as many as possible."},
{t:"Framework and criteria", ref:"Core Competencies 7.A.2, 7.A.3 · VM Guide 8.3.1, 8.3.2",
h:`<p>Before judging, the team agrees on <b>how</b> ideas will be judged.</p>
<ul><li><b>Framework</b>: which technique will be used at each pass, who takes part, and how much time is allowed.</li>
<li><b>Criteria</b>: what matters to the customer, drawn from the goals, the performance information and the functions. Typical criteria include performance, initial cost, life-cycle cost, schedule, risk and ease of implementation.</li></ul>
<p>Setting criteria first keeps the scoring from being shaped around a favored idea.</p>`,
k:"Agree on technique and criteria before the first idea is scored."},
{t:"Selecting ideas and the coarse filter", ref:"Core Competencies 7.A.4, 7.B.1 · VM Guide 8.3.3, 8.4.1",
h:`<p>SAVE describes evaluation techniques as filters of increasing fineness. The <b>coarse filter</b> is a quick first pass through the whole list. Simple techniques include:</p>
<ul><li><b>Yes / No / Not now</b></li>
<li>a quick team vote</li>
<li>removing duplicates and combining related ideas</li></ul>
<p>The first pass should be fast. Its only question is whether an idea deserves a closer look. Ideas set aside are kept in the record with a short reason.</p>`,
k:"The coarse filter is a quick sort of the whole list. Keep the reasons for what is set aside."},
{t:"Medium and fine filters", ref:"Core Competencies 7.B.2, 7.B.3 · VM Guide 8.4.2, 8.4.3",
h:`<p><b>Medium filter</b> techniques rank the survivors:</p>
<ul><li>numeric rating, such as 1 to 5 with 5 best</li>
<li>letter grades, A to D</li>
<li>a T-chart of advantages and disadvantages</li></ul>
<p><b>Fine filter</b> techniques compare a few strong candidates in detail:</p>
<ul><li>a weighted evaluation matrix, with criteria weighted against each other and each idea scored on each criterion</li>
<li>a benefit-to-cost ratio: benefit points divided by life-cycle cost</li></ul>
<p>The finer the filter, the more time it takes, so it is used on fewer ideas.</p>`,
k:"Use the cheapest filter that separates the ideas. Save weighted matrices for close decisions."},
{t:"The Development Phase and assigning ideas", ref:"Core Competencies 8.A.1, 8.A.2 · VM Guide 9.2, 9.3.1",
h:`<p>Development turns selected ideas into <b>VM proposals</b>: specific recommendations for change that improve value.</p>
<p>Each idea is assigned to the team member, or pair, with the right expertise. Key questions the write-up must answer:</p>
<ul><li>What change is recommended?</li>
<li>Why is it technically acceptable?</li>
<li>What are the cost and performance benefits, and the trade-offs?</li>
<li>What are the life-cycle cost implications?</li>
<li>How and by whom would it be implemented?</li></ul>`,
k:"A VM proposal answers what, why, how much and how. An idea only has a title."},
{t:"Developing and reviewing VM proposals", ref:"Core Competencies 8.A.3, 8.A.4, 8.B.1 · VM Guide 9.3.2, 9.3.3, 9.4.1",
h:`<p>A proposal is written for two audiences at once:</p>
<ul><li><b>Technical</b>: current condition, proposed change, how it meets the functions, advantages and disadvantages, sketches.</li>
<li><b>Business</b>: initial and life-cycle cost change, implementation cost, payback, return on investment.</li></ul>
<p>A <b>proposal development form</b> keeps every write-up in the same structure. Before presentation the team reviews each other's proposals, or reviews them together on screen, so that each one represents team consensus. Anticipated objections get a prepared response.</p>`,
k:"Same form for every proposal, written for technical and business readers, reviewed by the team."},
{t:"Simple payback and return on investment", ref:"Core Competencies 8.B.2, 8.B.3 · VM Guide 9.4.2, 9.4.3",
h:`<p><b>Simple payback</b> is the time needed to recover an investment from the savings it creates. It ignores the time value of money.</p>
<div class="formula">Simple payback = Investment ÷ Annual savings</div>
<p>Example: $15,000 invested for $3,000 a year in savings pays back in 5 years.</p>
<p><b>Return on investment</b> compares the benefit of an investment with its cost, as a ratio or percentage.</p>
<div class="formula">ROI = Net benefit ÷ Investment cost</div>
<p>Example: a $20,000 change that returns $50,000 in savings has a net benefit of $30,000 and an ROI of 150%.</p>`,
k:"Payback answers how long. ROI answers how much return per dollar invested."},
{t:"Life-cycle cost analysis", ref:"Core Competency 8.B.4 · VM Guide 9.4.4",
h:`<p>Life-cycle costing is an economic assessment of all significant costs of ownership over the economic life, expressed in equivalent dollars.</p>
<ul><li><b>Costs included</b>: initial capital, energy, maintenance, major repair and replacement, staffing.</li>
<li><b>Time value of money</b>: a dollar today is worth more than a dollar later.</li>
<li><b>Present worth</b>: converts all present and future costs to today's dollars using a discount rate.</li>
<li><b>Annualized method</b>: expresses the same costs as an equivalent uniform annual cost.</li></ul>
<p>Alternatives must be compared over the same period with the same discount rate.</p>`,
k:"Convert every cost to the same point in time, then compare totals."},
{t:"The Presentation Phase", ref:"Core Competencies 9.A.1, 9.A.2, 9.A.3 · VM Guide 10.2, 10.3.1, 10.3.2",
h:`<p>The purpose is to communicate the proposals to decision-makers so they understand and can act.</p>
<ul><li><b>Schedule</b>: the presentation is set during preparation, so sponsors and stakeholders hold the date.</li>
<li><b>Select</b>: the team chooses which proposals to present in the time available, usually the highest-value ones, and who presents each.</li>
<li><b>Process</b>: team and scope, functions studied, resources by function, method used, recommendations, expected benefits, implementation, request for action.</li></ul>`,
k:"Decide the date early, pick the proposals that matter most, and assign a presenter to each."},
{t:"Visuals, opening and the VM study report", ref:"Core Competencies 9.A.4, 9.A.5, 9.A.6 · VM Guide 10.3.3, 10.3.4, 10.3.5",
h:`<p><b>Visuals and handouts</b>: use the development write-ups as the basis, and add graphics that explain the change.</p>
<p><b>Starting the presentation</b>: state the purpose, how long each person will speak and how questions will be handled. It is an informational meeting, not a decision meeting.</p>
<p><b>The VM study report</b> typically contains:</p>
<ul><li>introduction and the original goals and objectives</li>
<li>summary of results</li>
<li>the recommendations with their detailed analysis</li>
<li>the agenda and process used</li></ul>
<p>A draft is issued for comment, and the client's status on each recommendation is captured where possible.</p>`,
k:"The presentation previews the report. Decisions come afterward, in implementation."}
],
mid:[
{s:"Evaluation", q:"What is the goal of the Evaluation Phase?",
 o:["To discard as many ideas as possible","To identify the ideas with the most potential to improve value for development","To write the report","To generate more ideas"], a:1,
 e:"Evaluation protects promising ideas and narrows the list to those worth developing."},
{s:"Criteria", q:"When should evaluation criteria be established?",
 o:["After the scores are known","Before ideas are judged","During the presentation","After implementation"], a:1,
 e:"Agreeing on criteria first prevents scoring from being shaped around a preferred idea."},
{s:"Filters", q:"Which technique is a coarse filter?",
 o:["Weighted evaluation matrix","Yes / No / Not now","Benefit-to-cost ratio using life-cycle cost","Present worth analysis"], a:1,
 e:"Simple go/no-go sorting is the quick first pass. Weighted matrices are fine-filter techniques."}
],
quiz:[
{s:"Evaluation", q:"Two ideas each solve half of a problem. What may the team do before judging them?",
 o:["Reject both","Combine them into one idea","Send both to the designer","Ignore the problem"], a:1,
 e:"Ideas can be modified or combined before evaluation."},
{s:"Filters", q:"Why not run a weighted evaluation matrix on all 150 ideas?",
 o:["It is prohibited","Fine filters take the most time and are meant for a small number of strong candidates","It always gives ties","It needs a CVS"], a:1,
 e:"Use the cheapest filter that separates the ideas, and reserve detailed techniques for close calls."},
{s:"Filters", q:"A benefit-to-cost ratio in evaluation divides benefit points by what?",
 o:["Team size","Life-cycle cost","Number of ideas","Workshop days"], a:1,
 e:"The VMF 2 material shows B/C ratio as benefits (points) over life-cycle costs, used to rank ideas."},
{s:"Development", q:"What does the Development Phase produce?",
 o:["A longer idea list","VM proposals","A FAST diagram","The pre-study agenda"], a:1,
 e:"Selected ideas are developed into specific VM proposals."},
{s:"Development", q:"Which content is aimed at the business audience of a VM proposal?",
 o:["Sketches of the detail","Life-cycle cost change, implementation cost and return on investment","The function list","Weld symbols"], a:1,
 e:"The business case covers costs, payback and ROI. The technical case covers the change and how it meets the functions."},
{s:"Payback", q:"An investment of $48,000 saves $12,000 per year. What is the simple payback?",
 o:["2 years","4 years","6 years","12 years"], a:1,
 e:"$48,000 / $12,000 per year = 4 years."},
{s:"Payback", q:"What does simple payback leave out?",
 o:["The investment","The time value of money","Annual savings","The answer in years"], a:1,
 e:"Simple payback does not discount future savings."},
{s:"ROI", q:"A $40,000 change returns $100,000 in savings. What is the ROI?",
 o:["40%","60%","150%","250%"], a:2,
 e:"Net benefit is $100,000 - $40,000 = $60,000. $60,000 / $40,000 = 150%."},
{s:"LCC", q:"What does present worth analysis do?",
 o:["Adds all costs without adjustment","Converts present and future costs to today's dollars using a discount rate","Ignores maintenance","Counts only initial cost"], a:1,
 e:"Present worth brings all costs to a common point in time."},
{s:"Presentation", q:"How should the VM presentation be framed for the audience?",
 o:["As the meeting where each proposal is accepted or rejected","As an informational preview of the report; decisions follow","As a design review","As a contract negotiation"], a:1,
 e:"The presentation informs. Dispositions are made in the Implementation Phase."}
]}
},
notes:[
{h:"Source status for this track", p:"Briefings and questions were drafted from the SAVE Core Competencies list (effective 1 October 2025), the Certification Program Manual (19th Edition), and the VMF 2 and supplemental facilitation slides. The VM Guide text was not available, so wording has not been checked against it. VM Guide section numbers come from the competency list.", src:"Author note"},
{h:"Items to check against the VM Guide", p:"Communication dynamics (3.4), elements of value (2.5), the exact techniques the Guide assigns to coarse, medium and fine filters (8.4), and the ROI formula as the Guide states it (9.4.2).", src:"Author note"},
{h:"Six phases or eight", p:"The 2019 VMF 2 slides teach a six-phase workshop with pre- and post-workshop activities. The 2025 competency list and the 19th Edition manual use eight phases, adding Preparation and Implementation as named phases.", src:"VMF 2 slides (2019); Certification Program Manual 4.2.2.1.1"},
{h:"Exam rules", p:"Online, proctored by webcam, multiple choice or similar, timed, in English, no reference material. A failed exam is retaken in full. Up to two retakes within a year; after a third VMA failure, a six-month wait and a new exam fee.", src:"Certification Program Manual Sections 3.2 and 3.3"}
]
};
