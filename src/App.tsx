import { Fragment } from "react";
import { Home } from "./app/pages/Home";


/** 
 * App component that returns all the site content
 * @returns JSX.Element
 */

const App = (): JSX.Element => {
  return (
    <Fragment>
      <Home />
    </Fragment>
  );
}

export default App;
