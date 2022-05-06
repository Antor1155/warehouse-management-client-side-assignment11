export default function UiRouter() {
    return (
      <>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Data} />
          <Route path="/available-data" component={Data} />
          <Route path="/devices" component={Devices} />
          <Route path="/contacts" component={Contacts}/>
          <Route path="/chat" component={Chat}/>
        </Switch>
      </>
    );
  }