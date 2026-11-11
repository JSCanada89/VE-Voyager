/* Program & Requirements — Caltrans / federal VE mandate. Tiers: b, i, a. */
window.VE = window.VE || {};
VE.program = {
id:"program", name:"Program & Requirements", glyph:"§",
blurb:"The federal mandate, its limits and exclusions, and how Caltrans runs Value Analysis.",
tiers:{
/* ============================== BEGINNER ============================== */
b:{ title:"The Federal Mandate",
lessons:[
{t:"Value engineering, or Value Analysis", ref:"23 U.S.C. 106(e)(1) · PDPM Chapter 19",
h:`<p>Federal law calls it a <b>value engineering analysis</b>. Caltrans calls the same process <b>Value Analysis (VA)</b>. Both describe a systematic review by an independent, multidisciplinary team that works from functions rather than from the design as drawn.</p>
<p>The statute says the analysis produces recommendations for:</p>
<ul><li>providing the needed functions safely, reliably and efficiently at the lowest overall life-cycle cost</li>
<li>improving the value and quality of the project</li>
<li>reducing the time to complete the project</li></ul>`,
k:"Cost, quality and schedule are all named purposes in the statute. Savings alone is not the definition."},
{t:"Where the rules live", ref:"23 U.S.C. 106(e) · 23 CFR 627 · FHWA Order 1311.1B · DD-92-R1",
h:`<p>The requirement is layered. Each layer can add to the one above it but cannot remove anything:</p>
<ol><li><b>Statute</b>: 23 U.S.C. 106(e) sets the requirement and the thresholds.</li>
<li><b>Regulation</b>: 23 CFR 627 sets how state agencies run their VE programs.</li>
<li><b>FHWA policy</b>: FHWA Order 1311.1B, the FHWA VE Policy.</li>
<li><b>Caltrans policy</b>: Deputy Directive DD-92-R1 and PDPM Chapter 19. Local agencies follow the Local Assistance Procedures Manual.</li></ol>`,
k:"Federal law sets the floor. Caltrans policy can require more studies than the law does."},
{t:"The thresholds", ref:"23 U.S.C. 106(e)(2) · 23 CFR 627.5",
h:`<p>A VE analysis is federally required when <b>all</b> of these are true:</p>
<ul><li>the project is on the <b>National Highway System (NHS)</b></li>
<li>it uses <b>Federal-aid highway funding</b></li>
<li>its estimated total project cost is <b>$50 million or more</b>, or <b>$40 million or more</b> for a bridge project</li></ul>
<div class="formula">NHS + Federal-aid + ≥ $50M (≥ $40M bridge) → VE required</div>`,
k:"Three conditions, all required. A $70M project off the NHS does not trigger the federal requirement."},
{t:"What counts as total project cost", ref:"23 CFR 627.3 · DD-92-R1",
h:`<p>The threshold is measured against the <b>total project cost</b>, not the construction estimate. 23 CFR 627.3 defines it as the estimated cost of all work on the project, including:</p>
<ul><li>environmental</li><li>design</li><li>right of way</li><li>utilities</li><li>construction</li></ul>
<p>Caltrans DD-92-R1 describes the same thing as right of way, construction and support costs.</p>`,
k:"A $42M construction estimate with $12M of right of way and support is a $54M project for threshold purposes."},
{t:"What counts as the project", ref:"23 CFR 627.3",
h:`<p>The regulation defines a project by the limits described in the preliminary design report or the environmental document. One project can be built under several contracts or phases over several years.</p>
<p>Splitting a corridor into contracts does not split it into separate projects for VE purposes. The threshold applies to the project as a whole.</p>`,
k:"Contract packaging does not reset the threshold. The environmental document's project limits do."},
{t:"Timing: before final design", ref:"23 U.S.C. 106(e)(4) · 23 CFR 627.5(a) · PDPM Ch. 19 Fig. 19-1",
h:`<p>The analysis must be conducted <b>before final design is complete</b>. That is the legal deadline, not the target.</p>
<p>PDPM Chapter 19 (Figure 19-1) shows potential VA benefits falling as project development advances: early studies can still change alignment, scope and structure type, while late studies are limited to refinements because redesign cost and schedule risk rise.</p>`,
k:"Legally: before final design. Practically: as early as there is enough information to analyze."},
{t:"The design-build exclusion", ref:"23 U.S.C. 106(e)(5) · 23 CFR 627.5(e) · FHWA VE FAQ",
h:`<p>MAP-21 (2012) added a provision that the VE requirement <b>does not apply to projects delivered by design-build</b>. FHWA's 2014 rule carried this into 23 CFR 627.5(e).</p>
<p>FHWA still encourages a VE analysis on design-build projects that meet the thresholds, typically during preliminary design before the RFP.</p>
<p><b>Progressive design-build</b> is a form of design-build delivery, so it falls under the same exclusion. Confirm the treatment of a specific contract structure with the FHWA Division Office.</p>`,
k:"Design-build, including progressive design-build: not federally required, but allowed and encouraged."},
{t:"What the exclusion does not cover", ref:"23 U.S.C. 106(e) · FHWA MAP-21 Q&A",
h:`<p>Only design-build is named in the statute. Projects delivered by <b>design-bid-build</b> or <b>CM/GC</b> that meet the thresholds remain subject to the requirement.</p>
<p>MAP-21 also removed the separate requirement for bridge projects <b>off</b> the NHS. Before MAP-21 the thresholds were $25M for projects and $20M for bridges, on the broader Federal-aid system.</p>`,
k:"CM/GC is not design-build. Non-NHS bridges dropped out of the federal requirement in 2012."},
{t:"The proposed threshold increase", ref:"H.R. 8870, BUILD America 250 Act, Sec. 1201",
h:`<p>The House BUILD America 250 Act (H.R. 8870), Section 1201, would raise the NHS project threshold from <b>$50 million to $100 million</b>. It would also raise the major-project threshold from $500 million to $1 billion.</p>
<p>Status as of late 2026: the House Transportation and Infrastructure Committee approved the bill 62–2 on May 22, 2026. It had not reached a House floor vote, the Senate had no companion text, and current surface transportation authorities were extended through December 11, 2026.</p>
<p>If enacted, fewer projects would be federally required to have VE. States could still keep lower thresholds under their own programs.</p>`,
k:"Proposed, not law. Check the bill's status before quoting a $100M threshold to a client."},
{t:"Caltrans policy on top of the law", ref:"DD-92-R1 · PDPM Ch. 19 · Caltrans VA FAQ",
h:`<p>DD-92-R1 states that Caltrans must apply VA to qualifying projects <b>regardless of who is doing the work</b>: Caltrans staff, local agencies or consultants.</p>
<ul><li>VA studies should also be considered for projects the federal rule does not require.</li>
<li>An exception process exists, signed off by the District Director.</li>
<li>Each district has a <b>District Value Analysis Coordinator (DVAC)</b>. Headquarters reports an annual assessment of the VA program to FHWA.</li></ul>`,
k:"Local-agency projects on the State Highway System meet the same requirement as Caltrans-delivered ones."}
],
mid:[
{s:"Threshold check", q:"Which set of conditions triggers the federal VE requirement for a roadway project?",
 o:["Any project over $25M","NHS, Federal-aid funding, and $50M or more total project cost","Federal-aid funding and $50M or more in construction cost only","Any state highway project over $40M"], a:1,
 e:"All three conditions are needed: on the NHS, using Federal-aid funds, and at or above $50M total project cost ($40M for NHS bridges)."},
{s:"Estimate review", q:"Construction is estimated at $44M, right of way at $5M, and support costs at $7M. The project is on the NHS with Federal-aid funds. Is VE required?",
 o:["No, construction is under $50M","Yes, total project cost is $56M","Only if it includes a bridge","Only if the district requests it"], a:1,
 e:"Total project cost includes environmental, design, right of way, utilities and construction. $44M + $5M + $7M = $56M."},
{s:"Corridor packaging", q:"A $90M NHS corridor in one environmental document will be let as three $30M contracts. How is the threshold applied?",
 o:["Per contract, so none require VE","To the project defined in the environmental document, so VE is required","Only to the first contract","Only if all three let in the same year"], a:1,
 e:"23 CFR 627.3 defines the project by its environmental or preliminary design limits, which can span multiple contracts."}
],
quiz:[
{s:"Terminology", q:"What does Caltrans call the value engineering process?",
 o:["Value Management","Value Analysis","Cost Reduction Review","Constructability Review"], a:1,
 e:"Caltrans uses the term Value Analysis (VA). The process meets the federal value engineering requirement."},
{s:"Purpose", q:"Which outcome is named in 23 U.S.C. 106(e) as a purpose of the VE analysis?",
 o:["Reducing consultant fees","Reducing the time to complete the project","Eliminating environmental review","Increasing contingency"], a:1,
 e:"The statute names needed functions at lowest life-cycle cost, improved value and quality, and reduced time to complete the project."},
{s:"Document hierarchy", q:"Which document sets the federal VE requirement in law?",
 o:["PDPM Chapter 19","23 U.S.C. 106(e)","The Highway Design Manual","CA MUTCD"], a:1,
 e:"The statute is 23 U.S.C. 106(e). 23 CFR 627 is the regulation; PDPM Chapter 19 is Caltrans procedure."},
{s:"Bridge project", q:"An NHS bridge replacement using Federal-aid funds is estimated at $43M total project cost. What applies?",
 o:["Not required; bridges are excluded","Required; it exceeds the $40M bridge threshold","Required only above $50M","Required only if steel"], a:1,
 e:"The NHS bridge threshold is $40M total project cost."},
{s:"Delivery method", q:"A $140M NHS interchange will be delivered by progressive design-build. What is the federal VE requirement?",
 o:["Required before Phase 2 pricing","Not required under the design-build exclusion; VE is still allowed and encouraged","Required at 95% design","Required only for the bridge elements"], a:1,
 e:"23 U.S.C. 106(e)(5) excludes design-build delivery. Progressive design-build is a design-build method; confirm specific structures with the FHWA Division."},
{s:"Delivery method", q:"A $75M NHS project will be delivered by CM/GC. Is the federal requirement in play?",
 o:["No, CM/GC is treated as design-build","Yes, only design-build is excluded","No, CM/GC projects are always below threshold","Only if the contractor requests it"], a:1,
 e:"The statute excludes design-build only. CM/GC and design-bid-build projects meeting the thresholds are covered."},
{s:"History", q:"What did MAP-21 change about bridges off the NHS?",
 o:["Lowered their threshold to $20M","Removed the federal VE requirement for them","Required two VE studies","Made them subject to design-build rules"], a:1,
 e:"MAP-21 limited the requirement to the NHS and raised thresholds to $50M and $40M."},
{s:"Legislation watch", q:"Under the House BUILD America 250 Act as reported by committee, what happens to the NHS project VE threshold?",
 o:["It drops to $25M","It rises from $50M to $100M","It is repealed","It is indexed to $75M"], a:1,
 e:"Section 1201 would raise it to $100M. As of late 2026 the bill had passed committee but not the House floor."},
{s:"Timing", q:"By when must the federally required VE analysis be conducted?",
 o:["Before final design is complete","Before construction contract award","Before the environmental document is circulated","Within one year of letting"], a:0,
 e:"23 U.S.C. 106(e)(4) and 23 CFR 627.5(a): before completion of final design. Earlier studies have more room to change the project."},
{s:"Caltrans policy", q:"A local agency is delivering a qualifying NHS project on the State Highway System with its own consultants. Does Caltrans VA policy apply?",
 o:["No, only Caltrans-delivered projects","Yes, DD-92-R1 applies regardless of who does the work","Only if Caltrans staff design it","Only if the agency volunteers"], a:1,
 e:"DD-92-R1 applies the requirement to qualifying projects whether Caltrans, local agencies or consultants are doing the work."}
]},

/* ============================== INTERMEDIATE ============================== */
i:{ title:"Running a Caltrans VA Study",
lessons:[
{t:"Who does what", ref:"PDPM Ch. 19, Article 6 · Fig. 19-2",
h:`<p>PDPM Chapter 19 assigns workshop responsibilities (Figure 19-2). The core roles:</p>
<ul><li><b>District Value Analysis Coordinator (DVAC)</b>: schedules studies, confirms requirements, tracks implementation.</li>
<li><b>VA Team Leader</b>: facilitates the Job Plan; often a CVS-certified consultant.</li>
<li><b>Project Manager</b>: owns the project decisions and the implementation response.</li>
<li><b>Project development team</b>: presents the baseline and answers questions.</li>
<li><b>VA team</b>: independent, multidisciplinary members not involved in the design.</li></ul>`,
k:"The team is independent of the design. The PM, not the team, decides what is implemented."},
{t:"Pre-study: setting up the workshop", ref:"PDPM Ch. 19, Article 7 · Fig. 19-3",
h:`<p>Most of a study's quality is set before the workshop starts. Pre-study work includes:</p>
<ul><li>confirming scope, objectives and constraints with the PM</li>
<li>selecting disciplines to match the cost drivers (structures, geotech, traffic, environmental, construction)</li>
<li>assembling the data package: plans, estimate, environmental document, traffic data, geotechnical reports</li>
<li>building the cost model and drafting performance criteria</li></ul>`,
k:"Team disciplines should follow where the money is in the estimate."},
{t:"Performance criteria", ref:"PDPM Ch. 19 · Figs. 19-6, 19-7",
h:`<p>Caltrans VA measures alternatives against <b>performance criteria</b>, not only cost. PDPM Chapter 19 includes a performance criteria matrix (Figure 19-6) and a performance rating matrix (Figure 19-7).</p>
<p>The criteria are set for each study with the project team. Typical ones on highway projects include mainline operations, local operations, maintainability, construction impacts and environmental impacts. Criteria are weighted against each other, often through paired comparison, then the baseline and each alternative are rated.</p>`,
k:"Criteria and weights are agreed before ideas are judged, so the scoring is not tuned to a favorite idea."},
{t:"Function analysis on a highway project", ref:"PDPM Ch. 19 · SAVE VM Standard",
h:`<p>Function analysis turns the baseline into verb–noun functions such as <i>convey traffic</i>, <i>separate grades</i>, <i>retain earth</i>, <i>drain runoff</i>.</p>
<p>Allocating the estimate to those functions shows where cost sits relative to importance. On highway projects, functions such as <i>retain earth</i>, <i>maintain traffic</i> (staging) and <i>relocate utilities</i> often carry more cost than their importance suggests.</p>`,
k:"The cost-to-function view points the creative phase at specific targets."},
{t:"Creative and evaluation", ref:"PDPM Ch. 19, Article 7",
h:`<p>The creative phase generates ideas against the target functions with judgment deferred. Evaluation then screens them against the performance criteria and project constraints.</p>
<p>Ideas that survive are assigned to team members for development. Ideas set aside are recorded with a reason, which keeps the study traceable when someone asks later why an option was not developed.</p>`,
k:"Record why ideas were dropped. The record is part of the study."},
{t:"Developing a VA alternative", ref:"PDPM Ch. 19 · Caltrans VA Team Leader Guide",
h:`<p>A developed alternative documents baseline versus proposed design, sketches, initial cost comparison, life-cycle cost, performance ratings against each criterion, and risks or open issues.</p>
<p><b>Life-cycle cost analysis is expected in each VA study</b> under PDPM Chapter 19. A Caltrans and FHWA program review found reports that did not address it and recommended stronger emphasis.</p>`,
k:"Initial cost alone is incomplete. Each developed alternative needs a life-cycle view."},
{t:"VA sets", ref:"PDPM Ch. 19 · Fig. 19-5",
h:`<p>Individual alternatives often interact. A <b>VA set</b> combines compatible alternatives into one package (Figure 19-5 shows an example) so management sees the combined effect.</p>
<ul><li>Mutually exclusive alternatives cannot be in the same set.</li>
<li>Savings from overlapping alternatives cannot simply be added; the set is costed as a whole.</li></ul>`,
k:"Sets prevent double counting and show decision-makers coherent packages."},
{t:"Value as performance over cost", ref:"PDPM Ch. 19 · Fig. 19-7",
h:`<p>With performance rated and cost estimated, each alternative and set can be compared to the baseline on both axes.</p>
<div class="formula">Value index ∝ Performance rating ÷ Cost</div>
<p>This shows four cases: better and cheaper, better and more expensive, worse and cheaper, worse and more expensive. Only the last is plainly unattractive; the middle two are decisions for management.</p>`,
k:"A higher-cost alternative can still increase value if performance rises more than cost."},
{t:"Report and implementation", ref:"23 U.S.C. 106(e)(4)(iii) · PDPM Ch. 19",
h:`<p>Federal law requires that the analysis and the recommendations developed and implemented are documented in a <b>final VE report</b>.</p>
<p>After the presentation, the PM and project team respond to each alternative: accepted, accepted with modification, or rejected with a reason. Accepted alternatives are carried into the design.</p>`,
k:"The study is not closed at presentation. It closes when each alternative has a documented disposition."},
{t:"Program reporting", ref:"23 CFR 627 · DD-92-R1",
h:`<p>State agencies report VE program results to FHWA, and Caltrans Headquarters reports an annual assessment of its VA program. Reports track studies performed, recommendations, approved recommendations and their value.</p>
<p>That reporting is why disposition records matter: an approved recommendation that is never written down does not appear in the program's results.</p>`,
k:"Disposition records feed the annual report to FHWA."}
],
mid:[
{s:"Roles", q:"Who decides which VA alternatives are implemented?",
 o:["The VA team leader","The project manager and project team","FHWA","The lowest bidder"], a:1,
 e:"The team recommends. The PM and project team respond with dispositions."},
{s:"Pre-study", q:"How should VA team disciplines be selected?",
 o:["Same team every time","To match the project's main cost drivers and issues","Only from the design team","Only from headquarters"], a:1,
 e:"Matching disciplines to cost drivers puts expertise where the largest opportunities are."},
{s:"Performance criteria", q:"When should performance criteria and their weights be agreed?",
 o:["After alternatives are developed","Before ideas are evaluated, with the project team","During the presentation","After implementation"], a:1,
 e:"Setting criteria early keeps the evaluation from being shaped around a preferred idea."}
],
quiz:[
{s:"Roles", q:"Which role tracks VA requirements and implementation at the district level?",
 o:["Resident engineer","District Value Analysis Coordinator (DVAC)","Traffic manager","Right of way agent"], a:1,
 e:"The DVAC coordinates the district VA program."},
{s:"Team makeup", q:"Why is the VA team independent of the design team?",
 o:["To avoid paying designers","To bring perspectives not shaped by the current design's assumptions","Federal law forbids designers from attending","To shorten the study"], a:1,
 e:"Independence lets the team question assumptions. The design team still presents and answers questions."},
{s:"Criteria", q:"Which is a typical performance criterion on a Caltrans highway VA study?",
 o:["Consultant overhead rate","Construction impacts","Bid opening date","Number of plan sheets"], a:1,
 e:"Criteria such as mainline operations, local operations, maintainability, construction impacts and environmental impacts are common."},
{s:"Function analysis", q:"On a widening project with long retaining walls, which function would cost-to-function allocation most likely flag?",
 o:["Inform motorists","Retain earth","Separate pedestrians","Store water"], a:1,
 e:"Walls carry large costs; the function retain earth becomes a creative target."},
{s:"Evaluation", q:"What should happen to ideas that are not carried into development?",
 o:["Delete them from the record","Record them with the reason they were set aside","Develop them anyway","Send them to the contractor"], a:1,
 e:"A recorded reason keeps the study traceable."},
{s:"Development", q:"Which element is expected in each Caltrans VA study under PDPM Chapter 19?",
 o:["Contractor bid tabs","Life-cycle cost analysis","A public hearing","Final plans"], a:1,
 e:"PDPM Chapter 19 expects LCC; a program review recommended stronger emphasis after finding reports without it."},
{s:"VA sets", q:"Alternative 3 saves $4M by shortening a wall. Alternative 5 saves $6M by eliminating the same wall. How should a set treat them?",
 o:["Add them for $10M","They are mutually exclusive; only one can be in a given set","Average them","Report both separately as $10M"], a:1,
 e:"Overlapping or exclusive alternatives cannot be summed. Each set is costed as a whole."},
{s:"Value", q:"Alternative 7 raises cost 3% and raises the performance rating 15%. How does it compare on value?",
 o:["Lower value because cost rose","Higher value index; a management decision on funding","No change","Not allowed in VA"], a:1,
 e:"Value compares performance to cost. Performance rose more than cost."},
{s:"Documentation", q:"What does 23 U.S.C. 106(e) require to be documented?",
 o:["Only accepted alternatives","The analysis and the recommendations developed and implemented, in a final VE report","Only the cost estimate","Team members' hours"], a:1,
 e:"The statute requires a final VE report documenting the analysis and recommendations."},
{s:"Reporting", q:"Why do dispositions matter beyond the project?",
 o:["They set the contractor's bid","They feed the agency's annual VE program reporting to FHWA","They replace the environmental document","They are optional"], a:1,
 e:"Program results counted in annual reporting come from documented dispositions."}
]},

/* ============================== ADVANCED ============================== */
a:{ title:"Edge Cases and Program Strategy",
lessons:[
{t:"Scope growth across the threshold", ref:"FHWA Order 1311.1B · 23 CFR 627.5(b)",
h:`<p>A project can start below the threshold and cross it as the estimate grows. FHWA policy, referencing 23 CFR 627.5(b), covers projects whose total cost rises above the threshold because of a change in scope or design before construction letting.</p>
<p>Programs that only screen at programming miss these. A useful practice is to re-check the threshold at each estimate update.</p>`,
k:"Re-test the threshold whenever the estimate changes, not only at programming."},
{t:"Multi-contract corridors", ref:"23 CFR 627.3 · 23 CFR 627.5(a)",
h:`<p>When one environmental document covers several contracts, the VE analysis must still precede final design. The constraint is the earliest contract: if contract 1 finishes design before the study, its decisions are locked.</p>
<p>Options include a corridor-level study before the first contract reaches final design, or a corridor study followed by focused studies per contract.</p>`,
k:"Schedule the study to the first contract's design milestone, not the corridor's average."},
{t:"Funding mix", ref:"23 U.S.C. 106(e)(2) · DD-92-R1",
h:`<p>The federal trigger requires Federal-aid funding. A project funded only with state or local money is outside the federal rule, but Caltrans policy can still call for VA.</p>
<p>Funding plans change. A project that adds Federal-aid funds late, after final design, can create a compliance problem. Confirm the funding plan early and keep the DVAC informed of changes.</p>`,
k:"A late switch to Federal-aid funds can bring the requirement in after the window has closed."},
{t:"VE on design-build projects", ref:"23 CFR 627.5(e) · FHWA VE FAQ",
h:`<p>When an agency chooses to run VE on a design-build project, FHWA describes it as similar to an early (around 30% design) study on a design-bid-build project. The usual window is before the RFP.</p>
<ul><li>Accepted alternatives can be written into RFP requirements.</li>
<li>Alternatives that depend on means and methods can be left open for proposers, who may offer them as Alternative Technical Concepts.</li></ul>`,
k:"Decide for each alternative: require it in the RFP, or leave room for proposers."},
{t:"Progressive design-build", ref:"23 U.S.C. 106(e)(5) · Agency practice",
h:`<p>In progressive design-build the design-builder joins during preconstruction and design develops with them before a price is set. The federal exclusion still applies, but an owner can hold a VE workshop in that early phase.</p>
<p>The design-builder brings cost and constructability input; the independent VE team brings function analysis and challenge. A workshop before the price is set can influence the target price itself.</p>`,
k:"In progressive design-build, the highest-leverage VE window is before the price is set."},
{t:"VA versus VECP", ref:"Caltrans Standard Specifications Section 4-1.07",
h:`<p>VA happens during project development. A <b>Value Engineering Change Proposal (VECP)</b> happens during construction: the contractor proposes a change to the contract, and if accepted, net savings are shared between Caltrans and the contractor under Standard Specifications Section 4-1.07.</p>
<p>VECPs cannot reach decisions already fixed by right of way, environmental commitments or permits. Those belong in VA.</p>`,
k:"VA shapes the project; VECP adjusts the contract. Scope-level ideas only fit VA."},
{t:"Life-cycle cost done properly", ref:"23 U.S.C. 106(f) · Caltrans LCCA Procedures Manual · RealCost 2.5CA",
h:`<p>23 U.S.C. 106(f) defines life-cycle cost to include initial, operating, maintenance, rehabilitation and replacement costs, plus salvage value as applicable.</p>
<p>For pavement alternatives, Caltrans requires its <b>LCCA Procedures Manual</b> and RealCost 2.5CA, the FHWA tool modified for California. Use the same analysis period and discount rate across alternatives, and include work-zone user costs where closures differ.</p>`,
k:"Different analysis periods or discount rates across alternatives make the comparison invalid."},
{t:"Valuing schedule", ref:"23 U.S.C. 106(e)(1)",
h:`<p>Reducing time to complete the project is a statutory purpose. Schedule savings have value through:</p>
<ul><li>escalation avoided on the remaining work</li>
<li>reduced road user delay costs during construction</li>
<li>lower support costs and earlier benefits to the public</li></ul>
<p>A schedule alternative with zero construction savings can still carry a quantifiable value case.</p>`,
k:"Put a number on schedule. Unquantified schedule benefits tend to be treated as zero."},
{t:"Implementation and accountability", ref:"PDPM Ch. 19 · 23 U.S.C. 106(e)(4)",
h:`<p>An accepted recommendation does not always reach the plans. Tracking from acceptance through PS&E shows whether the value was captured.</p>
<p>Rejected alternatives should carry specific reasons (cost, a commitment in the environmental document, a maintenance concern). Specific reasons let later studies avoid repeating the same ideas and point to policies worth revisiting.</p>`,
k:"Track accepted alternatives into PS&E, and record specific reasons for rejections."},
{t:"If the threshold doubles", ref:"H.R. 8870 Sec. 1201 · FHWA HIF-24-080",
h:`<p>If the NHS threshold moves to $100M, the federal requirement covers fewer projects. Agency policy then decides the program's size.</p>
<p>FHWA's 2024 case study describes agencies that study projects below the federal thresholds: FDOT selects projects above $25M, and VDOT above $15M in construction cost. Program results (savings and performance improvements per study dollar) are the basis for keeping lower thresholds.</p>`,
k:"A higher federal threshold shifts the case for VE from compliance to demonstrated return."}
],
mid:[
{s:"Estimate update", q:"A $46M NHS project's estimate rises to $53M after a scope change, before letting. What follows?",
 o:["Nothing; the threshold was tested at programming","The project now falls under the VE requirement","VE is required only after award","The scope change must be reversed"], a:1,
 e:"FHWA policy covers projects that rise above the threshold because of scope or design change before letting."},
{s:"Corridor", q:"In a three-contract corridor, which milestone sets the VE study deadline?",
 o:["The last contract's letting","Final design of the earliest contract","Environmental document approval","Construction completion"], a:1,
 e:"Once the first contract finishes final design, its decisions are fixed. The study must come first."},
{s:"Design-build", q:"When running optional VE on a design-build project, what are the two ways to carry an accepted alternative?",
 o:["Require it in the RFP, or leave room for proposers to offer it","Put it in the VECP, or ignore it","Send it to FHWA, or the DVAC","Add it to bid tabs, or change orders"], a:0,
 e:"Accepted alternatives can be written into RFP requirements or left open for Alternative Technical Concepts."}
],
quiz:[
{s:"Threshold", q:"Why re-check the VE threshold at each estimate update?",
 o:["FHWA requires monthly checks","Projects can cross the threshold through scope or design changes before letting","Estimates never change","To reduce the team size"], a:1,
 e:"Projects that grow above the threshold before letting fall under the requirement."},
{s:"Funding", q:"A state-funded project adds Federal-aid funds after final design. What is the risk?",
 o:["None","The federal VE requirement may apply after the window to perform it has passed","The project becomes design-build","The threshold drops to $25M"], a:1,
 e:"The analysis must precede final design. A late funding change can create a compliance problem."},
{s:"Design-build", q:"FHWA compares a design-build VE analysis to which kind of design-bid-build study?",
 o:["A 95% constructability review","An early study around 30% design","A post-construction review","A VECP"], a:1,
 e:"FHWA's FAQ describes it as similar to an early, roughly 30% design, study."},
{s:"Progressive design-build", q:"Where is VE leverage highest on a progressive design-build project?",
 o:["After the guaranteed price","During preconstruction, before the price is set","During punch list","After final acceptance"], a:1,
 e:"Before the price is set, VE can shape the scope and the target price."},
{s:"VECP", q:"Which idea fits VA but not a VECP?",
 o:["Substituting an approved precast element","Changing the alignment to avoid a right of way take","Resequencing paving operations","Changing a falsework method"], a:1,
 e:"Right of way and environmental commitments are fixed by construction. Scope-level changes belong in VA."},
{s:"VECP", q:"How are savings from an accepted VECP handled?",
 o:["All to the contractor","Shared between Caltrans and the contractor under Standard Specifications Section 4-1.07","All to FHWA","Returned to the VA team"], a:1,
 e:"The Standard Specifications set the sharing of net savings."},
{s:"LCCA", q:"Which tool does Caltrans use for pavement life-cycle cost analysis?",
 o:["HCS7","RealCost 2.5CA","Synchro","CalME only"], a:1,
 e:"The Caltrans LCCA Procedures Manual uses RealCost 2.5CA, FHWA's RealCost modified for California."},
{s:"LCCA", q:"Alternative A is analyzed over 20 years and Alternative B over 40 years. What is the problem?",
 o:["None","The comparison is not valid without a common analysis period","B always wins","A always wins"], a:1,
 e:"Alternatives must share the analysis period and discount rate."},
{s:"Schedule", q:"An alternative saves 5 months of closures but no construction cost. How can its value be expressed?",
 o:["It has no value","Road user delay savings, avoided escalation, and reduced support costs","Only as a qualitative note","By raising the contingency"], a:1,
 e:"Schedule is a statutory purpose and can be quantified."},
{s:"Program strategy", q:"If the federal NHS threshold rises to $100M, what decides whether a $60M Caltrans project gets VA?",
 o:["Nothing; VA ends below $100M","Caltrans policy and the program's demonstrated return","FHWA only","The contractor"], a:1,
 e:"Agency policy decides below the federal floor. FDOT and VDOT are examples of studying projects under the federal thresholds."}
]}
},
notes:[
{h:"Watch: BUILD America 250 Act", p:"H.R. 8870 Section 1201 would raise the NHS VE threshold to $100M. Committee-approved 62–2 on May 22, 2026; awaiting a House floor vote as of late 2026, with authorities extended through Dec 11, 2026.", src:"House T&I section-by-section; AASHTO analysis (June 2026)"},
{h:"FHWA encourages VE on design-build", p:"23 CFR 627.5(e) excludes design-build from the requirement and states that FHWA encourages a VE analysis on design-build projects meeting the thresholds.", src:"23 CFR 627.5(e); FHWA VE FAQ"},
{h:"Studying below the threshold", p:"FHWA's 2024 VE case study (HIF-24-080) profiles FDOT ($25M selection) and VDOT ($15M construction) programs that study projects below the federal thresholds.", src:"FHWA HIF-24-080"},
{h:"Caltrans VA policy documents", p:"DD-92-R1, PDPM Chapter 19, the VA FAQ and the SB1 VA study threshold memo (Feb 2019) are posted on the Caltrans Value Analysis page.", src:"dot.ca.gov/programs/design/value-analysis"}
]
};
