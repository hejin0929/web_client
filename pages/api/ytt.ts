import { defineConfig } from "yapi-to-typescript";

export default defineConfig([
  {
    serverUrl: "http://localhost:8000/doc/doc.json", //swagger的地址，但是要注意的是必须是json地址
    typesOnly: false, //是否只生成接口请求内容和返回内容的 TypeSript 类型，是则请求文件和请求函数都不会生成。
    serverType: "swagger", //这里必须写，不然的话，默认是yapi的应该，无法生成swagger专属的文档
    target: "typescript", //要生成的目标代码类型。 默认为 typescript，若设为 javascript，会将生成的 .ts 文件转换为 .js + .d.ts 文件并删除原 .ts 文件。
    //支持生成 React Hooks 代码的相关配置。我用的vue，这里忽略
    reactHooks: {
      enabled: true,
    },
    prodEnvName: "production", //这里貌似和swagger无关
    outputFilePath: "./types.ts", //输出文件路径。
    requestFunctionFilePath: "./index.ts", //请求函数文件路径。
    // dataKey: "data",//如果接口响应的结果是 JSON 对象， 且我们想要的数据在该对象下， 那我们就可将 dataKey 设为我们想要的数据对应的键。
    projects: [
      {
        token: "", //你的接口要token就加一下，一般swagger界面打开的时候不用token吧
        //分类列表。
        categories: [
          {
            id: 0, //分类 ID，可以设置多个。设为 0 时表示全部分类。这里没啥特殊要求写0就行
            getRequestFunctionName(interfaceInfo, changeCase) {
              // // 以接口全路径生成请求函数名
              // return changeCase.camelCase(interfaceInfo.path);

              // 若生成的请求函数名存在语法关键词报错、或想通过某个关键词触发 IDE 自动引入提示，可考虑加前缀，如:
              // return changeCase.camelCase(`api_${interfaceInfo.path}`)

              //若生成的请求函数名有重复报错，可考虑将接口请求方式纳入生成条件，如:
              return changeCase.camelCase(
                `${interfaceInfo.method}_${interfaceInfo.path}`
              );
            },
          },
        ],
      },
    ],
  },
]);
