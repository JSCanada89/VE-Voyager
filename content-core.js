/* World map and shorter districts. Districts with only lessons/quiz are treated as Beginner. */
window.VE = window.VE || {};
VE.core = {
jobplan:{ id:"jobplan", name:"The Job Plan", glyph:"6", blurb:"Value, the six workshop phases, and why judgment waits.",
  lessons:[
    {t:"What value means", ref:"SAVE International VM Standard", h:`<p>Value is the relationship between what a project has to do and what it costs to get it done.</p>
      <div class="formula">Value ≈ Function ÷ Cost &nbsp;|&nbsp; Value ≈ Performance ÷ Cost</div>
      <p>Value goes up when performance rises at the same cost, when cost drops with performance held, or both. A cheaper option that drops a required function lowers value even though the price fell.</p>`,
      k:"VE is function-driven, team-based and structured. Cost reduction is one possible outcome, not the definition."},
    {t:"The Job Plan phases", ref:"SAVE International VM Standard", h:`<ul><li><b>Pre-workshop:</b> scope, team selection, data gathering, cost model.</li></ul>
      <ol><li><b>Information</b>: design team briefing, site visit, constraints, cost drivers.</li>
      <li><b>Function Analysis</b>: what the project must do, as verb + noun.</li>
      <li><b>Creative</b>: large idea list, judgment deferred.</li>
      <li><b>Evaluation</b>: screen ideas against criteria.</li>
      <li><b>Development</b>: write alternatives with sketches, cost and performance comparisons.</li>
      <li><b>Presentation</b>: brief decision-makers.</li></ol>
      <ul><li><b>Post-workshop:</b> implementation decisions and final report.</li></ul>`,
      k:"Information → Function → Creative → Evaluation → Development → Presentation."},
    {t:"Why the phases stay separate", ref:"SAVE International VM Standard", h:`<p>Generating and judging ideas at the same time suppresses ideas. Separating Creative from Evaluation keeps the idea pool large before criteria cut it down.</p>
      <p>Development turns the survivors into alternatives a project manager can act on. The team is multidisciplinary and independent of the design team.</p>`,
      k:"Quantity first, quality second. Evaluation criteria come from the owner's needs."}
  ],
  quiz:[
    {s:"Workshop day 2", q:"Which phase is built around producing the largest number of ideas while judgment is held back?", o:["Information","Creative","Evaluation","Development"], a:1, e:"The Creative phase defers judgment. Screening happens in Evaluation."},
    {s:"Agenda check", q:"Which sequence matches the workshop phases?", o:["Information → Creative → Function Analysis → Evaluation → Presentation → Development","Function Analysis → Information → Creative → Development → Evaluation → Presentation","Information → Function Analysis → Creative → Evaluation → Development → Presentation","Information → Evaluation → Creative → Function Analysis → Development → Presentation"], a:2, e:"Information, Function Analysis, Creative, Evaluation, Development, Presentation."},
    {s:"Overcrossing study", q:"An alternative saves 8% but drops vertical clearance below the required minimum. How does it affect value?", o:["Raises value","Neutral","Does not raise value: it fails a required function","Raises value if the contractor agrees"], a:2, e:"Required clearance is a must-have. Failing it is not a value improvement."},
    {s:"Development phase", q:"What does a developed VE alternative normally contain?", o:["A one-line idea","Baseline vs. proposed description, sketches, cost comparison, performance and risk discussion","Only the savings figure","Final construction drawings"], a:1, e:"Development produces decision-ready write-ups."},
    {s:"Kickoff", q:"The design team's presentation and site visit belong to which phase?", o:["Information","Creative","Evaluation","Post-workshop"], a:0, e:"The Information phase builds shared understanding of the project."}
  ]},
function:{ id:"function", name:"Function Analysis", glyph:"F", blurb:"Verb + noun, basic vs. secondary, and reading a FAST diagram.",
  lessons:[
    {t:"Verb + noun", ref:"SAVE International VM Standard", h:`<p>Describe what an element does with an active verb and a measurable noun: <b>convey</b> traffic, <b>support</b> deck, <b>drain</b> runoff, <b>inform</b> motorists.</p>
      <p>Avoid naming the thing itself ("provide bridge"). "Cross waterway" allows a bridge, a culvert, or a realignment.</p>`,
      k:"If the function names the solution, the creative phase starts with one answer already chosen."},
    {t:"Basic, secondary, higher order", ref:"SAVE International VM Standard", h:`<ul><li><b>Basic function</b>: the reason the project exists.</li>
      <li><b>Secondary functions</b>: support the basic function or result from the design chosen. Some are required; some are unwanted side effects.</li>
      <li><b>Higher-order function</b>: why the basic function is needed. It sits outside the study scope.</li></ul>`,
      k:"Secondary functions are where much of the cost and many alternatives live."},
    {t:"Reading a FAST diagram", ref:"SAVE International VM Standard", h:`<ul><li>Move <b>right</b> to answer <b>How?</b></li><li>Move <b>left</b> to answer <b>Why?</b></li>
      <li><b>Scope lines</b> bound the study; the higher-order function sits left of the left scope line.</li>
      <li>The vertical dimension answers <b>When?</b></li></ul>
      <p>Allocating cost to functions shows where spending is high relative to importance.</p>`,
      k:"How goes right, Why goes left. Cost-to-function shows where to aim."}
  ],
  quiz:[
    {s:"Pedestrian overcrossing", q:"Which function statement is most solution-neutral?", o:["Build bridge","Separate pedestrians","Provide structure","Use steel"], a:1, e:"Separate pedestrians states the purpose without naming a structure."},
    {s:"FAST logic", q:"Moving to the function on the right answers which question?", o:["Why?","When?","How?","How much?"], a:2, e:"Right answers How; left answers Why."},
    {s:"FAST logic", q:"What sits to the left of the left scope line?", o:["The basic function","The higher-order function","Unwanted functions","Design criteria"], a:1, e:"The higher-order function is outside the study scope."},
    {s:"Cost model", q:"What is cost-to-function allocation used for?", o:["Setting the bid","Finding functions whose cost is high relative to importance","Replacing the estimate","Calculating fees"], a:1, e:"It exposes mismatches between cost and worth."},
    {s:"Interchange", q:"For a freeway interchange, enhance aesthetics is most often:", o:["The basic function","A secondary function","The higher-order function","Outside function analysis"], a:1, e:"Aesthetics supports acceptance but is not why the interchange exists."}
  ]},
bridges:{ id:"bridges", name:"Bridges", glyph:"⌒", blurb:"Superstructure types, foundations, ABC, and joints over the life cycle.",
  lessons:[
    {t:"Superstructure alternatives", ref:"Caltrans Bridge Design practice", h:`<ul><li><b>Cast-in-place post-tensioned box girder</b>: common on Caltrans work; needs falsework, which affects traffic below, waterways and work windows.</li>
      <li><b>Precast prestressed girders</b>: little falsework, faster erection; limited by shipping length, weight and crane access.</li>
      <li><b>Steel plate girders</b>: lighter, long spans, tight curves; adds coating and corrosion protection to life-cycle cost.</li></ul>`,
      k:"Falsework ties superstructure choice to traffic, water and permits."},
    {t:"Substructure and foundations", ref:"Caltrans Bridge Design practice", h:`<ul><li>CIDH versus driven piles: groundwater, noise, vibration and capacity drive the choice.</li>
      <li>Fewer, longer spans remove piers but deepen the superstructure, affecting profile and clearance.</li>
      <li>Abutment type changes joints, bearings and maintenance.</li>
      <li>In California, seismic demand often governs column and foundation sizing.</li></ul>`,
      k:"Span arrangement moves piers, foundations, depth, profile and clearance together."},
    {t:"Accelerated construction and life cycle", ref:"23 U.S.C. 106(e)(3)", h:`<p><b>Accelerated Bridge Construction</b> uses prefabricated elements or moves whole spans. It often costs more to build and less to the public, because closures shrink.</p>
      <p>Expansion joints and bearings are frequent maintenance items. Federal law directs bridge VE to consider superstructure and substructure by material, with life-cycle cost and construction duration.</p>`,
      k:"ABC is justified by user cost and schedule; jointless details by maintenance."}
  ],
  quiz:[
    {s:"Creek crossing", q:"A creek with a short in-water window and resistance to falsework in the channel. Which superstructure addresses that most directly?", o:["CIP box girder on falsework","Precast prestressed girders set by crane","CIP slab on falsework","Timber trestle"], a:1, e:"Precast girders remove most falsework from the channel."},
    {s:"Span arrangement", q:"Lengthening spans to eliminate a pier: what else must be checked?", o:["Paint color","Deeper superstructure effects on profile and clearance, plus larger remaining foundations","Deck overlay only","Nothing"], a:1, e:"Longer spans deepen girders and redistribute load."},
    {s:"Life cycle", q:"Main value case for eliminating deck expansion joints?", o:["Lower long-term maintenance and less water damage to bearings and substructure","Faster paint drying","Higher design speed","Easier utilities"], a:0, e:"Joints leak and wear."},
    {s:"Urban overcrossing", q:"What usually justifies an ABC premium?", o:["Lower design fees","Reduced closure duration and road user costs","Lower steel prices","Simpler permits"], a:1, e:"User delay costs carry the case."},
    {s:"Material comparison", q:"Which life-cycle cost item belongs on the steel girder side?", o:["Falsework removal","Coating and corrosion protection maintenance","PT grout","Curing compound"], a:1, e:"Painted steel needs periodic recoating."}
  ]},
its:{ id:"its", name:"ITS", glyph:"⇄", blurb:"Detection, CMS, ramp metering, and where communications cost hides.",
  lessons:[
    {t:"System building blocks", ref:"Caltrans Ramp Metering Design Manual · CA MUTCD", h:`<ul><li><b>Detection</b>: loops, radar, video.</li><li><b>CCTV</b>: verification for the TMC.</li>
      <li><b>Changeable message signs</b>: inform motorists.</li><li><b>Ramp metering</b>: manages demand.</li><li><b>Communications and power</b>: connect everything.</li></ul>`,
      k:"Functions: detect incidents, inform motorists, manage demand."},
    {t:"Where the cost hides", ref:"Project estimates", h:`<p>Trenching, conduit, pull boxes, fiber and power service are often the largest share of an ITS budget. TMC integration is easy to underestimate.</p>`,
      k:"Look at the communications plan before the device count."},
    {t:"VE angles for ITS", ref:"Agency ITS standards", h:`<ul><li>Reuse existing conduit or fiber; share trench.</li><li>Wireless links for low-bandwidth remote sites.</li>
      <li>Co-locate devices.</li><li>Match the agency's standard equipment.</li><li>Provide spare conduit and cabinet space for replacement cycles.</li></ul>`,
      k:"Maintainability and integration are performance."}
  ],
  quiz:[
    {s:"Corridor ITS", q:"Which element is often the largest cost driver?", o:["Sign graphics","Communications: trenching, conduit and fiber","Cabinet paint","Loop sealant"], a:1, e:"Linear communications often outweigh devices."},
    {s:"Remote station", q:"A low-bandwidth station 3 miles from fiber. Which alternative fits?", o:["Trench new fiber","Wireless or cellular communications","Remove it","Second TMC"], a:1, e:"Wireless avoids long trench runs."},
    {s:"Equipment", q:"Why match the agency's standard equipment?", o:["Lowest bid always","Staff, spares and TMC software already support it","FHWA bans others","Avoids NEPA"], a:1, e:"Non-standard devices add support burdens."},
    {s:"Function analysis", q:"Basic function of a CMS?", o:["Install sign","Inform motorists","Mount panel","Use LEDs"], a:1, e:"Verb + noun, solution-neutral."},
    {s:"Life cycle", q:"Electronics are replaced far sooner than structures. What adds value?", o:["Direct-bury cables","Spare conduit and cabinet capacity","Smaller cabinets","Welding devices"], a:1, e:"Planning for replacement avoids repeat trenching."}
  ]},
safety:{ id:"safety", name:"Safety", glyph:"▲", blurb:"Crash modification factors, proven countermeasures, Safe System.",
  lessons:[
    {t:"Quantifying safety", ref:"AASHTO Highway Safety Manual", h:`<p>The <b>Highway Safety Manual</b> predicts expected crashes and adjusts them with <b>crash modification factors</b>.</p>
      <div class="formula">Expected after = Expected before × CMF</div><p>A CMF of 0.80 means a 20% expected reduction.</p>`,
      k:"Safety can be quantified."},
    {t:"Proven countermeasures and Safe System", ref:"FHWA Proven Safety Countermeasures · National Roadway Safety Strategy", h:`<p>FHWA's Proven Safety Countermeasures include roundabouts, rumble strips, median barriers and road diets.</p>
      <p>The <b>Safe System Approach</b> assumes people make mistakes and designs so mistakes do not lead to death or serious injury.</p>`,
      k:"Safe System targets fatal and serious injury crashes."},
    {t:"Safety inside a VE study", ref:"PDPM Ch. 19 performance criteria", h:`<p>Treat safety as a performance attribute. When an alternative changes a safety feature, quantify the expected change in crashes and show the trade-off.</p>`,
      k:"Numbers on both sides of the ledger."}
  ],
  quiz:[
    {s:"HSM math", q:"40 expected crashes/yr, CMF 0.70. Expected reduction?", o:["4","12","28","30"], a:1, e:"40 × 0.70 = 28 after; reduction 12."},
    {s:"Intersection", q:"Why do roundabouts reduce severe crashes?", o:["Higher speeds","Lower speeds and removal of right-angle and head-on conflicts","No pedestrians","More lanes"], a:1, e:"Lower speeds, lower-angle conflicts."},
    {s:"Safe System", q:"Which matches a Safe System principle?", o:["Rule-followers never crash","People make mistakes; the system keeps them from causing death or serious injury","Only enforcement works","Severity is outside design control"], a:1, e:"Design limits crash forces."},
    {s:"Median trade-off", q:"Removing median barrier saves $3M. What should the team do?", o:["Recommend it","Reject without discussion","Quantify the expected crash change and present it with the savings","Leave it to the designer"], a:2, e:"Decision-makers need both sides."},
    {s:"Combining CMFs", q:"CMFs of 0.80 and 0.90 multiplied:", o:["0.70","0.72","0.85","1.70"], a:1, e:"0.80 × 0.90 = 0.72."}
  ]}
};

