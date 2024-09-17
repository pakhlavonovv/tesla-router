import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import App from '../../App'
import { MainPage, Model_3, Login, Model_x, SolarRoof } from "@pages";

const Index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<App />}>  
          <Route index element={<Login/>}/>
          <Route path="main-page" element={<MainPage/>}/>
          <Route path="model-3" element={<Model_3/>}/>
          <Route path="model-x" element={<Model_x/>}/>
          <Route path="solar-roof" element={<SolarRoof/>}/>
          </Route>
        )
      );
      return <RouterProvider router={router}/>
}

export default Index