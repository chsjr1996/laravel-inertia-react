import React from "react";

export default function Welcome(props) {
    return (
        <div>
            <p>Hello from Welcome Inertia screen</p>
            <small>Laravel version {props.laravel_version}</small>
        </div>
    );
}
