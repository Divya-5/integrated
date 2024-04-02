import { Title } from 'libs/shared/utility/title';
import Copy from 'libs/shared/utility/title';

export function App() {
  return (
    <>
      <div className="header">
        <h1>Clearcorrect</h1>
      </div>
      <div className="box">
        <Title text="Jeff Goldblum says:" />
        <Copy />
      </div>
    </>
  );
}

export default App;
