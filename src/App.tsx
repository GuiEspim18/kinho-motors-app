import { Fragment } from "react";
import { Header } from "./app/shared/components/Header/Header";


/** 
 * App component that returns all the site content
 * @returns JSX.Element
 */

const App = (): JSX.Element => {
  return (
    <Fragment>
      <Header />
    </Fragment>
  );
}

export default App;
