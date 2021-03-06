import React, { useContext, useState } from "react";
import { Button, Form, Select, Input, InputNumber } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { CreateProjectContext } from "../../pages/create-project";
import banner from "../../assets/create_project_banner.svg";

const SecondPage = () => {
  const { setCurrentPage, setForm } = useContext(CreateProjectContext);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const onSubmit = (values) => {
    setForm((prev) => {
      return {
        ...prev,
        ...values,
      };
    });
    setCurrentPage(3);
  };

  return (
    <div className="flex flex-col justify-center">
      <img src={banner} />
      <div className="w-2/5 mt-4 mb-10 justify-center flex flex-col m-auto">
        <Form onFinish={onSubmit} layout="vertical">
          <div className="flex flex-row">
            <div className="flex flex-col my-2 flex-1 mr-3">
              <Form.Item
                name="tokenName"
                label="TOKEN NAME"
                rules={[
                  {
                    required: true,
                    message: "Please enter your token name",
                  },
                  {
                    max: 10,
                    message: "Token name must be maximum 10 characters.",
                  },
                  {
                    whitespace: true,
                    message: "Token name must not has whitespace",
                  },
                ]}
              >
                <Input className="form-input" placeholder="(e.g. ENOUVO)" />
              </Form.Item>
            </div>
            <div className="flex flex-col my-2 flex-1 mx-3">
              <Form.Item
                name="pricePerToken"
                label="PRICE PER TOKEN"
                rules={[
                  {
                    required: true,
                    message: "Please enter your price per token",
                  },
                  {
                    pattern: /[.]{1}/,
                    message: "Please enter with the right format",
                  },
                ]}
              >
                <Input
                  type="number"
                  className="form-input"
                  step="any"
                  placeholder="(e.g. 10.00)"
                  suffix="FLOW"
                  style={{ fontWeight: "bold" }}
                  min={0}
                />
              </Form.Item>
            </div>
            <div className="flex flex-col my-2 flex-1 ml-3">
              <Form.Item
                name="totalAmountToRaise"
                label="NUMBER OF TOKENS"
                rules={[
                  {
                    required: true,
                    message: "Please upload your total amount to raise",
                  },
                ]}
              >
                <Input
                  type="number"
                  className="form-input"
                  step="any"
                  placeholder="(e.g. 1000)"
                  style={{ fontWeight: "bold" }}
                />
              </Form.Item>
            </div>
          </div>
          <div className="flex flex-col my-2 flex-1">
            <Form.Item
              name="percentageOfProfit"
              label="PROFIT SHARING PERCENTAGE"
              rules={[
                {
                  required: true,
                  message: "Please enter your percentage of profit",
                },
              ]}
            >
              <Input
                type="number"
                className="form-input font-bold"
                placeholder="(e.g. 10%)"
                suffix="%"
                style={{ fontWeight: "bold !important" }}
              />
            </Form.Item>
          </div>
          <div className="flex flex-row justify-between items-center mt-8">
            <Button
              type="primary"
              style={{ height: 46, display: "flex" }}
              className="flex-row items-center"
              htmlType="submit"
            >
              <span>Next</span>
              <ArrowRightOutlined />
            </Button>
            <div>
              <span className="text-blue-700 font-bold text-xl">2/</span>
              <span className="font-bold text-xl">3</span>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SecondPage;
