import { Route, Routes, useLocation  } from "react-router-dom";
import Navigation from "./Navigation";
import Teachers from "./Teachers";
import Students from "./Students";
import Actives from "./Actives";
import Groups from "./Groups";
import Finance from "./Finance";
import Reports from "./Reports";
import Leads from "./Leads";




function AllComponents(props) {
    const location = useLocation()

    return ( 
        <>
            <Routes location={location} key={ location.pathname }>
                <Route path="/" element={< Navigation />}>
                    <Route index element={< Actives />} />
                    <Route path="/actives" element={< Actives />}/>
                    <Route path="/leads" element={< Leads />}/>
                    <Route path="/teachers" element={< Teachers />}/>
                    <Route path="/groups" element={< Groups />}/>
                    <Route path="/students" element={< Students />}/>
                    <Route path="/finance" element={< Finance />}/>
                    <Route path="/reports" element={< Reports />}/>
                    {/* <Route path="settings" element={<  />}/> */}
                </Route>
            </Routes>
        </>
     );
}

export default AllComponents;