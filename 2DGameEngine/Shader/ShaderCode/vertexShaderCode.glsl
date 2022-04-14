// 顶点着色器默认源码

// 传入顶点位置数据
attribute vec3 aVertexPosition;

void main(void) {
    gl_Position = vec4(aVertexPosition, 1.0);
}