import {
    Button,
    Col,
    Input,
    Row,
} from 'antd';
import React, { useState } from 'react';

export interface SignInComponentProps {
    loading: boolean;
    onSubmit: (email: string, password: string) => void;
    error: string | null;
}

export const SignInComponent = (props: SignInComponentProps) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <Row
            type="flex"
            justify="center"
            align="top"
        >
            <Col
                span={6}
            >
                <Row>
                    <Input
                        placeholder="Enter your email address"
                        onChange={event => setEmail(event.target.value)}
                    />
                </Row>
                <Row>
                    <Input.Password
                        placeholder="Enter your password"
                        onChange={event => setPassword(event.target.value)}
                    />
                </Row>
                <Row>
                    <Button
                        type="primary"
                        loading={props.loading}
                        onClick={() => props.onSubmit(email, password)}
                    >
                        Sign in
                    </Button>
                </Row>
            </Col>
        </Row>
    );
};
