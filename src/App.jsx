import "./App.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "./ApolloClient/client";
import { NavBar } from "./schedule";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="bg-slate-900 dn-l dn-m">
        <NavBar />
      </div>
    </ApolloProvider>
  );
}

export default App;
