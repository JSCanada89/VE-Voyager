/* World map. Loaded after all district files. */
window.VE = window.VE || {};
VE.WORLDS = [
{ id:"core", name:"VE Command", kind:"station", first:true, tagline:"Home base. Start here.",
  color:"#ffb84a", x:.5, y:.52, r:.055,
  intro:"The starting point. Four training tracks cover the method and the two skills every study leans on: the SAVE certification competencies for VMA and CVS, risk, and cost estimating. Each track has Beginner, Intermediate and Advanced tiers. Suggested order: VMA Track first, then Risk and Cost Estimating, then CVS Track.",
  guide:`<div class="soonbox" style="max-width:none;margin:0 0 18px"><b style="color:var(--ink)">About the VMA and CVS tracks.</b> They follow the SAVE International Core Competencies (effective 1 October 2025), with each briefing tagged to its competency and VM Guide section. Certification rules come from the SAVE Certification Program Manual, 19th Edition. Briefings and questions were drafted from those documents and SAVE VMF 2 course slides; the wording has not yet been checked against the VM Guide text. This is study support, not SAVE exam material.</div>`,
  districts:[VE.command.vma, VE.command.cvs, VE.command.risk, VE.command.cost]},
{ id:"contracts", name:"Contract Types", kind:"planet", tagline:"Delivery methods · where VE fits",
  color:"#6f55c9", x:.5, y:.2, r:.062,
  tags:["Caltrans · FHWA","Sound Transit · FTA","USACE","NAVFAC"],
  intro:"The delivery method decides who holds the design, when the price is set, and where a VE study can still change the project. Each district covers one method across all client types: whether a study is required, when to hold it, who is in the room, and how savings are handled after award. Suggested order: Design-Bid-Build first, then CM/GC, Design-Build and Progressive Design-Build.",
  guide:`<div class="glance-wrap"><table class="glance"><caption>Four methods at a glance</caption>
<thead><tr><th scope="col">Method</th><th scope="col">Designer works for</th><th scope="col">Builder joins</th><th scope="col">Price set</th><th scope="col">Owner's main VE window</th></tr></thead><tbody>
<tr><th scope="row">Design-Bid-Build</th><td>Owner</td><td>After design, by bid</td><td>At bid</td><td>During design, before the bid package</td></tr>
<tr><th scope="row">CM/GC <small>GC/CM · CMAR · CMc · ECI · heavy civil</small></th><td>Owner</td><td>During design</td><td>Negotiated late in design</td><td>After the builder joins, before pricing</td></tr>
<tr><th scope="row">Design-Build</th><td>Builder</td><td>At award</td><td>At award</td><td>Before the RFP</td></tr>
<tr><th scope="row">Progressive Design-Build</th><td>Builder</td><td>At selection, before design</td><td>Negotiated after Phase 1</td><td>Phase 1, before pricing</td></tr>
</tbody></table></div>`,
  districts:[VE.contracts.dbb, VE.contracts.cmgc, VE.contracts.db, VE.contracts.pdb]},
{ id:"dot", name:"DOT Infrastructure", kind:"planet", tagline:"Caltrans · State Highway System",
  color:"#1f7a4d", x:.24, y:.32, r:.075, ring:true,
  intro:"Federal-aid highway work on the State Highway System. Content is anchored to Caltrans documents: the HDM, PDPM, Standard Specifications, MTAG and the California MUTCD. Clear a tier to unlock the next one.",
  districts:[VE.program, VE.core.bridges, VE.roads, VE.core.its, VE.core.safety]},
{ id:"buildings", name:"Buildings", kind:"planet", locked:true, tagline:"Barracks · building types · PEMB",
  color:"#4c7dbf", x:.78, y:.28, r:.06,
  planned:[["Barracks","unaccompanied housing layouts, module repetition, standards"],["Building types","structural and envelope systems by occupancy"],["PEMB alternatives","pre-engineered metal buildings: use cases and limits"],["On base vs. in the city","site constraints, AT/FP standoff, codes and procurement differences"]]},
{ id:"cba", name:"Choosing By Advantages", kind:"planet", locked:true, tagline:"Decision facilitation",
  color:"#c9a24a", x:.76, y:.78, r:.055,
  planned:[["Factors and criteria","what matters, and must-haves vs. wants"],["Attributes and advantages","describing differences between alternatives"],["Importance of advantages","weighing advantages, not factors"],["Facilitating the decision","running a CBA session with a client team"]]},
{ id:"charrette", name:"Design Charrettes", kind:"planet", locked:true, tagline:"Leading design and planning workshops",
  color:"#d0705a", x:.22, y:.78, r:.055,
  planned:[["Before the charrette","stakeholders, objectives, logistics"],["Running the room","feedback loops, design teams, pin-ups"],["Converging","from options to a preferred concept"],["After","documentation and decisions"]]}
];
