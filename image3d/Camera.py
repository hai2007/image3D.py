from basic_toolkit.math import matrix4


class Render:

    _matrix4 = False

    _options = {
        "proof": False,
        "size": 1  # 压缩空间的范围
    }

    _proportion = 1

    def __init__(self, width, height, options):

        self._proportion = width/height

        for key in options:
            self._options[key] = options[key]

        #  摄像头位置改变和物体位置改变矩阵初始化
        self._matrix4 = matrix4.Render()

        zOne = -1 if self._options['proof'] else 1

        # 应用压缩空间矩阵
        self._matrix4.multiply([
            1 / self._options['size'], 0, 0, 0,
            0, 1 / self._options['size'], 0, 0,
            0, 0, zOne / self._options['size'], 0,
            0, 0, 0, 1
        ])

    def setProportion(self, _proportion):
        self._proportion = _proportion
        return self

    '''
        摄像头位置改变
    '''

    # 旋转

    def rotateEye(self, deg, a1, b1, c1, a2, b2, c2):
        self._matrix4.rotate(-deg, a1, b1, c1, a2, b2, c2)
        return self

    # 移动

    def moveEye(self, dis, a, b, c):
        self._matrix4.move(-dis, a, b, c)
        return self

    '''
        物体位置改变
    '''

    # 旋转

    def rotateBody(self, deg, a1, b1, c1, a2, b2, c2):
        self._matrix4.rotate(deg, a1, b1, c1, a2, b2, c2)
        return self

    # 移动

    def moveBody(self, dis, a, b, c):
        self._matrix4.move(dis, a, b, c)
        return self

    # 缩放

    def scaleBody(self, xTimes, yTimes, zTimes, cx, cy, cz):
        self._matrix4.scale(xTimes, yTimes, zTimes, cx, cy, cz)
        return self

    # 获取当前的变换矩阵值

    def value(self):

        xProportion = 1
        yProportion = 1

        if (self._proportion > 1):
            yProportion = self._proportion
        else:
            xProportion = 1 / self._proportion

        zProportion = xProportion if xProportion > yProportion else yProportion

        return matrix4.Render(self._matrix4.value()).multiply([
            xProportion, 0, 0, 0,
            0, yProportion, 0, 0,
            0, 0, zProportion, 0,
            0, 0, 0, 1
        ]).value()
