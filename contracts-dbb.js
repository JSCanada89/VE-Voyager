/* Contract Types — Design-Bid-Build. Tiers b, i, a. Multi-client: Caltrans/FHWA, Sound Transit/FTA, USACE, NAVFAC. */
window.VE = window.VE || {};
VE.contracts = VE.contracts || {};
VE.contracts.dbb = {
id:"dbb", name:"Design-Bid-Build", glyph:"DBB",
blurb:"The baseline method. Design finishes, then contractors bid. VE is an owner study during design, then VECPs after award.",
tiers:{
/* ============================== BEGINNER ============================== */
b:{ title:"The baseline method and where VE fits",
lessons:[
{t:"How design-bid-build works", ref:"23 U.S.C. 112(b)(1) · FAR Part 36 · State public works bidding law",
h:`<p>Design-bid-build (DBB) is the traditional delivery method and the reference point for every other method in this world. The owner holds two separate contracts, one after the other:</p>
<ol><li><b>Design</b>: owner staff or a consultant (the A-E) takes plans and specifications to 100%.</li>
<li><b>Bid</b>: the finished package is advertised and contractors submit prices.</li>
<li><b>Build</b>: the contract goes to the lowest responsive, responsible bidder.</li></ol>`,
k:"Three steps in sequence: complete design, competitive bid, construction. The designer and the builder never share a contract."},
{t:"Who carries which risk", ref:"United States v. Spearin, 248 U.S. 132 (1918)",
h:`<p>The owner supplies the design, so the owner carries the risk that the design is adequate. Under the <i>Spearin</i> doctrine, a contractor who builds to the owner's plans and specifications is not responsible for defects in them.</p>
<ul><li><b>Owner</b>: design adequacy, quantities, differing site conditions, right of way, permits.</li>
<li><b>Contractor</b>: price, means and methods, schedule within the contract terms.</li></ul>
<p>Every design decision is the owner's, so every design decision is open to the owner's VE study.</p>`,
k:"In DBB the owner owns the design and its risk, and can change any of it before bid."},
{t:"One method, several rulebooks", ref:"23 CFR 635 Subpart A · FAR Parts 14, 15 and 36 · FTA Circular 4220.1 · State bidding statutes",
h:`<p>The method is the same for every client. The rules that govern it differ:</p>
<ul><li><b>Caltrans and other state DOTs</b>: Federal-aid highway rules (23 CFR 635) plus state contract law.</li>
<li><b>Sound Transit and other transit agencies</b>: state public works law plus FTA third-party contracting requirements when federal transit funds are used.</li>
<li><b>USACE and NAVFAC</b>: the Federal Acquisition Regulation (FAR). The design firm is an A-E selected on qualifications; construction is awarded by sealed bid or negotiated procurement.</li></ul>`,
k:"Before a study starts, identify which rulebook the client works under. It decides the VE requirement and the VECP terms."},
{t:"Is a VE study required?", ref:"23 U.S.C. 106(e) · FTA OP 30 · OMB Circular A-131 · USACE ER 11-1-321",
h:`<p>DBB has no delivery-method exemption anywhere. Whether a study is required depends on the client's rule:</p>
<ul><li><b>Federal-aid highway</b>: required on NHS projects with Federal-aid funds at $50M total project cost ($40M for bridges).</li>
<li><b>FTA transit</b>: FTA guidance calls for VE on major capital projects and encourages it on others.</li>
<li><b>Federal agencies</b>: OMB Circular A-131 sets $5M, or a lower threshold chosen by the agency.</li>
<li><b>USACE</b>: ER 11-1-321 as amended sets a $2M threshold for construction projects.</li></ul>`,
k:"Four clients, four triggers. The federal highway thresholds are the highest; the federal agency thresholds are far lower."},
{t:"The VE window", ref:"23 CFR 627.9 · FTA OP 30 · USACE ER 11-1-321",
h:`<p>Every rule places the study during design. The practical window is narrower than the legal one.</p>
<ul><li><b>Concept (10% to 15%)</b>: scope, siting and layout can still change. Little detail to cost.</li>
<li><b>About 30% to 35%</b>: enough detail to estimate and compare; redesign cost is moderate. The most common study point.</li>
<li><b>60% and later</b>: mostly refinements. Redesign cost and schedule risk reduce acceptance.</li></ul>
<p>The hard stop in DBB is the bid package. After advertisement, changes become addenda or change orders.</p>`,
k:"Hold the study early enough that accepted alternatives do not force major redesign."},
{t:"No contractor in the room", ref:"SAVE International VM Standard · Agency VE procedures",
h:`<p>In DBB the contractor is unknown until bids open. During design, nobody at the table will build the project.</p>
<p>The VE study is one of the few points where construction knowledge enters a DBB design. Team selection covers the gap:</p>
<ul><li>include a construction or constructability specialist</li>
<li>test staging, access, work windows and site logistics, not only the permanent design</li>
<li>check the estimate's unit prices against recent bid results</li></ul>`,
k:"In DBB the VE team supplies the builder's perspective that the contract structure leaves out."},
{t:"Getting alternatives into the plans", ref:"23 U.S.C. 106(e)(4) · Agency VE procedures",
h:`<p>Implementation is direct. The owner controls the design, so an accepted alternative is handed to the designer and drawn into the plans and specifications.</p>
<p>What limits acceptance is usually cost and time, not authority:</p>
<ul><li>redesign fee and schedule</li>
<li>environmental re-evaluation if the footprint or impacts change</li>
<li>right of way or user commitments already made</li></ul>
<p>Each alternative gets a documented disposition: accepted, accepted with modification, or rejected with a reason.</p>`,
k:"The owner can implement anything it accepts. Redesign cost is the real constraint."},
{t:"After award: the VECP", ref:"FAR 52.248-3 · State standard specifications (for example Caltrans Section 4-1.07)",
h:`<p>After award, VE continues through a different mechanism. A <b>Value Engineering Change Proposal (VECP)</b> is a contractor-initiated proposal to change the contract in a way that lowers cost without impairing essential functions.</p>
<ul><li>The contractor develops and submits it.</li>
<li>The owner may accept or reject it.</li>
<li>If accepted, net savings are shared under the contract's VE clause.</li></ul>
<p>Federal construction contracts use FAR clause 52.248-3. State agencies use a clause in their standard specifications.</p>`,
k:"The study during design belongs to the owner. The VECP during construction belongs to the contractor, with shared savings."},
{t:"What a VECP cannot reach", ref:"Contract documents · Environmental commitments",
h:`<p>By construction most large decisions are locked: right of way is acquired, environmental commitments and permits are fixed, long-lead materials may be ordered.</p>
<p>VECPs therefore tend to cover materials, details, staging and construction methods. Scope, siting, alignment and structure type belong in the design-phase study. A scope idea first raised as a VECP usually arrives too late to be accepted.</p>`,
k:"VECPs adjust the contract. Scope and footprint ideas only fit the design-phase study."},
{t:"When owners choose DBB, and what it means for VE", ref:"Sound Transit Project Delivery and Contracting Methods (Oct. 2022) · Agency practice",
h:`<p>Owners keep DBB for projects where they want control. Sound Transit's delivery guidance lists DBB for cases where commitments control the design, where the owner can best manage the risk, and where the agency wants entry opportunities for new contractors.</p>
<ul><li><b>For VE</b>: the most authority over the design, and a firm baseline for cost and function analysis.</li>
<li><b>The limit</b>: builder input arrives only through bids and VECPs, and the linear sequence leaves less room for schedule alternatives.</li></ul>`,
k:"DBB gives VE the most authority over design and the least early access to the builder."}
],
mid:[
{s:"Sequence", q:"In design-bid-build, when does the contractor join the project?",
 o:["During preliminary design","After the design is complete and bids are opened","At the environmental document","When the VE study begins"], a:1,
 e:"The design is completed first, then advertised. The contractor is selected by bid."},
{s:"Rulebooks", q:"Which regulation governs a NAVFAC or USACE design-bid-build construction contract?",
 o:["23 CFR 635","The Federal Acquisition Regulation","RCW 39.10","FTA Circular 4220.1"], a:1,
 e:"Federal agencies contract under the FAR. 23 CFR 635 covers Federal-aid highway contracts let by states."},
{s:"Requirement", q:"Which client rule sets the lowest dollar trigger for a VE study?",
 o:["Federal-aid highway ($50M)","OMB Circular A-131 ($5M)","USACE ER 11-1-321 as amended ($2M)","NHS bridge ($40M)"], a:2,
 e:"USACE applies a $2M construction threshold, below the $5M in OMB Circular A-131 and far below the highway thresholds."}
],
quiz:[
{s:"Contract structure", q:"How many separate contracts does the owner hold for design and construction under DBB?",
 o:["One combined contract","Two: one for design, one for construction","Three, including operations","None; the contractor hires the designer"], a:1,
 e:"The owner contracts separately with the designer and then with the contractor."},
{s:"Risk", q:"Under the Spearin doctrine, who bears the risk that owner-furnished plans are defective?",
 o:["The contractor","The owner","The surety","The VE team"], a:1,
 e:"The owner impliedly warrants that the plans and specifications it furnishes are adequate."},
{s:"Transit", q:"Sound Transit is delivering a federally funded major capital project by DBB. What does FTA guidance say about VE?",
 o:["VE is not used on transit projects","VE is to be used on major capital projects","VE applies only above $500M","VE is the contractor's responsibility"], a:1,
 e:"FTA Oversight Procedure 30 states VE must be used on major capital projects and is encouraged on other construction projects."},
{s:"Federal agencies", q:"What threshold does OMB Circular A-131 (2013) set for applying VE to new federal projects?",
 o:["$1 million","$5 million, or lower if the agency chooses","$50 million","No threshold"], a:1,
 e:"The 2013 revision raised the threshold from $1M to $5M and lets agencies set lower ones."},
{s:"Timing", q:"A VE study is held at 90% design on a DBB project. What is the most likely outcome?",
 o:["Scope changes are readily accepted","Mostly refinements; larger ideas are rejected for redesign cost and schedule","The study is prohibited","The contractor implements all ideas"], a:1,
 e:"Late studies face high redesign cost and schedule risk, which narrows what the project team accepts."},
{s:"Team makeup", q:"Why does a DBB VE team need construction expertise?",
 o:["Contractors are required to attend","No builder is under contract during design, so the team supplies that perspective","It lowers the study fee","The designer cannot attend"], a:1,
 e:"The contractor is unknown until bid. The VE team is one of the few sources of constructability input during DBB design."},
{s:"Implementation", q:"An alternative is accepted on a DBB project. How is it implemented?",
 o:["The contractor prices it as an ATC","The designer incorporates it into the plans and specifications","It is added to an RFP","It waits for a VECP"], a:1,
 e:"The owner controls the design in DBB, so accepted alternatives go straight into the bid documents."},
{s:"VECP", q:"Who initiates a Value Engineering Change Proposal?",
 o:["The VE team leader","The contractor, after award","The funding agency","The designer of record"], a:1,
 e:"A VECP is the contractor's proposal to change the awarded contract."},
{s:"Fit", q:"Which idea is best raised in the design-phase study and not as a VECP?",
 o:["Substituting an equivalent pipe material","Relocating the facility on the site to shorten utilities","Changing a formwork method","Resequencing a paving operation"], a:1,
 e:"Siting and footprint are fixed by construction. Those changes belong in the design phase."},
{s:"Method comparison", q:"Which statement describes DBB from a VE standpoint?",
 o:["Most authority over the design, least early access to the builder","Least authority over the design, most builder input","No VE is permitted","VE happens only after award"], a:0,
 e:"The owner controls every design decision, but builder input arrives only through bids and VECPs."}
]},

/* ============================== INTERMEDIATE ============================== */
i:{ title:"Running VE on a DBB project, client by client",
lessons:[
{t:"Caltrans and Federal-aid highway", ref:"23 CFR 627 · Caltrans PDPM Chapter 19 · DD-92-R1",
h:`<p>On a Caltrans DBB project the study is a Value Analysis under PDPM Chapter 19, coordinated by the District Value Analysis Coordinator.</p>
<ul><li>Required at the federal thresholds; Caltrans policy can call for it below them.</li>
<li>Must be complete before final design is complete.</li>
<li>Alternatives are rated on performance criteria as well as cost, and each receives a disposition.</li></ul>
<p>The DOT Infrastructure world covers this process in detail.</p>`,
k:"For highway DBB the study is the standard state DOT process, and results are reported to FHWA each year."},
{t:"Sound Transit and FTA", ref:"FTA Oversight Procedure 30 (Oct. 2023) · FTA Project and Construction Management Guidelines",
h:`<p>FTA manages VE through its project oversight program. Oversight Procedure 30 covers VE and constructability reviews together.</p>
<ul><li>VE must be used on major capital projects; sponsors are encouraged to use it on other construction projects.</li>
<li>The sponsor documents the VE plan and timing in its Project Management Plan.</li>
<li>Large or complex projects, generally above $500M, may need two VE studies.</li>
<li>The sponsor submits a VE report, and FTA's oversight contractor reviews it.</li></ul>`,
k:"On FTA projects the VE plan lives in the Project Management Plan and the report goes to FTA."},
{t:"USACE", ref:"ER 11-1-321, Change 1 (2011) · USACE Chief Value Officer memorandum (2013) · OMB Circular A-131",
h:`<p>USACE implements OMB Circular A-131 through ER 11-1-321, Army Programs Value Engineering.</p>
<ul><li>Studies are required on projects at or above the threshold, set at $2M for construction since 2013.</li>
<li>USACE states that a project that has not complied cannot legally be awarded for construction.</li>
<li>Each district has a Value Engineering Officer who screens projects and documents the strategy in a Value Management Plan.</li>
<li>Facilitators need SAVE certification scaled to project size.</li></ul>`,
k:"At USACE, VE compliance is a gate before construction award, tracked by the district VE Officer."},
{t:"NAVFAC", ref:"NAVFAC A-E guides · UFC 1-300-09N · OMB Circular A-131",
h:`<p>NAVFAC applies function analysis at the front of design through <b>Functional Analysis Concept Development (FACD)</b>: concentrated on-site sessions with the user, the base, the A-E and NAVFAC staff that define functional requirements, verify scope and produce a concept design.</p>
<ul><li>FACD uses VE techniques at the concept stage (about 10% to 15%).</li>
<li>The agreed concept is often signed as a partnering agreement by the participants.</li>
<li>A separate VE study of the developed design may also be scoped, by the A-E or an independent team.</li></ul>`,
k:"At NAVFAC, function analysis often happens first, in the FACD, before a conventional VE study point."},
{t:"The designer's contract", ref:"FAR 48.101 · FAR 52.248-2",
h:`<p>In federal DBB the designer is an A-E under its own contract. FAR clause 52.248-2, Value Engineering-Architect-Engineer, is used when the Government wants the A-E to perform VE services as a paid task.</p>
<ul><li>The A-E is paid for the VE effort it is tasked with.</li>
<li>The A-E does not share in savings.</li>
<li>Redesign to implement accepted alternatives is a scope and fee question under the A-E contract.</li></ul>
<p>On any client's project, check who pays for redesign before the study, because it affects acceptance.</p>`,
k:"A-E firms are paid for VE effort and do not share savings. Redesign fee is a common hidden barrier to acceptance."},
{t:"Matching the study type to the milestone", ref:"USACE ER 415-1-11 · FTA OP 30 · Agency design milestones",
h:`<p>Different reviews fit different points in a DBB design:</p>
<ul><li><b>Concept</b>: charrette, FACD or value planning. Sets functions, scope and budget.</li>
<li><b>30% to 35%</b>: the main VE study, with a cost model and developed alternatives.</li>
<li><b>60% to 95%</b>: constructability and biddability reviews. USACE calls this the BCOES review.</li></ul>
<p>Transportation agencies usually speak in 30/60/90; military design in 15/35/65/95.</p>`,
k:"Concept studies shape scope, mid-design studies shape solutions, late reviews check that the package can be bid and built."},
{t:"VE, constructability review and cost reduction", ref:"FTA OP 30 · SAVE International VM Standard",
h:`<p>Three activities get confused on DBB projects:</p>
<ul><li><b>VE study</b>: function-based, follows the Job Plan, compares alternatives on performance and life-cycle cost.</li>
<li><b>Constructability review</b>: checks that the design can be bid and built safely as drawn. FTA pairs it with VE in one procedure and treats it as a separate product.</li>
<li><b>Cost reduction</b>: removes or downgrades items to meet a budget, with no function analysis.</li></ul>`,
k:"If no functions were analyzed, the exercise was a review or a cost cut, not a VE study."},
{t:"Cost models from bid history", ref:"Agency bid tabulations · Engineer's estimate procedures",
h:`<p>DBB produces public bid data on every project, which makes it the best-documented cost environment of the four methods.</p>
<ul><li>Unit-price bid history supports the cost model and checks the engineer's estimate.</li>
<li>The spread between bidders shows where the market sees risk.</li>
<li>Items that draw high bids across projects point to functions worth targeting.</li></ul>
<p>The limit: bid prices include each bidder's risk judgment and bid strategy, so a single low bid is weak evidence.</p>`,
k:"Use bid history across several projects. One bidder's unit price reflects strategy as much as cost."},
{t:"VECP mechanics", ref:"FAR 48.104-2 · FAR 52.248-3 · State standard specifications",
h:`<p>Federal construction VECP sharing is set by the FAR:</p>
<ul><li><b>Fixed-price contracts</b>: Government 45%, contractor 55% of net instant-contract savings.</li>
<li><b>Cost-reimbursement contracts</b>: Government 75%, contractor 25%.</li>
<li><b>Collateral savings</b> (operations, maintenance) are shared separately and capped.</li>
<li>The clause is not used in incentive-type construction contracts.</li></ul>
<p>State DOT clauses differ; many split net savings evenly. Read the governing specification.</p>`,
k:"Federal fixed-price construction: the contractor keeps 55%. State splits come from the standard specifications."},
{t:"Alternates as an implementation tool", ref:"FHWA alternate pavement type bidding policy (2012) · Agency bidding procedures",
h:`<p>When the team cannot tell which of two solutions the market will price lower, the owner can let bidders decide:</p>
<ul><li><b>Bid alternates</b>: additive or deductive items priced with the base bid.</li>
<li><b>Bid options</b>: priced scope the owner may award if funds allow.</li>
<li><b>Alternate design bidding</b>: equivalent designs bid against each other, such as alternate pavement types.</li></ul>
<p>A VE alternative that depends on market price is a candidate for an alternate.</p>`,
k:"If the market will decide which option is cheaper, bid both."}
],
mid:[
{s:"FTA", q:"Where does an FTA project sponsor document its VE plan and timing?",
 o:["In the bid tabulation","In the Project Management Plan","In the VECP clause","In the environmental document"], a:1,
 e:"FTA Oversight Procedure 30 expects the VE plan and timing in the PMP."},
{s:"USACE", q:"At USACE, what follows from not completing a required VE study?",
 o:["Nothing; it is advisory","The project cannot legally be awarded for construction","The A-E pays a penalty","The threshold doubles"], a:1,
 e:"USACE describes compliance with ER 11-1-321 as a condition of construction award."},
{s:"NAVFAC", q:"What is a NAVFAC FACD?",
 o:["A post-award contractor proposal","A concept-stage session that uses function analysis to set requirements and a concept design","A bid protest procedure","A final design checklist"], a:1,
 e:"Functional Analysis Concept Development applies VE techniques at the concept stage with the user and design team."}
],
quiz:[
{s:"FTA", q:"According to FTA Oversight Procedure 30, which projects may need two VE studies?",
 o:["All bus facilities","Large or complex projects, generally above $500M","Projects under $5M","Design-bid-build projects only"], a:1,
 e:"The procedure notes that large or complex projects, generally with costs above $500 million, may need two."},
{s:"USACE", q:"Which USACE document implements OMB Circular A-131?",
 o:["ER 11-1-321","PDPM Chapter 19","23 CFR 627","RCW 39.10"], a:0,
 e:"ER 11-1-321, Army Programs Value Engineering, with Change 1 issued in 2011."},
{s:"A-E contract", q:"Under FAR 52.248-2, how is an A-E compensated for VE?",
 o:["A 55% share of savings","Payment for the VE services it is tasked with; no savings share","A bonus set by the contractor","It is not compensated"], a:1,
 e:"The A-E clause pays for a specific VE effort and provides no sharing of savings."},
{s:"Milestones", q:"Which review fits best at 95% design?",
 o:["Value planning","Constructability and biddability review","Concept charrette","Function analysis of scope"], a:1,
 e:"Late design is suited to checking that the package can be bid and built. Scope-level work belongs earlier."},
{s:"Definitions", q:"A team deletes the canopy and downgrades finishes to meet budget without analyzing functions. What is this?",
 o:["A VE study","Cost reduction","A VECP","A constructability review"], a:1,
 e:"Without function analysis and a performance comparison it is cost reduction."},
{s:"Cost model", q:"What is the main caution when using a single low bidder's unit prices in a cost model?",
 o:["They are confidential","They reflect that bidder's strategy and risk judgment, not only cost","They exclude labor","They are always too high"], a:1,
 e:"Unit prices can be unbalanced or strategic. History across several projects is stronger evidence."},
{s:"VECP", q:"On a federal fixed-price construction contract, what share of net instant-contract VECP savings goes to the contractor?",
 o:["25%","45%","55%","100%"], a:2,
 e:"FAR 52.248-3 gives the Government 45% on fixed-price contracts, leaving 55% to the contractor."},
{s:"VECP", q:"In which federal construction contracts is the VECP clause not used?",
 o:["Fixed-price contracts","Incentive-type contracts","Contracts over $5M","Sealed-bid contracts"], a:1,
 e:"FAR 48.202 excludes incentive construction contracts, where the incentive structure already rewards savings."},
{s:"Alternates", q:"The team cannot predict whether steel or concrete girders will bid lower. What tool lets the market decide?",
 o:["A VECP","Alternate design bidding","A waiver","A Project Management Plan"], a:1,
 e:"Bidding equivalent alternates lets each contractor price the option it can build most efficiently."},
{s:"Redesign", q:"Why confirm who pays for redesign before a DBB study?",
 o:["It sets the VECP share","Unfunded redesign is a common reason accepted ideas are not implemented","It changes the federal threshold","It decides the low bidder"], a:1,
 e:"Redesign is a scope and fee matter under the designer's contract. If it is unfunded, acceptance drops."}
]},

/* ============================== ADVANCED ============================== */
a:{ title:"Edge cases and judgment calls",
lessons:[
{t:"When bids come in over budget", ref:"FAR Part 14 · State competitive bidding law",
h:`<p>After a bid bust, owners often ask for value engineering. What is available depends on the procurement rules:</p>
<ul><li>Under sealed bidding the owner generally cannot negotiate scope with the low bidder and award the changed contract.</li>
<li>The usual paths are to reject bids, revise the design and rebid, or award and pursue changes afterward.</li></ul>
<p>A function-based study before the rebid can find real alternatives. A list of deletions agreed with one bidder is a negotiation, and it carries protest risk.</p>`,
k:"After a bid bust, the VE study belongs before the rebid, not in a side negotiation with the low bidder."},
{t:"Triage for a late study", ref:"Agency VE procedures · 23 CFR 627.9",
h:`<p>When a study is held late, sorting alternatives by what they cost to implement keeps it useful:</p>
<ol><li><b>Implement now</b>: specification, material and detail changes with little redesign.</li>
<li><b>Implement by addendum or early change</b>: changes worth a short delay.</li>
<li><b>Carry forward</b>: ideas recorded for the next phase or similar projects.</li>
<li><b>Feed back to standards</b>: ideas blocked by a criterion that deserves review.</li></ol>`,
k:"A late study still produces value if its results are sorted by implementation cost and the rest is recorded for reuse."},
{t:"Design responsibility for a VECP", ref:"FAR 52.248-3 · Spearin doctrine · Contract documents",
h:`<p>A VECP replaces part of the owner's design with the contractor's proposal. That moves risk:</p>
<ul><li>The contractor usually carries responsibility for the design it proposed, including engineering sealed by its own engineer.</li>
<li>The owner's implied warranty covers the original design, not the substituted portion.</li>
<li>The contractor carries development cost if the proposal is rejected.</li></ul>
<p>Owner review time is a cost to the contractor, so slow reviews suppress proposals.</p>`,
k:"An accepted VECP shifts design risk for that element toward the contractor. Review speed determines how many are submitted."},
{t:"Acceptance is the owner's discretion", ref:"FAR 52.248-3(e)",
h:`<p>Under the federal clause, the contracting officer's decision to accept or reject a VECP is final and is not subject to the Disputes clause. The contractor may withdraw a VECP any time before acceptance.</p>
<p>The owner cannot use the idea for free. If an owner rejects a VECP and later adopts the same change, the contractor has grounds to seek its share. Keep a record of when ideas were received and from whom.</p>`,
k:"Rejection cannot be disputed under the FAR clause, but using a rejected idea later creates a claim."},
{t:"Many contracts, one project", ref:"23 CFR 627.3 · Sound Transit contract packaging practice · FTA OP 30",
h:`<p>Large DBB programs are split into contract packages. Sound Transit runs a contract packaging workshop that evaluates delivery methods against criteria for each package.</p>
<p>For VE, packaging creates two effects:</p>
<ul><li>Interfaces between packages become functions with their own cost and risk.</li>
<li>A study of one package can miss alternatives that move scope across packages.</li></ul>
<p>A program-level study before packaging is fixed can examine the packaging itself.</p>`,
k:"Study the program before the packages are locked. Interfaces between contracts are functions that can be analyzed."},
{t:"A construction manager who is not at risk", ref:"FAR Part 37 · Agency CM services contracts",
h:`<p>Some DBB owners hire a construction manager as an advisor (CM as agent). This firm reviews constructability and estimates but will not build the project and holds no construction price.</p>
<ul><li>It adds construction knowledge during design.</li>
<li>It has no commercial stake in the price, so its estimates are advice, not commitments.</li></ul>
<p>This is still DBB. The method becomes CM/GC only when the advising firm also agrees to build at a negotiated price.</p>`,
k:"An advisory CM improves a DBB study's construction input. It does not change the delivery method."},
{t:"Environmental commitments", ref:"NEPA · CEQA · 23 CFR 771.129",
h:`<p>By mid-design the environmental document has fixed a footprint, impacts and mitigation commitments. A VE alternative that changes them triggers re-evaluation, which can cost more time than the alternative saves.</p>
<ul><li>Ask for the list of commitments during pre-study.</li>
<li>Rate each alternative for environmental effect.</li>
<li>For alternatives that need re-evaluation, state the time and the decision-maker in the write-up.</li></ul>`,
k:"An alternative that reopens the environmental document needs that schedule cost shown beside its savings."},
{t:"Life-cycle cost under low-bid award", ref:"OMB Circular A-131 · 23 U.S.C. 106(f)",
h:`<p>DBB awards on first cost. A contractor has no reason to offer a higher-first-cost, lower-life-cycle-cost solution, and a VECP that raises operating cost is unlikely to be accepted.</p>
<p>Life-cycle decisions therefore have to be made by the owner during design and written into the specifications. OMB Circular A-131 and the federal highway statute both define VE in life-cycle terms, which makes the design-phase study the place where those choices get made.</p>`,
k:"In DBB, life-cycle value is decided in the design-phase study or not at all."},
{t:"Schedule alternatives inside DBB", ref:"FHWA contract administration guidance · 23 CFR 635.127",
h:`<p>DBB is linear, but contract provisions can buy time. On highway work these include:</p>
<ul><li><b>A+B bidding</b>: bidders price cost plus time.</li>
<li><b>Incentive and disincentive clauses</b> tied to milestones.</li>
<li><b>Lane rental</b>: the contractor pays for the time it occupies lanes.</li></ul>
<p>A VE team can propose these as alternatives when the function is to reduce user impact or meet a date. They change the contract, not the design.</p>`,
k:"Contract provisions are valid VE alternatives when time is the function being improved."},
{t:"Recommending a different delivery method", ref:"FTA Project Delivery Method Review procedure · Agency delivery selection guidance",
h:`<p>An early study sometimes shows that DBB is a poor fit. Signals include:</p>
<ul><li>cost drivers that depend on means and methods the designer cannot predict</li>
<li>complex phasing or work in an operating facility</li>
<li>a schedule that needs design and construction to overlap</li>
<li>risks a builder could price or retire better than the owner</li></ul>
<p>The team can record this as a finding. The owner's delivery-selection process makes the decision.</p>`,
k:"A VE team can flag that the delivery method itself is limiting value. The selection decision stays with the owner."}
],
mid:[
{s:"Bid bust", q:"Sealed bids exceed the budget by 20%. Which path avoids procurement risk?",
 o:["Negotiate deletions privately with the low bidder and award","Reject bids, study and revise the design, and rebid","Award to the second bidder at the first bidder's price","Ask the low bidder to submit a VECP before award"], a:1,
 e:"Sealed bidding does not allow negotiated scope changes with one bidder before award."},
{s:"VECP risk", q:"A contractor's accepted VECP substitutes its own retaining wall design. Who generally carries responsibility for that design?",
 o:["The original designer","The contractor that proposed it","The VE team","The funding agency"], a:1,
 e:"The owner's implied warranty covers the original design. The substituted element is the contractor's proposal."},
{s:"Disputes", q:"Under FAR 52.248-3, can a contractor dispute the rejection of a VECP?",
 o:["Yes, under the Disputes clause","No; the decision is final and not subject to the Disputes clause","Only above $5M","Only if the A-E agrees"], a:1,
 e:"The clause makes the contracting officer's accept or reject decision final."}
],
quiz:[
{s:"Bid bust", q:"What separates a post-bid VE study from a list of deletions?",
 o:["The study is cheaper","The study analyzes functions and compares alternatives on performance","The list takes longer","Nothing"], a:1,
 e:"Function analysis and performance comparison are what make it VE."},
{s:"Late study", q:"A good idea at 90% design is blocked by a design criterion. Where should it go?",
 o:["It is discarded","It is recorded and fed back to the standards owner","It is forced into the plans","It becomes an ATC"], a:1,
 e:"Feeding it back lets the criterion be reviewed for future projects."},
{s:"VECP", q:"Why do slow owner reviews reduce the number of VECPs?",
 o:["The share drops over time","Review time and uncertainty are costs to the contractor during construction","The FAR sets a quota","Designers object"], a:1,
 e:"A proposal that cannot be decided before the affected work starts has no value to the contractor."},
{s:"VECP", q:"An owner rejects a VECP, then issues a change order adopting the same idea. What is the exposure?",
 o:["None","The contractor may claim its share of the savings","The contract is void","The VE team is liable"], a:1,
 e:"The owner cannot take the benefit of the proposal without sharing."},
{s:"Packaging", q:"What does a program-level study add before contract packages are fixed?",
 o:["Nothing; packages are administrative","It can examine the packaging and the interfaces between contracts","It replaces the environmental document","It sets the VECP share"], a:1,
 e:"Interfaces carry cost and risk. They can only be changed before the packages are locked."},
{s:"CM as agent", q:"An owner hires a CM firm to advise during design. The firm will not build the project. What is the delivery method?",
 o:["CM/GC","Design-bid-build with an advisory CM","Design-build","Progressive design-build"], a:1,
 e:"Without a negotiated construction price with the advising firm, it remains DBB."},
{s:"Environmental", q:"An alternative saves $3M and needs an environmental re-evaluation estimated at eight months. How should it be presented?",
 o:["Savings only","Savings together with the re-evaluation time and who decides","It should be withheld","As a VECP"], a:1,
 e:"Decision-makers need the schedule cost beside the savings."},
{s:"Life cycle", q:"Why must life-cycle choices be made during design on a DBB project?",
 o:["Contractors are barred from discussing them","Low-bid award and VECP incentives reward first cost, not life-cycle cost","FHWA prohibits later changes","They are set by the surety"], a:1,
 e:"The contract structure gives the contractor no reason to offer higher first cost for lower life-cycle cost."},
{s:"Schedule", q:"Which tool has highway bidders compete on time as well as cost?",
 o:["A+B bidding","A VECP","A FACD","A stipend"], a:0,
 e:"A+B bidding adds a priced time component to the bid."},
{s:"Delivery fit", q:"An early study finds the main cost drivers depend on tunneling means and methods the designer cannot predict. What is an appropriate team output?",
 o:["Select a contractor","Record a finding that earlier builder involvement could add value","Change the delivery method","Ignore it"], a:1,
 e:"The team reports the finding. The owner's delivery-selection process decides."}
]}
},
notes:[
{h:"Federal construction VECP rates", p:"FAR 52.248-3: Government share of net instant-contract savings is 45% on fixed-price and 75% on cost-reimbursement construction contracts. The clause is omitted from incentive-type construction contracts.", src:"FAR 48.104-2, 48.202 and 52.248-3"},
{h:"FTA Oversight Procedure 30", p:"The October 2023 edition covers VE and constructability reviews, applies to all capital projects, requires VE on major capital projects and notes that projects generally above $500M may need two studies.", src:"FTA OP 30, Value Engineering and/or Constructability Review"},
{h:"USACE threshold history", p:"ER 11-1-321 originally required studies at $1M. A Chief Value Officer memorandum in February 2013 set $2M. OMB Circular A-131 was revised in December 2013 to $5M with agency discretion to go lower.", src:"USACE VE program FAQ; OMB Circular A-131 (2013)"},
{h:"Verify with the client", p:"NAVFAC's current dollar threshold and study procedure, the definition of an FTA major capital project in 49 CFR Part 633, and the VECP split in the governing state specification should each be confirmed for the specific project.", src:"Author note"}
]
};
