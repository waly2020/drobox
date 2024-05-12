import Routing from "./routes/Routes";
import { withAuthenticator} from '@aws-amplify/ui-react';

function App() {
  return (
    <Routing/>
  );
}

export default withAuthenticator(App);
