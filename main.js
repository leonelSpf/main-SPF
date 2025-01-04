import testings from "./all_Modules_Js/TESTING.js";
import asideAllSections from "./all_Modules_Js/aside_All_Sections.js";
import ChainOfCommands from "./all_Modules_Js/Chain_Of_Commands.js";
import jerarquia from "./all_Modules_Js/hierarchicall_Scale.js";
import sectionsBasic from "./all_Modules_Js/load_Basicsections.js";
import section_chainOfCommands from "./all_Modules_Js/section_chainOfCommands.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  testings();

  ChainOfCommands();
  jerarquia();
  section_chainOfCommands(".container-allCommands");
  asideAllSections();
  sectionsBasic();
});
