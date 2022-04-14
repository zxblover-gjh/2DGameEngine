// 模块功能：着色器配置

// 顶点着色器默认源码
function getVSCode() { return 'src/2DGameEngine/Shader/ShaderCode/vertexShaderCode.glsl'; }
// 片段着色器默认源码
function getFSCode() { return 'src/2DGameEngine/Shader/ShaderCode/fragmentShaderCode.glsl'; }

// 函数功能：创建着色器
// 函数参数：gl WebGL2上下文环境
// 函数参数：shaderType 着色器类型
// 函数参数：shaderCode 着色器源码
function createShader(gl, shaderType, shaderCodePath) {
    // 从文件读取源码
    let xmlReq = new XMLHttpRequest();
    xmlReq.open('GET', shaderCodePath, false);
    try {
        xmlReq.send();
    } catch (error) {
        throw new Error("Failed to load shader: " + shaderCodePath + " [Hint: you cannot double click index.html to run this project. " +
                "The index.html file must be loaded by a web-server.]");
    }
    let shaderCode = xmlReq.responseText;

    // 创建着色器
    let shader = gl.createShader(shaderType);
    // 导入着色器源码
    gl.shaderSource(shader, shaderCode);
    // 编译着色器
    gl.compileShader(shader);
    // 检查错误
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
    {
        if (shaderType == gl.VERTEX_SHADER)
        {
            throw new Error('顶点着色器编译出错：' +
            gl.getShaderInfoLog(shader));
        }
        else if (shaderType == gl.FRAGMENT_SHADER)
        {
            throw new Error('片段着色器编译出错：' +
            gl.getShaderInfoLog(shader));
        }
        return null;
    }
    return shader;
}

// 函数功能：创建着色器程序
// 函数参数：gl WebGL2上下文环境
// 函数参数：vertexShaderCode 顶点着色器源码
// 函数参数：fragmentShaderCode 片段着色器源码
function createShaderProgram(gl, vertexShaderCodePath = getVSCode(), fragmentShaderCodePath = getFSCode()) {
    // 创建着色器
    let vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderCodePath);
    let fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderCodePath);
    // 创建着色器程序
    let shaderProgram = gl.createProgram();
    // 导入着色器
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    // 链接着色器
    gl.linkProgram(shaderProgram);
    // 检查错误
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS))
    {
        throw new Error("着色器程序链接出错！");
    }
    return shaderProgram;
}

export { createShaderProgram };