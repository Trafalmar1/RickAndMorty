import React from "react";
import PageTitle from "@UI/PageTitle";

type MyProps = {};

type MyState = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<MyProps, MyState> {
  state: MyState = {
    hasError: false,
  };

  componentDidCatch(error: Error, info: any) {
    this.setState({ hasError: true });
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <PageTitle text={"Has no matches"} />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
