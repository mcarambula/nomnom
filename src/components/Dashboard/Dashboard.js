import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRecipes } from '../../api/api';
import SearchInput from '../Search/SearchInput';
import { handleInitialData } from '../../actions/shared';
import './Dashboard.scss';

class Dashboard extends Component {
    componentDidMount(){
        this.props.handleInitialData();
    }
    render() {
        const { loading } = this.props;
        return (
            <Fragment>
                <SearchInput />
                <div className='results'>
                    { loading
                        ? <div>Loading ... </div>
                        : <div>There's no recipe yet.</div>
                    }
                </div>
                <div className="add-recipe">
                    <Link to='add' className='add'>Add a book</Link>
                </div>
            </Fragment>
        )
    }
}

const mapDispatchToProps = { handleInitialData };

function mapStateToProps({ recipes }){
    return {
        loading: recipes === null
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
