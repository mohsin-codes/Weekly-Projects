import { QueryClient, QueryClientProvider } from "react-query"
import ExchangeRate from "./components/ExchangeRate"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      method: "GET",
      refetchOnWindowFocus: false,
      refetchInterval: 60000,
    },
  },
});

function App(){
  return ( 
    <QueryClientProvider client={queryClient}>
      <ExchangeRate/>
    </QueryClientProvider>
  );
}
export default App
