/* Contract Types — Progressive Design-Build. Tiers b, i, a. Multi-client. */
window.VE = window.VE || {};
VE.contracts = VE.contracts || {};
VE.contracts.pdb = {
id:"pdb", name:"Progressive Design-Build", glyph:"PDB",
blurb:"One contract, but the design-builder is selected early and the price is set later. VE moves inside Phase 1, before the price is agreed.",
tiers:{
/* ============================== BEGINNER ============================== */
b:{ title:"Selected early, priced later",
lessons:[
{t:"How progressive design-build works", ref:"DBIA Progressive Design-Build guidance · Public Contract Code 10215 et seq. · RCW 39.10.300",
h:`<p>Progressive design-build (PDB) is a two-phase form of design-build. The design-builder is selected mainly on qualifications or best value <b>before a construction price exists</b>.</p>
<ol><li><b>Phase 1, preconstruction</b>: the design-builder advances the design with the owner, estimates open-book and works through risks.</li>
<li><b>Price agreement</b>: at an agreed design milestone the parties negotiate a guaranteed maximum price (GMP) or lump sum.</li>
<li><b>Phase 2</b>: the design-builder completes the design and builds the project.</li></ol>`,
k:"Conventional design-build fixes the price at award. Progressive design-build fixes it after the parties have developed the design together."},
{t:"The off-ramp", ref:"Progressive design-build contract terms",
h:`<p>If the owner and design-builder cannot agree on a price at the end of Phase 1, the owner can take the <b>off-ramp</b>: end the relationship, keep the design work it has paid for, and deliver the project another way.</p>
<p>The off-ramp is the owner's protection against negotiating with a single party. An independent cost estimate (ICE) gives the owner a second number to test the price against.</p>`,
k:"No agreed price, no Phase 2. The off-ramp and the independent estimate keep the negotiation honest."},
{t:"Where it is authorized", ref:"SB 146 (Ch. 58, Stats. 2023) · RCW 39.10.300 · FHWA SEP-14",
h:`<p>Authority differs by client:</p>
<ul><li><b>Caltrans</b>: SB 146 (2023) allows progressive design-build on up to eight projects with an estimated price over $25 million. Early projects have used FHWA's Special Experimental Project No. 14.</li>
<li><b>Sound Transit</b>: Washington's design-build statute expressly includes progressive design-build, and Sound Transit lists it among its five delivery methods.</li>
<li><b>USACE and NAVFAC</b>: the FAR has no specific progressive design-build coverage. Federal owners more often get early builder input through ECI or CMc.</li></ul>`,
k:"State and transit clients have explicit authority. Federal military clients usually reach the same goal through ECI."},
{t:"Is a VE study required?", ref:"23 U.S.C. 106(e)(5) · 23 CFR 627.5(e) · FTA OP 30",
h:`<ul><li><b>Federal-aid highway</b>: progressive design-build is a design-build method, so the VE requirement does not apply and FHWA's encouragement does. Confirm a specific contract with the FHWA Division.</li>
<li><b>FTA transit</b>: VE guidance for major capital projects applies whatever the delivery method.</li></ul>
<p>The highway timing guidance (before the final RFP) was written for conventional design-build. In progressive design-build the RFP comes before any real design, so the useful window is in Phase 1.</p>`,
k:"Highway: excluded but encouraged. Transit: still expected. Either way the study belongs in Phase 1."},
{t:"Why VE has more room here", ref:"23 CFR 636.209 · Agency practice",
h:`<p>Three features of conventional design-build restrict VE. Progressive design-build removes each:</p>
<ul><li><b>The RFP freeze</b>: requirements are not locked at procurement; they develop in Phase 1.</li>
<li><b>ATC confidentiality</b>: there is no competition after selection, so ideas are discussed openly with the owner.</li>
<li><b>The fixed price</b>: the price is not set yet, so savings reduce the price the owner will agree to.</li></ul>`,
k:"Before the price is set, every accepted idea changes the number the owner signs."},
{t:"VE windows in Phase 1", ref:"Phase 1 scope of services · Agency practice",
h:`<p>Two workshop points are common:</p>
<ol><li><b>Early Phase 1 (validation)</b>: confirm the baseline, functions and requirements before design effort is spent. Scope-level alternatives fit here.</li>
<li><b>Before the price milestone</b> (often 30% to 60% design): test the developed design and the estimate while the price is still open.</li></ol>
<p>A workshop after the price is agreed works like post-award design-build: lower owner leverage, savings by the contract's sharing terms.</p>
<div class="formula">Leverage: early Phase 1 &gt; pre-price &gt; Phase 2</div>`,
k:"Schedule the main workshop before the price milestone, with time to redesign and re-estimate."},
{t:"Who is on the team", ref:"SAVE International VM Standard · Agency practice",
h:`<p>The builder and the designer are both under contract, so the workshop can include:</p>
<ul><li>the design-builder's designers, estimators and construction managers</li>
<li>owner staff: design oversight, construction, maintenance, operations</li>
<li>the independent cost estimator</li>
<li>independent subject-matter members and an independent facilitator</li></ul>
<p>Unlike CM/GC, the designer works for the builder. Nobody on the design side is independent of the price, so independence comes from the owner's side of the table.</p>`,
k:"Builder and designer share one commercial interest. The owner, the ICE and independent members supply the challenge."},
{t:"Open-book cost and function", ref:"Open-book contract provisions · SAVE International VM Standard",
h:`<p>Phase 1 estimates are <b>open-book</b>: the owner sees quantities, production rates, subcontractor quotes, contingency and markups.</p>
<ul><li>Cost-to-function allocation uses the builder's actual pricing in place of historical unit costs.</li>
<li>Alternatives can be priced during the workshop by the party that will build them.</li>
<li>Risk and contingency are visible, so alternatives that retire a risk show a measurable cost effect.</li></ul>`,
k:"Open-book pricing lets the team cost alternatives with the builder's own numbers and see contingency move."},
{t:"Function-preserving change versus scope cut", ref:"SAVE International VM Standard · OMB Circular A-131",
h:`<p>Phase 1 often runs against a budget. When the estimate exceeds it, pressure builds to remove scope and call it value engineering.</p>
<ul><li><b>VE alternative</b>: delivers the required functions at lower cost or higher performance.</li>
<li><b>Scope reduction</b>: removes or lowers a function to meet a number.</li></ul>
<p>Both may be legitimate owner decisions. Recording them separately shows decision-makers what functions they are giving up.</p>`,
k:"Label scope reductions as scope reductions. Rate every alternative on performance as well as cost."},
{t:"Heavy civil and other labels", ref:"RCW 39.10.908 · Sound Transit delivery guidance · 23 CFR 635.502",
h:`<p>Terms get mixed across clients. Three clarifications:</p>
<ul><li><b>Heavy civil</b> is a statutory subtype of <b>GC/CM</b> in Washington, not of progressive design-build. It is covered in the CM/GC district.</li>
<li>A progressive design-build contract can be for heavy civil work, and the design-builder will usually self-perform much of it. That affects pricing, not the method's name.</li>
<li><b>CM/GC versus PDB</b>: if the designer works for the owner it is CM/GC; if the designer works for the builder it is progressive design-build.</li></ul>`,
k:"Heavy civil belongs to GC/CM. To tell CM/GC from progressive design-build, ask who holds the designer's contract."}
],
mid:[
{s:"Sequence", q:"When is the construction price set in progressive design-build?",
 o:["At selection of the design-builder","After Phase 1 design development, by negotiation","After construction","By low bid at 100% design"], a:1,
 e:"The design-builder is selected first. The GMP or lump sum is negotiated at a Phase 1 milestone."},
{s:"Off-ramp", q:"The parties cannot agree on a price at the end of Phase 1. What can the owner do?",
 o:["It must accept the design-builder's price","Take the off-ramp, keep the design work, and deliver the project another way","Cancel the environmental document","Require an ATC"], a:1,
 e:"The off-ramp lets the owner end the relationship before Phase 2 and use the design it paid for."},
{s:"Authority", q:"Which client's statute expressly lists progressive design-build as part of its design-build procedure?",
 o:["Washington (RCW 39.10.300), used by Sound Transit","The FAR","23 CFR 627","OMB Circular A-131"], a:0,
 e:"RCW 39.10.300 refers to the design-build procedure, including progressive design-build."}
],
quiz:[
{s:"Definition", q:"What distinguishes progressive design-build from conventional design-build?",
 o:["Two separate contracts for design and construction","The design-builder is selected before a construction price is set","There is no design phase","The owner completes 100% design"], a:1,
 e:"Selection comes first; the price follows collaborative design development."},
{s:"Owner protection", q:"What gives the owner a check on the Phase 1 price?",
 o:["The low bid","An independent cost estimate and the off-ramp","The ATC process","The stipend"], a:1,
 e:"With a single negotiating partner, the ICE and the option to exit are the safeguards."},
{s:"Caltrans", q:"What does SB 146 (2023) authorize for Caltrans?",
 o:["Unlimited progressive design-build","Up to eight projects with an estimated price over $25 million","CM/GC on bridges only","Design-build-operate"], a:1,
 e:"Public Contract Code Article 6.7 limits each department to eight projects above $25 million."},
{s:"Federal", q:"How do USACE and NAVFAC more commonly obtain early builder input?",
 o:["Through progressive design-build under the FAR","Through ECI or similar CM-at-risk forms","Through ATCs","They do not"], a:1,
 e:"The FAR has no specific progressive design-build coverage. ECI is the established federal route."},
{s:"Highway rule", q:"How does the federal highway VE requirement treat progressive design-build?",
 o:["Required before Phase 2","Not required under the design-build exclusion; encouraged","Required at twice the threshold","Required for bridges only"], a:1,
 e:"It is a design-build method under 23 U.S.C. 106(e)(5). Confirm specifics with the FHWA Division."},
{s:"Comparison", q:"Why are ATCs not a feature of Phase 1?",
 o:["They are prohibited","There is no competition after selection, so ideas are discussed openly","The design is already final","Each needs federal approval"], a:1,
 e:"ATC confidentiality protects competing proposers. After selection there is one design-builder."},
{s:"Timing", q:"Where is the owner's VE leverage highest?",
 o:["After final acceptance","In Phase 1, before the price is agreed","During Phase 2 construction","At punch list"], a:1,
 e:"Before the price is set, accepted alternatives lower the number the owner signs."},
{s:"Team", q:"In a progressive design-build workshop, who supplies independent challenge?",
 o:["The design-builder's designer","The owner's staff, the ICE and independent members","The design-builder's estimator","Nobody is needed"], a:1,
 e:"Designer and builder share one contract and one commercial interest."},
{s:"Scope", q:"The Phase 1 estimate is over budget and the team proposes deleting a planned station entrance. How should it be recorded?",
 o:["As a VE alternative with no performance change","As a scope reduction, with its performance effect rated","As an ATC","It should not be recorded"], a:1,
 e:"Removing a function is a scope reduction. Recording it that way shows what is given up."},
{s:"Labels", q:"A colleague refers to a Sound Transit contract as heavy civil. Which delivery method is that most likely?",
 o:["Progressive design-build","GC/CM (the CM/GC family)","Design-bid-build","Design-build-operate"], a:1,
 e:"Heavy civil is a statutory GC/CM subtype under RCW 39.10.908."}
]},

/* ============================== INTERMEDIATE ============================== */
i:{ title:"Phase 1 mechanics",
lessons:[
{t:"Selecting the design-builder", ref:"Public Contract Code 10215.2 · RCW 39.10.330 · FHWA SEP-14 workplans",
h:`<p>With no design to price, selection rests on other factors:</p>
<ul><li>team qualifications and key personnel</li>
<li>approach to Phase 1: collaboration, estimating, risk management</li>
<li>commercial terms that can be compared now: Phase 1 fee, overhead and profit percentages for Phase 2</li></ul>
<p>Caltrans workplans describe both best-value and qualifications-based selections. The owner is choosing a working partner and a pricing basis, not a design.</p>`,
k:"Selection fixes the people and the markup structure. The cost of the work is still open."},
{t:"The Phase 1 scope of services", ref:"Progressive design-build contract (Phase 1 services)",
h:`<p>Phase 1 is a professional services agreement with defined deliverables:</p>
<ul><li>design development to an agreed level</li>
<li>cost estimates at milestones</li>
<li>schedule and construction phasing plan</li>
<li>risk register</li>
<li>subcontracting and self-performance plan</li>
<li>permit and third-party support</li>
<li>the Phase 2 price proposal</li></ul>
<p>If the owner wants a formal VE workshop, it should be written into this scope with dates, participants and who facilitates.</p>`,
k:"A VE workshop that is not in the Phase 1 scope tends to be replaced by informal cost meetings."},
{t:"Validation", ref:"Phase 1 scope of services · DBIA guidance",
h:`<p>Many contracts open Phase 1 with a short <b>validation period</b>. The design-builder checks the owner's program, budget, site information and schedule and reports whether the project can be delivered as described.</p>
<p>This is the natural point for an early value study:</p>
<ul><li>functions and requirements are stated before design begins</li>
<li>the budget is tested against scope while both can still move</li>
<li>disagreements about the baseline surface early</li></ul>`,
k:"Validation asks whether scope and budget match. A function-based workshop answers that with evidence."},
{t:"Estimate milestones and reconciliation", ref:"Open-book provisions · ICE scope of work",
h:`<p>The design-builder produces estimates at set design levels, commonly 30%, 60% and the pricing milestone. At each one:</p>
<ol><li>The design-builder and the ICE estimate independently from the same documents.</li>
<li>The two are reconciled line by line: quantities, production rates, quotes, risk.</li>
<li>Differences are resolved or carried forward as open items.</li></ol>
<p>Caltrans workplans describe the design-builder, the ICE and Caltrans working together to develop the price.</p>`,
k:"Each reconciliation is a cost model update. Schedule VE just after one, when the numbers are freshest."},
{t:"How the price takes shape", ref:"Progressive design-build contract terms",
h:`<p>Two price forms are common:</p>
<ul><li><b>GMP</b>: cost of the work plus fee, capped. Often paired with shared savings and continued open-book accounting.</li>
<li><b>Lump sum</b>: a fixed price. The owner stops seeing costs after agreement.</li></ul>
<p>Price can be set at 60% to 90% design. Earlier pricing carries more contingency. Some projects set several prices in sequence, starting with early work packages.</p>`,
k:"The later the price is set, the less contingency it carries and the less time remains for VE to affect it."},
{t:"Target value design", ref:"Lean Construction Institute target value delivery · Agency practice",
h:`<p>Phase 1 teams often design <b>to</b> a budget instead of estimating a finished design:</p>
<ul><li>the budget is divided into targets by system or discipline</li>
<li>designers and estimators work together, with cost updated continuously</li>
<li>a system over target must find savings or trade with another system</li></ul>
<p>This is continuous cost management. It keeps the design near budget; it does not by itself question whether each function is needed.</p>`,
k:"Target value design controls cost against a budget. Function analysis tests whether the budget is buying the right things."},
{t:"Running the workshop inside Phase 1", ref:"SAVE International VM Standard",
h:`<p>The Job Plan applies with adjustments:</p>
<ul><li><b>Information</b>: the design-builder presents the design and the open-book estimate; the owner presents requirements.</li>
<li><b>Function analysis</b>: covers the owner's requirements as well as the design.</li>
<li><b>Creative</b>: design-builder and owner staff generate ideas together.</li>
<li><b>Evaluation</b>: owner-led, against performance criteria agreed in advance.</li>
<li><b>Development</b>: the design-builder prices alternatives; the ICE checks them.</li>
<li><b>Presentation</b>: decisions are recorded for the price basis.</li></ul>`,
k:"The design-builder helps create and price alternatives. The owner leads the evaluation."},
{t:"Risk register and contingency", ref:"Risk allocation matrix · Contract contingency provisions",
h:`<p>Phase 1 builds a shared risk register. Each risk gets an owner, a probability, and cost and time values. The price then includes contingency for the risks the design-builder carries.</p>
<ul><li>Alternatives can be developed specifically to retire or reduce a risk.</li>
<li>The value of such an alternative is its direct cost change plus the contingency released.</li>
<li>Risks moved to the owner leave the price but not the project.</li></ul>`,
k:"Moving a risk to the owner lowers the price without lowering project cost. Retiring a risk lowers both."},
{t:"Self-performance and subcontracting", ref:"Open-book provisions · RCW 39.10.330 · Public Contract Code 10215 et seq.",
h:`<p>The Phase 2 price is built from two sources:</p>
<ul><li><b>Subcontracted work</b>, usually procured competitively with the owner able to see bids.</li>
<li><b>Self-performed work</b>, priced by the design-builder from its own crews and equipment.</li></ul>
<p>On heavy civil projects the self-performed share is large, so there is little market price to compare against. The ICE's production-based estimate is the main check, and the VE cost model relies on it.</p>`,
k:"Where the builder self-performs most of the work, the independent estimate does the job that bids do elsewhere."},
{t:"Keeping the record", ref:"Phase 1 deliverables · State reporting requirements",
h:`<p>By the price milestone the owner should hold:</p>
<ul><li>a decision log of alternatives accepted, rejected and deferred, with reasons</li>
<li>a list of scope reductions, separate from VE alternatives</li>
<li>the basis of price: documents, assumptions, exclusions, allowances</li>
<li>the reconciled estimate and risk register</li></ul>
<p>This record explains what the price includes. It also supports the reporting that statutes such as SB 146 require on pilot projects.</p>`,
k:"The VE and decision record is part of the basis of price. Keep it with the contract file."}
],
mid:[
{s:"Selection", q:"What does the owner fix when it selects a progressive design-builder?",
 o:["The total construction cost","The team and commercial terms such as fee and markup percentages","The final design","Nothing"], a:1,
 e:"Qualifications and comparable commercial terms are set. The cost of the work is developed in Phase 1."},
{s:"Scope", q:"How does an owner make sure a formal VE workshop happens in Phase 1?",
 o:["Assume the design-builder will offer one","Write it into the Phase 1 scope of services","Wait for Phase 2","Ask the ICE to run it alone"], a:1,
 e:"Deliverables in the scope get done. Unscoped workshops become informal cost meetings."},
{s:"Estimates", q:"What is the purpose of reconciling the design-builder's estimate with the ICE?",
 o:["To average them","To find and resolve differences in quantities, rates and assumptions","To choose the lower one","To set the stipend"], a:1,
 e:"Line-by-line reconciliation shows where assumptions differ."}
],
quiz:[
{s:"Selection", q:"Why can a progressive design-builder not be selected on total price?",
 o:["Price is confidential","There is no design to price at selection","Law forbids price","Proposers refuse"], a:1,
 e:"Selection happens before design, so qualifications and commercial terms carry the evaluation."},
{s:"Validation", q:"What does the validation period test?",
 o:["Final shop drawings","Whether the owner's scope, budget and schedule can be delivered as described","The punch list","The warranty"], a:1,
 e:"The design-builder checks the baseline before design effort is spent."},
{s:"Timing", q:"When is a good moment to hold a Phase 1 VE workshop relative to estimates?",
 o:["Just after an estimate reconciliation","Before any estimate exists","After the price is signed","During closeout"], a:0,
 e:"A reconciled estimate gives the team a current, agreed cost model."},
{s:"Price form", q:"Under which price form does the owner usually keep seeing actual costs during construction?",
 o:["Lump sum","GMP with open-book accounting","Unit price","None"], a:1,
 e:"A GMP typically continues open-book accounting and often shares savings."},
{s:"Price timing", q:"What is the tradeoff in setting the price at 60% instead of 90% design?",
 o:["No tradeoff","More contingency in the price, but more time for the price to shape remaining design","Less contingency","The off-ramp disappears"], a:1,
 e:"Earlier prices carry more uncertainty."},
{s:"Target value design", q:"What does target value design not do by itself?",
 o:["Track cost against budget","Question whether each function is needed","Involve estimators","Use targets"], a:1,
 e:"It keeps the design near budget. Function analysis tests whether the budget buys the right things."},
{s:"Workshop", q:"Who should lead evaluation of alternatives in a Phase 1 workshop?",
 o:["The design-builder alone","The owner, against criteria agreed in advance","The subcontractors","The surety"], a:1,
 e:"The design-builder has a commercial interest. Owner-led evaluation against preset criteria protects the result."},
{s:"Risk", q:"An alternative moves utility conflict risk from the design-builder to the owner. What happens?",
 o:["Project cost falls","The price falls but the risk and its expected cost remain with the owner","Nothing changes","The risk disappears"], a:1,
 e:"Transferring a risk changes who holds it. Retiring it changes the project cost."},
{s:"Self-performance", q:"On a heavy civil project where the design-builder self-performs most work, what is the main price check?",
 o:["Public bid results","The independent cost estimate","The designer's opinion","The stipend"], a:1,
 e:"Self-performed work has no competitive bids to compare, so the ICE is the check."},
{s:"Record", q:"Why keep scope reductions on a separate list from VE alternatives?",
 o:["It is required by the FAR","So decision-makers can see which functions were given up to reach the price","To hide them","No reason"], a:1,
 e:"The two are different decisions and the record should show both."}
]},

/* ============================== ADVANCED ============================== */
a:{ title:"Negotiation, independence and edge cases",
lessons:[
{t:"Independence when designer and builder are one team", ref:"SAVE International VM Standard · 23 CFR 627.9",
h:`<p>In DBB and CM/GC the designer answers to the owner. In progressive design-build the designer is a member of the design-builder's team and shares its commercial position.</p>
<ul><li>The owner's technical staff or owner's representative become the independent design voice.</li>
<li>An independent facilitator keeps the process from turning into a pricing session.</li>
<li>Outside subject-matter experts are worth adding for the main cost drivers.</li></ul>
<p>The report should state who participated and in what role, since readers will ask how independent the study was.</p>`,
k:"State the team's makeup and roles in the report. Independence on these projects has to be demonstrated."},
{t:"When the price does not close", ref:"Progressive design-build contract (off-ramp provisions)",
h:`<p>Using the off-ramp has real cost:</p>
<ul><li>months of schedule to reprocure</li>
<li>a new builder inherits a design shaped by another firm's methods</li>
<li>design ownership and licensing terms decide how much of the work is reusable</li>
<li>the designer of record may be tied to the departing design-builder</li></ul>
<p>Owners that plan for the off-ramp from the start (license terms, design documentation standards, a fallback delivery method) negotiate from a stronger position.</p>`,
k:"The off-ramp protects the owner only if the design can be used without the firm that produced it."},
{t:"NEPA and the timing of selection", ref:"23 CFR 636.109 · FHWA SEP-14 workplans",
h:`<p>Environmental review limits what Phase 1 can do on federally funded work. Final design and construction cannot proceed before NEPA is complete.</p>
<p>A Caltrans workplan describes procuring the design-builder after completion of the NEPA process. Selecting earlier is possible in some frameworks, but the design-builder's work is then limited to preliminary design and it cannot commit the agency to an alternative.</p>
<p>An early VE workshop held before the environmental decision must treat alternatives as inputs to that process.</p>`,
k:"Before the environmental decision, Phase 1 ideas are inputs to it. After the decision, they must fit inside it."},
{t:"Why highway projects use SEP-14", ref:"23 CFR 636 · FHWA Special Experimental Project No. 14",
h:`<p>FHWA's design-build rule was written around competitive price proposals. Selecting a design-builder without a construction price departs from it, so states have used <b>SEP-14</b>, which lets FHWA evaluate non-traditional contracting techniques under a project workplan.</p>
<p>A workplan describes the procurement, the price development and how results will be evaluated. That evaluation needs data on cost and time outcomes, which the VE and decision record helps provide.</p>`,
k:"On Federal-aid progressive design-build, expect a SEP-14 workplan and an evaluation report that draws on Phase 1 records."},
{t:"Scope growth in Phase 1", ref:"Phase 1 change provisions · Agency practice",
h:`<p>Collaboration makes it easy to add. Stakeholders see the design develop and ask for more, and the design-builder has little reason to refuse priced scope.</p>
<ul><li>Each addition should be tested as a function: needed, or wanted?</li>
<li>Additions and their cost belong in the decision log beside the savings.</li></ul>
<p>Without that, a Phase 1 can record large VE savings and still end over budget.</p>`,
k:"Track additions with the same discipline as savings. Net movement against the baseline is the number that matters."},
{t:"Designing the shared savings", ref:"GMP contract terms",
h:`<p>Under a GMP the contract states how savings below the cap are split. The split changes behavior:</p>
<ul><li>A share for the design-builder encourages savings in Phase 2.</li>
<li>It also rewards a high GMP, since savings are measured from the cap.</li></ul>
<p>The counterweight is a well-reconciled price. VE completed before the GMP removes savings the owner would otherwise pay a share on later.</p>`,
k:"Savings found before the GMP belong entirely to the owner. Savings found after it are shared."},
{t:"Carrying performance criteria through", ref:"SAVE International VM Standard",
h:`<p>Phase 1 can include more than one workshop. Using the same performance criteria and weights each time gives continuity:</p>
<ul><li>the baseline rating from the first workshop becomes the reference</li>
<li>later alternatives, and scope reductions, are rated against it</li>
<li>at the price milestone the owner can see performance and cost movement together</li></ul>
<p>Changing criteria between workshops makes the results impossible to compare.</p>`,
k:"Set the performance criteria once, early, and reuse them through the price milestone."},
{t:"How much formal VE is enough", ref:"FTA OP 30 · Agency practice",
h:`<p>Phase 1 already contains continuous cost work. Formal workshops should be sized to what they add:</p>
<ul><li>one early function and requirements workshop on most projects</li>
<li>a second before pricing on large or complex ones (FTA notes projects above about $500M may need two studies)</li>
<li>short focused sessions on single high-cost functions in between</li></ul>
<p>More workshops than that tend to repeat the cost meetings.</p>`,
k:"Two formal workshops, early and pre-price, cover most large projects."},
{t:"Progressive design-build or CM/GC for the same project", ref:"Sound Transit delivery guidance · Agency selection procedures",
h:`<p>When both are available, the comparison comes down to a few differences:</p>
<ul><li><b>Design control</b>: the owner directs the designer in CM/GC; it reviews the design-builder's design in PDB.</li>
<li><b>Responsibility</b>: split between designer and builder in CM/GC; single-point in PDB.</li>
<li><b>Fallback</b>: bid the owner's design in CM/GC; reprocure with a transferred design in PDB.</li>
<li><b>Highway VE rule</b>: required in CM/GC; excluded in PDB.</li></ul>`,
k:"CM/GC keeps the owner in the design seat. Progressive design-build gives one party the whole responsibility."},
{t:"Reporting on a pilot authority", ref:"SB 146 (Ch. 58, Stats. 2023) · FHWA SEP-14 · RCW 39.10 Project Review Committee",
h:`<p>Much progressive design-build authority is recent and limited, and comes with reporting duties:</p>
<ul><li>SB 146 requires reports to the California Legislature on project metrics and whether the method saves time and cost.</li>
<li>SEP-14 workplans commit the agency to evaluation reports.</li>
<li>Washington public bodies report to the Project Review Committee.</li></ul>
<p>A clear VE record, with baseline, alternatives, decisions and net results, is direct evidence for those reports.</p>`,
k:"On pilot programs the VE record is evidence about the delivery method itself."}
],
mid:[
{s:"Independence", q:"In progressive design-build, who serves as the independent design voice in a VE workshop?",
 o:["The designer of record","The owner's technical staff or representative and outside experts","The design-builder's estimator","The subcontractors"], a:1,
 e:"The designer is part of the design-builder's team and shares its commercial position."},
{s:"Off-ramp", q:"What most affects whether a design can be reused after an off-ramp?",
 o:["The stipend","Design ownership and licensing terms set in the contract","The ICE's fee","The number of workshops"], a:1,
 e:"Reuse depends on the owner's rights to the design and how it is documented."},
{s:"SEP-14", q:"Why have Federal-aid progressive design-build projects used SEP-14?",
 o:["To avoid NEPA","Because selecting without a construction price departs from the design-build rule","To skip the ICE","To avoid reporting"], a:1,
 e:"23 CFR 636 assumes price competition. SEP-14 allows evaluation of non-traditional techniques under a workplan."}
],
quiz:[
{s:"Independence", q:"Why should a Phase 1 VE report list participants and their roles?",
 o:["For attendance pay","Readers will ask how independent the study was","It is required by SEP-14","No reason"], a:1,
 e:"Designer and builder share one interest, so independence has to be shown."},
{s:"Off-ramp", q:"Which preparation strengthens the owner's position if the price does not close?",
 o:["Agreeing to any price","License terms, documentation standards and a fallback delivery method set at the start","Removing the ICE","Shortening Phase 1"], a:1,
 e:"A usable design and a ready alternative make the off-ramp credible."},
{s:"NEPA", q:"A Phase 1 workshop is held before the environmental decision. How should alternatives be treated?",
 o:["As final commitments","As inputs to the environmental process","As VECPs","As ATCs"], a:1,
 e:"The agency cannot commit to an alternative before the decision."},
{s:"SEP-14", q:"What does a SEP-14 workplan commit the agency to?",
 o:["A lower threshold","Evaluating and reporting on the technique","A fixed savings share","Waiving the ICE"], a:1,
 e:"SEP-14 is an experimental program. Workplans include how results will be evaluated."},
{s:"Scope growth", q:"Phase 1 records $18M in VE savings and $22M in added scope. What is the net movement?",
 o:["$18M saved","$4M over baseline","$40M saved","No change"], a:1,
 e:"$22M added less $18M saved leaves the project $4M above the baseline."},
{s:"Shared savings", q:"Why is it in the owner's interest to complete VE before the GMP is set?",
 o:["It is not","Savings found before the GMP reduce the price in full; later savings are shared","The design-builder prefers it","It shortens Phase 2"], a:1,
 e:"After the GMP, savings are measured from the cap and split under the contract."},
{s:"Criteria", q:"What is the effect of changing performance criteria between Phase 1 workshops?",
 o:["Better results","Results cannot be compared with the earlier baseline","Lower cost","None"], a:1,
 e:"Consistent criteria let the owner track performance and cost movement together."},
{s:"Sizing", q:"How many formal VE workshops suit most large progressive design-build projects?",
 o:["None","Two: early and before pricing","One per month","One per subcontract"], a:1,
 e:"An early function and requirements workshop and a pre-price workshop cover the main decision points."},
{s:"Comparison", q:"Which fallback applies if price negotiations fail under CM/GC but not under progressive design-build?",
 o:["Bid the owner's own design competitively","Convert to a VECP","Keep negotiating","Cancel NEPA"], a:0,
 e:"In CM/GC the owner holds the designer and the design. In PDB the design must be transferred."},
{s:"Reporting", q:"What does SB 146 require of Caltrans and DWR on progressive design-build projects?",
 o:["Nothing","Reports to the Legislature on metrics and whether the method saves time and cost","Monthly bid openings","A federal waiver"], a:1,
 e:"The statute includes a reporting requirement on the pilot's results."}
]}
},
notes:[
{h:"SB 146 progressive design-build authority", p:"Article 6.7 (Public Contract Code 10215 et seq.) covers Caltrans and DWR: eight projects each, estimated price over $25 million, with reporting to the Legislature. Check the article's current repeal date before citing how long the authority lasts; the 2023 committee analysis gives December 31, 2033.", src:"SB 146, Chapter 58, Statutes of 2023; Assembly Transportation Committee analysis (June 29, 2023)"},
{h:"Washington includes PDB in its design-build statute", p:"RCW 39.10.300 authorizes the design-build procedure, including progressive design-build, for projects over $2 million that meet the statutory criteria. A state study lists Sound Transit among public owners using design-build, progressive design-build and GC/CM.", src:"RCW 39.10.300; CPARB summary of SHB 1295 (2019); WSDOT alternative delivery study"},
{h:"SEP-14 workplans", p:"FHWA posts Caltrans SEP-14 workplans for progressive design-build, including the San Diego–Coronado Bay Bridge suicide deterrent project, describing a preconstruction services contract in which the design-builder, the ICE and Caltrans develop the price.", src:"FHWA SEP-14 California workplans (Nov. 2023)"},
{h:"Verify: practice-based content", p:"Phase 1 workshop timing, validation periods, price forms and shared-savings arrangements in these briefings reflect general industry practice. Replace with the client's contract terms and procedures where they exist.", src:"Author note"}
]
};
