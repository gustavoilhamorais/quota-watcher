import React, {useState, useEffect} from "react";

const Loading = ({ loading }) => {
  const [load, setLoad] = useState(0);

  const loader = () => {
    for (let index = 0; index < 100; index++) {
      setInterval(() => {
        setLoad(index);
      }, 1000);
      clearTimeout();
    }
  }

  useEffect(() => {
    if(loading) loader();
  }, []);

  return (
    <div className="progress">
      <div
        className="progress-bar progress-bar-striped progress-bar-animated"
        role="progressbar"
        aria-valuenow={load}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{ width: "100%" }}
      ></div>
    </div>
  );
};

export default Loading;
