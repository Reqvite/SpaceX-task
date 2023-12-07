import { Navbar } from "@/components/Orgonisms";
import { AppRouter } from "@/global";

function App() {
    return (
        <>
        
            <Navbar />
            <main>
                <AppRouter />
            </main>
        </>
    );
}

export default App;
