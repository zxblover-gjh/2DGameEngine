// 模块功能：初始化WebGL2

// 函数功能：初始化WebGL2，并返回WebGL2上下文环境
// 函数参数：htmlCanvasID 对应 Canvas 的 ID
function initWebGL(htmlCanvasID) {
    let canvas = document.getElementById(htmlCanvasID);

    let gl = canvas.getContext('webgl2');
    if (!gl)
    {
        alert('获取WebGL2环境失败！');
        return null;
    }

    return gl;
}

export { initWebGL };