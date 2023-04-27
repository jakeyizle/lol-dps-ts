window.electron.addListener();
window.electron.ping();
import Button from "@mui/joy/Button";

const App: React.FC = () => {
  return (
    <>
      hi
      <Button variant="solid">Hello World</Button>
    </>
  );
};

export default App;

declare global {
  interface Window {
    electron: any;
  }
}
