/* Contract Types — CM/GC (GC/CM, CMAR, CMc, ECI) including heavy civil GC/CM. Tiers b, i, a. */
window.VE = window.VE || {};
VE.contracts = VE.contracts || {};
VE.contracts.cmgc = {
id:"cmgc", name:"CM/GC", glyph:"CM/GC",
blurb:"The owner keeps the designer and adds the builder during design. Also called GC/CM, CMAR, CMc and ECI. Includes the heavy civil variant.",
tiers:{
/* ============================== BEGINNER ============================== */
b:{ title:"The contractor joins during design",
lessons:[
{t:"How CM/GC works", ref:"23 U.S.C. 112(b)(4) · 23 CFR 635.502 · AIA/AGC CM at-Risk primer",
h:`<p>In Construction Manager/General Contractor (CM/GC) delivery the owner still holds a separate contract with the designer, as in DBB. The difference is that the owner also hires the builder <b>during design</b>.</p>
<ol><li><b>Preconstruction phase</b>: the CM/GC is paid to advise on constructability, cost, schedule and risk while the designer designs.</li>
<li><b>Price</b>: at an agreed point the owner and CM/GC negotiate a construction price.</li>
<li><b>Construction phase</b>: if they agree, the same firm builds the project as general contractor.</li></ol>`,
k:"Two contracts, as in DBB, but the builder is at the table while the design is still open."},
{t:"One method, five names", ref:"23 CFR 635 Subpart E · RCW 39.10 · GSAM 536.71 · USACE ECB 2009-4",
h:`<p>Clients use different names for the same structure:</p>
<ul><li><b>CM/GC</b>: Federal-aid highways; Caltrans writes CMGC.</li>
<li><b>GC/CM</b>: Washington State law, used by Sound Transit.</li>
<li><b>CMAR or CM at-Risk</b>: common for buildings and local agencies.</li>
<li><b>CMc</b> (Construction Manager as Constructor): GSA.</li>
<li><b>ECI</b> (Early Contractor Involvement): USACE, and NAVFAC on trial projects.</li></ul>
<p>The test is the same for all of them: separate designer, builder hired during design, construction price negotiated later.</p>`,
k:"CM/GC, GC/CM, CMAR, CMc and ECI are one delivery structure under five names."},
{t:"Who holds the design and the risk", ref:"Spearin doctrine · 23 CFR 635.502 · USACE ECI guidance",
h:`<p>The owner keeps design responsibility. The designer of record works for the owner, and the owner's implied warranty of the plans still applies.</p>
<ul><li>The CM/GC <b>advises</b> on the design and does not perform it. USACE ECI contracts state that the contractor is not responsible for design services.</li>
<li>Price and schedule risk for construction move to the CM/GC once a price is agreed.</li>
<li>The owner decides which contractor suggestions the designer adopts.</li></ul>`,
k:"The builder influences the design, but the owner still owns it. That is the main difference from design-build."},
{t:"How the price is set", ref:"23 CFR 635.502 and 635.506 · RCW 39.10.370 · GSAM 536.7102",
h:`<p>The construction price is negotiated, not bid. Each client has its own term:</p>
<ul><li><b>Agreed price</b>: Federal-aid highway rules.</li>
<li><b>MACC</b> (Maximum Allowable Construction Cost): Washington GC/CM.</li>
<li><b>GMP</b> (Guaranteed Maximum Price): GSA CMc and most building work.</li>
<li><b>Target and ceiling price</b>: USACE ECI, under a fixed-price incentive contract.</li></ul>
<p>Estimates are open-book, and the owner checks them against its own estimate or an independent cost estimate (ICE).</p>`,
k:"The price is negotiated from open-book estimates and tested against an independent number."},
{t:"The off-ramp", ref:"23 CFR 635.504(b)(6) and 635.506",
h:`<p>If the owner and the CM/GC cannot agree on a price, the owner is not obliged to award construction. Because the owner holds the designer's contract and owns the design, it can finish the plans and <b>bid the work competitively</b>, as in DBB.</p>
<p>Federal-aid rules provide for exactly this: FHWA authorizes construction on the agreed price or, if there is no agreement, on the price established through competitive bidding.</p>`,
k:"No agreed price means the owner bids the project. Owning the design makes that off-ramp workable."},
{t:"Is a VE study required?", ref:"23 CFR 627.9(d) · FTA OP 30 · OMB Circular A-131 · USACE ER 11-1-321",
h:`<p>CM/GC is not design-build, so no exclusion applies:</p>
<ul><li><b>Federal-aid highway</b>: required at the usual thresholds. The analysis must be complete and approved recommendations incorporated into the plans <b>before a construction price proposal is requested</b> from the CM/GC.</li>
<li><b>FTA transit</b>: VE on major capital projects applies whatever the delivery method.</li>
<li><b>Federal agencies</b>: the agency VE thresholds apply.</li></ul>`,
k:"CM/GC projects carry the full VE requirement. On highway work the deadline is the first construction price request."},
{t:"When to hold the study", ref:"23 CFR 627.9(d) · Agency CM/GC procedures",
h:`<p>Two events bracket the useful window:</p>
<ul><li><b>After the CM/GC is under contract</b>, so the builder can take part.</li>
<li><b>Before the price is negotiated</b>, so accepted alternatives lower the number the owner signs.</li></ul>
<p>The highway rule says a study is not required before the CM/GC solicitation. That allows the owner to wait for the contractor, which is usually the better choice.</p>
<div class="formula">CM/GC on board → VE study → redesign → price proposal</div>`,
k:"Hold the study with the contractor on board and with time left to redesign before pricing."},
{t:"The contractor in the workshop", ref:"SAVE International VM Standard · Agency practice",
h:`<p>The CM/GC brings what a DBB study has to simulate:</p>
<ul><li>means and methods, equipment and crew productivity</li>
<li>current subcontractor and supplier pricing</li>
<li>sequencing, access and work-window knowledge</li>
<li>a view of which risks it will price heavily</li></ul>
<p>The CM/GC also has a commercial interest in the eventual price. The team structure accounts for that: independent members, the designer, the owner and the ICE all take part in evaluating alternatives.</p>`,
k:"The contractor supplies real construction input. The independent members supply the challenge."},
{t:"The heavy civil variant", ref:"RCW 39.10.210 · RCW 39.10.908 · Sound Transit delivery guidance",
h:`<p>Washington law has a subtype called <b>heavy civil GC/CM</b>, for civil engineering projects whose predominant features are infrastructure improvements.</p>
<ul><li><b>Standard GC/CM</b>: subcontract work is competitively bid; the GC/CM may bid on a limited share.</li>
<li><b>Heavy civil GC/CM</b>: the owner may <b>negotiate</b> up to 50% of the cost of the work for the GC/CM to self-perform, without bidding it.</li></ul>
<p>Sound Transit uses it where it wants a heavy civil contractor to control and self-perform critical work such as structural concrete or track.</p>`,
k:"Heavy civil is a GC/CM (CM/GC) subtype, not a design-build subtype. It raises the negotiated self-perform share to 50%."},
{t:"CM/GC or progressive design-build?", ref:"23 CFR 635.502 · DBIA Progressive Design-Build guidance",
h:`<p>Both methods bring the builder in early and set the price later. One question separates them: <b>who holds the designer's contract?</b></p>
<ul><li><b>CM/GC</b>: the owner. Two contracts. The owner keeps design control and design risk.</li>
<li><b>Progressive design-build</b>: the design-builder. One contract. Design responsibility moves to the design-builder.</li></ul>
<p>This also decides the VE rule on highway projects: required for CM/GC, excluded for progressive design-build.</p>`,
k:"Ask who the designer works for. Owner means CM/GC. Builder means progressive design-build."}
],
mid:[
{s:"Structure", q:"In CM/GC, who holds the contract with the designer of record?",
 o:["The CM/GC","The owner","The lowest bidder","The funding agency"], a:1,
 e:"The owner holds separate contracts with the designer and the CM/GC."},
{s:"Names", q:"Which term does Washington State law, and Sound Transit, use for this method?",
 o:["ECI","GC/CM","CMc","IDIQ"], a:1,
 e:"RCW 39.10 calls it the general contractor/construction manager (GC/CM) procedure."},
{s:"Off-ramp", q:"The owner and CM/GC cannot agree on a construction price. What can the owner do?",
 o:["It must accept the CM/GC's price","Complete the design and bid the work competitively","Convert to design-build","Cancel the environmental document"], a:1,
 e:"The owner owns the design and can award construction through competitive bidding."}
],
quiz:[
{s:"Structure", q:"What distinguishes CM/GC from design-bid-build?",
 o:["One contract for design and construction","The builder is hired during design and the price is negotiated","There is no designer","Construction starts before any design"], a:1,
 e:"Both have two contracts. In CM/GC the builder joins during design under a preconstruction contract."},
{s:"Names", q:"USACE calls its version of this method what?",
 o:["Early Contractor Involvement (ECI)","Job order contracting","Two-phase design-build","Sealed bidding"], a:0,
 e:"USACE uses ECI, built on a fixed-price incentive contract."},
{s:"Responsibility", q:"A CM/GC suggests a different foundation type and the designer adopts it. Who is responsible for the design?",
 o:["The CM/GC","The owner's designer of record","The ICE","Nobody"], a:1,
 e:"The CM/GC advises. The designer of record, working for the owner, remains responsible for the design."},
{s:"Price", q:"What is the Washington GC/CM term for the negotiated construction cost limit?",
 o:["GMP","MACC","Agreed price","Ceiling price"], a:1,
 e:"Maximum Allowable Construction Cost."},
{s:"Price check", q:"What does the owner use to test the CM/GC's price?",
 o:["The low bid","Its own estimate or an independent cost estimate","The designer's fee","The VECP clause"], a:1,
 e:"With one negotiating partner, an independent number is the check."},
{s:"Highway rule", q:"A $90M NHS project with Federal-aid funds will be delivered by CM/GC. Is VE federally required?",
 o:["No, CM/GC is excluded","Yes; only design-build is excluded","Only if the CM/GC requests it","Only after award of construction"], a:1,
 e:"The exclusion in 23 U.S.C. 106(e)(5) covers design-build only."},
{s:"Highway timing", q:"Under 23 CFR 627.9(d), by when must the VE analysis be done on a CM/GC project?",
 o:["Before the CM/GC solicitation","Before a construction price proposal is requested from the CM/GC","Before construction is complete","Within a year of award"], a:1,
 e:"The analysis must be complete and approved recommendations incorporated before requesting a construction price proposal."},
{s:"Workshop", q:"Why keep independent members on a VE team that includes the CM/GC?",
 o:["The CM/GC cannot speak in workshops","The CM/GC has a commercial interest in the price","Federal law bars contractors from VE","To reduce attendance"], a:1,
 e:"The contractor's input is valuable and its interest is commercial. Independent members balance the evaluation."},
{s:"Heavy civil", q:"What does Washington's heavy civil GC/CM variant change?",
 o:["It makes the GC/CM the designer","It allows up to 50% of the cost of the work to be negotiated for self-performance","It removes the MACC","It removes the designer"], a:1,
 e:"RCW 39.10.908 caps the negotiated self-perform portion at 50% of the cost of the work."},
{s:"Comparison", q:"The builder joins early and holds the designer's contract. Which method is this?",
 o:["CM/GC","Progressive design-build","Design-bid-build","Heavy civil GC/CM"], a:1,
 e:"When the designer works for the builder under one contract, it is progressive design-build."}
]},

/* ============================== INTERMEDIATE ============================== */
i:{ title:"Client rulebooks and preconstruction mechanics",
lessons:[
{t:"Federal-aid highway rules", ref:"23 U.S.C. 112(b)(4) · 23 CFR 635 Subpart E",
h:`<p>MAP-21 authorized CM/GC for Federal-aid projects and FHWA's rule is 23 CFR 635 Subpart E.</p>
<ul><li>The state's CM/GC procurement procedures need FHWA Division approval.</li>
<li>The agency must perform a <b>price analysis</b> comparing the agreed price with its engineer's estimate or an ICE.</li>
<li>FHWA approves the price analysis and agreed price before authorizing construction, unless the state has assumed that approval under its stewardship agreement.</li></ul>`,
k:"On Federal-aid work the agreed price has to survive a documented comparison with an independent number."},
{t:"CM/GC and the environmental process", ref:"23 CFR 635.505",
h:`<p>The rule ties the two phases to NEPA:</p>
<ul><li>The CM/GC contract can be awarded and <b>preconstruction services can proceed before NEPA is complete</b>.</li>
<li>A construction services contract cannot be awarded, and construction cannot start, until NEPA is complete.</li></ul>
<p>The CM/GC's early input can inform the alternatives analysis, but it cannot commit the agency to an alternative. For VE, an early workshop with the contractor can run in parallel with the environmental phase.</p>`,
k:"Preconstruction may overlap NEPA. Construction pricing and award wait for the environmental decision."},
{t:"Caltrans CMGC", ref:"Public Contract Code 6700 et seq. · Caltrans CMGC Procedures",
h:`<p>California authorizes Caltrans to use CMGC on projects above $10 million in construction capital cost. Caltrans procedures, approved by the FHWA California Division, describe the process:</p>
<ul><li>candidate projects are assessed against DBB, design-build, progressive design-build and CMGC</li>
<li>an Alternative Contracting Steering Committee reviews the choice</li>
<li>an ICE prices the work independently at each estimate milestone</li></ul>`,
k:"Caltrans CMGC is a standing authority with written procedures and an independent estimator at each milestone."},
{t:"Washington GC/CM", ref:"RCW 39.10.340 through 39.10.410 · CPARB Project Review Committee",
h:`<p>Washington's GC/CM statute sets a detailed process:</p>
<ul><li>A public body must be certified, or have the project approved, by the state Project Review Committee.</li>
<li>Selection weighs qualifications, then finalists bid a fee and general conditions.</li>
<li>The MACC is negotiated during design.</li>
<li>Subcontract packages are competitively bid, with limits on what the GC/CM can perform itself.</li></ul>
<p>Sound Transit holds certification and has delivered more than $4 billion under GC/CM and heavy civil GC/CM.</p>`,
k:"Under RCW 39.10 the price is MACC plus fixed general conditions plus fee, and most subcontract work is bid."},
{t:"Heavy civil GC/CM in detail", ref:"RCW 39.10.908 · Sound Transit GC/CM recertification materials",
h:`<p>When a public body elects heavy civil GC/CM, the statute adds requirements:</p>
<ul><li>the solicitation states the election and the minimum share of work to be negotiated for self-performance</li>
<li>proposers state their fee on the self-performed portion</li>
<li>the negotiated self-perform portion cannot exceed 50% of the cost of the work</li>
<li>an independent audit, paid by the public body, confirms cost accrual</li></ul>
<p>Sound Transit has used it on East Link, Lynnwood Link and systems contracts, and lists MACC negotiation as a challenge.</p>`,
k:"Half the work can be priced by negotiation, so the estimate comparison and the audit carry more weight."},
{t:"USACE Early Contractor Involvement", ref:"FAR 16.403-2 · FAR 52.216-17 · USACE ECB 2009-4",
h:`<p>ECI fits the method into the FAR using a <b>fixed-price incentive (successive targets)</b> contract:</p>
<ul><li>Base award: preconstruction services at a firm fixed price, usually from about 15% to 35% design.</li>
<li>Options: construction, with an initial target cost, target profit and a <b>ceiling price</b>.</li>
<li>As design matures the targets are revised, and the parties may convert to a firm fixed price.</li></ul>
<p>The Corps keeps design responsibility through in-house design or a separate A-E.</p>`,
k:"ECI is the federal form: a ceiling price set early, with targets firmed up as the design matures."},
{t:"GSA Construction Manager as Constructor", ref:"GSAM Subpart 536.71 · GSAR 552.236-79",
h:`<p>GSA added CMc to its acquisition manual in 2020 because the FAR has no coverage of the method.</p>
<ul><li>The contract includes design-phase services at a firm fixed price and an option for construction at a GMP.</li>
<li>The GMP is the sum of the estimated cost of the work, the CMc contingency allowance and the fee.</li>
<li>Savings below the GMP are shared between the constructor and the Government.</li>
<li>GSAM 536.7105-4 addresses value engineering under CMc.</li></ul>`,
k:"GSA's version shows the federal building pattern: GMP, a defined contingency allowance and shared savings."},
{t:"What happens in preconstruction", ref:"Agency CM/GC procedures · 23 CFR 635.502",
h:`<p>Preconstruction services typically include:</p>
<ul><li>constructability reviews of each design submittal</li>
<li>cost estimates at design milestones, often called opinions of probable construction cost</li>
<li><b>estimate reconciliation</b>: the CM/GC, the designer's estimator and the ICE compare quantities, rates and assumptions line by line</li>
<li>schedule and phasing plans</li>
<li>a shared risk register with cost and time values</li></ul>`,
k:"Estimate reconciliation is where differences in assumptions surface. It is a ready-made input to function-cost analysis."},
{t:"Workshop versus running input", ref:"SAVE International VM Standard · FTA OP 30",
h:`<p>A CM/GC produces suggestions continuously. That is constructability and cost input, and it does not replace a VE study.</p>
<ul><li><b>Running input</b>: reacts to the design as drawn; item-by-item; logged in an innovation or cost-savings register.</li>
<li><b>VE workshop</b>: starts from functions; questions requirements; generates alternatives the design team has not drawn.</li></ul>
<p>Where a study is required, the function-based workshop is what satisfies it. Logging both in one register keeps the record complete.</p>`,
k:"Contractor suggestions refine the drawn design. The workshop questions what the design is for."},
{t:"Early work packages", ref:"23 CFR 635.502 and 635.506 · 23 CFR 627.9(d)",
h:`<p>CM/GC allows construction to start on part of the project before the whole design is complete. An <b>early work package</b> covers work such as utility relocation, long-lead procurement or site preparation, priced separately.</p>
<p>Two consequences for VE:</p>
<ul><li>Each package fixes part of the design. Alternatives that touch it must be decided first.</li>
<li>On highway work, the study must precede the request for a construction price proposal, so the first package sets the practical deadline.</li></ul>`,
k:"The first early work package, not the main price, is the real deadline for scope-level alternatives."}
],
mid:[
{s:"FHWA", q:"Under 23 CFR 635 Subpart E, what must the agency compare the agreed price against?",
 o:["The lowest past bid","Its engineer's estimate or an independent cost estimate","The designer's fee","The stipend"], a:1,
 e:"The price analysis compares the agreed price with the engineer's estimate or an ICE."},
{s:"NEPA", q:"Which CM/GC activity may proceed before NEPA is complete?",
 o:["Award of the construction services contract","Preconstruction services","Full construction","Early work construction"], a:1,
 e:"23 CFR 635.505 allows preconstruction services before NEPA is complete; construction contracts wait."},
{s:"Washington", q:"Who approves a Washington public body's use of GC/CM?",
 o:["FHWA","The state Project Review Committee, by certification or project approval","The GC/CM","The county auditor"], a:1,
 e:"RCW 39.10 routes approval through the Capital Projects Advisory Review Board's Project Review Committee."}
],
quiz:[
{s:"FHWA", q:"What happens under Federal-aid rules if no price is agreed with the CM/GC?",
 o:["The project is cancelled","Construction is authorized on a competitively bid price","The CM/GC sets the price","FHWA negotiates directly"], a:1,
 e:"Authorization relies on the agreed price or, without agreement, the price from competitive bidding."},
{s:"Caltrans", q:"What project size does California law set for Caltrans CMGC?",
 o:["Over $10 million construction capital cost","Over $50 million total project cost","Any size","Over $25 million, eight projects only"], a:0,
 e:"Public Contract Code 6700 covers projects over $10 million. The eight-project, $25 million limit is the progressive design-build authority."},
{s:"Washington", q:"Under RCW 39.10, what do GC/CM finalists bid?",
 o:["The full construction cost","Fee and general conditions","Nothing","Design fee"], a:1,
 e:"Selection weighs qualifications, then finalists submit bids for fee and general conditions."},
{s:"Heavy civil", q:"Which requirement applies only to heavy civil GC/CM projects in Washington?",
 o:["An independent audit of cost accrual paid by the public body","A design-build stipend","An ATC process","A 100% bid requirement"], a:0,
 e:"RCW 39.10.908 requires an independent audit for heavy civil projects."},
{s:"Heavy civil", q:"Why does Sound Transit select heavy civil GC/CM over standard GC/CM?",
 o:["To avoid a MACC","When a heavy civil contractor is needed to control and self-perform critical work","To remove the designer","To skip VE"], a:1,
 e:"Its guidance cites critical self-performed components such as structural concrete or track."},
{s:"ECI", q:"What FAR contract type does USACE ECI use?",
 o:["Cost-plus-fixed-fee","Fixed-price incentive (successive targets)","Time and materials","Sealed-bid firm fixed price"], a:1,
 e:"FAR 16.403-2, with clause 52.216-17, gives a ceiling price and targets that are revised as design matures."},
{s:"GSA", q:"In GSA's CMc method, what makes up the GMP?",
 o:["Design fee plus contingency","Estimated cost of the work, CMc contingency allowance and fee","Low bid plus 10%","Target cost only"], a:1,
 e:"GSAM 536.7102 defines the GMP as ECW plus CCA plus the fee for the construction work."},
{s:"Preconstruction", q:"What is estimate reconciliation?",
 o:["Averaging three estimates","A line-by-line comparison of quantities, rates and assumptions among the estimators","A bid protest","Final payment audit"], a:1,
 e:"The CM/GC, designer's estimator and ICE compare their estimates to find and resolve differences."},
{s:"VE vs input", q:"The CM/GC has logged 60 cost-saving suggestions. Does that satisfy a VE requirement?",
 o:["Yes, automatically","No; a required study is function-based and follows the Job Plan","Yes, if savings exceed 5%","Only on transit projects"], a:1,
 e:"Running suggestions are constructability and cost input. The function-based study is a separate product."},
{s:"Early work", q:"A utility relocation early work package will be priced next month. What does that mean for VE?",
 o:["Nothing","Alternatives affecting that work must be decided before the package is priced","VE moves to closeout","The package cancels the study"], a:1,
 e:"Each package fixes part of the design, and on highway work the study must precede the construction price request."}
]},

/* ============================== ADVANCED ============================== */
a:{ title:"Negotiation, independence and choosing the method",
lessons:[
{t:"Independence with the builder in the room", ref:"23 CFR 627.9 · SAVE International VM Standard",
h:`<p>Federal highway rules describe a VE team as people not directly involved in the project's design. The CM/GC is involved, and it will negotiate the price.</p>
<p>Working arrangements that keep the study credible:</p>
<ul><li>the CM/GC participates as a technical resource and in speculation and development</li>
<li>independent members and the owner lead evaluation and scoring</li>
<li>performance criteria and weights are set before ideas are judged</li>
<li>cost for each alternative is checked by the ICE</li></ul>`,
k:"Use the contractor's knowledge everywhere, and keep the scoring with people who have no stake in the price."},
{t:"What drives the price negotiation", ref:"23 CFR 635.506(d) · Agency CM/GC procedures",
h:`<p>Negotiations usually stall on a few items, not on the whole estimate:</p>
<ul><li>production rates for the largest work items</li>
<li>how much each risk is worth, and who carries it</li>
<li>subcontractor and material quotes that differ from the ICE</li>
<li>schedule assumptions and escalation</li></ul>
<p>A VE alternative that removes a disputed item or retires a risk closes the gap from both sides. Alternatives presented after the gap is known are judged as bargaining positions.</p>`,
k:"Finish the VE study before the estimate gap becomes the subject. After that, every idea reads as a negotiating move."},
{t:"Contingency and allowances", ref:"RCW 39.10.210 (risk contingency) · GSAM 536.7102 · Contract terms",
h:`<p>A negotiated price holds several kinds of money for uncertainty:</p>
<ul><li><b>Contractor's contingency</b> inside the price, for risks the CM/GC carries. Washington law calls it risk contingency; GSA calls it the CMc contingency allowance.</li>
<li><b>Owner's contingency</b> outside the price, for owner risks and changes.</li>
<li><b>Allowances</b> for scope not yet defined.</li></ul>
<p>A risk allocation matrix assigns each risk to one party. An alternative that retires a risk should reduce the matching contingency, and the write-up should say which one.</p>`,
k:"Name the contingency an alternative reduces. Otherwise the saving stays hidden in someone's reserve."},
{t:"Self-performance and subcontract buyout", ref:"RCW 39.10.380 through 39.10.400 · RCW 39.10.908 · 23 CFR 635.504(d)",
h:`<p>Who prices the work changes how savings are found:</p>
<ul><li><b>Bid subcontracts</b>: the market sets the price. Savings from bids under the estimate go where the contract says, often back to contingency.</li>
<li><b>Negotiated self-performed work</b>: the CM/GC prices it. The check is the ICE and, on Washington heavy civil projects, the audit.</li></ul>
<p>On a heavy civil project up to half the work may be negotiated, so the cost model depends more on reconciled estimates than on bid data.</p>`,
k:"The more work is self-performed by negotiation, the more the study relies on the independent estimate."},
{t:"Making the off-ramp credible", ref:"23 CFR 635.504(b)(6) · Sound Transit delivery guidance",
h:`<p>An off-ramp only disciplines the price if the owner can use it. That takes preparation:</p>
<ul><li>a design the owner can finish and bid without the CM/GC</li>
<li>a schedule that shows the cost of the delay</li>
<li>clear terms on ending preconstruction services</li></ul>
<p>Sound Transit notes that heavy civil GC/CM requires a negotiation strategy and an off-ramp if negotiations fail. A design shaped tightly around one contractor's methods is harder to bid.</p>`,
k:"Alternatives tied to one contractor's proprietary method weaken the off-ramp. Note that in the evaluation."},
{t:"Several price proposals, one VE rule", ref:"23 CFR 627.9(d) · 23 CFR 635.506(d)",
h:`<p>Large CM/GC projects are priced in pieces: early work packages first, then one or more main packages. Each needs its own price analysis.</p>
<p>The highway VE rule refers to requesting a construction price proposal. A conservative reading places the study, and incorporation of approved recommendations, before the first request. Where packages are years apart, a second focused study before a later package may add value. Confirm the approach with the FHWA Division.</p>`,
k:"Plan the study against the first price request and consider a second one for late packages."},
{t:"Contractor ideas and the designer of record", ref:"Spearin doctrine · A-E contract terms · USACE ECI guidance",
h:`<p>Every contractor suggestion that changes the design has to be adopted by the designer of record, who then owns it professionally.</p>
<ul><li>Designers may resist ideas they did not originate and must seal.</li>
<li>Redesign fee and schedule are owner costs under the designer's contract.</li>
<li>If the owner directs a contractor-proposed detail over the designer's objection, the allocation of responsibility needs to be written down.</li></ul>`,
k:"A contractor's idea becomes the designer's design. Budget the redesign and document who decided."},
{t:"Savings after the price is set", ref:"FAR 16.403-2 · GSAR 552.236-79 · Contract terms",
h:`<p>After the price is agreed, the incentive structure replaces the negotiation:</p>
<ul><li><b>Fixed-price incentive (ECI)</b>: cost under target is shared by a negotiated ratio. The standard construction VECP clause is not used in incentive contracts.</li>
<li><b>GMP with shared savings (CMc)</b>: savings below the GMP are split as the contract states.</li>
<li><b>Lump-sum agreed price</b>: the contract's VECP clause applies, as in DBB.</li></ul>`,
k:"Read the contract type before promising a savings share. Incentive contracts and VECP clauses do not stack."},
{t:"Choosing among CM/GC, heavy civil and progressive design-build", ref:"Sound Transit delivery guidance · Agency selection procedures",
h:`<p>For a complex rail or bridge project the choice often narrows to these three. The deciding questions:</p>
<ul><li><b>Does the owner want to keep design control?</b> Yes points to CM/GC.</li>
<li><b>Is self-performance of critical work essential?</b> Yes points to heavy civil GC/CM or progressive design-build.</li>
<li><b>Does the owner want one party responsible for design and construction?</b> Yes points to progressive design-build.</li>
<li><b>Are commitments to third parties prescriptive?</b> Yes favors keeping the designer.</li></ul>`,
k:"Design control, self-performance and single-point responsibility are the three questions that sort these methods."},
{t:"What owners report", ref:"Sound Transit GC/CM recertification presentations (2019, 2024) · Caltrans CMGC reports",
h:`<p>Sound Transit's recertification materials list practices it adopted for heavy civil GC/CM:</p>
<ul><li>engage the GC/CM early, around 30% design</li>
<li>manage change proactively</li>
<li>start contract interface coordination during preconstruction</li>
<li>co-locate and staff the team for collaboration</li></ul>
<p>It also lists challenges: getting contractor input into the design during preconstruction, MACC negotiations, and the frequency of change orders and claims.</p>`,
k:"Owners report that the method depends on early engagement and that price negotiation is the hard part."}
],
mid:[
{s:"Independence", q:"Which arrangement best protects a VE study's credibility on a CM/GC project?",
 o:["The CM/GC scores all ideas","Independent members and the owner lead evaluation; the ICE checks costs","The designer is excluded","Criteria are set after scoring"], a:1,
 e:"The contractor contributes knowledge. Evaluation stays with parties who have no stake in the price."},
{s:"Negotiation", q:"When should VE alternatives be developed relative to the price negotiation?",
 o:["After the estimate gap is known","Before the negotiation, so they are judged on merit","During final payment","After the off-ramp"], a:1,
 e:"Once the gap is the subject, ideas are treated as bargaining positions."},
{s:"Contingency", q:"An alternative eliminates a groundwater risk the CM/GC was carrying. What should the write-up state?",
 o:["Only the direct cost saving","The direct saving and the reduction in the contractor's contingency","Nothing about risk","That the owner's contingency rises"], a:1,
 e:"Naming the contingency affected makes the saving visible in the price."}
],
quiz:[
{s:"Independence", q:"Why is the CM/GC not counted as an independent VE team member under highway rules?",
 o:["It lacks expertise","It is directly involved in the project and will negotiate the price","It is not allowed on site","It is the designer"], a:1,
 e:"Independence means not directly involved in the design. The CM/GC is involved and has a commercial stake."},
{s:"Negotiation", q:"Which item most often separates the CM/GC's estimate from the ICE?",
 o:["Font size on the plans","Production rates and risk pricing on the largest work items","The number of sheets","The VE report format"], a:1,
 e:"Gaps concentrate in production assumptions, risk values and major quotes."},
{s:"Contingency", q:"Where does the owner's contingency sit?",
 o:["Inside the negotiated price","Outside the negotiated price, for owner risks and changes","In the designer's fee","In the stipend"], a:1,
 e:"The contractor's contingency is inside the price. The owner's is held separately."},
{s:"Buyout", q:"On a heavy civil GC/CM project half the work is negotiated self-performance. What does the cost model rely on?",
 o:["Public bid tabs alone","Reconciled estimates checked by the ICE","The designer's fee","Nothing"], a:1,
 e:"Negotiated work has no bid data, so the independent estimate is the check."},
{s:"Off-ramp", q:"An alternative depends on a proprietary method only the current CM/GC owns. What is the side effect?",
 o:["It raises the fee","It weakens the owner's ability to bid the project if negotiations fail","It voids NEPA","None"], a:1,
 e:"A design tied to one contractor's method is harder to bid competitively."},
{s:"Packages", q:"A CM/GC highway project has an early work package and a main package two years later. When is the conservative VE deadline?",
 o:["Before the main package only","Before the first construction price request","After both","At closeout"], a:1,
 e:"23 CFR 627.9(d) refers to requesting a construction price proposal. The first request is the safe reading; confirm with FHWA."},
{s:"Designer", q:"Who must adopt and seal a contractor-suggested design change?",
 o:["The CM/GC","The designer of record","The ICE","The VE facilitator"], a:1,
 e:"The owner's designer remains responsible for the design."},
{s:"Incentives", q:"On a USACE ECI contract, how are post-target savings handled?",
 o:["Through the standard construction VECP clause","Through the incentive share ratio","They go to the A-E","They are not allowed"], a:1,
 e:"Fixed-price incentive contracts share cost under target by ratio. The construction VECP clause is not used in incentive contracts."},
{s:"Selection", q:"An owner wants to keep design control and needs the contractor to self-perform track and structures. Which method fits in Washington?",
 o:["Design-build","Heavy civil GC/CM","Design-bid-build","Job order contracting"], a:1,
 e:"The owner keeps the designer, and the heavy civil variant allows negotiated self-performance."},
{s:"Lessons", q:"Which challenge does Sound Transit report for heavy civil GC/CM?",
 o:["Too many bidders","MACC negotiations","Lack of contractor interest in design","No change orders"], a:1,
 e:"Its presentations list contractor input during preconstruction, heavy civil MACC negotiations and change order frequency."}
]}
},
notes:[
{h:"Heavy civil is GC/CM", p:"Washington defines a heavy civil construction project as a civil engineering project whose predominant features are infrastructure improvements, and regulates it as a GC/CM variant in RCW 39.10.908. Sound Transit lists five methods: DBB, GC/CM, Heavy Civil GC/CM, Design-Build and Progressive Design-Build.", src:"RCW 39.10.210 and 39.10.908; Sound Transit Project Delivery and Contracting Methods (Oct. 2022)"},
{h:"Sound Transit GC/CM record", p:"Recertification materials list University Link, Northgate Link, East Link (E130 and E335 heavy civil) and Lynnwood Link (two heavy civil contracts plus systems), totaling more than $4 billion.", src:"Sound Transit recertification presentation to CPARB PRC (March 2024)"},
{h:"NAVFAC and ECI", p:"A 2022 Navy study reports that the Chief of Civil Engineers directed field offices in 2020 to execute projects using ECI, and that NAVFAC was in early adoption with trial projects.", src:"DTIC AD1167689, ECI Construction Project Delivery Methodology for the US Navy"},
{h:"Verify: Washington specifics", p:"The standard GC/CM self-performance limit, the share of heavy civil work that must still be bid, and the design stage at which the MACC is negotiated have been amended more than once. Check the current RCW 39.10 text for the project.", src:"RCW 39.10 (amended 2021, 2024)"}
]
};
