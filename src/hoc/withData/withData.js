import React from 'react';
import axios from 'axios';

const withData = WrappedComponent => uri =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: undefined,
        loading: false,
        error: false
      };
    }
    componentDidMount() {
      this.setState({ loading: true });
      axios
        .get(`${process.env.REACT_APP_API_BASE}${uri}`)
        .then(res => {
          this.setState({ data: res.data, loading: false });
        })
        .catch(err => {
          this.setState({ error: true, loading: false });
        });
    }
    render() {
      const { data, loading, error } = this.state;
      if (loading) return <div>loading</div>;
      if (error) return <div>err...</div>;
      if (data) return <WrappedComponent data={data} {...this.props} />;
      return null;
    }
  };

export default withData;
