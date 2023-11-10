import Welcome from "./Commands/Welcome";

interface IOutputProps {
  cmd: string;
}

const Output = ({ cmd }: IOutputProps) => {
  switch (cmd) {
    case "welcome":
      return <Welcome />;
    default:
      return <span>Unknown command</span>;
  }
};

export default Output;
