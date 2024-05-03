"use client";

import React from "react";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import type Entity from "@ant-design/cssinjs/es/Cache";
import { useServerInsertedHTML } from "next/navigation";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import theme from "./themeConfig";

const StyledComponentsRegistry = ({ children }: React.PropsWithChildren) => {
    const cache = React.useMemo<Entity>(() => createCache(), []);
    useServerInsertedHTML(() => (
        <style
            id="antd"
            dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
        />
    ));
    return (
        <StyleProvider cache={cache}>
            {" "}
            <ConfigProvider theme={theme}>{children}</ConfigProvider>
        </StyleProvider>
    );
};

export default StyledComponentsRegistry;
