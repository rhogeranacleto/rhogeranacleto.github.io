export const Stack = ({ children }: { children: string }) => {
  return (
    <div className="stack">{children}</div>
  );
};

export const Stacks = () => {
  return (
    <div>
      <h4>Stack</h4>
      <div className="stacks">
        <Stack>TS/JS</Stack>
        <Stack>NodeJS</Stack>
        <Stack>git</Stack>
        <Stack>React</Stack>
        <Stack>CSS</Stack>
        <Stack>SQL</Stack>
        <Stack>C#</Stack>
        <Stack>EmberJS</Stack>
        <Stack>VueJS</Stack>
        <Stack>Angular</Stack>
        <Stack>Tests</Stack>
        <Stack>MongoDB</Stack>
        <Stack>GraphQL</Stack>
        <Stack>Ruby</Stack>
        <Stack>Python</Stack>
        <Stack>Java</Stack>
        <Stack>PHP</Stack>
        <Stack>.NET</Stack>
        <Stack>SHELL</Stack>
        <Stack>Selenium</Stack>
        <Stack>Photoshop</Stack>
      </div>
    </div>
  );
};
