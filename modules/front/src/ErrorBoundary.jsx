import React from "react";
import LinklessHeader from "./components/organisms/LinklessHeader";

class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        //logErrorToMyService(error, errorInfo);
        console.log('logErrorToMyService etc...');
    }

    render() {
        if (this.state.hasError) {
            return (
                <React.Fragment>
                    <LinklessHeader />
                    <div className="uk-container">
                        <u><i><h2>Error&nbsp;Occurred...</h2></i></u>
                        <div className="uk-grid">
                            <div className="uk-with-1-1">
                                <p>
                                    予期せぬエラーが発生しました.<br />
                                    <a href="/">こちら</a> から復帰できます.<br />
                                    <br />
                                    継続的にエラーが発生する場合は、管理者へお問い合わせください.
                                </p>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;