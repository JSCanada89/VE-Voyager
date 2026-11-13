/* Contract Types — Design-Build. Tiers b, i, a. Multi-client. */
window.VE = window.VE || {};
VE.contracts = VE.contracts || {};
VE.contracts.db = {
id:"db", name:"Design-Build", glyph:"DB",
blurb:"One contract for design and construction, priced at award. The owner's VE window is before the RFP; proposers innovate through ATCs.",
tiers:{
/* ============================== BEGINNER ============================== */
b:{ title:"One contract, priced at award",
lessons:[
{t:"How design-build works", ref:"23 U.S.C. 112(b)(3) · 23 CFR 636 · FAR Subpart 36.3 · RCW 39.10.300",
h:`<p>In design-build (DB) the owner awards <b>one contract</b> to a design-builder who completes the design and constructs the project.</p>
<ol><li>The owner develops requirements and a preliminary design, anywhere from about 10% to 30%.</li>
<li>The owner issues a Request for Qualifications, shortlists teams, then issues a <b>Request for Proposals (RFP)</b>.</li>
<li>Shortlisted teams submit technical and price proposals.</li>
<li>Award is by best value or low price, and the price is fixed at award.</li></ol>`,
k:"One contract, one responsible entity, and a price fixed while most of the design is still to be done."},
{t:"The risk shift", ref:"Design-build contract documents · Spearin doctrine",
h:`<p>The design-builder is responsible for the final design. Design errors that would be the owner's problem under DBB become the design-builder's.</p>
<p>The owner still carries risk for what it specifies:</p>
<ul><li><b>Performance requirements</b> (what the facility must do) leave the solution, and its risk, with the design-builder.</li>
<li><b>Prescriptive requirements</b> (exactly what to build) keep that portion of design risk with the owner and close off alternatives.</li></ul>`,
k:"Each prescriptive requirement in the RFP is a design decision the owner has kept, along with its risk."},
{t:"One method, several rulebooks", ref:"23 CFR 636 · Public Contract Code 6820 · RCW 39.10.300 to .330 · FAR 36.3 · 10 U.S.C. 3241",
h:`<p>Each client procures design-build under different authority:</p>
<ul><li><b>Federal-aid highway</b>: 23 CFR 636. Caltrans adds the Transportation Design-Build Program in the Public Contract Code.</li>
<li><b>Sound Transit</b>: Washington's alternative public works statute, with certification by the state Project Review Committee, plus FTA requirements.</li>
<li><b>USACE and NAVFAC</b>: two-phase design-build selection under FAR Subpart 36.3. NAVFAC delivers a large share of its construction this way.</li></ul>`,
k:"Design-build is available to every client in this world, each under its own statute and procurement rule."},
{t:"Is a VE study required? It depends on the client", ref:"23 U.S.C. 106(e)(5) · 23 CFR 627.5(e) · FTA OP 30 · USACE ER 11-1-321",
h:`<p>The well-known design-build exclusion is a <b>highway rule only</b>.</p>
<ul><li><b>Federal-aid highway</b>: not required since MAP-21 (2012). FHWA still encourages it.</li>
<li><b>FTA transit</b>: FTA's VE guidance for major capital projects is not limited by delivery method.</li>
<li><b>USACE</b>: the agency VE requirement applies to design-build; the study examines the RFP before it is advertised.</li>
<li><b>NAVFAC</b>: function analysis is commonly applied at concept, through the FACD, before the RFP is written.</li></ul>`,
k:"Do not carry the highway exclusion to transit or military work. Those clients still expect VE on design-build."},
{t:"The window: before the RFP", ref:"23 CFR 627.9(c) · FHWA VE FAQ · USACE ER 11-1-321",
h:`<p>Whichever rule applies, the timing is the same. The owner's study belongs <b>before release of the final RFP</b>.</p>
<p>FHWA describes it as similar to an early (about 30% design) study on a DBB project, with one difference: approved recommendations are written into the RFP instead of the plans.</p>
<div class="formula">DBB: accepted alternative → plans &nbsp;|&nbsp; DB: accepted alternative → RFP</div>
<p>After award, any change the owner wants is priced by a single party.</p>`,
k:"RFP release is the owner's last low-cost chance to change the project."},
{t:"What a pre-RFP study examines", ref:"23 CFR 627.9(c) · UFC 1-300-09N · Agency practice",
h:`<p>The subject is the procurement package as much as the preliminary design:</p>
<ul><li><b>Basic configuration</b>: siting, footprint, alignment, building layout.</li>
<li><b>Requirements</b>: which are performance-based and which prescriptive, and whether each prescriptive one is needed.</li>
<li><b>Risk allocation</b>: utilities, ground conditions, third-party approvals.</li>
<li><b>Fixed constraints</b>: environmental commitments, user requirements, design criteria.</li></ul>
<p>Function analysis applies to requirements: what function does each one serve, and what does it cost proposers to meet it?</p>`,
k:"On design-build, function-analyze the requirements. A requirement with no clear function is cost with no value."},
{t:"Alternative Technical Concepts", ref:"23 CFR 636.209(b)",
h:`<p>An <b>Alternative Technical Concept (ATC)</b> is a proposer's request, during procurement, to deviate from an RFP requirement. Under the highway rule an agency may allow ATCs if they:</p>
<ul><li>provide an <b>equal or better</b> solution, and</li>
<li>do not conflict with criteria agreed in the environmental decision-making process.</li></ul>
<p>ATCs are reviewed in confidence. An approved ATC can be used only by the proposer who submitted it, and its benefit reaches the owner through that proposer's price or technical score.</p>`,
k:"ATCs are competitive innovation: confidential, proposer-owned, and required to be equal or better."},
{t:"VE study versus ATC", ref:"23 CFR 627.9(c) · 23 CFR 636.209(b)",
h:`<p>The two work on the same project from different positions:</p>
<ul><li><b>VE study</b>: owner-side, independent team, function-based, before the RFP, results visible to all proposers.</li>
<li><b>ATC</b>: proposer-side, confidential, driven by competition, during procurement.</li></ul>
<p>For each accepted VE alternative the owner chooses a path: <b>require it</b> in the RFP, or <b>leave room</b> by loosening the requirement so proposers can offer it or something better.</p>`,
k:"Require what only the owner can decide. Leave room where proposers can compete on the solution."},
{t:"After award: who keeps the savings", ref:"Design-build contract VE clause · FAR 52.248-3 · Agency practice",
h:`<p>After award the design-builder owns the design and holds a fixed price. Two different things get called value engineering:</p>
<ul><li><b>Design optimization within the requirements</b>: the design-builder refines its own design. Savings stay with the design-builder, because the price already assumed efficient design.</li>
<li><b>A change to the owner's requirements</b>: this needs owner approval and is handled under the contract's VECP or change clause, with savings shared as the contract states.</li></ul>`,
k:"Inside the requirements, savings are the design-builder's. Changing a requirement brings the owner, and sharing, back in."},
{t:"Facilitating for a design-build owner", ref:"23 CFR 627.9(c) · Agency practice",
h:`<p>Points that differ from a DBB study:</p>
<ol><li>The deliverable feeds the RFP, so procurement and legal staff are stakeholders alongside designers.</li>
<li>Confidentiality matters: results can affect the competition if released unevenly.</li>
<li>Performance criteria from the study can become RFP evaluation criteria.</li>
<li>Members with design-build experience can forecast how proposers will read each requirement.</li>
<li>Record which alternatives were required, which were left open, and why.</li></ol>`,
k:"A design-build VE report is an input to a procurement. Its audience includes the people writing the RFP."}
],
mid:[
{s:"Highway rule", q:"A $180M NHS project with Federal-aid funds will be delivered design-build. What does federal highway law say about VE?",
 o:["Required before final design","Not required; FHWA encourages it","Prohibited","Required after award"], a:1,
 e:"23 U.S.C. 106(e)(5) removes the requirement for design-build. 23 CFR 627.5(e) encourages the analysis."},
{s:"Other clients", q:"A USACE barracks project will be delivered design-build. Does the highway exclusion remove the VE requirement?",
 o:["Yes, design-build is always excluded","No; the exclusion is a Federal-aid highway rule, and USACE's VE requirement applies to the RFP","Only above $50M","Only for bridges"], a:1,
 e:"23 U.S.C. 106(e) governs Federal-aid highways. USACE works under OMB Circular A-131 and ER 11-1-321."},
{s:"Timing", q:"When should an owner's VE study occur on a design-build project?",
 o:["After the design-builder reaches 90% design","Before release of the final RFP","During construction","After final acceptance"], a:1,
 e:"23 CFR 627.9(c) and agency practice place it before the final RFP."}
],
quiz:[
{s:"Contract structure", q:"How many contracts does the owner award for design and construction under design-build?",
 o:["One","Two","Three","One per discipline"], a:0,
 e:"A single design-builder is responsible for both final design and construction."},
{s:"Price", q:"When is the price set on a conventional design-build project?",
 o:["After 100% design","At award, based on the RFP and preliminary design","After construction","When the first VECP is approved"], a:1,
 e:"Proposers price the work from the RFP, with most design still to be done."},
{s:"Requirements", q:"The RFP dictates a specific wall type at one location. What is the effect?",
 o:["Design risk for that choice stays with the owner and alternatives are closed off","Risk transfers fully to the design-builder","The requirement is unenforceable","ATCs are prohibited project-wide"], a:0,
 e:"Prescriptive requirements keep the decision and its risk with the owner."},
{s:"Rulebooks", q:"Under which regulation do USACE and NAVFAC select design-builders?",
 o:["23 CFR 636","FAR Subpart 36.3, two-phase selection","RCW 39.10","PDPM Chapter 19"], a:1,
 e:"Federal agencies use the two-phase design-build procedures in FAR Subpart 36.3."},
{s:"Transit", q:"Sound Transit plans a design-build contract on an FTA major capital project. What applies to VE?",
 o:["Nothing; design-build is exempt","FTA's VE guidance for major capital projects still applies","Only VECPs are allowed","Only the highway rule"], a:1,
 e:"FTA Oversight Procedure 30 is not limited by delivery method."},
{s:"Implementation", q:"Where do approved recommendations go on a design-build project?",
 o:["Into the final plans","Into the RFP requirements","Into a VECP","Into the bid tabs"], a:1,
 e:"FHWA notes the major difference from DBB: recommendations are incorporated into the RFP."},
{s:"ATC", q:"Under 23 CFR 636.209(b), what standard must an ATC meet?",
 o:["Lowest cost only","Equal or better, without conflicting with environmental decision criteria","Approved by all proposers","Identical to the base design"], a:1,
 e:"ATCs must be equal or better and consistent with criteria from the environmental process."},
{s:"ATC", q:"Proposer A has an approved ATC. Who can use it?",
 o:["All shortlisted proposers","Proposer A only","The VE team","Nobody until after award"], a:1,
 e:"ATCs are confidential to the proposer that submitted them."},
{s:"Strategy", q:"The team finds a prescriptive drainage requirement adds cost and several solutions could meet the function. What is the usual recommendation?",
 o:["Keep it as written","Rewrite it as a performance requirement so proposers can compete","Delete drainage from the scope","Submit it as a VECP"], a:1,
 e:"Where several solutions work, leaving room lets competition find the best one."},
{s:"After award", q:"The design-builder finds a more efficient structural layout that meets every contract requirement. Who keeps the savings?",
 o:["The owner","The design-builder","The funding agency","Split evenly by law"], a:1,
 e:"Optimization within the requirements is part of what the fixed price covers."}
]},

/* ============================== INTERMEDIATE ============================== */
i:{ title:"Procurement mechanics and the RFP",
lessons:[
{t:"Two-phase selection", ref:"FAR 36.303 · 23 CFR 636.201 to .207 · RCW 39.10.330",
h:`<p>Most public design-build procurements run in two phases because proposals are costly to prepare and evaluate.</p>
<ol><li><b>Phase one</b>: qualifications, experience and technical approach, with no price. The owner shortlists.</li>
<li><b>Phase two</b>: shortlisted teams receive the RFP and submit technical and price proposals.</li></ol>
<p>The FAR normally caps the phase-two shortlist at five offerors. Highway and state rules also limit it, usually to three to five.</p>`,
k:"A short shortlist keeps proposal cost reasonable and makes ATC meetings manageable."},
{t:"Best value and what it rewards", ref:"FAR 15.101-1 · 23 CFR 636.301 to .305 · RCW 39.10.330",
h:`<p>Design-build awards are usually <b>best value</b>: a tradeoff between price and technical factors stated in the RFP.</p>
<ul><li>Technical factors can include design quality, schedule, management approach and life-cycle features.</li>
<li>What the RFP scores, proposers invest in. What it does not score, they minimize.</li></ul>
<p>The performance criteria developed in a VE study are a ready source for evaluation factors, because they already state what the owner values beyond cost.</p>`,
k:"Evaluation factors are the owner's value statement. VE performance criteria can be turned directly into them."},
{t:"Anatomy of an RFP", ref:"NAVFAC Design-Build Master (six-part RFP) · UFC 1-300-07A · Highway technical provisions",
h:`<p>RFP formats differ by client. NAVFAC uses six parts:</p>
<ol><li>Proposal forms and documents</li><li>General requirements</li><li>Project program</li>
<li>Performance technical specifications</li><li>Prescriptive specifications</li><li>Attachments</li></ol>
<p>Highway and transit RFPs have instructions to proposers, contract terms, technical provisions and reference information documents.</p>
<p>For a VE team the structure shows where to look: the program and performance sections hold functions; the prescriptive sections hold cost with fewer alternatives.</p>`,
k:"Read the prescriptive parts of an RFP first. They hold the decisions proposers cannot improve."},
{t:"How much design to give proposers", ref:"UFC 1-300-09N · 23 CFR 636.103 · Agency practice",
h:`<p>The level of owner design in the RFP sets how much room is left:</p>
<ul><li><b>Concept (10% to 15%)</b> with functional requirements: most room for proposer innovation, most variation among proposals.</li>
<li><b>About 30%</b> bridging documents: more owner control, comparable proposals, less room.</li></ul>
<p>NAVFAC guidance states a preference for stating functional requirements while fitting the process to the user's needs. Owner design beyond what the owner needs to control is cost spent twice.</p>`,
k:"Every additional sheet in the RFP removes a choice from proposers. Draw only what the owner must control."},
{t:"The NAVFAC path", ref:"UFC 1-300-09N · NAVFAC A-E guides",
h:`<p>On a NAVFAC design-build project, function analysis typically enters at the concept stage:</p>
<ul><li>A design charrette or <b>FACD</b> brings the user, base and NAVFAC staff together and applies VE techniques to set functional requirements and a concept.</li>
<li>The result feeds the project program and performance specifications in the RFP.</li></ul>
<p>The VE question for the facilitator is whether each user requirement recorded in the session is a function or a preferred solution.</p>`,
k:"A FACD writes the RFP's requirements. Separating functions from preferred solutions there has the largest effect."},
{t:"The USACE path", ref:"ER 11-1-321 · OMB Circular A-131 · UFC 1-300-07A",
h:`<p>USACE applies its VE requirement to design-build by studying the <b>RFP</b>. The study is completed before advertisement, and compliance is documented by the district VE Officer.</p>
<ul><li>The team reviews the statement of work, criteria and any concept design.</li>
<li>Typical findings: over-prescriptive criteria, scope beyond the authorized program, conflicting requirements, and risk the Government has kept without intending to.</li></ul>`,
k:"On a USACE design-build project the VE deliverable is a better RFP."},
{t:"The transit path", ref:"FTA OP 30 · RCW 39.10.300 · Sound Transit delivery guidance",
h:`<p>Sound Transit has delivered extensions such as Federal Way Link and Downtown Redmond Link by design-build. On FTA-funded projects the VE study is planned in the Project Management Plan and held during preliminary engineering, before the RFP.</p>
<p>Transit design-build carries heavy third-party content: cities, utilities, railroads and permitting agencies. Sound Transit notes the need for alignment with the permitting authority on the plan review process. Those interfaces are requirements the VE team can examine.</p>`,
k:"On transit design-build, third-party requirements are a large share of the RFP and belong in the function analysis."},
{t:"The ATC process step by step", ref:"23 CFR 636.209(b) · Agency ATC procedures",
h:`<ol><li>The RFP states which requirements are open to ATCs and which are not.</li>
<li>Proposers hold confidential one-on-one meetings with the owner.</li>
<li>Each ATC is submitted with a description, the deviation requested and a demonstration that it is equal or better.</li>
<li>The owner approves, approves with conditions, or rejects.</li>
<li>Approved ATCs are priced into that proposer's proposal.</li></ol>
<p>Since 2014 the highway rule no longer requires a separate base proposal alongside an ATC-based one.</p>`,
k:"The owner controls the ATC field through the RFP: what is open, what is fixed, and what equal or better means."},
{t:"Stipends", ref:"23 CFR 636.112 and 636.113 · RFP terms",
h:`<p>Agencies often pay a stipend to unsuccessful shortlisted proposers to offset proposal cost and keep competition.</p>
<p>RFPs commonly provide that accepting the stipend gives the owner the right to use ideas in that proposal. Concepts from losing proposals can then be negotiated into the awarded contract.</p>
<p>Caltrans lists setting proper stipends among its design-build challenges: too low and teams hold back effort and ideas.</p>`,
k:"Stipend terms decide whether the owner can use concepts from proposals that did not win."},
{t:"Turning VE results into RFP language", ref:"23 CFR 627.9(c) · Agency practice",
h:`<p>Each accepted alternative goes into one of three bins:</p>
<ul><li><b>Require</b>: write it into the technical requirements. Used where only the owner can decide, such as right of way or user commitments.</li>
<li><b>Permit</b>: relax or restate the requirement in performance terms so proposers can offer it.</li>
<li><b>Inform</b>: place the concept in reference documents without requiring it.</li></ul>
<p>A fourth action is to <b>score</b> it: add an evaluation factor that rewards proposals achieving the function.</p>`,
k:"Require, permit, inform or score. Record the bin chosen for each accepted alternative."}
],
mid:[
{s:"Selection", q:"What is evaluated in phase one of a two-phase design-build selection?",
 o:["Price only","Qualifications and technical approach, without price","Final design","Bid bonds only"], a:1,
 e:"Phase one shortlists on qualifications. Price comes with the phase-two proposal."},
{s:"Best value", q:"How can VE performance criteria be used in a design-build procurement?",
 o:["They cannot","As a source for RFP evaluation factors","As the stipend amount","As the bid bond"], a:1,
 e:"Performance criteria state what the owner values beyond cost, which is what evaluation factors do."},
{s:"RFP", q:"In NAVFAC's six-part RFP, which parts hold the least room for proposer alternatives?",
 o:["Project program","Performance technical specifications","Prescriptive specifications","Proposal forms"], a:2,
 e:"Prescriptive specifications dictate the solution."}
],
quiz:[
{s:"Selection", q:"What does the FAR normally set as the maximum phase-two shortlist?",
 o:["Two offerors","Five offerors","Ten offerors","No limit"], a:1,
 e:"FAR 36.303-1 caps it at five unless the contracting officer determines more is in the Government's interest."},
{s:"Best value", q:"An RFP scores price and schedule only. What happens to life-cycle features?",
 o:["Proposers maximize them","Proposers minimize them, since they are not rewarded","They are required by law","They are priced separately"], a:1,
 e:"Proposers invest in what is scored."},
{s:"Level of design", q:"What is the effect of giving proposers a 30% design instead of a concept with functional requirements?",
 o:["More innovation room","More owner control and less room for proposer alternatives","No effect","ATCs become unnecessary"], a:1,
 e:"More owner design fixes more decisions before proposers engage."},
{s:"NAVFAC", q:"During a FACD the user asks for a specific roof system. What should the facilitator test?",
 o:["Whether the request is a function or a preferred solution","Whether the A-E agrees","Whether it is the cheapest","Nothing"], a:0,
 e:"Recording the function leaves the solution open in the RFP."},
{s:"USACE", q:"What is the subject of a USACE VE study on a design-build project?",
 o:["The contractor's final design","The RFP, before advertisement","The punch list","The A-E's fee"], a:1,
 e:"The study reviews the statement of work, criteria and concept before the RFP is advertised."},
{s:"Transit", q:"Which category of requirements is especially large on transit design-build?",
 o:["Third-party requirements from cities, utilities and permitting agencies","Airfield criteria","Navigation locks","Barracks standards"], a:0,
 e:"Transit corridors cross many jurisdictions and utilities, each with requirements."},
{s:"ATC", q:"What did FHWA's 2014 rule change about ATCs?",
 o:["It banned them","It removed the requirement for a separate base proposal","It made them public","It required three per proposer"], a:1,
 e:"Agencies that allow ATCs no longer need to require a base proposal alongside the ATC-based proposal."},
{s:"ATC", q:"Who decides which RFP requirements are open to ATCs?",
 o:["The proposers","The owner, in the RFP","The VE team","The surety"], a:1,
 e:"The RFP states what is open and what is fixed."},
{s:"Stipends", q:"What do RFPs commonly give the owner in exchange for a stipend?",
 o:["A lower bid","Rights to use ideas in the unsuccessful proposal","A design warranty","A VE study"], a:1,
 e:"Stipend acceptance typically transfers the right to use the proposal's concepts."},
{s:"RFP language", q:"An accepted alternative depends on a contractor's construction method. Which bin fits?",
 o:["Require","Permit, by restating the requirement in performance terms","Delete","Dispute"], a:1,
 e:"Means-and-methods ideas are better left open for proposers to compete on."}
]},

/* ============================== ADVANCED ============================== */
a:{ title:"Risk, requirements and value after award",
lessons:[
{t:"Ground risk", ref:"Differing site conditions clauses · FAR 52.236-2 · 23 CFR 635.109",
h:`<p>Proposers price what they cannot know. Subsurface conditions are the largest example.</p>
<ul><li>Owner-furnished borings and a geotechnical baseline give proposers a common basis.</li>
<li>A differing site conditions clause keeps unforeseen-condition risk with the owner, which lowers the risk premium in every proposal.</li>
<li>Transferring all ground risk raises prices and reduces the number of proposers.</li></ul>
<p>A pre-RFP study can treat investigation as an alternative: more borings now against contingency in every price.</p>`,
k:"Risk transferred without information is priced by every proposer. More data before the RFP is often the cheaper option."},
{t:"Third parties, utilities, right of way and permits", ref:"Design-build risk allocation matrices · Agency practice",
h:`<p>Some risks are controlled by parties outside the contract. The design-builder cannot manage a city's review time or a utility owner's relocation schedule.</p>
<ul><li>Owners usually keep right of way acquisition and major permits.</li>
<li>Utility relocation can go either way, with owner agreements in place first.</li>
<li>Third-party design review needs agreed turnaround times in the RFP.</li></ul>
<p>A risk allocation matrix reviewed in the VE study shows where the RFP assigns a risk to the party that cannot control it.</p>`,
k:"Assign each risk to the party that can control it. Misassigned risk shows up as price or as claims."},
{t:"The environmental boundary", ref:"23 CFR 636.109 · 23 CFR 636.209(b) · NEPA",
h:`<p>On Federal-aid projects the RFP may be released before NEPA is complete, but final design and construction cannot proceed until it is.</p>
<ul><li>ATCs cannot conflict with criteria from the environmental decision.</li>
<li>A proposer concept that needs re-evaluation carries schedule risk the owner must decide who bears.</li></ul>
<p>The VE study should list which environmental commitments are fixed, and the RFP should repeat that list so proposers do not spend effort on closed options.</p>`,
k:"State the environmental limits in the RFP. They define the outer edge of both VE alternatives and ATCs."},
{t:"Betterments and owner changes after award", ref:"Design-build contract change clauses",
h:`<p>After award, anything the owner adds or upgrades beyond the RFP is a <b>betterment</b>, priced by the only party that can perform it.</p>
<ul><li>User requests that surface late are the most common source.</li>
<li>The owner has little price leverage and pays for redesign and delay.</li></ul>
<p>This is the cost of an incomplete requirements review. A pre-RFP study that includes users, operators and maintainers reduces it.</p>`,
k:"Requirements missed before the RFP come back as betterments at single-source prices."},
{t:"VECPs in a design-build contract", ref:"FAR 52.248-3 · State design-build contract terms",
h:`<p>VECP clauses appear in design-build contracts, but their scope is narrow. The design-builder already owns the design, so a VECP only makes sense for a change to something the <b>owner</b> specified.</p>
<ul><li>Federal fixed-price contracts apply the FAR clause, with the usual 55% contractor share.</li>
<li>State contracts define eligible changes and the split in the contract.</li>
<li>Changes that reduce performance or life-cycle value are typically excluded.</li></ul>`,
k:"A design-build VECP is a proposal to change the RFP's requirements, not the design-builder's own design."},
{t:"Design review and equal or better", ref:"Design-build contract design review provisions",
h:`<p>During final design the owner reviews submittals for <b>compliance with the contract</b>, not for preference.</p>
<ul><li>Owner comments that direct a different compliant solution can become changes.</li>
<li>Disputes centre on vague requirements and on whether a substitution is equal or better.</li></ul>
<p>Requirements written as measurable performance, with a stated verification method, reduce both. A VE team reviewing the RFP can flag requirements that cannot be verified.</p>`,
k:"If a requirement cannot be measured, the owner cannot enforce it and the design-builder cannot price it."},
{t:"The design-builder's own value engineering", ref:"Agency design-build program reports · Contract quality provisions",
h:`<p>After award the design-builder designs to its price. It will call this value engineering. Much of it is legitimate optimization; some reduces durability or maintainability within the letter of the requirements.</p>
<p>Caltrans lists two related challenges from its program: less control over final design, and quality may become subordinate to cost.</p>
<p>The owner's protections are written before award: performance requirements, life-cycle criteria, warranties, and, in design-build-operate-maintain contracts, giving the builder the long-term cost.</p>`,
k:"The owner's control over post-award design choices is the RFP. Life-cycle value has to be specified or scored."},
{t:"Writing a performance requirement", ref:"UFC 1-300-07A · Agency specification guidance",
h:`<p>A function from the VE study becomes a requirement in four steps:</p>
<ol><li><b>Function</b>: verb and noun, for example <i>control stormwater</i>.</li>
<li><b>Measure</b>: what is measured, for example peak discharge at the outfall.</li>
<li><b>Level</b>: the required value and conditions.</li>
<li><b>Verification</b>: calculation, test or inspection, and when.</li></ol>
<p>If steps 2 to 4 cannot be written, the item is either a preference or belongs in the prescriptive section with a stated reason.</p>`,
k:"Function, measure, level, verification. A requirement missing one of the four invites disputes."},
{t:"What owners report", ref:"Caltrans design-build program materials (CTC workshop, 2022) · Sound Transit delivery guidance",
h:`<p>Caltrans reports that its demonstration program delivered projects with construction capital savings attributed to innovation, and lists challenges:</p>
<ul><li>defining the project at about 30% design</li>
<li>setting proper stipends</li>
<li>less control over final design</li></ul>
<p>Sound Transit's observations include the need to align with permitting authorities on plan review. In both cases the pressure point is the same: what the owner fixed, or failed to fix, before award.</p>`,
k:"Owner experience keeps pointing to the pre-award package as the place where design-build value is won or lost."},
{t:"When conventional design-build is the wrong fit", ref:"Agency delivery selection guidance · DBIA guidance",
h:`<p>Fixed-price design-build works when the owner can define requirements and risks before award. Signals that it cannot:</p>
<ul><li>scope that depends on stakeholder decisions still to be made</li>
<li>third-party or ground risk that no proposer can price sensibly</li>
<li>an owner that wants to take part in design decisions</li>
<li>a budget that needs design-to-cost collaboration</li></ul>
<p>These point toward progressive design-build or CM/GC. A pre-RFP study that cannot settle the requirements has found useful information about the delivery method.</p>`,
k:"If the requirements cannot be settled before the RFP, a later-priced method is likely a better fit."}
],
mid:[
{s:"Ground risk", q:"An RFP transfers all subsurface risk to proposers and provides two borings. What is the likely result?",
 o:["Lower prices","Risk premiums in every proposal and possibly fewer proposers","No effect","More ATCs approved"], a:1,
 e:"Unknown risk is priced by each proposer. More data or a differing site conditions clause reduces the premium."},
{s:"Betterments", q:"After award the user asks for an added mezzanine. How is it priced?",
 o:["By competitive bid","By the design-builder as a change, with little owner leverage","It is free","By the VE team"], a:1,
 e:"Only the design-builder can perform the change, so the owner negotiates with a single source."},
{s:"VECP", q:"What can a design-build VECP properly address?",
 o:["The design-builder's own drawings","A change to a requirement the owner specified","The stipend","The shortlist"], a:1,
 e:"The design-builder already controls its own design. A VECP proposes changing the owner's requirements."}
],
quiz:[
{s:"Ground risk", q:"How can a pre-RFP VE study treat geotechnical investigation?",
 o:["As outside VE scope","As an alternative: added investigation cost against risk premium in every proposal","As a VECP","As a stipend"], a:1,
 e:"Information that lowers every proposer's contingency is a value alternative."},
{s:"Risk allocation", q:"Which principle guides assigning a risk in a design-build contract?",
 o:["Always to the design-builder","To the party that can best control it","Always to the owner","To the lowest bidder"], a:1,
 e:"Risk assigned to a party that cannot control it returns as price or claims."},
{s:"NEPA", q:"On a Federal-aid design-build project, what must wait for NEPA to be complete?",
 o:["Release of the RFP","Final design and construction","The VE study","The shortlist"], a:1,
 e:"23 CFR 636.109 allows the RFP before NEPA is complete; final design and construction wait."},
{s:"Betterments", q:"Which pre-RFP action most reduces post-award betterments?",
 o:["A shorter RFP","Including users, operators and maintainers in the requirements review","Removing the VECP clause","A lower stipend"], a:1,
 e:"Late user requirements are the main source of betterments."},
{s:"VECP", q:"On a federal fixed-price design-build contract, what is the contractor's share of an accepted VECP's net savings?",
 o:["25%","45%","55%","100%"], a:2,
 e:"FAR 52.248-3 applies the same 55% contractor share on fixed-price construction contracts."},
{s:"Design review", q:"The owner's reviewer directs a different, also compliant, girder type. What is the exposure?",
 o:["None","It can be treated as an owner-directed change","The contract is void","A stipend is owed"], a:1,
 e:"Review is for compliance. Directing a preference among compliant solutions is a change."},
{s:"Quality", q:"Where does the owner protect life-cycle value on a design-build project?",
 o:["In design review comments after award","In RFP performance requirements, life-cycle criteria, warranties and evaluation factors","In the VECP clause","It cannot"], a:1,
 e:"After award the design-builder designs to its price within the written requirements."},
{s:"Requirements", q:"Which element is missing from: The pavement shall be durable?",
 o:["Nothing","Measure, level and verification","The function only","The stipend"], a:1,
 e:"Durable is not measurable as written. A performance requirement needs measure, level and verification."},
{s:"Lessons", q:"Which challenge does Caltrans list for design-build?",
 o:["Too much control over final design","Defining the project at about 30% design","No interest from proposers","Lack of authority"], a:1,
 e:"Its program materials cite defining the project at 30%, setting stipends and less control over final design."},
{s:"Fit", q:"A pre-RFP study finds major scope still depends on unresolved city decisions. What does that suggest?",
 o:["Release the RFP anyway","A later-priced method such as progressive design-build or CM/GC may fit better","Cancel the project","Raise the stipend"], a:1,
 e:"Fixed-price design-build needs settled requirements. Unsettled scope points to methods that price later."}
]}
},
notes:[
{h:"The exclusion is a highway rule", p:"23 U.S.C. 106(e)(5) and 23 CFR 627.5(e) remove the VE requirement for design-build on Federal-aid highway projects and encourage it anyway. FTA guidance and federal agency VE rules have no matching exclusion.", src:"23 CFR 627.5(e), 627.9(c); FTA OP 30; OMB Circular A-131"},
{h:"Caltrans demonstration program results", p:"Caltrans reported eight projects delivered under the demonstration program with no claims and $59.85M in construction capital savings attributed to innovation.", src:"Caltrans presentation to the California Transportation Commission project delivery workshop (Aug. 2022)"},
{h:"NAVFAC emphasis on design-build", p:"A February 2026 NAVFAC Washington release describes adjusting its delivery strategy to focus much more on design-build.", src:"NAVFAC news release, 9 Feb. 2026"},
{h:"Verify with the client", p:"Confirm the stipend and idea-ownership wording in 23 CFR 636.113 and the specific RFP, the current USACE procedure for VE on design-build RFPs, and NAVFAC's current RFP template before advising on a specific procurement.", src:"Author note"}
]
};
