// 模块功能：顶点缓冲区配置

// 顶点数据-正方形
const vertexDataSquare = [
    // 0.5,  0.5, 0.0,  // 右上
    //-0.5,  0.5, 0.0,  // 左上
    //-0.5, -0.5, 0.0,  // 左下
    // 0.5, -0.5, 0.0   // 右下
     0.5, 0.5, 0.0,
     -0.5, 0.5, 0.0,
     0.5, -0.5, 0.0,
     -0.5, -0.5, 0.0
];

// 函数功能：创建一个缓冲区来存储顶点数据
// 函数参数：gl WebGL2上下文环境
function createVertexBuffer(gl) {
    // 创建一个缓冲区
    let vertexBuffer = gl.createBuffer();
    // 将其绑定到数组缓冲区
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    // 将顶点数据加载进数组缓冲区
    gl.bufferData(gl.ARRAY_BUFFER,
        new Float32Array(vertexDataSquare), gl.STATIC_DRAW);
    return vertexBuffer;
}

export { createVertexBuffer };