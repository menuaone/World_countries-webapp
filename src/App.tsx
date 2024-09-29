import Header from './components/Header';
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { ErrorPage } from './pages/ErrorPage';
import { useState } from 'react';
import { Country } from './types';

function App() {
    const [countries, setCountries] = useState<Country[]>([]);

    return (
        <>
            <Header />
            <Main>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <HomePage
                                countries={countries}
                                setCountries={setCountries}
                            />
                        }
                    />
                    <Route
                        path='/country/:name'
                        element={<Details />}
                    />
                    <Route
                        path='*'
                        element={<ErrorPage />}
                    />
                </Routes>
            </Main>
        </>
    );
}

export default App;
