import "../styled/style.css";
import { Switch, Route, Link } from "react-router-dom";
import { HomePage } from "./homepageComponents/Homepage";
import { ProtectedRoute } from "./ProtectedRoute";
import { GetProfile } from "./Profile";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import { Availability } from "./Availability";
import { IndividualAvailability } from "./IndividualAvailability";
import { useHistory } from "react-router-dom";
import { AllBookingsFunction } from "./bookingsComponents/AllBookings";
import { CreateBooking } from "./bookingsComponents/CreateBooking";
import { CurrentBooking } from "./bookingsComponents/CurrentBooking";
import { CreateAddress } from "./CreateAddress";
import { UpdateProfile } from "./UpdateProfile";
import { UpdateAddress } from "./UpdateAddress";
import { AboutPage } from "./homepageComponents/About";
import { ServicesPage } from "./homepageComponents/Services";
import { Success } from "../components/bookingsComponents/Success";
import { Cancel } from "../components/bookingsComponents/Cancel";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { UpdateEmployee } from "./UpdateEmployee";

export const NavRouter = () => {
  const history = useHistory();

  function logout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("isEmployee");
    history.push("/login");
  }

  return (
    <>
      <Nav className="nav-bar" activeKey="1" justify>
        <Nav.Item>
          <Nav.Link eventKey="1" href="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title="About" id="nav-dropdown">
          <NavDropdown.Item eventKey="2.1">
            <Link class="dropdown-links" to="/about">
              About
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="2.2">
            <Link class="dropdown-links" to="/services">
              Services
            </Link>
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Bookings" id="nav-dropdown">
          <NavDropdown.Item eventKey="3.1">
            <Link class="dropdown-links" to="/bookings">
              Make a Booking
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="3.2">
            <Link class="dropdown-links" to="/bookings/current">
              View Current Bookings
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="3.3">
            <Link class="dropdown-links" to="/bookings/history">
              View Previous Bookings
            </Link>
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Item>
          <Nav.Link eventKey="4" href="/contact-us">
            Contact Us
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Profile" id="nav-dropdown">
          <NavDropdown.Item eventKey="5.1">
            <Link class="dropdown-links" to="/profile">
              View Profile
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="5.2">
            <Link class="dropdown-links" to="/create-address">
              Create Address
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="5.3">
            <Link class="dropdown-links" to="/" onClick={logout}>
              Logout
            </Link>
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Item>
          <Nav.Link eventKey="6" href="/login">
            Login
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/services" component={ServicesPage} />
        <ProtectedRoute exact path="/bookings" component={CreateBooking} />
        <ProtectedRoute
          exact
          path="/bookings/current"
          component={CurrentBooking}
        />
        <ProtectedRoute
          exact
          path="/bookings/history"
          component={AllBookingsFunction}
        />
        <Route exact path="/contact-us" component={HomePage} />
        <ProtectedRoute exact path="/profile" component={GetProfile} />
        <ProtectedRoute
          exact
          path="/update-profile"
          component={UpdateProfile}
        />
        <ProtectedRoute
          exact
          path="/create-address"
          component={CreateAddress}
        />
        <ProtectedRoute
          exact
          path="/update-address"
          component={UpdateAddress}
        />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <ProtectedRoute exact path="/availabilities" component={Availability} />
        <ProtectedRoute
          exact
          path="/availability/:id"
          component={IndividualAvailability}
        />
        <ProtectedRoute
          exact
          path="/update-availability"
          component={UpdateEmployee}
        />
        <Route exact path="/success" component={Success} />
        <Route exact path="/cancel" component={Cancel} />
        <Route exact path="/addresses/:id" />
      </Switch>
    </>
  );
};
