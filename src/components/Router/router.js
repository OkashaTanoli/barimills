import React from 'react'
import { BrowserRouter, Route,Switch } from "react-router-dom";
import Home from '../Main/main'
import About from '../About/about'
// import Automative from '../products/automative'
import BathRobe from '../products/bathrobe'
import BeachTowel from '../products/beachtowel'
import Contact from '../contact/contact'
import DobbyTowel from '../products/dobbytowel'
import JacquardTowel from '../products/jacquardtowel'
import WashClothsBasic from '../products/wash-cloths-basic'
import KitchenTowelBasic from '../products/kitchen-towel-basic'
import WashClothsFashion from '../products/wash-cloths-fashion'
import KitchenTowelFashion from '../products/kitchen-towel-fashion'
import KitchenTowelOvenMitts from '../products/kitchen-towel-oven-mitts'
// import KitchenTowelPotHolders from '../products/kitchen-towel-pot-holders'
import JerseyBedLinen from '../products/jersey-bed-linen'
import HospitalityTowelWhite from '../products/hospitality-towel-white'
import HospitalityTowelDyed from '../products/hospitality-towel-dyed'
import WarpingAndSizing from '../productionFacility/warpingandsizing'
import Weaving from '../productionFacility/weaving'
import Dyeing from '../productionFacility/dyeing'
import Drying from '../productionFacility/drying'
import Stitching from '../productionFacility/stitching'
import Career from '../career/career'
import MianPage from '../productionFacility/mainpage'
import GroupOfCompanies from '../About/groupofcompanies'
import Sustanibility from '../Sustanibility/sustanibility'
import Video1 from '../videoPages/video1'
import Video2 from '../videoPages/video2'
import Video3 from '../videoPages/video3'
import Video4 from '../videoPages/video4'
import Error from '../ErrorPage/error'

function Rou() {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact  path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/career" component={Career} />
            {/* <Route  path="/automative-towel" component={Automative} /> */}
            <Route exact path="/bath-robe" component={BathRobe} />
            <Route exact path="/beach-towel" component={BeachTowel} />
            <Route exact path="/dobby-towel" component={DobbyTowel} />
            <Route exact path="/jacquard-towel" component={JacquardTowel} />
            <Route exact path="/wash-cloths-basic" component={WashClothsBasic} />
            <Route exact path="/kitchen-towel-basic" component={KitchenTowelBasic} />
            <Route exact path="/wash-cloths-fashion" component={WashClothsFashion} />
            <Route exact path="/kitchen-towel-fashion" component={KitchenTowelFashion} />
            <Route exact path="/kitchen-towel-oven-mitts and pot-holder" component={KitchenTowelOvenMitts} />
            {/* <Route  path="/kitchen-towel-pot-holders" component={KitchenTowelPotHolders} /> */}
            <Route exact path="/jersey-bed-linen" component={JerseyBedLinen} />
            <Route exact path="/hospitality-towel-whites" component={HospitalityTowelWhite} />
            <Route exact path="/hospitality-towel-dyed" component={HospitalityTowelDyed} />
            <Route exact path="/production-facility/warping-and-sizing" component={WarpingAndSizing} />
            <Route exact path="/production-facility/weaving" component={Weaving} />
            <Route exact path="/production-facility/dyeing" component={Dyeing} />
            <Route exact path="/production-facility/drying" component={Drying} />
            <Route exact path="/production-facility/stitching" component={Stitching} />
            <Route exact path="/production-facility" component={MianPage} />
            <Route exact path="/group-of-companies" component={GroupOfCompanies} />
            <Route exact path="/sustainability" component={Sustanibility} />
            <Route exact path="/video1" component={Video1} />
            <Route exact path="/video2" component={Video2} />
            <Route exact path="/video3" component={Video3} />
            <Route exact path="/video4" component={Video4} />
            <Route component={Error} />
            </Switch>
        </BrowserRouter>
    )
}

export default Rou