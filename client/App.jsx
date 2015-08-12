App = React.createClass({
  getInitialState() {
    return {};
  },
  render() {
    return (
      <div className="full height">
        <Navbar />
        <div className="main ui container">
          <Header />
          <LoginButtons />
          <MessageHistory />
          <Footer />
        </div>
      </div>
    );
  }
});
