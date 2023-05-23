/* eslint-disable jsx-a11y/alt-text */
import { FC } from "react";
import styles from "./index.module.scss";
import { Image, Form, Input, Button, Steps, Col, Row, Result } from "antd";
import { useUsers } from "@/store";
import { LoadingOutlined } from "@ant-design/icons";

const Register: FC = () => {
  return (
    <div className={styles.register}>
      <div className={styles.center}>
        <h2 className={styles.title}>注册界面</h2>
        <div className={styles.logo}>
          <Image
            preview={false}
            src="https://img1.baidu.com/it/u=4000382501,1339962166&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313"
            width={150}
            height={80}
          />
        </div>

        <Steps
          style={{ width: 400, marginLeft: "180px", marginBottom: 20 }}
          current={0}
          items={[
            {
              status: "process",
              icon: <LoadingOutlined />,
              title: "填写表单注册",
            },
            {
              title: "注册完成",
            },
          ]}
        />

        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          style={{ maxWidth: 760 }}
        >
          <Row>
            <Col span={12}>
              <Form.Item
                label="账户名称"
                name="account"
                rules={[
                  { required: true, message: "Please input your account!" },
                  {
                    required: true,
                    min: 4,
                    message: "账户名称不能小于4位数",
                  },
                ]}
              >
                <Input maxLength={20} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="手机"
                name="phone"
                rules={[
                  { required: true, message: "Please input your phone!" },
                  {
                    required: true,
                    validator(rule, value, callback) {
                      if (value.length === 11 && !/^1[3-9]\d{9}$/.test(value)) {
                        callback("请输入正确的手机号");
                      }
                      callback();
                    },
                  },
                ]}
              >
                <Input maxLength={11} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                label="名字"
                name="name"
                rules={[
                  { required: true, message: "Please input your name!" },
                  {
                    required: true,
                    min: 4,
                    message: "名字不能小于4位数",
                  },
                ]}
              >
                <Input maxLength={20} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="密码"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                  {
                    max: 20,
                    min: 6,
                    message: "密码的长度需要在6 - 20位之间",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label="年龄" name="age">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="性别" name="sex">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label="邮箱" name="email">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="学校" name="school">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Col span={12}>
            <Form.Item label="地址" name="address">
              <Input />
            </Form.Item>
          </Col>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" style={{ width: 300 }}>
              注册
            </Button>
          </Form.Item>
        </Form>
        {/* <Result
          status="success"
          title="恭喜你注册完成"
          extra={[
            <Button type="primary" key="console">
              去登陆
            </Button>,
          ]}
        /> */}
      </div>
    </div>
  );
};

export default Register;
