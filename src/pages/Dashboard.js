import React from "react";
import Loading from "../components/Loading";
import Main from "../components/Dashboard";
import ApiContext, { Data } from "../components/containers/ApiContext";

const Dashboard = () => (
  <ApiContext>
    <Data.Consumer>
        {provider => (
            <Loading render={<Main/>} status={!provider.isLoading}/>
        )}
    </Data.Consumer>
  </ApiContext>
);

export default Dashboard;
