// 模块功能：从此文件获取游戏引擎的所有功能
// 导入初始化模块 InitWebGL
import * as Init from './InitWebGL/initWebGL.mjs';
// 导入着色器模块
import { Shader } from './Shader/main.mjs';

// 1- InitWebGL
// 函数功能：初始化WebGL2，并返回WebGL2上下文环境
// 函数参数：htmlCanvasID 对应 Canvas 的 ID
// 函数原型：Init.initWebGL(htmlCanvasID)

// 2- Shader
// 类：Shader
// 函数功能：启用着色器并绑定缓冲区
// 函数原型：Shader.use()

// 函数功能：设置着色器的顶点属性
// 函数参数：vertexAttribID 顶点属性的名称
// 函数原型：Shader.setVertexAttribute(vertexAttribID)

export { Init, Shader }