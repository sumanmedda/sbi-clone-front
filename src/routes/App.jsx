import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Container from "../components/Container"
import Footer from "../components/Footer"
import FetchUserDetails from "../components/FetchUserDetails.jsx"

function App(){
    return<>
        <Container>
            <Header />
            <FetchUserDetails />
            <Outlet />
            <Footer />
        </Container>
    </>
}

export default App