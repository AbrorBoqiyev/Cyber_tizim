import { Route, Routes, useLocation  } from "react-router-dom";
import Navigation from "./Navigation";
import Teachers from "./Teachers";
import Students from "./Students";




function AllComponents(props) {
    const location = useLocation()

    return ( 
        <>
            <Routes location={location} key={ location.pathname }>
                <Route path="/" element={< Navigation />}>
                    <Route index element={< Teachers />} />
                    <Route path="students" element={< Students />}/>
                </Route>
            </Routes>
        </>
     );
}

export default AllComponents;