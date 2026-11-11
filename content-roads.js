/* Roadways — Caltrans pavement and geometry. Tiers: b, i, a. */
window.VE = window.VE || {};
VE.roads = {
id:"roads", name:"Roadways", glyph:"═",
blurb:"Pavement families, structural sections, geometry standards, rehab strategies and constructability.",
tiers:{
/* ============================== BEGINNER ============================== */
b:{ title:"Pavement and Geometry Foundations",
lessons:[
{t:"Flexible and rigid pavement", ref:"HDM Topic 611",
h:`<p>Caltrans pavements fall into two families:</p>
<ul><li><b>Flexible</b>: asphalt surfaces (hot mix asphalt, HMA). Load spreads down through progressively stronger layers to the subgrade.</li>
<li><b>Rigid</b>: concrete slabs (portland cement concrete, PCC). The stiff slab spreads load over a wide area by bending.</li></ul>
<p>A third case, <b>composite</b> pavement, is a flexible layer over a rigid one. HDM Topic 611 notes it has mostly been used for maintenance and rehabilitation of existing concrete.</p>`,
k:"Flexible spreads load through layers; rigid spreads it through slab stiffness."},
{t:"Where the pavement rules live", ref:"HDM Ch. 600–670 · Standard Specifications · MTAG · CA MUTCD",
h:`<ul><li><b>Highway Design Manual (HDM)</b>, Chapters 600–670: pavement engineering (610), rigid (620), flexible (630), bases and subbases (660), tapers (670). Geometry is in Chapters 200–400.</li>
<li><b>Standard Specifications</b> and <b>Standard Plans</b>: materials and construction. Section 39 covers asphalt concrete; Section 40 concrete pavement. The 2026 edition was published October 19, 2026.</li>
<li><b>MTAG</b> (Maintenance Technical Advisory Guide) and the <b>Concrete Pavement Guide</b>: preservation and rehab strategies.</li>
<li><b>LCCA Procedures Manual</b>: life-cycle cost for pavement type selection.</li>
<li><b>California MUTCD</b>: striping, signs and temporary traffic control in work zones.</li></ul>`,
k:"Design in the HDM, build to the Standard Specifications, maintain with MTAG, control traffic with the CA MUTCD."},
{t:"The structural section", ref:"HDM Chapter 660 · Topic 662",
h:`<p>From the top down:</p>
<ol><li><b>Surface course</b>: HMA, RHMA or concrete; takes traffic and weather directly.</li>
<li><b>Base</b>: aggregate base or treated base. Treated bases include HMA Type A, lean concrete base (LCB), and cement-treated base.</li>
<li><b>Subbase</b>: aggregate subbase where needed to build up thickness and support.</li>
<li><b>Subgrade</b>: the native or imported soil the section sits on.</li></ol>
<p>Overlays add new surface layers on top of an existing section.</p>`,
k:"Surface, base, subbase, subgrade. Each layer can be a VE target if it is thicker or stronger than it needs to be."},
{t:"Design inputs", ref:"HDM Topics 613, 615, 623",
h:`<ul><li><b>Traffic Index (TI)</b>: a measure of truck loading over the design life, from ESALs (HDM Topic 613).</li>
<li><b>Subgrade</b>: strength and soil type.</li>
<li><b>Climate region</b>: California is divided into regions such as South Coast, Inland Valley, High Mountain and Desert (HDM Topic 615). Climate drives binder grade and rigid pavement thickness.</li></ul>
<p>Rigid sections are selected from the HDM <b>Rigid Pavement Design Catalog</b> (Table 623.1) by TI, climate group, subgrade type and shoulder type.</p>`,
k:"Higher TI, weaker subgrade and harsher climate all push sections thicker."},
{t:"Design life", ref:"HDM Topic 612 · Table 622.2",
h:`<p>HDM Topic 612 sets pavement design life, the period a pavement is engineered to perform before reaching its performance thresholds.</p>
<ul><li>New construction and reconstruction: <b>20 or 40 years</b>, selected with life-cycle cost analysis.</li>
<li>Concrete: 40 years for JPCP and CRCP (Table 622.2).</li>
<li>Roadway rehabilitation: at least 20 years. Where AADT is 12,000 or more, or the existing pavement is rigid, 20 or 40 years by lowest life-cycle cost.</li>
<li>CAPM (capital preventive maintenance) strategies last roughly 5 to under 20 years.</li></ul>`,
k:"Design life is a choice made with LCCA, and it changes thickness, cost and future closures."},
{t:"Choosing rigid or flexible", ref:"HDM Topics 611, 619 · LCCA Procedures Manual",
h:`<p>HDM Topic 611 directs that life-cycle cost analysis (Topic 619) support pavement type selection. In general:</p>
<ul><li><b>Rigid</b>: higher initial cost, long life, fewer interventions. Favored on heavy truck routes and long design lives.</li>
<li><b>Flexible</b>: lower initial cost, periodic seals and overlays, easier to stage and to raise the profile in steps.</li></ul>
<p>Maintenance differs too. Flexible: seals, thin overlays, cold plane and overlay. Rigid: joint and spall repair, slab replacement, grinding, dowel bar retrofit.</p>`,
k:"Type selection is an LCCA result, not a preference. User delay from future closures belongs in the analysis."},
{t:"Lane width", ref:"HDM Index 301.1",
h:`<p>HDM Index 301.1: the minimum lane width on two-lane and multilane highways, ramps, collector-distributor roads and other appurtenant roadways is <b>12 feet</b>, with listed exceptions.</p>
<ul><li>Exceptions cover some lower-speed conventional highways in town centers.</li>
<li>Where a highway connects to a freeway within an interchange, the lanes (or the outermost lane of a multilane highway) are 12 feet.</li>
<li>On curves with radii of 300 feet or less, widening for offtracking must be considered.</li></ul>`,
k:"12 feet is the default on State highways and ramps. Narrower lanes are exceptions with conditions."},
{t:"Shoulders and rumble strips", ref:"HDM Index 302.1 · Table 302.1",
h:`<p>Table 302.1 gives the <b>minimum continuous usable paved shoulder width</b> by facility type. Freeway outside shoulders are commonly 10 feet; inside shoulder widths step up with the number of lanes. Look up the exact value for the facility rather than assuming.</p>
<p>Where shoulder rumble strips are used, Index 302.1 requires a minimum of <b>4 feet</b> of shoulder to the right of the rumble strip when a vertical element (curb, guardrail) is present, or <b>3 feet</b> when none is present.</p>`,
k:"Shoulder narrowing is a frequent VE idea, and Table 302.1 is the first check."},
{t:"Mandatory, advisory, and design decisions", ref:"HDM Chapter 80 · PDPM Chapter 21",
h:`<p>HDM standards come in two strengths:</p>
<ul><li><b>Mandatory</b> standards, printed in <b>boldface</b>, use <i>shall</i>.</li>
<li><b>Advisory</b> standards, <u>underlined</u>, use <i>should</i>.</li></ul>
<p>Deviating from either is documented through the <b>Design Standard Decision</b> process in PDPM Chapter 21. Mandatory deviations need a higher level of approval. A VE alternative that reduces a standard (narrower shoulders, steeper slopes) must be carried through this process.</p>`,
k:"A VE alternative below standard is not rejected automatically; it needs a documented design decision."},
{t:"Striping and work zones", ref:"CA MUTCD Parts 3 and 6 · Standard Plans T-series",
h:`<p>The <b>California MUTCD</b> governs pavement markings (Part 3) and temporary traffic control in work zones (Part 6). Standard Plans T-sheets show traffic control system layouts.</p>
<p>Any staging or closure alternative has to fit CA MUTCD temporary traffic control: lane widths during stages, taper lengths, and how traffic is shifted. A staging idea that cannot be laid out within it does not survive development.</p>`,
k:"Staging alternatives are checked against CA MUTCD Part 6 before anyone prices them."}
],
mid:[
{s:"Pavement families", q:"How does a rigid pavement carry load compared with a flexible pavement?",
 o:["It relies only on the subgrade","The stiff slab spreads load over a wide area by bending","It uses thicker aggregate layers","It carries load through the surface course only"], a:1,
 e:"Rigid slabs spread load through stiffness. Flexible pavements spread it down through layers."},
{s:"Structural section", q:"Which list is in order from top to bottom?",
 o:["Base, surface, subgrade, subbase","Surface, base, subbase, subgrade","Subbase, base, surface, subgrade","Surface, subgrade, base, subbase"], a:1,
 e:"Surface course, base, subbase, subgrade."},
{s:"Design life", q:"Under HDM Topic 612, how is a 20- or 40-year design life chosen for new construction?",
 o:["By the contractor","By life-cycle cost analysis","Always 20 years","By the district director"], a:1,
 e:"HDM Topic 612 ties the choice to life-cycle cost; concrete catalog designs use 40 years."}
],
quiz:[
{s:"Terminology", q:"What is composite pavement?",
 o:["Concrete over aggregate base","A flexible layer over a rigid pavement","Two layers of RHMA","Precast panels"], a:1,
 e:"HDM Topic 611 describes composite pavement as flexible over rigid, mostly used to maintain and rehabilitate concrete."},
{s:"Documents", q:"Which document governs temporary traffic control layouts in work zones?",
 o:["HDM Chapter 630","California MUTCD Part 6","PDPM Chapter 19","MTAG"], a:1,
 e:"CA MUTCD Part 6 covers temporary traffic control."},
{s:"Documents", q:"Which Standard Specifications section covers asphalt concrete (HMA, RHMA-G, OGFC)?",
 o:["Section 26","Section 39","Section 40","Section 90"], a:1,
 e:"Section 39 covers asphalt concrete. Section 40 covers concrete pavement."},
{s:"Design inputs", q:"What does the Traffic Index represent?",
 o:["Daily car volume","Truck loading over the design life","Posted speed","Number of lanes"], a:1,
 e:"TI is derived from equivalent single axle loads over the design period."},
{s:"Design inputs", q:"Which inputs select a section from the Rigid Pavement Design Catalog?",
 o:["Lane width and speed","TI, climate group, subgrade type and shoulder type","Contractor and season","Only TI"], a:1,
 e:"HDM Table 623.1 is organized by those factors."},
{s:"Rehabilitation", q:"A rehabilitation project has AADT of 18,000. What design life applies under HDM Topic 612?",
 o:["10 years","20 or 40 years, by lowest life-cycle cost","5 years","60 years"], a:1,
 e:"At AADT of 12,000 or more, or with existing rigid pavement, rehab design life is 20 or 40 years by lowest LCC."},
{s:"Type selection", q:"Which statement fits rigid pavement relative to flexible?",
 o:["Lower initial cost, more frequent overlays","Higher initial cost, longer life, fewer interventions","Same cost and life","Cannot be used on ramps"], a:1,
 e:"Rigid usually costs more up front and lasts longer with fewer interventions."},
{s:"Geometry", q:"What is the HDM minimum lane width on State highway ramps, absent a listed exception?",
 o:["10 feet","11 feet","12 feet","14 feet"], a:2,
 e:"HDM Index 301.1 sets 12 feet on highways, ramps and appurtenant roadways."},
{s:"Rumble strips", q:"A shoulder has guardrail and a grooved rumble strip. How much shoulder is required to the right of the rumble strip?",
 o:["2 feet","3 feet","4 feet","8 feet"], a:2,
 e:"Index 302.1: 4 feet with a vertical element present, 3 feet without."},
{s:"Standards", q:"A VE alternative narrows a shoulder below a boldface HDM standard. What is required?",
 o:["Nothing","A Design Standard Decision documented per PDPM Chapter 21, at the approval level for mandatory standards","Contractor concurrence","A VECP"], a:1,
 e:"Boldface standards are mandatory; deviations go through the Design Standard Decision process."}
]},

/* ============================== INTERMEDIATE ============================== */
i:{ title:"Pavement Types and Rehab Strategies",
lessons:[
{t:"Caltrans asphalt mixes", ref:"HDM Topic 631 · Std Specs Section 39",
h:`<ul><li><b>HMA Type A</b>: dense-graded, the most common structural mix. Can include reclaimed asphalt pavement (RAP).</li>
<li><b>RHMA-G</b>: rubberized gap-graded. A structural surface course using asphalt rubber binder (crumb rubber modifier). Used in part to meet Public Resources Code 42703 crumb rubber requirements.</li>
<li><b>Open-graded friction courses</b> (HMA-O, RHMA-O, RHMA-O-HB): non-structural wearing courses for drainage, spray and noise. Maximum thickness 0.15 ft.</li></ul>`,
k:"Type A and RHMA-G carry structure. Open-graded courses do not."},
{t:"HMA versus RHMA-G", ref:"HDM Index 631.3, 631.5 · MTAG Vol. I",
h:`<p>RHMA-G resists reflective cracking and is commonly used as a surface course over HMA and occasionally over concrete. Rules in HDM 631 that drive design and staging:</p>
<ul><li>Minimum RHMA-G thickness: <b>0.10 ft</b>.</li>
<li>Place RHMA-G over HMA or concrete, not directly on aggregate base.</li>
<li>Do not place conventional HMA over new RHMA-G, except HMA-O.</li>
<li>Do not place HMA or RHMA-G over an open-graded course.</li></ul>
<p>MTAG notes RHMA-G should not go on structurally unsound pavement, and not on bridge decks without Division of Structures approval. RHMA-G is more temperature sensitive during haul and placement.</p>`,
k:"Layer-order rules for RHMA-G constrain staging as much as structure does."},
{t:"Binder grades", ref:"HDM Table 632.1 · Std Specs Section 92",
h:`<p>Caltrans uses <b>Performance Graded (PG)</b> binders. PG 64-10 meets criteria at a 64°C high pavement temperature and −10°C low.</p>
<ul><li>Grade is selected by climate region (HDM Table 632.1).</li>
<li><b>Polymer-modified (PM)</b> binders such as PG 64-28 PM or PG 58-34 PM cost more and are used where climate or traffic demands more performance.</li>
<li>RHMA uses asphalt rubber binder; Caltrans requires extender oil as a modifier in asphalt rubber.</li></ul>`,
k:"Binder grade follows climate. Premium binders belong where the climate or layer position needs them."},
{t:"Concrete pavement types", ref:"HDM Topic 621",
h:`<ul><li><b>JPCP</b> (jointed plain concrete): the most common Caltrans rigid pavement. Joints control cracking; dowel bars and tie bars are the only steel. Recommended for truck routes, ramps, urban streets, High Mountain and High Desert regions, and where there is not enough space or time for CRCP.</li>
<li><b>CRCP</b> (continuously reinforced): no sawn transverse joints; reinforcement holds tight random cracks at about 2 to 7 ft. Higher initial cost, can be more cost-effective over life. Not used in High Mountain or High Desert.</li>
<li><b>SJPCP-COA</b>: short (about 6 ft) slabs as a concrete overlay on asphalt; 20-year design life.</li>
<li><b>Precast concrete pavement</b>: panels placed in short closures.</li></ul>`,
k:"PCC is the material. JPCP, CRCP and SJPCP-COA are pavement types built from it."},
{t:"Bases under concrete", ref:"HDM Table 623.1D · Topic 662",
h:`<p>The Rigid Pavement Design Catalog uses two base types:</p>
<ul><li><b>HMA Type A</b>, minimum 0.25 ft</li>
<li><b>Lean concrete base (LCB)</b>, minimum 0.35 ft</li></ul>
<p>HMA Type A is the only base type used under CRCP. Between JPCP and LCB, a bond breaker interlayer prevents the slab from bonding to the base and cracking with it.</p>`,
k:"Base type is a catalog variable, so changing it changes slab thickness. Price both together."},
{t:"Cold plane and overlay", ref:"MTAG Vol. I · HDM Topic 671",
h:`<p>An overlay alone raises the profile. That affects curb reveal, dikes, barrier and guardrail height, drainage inlets, and vertical clearance under structures.</p>
<p><b>Cold planing</b> (grinding) removes distressed surface material first, so the overlay restores the surface without raising grades. Depth of cold plane, overlay material and thickness are the main variables. HDM Topic 671 provides taper details where new surfaces meet existing pavement.</p>`,
k:"Mill-and-fill protects grades and clearances. Overlay-only is cheaper until it forces barrier, dike and inlet work."},
{t:"Cold recycling: PDR, CCPR, FDR", ref:"MTAG Vol. I Ch. 14 · Caltrans Recycling Guide · CT 314–316",
h:`<ul><li><b>Partial Depth Recycling (PDR)</b>, formerly cold in-place recycling (CIR): the existing asphalt is milled, treated with recycling agents and re-laid in place as a base, then surfaced with HMA or RHMA.</li>
<li><b>Cold Central Plant Recycling (CCPR)</b>: milled material is processed at a nearby mobile plant, returned and placed with a paver. Multiple layers are possible, and underlying layers can be stabilized.</li>
<li><b>Full Depth Recycling (FDR)</b>: recycles through the asphalt into the base, often with cement or foamed asphalt.</li></ul>
<p>Mix design test methods: CT 315 (PDR), CT 316 (CCPR), CT 314 (FDR with cement).</p>`,
k:"Cold recycling reuses the existing pavement as structure, cutting haul, virgin material and cost."},
{t:"Concrete rehabilitation", ref:"Concrete Pavement Guide Ch. 300s · MTAG Vol. II",
h:`<ul><li><b>Individual slab replacement</b>: removes and replaces cracked slabs, often with rapid strength concrete.</li>
<li><b>Lane replacement</b>: replaces full lanes, usually the truck lane.</li>
<li><b>Dowel bar retrofit</b>: restores load transfer at joints. Caltrans built concrete pavements without dowels before 1998.</li>
<li><b>Diamond grinding</b>: restores smoothness and removes faulting.</li>
<li><b>Spall repair</b> and joint resealing.</li></ul>`,
k:"Undoweled pre-1998 concrete often needs dowel bar retrofit or replacement, not just grinding."},
{t:"Rapid strength concrete", ref:"HDM Topic 621 · Std Specs Section 40 · CPD 22-6",
h:`<p>RSC gains strength in hours. HDM Topic 621 lists it for cases where rapid construction (typically 3 days or less) and early opening to traffic matter most.</p>
<ul><li>Caltrans opens RSC pavement when it reaches a minimum <b>modulus of rupture of 400 psi</b> (flexural strength).</li>
<li>Typical use: overnight slab replacement in closures such as 10 p.m. to 5 a.m., and ramps that must reopen before the morning peak.</li>
<li>Materials and QC cost more than conventional concrete. The case rests on closure duration and user delay.</li>
<li>CPD 22-6 allows the maturity method to determine opening strength.</li></ul>`,
k:"RSC buys closure time with material cost. Price the closures it avoids, not just the concrete."},
{t:"Picking a rehab strategy", ref:"HDM Topics 612, 619 · LCCA Procedures Manual",
h:`<p>Candidate strategies are compared over a common analysis period with RealCost 2.5CA, including future maintenance, rehabilitation and work-zone user costs.</p>
<p>Example: a ramp with failed slabs. Option 1, nightly RSC slab replacement with no daytime impact. Option 2, a two-week full closure with a detour using conventional concrete. Option 2's material is cheaper; its detour user cost may not be.</p>`,
k:"The strategy with the cheapest material is often not the cheapest once closures are priced."}
],
mid:[
{s:"Mixes", q:"Which Caltrans asphalt mix is a non-structural wearing course?",
 o:["HMA Type A","RHMA-G","RHMA-O","Lean concrete base"], a:2,
 e:"Open-graded friction courses (HMA-O, RHMA-O, RHMA-O-HB) are non-structural."},
{s:"Layer rules", q:"Which placement follows HDM 631 layer rules?",
 o:["Conventional HMA over new RHMA-G","RHMA-G directly on aggregate base","RHMA-G over an HMA surface course","RHMA-G over RHMA-O"], a:2,
 e:"RHMA-G goes over HMA or concrete. HMA over new RHMA-G, RHMA-G on aggregate base, and RHMA-G over open-graded are not allowed."},
{s:"Concrete types", q:"Which rigid pavement uses continuous reinforcement instead of sawn transverse joints?",
 o:["JPCP","CRCP","SJPCP-COA","Lean concrete base"], a:1,
 e:"CRCP relies on reinforcement to hold random transverse cracks tight."}
],
quiz:[
{s:"Mixes", q:"What is the minimum RHMA-G thickness in HDM 631?",
 o:["0.05 ft","0.10 ft","0.15 ft","0.25 ft"], a:1,
 e:"HDM sets 0.10 ft as the minimum RHMA-G thickness."},
{s:"Binder", q:"What do the numbers in PG 64-10 describe?",
 o:["Percent rubber and percent RAP","High and low pavement temperatures (°C) the binder is graded for","Thickness in hundredths of a foot","Mix temperature range"], a:1,
 e:"64°C high and −10°C low pavement temperatures."},
{s:"Binder", q:"Why are polymer-modified binders not used everywhere?",
 o:["They are banned on State highways","They cost more, and unmodified binder is adequate in many climates and layers","They cannot be compacted","They are only for concrete"], a:1,
 e:"PM binders add cost and are reserved for climates and positions that need the performance."},
{s:"Concrete", q:"Which rigid pavement type does the HDM recommend for ramps?",
 o:["CRCP","JPCP","SJPCP-COA","Precast only"], a:1,
 e:"JPCP is recommended for truck routes, ramps, urban streets, and where space or time does not allow CRCP."},
{s:"Base", q:"Which base type is used under CRCP?",
 o:["Lean concrete base","HMA Type A","Aggregate base only","Cement-treated base"], a:1,
 e:"HMA Type A is the only base type used under CRCP."},
{s:"Overlay", q:"Which issue does cold plane and overlay avoid that an overlay alone can cause?",
 o:["Raising the profile and affecting barrier heights, dikes, inlets and clearances","Using asphalt","Night work","Traffic control"], a:0,
 e:"Milling first keeps grades. Overlay-only raises the surface."},
{s:"Recycling", q:"What distinguishes CCPR from PDR?",
 o:["CCPR uses virgin aggregate only","CCPR processes milled material at a nearby plant before placing it with a paver; PDR recycles in place","PDR uses a central plant","They are identical"], a:1,
 e:"PDR (formerly CIR) is in place. CCPR uses a mobile or central plant."},
{s:"Concrete rehab", q:"An existing JPCP built in 1990 shows faulting at joints. Which strategy addresses load transfer?",
 o:["Fog seal","Dowel bar retrofit","Open-graded overlay","Striping"], a:1,
 e:"Caltrans concrete before 1998 was undoweled. Dowel bar retrofit restores load transfer."},
{s:"RSC", q:"What strength must RSC pavement reach before Caltrans opens it to traffic?",
 o:["Modulus of rupture of 400 psi","Compressive strength of 10,000 psi","28-day strength","Any strength after 1 hour"], a:0,
 e:"Caltrans specifications use a minimum modulus of rupture of 400 psi at opening age."},
{s:"Strategy", q:"An off-ramp needs slab replacement and must reopen before 5 a.m. each day. Which approach fits?",
 o:["Conventional concrete with a 7-day cure","Nightly RSC slab replacement","CRCP lane replacement","Leave the slabs"], a:1,
 e:"RSC allows overnight replacement and reopening within the closure window."}
]},

/* ============================== ADVANCED ============================== */
a:{ title:"Materials, Interfaces and Constructability",
lessons:[
{t:"The HMA under the concrete", ref:"HDM Table 623.1D, note 2 · Caltrans research Task 4226",
h:`<p>HMA Type A used as base under JPCP or CRCP is shielded from surface temperature extremes and direct tire loading. HDM Table 623.1D allows its binder to be <b>PG 64-10 or PG 64-16 regardless of climate zone</b>.</p>
<p>A common VE finding: the base HMA specified with the same climate-driven or polymer-modified binder as a surface course elsewhere on the job. Specifying the allowed base binder reduces cost with no change to the catalog design.</p>
<p>Caltrans research (Task 4226) is piloting HMA bases and interlayers for concrete pavement with higher RAP content and recycled rubber.</p>`,
k:"Base HMA under concrete does not need the surface course's binder. Check the spec against Table 623.1D."},
{t:"Mix transitions", ref:"Std Specs Section 39 · HDM Topic 632",
h:`<p>Each change of mix or binder (PG 64-28 PM to standard HMA, HMA to RHMA-G) adds a construction joint, a plant changeover, and its own QC and acceptance lots.</p>
<p>On short segments, several mix types can cost more in joints and changeovers than they save in material. Organize mixes by <b>layer</b> rather than by small areas. A long-life asphalt section on I-5 in Sacramento used RHMA-O over PG 64-28 PM (up to 15% RAP) over PG 64-16 (up to 25% RAP): premium binder at the surface, standard binder below.</p>`,
k:"Assign binders by layer position. Patchwork mix changes across short areas add joints and cost."},
{t:"Where RHMA-G meets concrete", ref:"HDM Index 631.3 · HDM Topic 671",
h:`<p>RHMA-G has a 0.10 ft minimum thickness and a gap-graded aggregate structure, so it does not feather to a thin edge the way a fine dense-graded mix can. Where an RHMA-G overlay meets concrete pavement, an approach slab or an existing surface:</p>
<ul><li>the conform needs depth, typically by cold planing the existing surface rather than tapering the overlay to nothing</li>
<li>the vertical interface with concrete is a water path and a raveling point if edge density is low</li>
<li>HDM Topic 671 details govern transition tapers</li></ul>`,
k:"Plan RHMA-G conforms with cold-plane depth. Thin feathered RHMA-G edges at concrete ravel."},
{t:"Layer-order rules and staging", ref:"HDM Index 631.3",
h:`<p>Two HDM rules shape staging: no conventional HMA over new RHMA-G (except HMA-O), and no HMA or RHMA-G over open-graded courses.</p>
<p>If an early stage receives its final RHMA-G surface and a later stage needs a temporary conform or leveling on top of it, conventional HMA cannot be used there. Sequencing final surfacing for the last stage, or using a full-width final lift, avoids the conflict.</p>`,
k:"Sequence final RHMA-G after the last stage that would need to pave over it."},
{t:"Cold joints on ramps", ref:"Std Specs Section 39 · Construction Manual 4-3903D(3)",
h:`<p>Ramps are often paved in multiple passes to keep a lane open. Each pass leaves a <b>cold longitudinal joint</b>, where the unconfined edge of the first pass compacts to lower density than the mat interior. Low-density joints let water in and ravel first.</p>
<ul><li>Keep top-layer joints at lane lines, out of wheel paths.</li>
<li>Stagger joints between layers so they do not stack.</li>
<li>Where possible, pave full width under a full closure with detour, or in echelon.</li></ul>
<p>Section 39 and Construction Manual 4-3903D(3) contain the joint requirements and inspection guidance.</p>`,
k:"A full ramp closure for one full-width pass can be the better pavement and the shorter schedule."},
{t:"RSC performance risks", ref:"Caltrans Mile Marker (Jan 2024) · Caltrans RSC slab studies",
h:`<p>Caltrans field surveys of RSC slabs found that individual replacement slabs (often thinner, with longer joint spacing than full lane replacements) showed more cracking than lane replacements.</p>
<ul><li>Fiber-reinforced RSC is in pilot use: fibers hold cracks closed and keep residual strength after cracking.</li>
<li>Caltrans requires just-in-time training for RSC paving.</li>
<li>Curing temperature and timing control early strength, so opening decisions depend on testing or maturity data.</li></ul>`,
k:"RSC slab geometry and QC drive performance. A cheap RSC detail can become a repeat closure."},
{t:"CRCP constructability", ref:"HDM Topic 621 · Concrete Pavement Guide 200.4–200.5",
h:`<p>CRCP brings details that JPCP does not: terminal joints or end anchors where it meets other pavements and bridges, pavement end transitions, temporary construction gaps, and HMA Type A base only.</p>
<p>On short segments, ramps, or projects with many tie-ins and stage breaks, those details add cost and risk. That is part of why the HDM points ramps and constrained work to JPCP.</p>`,
k:"CRCP pays off on long continuous runs. Many tie-ins favor JPCP."},
{t:"Widening next to concrete", ref:"Caltrans Pavement Smoothness Guidelines · HDM Topic 622",
h:`<p>Caltrans smoothness guidance states that before a concrete widening or lane replacement begins, the adjacent existing concrete lanes should be <b>ground full width</b>, so the new lane can match a true surface.</p>
<p>Other checks: tie bars into existing slabs, matching the existing joint pattern, and existing undoweled slabs next to new doweled ones. Leaving grinding out of the baseline understates cost; adding it late creates change orders.</p>`,
k:"Include full-width grinding of adjacent concrete in the estimate for concrete widening."},
{t:"Profile and clearance constraints", ref:"HDM Topic 671 · HDM Topic 309",
h:`<p>Pavement thickness interacts with grades. Under an overcrossing, an overlay reduces vertical clearance; HDM Topic 671 notes that a transition under a structure may require removing and replacing the pavement structure to keep clearance.</p>
<p>For recycling options, the existing asphalt must be thick enough to mill and recycle. Cores and the as-built structural section decide whether PDR or CCPR is viable before the idea is developed.</p>`,
k:"Check clearances and existing thickness before developing overlay or recycling alternatives."},
{t:"Longer design lives", ref:"UCPRC-RR-2024-02 · HDM Topic 612",
h:`<p>A 2024 UC Pavement Research Center study for Caltrans found that extending JPCP and CRCP design life from 40 to 60 years needs about <b>0.05 ft</b> (0.6 in) more slab thickness. It estimated about 3% life-cycle agency cost savings and 24% lower life-cycle infrastructure global warming potential, and recommended adding design lives up to 60 years to the HDM.</p>
<p>The web Rigid Pavement Design Catalog was updated to allow any design life up to 100 years.</p>`,
k:"A small thickness increase can buy two decades of avoided closures. It is a legitimate VE alternative."}
],
mid:[
{s:"Base binder", q:"What binder does HDM Table 623.1D allow for HMA Type A base under concrete?",
 o:["Only PG 64-28 PM","PG 64-10 or PG 64-16 regardless of climate zone","Asphalt rubber binder","The same grade as the surface course"], a:1,
 e:"The base is shielded from surface conditions, so either standard grade is allowed in any climate zone."},
{s:"RHMA-G conform", q:"Why does an RHMA-G overlay need cold-plane depth where it conforms to concrete?",
 o:["RHMA-G cannot be placed at night","With a 0.10 ft minimum and gap grading it does not feather thin, so a thin taper ravels","Concrete must be overlaid","It reduces striping"], a:1,
 e:"Cold planing provides depth so the mix is not feathered below what it can hold."},
{s:"Ramp joints", q:"Where should longitudinal joints in the top asphalt layer of a ramp be placed?",
 o:["In the wheel paths","At lane lines, out of wheel paths, staggered from lower-layer joints","Anywhere convenient","Stacked over lower joints"], a:1,
 e:"Joints have lower density. Keeping them out of wheel paths and staggered limits distress."}
],
quiz:[
{s:"Base binder", q:"A project specifies PG 64-28 PM in the HMA base under JPCP in an Inland Valley location. What is the VE observation?",
 o:["Required by the HDM","Table 623.1D allows PG 64-10 or PG 64-16 for base under concrete; the premium binder is not needed there","Base must be RHMA-G","Base HMA is not allowed under JPCP"], a:1,
 e:"Standard binder is allowed for base HMA under concrete regardless of climate zone."},
{s:"Mix changes", q:"A 0.6-mile project has four asphalt mixes assigned by small areas. What is the main cost concern?",
 o:["None","Extra joints, plant changeovers and separate QC lots","Lower smoothness pay","Fewer trucks"], a:1,
 e:"Each mix change adds joints and changeovers. Organizing by layer reduces them."},
{s:"Layering", q:"In the I-5 Sacramento long-life asphalt section, where was the polymer-modified binder used?",
 o:["In the lowest layer","In the layer just below the open-graded surface","In the subgrade","Nowhere"], a:1,
 e:"RHMA-O over PG 64-28 PM over PG 64-16: premium binder near the surface, standard binder below."},
{s:"Staging", q:"Stage 1 receives its final RHMA-G. Stage 2 later needs a leveling course on top of part of Stage 1. Which problem appears?",
 o:["None","Conventional HMA cannot be placed over new RHMA-G under HDM 631","RHMA-G must be removed","Stage 2 must use concrete"], a:1,
 e:"Sequence the final RHMA-G after the stages that would pave over it."},
{s:"Ramp paving", q:"Which option most directly avoids a cold longitudinal joint on a single-lane ramp?",
 o:["Two half-width passes","A full-width pass under a full closure with detour","A thicker first pass","Adding RAP"], a:1,
 e:"Full-width placement eliminates the cold joint."},
{s:"RSC", q:"Caltrans surveys found more cracking in which RSC application?",
 o:["Full lane replacements","Individual slab replacements, often thinner with longer joint spacing","Bridge decks","Shoulders"], a:1,
 e:"Individual replacement slabs showed more cracking than lane replacements."},
{s:"CRCP", q:"Why does the HDM point ramps and heavily staged work toward JPCP rather than CRCP?",
 o:["CRCP cannot carry trucks","CRCP needs end anchors, terminal joints and continuity details that add cost and risk on short, interrupted runs","JPCP has no joints","CRCP is banned in California"], a:1,
 e:"CRCP's continuity details are efficient on long runs and costly where tie-ins are frequent."},
{s:"Widening", q:"Before a concrete lane widening, what does Caltrans smoothness guidance call for on the adjacent existing concrete?",
 o:["Nothing","Full-width grinding of the existing lanes","An asphalt overlay","Sealing only"], a:1,
 e:"Grinding the existing lanes full width gives the new work a true surface to match."},
{s:"Clearance", q:"An overlay alternative passes under an overcrossing with minimal vertical clearance. What may be required?",
 o:["Nothing","Removing and replacing the pavement structure under the bridge to keep clearance","Raising the bridge","A thicker overlay"], a:1,
 e:"HDM Topic 671 notes transitions under structures may need removal and replacement."},
{s:"Design life", q:"Per UCPRC's 2024 study, roughly how much extra JPCP thickness takes design life from 40 to 60 years?",
 o:["0.05 ft","0.25 ft","0.50 ft","1.0 ft"], a:0,
 e:"About 0.05 ft (0.6 in), with an estimated 3% life-cycle agency cost saving."}
]}
},
notes:[
{h:"10% RAP in RHMA-G is now a contractor option", p:"After five pilot projects (2022–2023) found minor effects on mechanical properties and up to 5% lower production GHG, CPD 26-2 (Feb 20, 2026) lets contractors request the 10% RAP in RHMA-G nSSPs by no-cost change order on projects with less than 10,000 tons of RHMA-G. Caltrans aims to revise Section 39 to allow it.", src:"CPD 26-2; UCPRC pilot report; METS nSSP 39-2.14"},
{h:"High-RAP conventional HMA pilots", p:"Caltrans and industry developed nonstandard specifications allowing up to 40% RAP in conventional asphalt mixes, evaluated through pilot projects with UCPRC.", src:"Caltrans Pavement & Materials Partnering Committee"},
{h:"Cold recycling scale-up", p:"Caltrans passed its 100th Partial Depth Recycling project and is expanding Cold Central Plant Recycling through the Office of Pavement Recycling and Job Order Contracts.", src:"Caltrans News (Jan 2026); CP2C newsletter (Sep 2023)"},
{h:"60-year concrete design lives", p:"UCPRC-RR-2024-02 recommends adding design lives up to 60 years to the HDM for JPCP and CRCP; the web Rigid Pavement Design Catalog already allows up to 100 years.", src:"UCPRC-RR-2024-02"},
{h:"Fiber-reinforced RSC pilots", p:"Division of Maintenance pilots of fiber-reinforced RSC target cracking in slab replacements; fibers retain residual strength after cracking.", src:"Caltrans Mile Marker, Jan 2024"},
{h:"Opening concrete by measured strength", p:"CPD 22-6 allows the maturity method for opening strength, and pooled-fund study TPF-5(471) is developing real-time sensing of early-age concrete strength.", src:"CPD 22-6; Caltrans Research Notes Task 4012"},
{h:"Greener bases under concrete", p:"Caltrans Task 4226 is piloting HMA bases and interlayers for JPCP and CRCP with high RAP content and recycled tire rubber.", src:"Caltrans Research Notes Task 4226"},
{h:"2026 Standards are in effect", p:"The 2026 Standard Specifications and Standard Plans were published Oct 19, 2026; the 2025 Standards are no longer supported for new submittals. Confirm section numbers against the current edition.", src:"Caltrans 2026 Standards implementation memo"}
]
};
