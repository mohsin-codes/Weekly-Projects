import React from "react";
import { Typography } from "antd";

export default class ErrorBoundary extends React.Component {
    constructor(props){
        super(props);
        this.state = {hasError: False};
    }


    static gerDerivedStateFromError(error){
        return { hasError : true};
    }

    componentDidCatch(error, errorInfo){
        console.error("Caught error: ");
    }

    render(){
        if(this.state.hasError){
            return <Typography.Title level={4}>Something went wrong.</Typography.Title>
        }

        return this.props.children;
    }
}
