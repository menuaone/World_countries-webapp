import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { IoArrowBack } from 'react-icons/io5';
import { searchByCountry } from '../config';
import { Button } from '../components/Button';
import { Info } from '../components/Info';

export const Details = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const [country, setCountry] = useState(null);

    useEffect(() => {
        axios.get(searchByCountry(name)).then(({ data }) => {
            setCountry(data[0]);
        });
    }, [name]);

    const pageBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <Button onClick={pageBack}>
                <IoArrowBack />
                Go Back
            </Button>
            {country && <Info {...country} />}
        </div>
    );
};
