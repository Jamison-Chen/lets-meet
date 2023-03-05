import styles from "./Main.module.scss";

import React from "react";

import { IRouter, withRouter } from "../../router";

interface Props extends IRouter {}

interface State {}

class Main extends React.Component<Props, State> {
    public state: State;
    public constructor(props: Props) {
        super(props);
        this.state = {};
        let header = new Headers();
        // header.append("if-modified-since", "Sat, 11 Feb 2023 09:12:00 GMT");
        let request_body = new URLSearchParams();
        request_body.append("message", "helloworld");
        fetch("http://127.0.0.1:8000/api/account/ping", {
            headers: header,
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    }
    public componentDidMount(): void {}
    public render(): React.ReactNode {
        return <div className={styles.main}></div>;
    }
}

export default withRouter(Main);
