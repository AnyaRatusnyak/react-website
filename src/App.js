import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import { initializeApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import Preloader from "./components/common/preloader/Preloader";
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <div className="container">
          <BrowserRouter>
            <div className="row">
              <div className="col-12">
                <HeaderContainer />
              </div>
            </div>
            <div className="row">
              <div className="col-4 + item2">
                <Navbar />
              </div>
              <div className="col-8 + item3">
                <Routes>
                  <Route
                    path="/profile/*"
                    element={
                      <React.Suspense fallback={<Preloader />}>
                        <ProfileContainer />
                      </React.Suspense>
                    }
                  >
                    <Route
                      path=":userId"
                      element={
                        <React.Suspense fallback={<Preloader />}>
                          <ProfileContainer />
                        </React.Suspense>
                      }
                    />
                  </Route>
                  <Route
                    path="/dialogs"
                    element={
                      <React.Suspense fallback={<Preloader />}>
                        {" "}
                        <DialogsContainer />
                      </React.Suspense>
                    }
                  />
                  <Route path="/music" element={<Music />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/friends" element={<Sidebar />} />
                  <Route path="/users" element={<UsersContainer />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </div>
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
export default connect(mapStateToProps, { initializeApp })(App);
