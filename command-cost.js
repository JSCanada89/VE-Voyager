/* VE Command — Cost Estimating Training. Tiers b, i, a. Estimating literacy for VE team members and facilitators. */
window.VE = window.VE || {};
VE.command = VE.command || {};
VE.command.cost = {
id:"cost", name:"Cost Estimating Training", glyph:"$",
blurb:"Reading an estimate, building cost models, pricing VM proposals and life-cycle cost, with each client's formats.",
tiers:{
/* ============================== BEGINNER ============================== */
b:{ title:"Reading an estimate",
lessons:[
{t:"Why a VE team needs estimating literacy", ref:"SAVE Core Competencies 4.A.8, 4.B.7 · VM Guide 5.3.4, 5.4.7",
h:`<p>Cost is the resource most VE studies measure value against. The team uses the estimate three times:</p>
<ul><li><b>Information Phase</b>: to build the cost model and see where money is concentrated.</li>
<li><b>Function Analysis</b>: to allocate cost to functions.</li>
<li><b>Development</b>: to price each proposal against the baseline.</li></ul>
<p>Team members do not need to be estimators. They do need to know what an estimate contains, how reliable it is at its stage, and how to compare two options on the same basis.</p>`,
k:"The estimate is the baseline for the cost model, the function costs and every proposal's savings."},
{t:"Anatomy of an estimate", ref:"AACE terminology · USACE UFC 3-740-05 · Caltrans PDPM Chapter 20",
h:`<p>Most construction estimates build up in layers:</p>
<ol><li><b>Direct costs</b>: labor, materials and equipment for the work items.</li>
<li><b>Indirect costs</b>: site supervision, temporary facilities, mobilization.</li>
<li><b>Markups</b>: contractor overhead, profit, bond and insurance.</li>
<li><b>Contingency</b>: for uncertainty in the defined scope.</li>
<li><b>Escalation</b>: price growth to the time of construction.</li></ol>
<p>A unit price from bid history already includes the contractor's indirects and markups. A cost built up from crews does not, until they are added.</p>`,
k:"Know which layers a number includes before comparing it with another number."},
{t:"Estimate classes and accuracy", ref:"AACE RP 17R-97 and 18R-97 · ASTM E2516 · USACE ER 1110-2-1302",
h:`<p>AACE classifies estimates from <b>Class 5</b> (least defined) to <b>Class 1</b> (most defined). The class is set by how mature the project definition is, not by how much effort went into the estimate.</p>
<ul><li><b>Class 5</b>: 0% to 2% definition, concept screening. Typical range about -20% to -50% on the low side and +30% to +100% on the high side.</li>
<li><b>Class 3</b>: budget authorization.</li>
<li><b>Class 1</b>: near-complete definition, with a range of a few percent to about +15%.</li></ul>
<p>USACE uses the same classes: Class 4 and 5 for comparing alternatives, Class 3 for the baseline estimate.</p>`,
k:"An early estimate has a wide range. A detailed calculation on an undefined scope is still an early estimate."},
{t:"Estimating methods by stage", ref:"AASHTO Practical Guide to Cost Estimating · Caltrans PDPM Chapter 20",
h:`<p>The method follows the information available:</p>
<ul><li><b>Parametric</b>: cost per lane-mile, per square foot or per station, from past projects. Used at planning.</li>
<li><b>Historical bid-based</b>: quantities times unit prices from recent bids. The standard for highway design estimates.</li>
<li><b>Cost-based</b>: crews, production rates, material quotes and equipment built up for each item. Used for unusual work and by contractors.</li></ul>
<p>The VMF 2 material names the stages on building projects: concept, schematic (15% to 25%), design development (50%), pre-construction (75%) and construction documents (90% to 100%).</p>`,
k:"Parametric early, bid-based in design, cost-based where history does not apply."},
{t:"How estimates are organized", ref:"FTA Standard Cost Categories · ASTM E1557 UniFormat II · CSI MasterFormat · Agency bid item lists",
h:`<p>The same project cost can be sorted several ways:</p>
<ul><li><b>Bid items</b>: highway estimates, by standard pay item.</li>
<li><b>UniFormat</b>: buildings, by system (substructure, shell, interiors, services).</li>
<li><b>MasterFormat</b>: buildings, by trade and specification division.</li>
<li><b>FTA Standard Cost Categories</b>: transit, in ten categories from 10 Guideway and Track through 100 Finance Charges.</li></ul>
<p>System-based structures such as UniFormat and the FTA categories are closer to functions than trade-based ones, which makes them easier to use for cost models.</p>`,
k:"Ask for the estimate sorted by system if it exists. It maps to functions more directly than a trade breakdown."},
{t:"Client formats", ref:"Caltrans PDPM Chapter 20 · FTA SCC Workbook · UFC 3-740-05 · UFC 3-701-01",
h:`<ul><li><b>Caltrans</b>: project planning and project design cost estimates under PDPM Chapter 20, with roadway, structure and right of way sections; the BEES system holds the item estimate at PS&amp;E.</li>
<li><b>Sound Transit and other FTA sponsors</b>: the Standard Cost Category workbook, required for Capital Investment Grant projects, in base-year and year-of-expenditure dollars.</li>
<li><b>USACE and NAVFAC</b>: programming estimates on the DD Form 1391 using DoD unit cost guidance, then detailed estimates under UFC 3-740-05. USACE civil works adds a total project cost summary.</li></ul>`,
k:"Each client has a standard format. Learn where contingency, escalation and soft costs sit in it."},
{t:"Cost models and the Pareto principle", ref:"SAVE Core Competency 4.B.7 · VM Guide 5.4.7",
h:`<p>A <b>cost model</b> rearranges the estimate to show where the money is. The usual form is a bar chart of elements in descending order with a cumulative line: a Pareto chart.</p>
<p>The pattern is consistent: roughly 20% of the items carry roughly 80% of the cost. USACE cost guidance uses the same principle to focus risk analysis on the critical items.</p>
<p>Build the model from the estimate's own structure first, then re-sort by function in the Function Analysis Phase. Showing the model on day one gives the team a common picture of the cost drivers.</p>`,
k:"Sort the estimate from largest to smallest. The first few bars are where the study will spend its time."},
{t:"Contingency in the estimate", ref:"Caltrans PDPM Chapter 20 · FTA SCC definitions",
h:`<p>Contingency appears in different forms:</p>
<ul><li><b>Percentage contingency</b>: applied to the subtotal, falling as design advances. Caltrans recommends percentages by estimate stage and asks that anything higher be justified with quantified risks.</li>
<li><b>Allocated contingency</b>: within each cost category, for that category's uncertainty (FTA).</li>
<li><b>Unallocated contingency</b>: for the project as a whole (FTA category 90).</li>
<li><b>Risk-based contingency</b>: from a quantitative analysis at a chosen confidence level.</li></ul>
<p>When pricing a VE proposal, apply the same contingency rule to both sides unless the proposal changes the uncertainty.</p>`,
k:"Find every contingency line and what it is for. Apply it consistently to baseline and proposal."},
{t:"Escalation and year-of-expenditure dollars", ref:"FHWA Major Project financial plan guidance · FTA SCC Workbook",
h:`<p>An estimate is priced in the dollars of a particular date. Construction happens later.</p>
<ul><li><b>Base-year (constant) dollars</b>: today's prices.</li>
<li><b>Year-of-expenditure (YOE) dollars</b>: each year's spending inflated to that year.</li></ul>
<p>FHWA financial plans and FTA cost workbooks use YOE dollars. Escalation is usually applied to the midpoint of construction.</p>
<p>For VE, compare options in the same dollars. A proposal that shortens the schedule saves escalation as well as direct cost, which only shows up in YOE terms.</p>`,
k:"Check the dollar basis. Schedule savings appear as escalation savings in year-of-expenditure dollars."},
{t:"Construction cost and total project cost", ref:"23 CFR 627.3 · Caltrans PDPM Chapter 20 · FTA Standard Cost Categories",
h:`<p>The construction estimate is only part of what the owner pays.</p>
<ul><li><b>Highway</b>: total project cost includes environmental, design, right of way, utilities and construction. Caltrans separates capital cost from support cost.</li>
<li><b>Transit</b>: FTA categories 60 (right of way), 70 (vehicles), 80 (professional services), 90 and 100 sit beside construction categories 10 to 50.</li>
<li><b>Military</b>: the programmed amount includes supervision, inspection and overhead and contingency on top of the construction cost.</li></ul>
<p>VE proposals that change right of way, design effort or owner staffing have value outside the construction estimate.</p>`,
k:"Savings in right of way, design or owner cost are real even though the construction estimate does not show them."}
],
mid:[
{s:"Layers", q:"A unit price taken from recent bid results includes which costs?",
 o:["Direct cost only","Direct cost plus the contractor's indirects and markups","Owner contingency","Design fees"], a:1,
 e:"Bid prices are what contractors charged, so they include overhead and profit. Crew-based costs do not until markups are added."},
{s:"Classes", q:"What determines an AACE estimate class?",
 o:["Hours spent estimating","Maturity of project definition","The software used","The estimator's seniority"], a:1,
 e:"Class is driven by how well the project is defined."},
{s:"Structure", q:"Which structure organizes transit project cost into categories such as Guideway, Stations and Systems?",
 o:["MasterFormat","FTA Standard Cost Categories","BEES","DD Form 1391"], a:1,
 e:"The FTA SCC runs from 10 Guideway and Track Elements through 100 Finance Charges."}
],
quiz:[
{s:"Use", q:"In which phase does the VE team first use the estimate to build a cost model?",
 o:["Creativity","Information","Presentation","Implementation"], a:1,
 e:"Cost information is reviewed and transformed in the Information Phase."},
{s:"Layers", q:"Which layer covers price growth between the estimate date and construction?",
 o:["Contingency","Escalation","Profit","Indirect cost"], a:1,
 e:"Escalation adjusts for time. Contingency covers uncertainty in scope."},
{s:"Classes", q:"Which estimate class has the widest expected accuracy range?",
 o:["Class 1","Class 3","Class 5","All are equal"], a:2,
 e:"Class 5 is based on 0% to 2% definition and can range to +100% on the high side."},
{s:"Methods", q:"Which method is standard for a highway design estimate?",
 o:["Parametric cost per mile","Quantities times historical bid unit prices","Vendor guess","Top-down budget split"], a:1,
 e:"Historical bid-based estimating is the usual highway method once quantities exist."},
{s:"Methods", q:"An item has no bid history because the work is unusual. Which method applies?",
 o:["Parametric","Cost-based, from crews, production and materials","Ignore it","Use the nearest item"], a:1,
 e:"Cost-based estimating builds the price from its components."},
{s:"Structure", q:"Why is a system-based breakdown such as UniFormat useful to a VE team?",
 o:["It is shorter","Systems map more directly to functions than trades do","It removes markups","It is required by SAVE"], a:1,
 e:"A system such as shell or services corresponds to what the building does."},
{s:"Cost model", q:"What does a Pareto cost model show?",
 o:["Items in alphabetical order","Items from largest to smallest with a cumulative total","Only contingency","The bid schedule"], a:1,
 e:"It makes the few high-cost items visible."},
{s:"Contingency", q:"In FTA estimates, where is contingency for the project as a whole carried?",
 o:["Category 10","Category 90, unallocated contingency","Category 60","It is not carried"], a:1,
 e:"Allocated contingency sits within categories; unallocated contingency is category 90."},
{s:"Escalation", q:"What does year-of-expenditure mean?",
 o:["Today's prices","Each year's spending stated in that year's inflated dollars","Last year's bids","Design-year traffic"], a:1,
 e:"YOE dollars include escalation to when the money is spent."},
{s:"Total cost", q:"A proposal eliminates a $3M right of way acquisition and changes nothing in construction. Where is the saving?",
 o:["Nowhere","In total project cost, outside the construction estimate","In contractor profit","In escalation only"], a:1,
 e:"Total project cost includes right of way, design and other non-construction costs."}
]},

/* ============================== INTERMEDIATE ============================== */
i:{ title:"Pricing VM proposals",
lessons:[
{t:"Estimating the difference", ref:"SAVE Core Competencies 8.A.3, 8.B.1 · VM Guide 9.3.2, 9.4.1",
h:`<p>A proposal's cost effect is a comparison:</p>
<div class="formula">Savings = Baseline cost of affected work − Proposed cost of affected work</div>
<p>Rules that keep the comparison sound:</p>
<ul><li>Price only what changes, on both sides.</li>
<li>Use the same unit price source, date and markups for both.</li>
<li>Take baseline quantities and prices from the project estimate where possible, so the baseline reconciles to it.</li>
<li>Include work the proposal adds, not only what it removes.</li></ul>`,
k:"Same scope boundary, same price basis, same markups on both sides."},
{t:"Quantities and unit prices", ref:"Agency bid history databases · Caltrans Contract Cost Data · Estimating references",
h:`<p><b>Quantities</b> come from the plans. For the proposed side the team makes a quick takeoff from its sketch and states the assumptions.</p>
<p><b>Unit prices</b> in order of preference:</p>
<ol><li>the project estimate, for items already in it</li>
<li>agency bid history for the same item, similar quantity and region</li>
<li>recent comparable projects</li>
<li>supplier quotes or published cost data</li>
<li>a cost-based build-up</li></ol>
<p>Unit prices fall as quantity rises. A proposal that halves a quantity may not halve the cost.</p>`,
k:"Use the project estimate's own prices first, and watch for quantity effects on unit price."},
{t:"Applying markups", ref:"Project estimate basis · UFC 3-740-05",
h:`<p>If the baseline estimate adds markups after the direct cost, a proposal's savings need the same treatment.</p>
<p>Example: direct savings of $1,000,000 with 10% indirects, 10% overhead and profit, and 15% contingency applied in sequence:</p>
<div class="formula">$1,000,000 × 1.10 × 1.10 × 1.15 = $1,391,500</div>
<p>Quoting only the $1.0M understates the effect on the project budget; applying markups to a bid-based unit price that already includes them overstates it. State which markups were applied.</p>`,
k:"Carry savings through the same markup chain as the estimate, once."},
{t:"A cost-based check", ref:"Cost-based estimating practice · UFC 3-740-05",
h:`<p>When no unit price fits, build one:</p>
<div class="formula">Unit cost = (Crew cost per hour ÷ Production per hour) + Material + Equipment</div>
<p>Example: a crew costing $600 per hour places 20 cubic yards per hour, so labor is $30 per cubic yard. Add $150 material and $10 equipment for $190 direct, before markups.</p>
<p>A rough build-up is also a check on an unfamiliar bid price. If the two differ widely, find out what the bid price includes.</p>`,
k:"Crew cost divided by production gives labor per unit. It is a quick test of any unit price."},
{t:"Allocating cost to functions", ref:"SAVE Core Competencies 5.A.5, 5.B.4 · VM Guide 6.3.2, 6.4.3",
h:`<p>The function resource matrix distributes each estimate line to the functions it serves.</p>
<ul><li>Start from the cost model rows.</li>
<li>For each row, ask what portion of the cost exists for each function.</li>
<li>Allocate on evidence. The premium for stainless over carbon steel is the cost of <i>resist corrosion</i>.</li>
<li>Include related costs: the cost of <i>condition space</i> includes the electrical and controls that serve the mechanical equipment.</li></ul>
<p>The matrix must total to the estimate. If it does not, something was missed or counted twice.</p>`,
k:"Function costs must add back to the estimate total."},
{t:"Time value of money", ref:"SAVE Core Competency 8.B.4 · VM Guide 9.4.4 · OMB Circular A-94",
h:`<p>Costs at different times are compared by converting them to <b>present worth</b>.</p>
<div class="formula">Present worth of a future cost = F ÷ (1 + i)^n</div>
<p>where <i>i</i> is the discount rate and <i>n</i> the number of years.</p>
<ul><li>A <b>real</b> discount rate excludes inflation and is used with constant dollars.</li>
<li>Federal analyses take rates from OMB Circular A-94; agencies publish their own.</li>
<li>Recurring annual costs are converted with a uniform series factor.</li></ul>
<p>Example: $100,000 in 10 years at 3% has a present worth of about $74,400.</p>`,
k:"Discount future costs to today before adding them to initial cost."},
{t:"A life-cycle cost comparison", ref:"SAVE Core Competency 8.B.4 · 23 U.S.C. 106(f) · VMF 2 life-cycle cost material",
h:`<p>Steps:</p>
<ol><li>Set the analysis period and discount rate, the same for all alternatives.</li>
<li>List initial cost, annual operation and maintenance, and periodic repair or replacement for each.</li>
<li>Convert all to present worth and total.</li></ol>
<p>Example over 20 years at 3% (uniform series factor about 14.88):</p>
<ul><li>A: $1,000,000 initial + $50,000 per year → $1,000,000 + $744,000 = $1,744,000</li>
<li>B: $1,200,000 initial + $30,000 per year → $1,200,000 + $446,000 = $1,646,000</li></ul>
<p>B costs more to build and about $98,000 less to own.</p>`,
k:"Same period, same rate, all costs in present worth. The lower total is the lower life-cycle cost."},
{t:"Payback and return on investment", ref:"SAVE Core Competencies 8.B.2, 8.B.3 · VM Guide 9.4.2, 9.4.3",
h:`<p>When a proposal costs more up front and saves later, two quick measures help decision-makers:</p>
<div class="formula">Simple payback = Added investment ÷ Annual savings</div>
<p>From the example above: $200,000 more up front saves $20,000 per year, a 10-year simple payback.</p>
<div class="formula">ROI = Net benefit ÷ Investment</div>
<p>Over 20 years the undiscounted savings are $400,000, a net benefit of $200,000 on $200,000 invested: 100%.</p>
<p>Simple payback ignores the time value of money, so it complements life-cycle cost and does not replace it.</p>`,
k:"Payback and ROI are quick summaries. Present worth is the full comparison."},
{t:"Costs a proposal creates", ref:"SAVE Core Competency 8.A.3 · VM Guide 9.3.2",
h:`<p>Net savings are less than gross savings by the cost of making the change:</p>
<ul><li><b>Redesign</b>: designer fee and review time.</li>
<li><b>Schedule</b>: delay to advertise or award, with escalation and overhead.</li>
<li><b>Re-approval</b>: environmental re-evaluation, permits, third-party agreements.</li>
<li><b>Testing or mock-ups</b> for unproven solutions.</li></ul>
<div class="formula">Net savings = Gross savings − Implementation cost</div>
<p>The VMF 2 material lists estimating implementation costs as part of the business case. Leaving them out is a common reason accepted proposals show smaller results later.</p>`,
k:"Report net savings. State redesign, schedule and approval costs beside the gross figure."},
{t:"Documenting the estimate", ref:"SAVE Core Competency 8.B.1 · VM Guide 9.4.1",
h:`<p>Each proposal's cost page should let a reviewer rebuild the number:</p>
<ul><li>quantities with their source or sketch reference</li>
<li>unit prices with source and date</li>
<li>markups applied</li>
<li>assumptions and exclusions</li>
<li>initial cost, life-cycle cost and implementation cost shown separately</li></ul>
<p><b>Rounding</b>: workshop estimates are approximate. Reporting $1,391,500 implies precision the estimate does not have; $1.4M is a fairer statement.</p>
<p>The designer and the owner's estimator will check these numbers. Traceable ones survive the check.</p>`,
k:"Show quantities, prices, markups and assumptions. Round to the precision the estimate supports."}
],
mid:[
{s:"Comparison", q:"Which rule keeps a proposal's savings estimate sound?",
 o:["Use the lowest price found for the proposal","Use the same price basis and markups for baseline and proposal","Price the whole project again","Leave out added work"], a:1,
 e:"Both sides must be priced on the same basis within the same scope boundary."},
{s:"Markups", q:"Direct savings are $500,000. The estimate applies 10% indirects and then 20% contingency. What is the marked-up saving?",
 o:["$500,000","$650,000","$660,000","$600,000"], a:2,
 e:"$500,000 × 1.10 × 1.20 = $660,000."},
{s:"Cost-based", q:"A crew costs $800 per hour and installs 40 linear feet per hour. What is the labor cost per foot?",
 o:["$2","$20","$40","$200"], a:1,
 e:"$800 / 40 = $20 per linear foot."}
],
quiz:[
{s:"Unit prices", q:"What is the preferred source for the price of an item already in the project estimate?",
 o:["A national average","The project estimate itself","The highest recent bid","A supplier catalog"], a:1,
 e:"Using the estimate's own prices keeps the baseline reconciled to the project estimate."},
{s:"Unit prices", q:"A proposal cuts a quantity in half. Why might cost not fall by half?",
 o:["Markups double","Unit prices tend to rise as quantity falls","Escalation stops","Contingency is removed"], a:1,
 e:"Smaller quantities usually carry higher unit prices."},
{s:"Markups", q:"What goes wrong if markups are applied to a bid-based unit price?",
 o:["Nothing","Overhead and profit are counted twice","Savings are understated","Escalation is lost"], a:1,
 e:"Bid prices already include the contractor's markups."},
{s:"Function cost", q:"After allocating cost to functions, what should the matrix total equal?",
 o:["Zero","The estimate total for the scope covered","The budget","The lowest bid"], a:1,
 e:"If it does not reconcile, cost was missed or double counted."},
{s:"Function cost", q:"A part is stainless steel only to resist corrosion. How much of its cost belongs to that function?",
 o:["All of it","The premium over the carbon steel alternative","None","Half"], a:1,
 e:"The cost difference attributable to the function is what is allocated to it."},
{s:"Present worth", q:"What is the present worth of $50,000 spent 10 years from now at a 3% discount rate (factor 0.744)?",
 o:["$37,200","$50,000","$65,000","$74,400"], a:0,
 e:"$50,000 × 0.744 = $37,200."},
{s:"LCC", q:"Alternative A is analyzed over 20 years and B over 40. What must be fixed before comparing?",
 o:["Nothing","A common analysis period and discount rate","The font","The initial cost"], a:1,
 e:"Alternatives must share the analysis period and the rate."},
{s:"LCC", q:"Over 20 years at 3% (factor 14.88), what is the present worth of $10,000 per year in maintenance?",
 o:["$100,000","$148,800","$200,000","$297,600"], a:1,
 e:"$10,000 × 14.88 = $148,800."},
{s:"Payback", q:"A proposal costs $300,000 more to build and saves $25,000 per year. What is the simple payback?",
 o:["8 years","12 years","25 years","30 years"], a:1,
 e:"$300,000 / $25,000 = 12 years."},
{s:"Net savings", q:"Gross savings are $2.0M, redesign costs $150,000 and a two-month delay costs $250,000. What are net savings?",
 o:["$2.0M","$1.85M","$1.6M","$1.75M"], a:2,
 e:"$2,000,000 - $150,000 - $250,000 = $1,600,000."}
]},

/* ============================== ADVANCED ============================== */
a:{ title:"Estimate review and judgment",
lessons:[
{t:"Reconciling two estimates", ref:"23 CFR 635.506 · Contract Types world · Agency ICE procedures",
h:`<p>On CM/GC and progressive design-build projects, and in FHWA and USACE reviews, two estimates of the same work are compared. Reconciliation goes line by line:</p>
<ul><li><b>Quantities</b>: same takeoff basis?</li>
<li><b>Production rates</b>: where most large gaps originate.</li>
<li><b>Material and subcontract quotes</b></li>
<li><b>Risk and contingency</b>: is it in the line or held separately?</li>
<li><b>Scope</b>: is each estimator pricing the same thing?</li></ul>
<p>For a VE team, the reconciled items are the firmest cost data available, and the unreconciled ones mark where cost is uncertain.</p>`,
k:"Estimate gaps usually trace to production, risk or scope assumptions. Each unresolved gap is an uncertainty to study."},
{t:"Market conditions", ref:"Caltrans PDPM Chapter 20 · Agency bid analysis",
h:`<p>Historical prices describe past markets. Bids respond to current ones:</p>
<ul><li>number of bidders, and how busy they are</li>
<li>labor availability and wage movement</li>
<li>volatile materials such as steel, asphalt binder and fuel</li>
<li>contract size, duration, location and work restrictions</li></ul>
<p>Caltrans directs estimators to compare estimates with bids received. A VE team can use the same information: proposals that widen the pool of capable bidders, or reduce dependence on a volatile material, have value that a static unit price does not show.</p>`,
k:"A unit price is a market outcome. Proposals that improve competition or reduce exposure to volatile inputs add value."},
{t:"Base cost and risk-based estimating", ref:"WSDOT Project Risk Management Guide · FHWA Cost Estimate Review guidance · Risk Training track",
h:`<p>Risk-based estimating separates the estimate into two parts:</p>
<ul><li><b>Base cost</b>: the most probable cost if the project goes as planned, without contingency.</li>
<li><b>Risk</b>: threats and opportunities with probabilities and impacts.</li></ul>
<p>The result is a range. FHWA uses the 70th percentile for major project financial plans; USACE uses the 80%.</p>
<p>For VE on these projects, price proposals against the <b>base</b>, and report any change to risk separately. Taking savings from a number that already includes contingency overstates them unless the contingency really changes.</p>`,
k:"On risk-based estimates, measure savings against base cost and report the risk effect separately."},
{t:"Uncertainty in escalation", ref:"FHWA financial plan guidance · FTA SCC Workbook",
h:`<p>Escalation is a forecast. On long projects it can be one of the largest lines in the estimate, and a small change in the assumed rate moves the total.</p>
<ul><li>Check the rate and the schedule the escalation assumes.</li>
<li>Compare alternatives in base-year dollars first, then show the YOE effect.</li>
<li>Schedule-shortening proposals should state the escalation avoided, with the rate used.</li></ul>
<p>FHWA Cost Estimate Reviews treat inflation as an input with its own range. A proposal's escalation saving carries the same uncertainty.</p>`,
k:"Show savings in constant dollars and in year-of-expenditure dollars, and state the escalation rate."},
{t:"Overlapping proposals", ref:"SAVE Core Competency 9.A.3 · Caltrans PDPM Chapter 19 (VA sets)",
h:`<p>Proposal savings cannot always be added.</p>
<ul><li><b>Mutually exclusive</b>: two proposals change the same element in different ways. Only one can be taken.</li>
<li><b>Overlapping</b>: one proposal reduces the quantity another prices. The second saves less once the first is taken.</li>
<li><b>Dependent</b>: one only works if another is accepted.</li></ul>
<p>The report should give a combined figure for a compatible set, costed as a whole. Caltrans calls these VA sets. A headline total that sums every proposal overstates what can be achieved.</p>`,
k:"Never sum all proposals. Report the savings of compatible combinations, costed together."},
{t:"Savings, avoidance and what gets reported", ref:"OMB Circular A-131 · 23 CFR 627 · Agency VE reporting",
h:`<p>Programs report VE results to FHWA or under OMB Circular A-131, and the categories matter:</p>
<ul><li><b>Proposed savings</b>: the team's estimate at presentation.</li>
<li><b>Accepted savings</b>: after the owner's decisions.</li>
<li><b>Realized savings</b>: confirmed in the final design or bid.</li>
<li><b>Cost avoidance</b>: preventing a future cost increase, not reducing a budgeted amount.</li></ul>
<p>Keep performance improvements and added-cost proposals in the record too. A study whose accepted proposals add cost and raise performance has improved value, and a savings-only tally would show it as negative.</p>`,
k:"Separate proposed, accepted and realized. Report value-adding proposals even when they cost more."},
{t:"Costs outside the agency budget", ref:"23 U.S.C. 106(e) and 106(f) · FHWA work zone road user cost guidance",
h:`<p>Some costs fall on users or the public, not the owner:</p>
<ul><li><b>Road user costs</b>: delay, vehicle operating cost and crashes during construction.</li>
<li><b>Service disruption</b>: lost transit service or facility downtime.</li>
<li><b>Business and community impacts</b></li></ul>
<p>The federal highway statute names reducing time to complete the project as a purpose of VE, and life-cycle cost includes user-side effects in pavement analysis.</p>
<p>Report these beside agency cost, not mixed into it. A proposal that costs the agency more and saves users far more is a decision the owner should see laid out both ways.</p>`,
k:"Quantify user costs and show them separately from agency cost."},
{t:"Benchmarks and sanity checks", ref:"FTA Capital Cost Database · UFC 3-701-01 · Agency cost data",
h:`<p>Before trusting a detailed number, test it against a coarse one:</p>
<ul><li>cost per square foot for the building type (DoD publishes unit costs and area cost factors)</li>
<li>cost per mile or per station against FTA's capital cost database, which FTA notes is not intended for detailed estimating</li>
<li>cost per lane-mile or per square foot of bridge deck from agency history</li></ul>
<p>A benchmark will not price a proposal. It will show when a baseline element is far outside the normal range, which is a finding for the Information Phase and a pointer to a function worth studying.</p>`,
k:"Benchmarks flag elements that cost far more than comparable projects. They locate questions, not answers."},
{t:"Estimating inside negotiated delivery", ref:"Contract Types world · GSAM 536.71 · 23 CFR 635 Subpart E",
h:`<p>Under CM/GC, CMc, ECI and progressive design-build the cost information changes:</p>
<ul><li><b>Open-book</b>: the builder's quantities, production, quotes, contingency and fee are visible.</li>
<li><b>Live pricing</b>: the builder can price a proposal during the workshop.</li>
<li><b>Independent check</b>: the ICE prices the same proposal.</li></ul>
<p>Savings are measured against a price still being negotiated. The proposal page should state which estimate it used, and whether the saving is in cost of the work, in contractor contingency or in fee, because each is treated differently when the GMP or agreed price is set.</p>`,
k:"With open-book pricing, say where the saving sits: cost of work, contingency or fee."},
{t:"Common errors", ref:"SAVE Core Competency 8.A.4 · VM Guide 9.3.3",
h:`<p>A review checklist for proposal estimates:</p>
<ul><li>baseline does not reconcile to the project estimate</li>
<li>added work left out of the proposed side</li>
<li>markups applied to one side only, or twice</li>
<li>different price dates or sources for the two sides</li>
<li>life-cycle costs with different periods or rates</li>
<li>implementation cost omitted</li>
<li>savings summed across overlapping proposals</li>
<li>contingency removed without a change in risk</li>
<li>false precision</li></ul>
<p>The team review before presentation is the place to catch these.</p>`,
k:"Most estimate errors in VE proposals are inconsistencies between the two sides of the comparison."}
],
mid:[
{s:"Reconciliation", q:"Where do the largest gaps between two estimates of the same work usually originate?",
 o:["Font and format","Production rates, risk pricing and scope assumptions","Sales tax","Sheet count"], a:1,
 e:"Line-by-line reconciliation most often finds different production, risk or scope assumptions."},
{s:"Risk-based", q:"On a project with a risk-based estimate, what should a proposal's savings be measured against?",
 o:["The P70 total","The base cost, with any risk change reported separately","The budget","Last year's estimate"], a:1,
 e:"Savings taken from a figure that includes contingency are overstated unless the contingency changes."},
{s:"Overlap", q:"Proposal 4 removes a wall. Proposal 9 changes that wall's facing. How are their savings combined?",
 o:["Added together","They are mutually exclusive; only one can be in a set","Averaged","Doubled"], a:1,
 e:"Two proposals that change the same element in incompatible ways cannot both be taken."}
],
quiz:[
{s:"Reconciliation", q:"What do unreconciled items between a contractor's estimate and the ICE tell a VE team?",
 o:["Nothing","Where the cost is uncertain and worth studying","That the ICE is wrong","That the contractor is wrong"], a:1,
 e:"An unresolved gap marks an assumption the parties see differently."},
{s:"Market", q:"A proposal lets more contractors bid by removing a specialized method. How does that create value?",
 o:["It does not","More competition tends to lower bid prices","It raises markups","It adds contingency"], a:1,
 e:"Unit prices are market outcomes. Wider competition affects them."},
{s:"Escalation", q:"A proposal shortens construction by eight months. How should the escalation saving be reported?",
 o:["Not reported","Stated separately, with the rate used","Added silently to direct savings","As contingency"], a:1,
 e:"Escalation is a forecast. Showing it separately with its rate keeps the number checkable."},
{s:"Overlap", q:"Proposal A reduces excavation by 30%. Proposal B lowers the unit cost of excavation. If both are accepted, what happens to B's savings?",
 o:["Unchanged","They shrink, because B now applies to a smaller quantity","They double","They become negative"], a:1,
 e:"Overlapping proposals must be costed together."},
{s:"Reporting", q:"Which figure reflects the owner's decisions on the proposals?",
 o:["Proposed savings","Accepted savings","Gross savings","Target savings"], a:1,
 e:"Proposed is the team's figure; accepted follows the owner's dispositions; realized is confirmed later."},
{s:"Reporting", q:"A study's accepted proposals add $2M and raise capacity and reliability. How should the result be recorded?",
 o:["As a failed study","As a value improvement: added cost with the performance gain documented","As zero","It should be omitted"], a:1,
 e:"Value can improve when performance rises more than cost."},
{s:"User costs", q:"How should road user cost savings be shown?",
 o:["Mixed into construction savings","Separately from agency cost","Not at all","As contingency"], a:1,
 e:"The owner should see agency cost and user cost effects side by side."},
{s:"Benchmarks", q:"What is a benchmark such as cost per square foot good for in a VE study?",
 o:["Pricing a proposal in detail","Flagging baseline elements far outside the normal range","Replacing the estimate","Setting the bid"], a:1,
 e:"Benchmarks locate questions. FTA notes its cost database is not for detailed estimating."},
{s:"Open-book", q:"Under a negotiated price, why state whether a saving is in cost of work, contingency or fee?",
 o:["For formatting","Each is treated differently when the price is set","SAVE requires it","To raise the fee"], a:1,
 e:"A saving only reaches the owner if the corresponding part of the price changes."},
{s:"Errors", q:"A proposal removes the 15% contingency from its side of the comparison without changing any risk. What is this?",
 o:["A valid saving","An error: contingency should be applied consistently unless risk changes","A markup","Escalation"], a:1,
 e:"Dropping contingency on one side inflates the savings."}
]}
},
notes:[
{h:"AACE classes and ASTM E2516", p:"AACE RP 17R-97 sets the generic five-class system; 18R-97 applies it to process industries and 56R-08 to building and general construction. ASTM E2516 is the corresponding standard, and USACE ER 1110-2-1302 cites it.", src:"AACE International; ASTM E2516; USACE cost engineering webinar (2020)"},
{h:"FTA Standard Cost Categories", p:"10 Guideway and Track Elements; 20 Stations, Stops, Terminals, Intermodal; 30 Support Facilities; 40 Sitework and Special Conditions; 50 Systems; 60 ROW, Land, Existing Improvements; 70 Vehicles; 80 Professional Services; 90 Unallocated Contingency; 100 Finance Charges.", src:"FTA TrAMS scope codes; FTA SCC Workbook"},
{h:"Caltrans PDPM Chapter 20", p:"Retitled Project Capital Cost Estimates in the 29 February 2024 edition. It sets recommended contingency by estimate stage and asks that higher percentages be justified with quantified risks. Companion guidance was formerly Appendix AA.", src:"Caltrans PDPM Chapter 20; Caltrans Cost Estimating Guidance (2024)"},
{h:"Worked examples", p:"The numerical examples in this track are illustrative and were written for this app. Factors used: single payment present worth at 3% for 10 years = 0.744; uniform series present worth at 3% for 20 years = 14.88.", src:"Author note"},
{h:"Verify with the client", p:"Specific contingency percentages, current discount rates, NAVFAC estimating tools and the exact AACE accuracy ranges for building and infrastructure estimates (56R-08 and related) were not confirmed from primary documents this session.", src:"Author note"}
]
};
