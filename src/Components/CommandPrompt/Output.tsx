import { Command } from "../../types/cmd";
import About from "./Commands/About";
import Education from "./Commands/Education";
import Socials from "./Commands/Socials";
import GeneralOutput from "./Commands/GeneralOutput";
import Welcome from "./Commands/Welcome";
import Help from "./Commands/Help";
import Gui from "./Commands/Gui";
import History from "./Commands/History";
import Projects from "./Commands/Projects";
import Experience from "./Commands/Experience";

interface IOutputProps {
  cmd: string;
  setCmdHistory: React.Dispatch<React.SetStateAction<string[]>>;
  cmdHistory: string[];
}

const Output = ({ cmd, cmdHistory, setCmdHistory }: IOutputProps) => {
  switch (cmd as Command) {
    case "welcome":
      return <Welcome />;
    case "about":
      return <About />;
    case "education":
      return <Education />;
    case "socials":
      return <Socials />;
    case "gui":
      return <Gui />;
    case "list -a":
      return <Help />;
    case "history":
      return <History commands={cmdHistory} />;
    case "projects":
      return <Projects />;
    case "experience":
      return <Experience />;

    case "clear":
      setCmdHistory([]);
      return null;

    default:
      if (cmd.toLowerCase().startsWith("print ")) {
        const echoedText = cmd.replace(/^print\s+/i, "");
        return <GeneralOutput>{echoedText}</GeneralOutput>;
      }
      if (cmd.trim() === "") {
        return null;
      }
      return (
        <GeneralOutput>
          Unknown command: type `list -a` to view available commands
        </GeneralOutput>
      );
  }
};

export default Output;
