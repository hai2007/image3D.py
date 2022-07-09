#!/usr/bin/python3

from setuptools import setup

setup(
    name='image3d',
    version='0.1.0',
    description='在python中基于OpenGL封装的三维可视化库',
    author='hai2007',
    author_email='2501482523@qq.com',
    packages=['image3d'],
    url='https://github.com/hai2007/image3D.py',
    license='MIT',
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent"
    ],
     install_requires=[
        'basic-toolkit>=0.4.3'
    ]
)
