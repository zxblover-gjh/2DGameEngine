// 模块功能：着色器

// 导入着色器模块
import * as shader from './shader.mjs';
// 导入缓冲区模块
import * as vBuffer from './vertexBuffer.mjs';

class Shader {
    constructor(gl) {
        // 着色器程序
        this.shaderProgram = shader.createShaderProgram(gl);
        // 顶点缓冲区
        this.vertexBuffer = vBuffer.createVertexBuffer(gl);
        // WebGL环境
        this.gl = gl;
    }

    // 函数功能：启用着色器并绑定缓冲区
    use() {
        // 启用着色器程序
        this.gl.useProgram(this.shaderProgram);
        // 绑定缓冲区
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuffer);
    }

    // 函数功能：设置着色器的顶点属性
    setVertexAttribute(vertexAttribID){
        this.use();
        // 获取顶点位置属性的引用
        let position = this.gl.getAttribLocation(this.shaderProgram, vertexAttribID);
        // 将数组缓冲区的数据导入顶点属性
        this.gl.vertexAttribPointer(position, 3, this.gl.FLOAT, false, 0, 0);
        // 激活顶点属性
        this.gl.enableVertexAttribArray(position);
    }
}

export { Shader };