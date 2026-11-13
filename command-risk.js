/* VE Command — Risk Training. Tiers b, i, a. Risk for VE team members and facilitators, across client types. */
window.VE = window.VE || {};
VE.command = VE.command || {};
VE.command.risk = {
id:"risk", name:"Risk Training", glyph:"R",
blurb:"Risk registers, scoring, quantitative analysis and how risk enters a VE study, with each client's rules.",
tiers:{
/* ============================== BEGINNER ============================== */
b:{ title:"Risk basics for VE teams",
lessons:[
{t:"What risk is", ref:"Caltrans PD-09 · PMBOK Guide · ISO 31000",
h:`<p>A risk is an <b>uncertain event or condition that, if it occurs, has an effect on a project objective</b>. Caltrans' directive adds that the effect can be negative (a <b>threat</b>) or positive (an <b>opportunity</b>).</p>
<p>Three parts make something a risk:</p>
<ul><li>it has not happened yet</li>
<li>it may or may not happen</li>
<li>if it does, cost, schedule, scope or performance changes</li></ul>
<p>Something that has already happened is an <b>issue</b>, and is managed, not assessed.</p>`,
k:"A risk is uncertain and in the future. If it has already happened, it is an issue."},
{t:"Writing a risk statement", ref:"Caltrans Project Risk Management Handbook, Chapter 3 · WSDOT Project Risk Management Guide",
h:`<p>A vague risk cannot be scored or managed. A usable statement has three parts:</p>
<div class="formula">Because of [cause], [event] may occur, leading to [effect on objective]</div>
<p>Example: <i>Because borings are widely spaced, rock may be found above foundation grade, leading to added excavation cost and a two-month delay.</i></p>
<p>Compare with <i>geotechnical risk</i>, which names a topic but gives nothing to estimate or respond to.</p>`,
k:"Cause, event, effect. A topic heading is not a risk."},
{t:"The risk register", ref:"SAVE Core Competency 4.B.8 · VM Guide 5.4.8 · Caltrans Project Risk Management Handbook 3-1",
h:`<p>The <b>risk register</b> is the list of identified risks and what is known about each. Typical columns:</p>
<ul><li>identifier and risk statement</li>
<li>probability and impact (cost, time)</li>
<li>score or rank</li>
<li>response strategy and actions</li>
<li>owner</li><li>status</li></ul>
<p>A VE team should ask for the register in the pre-study data package. If none exists, a short risk identification session in the Information Phase produces a working one.</p>`,
k:"Ask for the risk register before the workshop. It is a ready-made list of where the project is uncertain."},
{t:"Scoring: probability and impact", ref:"Caltrans Project Risk Management Handbook, Chapters 4 and 5 · PMBOK Guide",
h:`<p><b>Qualitative</b> scoring rates each risk on two scales and combines them:</p>
<ul><li><b>Probability</b>: how likely, for example very low to very high.</li>
<li><b>Impact</b>: how large the effect on cost or time if it happens.</li></ul>
<div class="formula">Risk score = Probability rating × Impact rating</div>
<p>Plotting the two on a matrix sorts risks into high, medium and low. The definitions of each rating must be agreed first; <i>high impact</i> on a $5M project and on a $500M project are different amounts.</p>`,
k:"Score needs both likelihood and consequence. Define the rating scales before scoring."},
{t:"Where risk enters the VM Job Plan", ref:"SAVE Core Competencies 4.A.9, 4.B.8, 5.A.6 · VM Guide 5.3.5, 5.4.8, 6.3.3",
h:`<ul><li><b>Preparation</b>: request the risk register and learn the sponsor's risk concerns.</li>
<li><b>Information</b>: review and transform risk information; rank the top risks.</li>
<li><b>Function Analysis</b>: link top risks to the functions they threaten. High-risk functions can be prioritized alongside high-cost ones.</li>
<li><b>Creativity</b>: brainstorm ways to perform those functions with less exposure.</li>
<li><b>Evaluation and Development</b>: rate each idea's effect on risk; state it in the proposal.</li>
<li><b>Presentation</b>: report risk reduced as part of value improvement.</li></ul>`,
k:"Risk is one of the kinds of information the team transforms, and one of the reasons a function is prioritized."},
{t:"Response strategies", ref:"PMBOK Guide · Caltrans Project Risk Management Handbook, Chapter 7",
h:`<p>For <b>threats</b>:</p>
<ul><li><b>Avoid</b>: change the plan so the risk cannot occur.</li>
<li><b>Transfer</b>: move it to another party, by contract or insurance.</li>
<li><b>Mitigate</b>: reduce probability or impact.</li>
<li><b>Accept</b>: carry it, with or without contingency.</li></ul>
<p>For <b>opportunities</b> the mirror strategies are exploit, share, enhance and accept.</p>
<p>Many VE proposals are risk responses in other words. Eliminating a deep excavation <i>avoids</i> a groundwater risk. Adding borings <i>mitigates</i> a ground risk.</p>`,
k:"Avoid, transfer, mitigate, accept. A VE proposal that removes a risky element is an avoidance response."},
{t:"Contingency", ref:"Caltrans PDPM Chapter 20 · FTA Standard Cost Categories · AACE terminology",
h:`<p><b>Contingency</b> is money or time held for uncertainty within the defined scope. It is not for added scope.</p>
<ul><li>Early estimates often apply a percentage that falls as design matures.</li>
<li>Larger projects size contingency from the identified risks.</li>
<li>FTA estimates carry <b>allocated</b> contingency within each cost category and <b>unallocated</b> contingency for the project as a whole.</li></ul>
<p>When reading an estimate, find the contingency lines first. A VE proposal that retires a risk may justify reducing contingency; a proposal that adds uncertainty may require more.</p>`,
k:"Contingency covers uncertainty in the scope as defined. Know how much the estimate carries and for what."},
{t:"Who owns a risk", ref:"Contract documents · Contract Types world",
h:`<p>Every risk sits with a party, by contract or by default.</p>
<ul><li><b>Design-bid-build</b>: the owner holds design and most site risk.</li>
<li><b>Design-build</b>: design risk moves to the design-builder; what the owner specifies stays with the owner.</li>
<li><b>CM/GC and progressive design-build</b>: allocation is negotiated before the price is set.</li></ul>
<p>A risk transferred to a contractor is priced into the bid. It leaves the owner's register but not the project's cost. The Contract Types world covers this in detail.</p>`,
k:"Transferring a risk changes who pays for it. It does not make it free."},
{t:"Risk as an evaluation criterion", ref:"SAVE Core Competencies 7.A.3, 8.A.3 · VM Guide 8.3.2, 9.3.2",
h:`<p>When ideas are evaluated, risk can be a criterion beside performance, cost and time. For each idea ask:</p>
<ul><li>Does it remove or reduce an existing risk?</li>
<li>Does it introduce a new one, such as an unproven method or a new approval?</li>
<li>Does it shift a risk to a different party?</li></ul>
<p>The proposal write-up should state these plainly. Decision-makers reject proposals when they discover an unstated risk, and accept higher-cost ones that visibly reduce exposure.</p>`,
k:"State each proposal's effect on risk: reduced, added or moved."},
{t:"What each client requires", ref:"Caltrans PD-09 · FHWA Major Projects guidance · FTA OP 40 · USACE ER 1110-2-1302 · WSDOT EO 1053",
h:`<ul><li><b>Caltrans</b>: a risk register on every project, scaled in three levels by cost. Level 1 covers projects under $5M with a qualitative rating; the highest level uses quantitative analysis.</li>
<li><b>FHWA</b>: major projects ($500M and over) receive a risk-based Cost Estimate Review.</li>
<li><b>FTA (Sound Transit)</b>: a Risk and Contingency Review under Oversight Procedure 40.</li>
<li><b>USACE</b>: a formal cost and schedule risk analysis for civil works projects of $40M or more in total project cost.</li>
<li><b>WSDOT</b>: risk-based estimating workshops scaled by project size.</li></ul>`,
k:"Every major client has a risk process. Find out which one applies and where the project is in it."}
],
mid:[
{s:"Definition", q:"A utility conflict was discovered last week and is delaying design. What is it?",
 o:["A risk","An issue","An opportunity","A contingency"], a:1,
 e:"It has already happened. Risks are uncertain future events."},
{s:"Risk statement", q:"Which is a usable risk statement?",
 o:["Environmental risk","Because the permit depends on a species survey not yet done, a seasonal work window may be imposed, delaying construction by one season","Weather","The project is risky"], a:1,
 e:"It states cause, event and effect, which can be scored and responded to."},
{s:"Scoring", q:"What two ratings are combined in qualitative risk scoring?",
 o:["Cost and schedule","Probability and impact","Owner and status","Threat and opportunity"], a:1,
 e:"Score combines how likely the risk is with how large its effect would be."}
],
quiz:[
{s:"Definition", q:"According to Caltrans' directive, a risk with a positive effect is called what?",
 o:["A threat","An opportunity","An issue","A betterment"], a:1,
 e:"PD-09 defines risk as an uncertain event with a negative (threat) or positive (opportunity) effect."},
{s:"Register", q:"When should a VE facilitator ask for the project risk register?",
 o:["After the presentation","During preparation, with the pre-study data package","Only if asked by FHWA","During implementation"], a:1,
 e:"It is part of the information to collect and review before the workshop."},
{s:"Scoring", q:"Why must rating scales be defined before scoring?",
 o:["To fill time","High impact means a different amount on different projects","FHWA requires five levels","To hide low risks"], a:1,
 e:"Without agreed definitions, team members score against different mental scales."},
{s:"Job Plan", q:"A function has average cost but is exposed to the top-ranked risk. How may it be treated in function analysis?",
 o:["Ignored","Prioritized for creativity because of its risk","Moved outside scope","Deleted"], a:1,
 e:"Functions can be prioritized for high risk as well as high resource use."},
{s:"Responses", q:"A VE proposal replaces a tunnel under a rail line with an alignment that does not cross the railroad. Which response to the railroad approval risk is this?",
 o:["Accept","Avoid","Transfer","Mitigate"], a:1,
 e:"Changing the plan so the risk cannot occur is avoidance."},
{s:"Responses", q:"Additional borings are ordered to reduce uncertainty about rock depth. Which response is this?",
 o:["Avoid","Mitigate","Transfer","Exploit"], a:1,
 e:"More information reduces the probability or impact of the ground risk."},
{s:"Contingency", q:"What is contingency intended to cover?",
 o:["New scope requested by stakeholders","Uncertainty within the defined scope","Profit","Design fees"], a:1,
 e:"Contingency is for uncertainty in the scope as defined, not for scope additions."},
{s:"Ownership", q:"An RFP transfers all utility relocation risk to the design-builder. What happens to its cost?",
 o:["It disappears","It is priced into proposals","FHWA pays it","It moves to contingency automatically"], a:1,
 e:"Transferred risk is priced by the party receiving it."},
{s:"Evaluation", q:"A proposal saves $2M but relies on a construction method new to the region. How should the write-up handle this?",
 o:["Omit it","State the new risk introduced and how it could be managed","Reduce the savings to zero","Withdraw the proposal"], a:1,
 e:"Unstated risks are a common reason for rejection. State added, reduced and moved risks."},
{s:"Clients", q:"At what total project cost does USACE call for a formal cost and schedule risk analysis on civil works projects?",
 o:["$5 million","$40 million or more","$500 million","Any amount"], a:1,
 e:"ER 1110-2-1302 applies the formal analysis at $40M and above, with an abbreviated version below."}
]},

/* ============================== INTERMEDIATE ============================== */
i:{ title:"Quantifying risk",
lessons:[
{t:"From qualitative to quantitative", ref:"Caltrans Project Risk Management Handbook, Chapter 6 · WSDOT Project Risk Management Guide",
h:`<p>Qualitative scoring ranks risks. It does not say how much money or time to hold. <b>Quantitative analysis</b> puts numbers on each risk and combines them into a range for the whole project.</p>
<p>Agencies scale the effort to project size. WSDOT's policy is typical:</p>
<ul><li>$10M or less: qualitative assessment</li>
<li>$10M to $25M: informal risk-based estimating workshop</li>
<li>$25M to $100M: Cost Risk Assessment (CRA) workshop</li>
<li>$100M or more: Cost Estimate Validation Process (CEVP) workshop</li></ul>`,
k:"Qualitative ranks; quantitative sizes. The bigger the project, the more formal the method."},
{t:"Expected value", ref:"PMBOK Guide · Decision analysis practice",
h:`<p>The simplest quantification multiplies probability by impact.</p>
<div class="formula">Expected value = Probability × Impact</div>
<p>A risk with a 30% chance of costing $2M has an expected value of $600,000. A set of independent risks can be summed for a rough total.</p>
<p>Limits: expected value is an average over many projects. On one project the risk either happens ($2M) or does not ($0). Holding $600,000 does not cover the event if it occurs. That is why a distribution, not a single number, is used for larger projects.</p>`,
k:"Expected value is a useful average for comparing risks. It is not the amount needed if the risk occurs."},
{t:"Three-point estimates", ref:"AACE RP 41R-08 · PMBOK Guide",
h:`<p>Uncertain quantities are described with three values instead of one:</p>
<ul><li><b>Low</b> (optimistic)</li><li><b>Most likely</b></li><li><b>High</b> (pessimistic)</li></ul>
<p>These define a distribution, commonly triangular. Its mean is the average of the three.</p>
<div class="formula">Triangular mean = (Low + Most likely + High) ÷ 3</div>
<p>Example: impact of $1M low, $2M most likely, $6M high has a mean of $3M, higher than the most likely value because the range is skewed upward. Cost ranges usually are.</p>`,
k:"Ask for low, most likely and high. Skewed ranges pull the mean above the most likely value."},
{t:"Monte Carlo simulation", ref:"AACE RP 57R-09 · USACE Cost and Schedule Risk Analysis guidance",
h:`<p>A Monte Carlo model combines many uncertain inputs:</p>
<ol><li>Each uncertain cost or risk is given a distribution, and each risk a probability of occurring.</li>
<li>The model draws one value from each and totals the project cost.</li>
<li>It repeats thousands of times.</li>
<li>The results form a distribution of total cost.</li></ol>
<p>The method does not add information. It shows the combined effect of the team's inputs, so the quality of the elicitation controls the quality of the result.</p>`,
k:"Monte Carlo adds up uncertain inputs many times to show a range. Its output is only as sound as the inputs."},
{t:"Reading the S-curve and percentiles", ref:"FHWA Cost Estimate Review guidance · USACE CSRA guidance · FTA cost estimation guidance",
h:`<p>Results are shown as a cumulative curve. A <b>percentile</b> such as P70 is the cost that 70% of simulated outcomes fall at or below.</p>
<ul><li><b>FHWA</b>: major project financial plans use the 70th percentile, in year-of-expenditure dollars.</li>
<li><b>USACE</b>: civil works contingency is set at the 80% confidence level.</li>
<li><b>FTA</b>: cost-risk outputs include a P65 cost and schedule estimate.</li></ul>
<p>USACE guidance describes P80 as risk averse and P50 as risk neutral. A higher percentile means more contingency.</p>`,
k:"P70 means a 70% chance of finishing at or under that cost. Each agency picks its own percentile."},
{t:"Base cost, risk and contingency", ref:"WSDOT Project Risk Management Guide · FHWA CSRA guidance",
h:`<p>Risk-based estimating separates two things:</p>
<ul><li><b>Base cost</b>: the cost if the project goes as planned, with no contingency.</li>
<li><b>Risk</b>: the events that could change it, each with probability and impact.</li></ul>
<div class="formula">Contingency = Cost at chosen percentile − Base cost</div>
<p>FHWA guidance describes the difference between the base cost and the 70th percentile as the appropriate contingency. Mixing a percentage contingency into the base and then adding risks on top double counts.</p>`,
k:"Strip contingency out of the base before modeling risk. Otherwise uncertainty is counted twice."},
{t:"Finding the risks that matter", ref:"AACE RP 57R-09 · Agency CSRA reports",
h:`<p>A sensitivity chart, often called a <b>tornado diagram</b>, ranks inputs by how much they move the total. Usually a handful of risks drive most of the range.</p>
<p>This is the same Pareto pattern seen in cost models and function resource matrices. For a VE team the top bars are targets:</p>
<ul><li>each one points to a function or element to examine</li>
<li>a proposal that removes a top driver narrows the whole range, not only its own line</li></ul>
<p>FHWA asks states to report the top risks and their mitigation in each financial plan update.</p>`,
k:"A few risks drive most of the spread. Aim creativity at the top of the tornado."},
{t:"Schedule risk and its cost", ref:"USACE CSRA guidance · FHWA year-of-expenditure guidance",
h:`<p>Delay has a price even when no work is added:</p>
<ul><li><b>Escalation</b>: remaining work is bought later at higher prices.</li>
<li><b>Time-related overhead</b>: owner and contractor staff, facilities and equipment.</li>
<li><b>User costs</b>: delay to the public while work continues.</li></ul>
<p>Formal analyses model cost and schedule together. A USACE example report shows separate cost and schedule contingencies combined into one project contingency. Estimates stated in year-of-expenditure dollars already include an assumed schedule, so a schedule risk is also a cost risk.</p>`,
k:"Convert months of delay into dollars: escalation plus time-related cost."},
{t:"Before and after: valuing a VE proposal as risk reduction", ref:"WSDOT VERA practice · Caltrans Project Risk Management Handbook, Chapter 7",
h:`<p>Risk analysis can be run twice: with risks as they stand (<b>pre-response</b>) and with responses in place (<b>post-response</b>). The difference is the value of the responses.</p>
<p>The same comparison works for a VE proposal:</p>
<div class="formula">Proposal value = Base cost change + Change in risk exposure</div>
<p>Example: a proposal adds $1M of base cost and removes a risk with a 40% chance of a $10M impact. Expected exposure falls by $4M, so the net expected benefit is $3M, although the estimate went up.</p>`,
k:"A proposal that raises base cost can still lower expected total cost. Show both numbers."},
{t:"Combining VE and risk assessment", ref:"WSDOT Cost Risk Assessment program · FHWA Focus (Jan. 2006)",
h:`<p>WSDOT has combined value engineering with risk assessment since 2005 in a workshop format it calls <b>VERA</b>, for projects over $25M and bridges over $20M. FHWA has reported that WSDOT uses VE principles to identify high-risk areas and recommend mitigation.</p>
<p>The combined format shares one information phase and one team:</p>
<ul><li>the base estimate is validated once</li>
<li>risks are identified and quantified</li>
<li>VE proposals are developed, including risk responses</li>
<li>the model is rerun to show the effect</li></ul>`,
k:"A combined workshop validates the base once and reports VE results as both savings and reduced risk."}
],
mid:[
{s:"Scaling", q:"Under WSDOT policy, which process applies to a $150M project?",
 o:["Qualitative assessment only","Cost Estimate Validation Process (CEVP) workshop","Informal workshop only","No risk process"], a:1,
 e:"CEVP applies at $100M or more; CRA applies from $25M to $100M."},
{s:"Expected value", q:"A risk has a 25% chance of a $4M impact. What is its expected value?",
 o:["$250,000","$1,000,000","$4,000,000","$16,000,000"], a:1,
 e:"0.25 × $4,000,000 = $1,000,000."},
{s:"Three-point", q:"Impact is estimated at $2M low, $3M most likely and $7M high. What is the triangular mean?",
 o:["$3M","$4M","$5M","$7M"], a:1,
 e:"($2M + $3M + $7M) / 3 = $4M."}
],
quiz:[
{s:"Expected value", q:"Why is expected value not the amount needed if a risk occurs?",
 o:["It includes profit","It is a probability-weighted average; the actual impact is the full amount or nothing","It excludes escalation","It is always too high"], a:1,
 e:"On a single project the event happens or it does not. Expected value averages the two."},
{s:"Three-point", q:"Why is the mean of a cost range often above the most likely value?",
 o:["Estimators add profit","Cost ranges are usually skewed toward the high side","The low value is ignored","Software rounds up"], a:1,
 e:"There is more room for cost to rise than to fall, so the high value sits farther from the most likely."},
{s:"Monte Carlo", q:"What does a Monte Carlo simulation produce?",
 o:["A single exact cost","A distribution of possible total costs from many trials","A list of bidders","A FAST diagram"], a:1,
 e:"It totals randomly drawn inputs thousands of times to form a distribution."},
{s:"Percentiles", q:"Which percentile does FHWA use for major project financial plans?",
 o:["P50","P65","P70","P95"], a:2,
 e:"FHWA requires the 70% confidence value or greater, in year-of-expenditure dollars."},
{s:"Percentiles", q:"USACE sets civil works contingency at which confidence level?",
 o:["50%","65%","70%","80%"], a:3,
 e:"USACE civil works guidance uses the 80% confidence level."},
{s:"Contingency", q:"Base cost is $200M and the P70 result is $236M. What is the contingency by FHWA's description?",
 o:["$18M","$36M","$70M","$236M"], a:1,
 e:"$236M - $200M = $36M."},
{s:"Double counting", q:"An estimate includes a 15% contingency in the base, and the risk model adds risks on top. What is the problem?",
 o:["None","Uncertainty is counted twice","Escalation is missing","The base is too low"], a:1,
 e:"Contingency should be removed from the base before risks are modeled."},
{s:"Sensitivity", q:"What does a tornado diagram show?",
 o:["Weather risk","Which inputs move the total the most","The construction schedule","Team roles"], a:1,
 e:"It ranks risks and uncertainties by their effect on the outcome."},
{s:"Schedule", q:"A six-month delay adds no scope. Which cost still rises?",
 o:["None","Escalation on remaining work and time-related overhead","Only design fees","Only right of way"], a:1,
 e:"Later purchase at higher prices and extended overhead both add cost."},
{s:"Proposal value", q:"A proposal adds $2M of base cost and removes a risk with a 50% chance of a $12M impact. What is the net expected benefit?",
 o:["-$2M","$4M","$6M","$10M"], a:1,
 e:"Exposure falls by 0.5 × $12M = $6M. $6M - $2M = $4M."}
]},

/* ============================== ADVANCED ============================== */
a:{ title:"Risk-informed VE and facilitation",
lessons:[
{t:"Designing a combined workshop", ref:"WSDOT Project Risk Management Guide, Part II · SAVE Core Competency 3.A.2",
h:`<p>Adding risk assessment to a VE study changes the preparation:</p>
<ul><li><b>Team</b>: add a risk lead or modeler and a cost lead who can separate base from contingency. WSDOT's CEVP uses external subject matter experts.</li>
<li><b>Pre-work</b>: a base estimate review and a draft risk register before day one.</li>
<li><b>Agenda</b>: risk identification and quantification sit between Information and Creativity; a model rerun sits after Development.</li>
<li><b>Roles</b>: the facilitator stays neutral on both the proposals and the risk numbers.</li></ul>`,
k:"A combined study needs a risk lead, a clean base estimate and agenda time for two model runs."},
{t:"Eliciting probabilities", ref:"VM Guide 12.3 (heuristics) · SAVE supplemental facilitation material",
h:`<p>Risk numbers come from people, and people use shortcuts. The same heuristics named in SAVE's facilitation material apply:</p>
<ul><li><b>Anchoring</b>: the first number spoken pulls later ones toward it.</li>
<li><b>Availability</b>: a recent or vivid event seems more likely.</li>
<li><b>Confirmation</b>: evidence for the current plan is noticed more.</li>
<li><b>Representativeness</b>: judging by resemblance to a familiar case.</li></ul>
<p>Counter-measures: collect estimates individually before discussion, ask for the high and low before the most likely, ask what would have to be true for the high case, and use past project data where it exists.</p>`,
k:"Get the range before the middle, and individual numbers before group discussion."},
{t:"Correlation and double counting", ref:"AACE RP 57R-09 · WSDOT risk assessment practice",
h:`<p>Two modeling errors change results more than any single input:</p>
<ul><li><b>Ignoring correlation</b>: risks with a common cause, such as several items all driven by steel price, move together. Treating them as independent makes the total range too narrow.</li>
<li><b>Double counting</b>: the same uncertainty appears as a risk event, inside a quantity allowance and again in contingency.</li></ul>
<p>WSDOT lists dependency, correlation and conditionality among the things its process had to address. A facilitator can ask of any two risks: do these share a cause?</p>`,
k:"Risks with a shared cause must be linked. Each uncertainty should appear once."},
{t:"Risk allocation by delivery method", ref:"Contract Types world · 23 CFR 635.109 · Contract risk allocation matrices",
h:`<p>The same risk has a different value depending on who holds it and when the price is set.</p>
<ul><li><b>Design-bid-build</b>: owner-held risks stay in the owner's contingency.</li>
<li><b>Design-build</b>: transferred risks become premiums in every proposal. Better information before the RFP reduces them.</li>
<li><b>CM/GC and progressive design-build</b>: each risk is assigned in a matrix, and the contractor's contingency is visible in open-book pricing.</li></ul>
<p>A VE proposal should name the contingency it changes: the owner's, or the contractor's inside the price.</p>`,
k:"Name whose contingency a proposal reduces. Savings inside a contractor's price are only real if the price moves."},
{t:"Managing opportunities", ref:"Caltrans PD-09 · PMBOK Guide",
h:`<p>Registers are usually all threats. Opportunities are uncertain events with a benefit, and they respond to deliberate action:</p>
<ul><li><b>Exploit</b>: make sure it happens.</li>
<li><b>Enhance</b>: raise its probability or benefit.</li>
<li><b>Share</b>: bring in a party better able to capture it.</li></ul>
<p>Many VE ideas that cannot be fully proven in a workshop are opportunities: a proposal that depends on a favorable test result or an agency approval. Recording them with a probability keeps them alive and gives an honest value.</p>`,
k:"An unproven VE idea can be carried as an opportunity with a probability, not as a firm saving or a rejection."},
{t:"Secondary and residual risk", ref:"PMBOK Guide · SAVE Core Competency 8.A.3",
h:`<ul><li><b>Residual risk</b>: what remains after a response.</li>
<li><b>Secondary risk</b>: a new risk created by the response.</li></ul>
<p>Every VE proposal should be checked for both. Replacing cast-in-place with precast may avoid a falsework risk and add a transport and erection risk. Shortening a schedule may add a risk of rework.</p>
<p>A fair comparison sets the baseline's risks against the proposal's residual and secondary risks, using the same scales.</p>`,
k:"Ask what risk remains and what new risk the proposal creates, and score them on the same scale as the baseline."},
{t:"Risk in the value equation", ref:"SAVE Core Competency 1.B.6 · VM Guide 2.6",
h:`<p>Value is function relative to resources. Risk can enter on either side:</p>
<ul><li><b>As a resource</b>: add expected risk cost to the denominator, so cost becomes base cost plus exposure.</li>
<li><b>As performance</b>: rate each alternative on a risk attribute, such as reliability of delivery, alongside other performance attributes.</li></ul>
<p>Use one or the other for a given risk. Counting it in cost and again as a performance penalty double counts. Agree the approach with the sponsor in preparation, when the measure of value improvement is set.</p>`,
k:"Put risk in cost or in performance, not both."},
{t:"After the study: contingency and tracking", ref:"FHWA financial plan guidance · Caltrans Project Risk Management Handbook, Chapter 8",
h:`<p>Accepted proposals should change the project's risk documents:</p>
<ul><li>the register is updated: retired risks closed, new ones added</li>
<li>contingency is re-examined against the remaining risks</li>
<li>responses are assigned owners and dates</li></ul>
<p>FHWA requires annual financial plan updates on major projects to report mitigation efforts on the top risks. If the register is not updated after a VE study, the reported contingency no longer matches the project.</p>`,
k:"A VE study that changes risk should be followed by an updated register and a contingency review."},
{t:"Communicating ranges", ref:"FHWA Major Project guidance · WSDOT CEVP communication practice",
h:`<p>Decision-makers and the public are used to single numbers. Risk-based results are ranges.</p>
<ul><li>State the percentile with every figure: <i>$595M at 70% confidence</i>.</li>
<li>Show the range and what drives it.</li>
<li>Present VE results the same way: change in base cost, and change in the range.</li></ul>
<p>WSDOT developed CEVP partly to communicate project risks and their cost effect to the public. A point savings figure with no confidence statement invites later questions when the estimate moves.</p>`,
k:"Attach a confidence level to every cost figure, including VE savings on risk-based estimates."},
{t:"Limits of the method", ref:"AACE RP 57R-09 · Agency practice",
h:`<p>Quantitative risk analysis has boundaries a facilitator should state:</p>
<ul><li>It covers identified risks. Events nobody listed are not in the curve.</li>
<li>Precision in the output exceeds the precision of the inputs.</li>
<li>Rare, very large events are poorly described by percentiles.</li>
<li>On small projects the effort can exceed the benefit; a qualitative register is enough.</li></ul>
<p>Agencies scale the method for these reasons. The analysis informs a decision about contingency and priorities. It does not make the decision.</p>`,
k:"The curve only contains what the team put in. Use the level of analysis the project size supports."}
],
mid:[
{s:"Workshop design", q:"What should be reviewed before day one of a combined VE and risk workshop?",
 o:["Only the agenda","The base estimate, separated from contingency, and a draft risk register","Final plans","The contractor's bid"], a:1,
 e:"Risk modeling needs a clean base and a starting list of risks."},
{s:"Elicitation", q:"The first team member says a risk is probably about $2 million, and all later estimates cluster near $2M. Which heuristic is at work?",
 o:["Availability","Anchoring","Representativeness","Social loafing"], a:1,
 e:"The first number spoken anchors the rest. Collect individual estimates first."},
{s:"Correlation", q:"Three risks are all driven by the price of steel and are modeled as independent. What is the effect?",
 o:["The range is too wide","The total range is too narrow","No effect","Contingency doubles"], a:1,
 e:"Correlated risks move together. Treating them as independent understates the spread."}
],
quiz:[
{s:"Workshop design", q:"What role does the facilitator hold on risk numbers in a combined workshop?",
 o:["Sets them","Stays neutral and manages the process","Approves contingency","Defends the estimate"], a:1,
 e:"The facilitator owns process. Subject matter experts supply the content."},
{s:"Elicitation", q:"Which practice reduces anchoring when estimating a risk's impact?",
 o:["Ask for the most likely value first","Ask for the low and high before the most likely","Let the senior person answer first","Use one number"], a:1,
 e:"Establishing the range first keeps the middle from fixing it."},
{s:"Double counting", q:"A soft-soil risk is in the register, in an earthwork quantity allowance and in contingency. What should be done?",
 o:["Nothing","Carry it once","Add a fourth allowance","Remove the register"], a:1,
 e:"Each uncertainty should appear in one place."},
{s:"Allocation", q:"A VE proposal retires a risk the CM/GC was carrying. Where does the saving appear?",
 o:["In the owner's contingency","In the contractor's contingency inside the negotiated price","Nowhere","In design fees"], a:1,
 e:"The saving is real for the owner only if the negotiated price is reduced accordingly."},
{s:"Opportunities", q:"A proposal would save $5M if a pending load test is favorable, estimated at 60% likely. How can it be carried?",
 o:["As a firm $5M saving","As an opportunity with 60% probability, worth $3M expected","As rejected","As a threat"], a:1,
 e:"Recording it as an opportunity keeps it alive and states its value honestly."},
{s:"Secondary risk", q:"Switching to precast avoids falsework over traffic and introduces transport and erection risk. What is the new risk called?",
 o:["Residual risk","Secondary risk","Base risk","Unallocated risk"], a:1,
 e:"A secondary risk is created by the response. Residual risk is what remains of the original."},
{s:"Value equation", q:"A team adds expected risk cost to each alternative's cost and also scores a risk performance attribute for the same risk. What is wrong?",
 o:["Nothing","The risk is counted twice","Risk cannot be scored","Cost is too low"], a:1,
 e:"Put a given risk in cost or in performance, not both."},
{s:"Follow-through", q:"After a VE study retires two top risks, what should the project team update?",
 o:["Nothing","The risk register and the contingency","Only the drawings","Only the schedule"], a:1,
 e:"Otherwise reported contingency no longer matches the project's risks."},
{s:"Communication", q:"How should a risk-based cost figure be stated?",
 o:["As a single number","With its confidence level, such as $595M at 70% confidence","Rounded to the nearest billion","Without dollars"], a:1,
 e:"A percentile without its figure, or a figure without its percentile, is incomplete."},
{s:"Limits", q:"Which statement about a Monte Carlo cost curve is accurate?",
 o:["It includes all possible events","It reflects only the risks and ranges the team entered","It guarantees the P90 cost","It replaces the estimate"], a:1,
 e:"Unidentified risks are not in the model."}
]}
},
notes:[
{h:"FHWA Cost Estimate Reviews", p:"Major projects generally have two reviews, one near the end of NEPA and one before construction. FHWA requires the 70% confidence value or greater for the financial plan, in year-of-expenditure dollars.", src:"FHWA Major Projects cost estimating pages; FHWA Cost Estimate Review reports"},
{h:"FTA Risk and Contingency Review", p:"FTA lists cost and schedule contingency levels, the risk register and a risk and contingency management plan as inputs to Oversight Procedure 40, and a P65 cost and schedule estimate among the outputs.", src:"FTA, Cost Estimation for FTA-Funded Transit Projects"},
{h:"WSDOT thresholds", p:"Executive Order E 1053: qualitative at $10M or less, informal workshop $10M to $25M, CRA $25M to $100M, CEVP at $100M or more. VERA combines VE and risk assessment for projects over $25M and bridges over $20M.", src:"WSDOT EO E 1053; WSDOT presentation to CDOT peer exchange (2016)"},
{h:"USACE", p:"ER 1110-2-1302 requires a formal cost and schedule risk analysis for civil works projects of $40M or more in total project cost, with contingency at the 80% confidence level. Military construction follows UFC 3-740-05.", src:"USACE ER 1110-2-1302; USACE CSRA report template"},
{h:"Verify with the client", p:"Caltrans scalability level thresholds above Level 1, the current edition of Caltrans PD-09, Sound Transit's own risk procedures and NAVFAC's risk requirements were not confirmed from primary documents this session.", src:"Author note"}
]
};
