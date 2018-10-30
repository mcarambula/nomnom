import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import SearchInput from '../Search/SearchInput';
import './Dashboard.scss';

const Dashboard = () => (
        <Fragment>
            <SearchInput />
            <div className='results'>
                There's no recipe yet.
            </div>
            <div className="add-recipe">
                <Link to='add' className='add'>Add a book</Link>
            </div>
        </Fragment>
)

export default Dashboard;
