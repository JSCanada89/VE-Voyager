/* World map. Loaded after all district files. */
window.VE = window.VE || {};
VE.WORLDS = [
{ id:"core", name:"VE Command", kind:"station", tagline:"Home base. The method every world uses.",
  color:"#ffb84a", x:.5, y:.52, r:.055,
  intro:"Every client world runs on the same engine: the Job Plan and function analysis.",
  districts:[VE.core.jobplan, VE.core.function]},
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
