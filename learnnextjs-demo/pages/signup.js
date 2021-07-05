import React, { useState } from 'react';
import MyLayout from '../components/MyLayout';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';
import Link from 'next/link'
const axios = require('axios');



const Signup = () => {
    const [id, setId] = useState("");
    const [nick, setNick] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);

    const Posts = () => {
        return {
            id: id,
            pw: password,
            nick: nick
        }
    }
    
    const onSubmit = e => {
        console.log('onsubmit!')
        e.preventDefault();
        if(password !== passwordCheck){
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true);
        }

        const data = {
            id: id,
            pw: password,
            nick: nick
        };

        axios({
            url: '/auth',
            type: 'POST',
            data: data,
            success: (res) => {
                console.log('success');
                console.log(res.msg);
            },
            error: (err) => {
                console.log("err.msg");
                console.log(err.msg);
            }
        }).then(
            console.log('123123123123123')
        )

        console.log({
            id,
            nick,
            password,
            passwordCheck,
            term
        });
    };

    const onChangeId = e => {
        setId(e.target.value);
    }

    const onChangeNick = e => {
        setNick(e.target.value);
    }

    const onChangePassword = e => {
        setPassword(e.target.value);
    }

    const onChangePasswordCheck = e => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    }

    const onChangeTerm = e => {
        setTermError(false);
        setTerm(e.target.checked);
    }


    return (
        <div>
            <Head>
                <title>Sign Up</title>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.25.3/antd.min.css"
                />
            </Head>
            <MyLayout>
                <Form style={{ padding: 10 }}>
                    <div>
                        <label htmlFor="user-id">아이디</label>
                        <br />
                        <Input name="user-id" value={id} required onChange={onChangeId} />
                    </div>
                    <div>
                        <label htmlFor="user-nuck">닉네임</label>
                        <br />
                        <Input
                            name="user-nick"
                            value={nick}
                            required
                            onChange={onChangeNick}
                        />
                    </div>
                    <div>
                        <label htmlFor="user-password">비밀번호</label>
                        <br />
                        <Input
                            name="user-pasword"
                            type="password"
                            value={password}
                            required
                            onChange={onChangePassword}
                        />
                    </div>
                    <div>
                        <label htmlFor="user-password-check">비밀번호확인</label>
                        <br />
                        <Input
                            name="user-pasword-check"
                            type="password"
                            value={passwordCheck}
                            required
                            onChange={onChangePasswordCheck}
                        />
                        {passwordError && (
                            <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>
                        )}
                    </div>
                    <div>
                        <Checkbox name="user-term" checkbox={term} onChange={onChangeTerm}>
                            성공을 향해 한발자씩 걸어나갈것을 동의합니다.
                        </Checkbox>
                        {termError && (
                            <div style={{ color: 'red' }}>약관에 동의를 하셔야 합니다.</div>
                        )}
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <Button onClick={onSubmit} type="primary" htmlType="submit">가입하기</Button>
                        {/* // button type="submit"하려면 htmlType="submit"라고해야함 */}
                    </div>
                </Form>
            </MyLayout>
        </div>
    )
}

export default Signup;