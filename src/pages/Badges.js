import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import api from '../api'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList';
import PageError from '../components/PageError';
import PageLoading from '../components/PageLoading';
import MiniLoader from '../components/MiniLoader';

class Badges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: undefined,
    };
  };

  componentDidMount() {
    this.fetchData()

    this.intervalId = setInterval(this.fetchData, 5000);
  };

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    
    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data });
    } catch(error) {
      this.setState({ loading: false, error });
    };
  }

  componentWillUnmount() {
    // clearTimeout(this.timeoutId);
    clearInterval(this.intervalId);
  }

  render() {
    if(this.state.loading && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return(
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges__conf-logo" src={confLogo} alt="Conf Logo" />
            </div>
          </div>

          <div className="Badges__container">
            <div className="Badges__buttons">
              <Link className="btn btn-primary" to="/badges/new">
                New Badge
              </Link>
            </div>

            <div className="Badges__list">
              <div className="Badges__container">
                <BadgesList badges={this.state.data} />
              </div>
            </div>

            {this.state.loading && <MiniLoader />}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
