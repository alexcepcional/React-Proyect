import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Category, Events, Home, Item, NotFound } from '../pages'
import { Footer, NavBar } from '../components'

export const PublicRouter = () => {

    return(
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/item/:id" element={<Item />}/>
                <Route exact path="/category/:id" element={<Category />}/>
                <Route exact path="/events" element={<Events />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </Router>
    )

}